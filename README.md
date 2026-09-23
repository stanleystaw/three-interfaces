# AV Gallery — 3 interfaces + 45 images

A single site that **lists and links to everything**:

- **3 interactive interfaces** (open directly, press `Esc` to come back to the gallery, `/` to cycle)
- **45 design images** in a filterable grid + lightbox:
  - **10** AI-generated shots (dark portfolio style, `g01–g10`)
  - **35** found via **Pinterest / Dribbble / Behance** searches (`f01–f35`) — each credited with its source link in the lightbox
- Breakdown: 15 Dark · 15 SaaS Purple · 15 3D Character

| # | Interface | File |
|---|-----------|------|
| 1 | AV — Digital Designer (dark portfolio) | `designer.html` |
| 2 | One Task at a Time (purple SaaS) | `saas.html` |
| 3 | Navia — Frontend Developer (3D portfolio) | `navia.html` |

## Run locally

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

## Stack

Plain HTML / CSS / vanilla JS — no build step. Static hosting compatible (GitHub Pages).
