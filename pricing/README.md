# How to change a price

Everything about money on this website is controlled by one file:

```
pricing/pricing.config.jsonc
```

You edit that file. Nothing else. Then you run three commands and every page
updates — the price people see, the price Google is told, the price AI engines
quote, and the amount Razorpay actually charges.

---

## The five-minute version

```bash
# 1. Open pricing/pricing.config.jsonc and change a number.

npm run pricing:check      # is my file valid? shows the resulting prices
npm run pricing:preview    # exactly what would change, changes nothing
npm run pricing:apply      # write it into every page
npm run pricing:verify     # prove nothing broke
npm run pricing:test       # 79 checks, including prices rendered in a real browser

git add -A
git commit -m "Raise group coding to Rs1,799"
git push
```

If `check` or `verify` complains, **stop and read what it says.** They are
written to tell you what is wrong in plain English, not to be clicked past.

---

## Changing a price — the full walkthrough

### Step 1 — edit the number

Open `pricing/pricing.config.jsonc`. Find the line you want:

```jsonc
"coding": {
  "india":         { "group": 1499, "miniBatch": 2499, "personal": 4999, "lifetime": 49999 },
  "international": { "group": 40,   "miniBatch": null, "personal": 100,  "lifetime": 599 }
},
```

Change `1499` to `1799`. Save.

**Rules for the number itself:**

- Plain digits only. `1799` — never `1,799`, never `"1799"`, never `₹1799`.
- India numbers are rupees. International numbers are US dollars.
- `null` means *we do not sell this*. Leave it as `null` unless you are
  genuinely starting to sell that plan.

### Step 2 — check it

```bash
npm run pricing:check
```

This tells you whether the file is valid **and prints the price every country
will be charged**, so you can see the consequence before anyone else does:

```
    Country            PPP       Group      1-on-1    You net (group)   Why
    India             22.7      ₹1,499      ₹4,999              ₹1464   domestic
    Nigeria           20.9      $16.99      $54.99              ₹1522   ppp
    Germany           81.2      $35.99      $88.99              ₹3225   ppp
    United States    100.0      $40.00     $100.00              ₹3584   list
```

Read the **"You net"** column. That is what actually reaches your bank after
Razorpay's fee, GST on that fee, and the currency conversion.

### Step 3 — preview

```bash
npm run pricing:preview
```

Shows every change it would make and which files, and writes nothing:

```
  coding.india.group  ₹1,499 → ₹1,799   (47 files)
  coding.india.group (schema)  1499 → 1799   (112 files)
```

If a number appears that you did not intend to change, **stop here.** Nothing
has been written yet.

### Step 4 — apply and verify

```bash
npm run pricing:apply
npm run pricing:verify
```

`verify` is the safety net. It fails if the price shown on a page does not
match the price in that page's structured data — the exact fault that was
live on your homepage before this system existed.

### Step 5 — commit and deploy

```bash
git add -A
git commit -m "Raise group coding to Rs1,799"
git push
```

Netlify re-runs apply and verify during the build, so a deploy cannot publish
a page whose prices disagree with the config.

---

## What the sections of the config mean

### 1. `plans` — the prices

Every price on the site has a name in the form **subject . region . tier**:

| | |
|---|---|
| **subject** | `coding`, `maths`, `agents`, `school`, `camps` |
| **region** | `india` (rupees) or `international` (dollars) |
| **tier** | `group`, `miniBatch`, `personal`, `lifetime`, `oneTime` |

So `coding.india.group` is the ₹1,499 figure, and `maths.international.personal`
is the $150 one.

**Coding and maths are listed separately even though the Indian prices are
identical today.** That is deliberate: it means you can raise one without
touching the other, and nothing has to be rewritten when you do.

**`null` means not sold.** There has never been an international Mini-Batch
price. Leaving it `null` means the plan is hidden from visitors outside India
rather than being shown a made-up number. Put a real number there the day you
decide to sell it, and it appears everywhere by itself.

### 2. `courseOverrides` — one course priced differently

```jsonc
"courseOverrides": {
  "codex-and-claude-code-ai-coding-agents-course-for-teens": "agents"
}
```

The slug on the left is the course's own slug (its web address). The word on
the right is any subject from `plans`. To put a course on premium pricing, add
a line. To put it back, delete the line.

`pricing:check` will tell you if you mistype a slug — a wrong slug silently
does nothing otherwise.

### 3. `worldwide` — the country-by-country prices

This is what makes a family in Lagos see a price that fits Lagos.

**How it works.** The World Bank publishes a *price level index* for every
country: how expensive that country is compared with America. India is 22.7,
Germany 81.2, the USA is 100. Your international list price is scaled by that,
softened by `dampingExponent`, and then floored.

**The floor is the important part.** Without it, real World Bank data would put
**69 countries below what an Indian family pays you** for the same live
teacher-hour. Steam and Google Play can discount that deeply because copying a
game costs nothing. A live class costs a teacher's hour whether the seat sells
in Lagos or Oslo. So the floor guarantees:

> No country is ever charged less, after all fees, than an Indian enrolment
> nets you.

**The dials you can turn:**

| Setting | What it does |
|---|---|
| `enabled` | `false` switches the whole thing off — everyone outside India pays list price, exactly as before this system existed |
| `dampingExponent` | How closely to follow purchasing power. `0` = everyone pays list. `1` = follow it exactly, which is too deep for live teaching. `0.57` matches how your ₹1,499 and $40 already relate |
| `maxDiscountPercent` | Never discount more than this, whatever the data says |
| `maxPremiumPercent` | `100` means never charge above list. Raise it to `110` if you decide rich countries should pay a premium |
| `costs` | What collecting the money costs you. Used to work out the floor |
| `unstableCurrencies` | Currencies too volatile to quote. These visitors see dollars only |

