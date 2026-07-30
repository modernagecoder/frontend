# Worldwide PPP Pricing — Decision Brief (research, 2026-07-31)

> Produced by a six-agent research sweep against primary sources before any PPP work began.
> Every figure is tagged VERIFIED (with source) or ASSUMPTION / UNVERIFIED. Nothing untagged
> is a fact. Read section 7 first: two questions block the entire project.

# PPP Worldwide Pricing — Decision Brief
**Modern Age Coders · learn.modernagecoders.com · 2026-07-31**

Every number below is tagged **VERIFIED** (with source) or **ASSUMPTION** / **UNVERIFIED**. Nothing untagged is a fact.

---

## 1. What is actually possible

| Capability | Verified? | Source | Constraint |
|---|---|---|---|
| Charge a non-INR currency through Razorpay Checkout / Orders | **VERIFIED** | razorpay.com/docs/payments/international-payments/currency-conversion/ — "you need to specify the desired currency and pass the amount in the currency subunit… you must pass `USD` in the `currency` parameter and `2000` in the `amount` parameter" | Merchant is **settled in INR only**: "The Settlement currency is INR (Indian rupees) for all transactions made using Razorpay." (docs FAQ) |
| International payments switched on at all | **VERIFIED as a requirement, UNVERIFIED for this account** | docs FAQ — "You must get the international payments feature enabled on your Razorpay account to accept payments in currencies other than INR." | Per-account activation by Razorpay risk + acquiring bank. Only documented category exclusion is NGOs; **ed-tech eligibility is neither confirmed nor excluded in any doc** |
| How many currencies | **VERIFIED that Razorpay contradicts itself** | Docs landing: "more than 160+ foreign currencies". Docs FAQ: "Razorpay supports more than 100 international currencies." | Two Razorpay pages, two numbers. **Which currencies THIS merchant ID may charge: UNVERIFIED.** Machine-readable list is an .xlsx that was never parsed |
| International recurring / subscriptions | **VERIFIED** | Subscriptions FAQ — "Enable this to accept recurring payments via cards for your subscriptions in any of our supported international currencies"; "The RBI guidelines apply only to domestic cards and not international cards" | Cards only. UPI + e-mandate are **INR-only (VERIFIED)**. Domestic plans above ₹15,000 need AFA every debit (VERIFIED) — irrelevant monthly, relevant if annual plans ship |
| Card's issuing **country** at checkout | **VERIFIED ABSENT** | razorpay.com/docs/api/payments/cards/iin-api/ — only `international: true/false`; `issuer_name` "Available for cards issued in India only" | **Google-Play-style "payment method must be from that country" anti-arbitrage is not buildable on Razorpay.** Only India / not-India is knowable |
| Razorpay FX markup on cards | **UNVERIFIED — undisclosed** | currency-conversion doc — "The exchange rate (according to the processing bank) on the date the payment was made is used" | No spread published anywhere. The "0% FX markup" line on razorpay.com/pricing belongs to **International Bank Transfers, a different product** — do not import it |
| Fees | **VERIFIED** | razorpay.com/pricing — "Platform fee (international cards) \| Up to 3% per successful transaction"; "Platform fee (all domestic instruments) \| 2%"; "GST on platform fee \| 18%" | "**Up to** 3%" is a ceiling, not a rate. Subscriptions add "0.9% + Platform fees" — **whether 0.9% stacks on 3% is an ASSUMPTION**, not stated |
| Chargeback fee | **UNVERIFIED — not published** | Absent from pricing page and disputes doc | But VERIFIED: "For a dispute raised for international payment, the amount deducted from your account will be based on the day's currency conversion rate when the dispute was created" — open-ended FX exposure for the whole dispute window |
| Country detection on Netlify (edge) | **VERIFIED** | docs.netlify.com/build/edge-functions/api/ — `context.geo.country.code` = "ISO 3166 code for the country" (updated Apr 16 2026) | Accuracy **UNVERIFIED** (Netlify names no GeoIP provider). Invocation allowance **not published**: "The number of invocations allowed per month varies by team plan" |
| Country-varying the cached HTML | **VERIFIED IMPOSSIBLE at scale** | docs.netlify.com/build/caching/caching-overview/ — `Netlify-Vary: country=es\|de`, and "A single additional cache object is created for all non-matches" | You must **enumerate** countries. ~190 buckets cannot be expressed |
| Country override cookie | **VERIFIED** | docs.netlify.com/manage/routing/redirects/redirect-options/ — "the country can be specified in a cookie as well (`nf_country`)… so you can override the default behavior with JavaScript" | First-party, free, powers a manual switcher |
| Timezone → country, zero network calls | **VERIFIED by measurement** | IANA `zone.tab` + `backward` merged = 549 keys, 12,507 B raw / **3,870 B brotli**, covers 100% of the 418 zones `Intl.supportedValuesOf('timeZone')` returns | Must merge `backward` or `Asia/Calcutta` (India), `Asia/Saigon`, `Europe/Kiev` fall through — Temporal now forbids browsers canonicalizing aliases |
| PPP data, free, machine-readable, commercially licensable | **VERIFIED** | api.worldbank.org, indicator `PA.NUS.PRVT.PLI`; latest year **2025**, `lastupdated` **2026-07-13**; no key, no registration. datacatalog.worldbank.org/public-licenses — CC BY 4.0, "including commercial use" | Non-benchmark years are **extrapolated** from the 2021 ICP benchmark, so back-years get revised. 37 economies have a latest value pre-2024 (Venezuela 2011, Yemen 2013); 13 have none |
| Currency formatting | **VERIFIED by measurement** | MDN `Intl.NumberFormat` — "the default for currency formatting is the number of minor unit digits provided by the ISO 4217 currency code list" | **Never set `minimumFractionDigits`/`maximumFractionDigits` globally** — omitting them auto-handles JPY/KRW/VND (0) and KWD/BHD/OMR (3). Exception: IDR minor unit is **2** in the official ISO list, needs an explicit `maximumFractionDigits: 0` |

