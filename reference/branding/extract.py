#!/usr/bin/env python3
"""Regenerate the branding ("Made by LAX" bar, LAX logo) parts from the latest MEBoards_*.html.

  python3 reference/branding/extract.py            # write parts, assets, VERSION
  python3 reference/branding/extract.py --check    # list parts that differ from committed ones (exit 1 if any)
  python3 reference/branding/extract.py --src "path/to/MEBoards_ ....html"

Anchors are regexes (no line numbers). The app file is only read.
"""
import re, sys, os, glob, hashlib, base64, difflib, datetime

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.abspath(os.path.join(HERE, '..', '..'))

def vkey(p):
    m = re.search(r'v([\d.]+)\.html$', p)
    return [int(x) for x in m.group(1).split('.')] if m else [0]

def find_src(argv):
    if '--src' in argv: return argv[argv.index('--src') + 1]
    files = glob.glob(os.path.join(REPO, 'MEBoards_*.html'))
    if not files: sys.exit('No MEBoards_*.html in ' + REPO)
    return max(files, key=vkey)

def line_idx(lines, rx, start=0):
    for i in range(start, len(lines)):
        if re.search(rx, lines[i]): return i
    sys.exit('anchor not found: ' + rx)

def span(lines, s_rx, e_rx, incl=True, start=0):
    s = line_idx(lines, s_rx, start); e = line_idx(lines, e_rx, s + 1)
    return lines[s:e + (1 if incl else 0)], s + 1, e + (1 if incl else 0)

def css_rules(lines, selectors, in_media=None):
    """Every top-level-or-media CSS rule whose selector text matches one of `selectors` (regex list). Brace-matched, so nested rules are kept whole."""
    out, ranges = [], []
    i = 0
    style_end = line_idx(lines, r'^\s*</style>')
    while i < style_end:
        l = lines[i]
        if re.search(r'^\s*[^/\s@][^{]*\{\s*$|^\s*[^/\s@][^{}]*\{.*\}\s*$', l) and any(re.search(s, l.split('{')[0]) for s in selectors):
            j, depth = i, 0
            while True:
                depth += lines[j].count('{') - lines[j].count('}')
                if depth <= 0: break
                j += 1
            out += lines[i:j + 1]; ranges.append((i + 1, j + 1)); i = j + 1; continue
        i += 1
    return out, ranges

def build(lines):
    P = {}  # name -> (text, "source lines", description)
    def put(name, seg, a, b, desc):
        P[name] = ('\n'.join(seg) + '\n', '%d-%d' % (a, b), desc)
    # 1. head icons
    seg = [l for l in lines[:40] if re.search(r'<link rel="(icon|apple-touch-icon)"', l)]
    a = line_idx(lines, r'<link rel="icon"') + 1
    put('head-icons.html.part', seg, a, a + len(seg) - 1, 'Browser-tab icon and apple-touch-icon (base64 PNG, 192x192 square LAX mark).')
    # 2. sticky bar
    seg, a, b = span(lines, r'^<div class="made-by-credit">', r'^</div>\s*$')
    put('credit-bar.html.part', seg, a, b, 'Sticky "Made by <logo>" bar. Title slot (left) and filter slot (full row below) are filled by JS.')
    # 3. home credit line
    i = line_idx(lines, r'<div class="home-credit">')
    put('home-credit.html.part', [lines[i]], i + 1, i + 1, 'Big "Made by <logo>" line at the top of the home page (the sticky bar is hidden on home).')
    # 4. body tag
    i = line_idx(lines, r'^<body class="on-home">')
    put('body-tag.html.part', [lines[i]], i + 1, i + 1, 'Body starts with class on-home (hides the sticky bar until JS runs).')
    # 5. css
    rules, rng = css_rules(lines, [r'\.made-by-credit', r'\.credit-top-row', r'\.header-title-slot', r'\.header-filter-slot', r'\.lax-brand', r'\.lax-img', r'\.home-credit', r'\.gate-card \.gate-logo', r'body\.on-home'])
    root = [lines[line_idx(lines, r'^\s*--credit-h: 48px;')]]
    m480 = [lines[line_idx(lines, r'^\s*:root \{ --credit-h: 32px; \}')]]
    # rules before the desktop .made-by-credit block (the one with position: sticky) sit inside @media (max-width: 480px)
    cut_at = next(a for a, b in rng if 'position: sticky;' in lines[a])
    mob = [r for r in rng if r[0] < cut_at]
    mob_lines = [l for a, b in mob for l in lines[a - 1:b]]
    desk_lines = [l for a, b in rng if a >= cut_at for l in lines[a - 1:b]]
    seg = ['/* 1. inside the existing :root { ... } block */'] + root + ['', '/* 2. desktop rules */'] + desk_lines + ['', '/* 3. phone overrides: wrap in @media (max-width: 480px) { ... } */', '@media (max-width: 480px) {'] + m480 + mob_lines + ['}']
    put('branding.css.part', seg, rng[0][0], rng[-1][1], 'All CSS that styles the bar, logo, home credit, gate logo, tap protection. Includes mobile (480px) overrides. Listed in source order.')
    # 6. header JS
    seg, a, b = span(lines, r'^// Moves the current view\'s <h1> title', r'^updateCreditBarHeight\(\);')
    put('header-slots.js.part', seg, a, b, 'syncHeaderContext (moves view h1 + filter into the bar, toggles body.on-home) and updateCreditBarHeight (--credit-h).')
    # 7. taps
    seg, a, b = span(lines, r'^/\* Single tap on the LAX logo: a timer bar', r'^\}\)\(\);')
    put('logo-tap-home.js.part', seg, a, b, 'One tap on the logo: red 2 s timer bar, then Home; tap again to cancel.')
    seg, a, b = span(lines, r'^\s*/\* Five quick taps on the LAX logo open every Full solution', r'^\}\)\(\);')
    put('logo-5tap-solutions.js.part', seg, a, b, 'ME-only: 5 quick taps open every Full solution. Probably not wanted on CE.')
    i = line_idx(lines, r'hidden admin entry: 10 consecutive taps')
    seg, a, b = span(lines, r'hidden admin entry: 10 consecutive taps', r'^\s*\}\);', start=i)
    put('logo-10tap-admin.js.part', seg, a, b, 'Admin-only (access system): 10 taps open the admin login. Do NOT show to students; only for a CE site that reuses the access/admin system.')
    seg, a, b = span(lines, r'^\s*function logoEl\(\)', r'^\s*\}\s*$')
    put('gate-logo.js.part', seg, a, b, 'Access gate card re-uses the bar logo src as <img class="lax-img gate-logo">.')
    return P

