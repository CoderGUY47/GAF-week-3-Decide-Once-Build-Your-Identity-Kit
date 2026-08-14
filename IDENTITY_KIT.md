# Identity Kit — Decide Once

> **Identity Philosophy**: A consistent look separates a portfolio that feels intentional from one that feels thrown together. Make these decisions once, and every page, component, and case study inherits them.

---

## 1. Two-Line Style Note

```text
Fonts: Outfit (headings/body, 400/500) & JetBrains Mono (code/metadata, 400/500).
Palette: Pitch Black #000000, Pure White #ffffff, Bright Gray #f5f5f5, Body Gray #d4d4d4, Muted Gray #a3a3a3, Dim Gray #737373, with 3–9% translucent white glass layers; a distraction-free monochrome aesthetic where the work is unconditionally the loudest element on the page.
```

---

## 2. Typography Specimen

| Typeface | Google Fonts Import | Weights | Roles |
| :--- | :--- | :--- | :--- |
| **Outfit** | `family=Outfit:wght@300;400;500;600;700` | 300, 400, 500 | Headings, hero display, body copy, navigation, buttons |
| **JetBrains Mono** | `family=JetBrains+Mono:wght@400;500` | 400, 500 | Badges, code snippets, tokens, metadata tags, timestamps |

### Font Hierarchy & Sizing
- **Hero Title**: `32px` (`-0.8px` letter-spacing, weight `500`).
- **Section Headers**: `20px` (`-0.3px` letter-spacing, weight `500`).
- **Card Titles**: `14px–15px` (weight `500`).
- **Body Text**: `14px–15px` (`#d4d4d4` / `#f5f5f5`, line-height `1.6`).
- **Metadata / Badges**: `11px–12.5px` (`JetBrains Mono`, tracking `+0.5px`).

---

## 3. Strict Monochrome Palette

Depth and hierarchy are maintained purely through value, opacity, and blur without introducing distracting color noise.

| Swatch Name | Hex / Value | Usage & Meaning |
| :--- | :--- | :--- |
| **Pitch Black** | `#000000` | Page background (`body` background) |
| **Pure White** | `#ffffff` | Primary action button fill, high-contrast headings, active icons |
| **Bright Gray** | `#f5f5f5` | High-emphasis body and subheadings |
| **Body Gray** | `#d4d4d4` | Standard paragraph text and prose |
| **Muted Gray** | `#a3a3a3` | Secondary text, captions, inactive links |
| **Dim Gray** | `#737373` | Subtle metadata, timestamps, copyright notes |

---

## 4. Glassmorphism & Translucency Matrix

Built using stacked pure-white opacities over `#000000` with `backdrop-filter: blur(20px)`:

```css
/* subtle layer: nested tags, inputs, secondary panels */
background: rgba(255, 255, 255, 0.03);

/* card base layer: standard content cards and modules */
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);

/* header / active layer: sticky navigation, selected items */
background: rgba(255, 255, 255, 0.07);

/* hover state layer: cards, interactive items on hover */
background: rgba(255, 255, 255, 0.09);
```

---

## 5. Core Styling Rules

1. **Zero Border Outlines**:
   ```css
   div, section, article, header, nav, footer, main, aside,
   button, input, textarea, select, .card, .badge, .btn, .glass-panel {
     border: none !important;
     border-color: transparent !important;
     outline: none;
   }
   ```
2. **Zero Shadows**:
   ```css
   *, *::before, *::after {
     box-shadow: none !important;
     text-shadow: none !important;
   }
   ```
3. **85% Responsive Container**:
   ```css
   .container {
     width: 85%;
     max-width: 1280px;
     margin: 0 auto;
   }
   ```
4. **Flaticon UIcons Alignment**:
   ```css
   i.fi {
     display: inline-flex;
     align-items: center;
     justify-content: center;
     line-height: 1;
     font-size: 1em;
     vertical-align: middle;
     flex-shrink: 0;
   }
   ```

---

## 6. Logo & Favicon Assets

- `favicon.svg`: Minimalist vector mark for browser tab icon.
- `assets/logo-monogram.svg`: Geometric signature emblem for profile avatars and watermarks.
- `assets/logo-horizontal.svg`: Horizontal wordmark for desktop navigation headers.

---

## 7. Pass / Revise Verification

- [x] **One or two fonts**: Outfit + JetBrains Mono.
- [x] **Tight palette**: 6 monochrome hex values + 4 glass opacities.
- [x] **Logo / favicon exists**: SVG vector logo suite generated and displayed.
- [x] **Coherent mood note**: Minimalist, distraction-free framing that lets the work shine.