**Not possible / red herrings:** Razorpay does **no** PPP for you and has **no documented geo/IP currency detection**. Dynamic Currency Conversion is triggered by a foreign card BIN and converts *from* your order currency — it makes ₹1,499 legible in Nairobi, it does not make it affordable. Razorpay's fallback for an unsupported currency is "raise a request on our Support Portal" (VERIFIED) — there is **no automatic USD fallback**; you must build it.

---

## 2. The single biggest constraint

> **The product's cost base is nominal INR and does not PPP-scale, so the achievable discount band is bounded below by the India net price. This is a ladder between the India floor and the US list — roughly 55% maximum discount — not the ~90% raw PPP implies.**

Evidence:

- **VERIFIED (World Bank, 2025, `PA.NUS.PRVT.PLI`):** India **22.718**, Nigeria **20.947**, Germany **81.233**, USA **100**. Formula reproduced to 10 decimals against the World Bank's own published index: `PA.NUS.PRVT.PP / PA.NUS.ATLS × 100` matched the published PLI for all four countries on both the GDP and private-consumption series.
- **VERIFIED (count from the same API):** only **6 economies on Earth** have a price level below India's, and at a raw ($40 × PLI) anchor **81 of 208 economies land below ₹1,499**. Eighty-one countries paying less than Indian families do, for the same live teacher.
- Every PPP precedent that is publicly documented — Steam, Google Play, ParityDeals, Gumroad — is a **zero-marginal-cost digital good**. A live class costs a teacher-hour in rupees regardless of who buys the seat. Steam knows this and publishes a hard floor anyway: the minimum base price is the multi-variable conversion of the $0.99 tier, and "The lowest possible transaction price… is 50% off that minimum base price" (VERIFIED, partner.steamgames.com/doc/store/pricing).

The **biggest unknown** is different and must not be confused with the constraint: **Razorpay's card FX spread is undisclosed** and is the same order of magnitude as the entire gateway fee. And the **biggest single number** in the model is **GST on the service itself** — 0% if these classes are zero-rated exports under an LUT, 18% if not. **UNVERIFIED. That is a CA question, not a web-search question**, and it moves the whole bottom of the ladder by ~22% (see §5).

---

## 3. Recommended architecture

### The decision: **the displayed price is charged in USD (or INR for India). Local currency is a labelled estimate, not the charge.** Phase 2 only, and only per market, does presentment currency become real.

**Phase 1 — ship this**

1. PPP ladder is expressed **in USD**, one number per country per SKU, baked into a committed JSON at build time.
2. India routes stay **INR / Razorpay domestic** exactly as today.
3. Everywhere else: Razorpay Order is created in **USD** at the PPP price. That exact USD figure is the headline number the visitor sees.
4. Underneath it, client-side, a **clearly-approximate local-currency line**: "≈ ₦27,500 — charged as **US$17.99**; converted at 1 USD = ₦1,518 on 2026-07-31; your bank's own rate and any cross-border fee apply."
5. Visible **country/currency switcher**, writing `nf_country`; never a silent IP swap, never an auto-redirect.

