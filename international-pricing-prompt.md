# Implementation Prompt: International Pricing System for Modern Age Coders

> Attach `internationalpricing.md` alongside this prompt for the full technical plan.

---

## CONTEXT

You are building an **automatic international pricing system** for **Modern Age Coders** (learn.modernagecoders.com) — an online coding & maths education platform based in India.

**The problem:** Currently all prices are hardcoded in Indian Rupees (INR). International students see ₹ prices which are confusing. There's a separate "International Pricing" section on some pages showing $40/$100 USD, but it's disconnected from the main pricing cards and uses WhatsApp-only enrollment (no direct payment).

**The solution:** Auto-detect if the user is from India or not using browser signals (no IP lookup, no GPS, no asking the user). If India → show existing ₹ prices. If not India → show flat USD prices ($40 group, $100 personal, $599 lifetime, $60 summer camp). Razorpay handles payment in both currencies. The existing two-option enrollment modal (Pay Online + WhatsApp) stays for everyone.

---

## TECH STACK

- **Frontend:** Static HTML/CSS/JS site (NOT React/Next.js for main pages). Deployed on **Netlify**.
- **Backend:** Express.js + MongoDB Atlas. Deployed on **Vercel**.
- **Payment:** Razorpay (already integrated, LIVE keys configured). The `razorpayService.js` already accepts a `currency` parameter — it just needs `'USD'` passed instead of the hardcoded `'INR'`.
- **No build tools for main pages** — vanilla HTML/CSS/JS. Just edit files directly.
- **Course pages are generated** from a template (`course-template.html`) by a Node.js build script (`generate-courses.js`). The template uses `{{PRICE_GROUP}}` and `{{PRICE_PERSONAL}}` placeholders.

---

## PRICING MODEL (SIMPLE TWO-TIER)

| Audience | Group | Personal 1-on-1 | Lifetime | Summer Camp | Currency |
|----------|:-----:|:-----:|:-----:|:-----:|:-----:|
| **India** (auto-detected) | ₹1,499/mo | ₹2,499/mo | ₹24,999–₹69,999 | ₹4,999 | INR |
| **International** (everyone else) | $40/mo | $100/mo | $599 | $60 | USD |

All courses use the **same flat USD price** regardless of their individual INR pricing. A course that's ₹999/month or ₹2,499/month in India is still $40 group / $100 personal internationally.

---

## AUTO-DETECTION LOGIC

Detect India using **two browser signals** (both are synchronous, zero network calls, privacy-safe):

```javascript
function isIndianUser() {
  // Signal 1: Browser locale contains India country code or Indian language
  const languages = navigator.languages || [navigator.language || ''];
  const hasIndianLocale = languages.some(lang => {
    const upper = lang.toUpperCase();
    return upper.includes('-IN') || upper.startsWith('HI') || upper.startsWith('BN') ||
           upper.startsWith('TA') || upper.startsWith('TE') || upper.startsWith('MR') ||
           upper.startsWith('GU') || upper.startsWith('KN') || upper.startsWith('ML') ||
           upper.startsWith('PA') || upper.startsWith('OR') || upper.startsWith('AS');
  });

  // Signal 2: Timezone is Indian
  let tz = '';
  try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) {}
  const hasIndianTimezone = (tz === 'Asia/Kolkata' || tz === 'Asia/Calcutta');

  // EITHER signal = India. NEITHER = International.
  return hasIndianLocale || hasIndianTimezone;
}
```

**Fallback:** If both signals are unavailable → International (safer to show higher price).

Set globals for other JS files to read:
```javascript
window.__MAC_IS_INDIAN = true/false;
window.__MAC_CURRENCY = 'INR' or 'USD';
```

---

## WHAT TO BUILD — FILE BY FILE

### FILE 1: CREATE `frontend/src/js/international-pricing.js` (~2 KB)

This is the **core new file**. It runs on every page that has pricing and does:

1. **Detect** India vs International (using the function above)
2. **Set globals** (`window.__MAC_IS_INDIAN`, `window.__MAC_CURRENCY`)
3. **Swap prices** on the current page if international user detected
4. **Hide** old separate international sections
5. Run on `DOMContentLoaded` — synchronous detection means prices are correct on first paint

**Pages it must handle (each has different DOM structure):**

#### A. Pricing Page (`pricing.html`)
- Price elements: `.pricing-card-new .price-amount` contains `<span class="price-currency">₹</span>1499`
- Period: `.price-period` contains `/month`
- Structure: Multiple tabs (Coding, Maths, Custom). Each tab has 2 cards: Group (1st) and Personal (2nd). Custom cards show "Custom Quote" — skip these.
- International section to hide: `.intl-pricing-section`

