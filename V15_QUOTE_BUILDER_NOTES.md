# InvoKitPro v15 — Quote Builder Update

## Added
- New Quote entry point in sidebar and dashboard.
- Quote-specific line item table: S/N, Description, Qty, Unit, Unit Price, Install Rate, Amount.
- Quote calculation: Quantity × (Unit Price + Install Rate).
- Unit dropdown for pcs, lot, kg, meter, m², m³, box, bag, pack, hour, day, set and more.
- Quote preview/print labels now show Quotation/Quote Total instead of Invoice/Total Due.
- Backward compatibility with existing invoice items using qty + price.

## Important
- Existing invoices remain supported.
- Quotes are stored safely alongside invoices using documentType: quote.
- Cloud/roadmap features remain planned only until a secure backend is implemented.
