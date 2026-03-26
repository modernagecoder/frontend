# International Pricing System - Technical Plan

## Auto-Detect India vs International — Fully Automated, All Pages, Razorpay for Everyone

**Project:** Modern Age Coders
**Date:** 2026-03-26
**Stack:** Static HTML/CSS/JS (Frontend on Netlify) + Express.js/MongoDB (Backend on Vercel)
**Payment Gateway:** Razorpay (INR for India, USD for International) + WhatsApp Fallback

---

## 1. Pricing Model

| Audience | Group Classes | Personalized 1-on-1 | Lifetime Access | Summer Camp | Currency |
|----------|:---:|:---:|:---:|:---:|:---:|
| **India** | ₹1,499/month | ₹2,499/month | ₹24,999–₹69,999 | ₹4,999 | INR |
| **International** | $40/month | $100/month | $599 | $60 | USD |

- Detection is **100% automatic** — user is never asked anything.
- **Every page** that shows a price will auto-swap based on detection.
- **Razorpay handles both** INR and USD payments as the primary payment method.
- **WhatsApp fallback** shown alongside Razorpay — "Need help with payment? Chat with us on WhatsApp" — so international customers can contact directly if they face any payment issues and we can assist them manually.
- The old **separate International Pricing section** is **removed** — prices are shown in the main cards themselves. WhatsApp help link appears as a small helper below the payment button, not a separate section.

---

## 2. Pages That Show Pricing (ALL Must Be Updated)

### 2.1 Complete Page Inventory

| # | Page | File Path | Prices Shown | How Rendered |
|---|------|-----------|-------------|--------------|
| 1 | **Pricing Page** | `frontend/src/pages/pricing.html` | ₹1,499 group, ₹2,499 personal (Coding + Maths tabs) + "Custom Quote" | Hardcoded HTML: `.price-amount`, `.price-currency`, `.price-period` inside `.pricing-card-new` |
| 2 | **Homepage** | `frontend/src/pages/index.html` | ₹1,499 group, ₹2,499 personal (Coding + Maths sections) + "Custom Pricing" | Hardcoded HTML: `.plan-price`, `.price-currency`, `.price-period` inside `.pricing-card` |
| 3 | **Course Pages (Generated)** | `frontend/content/courses/template/course-template.html` | `{{PRICE_GROUP}}`, `{{PRICE_PERSONAL}}` + hardcoded $40/$100 international section | Template vars injected at build time into `.price` divs; international section has inline styles |
| 4 | **Summer Camp - Kids** | `frontend/src/pages/summer-coding-camp-kids.html` | ₹4,999 (16 sessions) | Hardcoded HTML: `.pricing-amount > .currency + .price + .period` and button text |
| 5 | **Summer Camp - Teens** | `frontend/src/pages/summer-coding-camp-teens.html` | ₹4,999 (16 sessions) | Same structure as kids page |
| 6 | **Summer Camp - Adults** | `frontend/src/pages/summer-coding-camp-adults.html` | ₹4,999 (16 sessions) | Same structure as kids page |
| 7 | **Summer Camp - Main** | `frontend/src/pages/summer-coding-camp.html` | ₹4,999 in meta tags | Meta description only |

### 2.2 JS Files That Handle Payment Amounts

| # | File | What It Does | Change Needed |
|---|------|-------------|---------------|
| 1 | `frontend/src/js/course-payment.js` | Loads pricing from `courses-config.json`, creates Razorpay order in INR | Must detect India/International, pass USD amount + currency for international |
| 2 | `frontend/src/js/summer-camp-enrollment.js` | Hardcoded `coursePrice: 4999`, creates Razorpay order | Must swap to `$60 USD` for international users |
| 3 | `frontend/src/js/enrollment-modal.js` | Shows two-option modal (Pay Online + WhatsApp), calls CoursePayment | Update WhatsApp message to include USD price for international users. Update "UPI, Cards, Net Banking" to "Cards, International Payments" for international. |

### 2.3 Backend Files

| # | File | Change Needed |
|---|------|---------------|
| 1 | `backend/routes/payment.js` | Accept `currency` param from frontend (currently hardcoded `'INR'`), pass to Razorpay |
| 2 | `backend/services/razorpayService.js` | Already supports `currency` param — **no change needed** |
| 3 | `backend/models/Payment.js` | Already has `currency` field with default `'INR'` — **no change needed** |

### 2.4 Config Files

| # | File | Change Needed |
|---|------|---------------|
| 1 | `frontend/content/courses/data/courses-config.json` | Add `internationalPricing` section with USD prices |

---

## 3. Current Enrollment Flow (How It Works Today)

### 3.1 Enrollment Button Flow Map

The site has **3 different enrollment flows** depending on the page:

