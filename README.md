# GAF Week 3 — Decide Once: Build Your Identity Kit

> **A consistent look is what separates a portfolio that feels intentional from one that feels thrown together.**

Live demo → **[🚀 Deploy link coming soon](#)**

---

## Overview

This is a fully interactive **Identity Kit** built for GAF Week 3. It documents and demonstrates a complete, decision-locked design system — fonts, palette, logos, and UI components — so every future page, case study, and build inherits it automatically.

Built with **React 18 + Vite + TypeScript + Tailwind CSS v3 + shadcn/ui**.

---

## Design System

### Typography
| Font | Role | Weights |
|---|---|---|
| **Outfit** | Headings, body, buttons, nav | 300 · 400 · 500 |
| **JetBrains Mono** | Code, badges, metadata, hex values | 400 · 500 |

### Color Palette
| Name | Hex | Role |
|---|---|---|
| Pitch Black | `#000000` | Canvas background |
| Pure White | `#ffffff` | Primary actions & headings |
| Bright Gray | `#f5f5f5` | High-emphasis body |
| Body Gray | `#d4d4d4` | Standard paragraph text |
| Muted Gray | `#a3a3a3` | Captions & nav inactive |
| Dim Gray | `#737373` | Subtle labels & footers |

### Glass Layers
```
Subtle   → rgba(255, 255, 255, 0.03)  — nested surfaces, inputs
Card     → rgba(255, 255, 255, 0.05)  — primary content cards
Header   → rgba(255, 255, 255, 0.07)  — sticky nav, active panels
Hover    → rgba(255, 255, 255, 0.09)  — interactive hover states
```
All layers use `backdrop-filter: blur(20px)`. Zero borders. Zero shadows.

### Two-Line Style Note
```
Fonts: Outfit (headings/body, 400/500) & JetBrains Mono (code/metadata, 400/500).
Palette: Pitch Black #000000 · Pure White #ffffff · Bright Gray #f5f5f5 · Body Gray #d4d4d4 · Muted Gray #a3a3a3 · Dim Gray #737373; 3–9% white glass (20px blur); distraction-free monochrome—work is always the loudest element.
```

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 18 + Vite 6 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v3 |
| Components | shadcn/ui |
| Icons | Lucide React |
| Notifications | Sonner |

---

## Sections

- **Hero** — Mood banner + system prompt copy
- **Typography** — Font specimens + live type tester
- **Palette** — 6 swatches + 4-tier glass matrix
- **Logo Studio** — Wordmark, monogram, favicon + SVG download
- **Component Showcase** — Buttons, badges, tabs, dialogs, inputs
- **Style Note Hub** — Two-line note + full system prompt export
- **Checklist** — GAF Week 3 pass/revise rubric

---

## GAF Week 3 — Pass Criteria

- [x] One or two fonts only → Outfit + JetBrains Mono
- [x] Tight palette ≈ 3–4 swatches → 6 neutral monochrome shades
- [x] Logo / favicon exists → Wordmark, monogram, 64px favicon
- [x] Coherent mood in style note → Distraction-free; work is always loudest

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

```bash
npm run build   # production build → dist/
```

---

## License

MIT
