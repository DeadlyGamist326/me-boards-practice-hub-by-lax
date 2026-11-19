# "Made by LAX" credit and LAX logo: verbatim extract + sync path (reference only)

Copied unchanged from the latest `MEBoards_*.html` (see `VERSION` for file, version, line ranges and checksums). Nothing here is wired into the app, and nothing is user-visible or part of the changelog. `preview.png` / `preview.html` show how it looks (desktop and phone), built only from these parts.

## How it looks

- **Logo** = a PNG image, not text: gold (#d4af37) serif "LAX" with the A tucked against the L and the X narrowed to match the A. Class `.lax-img`. Embedded as base64, so it looks the same on every device (no font needed). Square 192x192 version is the tab icon.
- **Sticky bar `.made-by-credit`** (every screen except Home): white 96% + blur, 1px bottom border, z-index 60. Top row: view title (the view's `<h1>`, moved in by JS) on the left, "Made by [logo]" on the right in gold Cambria/Georgia 22px (15px on phones), logo 0.95em high. Second full-width row: the Practice-by-formula filter (moved in by JS).
- **Home**: sticky bar hidden (`body.on-home`), instead a centred `.home-credit` line "Made by [logo]" at 28px with a 1.5em logo, above the page title.
- **Access gate card** reuses the same logo (`gate-logo`, 2.2em) via `logoEl()`.
- **Quiz top bar** (`.quiz-topbar`, back/pause/timer) sticks directly under the bar at `top: var(--credit-h)`; `--credit-h` is measured by JS, never a fixed px.

## Behaviours attached to the logo (any `.lax-img`)

| Gesture | Effect | Part | For CE? |
|---|---|---|---|
| 1 tap (not on Home) | red 6px bar at top drains over 2 s, then goes Home; tap again to cancel; 5 taps within 1.5 s cancels too | `logo-tap-home.js.part` | yes, calls `showView('view-home')`: rename to CE's function |
| 5 quick taps | opens every Full solution (last hint) on the open screen | `logo-5tap-solutions.js.part` | ME-specific, probably skip |
| 10 quick taps | hidden admin login | `logo-10tap-admin.js.part` | ADMIN ONLY, needs the access system, never mention to students |

CSS `touch-action: manipulation; user-select: none; -webkit-user-drag: none` on `.lax-img` keeps fast taps from zooming or selecting.

## Files and where they go

| Part | Goes where | Notes |
|---|---|---|
| `head-icons.html.part` | inside `<head>` | favicon + apple-touch-icon (192x192 PNG, base64). Replace the base64 with the CE mark if CE has its own |
| `body-tag.html.part` | the `<body>` tag | `class="on-home"` |
| `credit-bar.html.part` | first element in `<body>` | contains the logo base64 (`assets/header-logo.png`, 376x231) |
| `home-credit.html.part` | top of the home view, above its `<h1>` | same logo base64 again |
| `branding.css.part` | page `<style>`, 3 numbered sections: (1) add `--credit-h: 48px;` inside `:root`, (2) desktop rules, (3) put the phone block as is (it already carries its own `@media (max-width: 480px)`) | needs CSS vars `--line`, `--ink` (also `--sub` for the quiz bar) |
| `header-slots.js.part` | page script | `syncHeaderContext(id, el)` must be called from CE's `showView`; `updateCreditBarHeight` runs on load/resize |
| `logo-tap-home.js.part` | page script | see table |
| `gate-logo.js.part` | only if CE reuses the access gate | |

The bar needs the page structure: `<div id="app-content">` with views `<div class="view">`, a home view id `view-home`, each view's `<h1>` and optional `.topic-filter-wrap`.

## What to change for the CE site (look at the whole list)

1. **Text**: "Made by" in `credit-bar.html.part` and `home-credit.html.part` (both). Keep as is if CE is also by LAX.
2. **Logo image**: both parts embed the PNG as a `data:` URI. To keep one copy instead, save `assets/header-logo.png` (or the project file `/mnt/project-files/logo/LAX_logo.png`, 415x272, original colours) on the CE site and use `<img class="lax-img" src="logo/LAX_logo.png">`. Note `gate-logo.js.part` copies the bar logo's `src`, so any path works. Tab icon: `assets/favicon-192.png` or the 1024 square `logo/LAX_logo_1x1_1024.png`.
3. **Links**: none. The logo has no link; its only actions are the taps above.
4. **Colours/fonts**: gold `#d4af37`, Cambria/Georgia/"Times New Roman" in `.made-by-credit` and `.home-credit`; bar background `rgba(255,255,255,0.96)`. Change here if CE has a dark theme.
5. **Home view id** `view-home`, `showView`, `.view`, `#app-content`, `home-version` span: map to CE names (they appear in `header-slots.js.part`, `logo-tap-home.js.part`, `body-tag.html.part`).
6. **Admin tap**: only carry `logo-10tap-admin.js.part` together with the access system (see `reference/me-access/`).

## Sync path: carrying ME branding updates to CE

```
python3 reference/branding/extract.py --check   # lists parts that differ from the committed ones, with a short diff
python3 reference/branding/extract.py           # rewrites parts, assets/ and VERSION from the highest MEBoards_*.html
git diff --stat reference/branding
```

Then on CE replace only the parts whose checksum in `VERSION` changed. The script cuts by regex anchors (no line numbers). If an anchor stops matching (selector renamed, comment reworded), it stops with the anchor name; fix `build()` in `extract.py`. Mirror copy: `/mnt/project-files/reference/branding/`.

## Source places in v1.4.19.0 (also in `VERSION`)

Head icons 7-8; CSS vars 1897 and 3194; bar CSS 3229-3438; body tag 3680; bar HTML 3698-3704; home credit 3710; logo tap scripts 1608-1646; header slots JS 5766-5817; gate logo 117308-117311; admin tap 117583-117591. Another copy of the 192px mark exists only as the favicon; `GAM_PNG` (line 1274) is the gamma symbol, not branding.