```
COURSE PAGES (generated from template)
─────────────────────────────────────────
Click "Enroll Now" (.enroll-btn)
      │
      ▼
┌─ EnrollmentModal.open() ──────────────────────────────┐
│                                                        │
│   "Enroll in [Course Name]"                            │
│   "Choose your preferred enrollment method"            │
│                                                        │
│   ┌─────────────────────┐  ┌─────────────────────────┐│
│   │  💳 Pay Online       │  │  💬 WhatsApp Enrollment  ││
│   │                     │  │                         ││
│   │ • Instant confirm   │  │ • Chat with Shivam Sir  ││
│   │ • Razorpay checkout │  │ • Flexible payment      ││
│   │ • UPI, Cards, NB    │  │ • EMI on request        ││
│   │                     │  │                         ││
│   │ [Continue to        │  │ [Chat on WhatsApp →]    ││
│   │  Payment →]         │  │  wa.me/919123366161     ││
│   └────────┬────────────┘  └─────────────────────────┘│
│            │                                           │
│   ┌────────▼──────────────────┐                        │
│   │ "Need help choosing?"     │                        │
│   │  📞 9123366161  ✉ Email   │                        │
│   └───────────────────────────┘                        │
└────────────────────────────────────────────────────────┘
      │
      ▼ (if "Continue to Payment" clicked)
┌─ CoursePayment.showPaymentModal('group') ──────────────┐
│                                                        │
│   "Complete Your Enrollment"                           │
│   [Course Name]                                        │
│                                                        │
│   Group Classes    ₹1,499/mo                           │
│                                                        │
│   Full Name:    [______________]                        │
│   Email:        [______________]                        │
│   Phone:        [______________]                        │
│                                                        │
│   [Pay ₹1,499]                                         │
│   🔒 Secured by Razorpay                               │
└────────────────────────────────────────────────────────┘
      │
      ▼ (Razorpay checkout opens → payment processed)
```

```
SUMMER CAMP PAGES
─────────────────────────────────────────
Click "Enroll Now" ([data-enroll-camp])
      │
      ▼
┌─ SummerCampEnrollment.openEnrollmentModal() ───────────┐
│                                                        │
│   Same two-option layout as course pages:              │
│                                                        │
│   ┌─────────────────────┐  ┌─────────────────────────┐│
│   │ 💳 Pay Online        │  │  💬 WhatsApp Enrollment  ││
│   │    ₹4,999           │  │                         ││
│   │ [Continue to        │  │ [Chat on WhatsApp →]    ││
│   │  Payment →]         │  │                         ││
│   └────────┬────────────┘  └─────────────────────────┘│
└────────────┼───────────────────────────────────────────┘
             │
             ▼ (opens Razorpay payment form with ₹4,999)
```

```
PRICING PAGE & HOMEPAGE
─────────────────────────────────────────
Click "Get Started" (.choose-plan-btn / .plan-cta)
      │
      ▼
Redirects to /contact page (no modal, just a link)
```

### 3.2 Key Files in the Enrollment Flow

| File | Role | What It Does |
|------|------|-------------|
| `enrollment-modal.js` | **Step 1 Modal** | Shows two-option modal: "Pay Online" + "WhatsApp Enrollment" + "Need help?" support links. Used on **course pages** only. |
| `course-payment.js` | **Step 2 Payment** | Called when user picks "Pay Online". Shows payment form (name, email, phone), creates Razorpay order, opens Razorpay checkout. Loads pricing from `courses-config.json`. |
| `summer-camp-enrollment.js` | **Both Steps** | Has its own two-option modal (same pattern as enrollment-modal.js) AND its own payment form. Hardcoded price: ₹4,999. |
| `courses-config.json` | **Price Source** | Central pricing config for all courses. `course-payment.js` reads prices from here. |

### 3.3 What Needs to Change for International Pricing

The existing two-option pattern (Pay Online + WhatsApp) **stays exactly the same**. The only change is:

| Element | Indian User (no change) | International User (auto-swapped) |
|---------|------------------------|----------------------------------|
| **Pay Online heading** | "Pay Online" | "Pay Online" |
| **Pay Online price in summer camp modal** | "Pay Online - ₹4,999" | "Pay Online - $60" |
| **Razorpay payment features** | "UPI, Cards, Net Banking" | "Cards, International Payments" |
| **Payment form amount** | ₹1,499 / ₹2,499 / ₹4,999 (INR) | $40 / $100 / $60 (USD) |
| **Razorpay currency** | INR | USD |
| **WhatsApp message** | "Hi, I want to enroll in [Course]..." | "Hi, I want to enroll in [Course] ($40 USD/month)..." |
| **Pricing page "Get Started" button** | Links to /contact | Links to /contact (no change) |

The modal UI, layout, animations, support links — all stay identical. Just the numbers and currency symbol swap automatically.

### 3.4 Flow After International Pricing

```
COURSE PAGES — International User
─────────────────────────────────────────
Click "Enroll Now"
      │
      ▼
┌─ EnrollmentModal.open() ──────────────────────────────┐
│                                                        │
│   ┌─────────────────────┐  ┌─────────────────────────┐│
│   │  💳 Pay Online       │  │  💬 WhatsApp Enrollment  ││
│   │                     │  │                         ││
│   │ • Instant confirm   │  │ • Chat with Shivam Sir  ││
│   │ • Razorpay checkout │  │ • Flexible payment      ││
│   │ • Cards, Intl Pay   │  │ • Help with payment     ││
│   │                     │  │                         ││
│   │ [Continue to        │  │ [Chat on WhatsApp →]    ││
│   │  Payment →]         │  │  Pre-filled: "$40 USD"  ││
│   └────────┬────────────┘  └─────────────────────────┘│
└────────────┼───────────────────────────────────────────┘
             │
             ▼
┌─ CoursePayment.showPaymentModal('group') ──────────────┐
│                                                        │
│   Group Classes    $40/mo                              │
│                                                        │
│   [Pay $40]     ← Razorpay opens with USD              │
│   🔒 Secured by Razorpay                               │
│                                                        │
│   Need help with payment?                              │
│   Chat with us on WhatsApp                             │
└────────────────────────────────────────────────────────┘
```