#### B. Homepage (`index.html`)
- Price elements: `.pricing-card .plan-price` contains `<span class="price-currency">₹</span>1499<span class="price-period">/month</span>`
- Structure: Coding section has 2 pricing cards + 2 custom cards. Maths section same pattern.
- Card titles: `.plan-title` — match "Group" vs "Personalized" to determine which price to show.
- Skip cards where `.plan-price` contains "Custom Pricing".

#### C. Generated Course Pages (`course-template.html`)
- Price elements: `.enrollment-option .price` with `data-template` attribute
- Structure: Two enrollment options: "Group Classes" and "Personalized Mentorship"
- Match via `<h4>` text inside `.enrollment-option`
- Also has an inline international section with hardcoded $40/$100 and `showInternationalContactModal()` — **hide this entire section** for international users (prices already swapped in main cards)

#### D. Summer Camp Pages (`summer-coding-camp-kids.html`, `teens.html`, `adults.html`)
- Price elements: `.pricing-amount .currency` (₹) + `.pricing-amount .price` (4,999)
- Hero stat: `.hero-stat strong` contains "₹4,999"
- Enroll button: `[data-enroll-camp]` contains text "Enroll Now - Pay ₹4,999"
- Swap all to `$60` for international

---

### FILE 2: MODIFY `frontend/src/js/enrollment-modal.js`

This file shows the **two-option enrollment modal** on course pages when "Enroll Now" is clicked. It currently has:

**Option 1 — Pay Online:**
```html
<h3>Pay Online</h3>
<p>Instant enrollment with secure payment</p>
<li>UPI, Cards, Net Banking</li>
```

**Option 2 — WhatsApp Enrollment:**
```html
<a href="https://wa.me/919123366161?text=Hi%2C%20I%20want%20to%20enroll%20in%20${encodeURIComponent(this.courseName)}.%20Please%20share%20details.">
```

**Changes needed:**
- Read `window.__MAC_IS_INDIAN` at the top of the `open()` method
- For international users, change "UPI, Cards, Net Banking" to "Cards, International Payments"
- For international users, update WhatsApp message to include USD price: `"Hi, I want to enroll in [Course] ($40 USD/month). Please share details."`
- For Indian users, keep everything as-is (current behavior)
- The `showPaymentForm()` method calls `CoursePayment.showPaymentModal('group')` — no change needed here, `course-payment.js` handles the amount

---

### FILE 3: MODIFY `frontend/src/js/course-payment.js`

This file shows the **payment form modal** (name, email, phone fields + Razorpay checkout). Called after user picks "Pay Online" from enrollment modal.

**Current behavior:**
- Loads prices from `courses-config.json`
- Creates Razorpay order: `amount: amount` (INR), no currency field sent
- Phone validation: `/^[0-9]{10}$/` (India-only 10-digit)
- Success message: `₹${payment.amount}`

**Changes needed:**

1. Read `window.__MAC_IS_INDIAN` and `window.__MAC_CURRENCY`

2. In `showPaymentModal(planType)`:
   - If international: override `pricing.amount` with flat USD amount (`group: 40, personal: 100, lifetime: 599`)
   - If international: override `pricing.display` with `$40/month`, `$100/month`, `$599`
   - Show WhatsApp help link below the submit button for ALL users (Indian + international):
     ```html
     <div class="whatsapp-help">
       <p>Need help with payment?</p>
       <a href="https://wa.me/919123366161?text=..." target="_blank">Chat with us on WhatsApp</a>
     </div>
     ```
   - WhatsApp message should include the correct price (₹ for Indian, $ for international)

3. In `processPayment(planType, amount)`:
   - Send `currency` field in the API request body:
     ```javascript
     body: JSON.stringify({
       amount: finalAmount,
       currency: isIndian ? 'INR' : 'USD',  // NEW
       productType: 'course',
       ...
     })
     ```

4. Phone validation: Relax for international users
   - Indian: keep `/^[0-9]{10}$/`
   - International: allow 7-15 digits: `/^[0-9]{7,15}$/`

5. Success message: Show correct currency symbol
   - Indian: `₹${payment.amount}`
   - International: `$${payment.amount}`

---

### FILE 4: MODIFY `frontend/src/js/summer-camp-enrollment.js`

This file has its **own two-option modal** (same Pay Online + WhatsApp pattern) AND its own payment form. Currently hardcodes `coursePrice: 4999`.

**Changes needed:**

1. Replace hardcoded `coursePrice: 4999` with a method:
   ```javascript
   getCoursePrice() {
     return (window.__MAC_IS_INDIAN !== undefined ? window.__MAC_IS_INDIAN : true) ? 4999 : 60;
   }
   ```

2. Add similar methods for currency and display:
   ```javascript
   getCourseCurrency() { return this.isIndian() ? 'INR' : 'USD'; }
   getPriceDisplay() { return this.isIndian() ? '₹4,999' : '$60'; }
   isIndian() { return window.__MAC_IS_INDIAN !== undefined ? window.__MAC_IS_INDIAN : true; }
   ```

