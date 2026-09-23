# AV Gallery — 3 interfaces + 45 images

A single site that **lists and links to everything**:

- **3 interactive interfaces** (open directly, press `Esc` to come back to the gallery)
- **45 design images** (Pinterest / Dribbble inspired, generated) — click to enlarge in a lightbox
- Press **`/`** anywhere to jump to / cycle through the interfaces

| # | Interface | File |
|---|-----------|------|
| 1 | AV — Digital Designer (dark portfolio) | `designer.html` |
| 2 | One Task at a Time (purple SaaS) | `saas.html` |
| 3 | Navia — Frontend Developer (3D portfolio) | `navia.html` |

Images live in `assets/gallery/g01.jpg … g45.jpg` (15 dark · 15 SaaS purple · 15 3D character).

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Stack

Plain HTML / CSS / vanilla JS — no build step. Static hosting compatible (GitHub Pages).
