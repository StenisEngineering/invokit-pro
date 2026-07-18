# InvoKitPro — Modern-App Improvement Checklist

Benchmarked against modern apps (Stripe, Wave, Notion, Linear, polished mobile-first tools). Created 2026-07-18. Tick items as they ship.

## 🔴 High priority — usability & trust
- [x] **1. Touch targets → 44px+** — DONE 2026-07-18 (`invokit-touch-targets` style block, ≤768px, !important to beat mobile-pass 38/42px rules). Verified all controls ≥44px on mobile across screens; desktop unaffected.
- [x] **2. Offline / connection indicator** — DONE 2026-07-18 (`initOfflineIndicator` injects a subtle bottom-left "Offline" pill; "Back online" toast on reconnect).
- [x] **3. Undo on delete** — DONE 2026-07-18 (`showUndoToast`; invoice delete now deletes immediately + "Undo" restores). NOTE: clients & catalogue deletes still use the confirm modal — extend undo to them later.
- [ ] **4. Primary action on mobile** — "New Invoice" is top-right; move to a floating button (FAB) or bottom bar for thumb reach.

## 🟡 Medium — consistency & polish
- [ ] **5. Design-token system** — root cause of most rough edges: 529 `!important`, ~14 stacked override blocks, page-title defined 11×, duplicated print styles. Establish one scale for type / spacing / radius / colour. Highest-leverage but invasive.
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