3. In `openEnrollmentModal()`:
   - Change `<h3>Pay Online - ₹4,999</h3>` to use `this.getPriceDisplay()`
   - For international: change "UPI, Cards, Net Banking" to "Cards, International Payments"
   - Update WhatsApp message to include correct price

4. In the payment form / `processPayment()`:
   - Send `currency: this.getCourseCurrency()` in the API request
   - Use `this.getCoursePrice()` instead of hardcoded 4999
   - Add WhatsApp help link below payment button for ALL users

5. Everywhere `₹4,999` appears as text in the modal, use `this.getPriceDisplay()` instead

---

### FILE 5: MODIFY `backend/routes/payment.js`

**Current code at line 66-69:**
```javascript
const orderResult = await createOrder({
  amount: amount,
  currency: 'INR',        // ← HARDCODED
  receipt: orderId,
```

**Change to:**
```javascript
const { amount, currency, productType, productId, productName, customerName, customerEmail, customerPhone, notes = {} } = req.body;

// Validate currency
const allowedCurrencies = ['INR', 'USD'];
const orderCurrency = allowedCurrencies.includes(currency) ? currency : 'INR';

// Validate amount matches known price points
const VALID_USD_AMOUNTS = [40, 60, 100, 599];
if (orderCurrency === 'USD' && !VALID_USD_AMOUNTS.includes(amount)) {
  return res.status(400).json({ success: false, error: 'Invalid amount for USD payment' });
}

const orderResult = await createOrder({
  amount: amount,
  currency: orderCurrency,   // ← NOW DYNAMIC
  receipt: orderId,
  notes: { ...notes, currency: orderCurrency }
});
```

Also update the Payment record to save the correct currency:
```javascript
const payment = new Payment({
  ...
  currency: orderCurrency,   // ← was hardcoded 'INR'
  ...
});
```

**NOTE:** `backend/services/razorpayService.js` already accepts `currency` as a parameter (`createOrder({ amount, currency = 'INR', ... })`). The `backend/models/Payment.js` already has a `currency` field. Neither needs modification.

---

### FILE 6: MODIFY `frontend/content/courses/data/courses-config.json`

Add international pricing section:
```json
{
  "payment": {
    "enabled": true,
    "currency": "INR",
    "internationalCurrency": "USD",
    "razorpayKeyId": "YOUR_RAZORPAY_KEY_ID",
    "backendUrl": "https://backend-modernagecoders.vercel.app"
  },
  "internationalPricing": {
    "group": { "amount": 40, "display": "$40/month" },
    "personal": { "amount": 100, "display": "$100/month" },
    "lifetime": { "amount": 599, "display": "$599" },
    "summer": { "amount": 60, "display": "$60" }
  },
  "defaultPricing": { ... },
  "courses": { ... }
}
```

---

### FILE 7: MODIFY HTML PAGES — Add Script Tag

Add this line before `</body>` in ALL these files:
```html
<script src="/js/international-pricing.js"></script>
```

Files to modify:
1. `frontend/src/pages/pricing.html`
2. `frontend/src/pages/index.html`
3. `frontend/src/pages/summer-coding-camp-kids.html`
4. `frontend/src/pages/summer-coding-camp-teens.html`
5. `frontend/src/pages/summer-coding-camp-adults.html`
6. `frontend/src/pages/summer-coding-camp.html`
7. `frontend/content/courses/template/course-template.html`

**IMPORTANT:** `international-pricing.js` must load **BEFORE** `enrollment-modal.js`, `course-payment.js`, and `summer-camp-enrollment.js` so that `window.__MAC_IS_INDIAN` is set before those scripts read it. Place it early in the script loading order.

---

## CRITICAL RULES

1. **Do NOT use IP geolocation, GPS, cookies, or any third-party API for detection.** Only `navigator.language` and `Intl.DateTimeFormat().resolvedOptions().timeZone`.

2. **Do NOT ask the user to select their country.** Detection is 100% automatic and silent.

3. **Do NOT remove the WhatsApp enrollment option.** The two-option modal (Pay Online + WhatsApp) stays for ALL users (India + International). WhatsApp is a safety net.

4. **Do NOT change the visual design/layout.** Same cards, same modals, same animations. Only the price numbers, currency symbols, and a few text strings change.

5. **Indian users should see ZERO changes** from the current site. Everything should look and work exactly as it does today for them.

6. **The script must run synchronously on page load** — no flicker or visible price change. `navigator.language` and `Intl.DateTimeFormat` are sync APIs. Prices must be correct on first paint.

