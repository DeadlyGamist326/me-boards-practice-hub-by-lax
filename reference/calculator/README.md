# ME calculator: verbatim extract + sync path (reference only)

Copied unchanged from the latest `MEBoards_*.html` (see `VERSION` for the exact file, version and per-part checksums).
Nothing here is wired into the app. Nothing here is user-visible or part of the changelog.

## What the calculator is

An emulation of a Casio fx-570/991-style scientific calculator (the title bar says "Canon F-789SGA", two photo skins: black TBK and white), drawn by LAX's own dot-matrix display code, not a library.
It has three layers:

1. **Standalone calculator** (`calculator-core.html.part`): a complete HTML document stored inside `<script type="text/plain" id="calc-float-src">`. It contains its own CSS, the two keypad photos as base64 JPEG (`.sk1`, `.sk2`, 785x1053 px with a hit box on every key, `KEYS`/`MAP`), the dot-matrix glyph tables (`G` 5x9, `GS` 5x6), the 16x2 LCD layout engine (standing fractions, roots, n-th roots, exponents, abs bars, scientific notation, cursor, drag-selection), and the logic: Shift/Alpha, `=`, Ans, history (Up recalls), `STO` into A-F, X, Y, `CALC` (asks A? B? ...), **Shift+CALC = Solve** for an equation with X and one `=`, MODE menus (COMP, CPLX, STAT, BASE, EQN, TABLE, MATX, VCTR) and APPS menus are drawn, but many keys only say "<name> has no function yet" (`noFuncMsg`). It talks to the page only through `postMessage`.
2. **Floating window** (`calc-floating-window.js.part`): a round toggle button `#calc-toggle` (bottom right), a draggable `.calc-win` that hosts the iframe (`srcdoc` = the text of `#calc-float-src`), skin button, minimise button, open/close fade animation, keypad-as-anchor positioning, snap back on screen, double-click on any `.calc-lcd[data-expr]` loads that equation and presses `=` (Shift+Solve if it has X).
3. **Solution displays** (optional, only needed if CE shows calculator steps inside solutions): `calc-lcd-engine.js.part` draws `.calc-lcd[data-expr][data-ans]` boxes as dot-matrix canvases, `calc-hint-bubble.js.part` shows the "Double-click me to use this on the calculator" bubble, `calc-rail.js.part` docks the displays to the right of the problems column (its `RAILS` list is ME view ids: rewrite for CE), `calc.css.part` is all the CSS.

## Files and where they go

| Part | Source (v1.4.19.0) | Goes where | Needed for a plain calculator? |
|---|---|---|---|
| `calculator-core.html.part` | lines 118307-119196 | verbatim as its own `<script type="text/plain" id="calc-float-src">` element anywhere in the body/head (it is inert text) | yes |
| `calc-floating-window.js.part` | 1648-1786 | page script (after body exists, or as is: it waits for DOMContentLoaded) | yes |
| `calc.css.part` | 2659-2706 | inside the page `<style>`; for a plain calculator only the `.calc-win*`, `@keyframes calcWin*`, `#calc-toggle*` rules (lines near the end) are needed | yes (subset) |
| `calc-lcd-engine.js.part` | 1324-1561 | page script, global scope (defines `const calcLcdEngine`, `calcLcdFit`, `calcLcd`) | no |
| `calc-hint-bubble.js.part` | 1562-1607 | page script, after the engine | no |
| `calc-rail.js.part` | 1787-1844 | page script, after the engine; edit `RAILS` | no |
| `hooks.txt` | scattered | informational: every place the app calls `calcLcd(...)` / `calcDockUpdate` / `gammaize` | no |

The three JS parts that are optional need `calcLcd(root)` called on a container after its HTML is inserted (the ME app does it in `showView`, on revealing a hint panel and in `gammaize`, see `hooks.txt`).

## Dependencies and storage