---

## 4. Auto-Detection Logic

### 3.1 How It Works (Silent, Instant, Privacy-Safe)

```javascript
function isIndianUser() {
  // Signal 1: Browser language/locale
  const languages = navigator.languages || [navigator.language || ''];
  const hasIndianLocale = languages.some(lang => {
    const upper = lang.toUpperCase();
    // Check for "-IN" country code OR Indian language codes
    return upper.includes('-IN') || upper.startsWith('HI') || upper.startsWith('BN') ||
           upper.startsWith('TA') || upper.startsWith('TE') || upper.startsWith('MR') ||
           upper.startsWith('GU') || upper.startsWith('KN') || upper.startsWith('ML') ||
           upper.startsWith('PA') || upper.startsWith('OR') || upper.startsWith('AS');
  });

  // Signal 2: Timezone
  let tz = '';
  try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) {}
  const hasIndianTimezone = (tz === 'Asia/Kolkata' || tz === 'Asia/Calcutta');

  // EITHER signal = India
  return hasIndianLocale || hasIndianTimezone;
}
```

### 3.2 Detection Rules

| Scenario | Locale | Timezone | Result |
|---|---|---|---|
| Indian user in India | `en-IN` / `hi` | `Asia/Kolkata` | **India** |
| Indian user abroad | `en-IN` | `America/New_York` | **India** (locale match) |
| Foreign user in India | `en-US` | `Asia/Kolkata` | **India** (timezone match) |
| International user | `en-US` | `America/New_York` | **International** |
| European user | `fr-FR` | `Europe/Paris` | **International** |
| No data available | `en` / empty | empty | **International** (safe fallback = higher price) |

### 3.3 Privacy Guarantee

- Zero network calls for detection
- No IP lookup, no GPS, no cookies
- `navigator.language` and `Intl.DateTimeFormat` are synchronous browser APIs
- No data about the user's region is ever sent to the server

---

## 5. Frontend Implementation — `international-pricing.js`

This single script handles ALL pages automatically.

### 4.1 Core Module

```javascript
const InternationalPricing = {

  // ─── Price Maps ───
  PRICES: {
    india: {
      group:    { amount: 1499,  display: '₹1,499',   symbol: '₹', period: '/month' },
      personal: { amount: 2499,  display: '₹2,499',   symbol: '₹', period: '/month' },
      lifetime: { amount: 49999, display: '₹49,999',  symbol: '₹', period: '' },
      summer:   { amount: 4999,  display: '₹4,999',   symbol: '₹', period: '' }
    },
    international: {
      group:    { amount: 40,    display: '$40',       symbol: '$', period: '/month', currency: 'USD' },
      personal: { amount: 100,   display: '$100',      symbol: '$', period: '/month', currency: 'USD' },
      lifetime: { amount: 599,   display: '$599',      symbol: '$', period: '',       currency: 'USD' },
      summer:   { amount: 60,    display: '$60',       symbol: '$', period: '',       currency: 'USD' }
    }
  },

  isIndian: true, // default to India

  // ─── Initialize ───
  init() {
    this.isIndian = this.detectIndia();

    // Store for payment JS files to read
    window.__MAC_IS_INDIAN = this.isIndian;
    window.__MAC_CURRENCY = this.isIndian ? 'INR' : 'USD';

    if (!this.isIndian) {
      this.updateAllPages();
    }
  },

  // ─── Detection ───
  detectIndia() {
    const languages = navigator.languages || [navigator.language || ''];
    const hasIndianLocale = languages.some(lang => {
      const u = lang.toUpperCase();
      return u.includes('-IN') || u.startsWith('HI') || u.startsWith('BN') ||
             u.startsWith('TA') || u.startsWith('TE') || u.startsWith('MR') ||
             u.startsWith('GU') || u.startsWith('KN') || u.startsWith('ML') ||
             u.startsWith('PA') || u.startsWith('OR') || u.startsWith('AS');
    });
    let tz = '';
    try { tz = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) {}
    return hasIndianLocale || tz === 'Asia/Kolkata' || tz === 'Asia/Calcutta';
  },

  // ─── Update ALL pages ───
  updateAllPages() {
    this.updatePricingPage();
    this.updateHomePage();
    this.updateCoursePages();
    this.updateSummerCampPages();
    this.hideInternationalSections();
  },

  // Details for each page below...
};

// Run on DOM ready
document.addEventListener('DOMContentLoaded', () => InternationalPricing.init());
window.InternationalPricing = InternationalPricing;
```

### 4.2 Pricing Page (`pricing.html`)

**Target elements:** `.pricing-card-new .price-amount`, `.pricing-card-new .price-currency`

