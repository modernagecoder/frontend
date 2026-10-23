# Plan B: CAD pricing for Canadian visitors

Owner decisions:
- 2026-10-22: CAD 140 group and CAD 210 1-on-1 a month.
- 2026-10-23: Razorpay CAD is enabled, and a Canadian time zone sees CAD even with an Indian browser language.
- 2026-10-23: the other figures use 1.4 × USD:
  - 6 months at once: CAD 629 group, CAD 941 1-on-1
  - Gemini 1-on-1: CAD 350 a month
  - Holiday camp: CAD 280
  - Priority Demo: CAD 14
- The 2.5% gateway charges apply on top, as for every currency.

**Goal:** a visitor in a Canadian time zone sees and pays CAD everywhere: page prices, the pay popups, Razorpay and /welcome. Everyone else is unchanged.

**Switch:** `canada.live` in `pricing.config.jsonc`, false at first. `?test=canada` forces the Canada view for the owner's preview. Going live means one config flip plus `pricing:apply`, after the backend is deployed.

**Pricing follows the visitor, not the page.**
- An American on the Toronto page still sees USD.
- JSON-LD, md twins and the no-JS crawler view stay USD for now.
- Changing the Canada pages' twins and JSON-LD to CAD is a later question for the owner.

## Detection order
1. `?test=` override.
2. Indian time zone: India.
3. Canadian time zone, when live or under `?test=canada`: Canada.
4. Indian locale: India.
5. Everything else: international.

Canadian visitors keep `__MAC_IS_INDIAN = false`, so all the existing India-only hiding still applies. New globals: `__MAC_REGION` (india, international or canada) and `__MAC_CURRENCY` (INR, USD or CAD).

## Tasks
1. **Backend (deploys first).**
   - `VALID_CAD_AMOUNTS` and CAD in `allowedCurrencies`, in both route copies. An unknown currency becomes a 400 instead of quietly falling back to INR.
   - Add CAD 14 to the paidDemo prices.
   - The formatters in `emailService` and `paidDemo` learn CAD.
   - Tests for all of the above.
2. **Pricing system.**
   - `config.js` REGIONS gets canada.
   - The config gains `plans.*.canada`, `camps.canada`, `sixMonth.canada`, CAD in `chargeCurrencies`, and a `canada` block holding `live` and the time zones.
   - Template FIELDS, render and extract keep the editor round trip.
   - `stamp.js` and `verify.js` map a CAD offer to canada.
   - Generated `MAC_PRICING` carries all of it.
3. **Runtime (`international-pricing.js`).**
   - Detection, a region resolver, a CAD money format, and CAD labels.
   - Anchors, course and camp swaps, the ₹ swap rules and region panels all use the visitor's region.
   - A Canada 6-month grid, or the international one re-priced.
   - A guarded converter for the explicit "USD N" form, Canadian visitors only, using only amounts that are always ours.
4. **Checkout.**
   - Course, camp and demo popups use the region resolver for currency and amounts.
   - The bill shows a currency code on its total row ("$143.50 CAD").
   - The /welcome symbol map and the Pixel and GA currency follow the region.
5. **Source fixes.** The two Canada pages with a bare `$N` (`ai-and-machine-learning-classes-in-canada`, `cemc-waterloo-contests-preparation`) move to `data-price` anchors.
6. **Verify.**
   - Unit tests.
   - `feetest.js` cases: Toronto with en-IN under `?test=canada` gives a CAD bill and Razorpay at 14350 CAD cents. Kolkata gives INR, New York gives USD, and Toronto with the flag off gives USD.
   - Toronto readback on the hub, a course page, /pricing, the homepage, a camp, a UK page with USD text and the two fixed pages: no ₹, no visible USD, CAD labels, 0 JS errors.
7. **Go-live checklist (owner's word).**
   1. Deploy the backend: `857584a` (gateway charges) and `bd59cb6` (CAD). This must happen even before a `?test=canada` checkout on production. The backend live today turns any unknown currency into INR.
   2. Merge branch `ca-cad-copy` (worktree `../frontend-cadcopy`) into main. It holds the CAD crawler copy (see 9).
      - The agent KB `.pdf` and `.docx` conflict (binary): take either side, then rerun `npm run kb && npm run kb:agent`.
      - Run `node scripts/pricing/ca-cad-copy.js` (dry run). Any Canada page built on main since 2026-10-24 used the old USD generator; if it lists changes, rerun with `--write`. It must end with "no problems".
      - `npm run pricing:apply`, `npm run pricing:verify`, then `node scripts/pricing/ca-cad-views.js 3001` with the dev server running.
      - Removing the worktree: first `cmd //c rmdir node_modules` inside `../frontend-cadcopy` (it is a junction to the main checkout's node_modules; some delete tools follow it), then `git worktree remove ../frontend-cadcopy`.
   3. Set `canada.live` to true.
   4. Run `npm run pricing:apply`.
   5. Push the frontend.
   6. Upload the rebuilt WhatsApp agent knowledge base (`Modern-Age-Coders-Agent-KnowledgeBase.pdf`/`.docx`/`.txt`).
8. **Not done by flipping the flag.**
   - Cost rows 82 to 84 are unblocked now that CAD is decided. They are written once CAD is live.
   - About 8 comparison and cost pages keep one typed USD fee for Canadians.
   - The /course FAQ shows the India-only Mini Batch in rupees to every visitor abroad. This was already the case before Plan B.
   - The WhatsApp KB still says "No six or twelve month packages" although course pages sell a 6-month prepay (all regions).
9. **CAD crawler copy (owner 2026-10-24: "all md files and llms.txt and whatsapp knowledge everything updated").** Built on branch `ca-cad-copy` so a push of main cannot publish CAD before checkout charges CAD. Commits `e70adb6fc` (173 Canada pages: fallback figures, currency label and JSON-LD on the canada row; md twins; generators in `scripts/nl/lib`; llms.txt answer via pricing:apply; llms-full) , `5d0d093a9` (WhatsApp KB) and `244978b09` (sweep and view-check scripts). The KB gateway-charge line is on main, `39b8d2615`. Visitors are unaffected: anchors are still priced for the visitor's region. Googlebot renders in a US time zone, so it sees $100 USD in the body and CAD 140 in the structured data on Canada pages.

Status 2026-10-24: tasks 1 to 6 done, with real-click checks (visible 6-month Canada card, Gemini 1-on-1 CAD 350, 390px popup). Commits: backend `bd59cb6`, frontend `4b456923a` and `d09d34f8d`.

Commit only. Never push without the owner's word. The backend must deploy before the flag is flipped.