**Phase 2 — later, per market, gated on evidence:** for the top handful of markets by actual volume, once (a) Razorpay confirms in writing that currency is enabled for this merchant ID and (b) one live low-value charge has been run and `payment.base_amount` read back against mid-market, switch that market to true local presentment.

**Why USD-charging is safer for an Indian merchant**

| | Charge in local currency (presentment) | Charge in USD, label locally |
|---|---|---|
| Enablement risk | Needs each currency enabled on this account — **UNVERIFIED which are** | USD is the one currency any international-enabled account will have |
| Table maintenance | ~160 price points; ARS/TRY/NGN/EGP/LBP/VES go stale within months and silently undercut you | One USD ladder; local line is a rendered estimate refreshed independently |
| Unsupported currency | Razorpay's documented remedy is "raise a request on our Support Portal" — i.e. a broken checkout | No such failure mode exists |
| India-origin traffic | **UNVERIFIED** which currencies are permitted for transactions originating from India — a VPN'd or mis-detected Indian visitor may simply fail the payment | INR default for India/ambiguous; no failure |
| Legal exposure | Displayed = charged, which is ideal — **but only if you actually enabled that currency and got the rounding right** | The charged figure is exact and on screen; the local figure is explicitly an estimate |

**Honest caveat, stated because it must be:** USD-charging does not eliminate the displayed-vs-charged gap, it **relocates** it. The customer's issuer applies its own rate plus a cross-border fee, so the naira actually debited will not equal "≈ ₦27,500". That is defensible *because the charged number ($17.99) is exact and prominent and the local number is labelled an estimate with its rate and date* — which is precisely the remedy the UK CMA prescribes: "When converting from foreign currency, you should also tell customers what exchange rate you used to calculate the total price." (VERIFIED, gov.uk/…/price-transparency-cma209, updated 7 Jan 2026.)

**What makes territorial price differences legal at all:** EU Regulation 2018/302 Art 4(2) (VERIFIED, EUR-Lex) — the geo-blocking rules "shall not prevent traders from offering general conditions of access, including net sale prices, which differ between Member States… on a non-discriminatory basis." What is prohibited everywhere is showing one number and charging another: UCPD Art 6(1)/7(4)(c); UK DMCCA (drip pricing "illegal", fines "up to 10% of your turnover, or £300,000, whichever is greater"); India's CCPA Guidelines for Prevention and Regulation of Dark Patterns, 2023, where **drip pricing** is one of 13 named unfair trade practices (**note: the gazette text could not be fetched — consumeraffairs.nic.in refused TLS, PIB returned 403; definitions come from a law firm reproducing the September 2023 DRAFT. UNVERIFIED against the notified text**).

Art 3 of 2018/302 (do not block access by nationality/residence) **does** apply regardless — so never hard-block an EU visitor from any price page, and always allow a manual switch.

---

## 4. The SEO-safe pattern

**In the static HTML (what Googlebot indexes):** one canonical price per page — INR on India-targeted pages, the **USD list price ($39.99)** everywhere else. Real, honest, visible to no-JS users and to crawlers.

**In JSON-LD:** **emit no price on course pages at all.** This costs nothing, because Google deprecated the only course type that carried one — changelog 9 Sept 2025: "Removed documentation for the following structured data types: **course info**, estimated salary, learning video, special announcement, and vehicle listing" (VERIFIED). The surviving "Course list" type has **no `offers` / price property** (VERIFIED, search-gallery updated 2026-06-15). On `/pricing`, if Product/Offer markup stays, it must carry exactly **one** Offer whose `price`/`priceCurrency` equals the statically rendered USD list price.

**What may vary client-side:** the local-currency estimate line, the PPP-discounted USD figure, the country switcher. All after paint, all from a committed JSON, all reversible by the switcher.

**Is this cloaking? No.** Google's definition (VERIFIED, spam-policies, updated 2026-05-15): "Cloaking refers to the practice of presenting different content to users and search engines **with the intent to manipulate search rankings and mislead users**." And explicitly (locale-adaptive-pages, updated 2025-12-10): "when Googlebot appears to come from a certain country, **treat it like you would treat any other user from that country**." Serving a Brazilian visitor and Googlebot-from-Brazil the same thing is compliant by construction.