```javascript
updatePricingPage() {
  const prices = this.PRICES.international;

  // Each tab (Coding, Maths) has 2 cards: Group (1st) and Personal (2nd)
  document.querySelectorAll('.pricing-tab-content').forEach(tab => {
    const cards = tab.querySelectorAll('.pricing-card-new');
    if (cards[0]) this.swapPrice(cards[0], prices.group);
    if (cards[1]) this.swapPrice(cards[1], prices.personal);
  });
}
```

**Before (Indian):** `₹1499 /month` → **After (International):** `$40 /month`

### 4.3 Homepage (`index.html`)

**Target elements:** `.pricing-card .plan-price`, `.price-currency`, `.price-period`

```javascript
updateHomePage() {
  const prices = this.PRICES.international;

  // Homepage has pricing cards with class .pricing-card and .plan-price
  document.querySelectorAll('.pricing-card').forEach(card => {
    const title = card.querySelector('.plan-title');
    if (!title) return;
    const text = title.textContent.toLowerCase();

    if (text.includes('group')) {
      this.swapPlanPrice(card, prices.group);
    } else if (text.includes('personalized')) {
      this.swapPlanPrice(card, prices.personal);
    }
    // "Custom Pricing" cards are left as-is
  });
}
```

### 4.4 Generated Course Pages (`course-template.html`)

**Target elements:** `.price[data-template]` divs, and the inline international section

```javascript
updateCoursePages() {
  const prices = this.PRICES.international;

  // Course enrollment options: .price divs with data-template attribute
  document.querySelectorAll('.enrollment-option').forEach(option => {
    const priceEl = option.querySelector('.price');
    const heading = option.querySelector('h4');
    if (!priceEl || !heading) return;
    const text = heading.textContent.toLowerCase();

    if (text.includes('group')) {
      priceEl.textContent = prices.group.display + prices.group.period;
    } else if (text.includes('personal') || text.includes('mentorship')) {
      priceEl.textContent = prices.personal.display + prices.personal.period;
    }
  });
}
```

### 4.5 Summer Camp Pages

**Target elements:** `.pricing-amount .currency`, `.pricing-amount .price`, enroll buttons

```javascript
updateSummerCampPages() {
  const price = this.PRICES.international.summer;

  // Update pricing display
  document.querySelectorAll('.pricing-amount').forEach(el => {
    const currencyEl = el.querySelector('.currency');
    const priceEl = el.querySelector('.price');
    if (currencyEl) currencyEl.textContent = price.symbol;
    if (priceEl) priceEl.textContent = price.amount;
  });

  // Update hero stat
  document.querySelectorAll('.hero-stat strong').forEach(el => {
    if (el.textContent.includes('₹') || el.textContent.includes('4,999')) {
      el.textContent = price.display;
    }
  });

  // Update enroll buttons text
  document.querySelectorAll('[data-enroll-camp], .btn-premium-solid').forEach(btn => {
    if (btn.textContent.includes('₹')) {
      btn.textContent = btn.textContent.replace(/₹[\d,]+/, price.display);
    }
  });
}
```

### 4.6 Hide International Sections (All Pages)

The existing separate "International Student Pricing" sections become unnecessary since main prices already show USD.

```javascript
hideInternationalSections() {
  // Pricing page: .intl-pricing-section
  document.querySelectorAll('.intl-pricing-section').forEach(el => el.style.display = 'none');

  // Course template: International pricing box (identified by heading text)
  document.querySelectorAll('h3, h4').forEach(heading => {
    if (heading.textContent.toLowerCase().includes('international')) {
      const section = heading.closest('div[style]') || heading.parentElement;
      if (section) section.style.display = 'none';
    }
  });

  // Hide showInternationalContactModal buttons
  document.querySelectorAll('[onclick*="showInternationalContactModal"]').forEach(el => {
    const parent = el.closest('div');
    if (parent) parent.style.display = 'none';
  });
}
```

### 4.7 Generic Price Swap Helpers

```javascript
// For pricing.html cards (.price-amount > .price-currency)
swapPrice(card, priceData) {
  const amountEl = card.querySelector('.price-amount');
  if (amountEl) {
    amountEl.innerHTML = `<span class="price-currency">${priceData.symbol}</span>${priceData.amount}`;
  }
  const periodEl = card.querySelector('.price-period');
  if (periodEl) periodEl.textContent = priceData.period;
},

// For index.html cards (.plan-price > .price-currency)
swapPlanPrice(card, priceData) {
  const planPrice = card.querySelector('.plan-price');
  if (planPrice) {
    planPrice.innerHTML = `<span class="price-currency">${priceData.symbol}</span>${priceData.amount}<span class="price-period">${priceData.period}</span>`;
  }
}
```

---

## 6. Razorpay Integration — Full USD Support

### 5.1 How Razorpay Multi-Currency Works

Razorpay supports international payments in USD, EUR, GBP, and 90+ currencies when **International Payments** is enabled on the Razorpay Dashboard:
- `Dashboard → Settings → International Payments → Enable`
- Once enabled, orders can be created with `currency: 'USD'`
- Razorpay checkout automatically shows the price in USD
- Settlement happens in INR (Razorpay converts at market rate)

### 5.2 Backend Changes — `payment.js`

