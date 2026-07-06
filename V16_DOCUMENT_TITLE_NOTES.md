# InvoKitPro v16 — Document Title / Subject Update

This update lets users add an optional title/subject to any invoice or quotation.

## Added
- "＋ Add Invoice / Quote Title / Subject" button at the top of the editor.
- Optional title field with a "✕ remove" control (hidden until requested).
- Title label and button text adapt to Invoice vs Quote mode.
- Title saved on the document (`inv.title`) and restored when editing.
- Title rendered prominently on both Classic and Bold print/preview templates
  (between the header and the From / Bill To block).
- Title shown under the client name in the Invoices and Receipts lists so
  documents are identifiable at a glance.
- Service worker cache bump: `invokit-v16-doc-title` (both `sw.js` and the
  inline blob SW registered inside `index.html`).

## Why this matters
A short subject line — e.g. "Kitchen Renovation — Phase 1" or "Website Redesign
Project" — makes documents easier to recognise for the client and inside the app,
which matters for project-based work (construction, installation, consulting,
catering, printing).

## Notes
- Fully backward compatible — existing invoices/quotes without a title are
  unaffected (the field and template block only render when a title exists).
- No data migration required.

## Deployment
Replace your live `index.html` and `sw.js`. Keep this notes file for internal
documentation.