**The one forbidden move: never branch on user-agent or crawler IP.** Branch on locale only. That single rule is what separates this design from cloaking.

**The accepted loss, stated plainly:** Googlebot's "default IP addresses… appear to be based in the USA" and "the crawler sends HTTP requests without setting `Accept-Language`" (VERIFIED). **The US/default price is what gets indexed. PPP prices will not appear in search results. That is accepted, not a bug.**

**Why we are deliberately declining Google's per-URL recommendation.** The line "When offering products for sale in multiple currencies, have a distinct URL per currency" is on the **merchant-listing** page, a Shopping-feed surface, and this site runs no feed. The hard feed rule ("the price attribute, the landing-page price and the schema.org price must all be identical, or the product may be disapproved") binds Merchant Center submitters, not this site — **it would bind them the day they run Shopping ads.** The residual risk under the single-URL design is the sd-policies rule ("Don't mark up content that is not visible to readers of the page"), whose penalty is a "Structured data issue" manual action costing **rich-result eligibility, not ranking** — and emitting no price removes even that. Against this: ~190 near-duplicate URLs on a site already burned twice by duplicate clusters (131 city pages, DPS/Kolkata clusters). **Single canonical URL wins.**

Do **not** build region-scoped `Offer.eligibleRegion` arrays. schema.org defines the term, but **no Google Search documentation states that Search reads it**, and there is **no documented rule for how Google picks among multiple Offers on one page**. UNVERIFIED — do not build on it.

---

## 5. The money-safety rules

### Config (encode exactly this)

```jsonc
{
  "anchorUsd":        { "group": 39.99, "mini": 66.99, "oneToOne": 133.99 }, // ASSUMPTION: only group is worked below
  "dampingExponent":  0.57,     // ASSUMPTION — business dial, see note 1
  "maxDiscountPct":   60,       // ASSUMPTION, modelled on Steam's published 50%-off-minimum pattern
  "gatewayIntlPct":   3.00,     // VERIFIED ceiling ("Up to 3%")
  "gstOnFeePct":      18.00,    // VERIFIED
  "fxSpreadBufferPct": 3.00,    // ASSUMPTION — Razorpay's card spread is UNDISCLOSED
  "gstOnServicePct":  0.00,     // UNVERIFIED — 0 assumes zero-rated export under LUT. If 18, see note 3.
  "indiaFloorInrNet": { "group": 1463.62, "mini": 2440.02, "oneToOne": 4881.02 }, // ₹1,499/2,499/4,999 less 2% + 18% GST
  "usdInrRate":       87.1584,  // VERIFIED World Bank PA.NUS.FCRF 2025 annual average — NOT a spot rate
  "pppIndicator":     "PA.NUS.PRVT.PLI",
  "maxDataAgeYears":  3,        // reject staler data, fall back to list price
  "defaultCountry":   "IN",     // India + any ambiguous/unknown detection -> INR
  "highInflationDenyList": ["ARS","TRY","VES","LBP","NGN","EGP"]  // show USD only, no local label
}
```

### Formula

```
m_raw   = PLI(country) / 100                    // VERIFIED indicator
m_damp  = m_raw ^ dampingExponent               // ASSUMPTION exponent
m       = clamp(m_damp, 1 - maxDiscountPct/100, 1.0)

price_pre = anchorUsd * m

netKeep   = (1 - (gatewayIntlPct*(1+gstOnFeePct/100))/100)   // 0.9646  VERIFIED
          * (1 - fxSpreadBufferPct/100)                       // 0.97    ASSUMPTION
          / (1 + gstOnServicePct/100)                         // 1.00    UNVERIFIED

floorUsd  = (indiaFloorInrNet / usdInrRate) / netKeep

price     = charmRound( max(price_pre, floorUsd) )   // ceil to whole USD, minus 0.01
```