**Current code (hardcoded INR):**
```javascript
const orderResult = await createOrder({
  amount: amount,
  currency: 'INR',        // ← hardcoded
  receipt: orderId,
  notes: { ... }
});
```

**Updated code (accept currency from frontend):**
```javascript
const {
  amount,
  currency,              // ← NEW: 'INR' or 'USD' from frontend
  productType,
  productId,
  productName,
  customerName,
  customerEmail,
  customerPhone,
  notes = {}
} = req.body;

// Validate currency
const allowedCurrencies = ['INR', 'USD'];
const orderCurrency = allowedCurrencies.includes(currency) ? currency : 'INR';

const orderResult = await createOrder({
  amount: amount,
  currency: orderCurrency,   // ← Now dynamic
  receipt: orderId,
  notes: { ...notes, currency: orderCurrency }
});

// Save with correct currency
const payment = new Payment({
  orderId,
  razorpayOrderId: orderResult.order.id,
  amount,
  currency: orderCurrency,   // ← Now saved correctly
  customerName,
  customerEmail,
  customerPhone,
  productType,
  productId: productId || null,
  productName,
  notes,
  status: 'created'
});
```

### 5.3 Frontend Changes — `course-payment.js`

**Current code:**
```javascript
body: JSON.stringify({
  amount: amount,
  productType: 'course',
  ...
})
```

**Updated code:**
```javascript
// Determine currency and amount based on detection
const isIndian = window.__MAC_IS_INDIAN !== undefined ? window.__MAC_IS_INDIAN : true;
const currency = isIndian ? 'INR' : 'USD';

// Get correct amount
const intlPrices = { group: 40, personal: 100, lifetime: 599 };
const finalAmount = isIndian ? amount : (intlPrices[planType] || amount);

body: JSON.stringify({
  amount: finalAmount,
  currency: currency,         // ← NEW: tells backend which currency
  productType: 'course',
  ...
})
```

**Razorpay checkout automatically shows the right currency:**
```javascript
const options = {
  key: data.key,
  amount: data.order.amount,       // In smallest unit (paise for INR, cents for USD)
  currency: data.order.currency,   // 'INR' or 'USD' — Razorpay shows correct symbol
  name: 'Modern Age Coders',
  description: this.courseName,
  order_id: data.order.id,
  ...
};
```

### 5.4 Frontend Changes — `summer-camp-enrollment.js`

**Current code:**
```javascript
coursePrice: 4999,
```

**Updated code:**
```javascript
getCoursePrice() {
  const isIndian = window.__MAC_IS_INDIAN !== undefined ? window.__MAC_IS_INDIAN : true;
  return isIndian ? 4999 : 60;
},

getCourseCurrency() {
  const isIndian = window.__MAC_IS_INDIAN !== undefined ? window.__MAC_IS_INDIAN : true;
  return isIndian ? 'INR' : 'USD';
},

getPriceDisplay() {
  const isIndian = window.__MAC_IS_INDIAN !== undefined ? window.__MAC_IS_INDIAN : true;
  return isIndian ? '₹4,999' : '$60';
}
```

And in the payment request:
```javascript
body: JSON.stringify({
  amount: this.getCoursePrice(),
  currency: this.getCourseCurrency(),   // ← NEW
  productType: 'course',
  productName: this.courseName,
  ...
})
```

### 5.5 Payment Modal Display

**Indian user sees:**
```
┌──────────────────────────────────────────────┐
│  Complete Your Enrollment                     │
│  Python Masterclass                           │
│                                               │
│  Group Classes    ₹1,499/mo                   │
│                                               │
│  [Pay ₹1,499]                                 │
│  🔒 Secured by Razorpay                       │
│                                               │
│  Need help with payment?                      │
│  Chat with us on WhatsApp                     │
└──────────────────────────────────────────────┘
```

**International user sees:**
```
┌──────────────────────────────────────────────┐
│  Complete Your Enrollment                     │
│  Python Masterclass                           │
│                                               │
│  Group Classes    $40/mo                      │
│                                               │
│  [Pay $40]                                    │
│  🔒 Secured by Razorpay                       │
│                                               │
│  Need help with payment?                      │
│  Chat with us on WhatsApp                     │
└──────────────────────────────────────────────┘
```

Both get Razorpay as primary + WhatsApp as fallback. Razorpay checkout handles the currency automatically (INR or USD). WhatsApp message is pre-filled with the correct plan and price so we know exactly what the customer needs.

### 5.6 WhatsApp Help Link — All Users (India + International)

Every user (Indian and international) sees a WhatsApp help link — just like the current site. This ensures no one is stuck if they face a payment issue.

**1. Below payment button in payment modal (all pages)**

```javascript
// In course-payment.js and summer-camp-enrollment.js — after the submit button
// Shows for ALL users (Indian + International)
const isIndian = window.__MAC_IS_INDIAN !== undefined ? window.__MAC_IS_INDIAN : true;
const currency = isIndian ? 'INR' : 'USD';
const priceText = isIndian ? `₹${amount}` : `$${finalAmount} USD`;

const whatsappNote = document.createElement('div');
whatsappNote.className = 'whatsapp-help';
whatsappNote.innerHTML = `
  <p>Need help with payment?</p>
  <a href="https://wa.me/919123366161?text=${encodeURIComponent(
    `Hi! I need help with payment for ${courseName} - ${planName} (${priceText}/month).`
  )}" target="_blank" rel="noopener">
    Chat with us on WhatsApp
  </a>
