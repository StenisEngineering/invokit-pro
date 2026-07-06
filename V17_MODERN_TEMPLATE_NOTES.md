# InvoKitPro v17 — Modern Template Finished

The "Modern" invoice/quote template was fully styled in CSS but never selectable
or rendered. This update finishes it.

## Added
- `buildTemplate` now has a `modern` branch that renders using the existing
  `.tmpl-modern` styles (dark top bar, gold document chip, three-column
  From / Bill To / Terms meta row, clean table, bold grand total, footer bar).
- "Modern" added to the editor Template dropdown and the Settings → Default
  Template dropdown.
- "Modern" tab added to the invoice preview (Classic · Modern · Bold).
- Works for both invoices (4-column table) and quotations (7-column table with
  Install Rate), and shows the v16 document title when present.
- Renders correctly in both on-screen preview and the print/PDF window (the
  print stylesheet already contained the full `.tmpl-modern` class set).
- Service worker cache bump: `invokit-v17-modern-template`.

## Safety
- Purely additive: Classic and Bold are untouched; unknown template values still
  fall back to Classic. No data changes.
- Verified in-browser: no console errors; invoice + quote render; tab switching
  and template fallback all pass.

## Deployment
Replace your live `index.html` and `sw.js`.
