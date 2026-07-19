# InvoKitPro — Modern-App Improvement Checklist

Benchmarked against modern apps (Stripe, Wave, Notion, Linear, polished mobile-first tools). Created 2026-07-18. Tick items as they ship.

## 🔴 High priority — usability & trust
- [x] **1. Touch targets → 44px+** — DONE 2026-07-18 (`invokit-touch-targets` style block, ≤768px, !important to beat mobile-pass 38/42px rules). Verified all controls ≥44px on mobile across screens; desktop unaffected.
- [x] **2. Offline / connection indicator** — DONE 2026-07-18 (`initOfflineIndicator` injects a subtle bottom-left "Offline" pill; "Back online" toast on reconnect).
- [x] **3. Undo on delete** — DONE 2026-07-18 (`showUndoToast`; invoice delete now deletes immediately + "Undo" restores). NOTE: clients & catalogue deletes still use the confirm modal — extend undo to them later.
- [x] **4. Primary action on mobile** — DONE 2026-07-18. Speed-dial FAB (`initFab`/`updateFab`/`fabDo`), mobile only. UPDATED per feedback: now shows on **Invoices only** (was Dashboard + Invoices — user felt it was there too often). Closes on outside-tap and back button.
- [x] **Invoice editor layout** — DONE 2026-07-18 (feedback-driven). Line-item input cells are now visibly boxed (`.item-input` bg+border, was transparent-until-focus) on desktop AND mobile. Mobile/tablet line items stack into a card (`grid-template-areas`, was forced `min-width:780px` sideways-scroll). Verified desktop grid intact, mobile/tablet stacked, no overflow.

## 🟡 Medium — consistency & polish
- [~] **5. Design-token system** — FOUNDATION DONE 2026-07-18. Added a token vocabulary in `:root` (type scale `--fs-2xs`…`--fs-display`, `--fw-*` weights, `--lh-*` line-heights, `--sp-*` spacing). Tokenised the semantic hierarchy (page-title, stat-value, card-title, settings-title, editor-title, field-label, card-meta, btn). Snapped all sloppy half-pixel sizes (11.5/12.5/13.5/14.5/12.8/10.5) onto the clean scale — the main "no irregularities" win. Verified desktop/tablet/mobile, no overflow. STILL TO DO (follow-on stages): adopt `--sp-*` spacing + colour tokens across rules, tokenise the remaining off-scale sizes (19/21/23/24/28/34), and remove the 529 `!important` overrides now that a clean base exists.
- [ ] **6. Accessibility pass** — only 4 `aria-label`, 0 `role=`, 2 `focus-visible`. Add ARIA, roles, focus-visible, keyboard nav.
- [ ] **7. Richer empty states** — turn "No documents found" into a CTA ("No invoices yet — Create your first →").
- [ ] **8. Replace native confirm()** — device removal uses browser `confirm()`; everything else uses the styled modal. Make it consistent.
- [ ] **9. Screen-by-screen density pass** — Clients, Catalogue, Recurring, Analytics, Settings (Dashboard/Invoices/Receipts done).

## 🟢 Lower — power features & delight
- [ ] **10. Swipe actions** on mobile list cards (swipe to mark Paid / delete).
- [ ] **11. Search everywhere / command palette + keyboard shortcuts** (currently 1 shortcut, search only on Invoices).
- [ ] **12. Bulk actions** — select multiple invoices to mark paid / export.
- [ ] **13. Loading / transition polish** — no skeletons today (data is local so instant); smoother page transitions.

## Already done this cycle ✅
- Licence hardening (ES256 + device management), light theme + gray sidebar, mobile sidebar-closes-on-tap, phone back-button navigates within app, settings tabs on top, themed update banner + "updated" toast, mobile type de-inflation, dashboard greeting + welcome, mobile card layouts for Invoices & Receipts.

## Recommended sequence
Quick wins (#1, #2, #3) → design-token system (#5) → remaining screens on top of the tokens → power features.