`;
form.appendChild(whatsappNote);
```

**2. Below "Get Started" CTA on pricing cards (pricing page, homepage, course pages)**

A small WhatsApp link is injected below each pricing card's CTA button — for **all users**:

```javascript
addWhatsAppHelpers() {
  const isIndian = this.isIndian;

  document.querySelectorAll('.choose-plan-btn, .plan-cta a, .enroll-btn').forEach(btn => {
    const card = btn.closest('.pricing-card-new, .pricing-card, .enrollment-option');
    if (!card) return;

    // Determine plan type from card context
    const title = card.querySelector('h3, h4, .plan-title')?.textContent || '';
    const isGroup = title.toLowerCase().includes('group');
    const planName = isGroup ? 'Group Classes' : 'Personalized 1-on-1';

    // Show correct price based on detection
    const price = isIndian
      ? (isGroup ? '₹1,499' : '₹2,499')
      : (isGroup ? '$40 USD' : '$100 USD');

    const helpLink = document.createElement('a');
    helpLink.href = `https://wa.me/919123366161?text=${encodeURIComponent(
      `Hi! I'm interested in ${planName} (${price}/month). Can you help me with enrollment?`
    )}`;
    helpLink.target = '_blank';
    helpLink.rel = 'noopener';
    helpLink.className = 'wa-help-link';
    helpLink.textContent = 'Need help? Chat on WhatsApp';

    btn.insertAdjacentElement('afterend', helpLink);
  });
}
```

**Styling for WhatsApp help links:**

```css
.whatsapp-help {
  text-align: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}
.whatsapp-help p {
  color: #64748b;
  font-size: 0.8rem;
  margin-bottom: 0.3rem;
}
.whatsapp-help a,
.wa-help-link {
  color: #25D366;
  font-size: 0.8rem;
  text-decoration: none;
  display: inline-block;
  margin-top: 0.5rem;
}
.wa-help-link:hover,
.whatsapp-help a:hover {
  text-decoration: underline;
}
```

**Why WhatsApp help for everyone:**
- Indian users may face UPI failures, bank issues, or need to ask questions before paying
- International users may face card declines, currency issues, or Razorpay checkout problems
- WhatsApp gives everyone a direct line to get help and complete payment
- We can assist with alternative payment methods via chat
- Builds trust — every customer knows there's a real person who can help
- WhatsApp message is pre-filled with the correct plan name and price (₹ for Indian, $ for international) so we immediately know what the customer needs

### 5.6 Razorpay Dashboard Setup (One-Time)

1. Go to Razorpay Dashboard → **Settings** → **International Payments**
2. Click **Enable International Payments**
3. Submit required documents (business PAN, GST, etc.)
4. Once approved, Razorpay accepts USD, EUR, GBP, and 90+ currencies
5. Settlement continues in INR to your bank account

> **Note:** If international payments are not yet enabled, the system still works — it will create the order in INR as fallback, and the user pays the INR equivalent. Once enabled, it seamlessly switches to USD.

---

## 7. Course Config Update — `courses-config.json`