**Rounding.** Charm-round the **USD charge** (`ceil(x) − 0.01`). Hard-round the **local label UP** to a clean magnitude (₦27,500, not ₦27,316) so the estimate is never below the real cost. Per-currency increment rules (Steam's KRW ×1000, VND ×50000, INR whole rupees) are **Phase 2 work only** — irrelevant while you charge USD. Never set fraction digits manually; let `Intl` read ISO 4217.

### Worked example — group coding, anchor **US$39.99**, α = 0.57, service GST 0%

| | India | Nigeria | Germany | USA |
|---|---|---|---|---|
| PLI (VERIFIED, WB 2025) | 22.718 | 20.947 | 81.233 | 100 |
| damped multiplier | 0.4296 | 0.4103 | 0.8883 | 1.0000 |
| PPP price before floor | $17.19 | $16.41 | $35.53 | $39.99 |
| **floor** ($17.94) | — (domestic) | **binds** | — | — |
| **Charged** | **₹1,499** (INR, domestic) | **US$17.99** | **US$35.99** | **US$39.99** |
| Local label shown | ₹1,499 (exact) | ≈ ₦27,500 | ≈ €32 | $39.99 (exact) |
| Fees applied | 2% + 18% GST = 2.36% VERIFIED | 3% + 18% GST = 3.54% VERIFIED, + 3% FX ASSUMPTION | same | same |
| **Merchant nets (INR)** | **₹1,464** | **₹1,467** | **₹2,935** | **₹3,261** |
| vs US list | −55% | −55% | −10% | list |

Local labels use World Bank 2025 **annual-average** rates (₦1,518.38/USD, €0.88497/USD — VERIFIED as the indicator value, **but an annual average is not a spot rate — refresh from a live FX source at build**).

**Three notes that must travel with this table:**

1. **α = 0.57 is an ASSUMPTION, a business dial — not a calibration.** Two prices determine exactly one exponent; any pair would. What *is* a genuine and reassuring coherence observation: the owner's existing ₹1,499 and $40 already sit on a damped-PPP ladder with α ≈ 0.57. (The α solve is on **gross** prices; the floor is on **net INR** — two different frames. Do not read more rigour into the tidiness than is there.)
2. **How often the floor binds.** At raw PPP (α = 1), **81 of 208 economies** would price below ₹1,499 (VERIFIED count). At α = 0.57 the floor binds only where PLI < ~24.5 — India (22.7) plus the 6 economies below it plus a narrow band above: **roughly a dozen economies. Exact count NOT COUNTED.** That contrast is the argument that the damping is principled rather than arbitrary.
3. **If service GST turns out to be 18%, the whole bottom of the ladder moves.** Treating the price as GST-inclusive, `netKeep` drops from 0.9357 to 0.7929 and the floor rises from $17.94 to **$21.18 → charged $21.99**, a ~22% jump. **And if ₹1,499 is itself GST-inclusive, the India net is ₹1,240 and every floor falls ~15% instead.** The ladder is provisional on the CA's ruling.

**Attribution (required, one line in the page footer):** "Price levels from World Bank World Development Indicators (PA.NUS.PRVT.PLI), CC BY 4.0." Do not imply endorsement — worldbank.org terms: "You may not publicly represent or imply that The World Bank Group… has sponsored, approved, or endorsed the manner or purpose of your use."

---

## 6. What must NOT be built

1. **Per-country or per-currency URLs.** ~190 near-duplicate pages on a site already burned twice by duplicate clusters. And never `noindex` them if they ever exist — standing project rule.
2. **A client-side call to a third-party IP-geolocation API.** ipapi.co's free tier is disqualified in its own words — "not meant for use in production or deployments." And GDPR Recital 30 treats an IP address as an online identifier, so a browser-side call discloses it to a new recipient. The timezone table (3.9 KB brotli, 100% ICU coverage) has none of these problems.
3. **CDN-level country variation via `Netlify-Vary`.** VERIFIED impossible at scale: "A single additional cache object is created for all non-matches."
4. **Branching on Googlebot's user-agent or IP.** The one move that converts a compliant design into cloaking.
5. **Multiple region-scoped `Offer` objects on one URL.** Valid schema.org; **no evidence Google reads `eligibleRegion`**; no documented selection rule.
6. **Dynamic Currency Conversion as the PPP mechanism.** It converts *from* your order currency at the card BIN. It changes the symbol, not the affordability.
7. **Importing the "1% / 0% FX markup" figures into the model.** Those belong to International Bank Transfers, a separate wire product, wrong for a ₹1,499/month consumer subscription.
8. **Card-issuing-country anti-arbitrage.** VERIFIED absent from Razorpay's API. Only India / not-India is knowable. Do not design a control you cannot implement.
9. **`PA.NUS.PPPC.RF`** — archived, returns "The indicator was not found." And **never use `PA.NUS.FCRF` as the PLI denominator** — the World Bank uses `PA.NUS.ATLS`; FCRF gives India 23.048 vs the published 23.004, a silent 0.19% mis-price.
10. **`mrnev=1` without a max-age guard.** 37 economies have a latest value pre-2024 (Venezuela 2011, Yemen 2013); 13 have none at all. Without the guard you silently serve a 15-year-old price level.
11. **A live local price in a high-inflation currency.** ARS/TRY/VES/LBP/NGN/EGP go stale within months. Show USD only.
12. **A local price the checkout cannot honour.** Razorpay has no automatic fallback — "raise a request on our Support Portal." Displayed currency must never diverge from the currency the Order is created in.
13. **Hand-typed price tables.** Standing project rule: a number in a fan-out script is a site-wide claim. Generate from the committed World Bank JSON.
14. **Shipping any of this before the lead form is fixed.** The lead backend requires **exactly 10 digits** for phone. A perfect Nigerian price feeding a form that rejects a Nigerian number converts at zero. **This is a build prerequisite, not a footnote.**

---

## 7. Open questions, ranked by how much they block the build

| # | Question | Who answers | Blocks |
|---|---|---|---|
| 1 | **Is international payments enabled on this Razorpay account, and is an ed-tech merchant approved?** Only NGOs are documented as excluded; nothing documents education as approved. | Razorpay account manager, **in writing** | **Everything.** Nothing ships without this |
| 2 | **Is this an export of services zero-rated under LUT (0%), or 18% GST?** Razorpay settles in INR; whether an INR receipt satisfies IGST s.2(6)(iv) determines the answer. Primary text unreachable (CBIC TLS failure, indiacode 403). | **A CA — not a web search** | The entire floor. ±22% on the bottom of the ladder |
| 3 | **Is ₹1,499 GST-inclusive or exclusive?** Changes the India net from ₹1,464 to ₹1,240 and every floor with it. | Owner / CA | The floor |
| 4 | **What is Razorpay's actual FX spread on cards?** Undisclosed everywhere. Only way to know: one live low-value charge per candidate currency, read back `payment.base_amount` against mid-market at that timestamp. **One hour of work; it should gate the project.** | Razorpay in writing + empirical test | The 3% buffer assumption; Phase 2 entirely |
| 5 | **Fix the 10-digit phone validation.** | Dev (owner prioritises) | Conversion — the pricing work is worthless without it |
| 6 | **What is the anchor: the $40 US list, or ₹1,499?** Anchoring on India instead would raise the US price to ~$75 and Germany to ~$61. The recommendation above anchors on $39.99 and accepts that India is the floor. | **Owner — a pricing strategy call** | The ladder's absolute level |
| 7 | **Confirm α (0.57) and max discount (60%).** Business dials, not data. | Owner | Ladder shape (not architecture) |
| 8 | **Does the 0.9% Subscriptions fee stack on 3% international?** Plain reading says yes (3.9% base). Not stated anywhere. | Razorpay in writing | Recurring SKU margins only |
| 9 | **Razorpay's chargeback fee, and its PA-CB authorisation status with RBI.** Neither published nor checked. | Razorpay / RBI authorised-PA list | Risk reserve sizing |
| 10 | **Which currencies can THIS merchant ID charge**, and are non-INR orders permitted for traffic originating from India? | Razorpay | Phase 2 only (Phase 1 charges USD) |
| 11 | **Read the notified CCPA Dark Patterns gazette text.** Only the Sept 2023 draft was reachable. | Legal | Copy/UX wording, not architecture |

---

### One-paragraph summary for the owner

You can do this, and the plumbing is easy. What you cannot do is give the world a PPP discount, because you sell live teacher-hours priced in rupees, not software. World Bank data (verified, free, CC-BY) says India's price level is 22.7% of America's and only six countries on Earth are cheaper — so the honest version of this project is a ladder from the India price up to the US price, about 55% wide, not the 90% raw PPP suggests. Ship it as a PPP-set price **in US dollars** with the local currency shown as a labelled estimate; that keeps one canonical URL, keeps Google happy, keeps Razorpay simple, and keeps the number you charge identical to the number on the screen. Before writing any code, get two answers in writing: is international payments enabled for an ed-tech, and is this a zero-rated export. The second one is worth more than the entire gateway fee.

*Brief also saved to `C:\Users\hp\AppData\Local\Temp\claude\C--Users-hp-Desktop-SkyCoders-kiro24-frontend\e4192a74-a779-499f-af5d-6024e2ee4d31\scratchpad\ppp-pricing-decision-brief.md`*
