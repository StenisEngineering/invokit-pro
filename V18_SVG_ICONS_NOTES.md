# InvoKitPro v18 — SVG Icons (no more emoji)

Replaced all emoji / emoji-style icons across the app UI with clean, monochrome
inline SVG icons (Feather-style, stroke = `currentColor` so they inherit the
existing colours). Structure, colours, fonts and the print/PDF templates are
unchanged.

## What changed
- **Sidebar navigation** — Dashboard, New Invoice, New Quote, Invoices, Clients,
  Catalogue, Receipts, Recurring, Analytics, Roadmap, Settings, Install.
- **Action buttons** — Draft (save), Clear (reset), Preview (eye), Duplicate
  (copy), Print/PDF (printer), Email (mail), WhatsApp (chat), close (×), edit
  (pencil), delete (×), download/backup, restore (upload), export.
- **Theme toggle** — hybrid/dark/light now use contrast/moon/sun SVGs
  (`themeBtn` switched from `textContent` to `innerHTML`).
- **Dashboard stat cards** — up/down trend arrows.
- **Search boxes**, **empty states**, **recurring badge**, **paid receipt
  stamp**, **paywall dialogs**, **install / Google-Drive panels**, and the
  **Upcoming Features** caret.
- **Toasts & messages** — these render via `textContent`, so their leading
  emoji were simply removed (e.g. "💾 Draft saved" → "Draft saved"). Cleaner
  wording, no stray glyphs.

## Sizing
- A single `.ic` rule (`width/height:1em`, `currentColor`) sizes every icon to
  the surrounding text. The rule is added to **both** the main stylesheet and
  the **print-window** stylesheet, so the receipt's paid stamp prints at the
  right size.

## Kept deliberately (typography, not emoji)
- Directional arrows in copy/buttons ("Save & Close →", "← Back", "Get Started →")
- Em-dashes and separators.

## Safety
- Print/PDF invoice & quote templates were not touched.
- Verified in-browser: nav, editor, preview, receipt, settings, stat cards and
  theme toggle all render SVGs; toasts show clean text (no raw markup); no
  console errors.
- Service worker cache bump: `invokit-v18-svg-icons`.

## Deployment
Replace your live `index.html` and `sw.js`.