Add international pricing alongside existing INR pricing:

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
  "defaultPricing": {
    "group": { "amount": 1499, "display": "₹1,499/month" },
    "personal": { "amount": 2499, "display": "₹2,499/month" },
    "lifetime": { "amount": 49999, "display": "₹49,999" }
  },
  "courses": { ... }
}
```

All courses use the **same flat international price** regardless of their individual INR pricing. A course that's ₹999/month or ₹2,499/month in India is still $40 group / $100 personal internationally.

---

## 8. What Gets Removed vs What Stays

### Removed (Old Separate International Sections)

| Item | Location | Action |
|------|----------|--------|
| **International Pricing Section** | `pricing.html` → `.intl-pricing-section` | Hidden via JS for international users — main cards already show USD |
| **International Pricing Box** | `course-template.html` → inline $40/$100 section | Hidden via JS — main enrollment options already show USD |
| **`showInternationalContactModal()`** | `course-template.html` → inline `<script>` | No longer called; hidden by JS |
| **"For students outside India" text** | Multiple pages | Hidden via JS |

### Stays (WhatsApp — Same Two-Option Pattern Everywhere)

| Item | Where It Appears | For Whom | What Changes |
|------|-----------------|----------|-------------|
| **Two-option enrollment modal** (Pay Online + WhatsApp) | Course pages via `enrollment-modal.js` | All users | WhatsApp msg includes ₹ or $ based on detection. "UPI, Cards, Net Banking" changes to "Cards, International Payments" for international. |
| **Two-option enrollment modal** (Pay Online + WhatsApp) | Summer camp pages via `summer-camp-enrollment.js` | All users | Same — price swaps to $60, WhatsApp msg includes $. |
| **WhatsApp help link below payment button** | Payment form modal (course-payment.js, summer-camp-enrollment.js) | All users | "Need help with payment? Chat with us on WhatsApp" — pre-filled with correct ₹ or $ amount |
| **"Need help choosing?" support section** | Bottom of enrollment modal | All users | Phone + Email links — **no change needed** |

The existing two-option pattern already gives every user the choice between Razorpay and WhatsApp. WhatsApp message auto-fills with the correct currency so we immediately know who's contacting and what they want.

---

## 9. Edge Cases

| Scenario | Behavior |
|---|---|
| **No locale/timezone data** | Falls back to International ($40/$100) — safer to show higher price |
| **Indian abroad** (locale `en-IN`, timezone `America/New_York`) | Detected as **India** — locale has `-IN` |
| **Foreigner in India** (locale `en-US`, timezone `Asia/Kolkata`) | Detected as **India** — timezone match |
| **"Custom Quote" cards** | Not touched — no price to swap |
| **Course-specific pricing** (₹999, ₹1,799, ₹4,999) | All map to same flat $40 group / $100 personal internationally |
| **Lifetime plans** (₹24,999–₹69,999) | All become $599 internationally |
| **Summer camp** (₹4,999) | Becomes $60 internationally |
| **Razorpay international not enabled yet** | Order created in INR as fallback; user pays INR equivalent. WhatsApp link available for manual help |
| **Razorpay payment fails for international user** | WhatsApp fallback link is right there — user can chat with us for alternative payment (bank transfer, PayPal, etc.) |
| **Phone number field (10-digit validation)** | Must be relaxed for international users (allow 7-15 digits) |

---

## 10. Performance

| Metric | Value |
|--------|-------|
| Detection time | < 1ms (synchronous browser APIs) |
| Price swap time | < 5ms (DOM updates on 8-12 elements across any page) |
| Extra JS payload | ~2 KB (minified, single file) |
| Network calls for detection | **Zero** |
| Layout shift | **None** — runs on DOMContentLoaded before first meaningful paint |
| Backend changes | Minimal — accept `currency` param in payment route |

---

## 11. Security

- **Backend validates currency**: Only `'INR'` and `'USD'` accepted
- **Backend validates amount**: Must match known price points ($40, $100, $599, $60 for USD)
- **Razorpay signature verification**: Already in place, works for any currency
- **No user location data stored**: Detection happens client-side, never sent to server
- **Price manipulation via DevTools**: Backend rejects invalid amount/currency combinations

### Backend Amount Validation

```javascript
// Add to payment.js create-order route
const VALID_USD_AMOUNTS = [40, 60, 100, 599];
const VALID_INR_AMOUNTS = [999, 1299, 1499, 1799, 1999, 2499, 2999, 3499, 3999, 4999,
                           24999, 29999, 34999, 39999, 44999, 49999, 54999, 59999, 69999];