**Two numbers in `costs` are not verified and you should get them settled:**

- `gstOnServicePercent` is set to `0`, which assumes your classes are a
  zero-rated export under an LUT. **Ask your CA.** If the real answer is 18,
  put `18` here — the floor rises about 22% and several countries are currently
  underpriced.
- `fxSpreadBufferPercent` is set to `3`. Razorpay does not publish its card
  conversion spread anywhere. This is a cushion, not a measurement.

### 4. `display`

`classesPerMonth` is used to recalculate the "per class" figures that appear on
some pages. Because they are recalculated rather than replaced, the arithmetic
on the page can never fall out of step with the headline price.

### 5. `allowlist`

Files and patterns the checker must ignore, because they contain numbers that
look like prices but are not — `z-index: 9999`, SQL rows in a lesson, quiz
answers, competitor rates, hackathon prize money.

---

## How a price actually reaches a page

Prices are **not** found by searching pages for numbers. That would be
catastrophic here: `9999` on this site is a `z-index` in `nav.html`, a
`border-radius`, a quiz answer *and* a price, and `4999` is part of `49999`.

Instead, each price sits in a labelled slot:

```html
<span data-price="coding.india.group">₹1,499</span>
```

and structured data is labelled on the `<script>` tag:

```html
<script type="application/ld+json" data-price-scope="coding.india">
```

`pricing:apply` fills those slots and nothing else. The number left in the file
is the last one stamped, so the page is always correct on its own even if the
build never runs.

### Adding a price to a new page

Write the slot, put today's price inside it, and run apply:

```html
<span data-price="coding.india.group">₹1,499</span>
```

That page is now part of the system permanently. Optional extras:

| Attribute | Result |
|---|---|
| *(nothing)* | `₹1,499` |
| `data-price-format="amount"` | `1,499` |
| `data-price-format="full"` | `₹1,499/month` |
| `data-price-format="plain"` | `1499` |
| `data-price-derive="perClass"` | `₹187` — worked out, not typed |

---

## When something goes wrong

**`check` says my file is not valid.**
Almost always a missing comma between two lines, or an extra comma after the
last item in a list. The message tells you which line. Comments starting with
`//` are fine and never cause this.

**`apply` says an offer "does not match any plan".**
A page has structured data describing a plan whose name the system does not
recognise. Either rename it to match the others, or tell me and I will add the
name.

**`verify` says visible price does not match structured data.**
That page has a price sitting outside a labelled slot. It needs one. This is
the check that matters most — it is the exact fault that was live on your
homepage.

**I changed a price and a page still shows the old one.**
Run `npm run pricing:apply`. If it still shows the old price, that page's
number is not in a slot yet.

### Undoing a price change

```bash
git log --oneline -- pricing/pricing.config.jsonc   # find the change
git revert <commit>
npm run pricing:apply
npm run pricing:verify
```

---

## Adding prices that are not yet under control

```bash
npm run pricing:tag              # report only
npm run pricing:tag -- --write   # anchor the confident ones
```

A price only changes when you edit the config if it is *anchored* — wrapped in
`data-price`. An unanchored price still gets shown in the visitor's currency,
but its VALUE stays as somebody typed it.

`pricing:tag` finds unanchored prices and splits them in two:

- **Confident** — a number sitting in a price component with its plan named
  nearby. Anchored automatically.
- **Needs you** — a number inside a sentence, or one whose plan cannot be read
  from its surroundings. Left alone and listed in `pricing/TAGGING-REVIEW.md`.

That split is deliberate. A wrong key does not fail loudly: it silently
rewrites one plan's price to another plan's figure on the next build. `$100` is
treated as ambiguous by default, because it used to be coding's 1-on-1 rate
*and* maths's group rate.

To anchor one from the review list yourself, wrap the number:

```html
<span data-price="coding.india.group">₹1,499</span>
```

## Keeping the worldwide data fresh

```bash
npm run pricing:refresh
```

Pulls the latest World Bank price levels and exchange rates and writes them to
`pricing/data/`. Both are committed to the repository on purpose — the website
never calls these services from a visitor's browser, which would hand every
visitor's IP address to a company they have no relationship with and put a
network round trip in front of your prices.

Exchange rates move daily; purchasing power parity is republished about once a
year. **Running this monthly is plenty.** `check` warns you when the rates are
more than 30 days old.

The refresh cross-checks the rates against European Central Bank figures and
refuses to write anything if the two disagree by more than 2%, because a wrong
exchange rate would silently mis-floor every price on the site.

**Attribution is required.** The country price levels come from the World Bank
under CC BY 4.0, so wherever these prices are shown the page must carry:

> Price levels from World Bank World Development Indicators (PA.NUS.PRVT.PLI), CC BY 4.0.

---

## What is still open

1. **Prices awaiting your decision.** See `pricing/TAGGING-REVIEW.md`. These are
   visible on the site but not yet controlled by the config, almost all of them
   inside sentences. Their currency is localised; their value is not.

2. **Razorpay's FX spread.** `fxSpreadBufferPercent` is set to `3` as a cushion.
   Razorpay does not publish its card conversion spread anywhere. One live
   low-value charge, reading back `payment.base_amount` against the mid-market
   rate at that moment, would settle it.

Settled since this file was written: service GST is 0%, confirmed by the
owner's CA on 2026-07-31 as a zero-rated export of services. And the phone
forms now accept international numbers — they used to demand exactly ten
digits, which rejected Oman, the UAE, Singapore, Norway and China outright.
