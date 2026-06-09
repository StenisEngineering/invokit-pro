# InvoKitPro v13 — Data Safety & Trust Update

## What changed

### Phase 1 — Data safety foundation
- Keeps licence reactivation separate from business records.
- Preserves existing IndexedDB/localStorage records from empty-state overwrite.
- Adds dashboard Data Safety Status card.
- Adds visible Last Backup / Records / Storage status.
- Adds restore check for existing local data.

### Phase 2 — Premium onboarding and backup UX
- Adds first-time setup wizard after activation.
- Adds improved Backup Centre in Settings.
- Adds device-transfer backup workflow using the existing JSON backup.
- Keeps backup reminders visible and more user-friendly.

### Phase 3 — Business-level upgrade readiness
- Adds Cloud Protect information screen and UI placeholders.
- Makes clear that cloud sync requires a secure backend before activation.
- Prepares product direction for Supabase/Firebase/Google Drive integration.

## Important limitation
This update cannot recover data already deleted by clearing all browser/site/PWA data if the customer has no backup file. It prevents future accidental overwrite and improves backup behaviour.

## Deployment
Replace the live app files with the contents of this folder, especially `index.html` and `sw.js`.