if (orderCurrency === 'USD' && !VALID_USD_AMOUNTS.includes(amount)) {
  return res.status(400).json({ success: false, error: 'Invalid USD amount' });
}
```

---

## 12. Step-by-Step Implementation Plan

### Step 1: Create `international-pricing.js` (~2 hours)

**Create:** `frontend/src/js/international-pricing.js`

- `isIndianUser()` detection (locale + timezone)
- Price swap for pricing page (`.pricing-card-new`)
- Price swap for homepage (`.pricing-card .plan-price`)
- Price swap for course pages (`.enrollment-option .price`)
- Price swap for summer camp pages (`.pricing-amount`)
- Hide old international sections (`.intl-pricing-section`, inline international boxes)
- Inject WhatsApp help links below CTA buttons for international users
- Set `window.__MAC_IS_INDIAN` and `window.__MAC_CURRENCY` globals for payment JS

### Step 2: Add script to ALL pages that show pricing (~30 min)

**Modify these files** — add `<script src="/js/international-pricing.js"></script>` before `</body>`:

1. `frontend/src/pages/pricing.html`
2. `frontend/src/pages/index.html`
3. `frontend/src/pages/summer-coding-camp-kids.html`
4. `frontend/src/pages/summer-coding-camp-teens.html`
5. `frontend/src/pages/summer-coding-camp-adults.html`
6. `frontend/src/pages/summer-coding-camp.html`
7. `frontend/content/courses/template/course-template.html`

Also add `data-plan="group"` / `data-plan="personal"` attributes to pricing cards where missing, for reliable JS targeting.

### Step 3: Update `enrollment-modal.js` for international users (~30 min)

**Modify:** `frontend/src/js/enrollment-modal.js`

This is the two-option modal (Pay Online + WhatsApp) that appears on course pages. The layout stays identical — only text and links change for international users:

- Read `window.__MAC_IS_INDIAN` and `window.__MAC_CURRENCY`
- **Pay Online card**: Change "UPI, Cards, Net Banking" to "Cards, International Payments" for international users
- **WhatsApp card**: Update the pre-filled WhatsApp message to include USD price: `"Hi, I want to enroll in [Course] ($40 USD/month). Please share details."`
- Both options remain available for all users — same two-card layout, same flow

### Step 4: Update `course-payment.js` for USD support (~1 hour)

**Modify:** `frontend/src/js/course-payment.js`

This is the payment form that opens when user picks "Pay Online" from the enrollment modal:

- Read `window.__MAC_IS_INDIAN` and `window.__MAC_CURRENCY`
- Send `currency` field in `/api/payment/create-order` request
- Use flat USD amount ($40/$100/$599) for international users instead of INR course price
- Update payment modal to show `$` symbol and USD amount for international users
- Add WhatsApp help link below payment button for all users: "Need help with payment? Chat with us on WhatsApp"
- Update success message to show correct currency
- Relax phone validation (allow international phone numbers, not just 10-digit)

### Step 5: Update `summer-camp-enrollment.js` for USD support (~30 min)

**Modify:** `frontend/src/js/summer-camp-enrollment.js`

This file has its own two-option modal (same pattern as enrollment-modal.js) AND its own payment form:

- Read `window.__MAC_IS_INDIAN`
- In the two-option modal: swap "Pay Online - ₹4,999" to "Pay Online - $60" for international
- In the two-option modal: update WhatsApp message to include "$60 USD"
- In the two-option modal: change "UPI, Cards, Net Banking" to "Cards, International Payments" for international
- In the payment form: swap `coursePrice` from 4999 to 60 for international
- Send `currency: 'USD'` in payment request for international
- Add WhatsApp help link below payment button for all users

### Step 6: Update backend `payment.js` to accept currency (~30 min)

**Modify:** `backend/routes/payment.js`

- Accept `currency` from request body
- Validate: only `'INR'` or `'USD'` allowed
- Validate: amount must match known price points for the given currency
- Pass `currency` to `createOrder()` (service already supports it)
- Save correct currency in Payment record

### Step 7: Update `courses-config.json` (~15 min)

**Modify:** `frontend/content/courses/data/courses-config.json`

- Add `internationalPricing` section with USD amounts
- Add `internationalCurrency: "USD"` to payment config

### Step 8: Enable Razorpay International Payments (~admin task)

- Razorpay Dashboard → Settings → International Payments → Enable
- Submit required business documents
- Once approved, USD orders process natively

### Step 9: Test (~2 hours)

1. **Indian detection test**: Chrome DevTools → Sensors → set locale `en-IN`, timezone `Asia/Kolkata` → verify ₹ prices on ALL pages + WhatsApp help links with ₹ prices
2. **International detection test**: Set locale `en-US`, timezone `America/New_York` → verify $ prices on ALL pages
3. **WhatsApp fallback test (international)**: Verify WhatsApp help links appear below CTA buttons on pricing page, homepage, and course pages for international users
4. **WhatsApp in payment modal test**: Open payment modal as international user → verify "Need help? Chat on WhatsApp" link appears below the Pay button
5. **WhatsApp link content test**: Click WhatsApp links → verify they open wa.me with correct pre-filled message (₹ price for Indian, $ price for international)
6. **Enrollment modal test (Indian)**: Click "Enroll Now" on a course page as Indian user → verify two-option modal shows ₹ prices, "UPI, Cards, Net Banking", WhatsApp msg has ₹ price
7. **Enrollment modal test (International)**: Click "Enroll Now" as international user → verify two-option modal shows $ prices, "Cards, International Payments", WhatsApp msg has $ price
8. **Payment test (INR)**: Pick "Pay Online" as Indian user → confirm Razorpay processes in INR
9. **Payment test (USD)**: Pick "Pay Online" as international user → confirm Razorpay processes in USD
8. **Summer camp test**: Verify $60 shows, WhatsApp help visible, and payment works for international
9. **Course page test**: Visit any generated course page → verify prices swap correctly + WhatsApp help link present
10. **Homepage test**: Verify all 4 pricing cards (coding group, coding personal, maths group, maths personal) swap + WhatsApp links
11. **Edge case test**: Clear all browser data, set locale to `en` (no country) → should show international ($) with WhatsApp fallback
12. **Mobile test**: Check on iOS Safari and Android Chrome — WhatsApp links should work and open WhatsApp app
13. **No flicker test**: Hard reload pages and verify no visible price change/flicker

---

## 13. Files Summary

| File | Action | Purpose |
|------|--------|---------|
| `frontend/src/js/international-pricing.js` | **CREATE** | Auto-detection + price swap for ALL pages (~2 KB) |
| `frontend/src/pages/pricing.html` | MODIFY | Add script tag, add data attributes |
| `frontend/src/pages/index.html` | MODIFY | Add script tag |
| `frontend/src/pages/summer-coding-camp-kids.html` | MODIFY | Add script tag |
| `frontend/src/pages/summer-coding-camp-teens.html` | MODIFY | Add script tag |
| `frontend/src/pages/summer-coding-camp-adults.html` | MODIFY | Add script tag |
| `frontend/src/pages/summer-coding-camp.html` | MODIFY | Add script tag |
| `frontend/content/courses/template/course-template.html` | MODIFY | Add script tag |
| `frontend/src/js/enrollment-modal.js` | MODIFY | Update WhatsApp msg + payment features text for international |
| `frontend/src/js/course-payment.js` | MODIFY | USD support + currency param + WhatsApp help link |
| `frontend/src/js/summer-camp-enrollment.js` | MODIFY | USD support + currency param + WhatsApp msg update |
| `backend/routes/payment.js` | MODIFY | Accept currency, validate amounts |
| `frontend/content/courses/data/courses-config.json` | MODIFY | Add international pricing data |

**Total new code:** ~2 KB frontend JS + ~20 lines backend changes
**No new backend routes or endpoints needed.**
