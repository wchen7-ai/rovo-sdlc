# Rovo SDLC

A bilingual (English / 简体中文) interactive page explaining how Rovo helps across the software development lifecycle. Not tied to any customer.

**Live:** `https://wchen7-ai.github.io/rovo-sdlc/` (after GitHub Pages is enabled)

## What's on the page

| Section | Content |
| --- | --- |
| Hero | Infinity loop of the SDLC with a **16% / 84%** toggle: GenAI gains in the IDE vs. dev productivity challenges everywhere else |
| Part 1 · Alignment to execution | Charter → PRD → Epic → Ready Check → Stories → Compliance → Estimation → Sprint, with Artefact checking and Jira workflow automation gates |
| Part 2 · Developer productivity | Context handoff → Coding Standards → Jira Coding Agent → AI Code Reviewer → Vulnerability auto-assign → Self-healing pipelines |
| Continuous feedback | Learnings flow back to Confluence and Teamwork Graph |

Clicking a step shows what Rovo does, the products involved and the challenges it addresses, and highlights the matching stage and challenges on the loop.

## Repo layout

```
rovo-sdlc/
├── index.html        ← layout, styles and rendering logic (rarely needs editing)
├── data/
│   └── content.js    ← ALL text, steps, challenges and product names (EN + ZH). Edit here.
├── assets/
│   └── icons.js      ← line icons; swap for official Atlassian assets later
└── README.md
```

## How to make a change

### Change wording, add or remove a step, rename a product
1. Edit **only** `data/content.js`. Every item has an `en` and a `zh` block; update both.
2. Product names stay in English in both languages. Names starting with `Rovo` render as purple tags; others render blue.
3. Commit and push. GitHub Pages redeploys in about a minute.

### Add a challenge to the loop
Add an entry to `SDLC.CH` with `en`, `zh`, an `x`/`y` position and a text anchor, then reference its key in a step's `ch` list.

### Use official Atlassian icons
Put the SVG/PNG files in `assets/` and replace the matching entry in `assets/icons.js` (or the `ico()` call in `index.html`) with an `<img>`.

## Design

- Colours follow the Atlassian Design System light-theme token values (e.g. `Blue700 #0C66E4`, text `#172B4D`). Check them against the latest palette at atlassian.design after the 2025 brand refresh.
- Font stack starts with **Atlassian Sans** and falls back to system fonts.
- Prints to A4 landscape.

## Sources

- Infinity loop, 16% / 84% framing and the challenge list: Rovo Use Cases deck (internal)
- Part 2 steps: E2E AI SDLC demo flow (internal)

## Disclaimer

Illustrative only. Product capabilities and names may change; check current Atlassian documentation before presenting.
