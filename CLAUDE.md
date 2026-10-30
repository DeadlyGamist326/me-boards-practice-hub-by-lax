# ME Boards Practice Hub — Project Notes for Claude Code

This is a single self-contained HTML file — a practice quiz/handout hub for
a Mechanical Engineering board exam reviewer. It has grown very large
(~20,000+ lines) over many sessions. This file exists so a new Claude Code
session doesn't have to rediscover these conventions from scratch — read
this fully before making any edits.

**Current filename**: `MEBoards_ PracticeHub_by LAX_v1.3.82.2.html` (note the
space after the underscore — it's part of the real filename). The filename
is renamed to match the version number on every version bump (see the
in-app Changelog view and the version comment near the top of the file for
the current version). Older notes/comments in this project may still say
`practice-hub.html` — that name is stale, use the actual current filename.

**Version rollover ruling (LAX, 2026-10-20):** the patch number stops at 99. After x.y.z.99 the next version is x.y.(z+1).0 (so v1.3.59.99 was followed by v1.3.60.0), not x.y.z.100.

**Always view the actual file before editing.** This document describes
patterns and rules, not exact current line numbers or content — those will
have shifted. Use `grep`/search to relocate things.

**FOR ANY NEW CONTENT (Problem Set, Sample Problems, Trivia): read in-file RULINGS section 17 (the one-page current-rulings checklist, latest ruling wins) before anything else.**

**READ THE IN-FILE RULING BLOCK FIRST, EVERY SESSION.** The HTML file itself
has a large `<!-- RULINGS / STYLE GUIDE FOR CLAUDE -->` comment block right
after the version comment near the top (currently ~line 8 onward, search for
that exact phrase since it shifts). It is the **more detailed and more
authoritative** source for math-formatting rules — standing fractions
(including the exact padding formula), unit fractions, exponent/subscript
overlay rules, minus-sign vs en-dash conventions, and the full sample-problem
solution format (§4, very long — boxed-formula ordering, unit cancellation
chains, when to insert a transition line, etc.). This CLAUDE.md file is a
summary/index; that in-file block is the ground truth for anything about
math rendering. **Do not re-derive these rules from scratch or wait for the
user to restate them — read that block before writing any new fraction,
exponent, or worked-solution content.** Ignore its §5 (references an old
`/home/claude/docgen` sandbox path from a different environment — not this
Windows machine) and §7 (says hints are "currently implemented ONLY on
ppeDay1Data," which is long since stale — hints are now on every quiz).

**Hosting (GitHub Pages)**: `.github/workflows/pages.yml` deploys on every
push to `main`. It picks the highest-versioned `MEBoards_*.html` (via
`sort -V`) and publishes it as `index.html`, so the rename-on-version-bump
convention needs no extra step. Never hand-maintain an `index.html` copy in
the repo. The app file is published as `index.html` and, since v1.3.59.70 (LAX chose to publish it), the diary as `diary.html` (the admin Device Tracker links to it). Keep the
`MEBoards_*.html` filename prefix intact or the workflow won't find it.

**Standing instruction — auto-merge to `main` (given by the user on
2026-10-04):** after finishing and verifying any update (syntax, render and
audit checks passed, version/changelog/diary updated, pushed to the working
branch), open a PR and merge it into `main` straight away so the live GitHub
Pages site updates, without asking each time. This is durable for this repo,
not one-off. Still stop and ask instead of merging if verification failed,
if something is unfinished or uncertain, or if the change touches anything
other than the app/diary/docs. If the working branch was already merged,
restart it from the latest `main` first (same branch name).

**Variants ruling (LAX, 2026-10-16):** every Formula Builder problem type on Day 12 onward needs 5 problems (originals plus generated Variants: new wording, new random realistic givens, calculated answer/choices/solution); 1 original means 4 Variants. Day 17 is fully done (v1.3.59.49) and Day 18 is done (exceptions: Number of Coils, Concentric Springs) and Day 12 is done (v1.3.59.49, incl. Make-or-Buy Analysis) and Day 13 is done (v1.3.59.50) and Day 14 is done (v1.3.59.52) and Day 15 is done (v1.3.59.53) and Day 16 is done (v1.3.59.54), so Day 12-18 are all done apart from the listed exceptions. Next order (LAX, 2026-10-16): first cycle = all originals, then all Variants; later cycles shuffle everything together (`fbFirst` in `fbNextQ`). Details in the in-file ruling block.

**PPE Day 9-11 (v1.3.59.76-80):** Handout, Sample Problems (new `view-samples-ppe-N` pages, `availablePpeSampleProblems`) and Problem Set are built for Day 9, 10 and 11; Trivia 9-11 were built in v1.3.64.6 from the uploaded "Trivia PPE N" PDFs. Rule (LAX, strict, also in the in-file RULINGS section 13): the uploaded FILE NAME alone decides placement. "Handouts PPE Day N" goes to the Handout page, including the problems printed at the end of that PDF (they live in the Handout page, but each sits under its own section as `<h3>Sample Problems</h3>` per RULINGS 4a, never in a closing Problems block; fixed v1.3.59.86). "Sample Problems PPE Day N" fills the Sample Problems page (Day 10: 37, Day 11: 33 items). Problem Set and Trivia stay blank/locked until a file with that name arrives. Problem Set 9 (61), 10 (49) and 11 (33) were built in v1.3.59.82 from the uploaded "Problem Set PPE Day N" PDFs (own `ps9/10/11FormulaOutline`; key letters follow the PDF, mismatching computed values are disclosed in the solution); Trivia 9-11 are still locked placeholders. PPE solutions (Sample Problems and Handout problems) must show the Handout's ORIGINAL equation first, with the unknown left as a bare symbol, and the substituted line and the answer each in their own box (v1.3.59.79 audit). PPE Sample Problems 9-11 have the Practice by formula filter (`handout9/10/11FormulaOutline` + `attachStaticTopicFilter("samples-ppe-N", ...)`; new problems need a `data-topic`). Never invent content, never relocate it because of what is inside a file; if the name and contents disagree, use the name and tell LAX.

**Calculator steps in PPE Day 9-11 solutions (LAX, 2026-10-21, v1.3.61.3-5):** each calculation step's substituted box has a `.calc-pair` with a `.calc-lcd` display beside it (Alpha letters A-F, Shift Solve shows X = value, `.calc-store` says "Ans -> STO -> A"). Rules: givens are typed as given (no letters); a calculated value of 8 characters or less (decimal point and sign counted) is typed again where needed later; a longer one is stored (A first, then B, ...) and the letter is used later; a given that needs a unit conversion (hr, min, day) is shown as the conversion in the calculator display, e.g. `8×3600`, not the converted number (LAX, 2026-10-22, v1.3.62.6); a temperature DIFFERENCE is subtracted straight from the degC/degF values with the unit kept as K/R, e.g. `(45-(-5)) K`, never the converted numbers (absolute temperatures such as a Carnot numerator stay in K, and in the calculator display they are typed in parentheses as converted, e.g. `(45+273)`, `(36+459.67)` for R). Done (v1.3.63.0, LAX 2026-10-22, in-file RULINGS section 14): Sample Problems 9, 10, 11 and Problem Set 9, 10, 11 (generator is throwaway: it parses each boxed LaTeX line, solves the unknowns, follows the stored letters, and every step is checked against the printed result; a step whose printed result disagrees with the real arithmetic is left without a display and reported to LAX, e.g. Sample Problems Day 9 Problem 4). Steps with ln or log get no display (no glyphs). The displays of these pages sit on the right rail (SP and PS pages, `RAILS` list in the rail IIFE). Handout end problems of PPE Day 9-11 are done too (v1.3.63.20-22). Every PPE Sample Problems day must also have the Practice by formula filter and be in `FB_PPE` (Day 9, 10, 11 done).

**Unit conversions inside the formula (LAX, 2026-10-23, v1.3.63.20, in-file RULINGS section 15):** a unit conversion is never its own step or stored value. Write the factor (needed unit over the unit that cancels) inside the formula where the value is used: x = yz then a = bx is shown as a = b(yz), y the raw given and z the factor, with the calculator display typing the same (fewer Ans -> STO). Done for PPE Day 9-11 Sample Problems, Problem Set and the Handout end problems; a conversion of a final answer (kW to hp) is folded in too (v1.3.63.22: the unknown carries the factor, `BP cancel(hp)(0.746 kW/1 cancel(hp))`, display `X×0.746`, or the factor is appended to the formula, display `…×\frac{1}{0.746}`). Tons of refrigeration is not a variable: the quantity is RE and TR is only its unit (RE missing: factor 1 TR/3.516 kW inside the RE formula, answer RE = n TR; RE given: RE = 60 TR). In the calculator displays a conversion is a multiplication by its own factor term, never a division (v1.3.63.21: `x×\frac{1}{3.516}`, `0.003785×\frac{1}{60}`). Never solve for a fraction of a variable (Q/2): the variable itself is found and the /2 is applied in the formula that uses it (v1.3.63.23, Day 9 Sample 1). Any NEW PPE solution must follow all of this.

**PPE Day 1-8 retrofit (LAX, 2026-10-23, in-file RULINGS section 16):** everything above (solution way, units and cancel marks, given boxes, inline conversions, calculator displays with stored letters, RE in TR, no fraction-of-a-variable steps) also applies to PPE Day 1-8 Trivia, Problem Set and Handout sample problems; only the 4th hint changes. One day per version. Status: Day 1-8 done (v1.3.63.24-30 and v1.3.64.0), retrofit complete. Handout sample problems are of two kinds: hint-panel ones (replace the hint-solution panel) and static Given/Solution ones (Day 2 last 4, Day 3, Day 4: replace from the Given label to the sp-answer line). Where the key disagrees with the real arithmetic the result shows the real value and the answer line keeps the key with a short disclosure. The Day 1-8 Trivia and Problem Set displays are on the right rail (`RAILS`), Handout displays stay inline.

**MD Day 1 (v1.3.65.0, LAX, 2026-10-23):** Sample Problems (6, `view-samples-md-1`), Problem Set (41, `quiz-md-ps-1`) and Trivia (15, `quiz-md-1`) were built from the uploaded "Sample Problems MD Day 1", "Problem Set MD Day 1" and "Trivia MD 1" PDFs (file name decides placement; the Handout was not touched). All three share ONE outline, `md1FormulaOutline` (sections and items named after the MD Handout Day 1 h2 and card titles, plus a few extra problem types), which the Study checklist outline "M1" also uses. All solutions follow RULINGS section 17 (calculator displays with stored letters, inline conversions, units, cancel marks); where a printed key disagrees with the real arithmetic the answer line shows the exact value and says so. Displays sit on the right rail (`RAILS`). Pending: MD Day 2+ stay locked placeholders (loop starts at i=2).

**PPE Sample Problems Day 1-8 (v1.3.66.0, LAX 2026-10-25):** built from the uploaded "Sample Problems PPE Day 1-8" PDFs (13, 11, 9, 10, 10, 9, 13, 10 problems; `view-samples-ppe-1..8`, in `availablePpeSampleProblems`, `RAILS`, `FB_PPE` 1-11, filters via `attachStaticTopicFilter` with new topics appended to `handout1..8FormulaOutline`). Same rulings as Day 9-11 (RULINGS 17, L lists the disclosures).

**PPE Day 1 Handout (v1.3.66.3, LAX 2026-10-25):** the uploaded "PPE DAY 1.pdf" (69 lecture slides, theory only, no problems) is the master for the Day 1 Handout theory; the old Handout text only fills gaps. Sample Problems, Problem Set and Trivia are not filled from it.

**PPE Constant Values (v1.3.66.10, LAX 2026-10-26):** `view-pconst`, `PC_DATA` (groups of rows `{n, v:[LaTeX lines], L:[links]}`), `pcBuild`. A constant stated in a PPE Handout links to that Handout section (`["h", day, h2 start, heading start]`, resolved by `pcHeading`); a constant that appears only in solutions links to the problem (`["s"|"p"|"t", day, number]`, Sample Problems, Problem Set, Trivia). New PPE constants go into `PC_DATA` with their links.

**Missed Questions PPE Day 9-11 and MD Day 1 (v1.3.66.11, LAX 2026-10-26):** `view-missed-ppe-9/10/11` (11, 5, 1 questions) and `view-missed-md-1` (4), data `missedPpe9Data`, `missedPpe10Data`, `missedPpe11Data`, `missedMd1Data` (declared right after `md1FormulaOutline`), built from the two lists LAX pasted. Same engine as the Math Missed pages (blank `""` choices where only the wrong pick and the key were recorded), shared outlines (new topics appended), `availablePpeMissed` / `availableMdMissed`, rail entries in `RAILS`, solutions per RULINGS 17. Where a key does not reproduce (fan law 25 to 94 C, heat pump COP 5) the key letter is kept and the exact value is disclosed in the solution. PPE Day 1-8, 12+ and MD Day 2+ Missed stay locked.

**MD Handout Day 2 (v1.3.67.0, LAX 2026-10-27):** built from the uploaded "Handouts MD Day 2" PDF (54 image-only slides, read visually): 7 sections (Shafts, Stress and Deflection, Combined Loading, Solid replaced by Hollow, Keys, Splines, Flange Coupling) in `handout-md-2`, 7 problems under their sections as Sample Problems with calculator displays. Disclosures are in the diary.

**MD Day 2 Sample Problems, Problem Set, Trivia (v1.3.68.0, LAX 2026-10-27):** built by file name from the uploaded "Sample Problems MD Day 2" (8, `view-samples-md-2`), "Problem Set MD Day 2" (61, `mdPs2Data`, `quiz-md-ps-2`) and "Trivia MD 2" (15, `mdTrivia2Data`, `quiz-md-2`) PDFs, all on ONE outline `md2FormulaOutline`; rail entries in `RAILS`; solutions per RULINGS 17. New RULINGS 17 item M: two results / no exact match (size = higher, capacity = lower, bolts rounded up, nearest choice, always with an explanation; a disagreeing key letter is kept and disclosed). MD Day 3+ stay locked placeholders (loop starts at i=3).

**MD Day 2 rebuilt on the second handout (v1.3.68.1, LAX 2026-10-27):** the uploaded "Handouts MD Day 2 another" PDF sets the FLOW (sections I-VIII, outline `md2FormulaOutline`) and adds formulas, but its variable convention is not used and nothing older is removed. Torsion + bending is solved with the direct S_s and S_t formulas (k_m, k_t), power with P = 2πTN (N in rps, factor 1 min/60 s inside the formula). In-file RULINGS 17 item N. The formula sheet PDF in the project files predates this change.

**MD Handout Day 3 (v1.3.69.0, rewritten v1.3.69.1, LAX 2026-10-27):** `handout-md-3` is built from BOTH uploaded PDFs, "Handouts MD Day 3 Main file" (8 pages) and "Handouts MD Day 3" (59 image-only lecture slides): the union of all final equations (equivalent forms too), no derivation steps, units in every problem step (empirical formulas included), lecture symbols (W_f, W_r, W_ah, rho, D_m, S_us, theta). Sections I Flywheel, II Bolts and Screws, III Bolts, IV Power Screws, 9 problems under their sections as Sample Problems with calculator displays; flywheel problems use the normal speed as v1. Outline `md3FormulaOutline`. In-file RULINGS 17 item O; disclosures in the diary. MD Day 3 Sample Problems (6), Problem Set (59) and Trivia (15) were built in v1.3.70.0 from the uploaded files of those names with the most-derived one-equation formulas (outline `md3FormulaOutline`, rails in `RAILS`, RULINGS 17 applies); MD Day 4+ stay locked placeholders (loop starts at i=4). A long equation in a `.calc-pair` takes its own full row (`.handout-content .calc-pair > .formula-block.fb-long`).

**MD Handout Day 4 (v1.3.71.0, LAX 2026-10-28):** `handout-md-4` is built from "Handouts MD Day 4 Main file" (7 pages) and then "Handouts MD Day 4" (41 image-only slides, the polisher and gap-filler); Handout page only. All final equations of both files, no derivations, units in every problem step, the SECOND file's variable convention (P_d, P_dn, theta/theta_n, psi, x, W_t, F_R, theta_s, alpha_p/alpha_g...). Sections I Helical, II Worm, III Bevel, IV Planetary Gear; 6 problems under their sections as Sample Problems; outline `md4FormulaOutline`. In-file RULINGS 17 item P; formula conflicts between the two files are disclosed in the diary. MD Day 4 Sample Problems, Problem Set and Trivia stay locked placeholders (loop starts at i=4); the pending Handout loop now covers Day 5-6 only. MD Trivia Day 4 (v1.3.72.0, 15 questions from "Trivia MD 4", `mdTrivia4Data`, `quiz-md-4`, shares `md4FormulaOutline`) is built; Trivia 5-6 stay locked (loop split `i >= 5`); MD Sample Problems Day 4 (v1.3.73.0, 10 worm gear problems from "Sample Problems MD Day 4", `view-samples-md-4`, `md4FormulaOutline`) is built too; Problem Set MD 4 (v1.3.74.0, 43 problems from "Problem Set MD Day 4", `mdPs4Data`, `quiz-md-ps-4`, `md4FormulaOutline` plus section V) is built too; MD Day 5+ Problem Set stays locked (loop `i >= 5`).

**PPE Terms Practice (v1.3.66.6, LAX 2026-10-25):** `view-pterms`, `PTERMS_DATA` (468 terms, Day 1-11, `day/topic/q/choices/a`), `pt*` functions cloned from the Math Terms Practice engine with their own `#pt-panel` MASTERY checklist and `ptProgressV1`. Source: the uploaded "Power and Industrial Plant Engineering Elements" question book (no answer key; answers were set by engineering knowledge, unclear questions skipped). That file is for this reviewer only. Add terms by appending to `PTERMS_DATA`.

**PPE units (v1.3.59.83):** every PPE Day 9-11 full solution (Sample Problems, Handout end problems, Problem Set) carries units on every quantity, cancel marks, and an as-is substituted line (defined formula with known values+units); do not write number-only substituted lines (RULINGS section 3).

**Gamma (v1.3.59.84, LAX):** specific weight is written γ (not w) and shows as LAX's hand-drawn gamma picture (`GAM_PNG`, `gammaize()`, `.gam`) while copying as the real γ; use `\\gamma` in hint/handout LaTeX or a plain γ in text and it is swapped automatically.

**Formula Builder PPE (v1.3.59.81, Day 10 and 11 added v1.3.63.0):** PPE Day 9, 10 and 11 Sample Problems are in the Formula Builder (`FB_PPE` map, `fbPpeItems`, one chip per day). A new PPE Sample Problems day goes into `FB_PPE` with its outline (each problem needs the Hint 1 kw-map rows).

**Formula Builder MD Day 2-4 (v1.3.75.0, LAX 2026-10-30):** chips MD Day 2/3/4 (`FB_MD`, day numbers 102-104, `fbMdItems`) (Sample Problems, Trivia and Problem Set of each day, v1.3.77.0; `fbMdArr`) run in the Hint 2 / Hint 4 mode: only Hint 2 is offered, Hint 4 (full solution) shows after an answer is selected. Other days keep the normal builder flow. Hint 2 also lists needed constants (v1.3.76.0): a constant the problem does not state is labelled "(not stated, assume)"; `fbPrep` collects them into `fb.consts` and the builder shows them with the formula. The Constant lines are done for all MD Day 2-4 items (Sample Problems v1.3.76.0, Trivia and Problem Set v1.3.78.0); a NEW MD problem needs its own Constant line in Hint 2.

**Study checklist MD Day 2-4 and generated MD Variants (v1.3.79.0-80.0, LAX 2026-10-30):** the Study checklist has MD Day 2-4 (keys M2-M4, internal Formula Builder days 102-104). A MD topic with n < 5 problems gets n x max(2, 5 - n) generated problems from `mdvMake` (re-solves the original solution with new givens; `MDV_DAYS` lists the days switched on, Day 4 first, then Day 2, then Day 3; all three are on). Details in the diary.

**Dev diary**: `ME_Boards_Practice_Hub_Diary.html` (same folder) is a
separate, developer-facing log of everything done in each session —
technical or not — distinct from the in-app, user-facing Changelog.

**CRITICAL — the `entries` object (near the bottom of the diary file) is keyed
by the full ISO date string of the REAL-WORLD CALENDAR DAY, e.g.
`"2026-10-04"` (changed on 2026-10-01 from bare day-of-month keys; the
calendar has prev/next month navigation and computes every month itself),
NOT by a version number or an incrementing counter/ID. A made-up key is
invisible to the calendar and was a real bug (caught by the user as
"September 38"). **Before adding a new diary entry, find today's actual
real-world date and check whether that exact key already exists in
`entries`:**
- If it doesn't exist yet, create it: `stamp` is that version (or, if
  several versions ship the same real day, a range like `"v1.8.7 – v1.8.10"`),
  `title` summarizes the day's work, `body` is the array of bullets.
- **If it already exists** (i.e. this is not the first version bumped
  today), do NOT create a new key — append this session's bullets to that
  same day's existing `body` array, and extend its `stamp` to cover the
  new version(s) too (e.g. `"v1.8.6"` → `"v1.8.6 – v1.8.9"`). One calendar
  day = one entry, however many version bumps happened on it.
- Month rollover needs no extra work: the calendar derives the month label,
  length and first weekday from the date keys, so just add the new ISO date.

**Update this diary at the end of every session** (the user explicitly
asked for this to be standing practice).

---

## 1. File architecture

- Single file (see current filename above). Everything (CSS, HTML, JS data +
  logic) lives inline in one `<style>` block and one big `<script>` block.
- **Views**: each screen (home, a handout, a quiz) is a `<div class="view">`,
  hidden by default (`display:none`), shown via `showView(id)` which adds an
  `active` class. Only `view-home` has `active` hardcoded in the HTML.
- **Quizzes**: data arrays like `ppePs5Data`, `ppeDay7Data` (array of
  question objects) are defined, then `renderQuiz(containerId, data,
  quizLabel, timerLabelId, formulaOutline?)` is called once per quiz.
- **Handouts**: built via `document.getElementById("handout-ppe-N").innerHTML
  = \`...\`` template literals containing the reference-formula HTML.

### Lazy rendering (important — don't undo this)

Building a quiz's full question DOM eagerly for all ~28 quizzes at page load
made the page unresponsive. So:
- `renderQuiz(...)` (the function actually called at the 28 call sites) is
  now a **lightweight stub** that just stores `{data, quizLabel,
  timerLabelId, formulaOutline}` in a `pendingQuizRenders` map keyed by
  containerId.
- The real DOM-building logic lives in `renderQuizNow(...)` (same signature).
- `showView(id)` checks `pendingQuizRenders` for any container inside the
  view being shown and calls `renderQuizNow` for it, once, the first time
  that quiz is opened. Re-opening doesn't re-render.
- MathJax typesetting is **also lazy**: `showView` calls
  `MathJax.typesetPromise([el])` for the view being shown, instead of
  eagerly typesetting the whole page or every quiz's hints at load time.
- `performRetake(containerId)` (triggered by the hold-to-confirm Retake
  button, via `retakeQuiz`/`startRetakeHold`) calls `renderQuizNow` directly
  (the quiz is already open, so this one should stay eager) — **and must
  also call `MathJax.typesetPromise([container])` itself right after**,
  mirroring what `showView` does. `renderQuizNow` only builds the DOM; it
  never typesets on its own (that's intentional — see above). Since
  `performRetake` rebuilds the quiz WITHOUT going through `showView` again,
  skipping that typeset call leaves every rebuilt hint panel showing raw
  un-typeset `\( \)` LaTeX source instead of rendered math. This was a real
  reported bug (raw "\(\)" appearing specifically after clicking Retake,
  fixed in v1.3.8.1) — any other code path that rebuilds a quiz's DOM
  outside of `showView` needs the same explicit typeset call.

**Do not add new eager `MathJax.typesetPromise()` calls or eager DOM builds
at script-load time** — always hook into `showView` or an explicit user
action instead. The one exception is exactly this Retake case: an explicit
user action that rebuilds DOM outside `showView`'s own typeset hook needs
its own typeset call, or the bug above recurs.

---

## 2. Sticky header structure

There are two independent sticky rows stacked at the top of the page:

1. **`.made-by-credit`** — outermost sticky bar (`position: sticky; top: 0`),
   split into two rows:
   - `.credit-top-row`: `#header-title-slot` (left, flexible) + `.lax-brand`
     "Made by " + the LAX logo image `.lax-img` (right; since v1.3.14.9 it is the
     base64 PNG logo, not CSS-styled text).
   - `#header-filter-slot`: **full width**, its own row below the top row.
2. **`.quiz-topbar`** (back/pause/timer/retake) — sticky at
   `top: var(--credit-h)`, where `--credit-h` is **computed dynamically in
   JS** (`updateCreditBarHeight()`, called on every `showView` and on
   `resize`) by measuring `.made-by-credit`'s real `offsetHeight`. Don't
   switch this back to a fixed px value — the credit bar's height varies
   (title length, wrapping, mobile).

`syncHeaderContext(id, el)` (called from `showView`) moves (not clones) the
current view's `<h1>` into `#header-title-slot` and its
`.topic-filter-wrap` (if any) into `#header-filter-slot`. A `viewHeaderCache`
map remembers each view's h1/filterWrap by id, because after the first move
they're no longer descendants of `el` for a fresh `querySelector` to find.
`view-home` is explicitly excluded (keeps its own in-page title).

---

## 3. "Practice by formula" filter system

Any quiz can get a topic filter by giving each question object a
`topics: ["Some Topic"]` array (single-element array; that's the existing
convention, not multi-topic). Two modes:

- **Flat fallback**: topics with no outline passed to `renderQuiz` →
  the filter panel auto-builds an alphabetized flat list of the topics that
  actually appear in the data.
- **Structured outline**: pass a 5th arg, `formulaOutline`, shaped like:
  ```js
  const handoutNFormulaOutline = [
    { section: "I. Section Name", subsections: [
      { name: null, items: ["Topic A", "Topic B", ...] },
    ] },
    { section: "II. ...", subsections: [ ... ] },
  ];
  ```
  The section names should **match the handout's actual `<h2>` headings**
  (I., II., III., ...). If some quiz questions don't cleanly belong to any
  official section, add an extra section (e.g. "IV. General ... 
  Applications") rather than forcing a bad fit.
- One outline is typically **shared** between a day's Trivia quiz and its
  Problem Set quiz (e.g. `handout5FormulaOutline` used by both
  `quiz-ppe-5` and `quiz-ppe-ps-5`), and gets **expanded** as more topics are
  discovered when the second quiz's questions are processed — don't create
  a second outline for the same handout.

Currently built outlines: `handout1FormulaOutline` .. `handout8FormulaOutline`
(all 8 PPE days have Trivia + Problem Set topics assigned), plus
`math9FormulaOutline` and `math10FormulaOutline` (Math Day 9 and 10 Trivia
+ Problem Set — Sample Problems 9/10 still pending, see below), as of the
latest save.

### Target scope: Math Day 9–12 (additive — does not replace anything above)

The "Practice by formula" system above was built against PPE Day 1–8 and
is being extended to **Math Day 9–12**, specifically **Sample Problems,
Problem Set, and Trivia only** — NOT the Handouts (Handouts are static
reference content, not quizzes; they don't take `topics:`/filters). Same
conventions as PPE apply: one `mathNFormulaOutline` per day, its section
names matching that day's own Handout `<h2>` headings, shared and expanded
across that day's Problem Set + Trivia the same way `handout5FormulaOutline`
is shared across PPE Day 5's Trivia + PS.

**UPDATE (v1.3.10.0): Math Day 9–12 are ALL DONE** — Trivia, Problem Set, and
Sample Problems each have topics/`data-topic` and `math9..12FormulaOutline`
wired (Day 11/12 outlines add extra groups beyond the Handout headings, e.g.
"III. Differential and Difference Equations", "VIII. Annuities, Cash Flow
and Returns"). Any text below saying Day 11/12 is "not done" is stale.
Original Day 9/10 note:

**Status: Day 9 and 10 Problem Set + Trivia DONE.** All 158 questions
across `trivia9Data`/`ps9Data`/`trivia10Data`/`ps10Data` are hand-tagged
with `topics:` (using each question's existing `problem-type-tag` text
directly — every quiz question already carried one, so no new
classification work was needed, just copying that string into a `topics:`
array), `math9FormulaOutline`/`math10FormulaOutline` are written and wired
into all four `renderQuiz(...)` calls as the 5th argument. Day 11 and 12
Problem Set + Trivia are NOT done yet — same process, just not started.

**Sample Problems 9/10 DONE (v1.3.9.0)** via `attachStaticTopicFilter(containerId,
outline)` (defined right after the `samples-math-10` innerHTML block): each
`.sample-problem` carries `data-topic="<its problem-type-tag text>"`, the
function builds the same `.topic-filter-*` UI and show/hides those blocks,
and any topic missing from the outline is auto-grouped under "Other Sample
Problem Types" so nothing becomes unreachable. For Day 11/12: add
`data-topic` to each `.sample-problem`, write `math11/12FormulaOutline`, and
call `attachStaticTopicFilter` after that day's innerHTML assignment.

**Background — why Sample Problems needed a different approach:** Problem Set and Trivia go
through `renderQuiz(...)` with a `topics:` array per question —
mechanically identical to PPE, which is why Day 9/10's PS+Trivia above
was a straightforward extension. **Sample Problems is not** — per §4(p)/§5's
"third rendering system" note, Math Sample Problems pages are static HTML
(`.sp-title`/`.sp-choice` blocks written directly into a view's
`innerHTML`), not a `renderQuiz`-consumed data array, so they have no
`topics:` field and no hook into `currentFilterMatcher`/the filter panel
at all. Giving Sample Problems a working filter needs a second, parallel
filtering mechanism (e.g. tagging each problem's wrapping element with a
`data-topic` attribute and writing a lightweight show/hide filter that
operates on the static DOM instead of a data array) — it is NOT just "add
`topics:` and reuse `renderQuiz`'s panel" like it is for PS/Trivia. Treat
this as an open design decision to raise with the user before building it.

### Filter-aware completion banner

`checkCompletion()` scopes "remaining unanswered" to the current filter
(`currentFilterMatcher`, set by `selectValue` inside the filter-panel code).
Three banner states:
- No filter, some unanswered → "You still have N unanswered questions."
- Filter active, some unanswered (within filter) → "...unanswered questions
  for {label}."
- Filter active, all-in-filter answered but quiz not fully done →
  "You finished the answering all the {label} Formula. Click here to turn
  off filter and go to unanswered question." — clicking resets the filter
  (`resetFilterToAll()`) **then**, after a 60ms `setTimeout` (letting the
  newly-unhidden questions reflow the page first), scrolls to the lowest
  unanswered question overall. Don't remove that delay — without it the
  scroll target is computed against stale layout.

---

## 4. Question data — two structural variants

Most quiz question objects look like:
```js
{ q: [...], choices: [...], answer: N,
  topics: ["..."],
  hints: [...] },
```
**But some quizzes have questions with NO `hints` field at all** (seen in
PPE Trivia Day 4, and isolated stray questions in PS3/PS4). When
bulk-inserting `topics:` via regex, a pattern anchored on `hints: \[` will
silently skip those — always check the processed count against the total
question count, and handle the no-hints case with a pattern anchored on the
closing `},` instead. This has bitten us multiple times; verify count
matches before moving on.

---

## 5. LaTeX / math formatting rules

**IMPORTANT — there are TWO SEPARATE rendering systems in this file, do not
mix them up:**
1. **`q:` and `choices:` fields** on quiz question objects are rendered by a
   **custom tokenizer** (`tokenizeContent`/`appendChoiceContent`/
   `appendMixedContent`, plus the `{frac:[...]}` object system below) — NOT
   MathJax. These fields must use **plain strings with literal Unicode**
   (√, ², ³, superscripts, etc.) or `{frac:...}`/`{sqrt:...}` objects.
   **Never put `\( \)` LaTeX delimiters inside `q:`/`choices:`** — the
   tokenizer doesn't know MathJax syntax, so a literal `\(`/`\)` will show
   up as raw backslash-paren text on screen, not rendered math.
2. **`hints:` array entries** (kw-map, formula-row, formula-block,
   hint-formula, hint-given, hint-note, hint-answer HTML strings) ARE
   plain HTML set via `.innerHTML`, and DO use real MathJax `\( ... \)`
   syntax throughout. These get typeset lazily by `showView`'s
   `MathJax.typesetPromise([el])` call once the view is opened (see §1).
   Same for all static handout reference content (concept-card/formula-row/
   formula-block/formula-grid).

If asked to debug "raw `\( \)` showing on screen" or "not rendering as
LaTeX", first identify which of the two systems the broken content is in —
the fix and the failure mode are completely different for each.

**Escape hatch inside `q:`/`choices:`**: the custom tokenizer also accepts
`{ latex: "..." }` as a content-array segment — it wraps the string in real
`\( \)` and lets MathJax render it normally (see `renderLatexSpan`), while
everything else around it can stay plain-text/`{frac:}`/`{base,exp}`. **Use
`{latex:...}` instead of composing frac/exp/sqrt objects by hand whenever a
choice has a square root, or an exponent that is itself a fraction** (e.g.
`u^(7/2)`, `T^{1/2}`) — those look cramped/wrong when forced through the
plain-object system, and real LaTeX renders them properly. For simple
standalone fractions or single-character exponents, keep using
`{frac:[...]}` / `{base,exp}` as usual (§5 padding rule still applies to any
`{frac:}` you write, including ones inside a `{latex:...}` string doesn't
apply — that's plain LaTeX `\dfrac{}{}`, no manual padding needed there).

**Also use `{latex:...}` for anything bounded by an integral (∫), partial
derivative (∂), or limit ("lim") notation** — wrap the whole expression (the
operator symbol through its differential/argument) as one `{latex:...}`
block, never plain unicode `∫`/`∂` text and never split the operator from
its integrand across separate string segments. Same reasoning as the
sqrt/fractional-exponent rule: these don't render cleanly through the plain
tokenizer. This is now also written directly into the in-file ruling block
(§1, near the π/√ rule) — added per explicit user request.

**More additions to the in-file ruling block (§1), all from explicit user
corrections in one session — read them in full, don't re-derive:**
- Point coordinates containing a fraction (e.g. "(1, 2/3)") need
  `{latex: "\\left(1,\\dfrac{2}{3}\\right)"}`; plain-integer coordinates
  stay plain text.
- **Every** `\int` and `\lim`, anywhere in this file (choices, hints,
  kw-map, formula-block — not just the final answer), needs
  `\displaystyle` immediately before it, or the integral sign/limit
  subscript renders at cramped inline height instead of full size.
- A fractional exponent (`x^(2/3)`) must be `x^{\frac{2}{3}}` — a bare
  `2/3` typed inside `^{...}` is not a standing fraction, in `{latex:}`
  blocks or hint HTML alike.
- **Algebraic/calculus one-liner quotients are standing fractions too**,
  not just plain numeric/unit fractions — caught across multiple Problem
  Set Day 9 questions written as flat text like `∂f/∂y`, `∂V/∂x`, or
  `(3 – x)/(x² – 1)`. A partial derivative or a multi-term rational
  expression is division exactly as much as `3/10` is. Fix depends on
  context: inside `q:`/`choices:`, use `{latex: "\\dfrac{\\partial f}
  {\\partial y}"}` (never force a multi-term quotient through the plain
  `{frac:[...]}` object system); inside `hints:`/handout HTML, use
  `\dfrac{\partial f}{\partial y}` or `\dfrac{3-x}{x^2-1}` directly inside
  the existing `\( \)`. When auditing a batch, grep for a bare `/` sitting
  between two math-looking tokens that isn't a unit, URL, or date.

**§4(o) in the in-file block generalizes the granular solution style** —
alternating short note → boxed single-step `.formula-block` → note → box,
ending in the answer box; a box should normally hold ONE algebraic
transformation, not several chained by "=". This applies to EVERY solved
example in the file: Handout sample problems, and every quiz's 4th/final
hint tier alike — it was previously demonstrated only via the Handout 10
example and risked being read as Handout-only; it is not.

**Explicit chain, per standing user instruction**: every full solution
follows `given: -> (each actual given equation/notation, boxed separately,
one box per "=" statement) -> box -> note -> box -> note -> box -> ...
-> until final answer`. The `.hint-given` line itself stays plain text
(just the label) and is immediately followed by one boxed `.formula-block`
per given equation/value that contains an "=" sign — never bundle multiple
given values into one plain-text sentence like "Given: P=5500, i=0.11"
with no boxes. Use a `.formula-grid-2/3/4` (§5c) when there are 2-4 short
given equations instead of stacking single boxes. Plain descriptive
conditions with no "=" (e.g. "exact interest, leap year") stay in the
plain-text given line. After the given box(es), the first working formula
gets its own box, then it's a strict note→box alternation to the final
boxed answer — never given text followed directly by a note with no box
in between. This is not Handout-specific: it governs every quiz's 4th
hint tier, every Handout sample problem, every Sample Problems page, and
every Problem Set/Trivia full-solution hint alike. **As of this ruling
update, retrofit is scoped to Math Day 9-12 content only** (Handouts,
Sample Problems, Problem Set, Trivia for Days 9 through 12) — older
PPE/MD content is deferred to a later pass per explicit user instruction.

**`.var-def-grid`/`.var-chip` is now a flex-wrap row, not a fixed grid** —
each chip sizes to its own one-line content (`white-space: nowrap`, no
artificial minimum width), wrapping to the next row only when it actually
runs out of horizontal space. Every math symbol inside a chip must be real
LaTeX `\( \)` (e.g. `\( r_o \)`) — the old `<span class="vc-sym">`/`.sub`
overlay trick is retired; a genuine plain-English label (a literal named
constant, not a formula symbol) may still stay plain text.

**§4a in the in-file block documents the full Handout page structure**
(Math Handout Day 9/10/11 as the concrete templates) — `<h2>` section, then
that section's `.concept-card`(s) (theory/formula reference, one card per
distinct method), then `<h3>Sample Problems: Section Name</h3>` with that
section's own sample problems directly beneath it (not grouped at the end
of the handout). Read an existing Day 9/10/11 block as the template before
starting a new Handout day — don't reinvent the structure from prose alone.

**Sample Problems pages (Math Sample Problems Day 9, 10, ...) are a THIRD
rendering context** (§4(p) in the in-file block) — `.sp-title`/`.sp-choice`
are static HTML using real MathJax `\( \)` directly, same as hint HTML, NOT
the `{frac:}`/`{latex:}` quiz-tokenizer system. Every §4 rule (boxed
one-equation-per-step, standing fractions, `\displaystyle`, hint-answer
LaTeX) applies to them in full. When building a Sample Problems day from a
source document: preserve every algebraic step from the source, one per
boxed `.formula-block` with a connecting note before it — never compress
steps — and embed any source diagram as a base64 `<img>` rather than just
describing it.

**The `hint-answer` line follows the same fraction/sqrt/LaTeX rules as
everywhere else** — e.g. not "Answer: A. y = 1/2(x²+3x+4)" but
"Answer: A. `\( y=\dfrac{1}{2}(x^2+3x+4) \)`". Only the "Answer: X." label
itself stays plain text outside `\( \)`; the restated equation goes through
the same standing-fraction/sqrt-LaTeX rules as any other formula-block. This
is now item 8 in the §1a checklist below — don't skip this line because it
looks like "just a label."

**§1a in the in-file block is a mandatory post-batch self-audit checklist**
(numeric/unit fractions, plain √/π/∫/∂, bare carets, unwrapped fractional
exponents, missing `\displaystyle`, frac padding) — **run it as an actual
grep pass over whatever you just wrote or edited, every time, before
calling a batch done.** This was added because the same violations kept
being pointed out one question at a time across many separate messages
instead of being caught in one pass — that pattern is the thing to stop.
Do not treat this as optional or "probably fine because I was careful."

**Everything in the hints/handout system is written in `\(...\)` for
MathJax.** A very common recurring bug
this session: writing a chemical/math expression *without* the `\( \)`
wrapper, so it prints as literal text (underscores don't become subscripts,
`\rightarrow` doesn't become an arrow). Always double-check formula-block
and formula-row content actually starts with `\(` and ends `\)` — search for
`hint-formula`/`formula-block` divs whose content lacks a leading `\(` as a
health check.

**Never double-wrap**: `\( \( ... \) ... \)` (nested delimiters) is a
recurring bug — MathJax chokes /shows raw text. If you see `\\( \\(` (after
un-escaping) that's the bug.

**Backslash doubling**: since this all lives inside JS template literals /
strings, every real LaTeX backslash must be written as `\\` in the source
(e.g. `\\dfrac`, `\\times`). When editing via scripts, remember the file
already has these doubled — don't triple them.

### Standing fractions — the `{frac: [...]}` JS object system

This is a **separate, custom rendering system** (not MathJax) used inside
quiz question/choice arrays, e.g.:
```js
{ frac: ["kJ", "kg\u00b7K"] }
```
renders as an actual visual fraction bar via CSS. Key rules:
- **Padding rule**: when numerator and denominator differ in character
  length, the shorter one needs `\u00A0\u00A0` (non-breaking space) padding
  on each side so the fraction bar width matches the wider side. Compute
  length by counting characters (a `\uXXXX` escape = 1 character; a floating `{base,
  exp}` counts as len(base) only, the floating exponent has no width). This must be re-audited any time a
  new `{frac:}` is added — it's easy to forget and produces a visibly
  lopsided fraction bar with no error thrown.
- Numerator/denominator can be a plain string, a `{base, exp}` object
  (renders as `.term-with-exp`, an absolutely-positioned superscript — only
  safe when the exponent is the *last* character of that side, since it's
  positioned outside normal flow) or an array mixing strings and objects.
- **`{base, sub}` also now supported** (added this session,
  `renderFracPart`), renders via `.term-with-sub` — used e.g. for "kg·mol"
  with "fuel"/"oxygen" as a subscript rather than a fake extra unit.
- **Exponent placement rule**: if the squared/cubed term is at the very
  *end* of a denominator/numerator with nothing after it, use `{base, exp}`
  (the absolutely-positioned superscript, which floats past the normal flow
  safely since nothing follows it). If something *follows* it (e.g. "m²-K"),
  do **not** use `{base,exp}` there — instead use a plain literal Unicode
  superscript character (² ³ etc.) directly in a plain string, since that
  flows inline correctly and won't overlap the following text.
- **Compound units use a middle dot (·, U+00B7), not a hyphen**: "kg-K" →
  "kg·K", "kW-hr" → "kW·hr", etc. — this represents unit multiplication.
  Exception: don't touch hyphens that are genuine math subtraction (e.g.
  `1 - sinx`) — only convert dashes that are joining compound unit names.

---

## 5b. Boxed multiple-choice layout (`.sp-choices` / `.choices`)

Multiple-choice options must snap to exactly **3 allowed layouts** — never a
ragged "3+1" wrap:
1. 4-across (default, wide screens / short choices)
2. 2×2, column-major (A,C on top row / B,D on bottom — via
   `grid-auto-flow: column`)
3. 4 rows × 1 column (long choices that wrap)

Implemented as **CSS Grid** (`.sp-choices.sp-choices-boxed`), not flex-wrap,
with media-query breakpoints (`@media max-width:640px` → 2-col,
`max-width:400px` → 1-col). `adjustChoiceLayouts(root)` (called from
`showView`'s MathJax `.then()`) measures each choice's real `scrollHeight`
against a computed single-line threshold
(`lineHeight + padding+border + lineHeight*0.5` tolerance) and adds a
JS override class — `.sp-choices-cols-2` or `.sp-choices-stacked` — when
content has actually wrapped to 2+ lines, regardless of viewport. These
override classes take precedence over the media queries via `:not()`
selectors. **Don't revert this to flex-wrap** — that's what caused the
original ragged-wrap bug. If you see every choice forced to 1-column
regardless of length, check the threshold math first (padding/border must
be included, not just raw line-height) — that's bitten us before.

**Choice content must be vertically centered, not top- or bottom-pinned.**
`.choice` (the plain, non-`sp-choices-boxed` A/B/C/D boxes built by
`renderQuizNow` for `q:`/`choices:` questions) is `display:flex;
align-items:center;`, and its content is wrapped in one inner
`<span class="choice-inner">` (holding the "A. " label text node plus
whatever `appendChoiceContent` appends) so the whole thing acts as a single
flex item that centers as a unit. This matters most when a choice contains
a tall glyph (`{frac:}`, `{latex:}`, sqrt) — without centering, that choice
visually sits lower/higher than its plain-text neighbors in the same grid
row even though the boxes are the same height. Always build new `.choice`
elements through this same `c.appendChild(choiceInnerSpan)` pattern — don't
append the label text node and `appendChoiceContent` output directly into
`c`, since raw text/element children of a flex container each become their
own flex item and fragment natural text wrapping. `.sp-choices`/`.sp-choice`
(the separate Sample Problems system) already had `align-items: center` and
needed no change.

## 5c. `.formula-grid-2/3/4` and `.hint-given` (boxed formulas, unboxed Given:)

- **Long-box rule (user ruling, 2026-10-04):** if a box's content is too long for a half-width column, that box takes one full row (single-column one-liner), never a `.formula-grid-2/3/4` cell (inside a grid, mark the long block `class="formula-block fb-long"` — CSS spans it across the full row). Grids are for short formulas only.
- **Every multi-statement formula line must be boxed**, not comma-joined in
  prose. `.formula-grid-2` / `.formula-grid-3` / `.formula-grid-4` are CSS
  Grid wrappers (mobile fallback to fewer columns at ≤480px) holding 2/3/4
  `.formula-block` children side by side, used whenever several related
  formulas would otherwise be crammed into one sentence (e.g. "given
  u=..., v=..." or "yield Y=..., price P=..., spoilage S=...").
- **All fractions must be standing fractions**, including exponent
  fractions — `x^{1/2}` must be written `x^{\frac{1}{2}}`, never plain
  "1/2" inside an exponent or anywhere else in hint LaTeX.
- **"Given:" lines must NOT be boxed as prose+equation together.** The
  convention (established mid-session, applies everywhere going forward):
  ```html
  <p class="hint-given">Given: (plain italic label text, unboxed)</p>
  <div class="formula-block">\( the actual given equation, boxed \)</div>
  ```
  or, for multiple given equations, a `.formula-grid-2/3` of `.formula-block`s
  after the label. `.hint-given` itself is plain italicized text (CSS:
  `font-size:12.5px; font-style:italic; margin:0 0 6px;`) — never wrap the
  label text itself in a box, and never merge the given equation into the
  same sentence as the label.

---

## 6. Formula-row / concept-card / var-def-grid (handout reference sections)

Reference formulas inside handouts use this structure (established/refined
this session for Handouts 5 II & III, should be the template for future
handout formula sections):

```html
<div class="concept-card">
  <div class="cc-title">Subsection Name</div>
  <div class="formula-row">
    <span class="fr-left">\( \text{unit} \)</span>
    <span class="fr-center">\( AL = \dfrac{E}{T} \)</span>
    <span class="fr-right">\( \dfrac{kWh}{h}=kW \)</span>
  </div>
  <!-- more formula-rows -->
  <div class="var-def-grid">
    <div class="var-chip"><span class="vc-sym">AL</span> = Average Load</div>
    <div class="var-chip"><span class="vc-sym">E</span> = Energy Generated</div>
    <!-- one chip per variable -->
  </div>
</div>
```
- `fr-left`/`fr-right` are the unit / dimensional-analysis columns. Use
  `\(\text{—}\)` (em dash) for dimensionless or not-meaningfully-unit-typed
  entries rather than leaving them blank or using a "?" placeholder.
- `.var-def-grid`/`.var-chip` (added this session) is a responsive CSS grid
  (`auto-fill, minmax(140px,1fr)`) — each variable definition gets its own
  bordered box, replacing the older single long `.var-def` semicolon-joined
  line. **Prefer this for any new "Where: ..." block.** The plain `.var-def`
  class still exists for short one-off notes (e.g. "(balance O atoms...)")
  that aren't a legend list.
- Each handout's concept-cards must stay **top-level, non-nested**
  `<div class="concept-card">` — some older content has cards nested inside
  other cards, which broke a naive regex-based formula extractor (see §8).
  Don't nest concept-cards.

---

## 7. PDF formula reference sheet (separate deliverable)

There's a second artifact — `PPE_Day5-8_Formula_Reference.pdf`, one page
per handout section (I., II., III., ...), generated from the *same*
handout reference content in `practice-hub.html`, not hand-maintained
separately. Pipeline (scripts live alongside, not yet moved into a
`scripts/` folder — consider doing that in Claude Code):

1. `extract formulas` step: parses `practice-hub.html`'s handout innerHTML,
   splits by `<h2>` section, then by **depth-aware** top-level
   `concept-card` boundaries (plain regex-splitting broke on nested cards —
   see history), pulls each `<span class="fr-center">` or
   `<div class="formula-block">` LaTeX string, tagged with its
   `cc-title`. Saved to `/tmp/extracted_formulas.json`.
2. `render_formulas.py`: converts each LaTeX string to matplotlib mathtext
   (`\dfrac`→`\frac`, `\text{...}`→`\mathrm{...}` with spaces escaped as
   `\ `, resolves stray `\uXXXX` unicode escapes, strips `\cancel{}`).
   Renders each as an individually-sized transparent PNG at **130 DPI**
   (lighter/smaller than an earlier 200 DPI version) plus `PIL
   optimize=True`. **Important fix**: some "formulas" are actually plain
   prose citation notes (e.g. "Volume of foundation can be computed based
   on Hp of the engine, Table..."). matplotlib mathtext does NOT throw on
   plain English text — it silently renders it as jammed-together
   no-space italic variables. So before attempting math-mode rendering,
   check `plain_word_count = len(re.findall(r'\b[a-zA-Z]{3,}\b', conv))` —
   if ≥4 words and no backslash command present, route straight to the
   plain-text fallback renderer instead of trying (and "succeeding" at)
   math mode.
3. `build_pdf_html.py`: builds one HTML page (`formula_sheet.html`) with a
   2-column `inline-block` grid per section (NOT `display:flex` — weasyprint
   has a bug/limitation where a flex container that doesn't fit remaining
   page space pushes its *entire* content to the next page instead of
   splitting; `inline-block` paginates normally).
4. `weasyprint` converts to PDF. **Page setup**: `@page { size: 8.5in 13in;
   ... }` (Folio, not Letter) with **no forced page-break-before** on
   `.section-page` — content should flow continuously, packing as much as
   fits per page, only advancing to a new page when it naturally runs out
   of room. Do not reintroduce `page-break-before: always` — that was
   explicitly removed per the user's request ("aakyat lahat pag pwede" /
   let everything flow up when it fits).

**Known trap**: `build_pdf_html.py` has its own hardcoded CSS block. Any
manual edit made directly to the generated `formula_sheet.html` (like the
Folio-size / no-page-break change) gets **wiped out** if
`build_pdf_html.py` is re-run without also updating the template inside the
script itself. Always make page-setup changes in `build_pdf_html.py`, not
just in the generated HTML.

This PDF must be regenerated any time the corresponding handout section's
reference formulas change in `practice-hub.html` (extract → render → build
→ weasyprint, in that order).

---

## 8. General verification workflow (do this after every edit)

1. **Syntax check**: extract the last `<script>...</script>` block from the
   file and run `node --check` on it. Do the same for `ME_Boards_Practice_Hub_Diary.html` after every diary edit (its single script; a stray `\\"` in a bullet once broke the whole page and left only an empty calendar). (There may be multiple `<script>`
   tags — the app logic is in the *last* one.)
2. **CSS brace balance**: quick sanity check,
   `css.count('{') == css.count('}')` between `<style>` and `</style>`.
3. **Render-verify with jsdom** (not just syntax-check!) — load the file
   with `runScripts: 'dangerously'`, call `showView('view-...')` for the
   view(s) touched, and assert real things: question counts
   (`.question` elements), filter panel presence/section counts, specific
   text content. A file that "parses" can still be logically broken (wrong
   topic assigned, wrong count, filter panel missing).
4. **Backslash-integrity scan**: after bulk LaTeX edits, walk the edited
   region character-by-character counting consecutive `\` runs — an *odd*
   run length immediately followed by a letter (not `u`, which is the
   unicode-escape case) indicates a broken escape.
5. Always compare **before/after total question counts** per quiz
   (`{ q:` occurrences) after any bulk edit — silent drops have happened
   before (duplicate questions, accidentally deleted content mid-edit).
6. **NEVER use `Get-Content`/`Set-Content`/`Out-File` (bare, without an
   explicit encoding) on this file in PowerShell, and never round-trip it
   through `Get-Content` + `[System.IO.File]::WriteAllLines`/`WriteAllText`
   for a bulk edit.** This file has no BOM, and Windows PowerShell 5.1's
   `Get-Content` silently defaults to the system ANSI codepage (not UTF-8)
   when there's no BOM to detect — every literal multi-byte UTF-8 character
   already in the file (em dashes, °, ·, √, ≤, ≥, →, etc. — anything not
   written as a `\uXXXX` escape) gets silently misread as 2-3 garbage
   characters, then re-saved as valid UTF-8 *of that garbage* (mojibake
   like "â€"" in place of "—"). This actually happened once (tagging PS9/
   PS10/Trivia9/Trivia10 with `topics:` via a `Get-Content`→edit→
   `WriteAllLines` script) — it silently corrupted ~1,400 characters
   across the ENTIRE file, not just the lines being edited, and was only
   caught by chance on a post-edit spot-check. It was recoverable this one
   time (`[System.Text.Encoding]::GetEncoding(1252).GetBytes(corruptedText)`
   recovers the original UTF-8 bytes, then re-decode with UTF-8 — but only
   because nothing had been saved/overwritten in between and the corruption
   was a single, uniform, reversible pass). **Always read/write this file's
   full bytes explicitly as UTF-8**: `[System.IO.File]::ReadAllBytes($path)`
   + `[System.Text.Encoding]::UTF8.GetString(...)` to read,
   `New-Object System.Text.UTF8Encoding($false)` (false = no BOM, matching
   this file) + `[System.IO.File]::WriteAllText($path, $content, $utf8NoBom)`
   to write. After any PowerShell-driven bulk edit, grep/count for mojibake
   telltales (`â€`, or any char in the `[\u0080-\u009F]` range) across the
   WHOLE file, not just the edited region, before considering the edit done.

---

## 8b. Version numbering convention (4-tier: w.x.y.z)

This app uses a 4-tier version number — **epoch.major.minor.patch** — and
the meaning of each digit is deliberate. **Do not bump any tier "because
it's been a while"; the trigger is always about what the change actually
is:**

- **PATCH (w.x.y.`z+1`)** — the default. Any single self-contained change:
  one bug fix, one UI/CSS tweak, one ruling update, a partial/in-progress
  content batch (e.g. "first 10 of 77 Problem Set questions"). If you can
  describe it in one changelog bullet, it's a patch. This is what "bump a
  version for every forward-moving change" means in practice — most work
  sessions produce a string of patches.
- **MINOR (w.x.`y+1`.0)** — a chapter closes. Concretely: a Handout, Sample
  Problems set, Problem Set, or Trivia quiz goes from not-existing (or
  partially built) to fully built and audited; a full "Day" of content
  across all four types is completed; or a real new feature ships (e.g.
  the "Practice by formula" filter). Ask: "would I summarize this session
  as *X is now done*?" — if yes, it's minor, not a patch.
- **MAJOR (w.`x+1`.0.0)** — a change to the shape of the app itself, not
  its content: adding a whole new subject track (PPE, then later MD), a
  rename, a structural rebuild of the home page/navigation. Do not bump
  major just because a lot of patches accumulated — it must be its own
  qualifying event.
- **EPOCH (`w+1`.0.0.0)** — rare and deliberate, reserved for the whole
  product changing shape: e.g. this stops being a single self-contained
  HTML file and becomes a real multi-file app, the reviewer becomes
  genuinely content-complete across every subject (Math + PPE + MD all
  fully built) and "launches" as a finished product, or it gets rebuilt on
  a different platform entirely. Something expected only once or twice in
  the file's whole lifetime — as of this writing the epoch is still `1`.

**When several patches in one real day culminate in a chapter closing**,
the closing change gets the minor bump and the patches before it in that
same day keep their own patch numbers under the *previous* minor line
(e.g. `1.3.0.1` fixes, then `1.3.0.2` fixes, then the Handout that
completes the chapter ships as `1.3.1.0` — not `1.3.0.3`).

This convention (and the 4-tier w.x.y.z shape itself) was applied
retroactively to the entire changelog and diary history in one pass — see
the in-app Changelog for the resulting version numbers, currently running
through `1.3.7.1`. Follow it going forward rather than defaulting to
patch-only bumps for everything.

**Admin-only changes never appear in the Changelog, not even as a filler line (LAX, 2026-10-18).** Anything only the admin sees (Device Tracker, Calendar, Block, Rename/Delete, IP/in-out logging, Firebase, rules files) is described in the diary only. The visible version list must be **contiguous with no gaps** and its top entry is the file's version (and filename), so a dev-only change does not take a new visible version number: it ships under the current one. If a gap ever appears, renumber the Changelog (and the filename/VERSION comment) so it closes. Diary stamps may use older numbers: the 2026-10-18 diary entry records the renumbering (the file went from v1.3.59.82 to v1.3.59.75).

**Diary-only changes are never changelog-worthy.** A fix or feature to
`ME_Boards_Practice_Hub_Diary.html` itself (the dev diary tool) is invisible
to the end user and must NOT get a CHANGELOG entry — log it in the diary's
own entries only. Two diary-only fixes were caught and removed from the
changelog after initially being added by mistake; the version numbers they
occupied were simply skipped rather than renumbered around. The dev diary
should still get its own version bump per §8b's patch/minor rules (it's
real forward-moving work), it just doesn't surface in the user-facing
Changelog view.


## 8c. Formula Builder features (Math Day 12-18) — full detail is in the in-file RULINGS §11-12

- **Derived-formula stage**: `FB_DERIVED[topic] = { b: [...], d: [{eq, needs}] }`
  (83 topics). After naming the equation, `fbDerivedStage` shows originals
  (left) and derived formulas (right, hidden until built), one Build question
  per derived formula in order (d1, d2, ...), arrows to switch (a finished equation stays shown until you press the arrow), and an "Understand
  these first" note from the `needs` chain (earlier derived ones tagged
  "(derived)"). `needs` use `b1..` / earlier `d1..` only; every equation must
  parse with `eqParse`. Topics without a clean derivation keep the old step. The stage runs only for a problem whose own equation is one of the topic's derived formulas (`fbDerivedFor`); other problems of the topic get the normal Complete/Build step.
- **Study checklist** (`scChecklistV1`, `REPS = 5`): a right final answer in the
  builder calls `window.scBump(day, topic)` (+1, max 5, boxes still editable; counts on every checklist day 12-18, not just SR_DAYS; only the no-choices Show full solution button blocks it). Pressing Next after a counted answer calls `window.scFlash()`: the menu opens ~3 s, the new check blinks, then it closes (it stays open and fires launchConfetti when the topic reaches or is already at 5 checks).
  Tabs cover Day 12-18. Topics without builder problems are not listed. Topic names there and in the Mastery map jump to the builder via `fbGoTo`.
- **Symbols come from the Handout**: Formula Builder formulas, givens and `FB_DERIVED` equations must use the Handout's own formulas and symbols (e.g. Discount Rate = (O − A)/O, D = O − A), never newly invented symbols.
- **Mastery map Stats** unlock per type after all its problems are answered.
- **`SR_MODES_SHOWN = false`** hides Study/Test/Review/Free buttons (builder
  always Free practice); set true to restore them.

---

## 9. Known pending / unresolved items (carry these over)

- **OPEN BUG, PARTIALLY RESOLVED as of v1.3.8.1**: user originally reported
  seeing literal `\(\)` (unrendered LaTeX source) in Handout Day 10 and
  Problem Set Day 9. One confirmed, reproducible cause of this exact symptom
  was found and fixed in v1.3.8.1: clicking the **Retake** button rebuilds a
  quiz's DOM via `performRetake`/`renderQuizNow` without going through
  `showView` again, and `renderQuizNow` never typesets on its own (see §1's
  Lazy rendering section) — so every hint panel rebuilt by Retake was left
  showing raw `\( \)` source until `performRetake` was given its own
  `MathJax.typesetPromise([container])` call. If raw `\(\)` is reported
  again anywhere else, check first whether it's specifically after Retake
  (now fixed) or some other trigger (original root cause for the Handout
  10 / PS9 report was never separately confirmed — get a screenshot and
  reproduction steps before assuming it's the same bug).
- Math Day 9–12 (Differential/Integral Calculus for 9–11, Engineering
  Economics for 12) are now fully built across all four content types —
  Handout, Sample Problems, Problem Set, and Trivia — for every day 9
  through 12, including Problem Set Day 12's full 77 questions (completed
  in v1.3.8.0). Math Sample Problems Day 1 (16 problems; the source docx was truncated at #16) was added in v1.3.12.0. Math Problem Set Day 1 (31 questions, shares `math1FormulaOutline` with the Sample Problems; a few source choices were lost in the docx and rebuilt, and Q5's printed system disagrees with the key, both disclosed) was added in v1.3.13.0. Math Trivia Day 1 (15 questions, same shared outline; Q8 printed total disagrees with the key and some choices were rewritten, disclosed in hints) was added in v1.3.14.0. The pending-placeholder loop for Math Problem Sets now starts at Day 2 so it no longer blurs Day 1. Math Sample Problems Day 2 (10 problems, `math2FormulaOutline`, no answer key in the docx so all solved from scratch) was added in v1.3.15.1. Math Sample Problems Day 3 (15 problems, `math3FormulaOutline`, answer key supplied; the docx is titled "Trivia Math Day 3, Set A" but was sent as Sample Problems) was added in v1.3.19.0. Math Handout Day 2 was added in v1.3.15.0 (the docx's vectors problem A = 2i+4j+8k, parts A-F, is still left out: it never gives vector B or C; LAX instead supplied a "(M × N) · P" vectors problem in v1.3.16.1). Math Problem Set Day 3 (42 questions, shares `math3FormulaOutline`, declared before the Problem Set data; all matched LAX's key, source typos disclosed in the hints) was added in v1.3.21.0. Math Trivia Day 3 (15 questions, shares `math3FormulaOutline` with Sample Problems Day 3, all matched LAX's key; Q15 has a duplicate choice 8, disclosed) was added in v1.3.20.0. Math Problem Set Day 4 (44 questions, `math4FormulaOutline`, key supplied; Q34 disagrees with the key and is disclosed, a few cut-off choices rebuilt) was added in v1.3.22.0. Math Sample Problems Day 4 (13 probability problems, shares `math4FormulaOutline` with the Day 4 Problem Set, no key so all solved from scratch; Q10 source mismatch disclosed and choice D rewritten) was added in v1.3.23.0. Math Handout Day 5 (Algebra/Trigonometry: progressions, angles, right triangle, logarithms, exponential growth/decay, sine/cosine law, identities, bearing; 18 sample problems, no key so all solved from scratch, source typos disclosed) was added in v1.3.25.0, with a `math5FormulaOutline` declared (after `math4FormulaOutline`) for the later Day 5 quizzes to share. Math Handout Day 7 (Analytic Geometry: coordinates, straight line, line properties, circle, parabola; 17 sample problems, no key so all solved from scratch, 17 diagrams embedded, source issues disclosed on the page) was added in v1.3.26.0. Math Handout Day 6 (Geometry and Solid Mensuration: Polygon, Plane Areas, Volumes; 20 sample problems solved from scratch, all 31 source figures embedded, source issues disclosed on the page) was added in v1.3.28.0. Math Sample Problems Day 5 (11 arithmetic progression problems, shares `math5FormulaOutline` with the Day 5 Handout, no key so all solved from scratch; the docx ended at #11 with no solution and Problem 7's printed choices stop at 80 m while the answer is 81 m, choice D rewritten, both disclosed) was added in v1.3.29.0. Math Sample Problems Day 7 (9 Analytic Geometry problems, `math7FormulaOutline` declared with the Day 7 block for the later Day 7 quizzes to share, no key so all solved from scratch; the docx ends at #9 with its solution cut off, and the Problem 3 figure shows C(1, -3) against C(1, 3) in the text, both disclosed) was added in v1.3.31.0. Math Sample Problems Day 8 (8 ellipse problems, `math8FormulaOutline` declared before them, no key so all solved from scratch, 3 diagrams embedded; a typo'd choice and a duplicate choice rewritten, disclosed in the diary) was added in v1.3.32.0. Math Trivia Day 4 (15 questions, shares `math4FormulaOutline`, key supplied and all matched; Q2 uses the population SD formula and Q9 choice A had a typo, both disclosed in the hints; added a "Median" topic) was added in v1.3.33.0. Math Sample Problems Day 6 (14 problems, `math6FormulaOutline` declared before them, no key so all solved from scratch, 3 diagrams embedded, source issues disclosed in the diary) was added in v1.3.30.0. Math Handout Day 3 was added in v1.3.18.0 (clock/geometric/investment, variation, binomial, partial fraction, permutations; no answer key, all solved from scratch; two source partial-fraction answer sets were wrong and corrected, disclosed on the page). Math Handout Day 1 was added in v1.3.11.0 (Algebra:
  significant figures, factoring, exponents, equations, matrices). Math
  Handouts 4–8 and PPE/MD Day 9–12 content remain empty/pending, out of
  scope until content is supplied.
- (Stale line removed: the "Practice by formula" filter now exists for all of
  Math Day 9–12, see §3's v1.3.10.0 update.)
- PS1–PS4 topics/filters are done (all 8 PPE Day 1–4 quizzes verified), but
  double-check nothing regressed if further handout content edits happen,
  since `handout1..4FormulaOutline` topic lists were built by
  hand-inspecting each question — any newly added/edited question in those
  quizzes needs a topic assigned too.
- Several items across Math Day 9–12 have choices/printed answers that
  don't cleanly match the derived algebra (flagged as likely OCR/source
  issues, each followed the given answer key with an explicit disclosure
  note in its hint rather than silently forcing a fit) — not further
  investigated, would need the original source material to resolve for
  real: ~8 items in Problem Set Day 9, PS10 item #9, and in Problem Set
  Day 12 — items 25, 30, 66, and 69 (item 11 was initially miscategorized
  as a discrepancy during batch-building and corrected on the full
  answer-key cross-check — it actually matches cleanly).
- Full retrofit of the given-per-equation-boxed ruling (§4(o)) for Handout
  9-11, Sample Problems 9-11, Problem Set 9-11, and Trivia 9 & 11 is still
  deferred to a later pass — Problem Set/Trivia 12 and Handout/Sample
  Problems 12 already follow it.

- **Missed Questions Compilation (5th column, v1.3.34.0; Day 5-8 added v1.3.35.0, Day 9-12 added v1.3.36.0)**: Math Day 1-12 each have `view-missed-N` / `quiz-missed-N` fed by `missedNData` (declared after the Day 4 Trivia `renderQuiz`, sharing `mathNFormulaOutline`). Questions were pasted by LAX from several students' reports, de-duplicated; choices not recorded are `""` (blank). More days: add `missedNData`, a `view-missed-N` block, push N into `availableMathMissed`. Days not in that list render blurred/disabled.

**Units on unknowns (v1.3.66.13, LAX 2026-10-26):** a substituted equation carries the unit on the unknown too (`1000 kN·m = (500 kN)(d m)`), with the full cancel marks; Formula Builder variant generators (`VG_SPECS`, `vgCylinder`) do the same. Pure algebra and empirical lines stay without units. Sample Problems hint buttons sit in one row under the question (`topSampleHints`, v1.3.66.12).