7. **Backend validates amounts** — never trust frontend-sent amounts blindly. Only accept known USD amounts ($40, $60, $100, $599) and known INR amounts from `courses-config.json`.

8. **Razorpay international payments** must be enabled on the Razorpay Dashboard (Settings → International Payments). This is an admin task, not a code change.

---

## HOW TO TEST

1. **Chrome DevTools → Sensors tab:**
   - Set locale to `en-IN` + timezone `Asia/Kolkata` → should show ₹ prices everywhere
   - Set locale to `en-US` + timezone `America/New_York` → should show $ prices everywhere

2. **Pages to test:** Pricing page, Homepage, any course page, all 3 summer camp pages

3. **Enrollment flow test:**
   - Click "Enroll Now" on a course page → two-option modal should show correct currency
   - Pick "Pay Online" → payment form should show correct currency
   - Pick "WhatsApp" → pre-filled message should have correct currency

4. **Razorpay test:** Use Razorpay test mode keys to verify:
   - INR order creates successfully for Indian users
   - USD order creates successfully for international users

5. **Edge case:** Clear localStorage, set locale to just `en` (no country code), clear timezone → should fall back to International ($)

---

## FILE TREE SUMMARY

```
frontend/
  src/
    js/
      international-pricing.js    ← CREATE (core detection + price swap)
      enrollment-modal.js         ← MODIFY (WhatsApp msg + payment features text)
      course-payment.js           ← MODIFY (USD amount + currency param + WhatsApp help)
      summer-camp-enrollment.js   ← MODIFY (USD amount + currency param + text updates)
    pages/
      pricing.html                ← MODIFY (add script tag)
      index.html                  ← MODIFY (add script tag)
      summer-coding-camp.html     ← MODIFY (add script tag)
      summer-coding-camp-kids.html    ← MODIFY (add script tag)
      summer-coding-camp-teens.html   ← MODIFY (add script tag)
      summer-coding-camp-adults.html  ← MODIFY (add script tag)
  content/
    courses/
      template/
        course-template.html      ← MODIFY (add script tag)
      data/
        courses-config.json       ← MODIFY (add internationalPricing section)

backend/
  routes/
    payment.js                    ← MODIFY (accept currency param, validate amounts)
  services/
    razorpayService.js            ← NO CHANGE (already supports currency param)
  models/
    Payment.js                    ← NO CHANGE (already has currency field)
```

---

## REFERENCE: EXISTING DOM STRUCTURES

### Pricing Page — Price Card
```html
<div class="pricing-card-new">
  <h3>Group Classes</h3>
  <div class="price-display">
    <span class="price-amount"><span class="price-currency">₹</span>1499</span>
    <span class="price-period">/month</span>
  </div>
  <a href="/contact" class="choose-plan-btn outline">Get Started</a>
</div>
```

### Homepage — Price Card
```html
<div class="pricing-card">
  <h3 class="plan-title">Group Classes</h3>
  <div class="plan-price">
    <span class="price-currency">₹</span>1499<span class="price-period">/month</span>
  </div>
</div>
```

### Course Template — Enrollment Option
```html
<div class="enrollment-option featured">
  <h4>Group Classes</h4>
  <div class="price" data-template="meta.price.group">{{PRICE_GROUP}}</div>
  <p class="class-info">2 Classes per Week</p>
  <a href="#" class="enroll-btn primary">Enroll Now</a>
</div>
```

### Summer Camp — Price Display
```html
<div class="pricing-amount">
  <span class="currency">₹</span>
  <span class="price">4,999</span>
  <span class="period">for 16 sessions</span>
</div>
<button class="btn-premium-solid" data-enroll-camp>Enroll Now - Pay ₹4,999</button>
```

### Enrollment Modal — Two Options (from enrollment-modal.js)
```
┌──────────────────────────────────────────────────┐
│  Enroll in [Course Name]                          │
│  Choose your preferred enrollment method          │
│                                                   │
│  ┌──────────────────┐  ┌──────────────────────┐  │
│  │ 💳 Pay Online     │  │ 💬 WhatsApp          │  │
│  │                  │  │    Enrollment         │  │
│  │ • Instant confirm│  │ • Chat with          │  │
│  │ • Razorpay       │  │   Shivam Sir         │  │
│  │ • UPI, Cards, NB │  │ • Flexible payment   │  │
│  │                  │  │ • EMI on request     │  │
│  │ [Continue to     │  │ [Chat on             │  │
│  │  Payment →]      │  │  WhatsApp →]         │  │
│  └──────────────────┘  └──────────────────────┘  │
│                                                   │
│  Need help choosing?                              │
│  📞 9123366161  ✉ Email Us                        │
└──────────────────────────────────────────────────┘
```

---

Refer to the attached `internationalpricing.md` for the complete technical plan with all code examples, architecture diagrams, edge cases, security considerations, and testing checklist.
