# ME access system: verbatim extract (reference only)

Copied unchanged from `MEBoards_ PracticeHub_by LAX_v1.4.19.0.html` (line numbers are for that version). Not wired into any page.

| File | Source lines | Goes where |
|---|---|---|
| access.css.part | 3428-3492 | inside the page's style block |
| gate-and-admin-login.html.part | 3681-3695 | right after the opening body tag |
| admin-view.html.part | 3961-3973 | with the other view divs |
| access-gate-admin-tracker.js.part | 117185-117800 | its own script block, after the app script (the IIFE ends with `boot();`) |
| firestore.rules | firebase/firestore.rules | publish in the Firebase console |

To port: replace CFG (all fields), ADMIN_UID (also in firestore.rules), LAX_LINK, the "LAX" texts, and remove the anonymous "Try free" button if Anonymous is disabled. The code expects `showView()`, `.lax-img` (logo tapped 10x), `.made-by-credit`, CSS variables (--accent, --line, --ink, --sub, --disabled-bg) and `#view-home .welcome-note` (optional) to exist.
The gate is client-side only; it does not protect content by itself.