def assets(lines):
    out = {}
    for name, ln_rx in (('header-logo.png', r'<span class="lax-brand">'), ('favicon-192.png', r'<link rel="icon"')):
        l = lines[line_idx(lines, ln_rx)]
        m = re.search(r'data:image/png;base64,([A-Za-z0-9+/=]+)', l)
        out[name] = base64.b64decode(m.group(1))
    return out

def main():
    argv = sys.argv[1:]
    src = find_src(argv)
    lines = open(src, encoding='utf-8').read().split('\n')
    P = build(lines); A = assets(lines)
    ver = re.search(r'v(\d+(?:\.\d+)+)\.html$', src); ver = ver.group(1) if ver else 'unknown'
    changed = []
    for n, (t, _, _) in P.items():
        p = os.path.join(HERE, n)
        old = open(p, encoding='utf-8').read() if os.path.exists(p) else None
        if old != t:
            changed.append(n)
            if '--check' in argv and old is not None:
                for d in list(difflib.unified_diff(old.split('\n'), t.split('\n'), 'committed/' + n, 'latest/' + n, lineterm='', n=0))[:30]: print(d[:200])
    for n, b in A.items():
        p = os.path.join(HERE, 'assets', n)
        if not os.path.exists(p) or open(p, 'rb').read() != b: changed.append('assets/' + n)
    stamp = ['source_file: ' + os.path.basename(src), 'source_version: ' + ver, 'generated: ' + datetime.date.today().isoformat(), '', '# part | source lines | sha256 (first 12) | bytes']
    for n, (t, r, d) in P.items(): stamp.append('%s | %s | %s | %d' % (n, r, hashlib.sha256(t.encode()).hexdigest()[:12], len(t.encode())))
    for n, b in A.items(): stamp.append('assets/%s | (decoded from base64 in the file) | %s | %d' % (n, hashlib.sha256(b).hexdigest()[:12], len(b)))
    if '--check' in argv:
        print('source:', os.path.basename(src)); print('parts that differ:' if changed else 'all identical')
        for c in changed: print('  -', c)
        sys.exit(1 if changed else 0)
    for n, (t, _, _) in P.items(): open(os.path.join(HERE, n), 'w', encoding='utf-8', newline='\n').write(t)
    for n, b in A.items(): open(os.path.join(HERE, 'assets', n), 'wb').write(b)
    open(os.path.join(HERE, 'VERSION'), 'w', encoding='utf-8').write('\n'.join(stamp) + '\n')
    print('source:', os.path.basename(src), '(v%s)' % ver)
    for n, (t, r, d) in P.items(): print('  %-28s lines %-12s %d bytes' % (n, r, len(t)))
    print('changed:', ', '.join(changed) if changed else 'nothing')
main()