- No external libraries, no network, no Firebase, no cookies. Not tied to MathJax (the displays are canvases).
- Parent page needs: CSS variables `--line`, `--card`, `--muted` (with fallbacks, only used by rail/legend), `document.body`, class names `.calc-pair`, `.calc-side`, `.formula-block` only for the solution-display layout.
- `localStorage` keys: `calcFloatPosV2` (window anchor position), `calcSkinV1` (0 black / 1 white). Both wrapped in try/catch. localStorage is per origin, so the ME and CE sites never share them.
- postMessage protocol (same-origin `srcdoc` iframe, `'*'` target): parent to frame `calcCfg {kw}`, `calcSkin`, `calcLoad`; frame to parent `calcSize`, `calcDrag`.
- Fonts: none loaded. The dot-matrix letters are the inline tables `G`/`GS` (and a second copy `G`/`GS` inside the engine part). The project files `calculator-font/*.json` are only LAX's source sheets.
- ME-specific bits to look at when porting: title text "Canon F-789SGA-TBK/White" (`setTitle`), `RAILS` view ids, the `.lax-img`-independent code needs no change. Nothing admin/access related is touched.

## Minimal port to the CE site (plain floating calculator)

1. Paste `calculator-core.html.part` into the CE page (anywhere in the body).
2. Paste `calc-floating-window.js.part` into a script block at the end of the body.
3. Add to the CE stylesheet the `.calc-win`, `.calc-win-bar(.dragging)`, `.calc-win-btns`, `.calc-win-skin/.calc-win-min`, `.calc-win iframe`, `.calc-win.calc-in/.calc-out`, `@keyframes calcWinIn/Out`, `#calc-toggle` rules from `calc.css.part` (or just paste the whole file).
4. Open the page: the round button appears bottom right. Check z-index (9400/9500) against CE overlays.
5. Optional, for solution displays: add the engine, bubble, rail parts and the CSS, call `calcLcd(container)` after inserting solutions, and give each display `<div class="calc-lcd" data-expr="..." data-ans="...">` (markup: `\\frac{a}{b}`, `\\sqrt{a}`, `\\root{n}{a}`, `^{a}`, `\\neg`, `\\ans`, `\\sin \\cos \\tan`, anything else is typed characters).

## Sync path: carrying ME calculator updates to CE

Everything is regenerated from the ME app file by anchors (no line numbers), so line shifts do not matter.

On the ME repo (this one), after the calculator changed in the app:

```
python3 reference/calculator/extract.py --check   # lists which parts differ from the committed ones, with a short diff
python3 reference/calculator/extract.py           # rewrites the .part files and VERSION from the highest MEBoards_*.html
git diff --stat reference/calculator              # which parts changed
```

Then on the CE side, for each part that changed (use `VERSION` checksums to see it quickly; compare the CE copy with `diff` or by checksum of the pasted block):

1. `calculator-core.html.part` changed: replace the whole `<script type="text/plain" id="calc-float-src">...</script>` block in CE with the new part. This is where almost all calculator logic, glyphs and skins live, so most updates are just this one swap.
2. `calc-floating-window.js.part` changed: replace the CE copy of that script block.
3. `calc.css.part` changed: replace the calculator rules in the CE stylesheet.
4. Optional parts (engine, bubble, rail): replace only if CE uses solution displays. Re-apply the CE `RAILS` list in `calc-rail.js.part` (CE-specific: view ids, roots, unit selectors) after replacing.
5. Keep CE-specific: `RAILS`, the title text, anything CE added around `calcLcd(...)` call sites, CE colours if they changed the CSS variables.
6. Smoke test on CE: open the calculator, type `2+3=`, `X+1=5` then Shift+Solve, switch skin, drag, reload (position and skin should be remembered).

If `extract.py` stops with "anchor not found", the app code around that part was rewritten: open the app, find the new first/last line of that block and edit its row in the `ANCHORS` table at the top of `extract.py`. Each anchor is the opening comment or tag of the block and the first closing `})();` / `</script>` after it.

Keep this folder out of the live site and out of the changelog: it is reference only. The source file is read, never modified.
