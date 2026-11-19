#!/usr/bin/env python3
"""Regenerate the calculator .part files from the latest MEBoards_*.html.

Usage (run from anywhere):
  python3 reference/calculator/extract.py            # write parts + VERSION next to this script
  python3 reference/calculator/extract.py --check    # do not write; list parts that differ from the committed ones (exit 1 if any)
  python3 reference/calculator/extract.py --src "path/to/MEBoards_ ....html"   # use a specific source file

Every part is cut from the app file with start/end regex anchors (no line numbers), so it survives line shifts.
If an anchor is not found the script stops with a clear message: fix the ANCHORS table below, nothing is written.
Source of truth is only read, never modified.
"""
import re, sys, os, glob, hashlib, difflib, datetime

HERE = os.path.dirname(os.path.abspath(__file__))
REPO = os.path.abspath(os.path.join(HERE, '..', '..'))

def vkey(p):
    m = re.search(r'v([\d.]+)\.html$', p)
    return [int(x) for x in m.group(1).split('.')] if m else [0]

def find_src(argv):
    if '--src' in argv:
        return argv[argv.index('--src') + 1]
    files = glob.glob(os.path.join(REPO, 'MEBoards_*.html'))
    if not files:
        sys.exit('No MEBoards_*.html found in ' + REPO)
    return max(files, key=vkey)

# name: (start regex, end regex or None, end_inclusive, "drop line" regex or None, description)
# The end regex is searched from the line AFTER the start line. end_inclusive=False stops before the end line.
ANCHORS = [
    ('calculator-core.html.part',
     r'^<script type="text/plain" id="calc-float-src">', r'^</script>\s*$', True, None,
     'The standalone calculator document (CSS, keypad photo skins, engine). Loaded into an iframe via srcdoc.'),
    ('calc-lcd-engine.js.part',
     r'^  /\* Calculator display: <div class="calc-lcd"', r'^  /\* Hint bubble above a calculator display', False, None,
     'Parent-side dot-matrix LCD renderer for .calc-lcd[data-expr] boxes inside solutions (calcLcdEngine, calcLcdFit, calcLcd).'),
    ('calc-hint-bubble.js.part',
     r'^  /\* Hint bubble above a calculator display', r'^  \}\)\(\);', True, None,
     'Chat-bubble hint "Double-click me to use this on the calculator".'),
    ('calc-floating-window.js.part',
     r'^/\* Floating calculator: a small toggle button', r'^  \}\)\(\);', True, None,
     'Toggle button, draggable window, skin switch, open/close animation, postMessage bridge, dblclick-to-load.'),
    ('calc-rail.js.part',
     r'^  /\* Calculator display rail:', r'^  \}\)\(\);', True, None,
     'Right-rail docking of calculator displays (ME-specific RAILS list of view ids; optional).'),
    ('calc.css.part',
     r'^  /\* calculator display \(dot-matrix LCD\) shown in solutions', r'^  #calc-toggle\[aria-pressed="true"\]', True,
     r'\.ph-diagram|\[data-ph\]|\.ph-glow',
     'All calculator CSS (LCD box, hint bubble, calc-pair/side, rail, window, toggle, animations). Unrelated .ph-* diagram lines that sit in the middle are dropped.'),
]

def cut(lines, start_re, end_re, incl, drop_re, name):
    s = next((i for i, l in enumerate(lines) if re.search(start_re, l)), None)
    if s is None:
        sys.exit('[%s] start anchor not found: %s' % (name, start_re))
    e = next((i for i in range(s + 1, len(lines)) if re.search(end_re, lines[i])), None)
    if e is None:
        sys.exit('[%s] end anchor not found: %s' % (name, end_re))
    end = e + 1 if incl else e
    seg = lines[s:end]
    dropped = 0
    if drop_re:
        keep = [l for l in seg if not re.search(drop_re, l)]
        dropped = len(seg) - len(keep); seg = keep
    return seg, s + 1, end, dropped

def hooks(lines):
    """Informational: where the rest of the app calls into the calculator."""
    out = ['// Informational only (not code to paste as one file): the places in the app that call the calculator code.', '']
    for i, l in enumerate(lines):
        if re.search(r'\bcalcLcd\(|calcDockUpdate\(?|function gammaize', l) and not re.search(r'^\s*(function calcLcd\b|window\.calcDockUpdate = )', l):
            lo, hi = max(0, i - 2), min(len(lines), i + 3)
            out.append('// --- source line %d ---' % (i + 1))
            out += [x for x in lines[lo:hi]]
            out.append('')
    return out

def main():
    argv = sys.argv[1:]
    src = find_src(argv)
    text = open(src, encoding='utf-8').read()
    lines = text.split('\n')
    results = {}; meta = []
    for name, s_re, e_re, incl, drop, desc in ANCHORS:
        seg, a, b, dropped = cut(lines, s_re, e_re, incl, drop, name)
        results[name] = '\n'.join(seg) + '\n'
        meta.append((name, a, b, dropped, desc))
    results['hooks.txt'] = '\n'.join(hooks(lines)) + '\n'
    ver = re.search(r'v(\d+(?:\.\d+)+)\.html$', src)
    ver = ver.group(1) if ver else 'unknown'
    changed = []
    for name, body in results.items():
        p = os.path.join(HERE, name)
        old = open(p, encoding='utf-8').read() if os.path.exists(p) else None
        if old != body:
            changed.append(name)
            if '--check' in argv and old is not None:
                for d in list(difflib.unified_diff(old.split('\n'), body.split('\n'), 'committed/' + name, 'latest/' + name, lineterm='', n=0))[:40]:
                    print(d[:200])
    stamp = ['source_file: ' + os.path.basename(src), 'source_version: ' + ver,
             'generated: ' + datetime.date.today().isoformat(), '', '# part | source lines (in that file) | sha256 (first 12) | bytes']
    for name, a, b, dropped, desc in meta:
        stamp.append('%s | %d-%d%s | %s | %d' % (name, a, b, (' (%d unrelated lines dropped)' % dropped) if dropped else '',
                     hashlib.sha256(results[name].encode()).hexdigest()[:12], len(results[name].encode())))
    stamp.append('hooks.txt | scattered | %s | %d' % (hashlib.sha256(results['hooks.txt'].encode()).hexdigest()[:12], len(results['hooks.txt'].encode())))
    if '--check' in argv:
        print('source:', os.path.basename(src))
        print('parts that differ from the committed ones:' if changed else 'all parts identical to the committed ones')
        for c in changed: print('  -', c)
        sys.exit(1 if changed else 0)
    for name, body in results.items():
        open(os.path.join(HERE, name), 'w', encoding='utf-8', newline='\n').write(body)
    open(os.path.join(HERE, 'VERSION'), 'w', encoding='utf-8').write('\n'.join(stamp) + '\n')
    print('source:', os.path.basename(src), '(v%s)' % ver)
    for name, a, b, dropped, desc in meta:
        print('  %-30s lines %d-%d  %d bytes' % (name, a, b, len(results[name].encode())))
    print('changed:', ', '.join(changed) if changed else 'nothing (identical)')
main()
