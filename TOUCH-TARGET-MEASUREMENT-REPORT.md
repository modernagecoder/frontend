# Touch Target Size Measurement Report

Generated: 27/10/2025, 10:34:24 pm

## Summary
- **Total HTML files analyzed**: 8
- **Total interactive elements found**: 10568
- **CSS rules for touch targets**: 1805

## Requirements
- **Minimum touch target size**: 44x44 pixels
- **Requirements covered**: 5.1 (buttons ≥ 44x44px), 5.2 (links ≥ 44x44px)

## Files Analyzed
- src/pages/index.html (5514 elements)
- src/pages/about.html (1252 elements)
- src/pages/course.html (1231 elements)
- src/pages/404.html (130 elements)
- src/pages/contact.html (866 elements)
- src/pages/pricing.html (841 elements)
- src/pages/terms.html (361 elements)
- src/pages/privacy.html (373 elements)

## Interactive Elements by Type
- button: 48 elements
- a: 178 elements
- input: 110 elements
- : 10230 elements
- textarea: 2 elements

## Manual Testing Instructions

### 1. Automated Measurement
A browser script has been generated: `touch-target-measurement.js`

### 2. Testing Process
1. Open each page in Chrome DevTools
2. Enable device emulation (iPhone 12 Pro - 390x844px)
3. Open Console tab
4. Copy and paste the content of `touch-target-measurement.js`
5. Press Enter to run the measurement
6. Review results for failing elements

### 3. Pages to Test
- [ ] src/pages/index.html
- [ ] src/pages/about.html
- [ ] src/pages/course.html
- [ ] src/pages/404.html
- [ ] src/pages/contact.html
- [ ] src/pages/pricing.html
- [ ] src/pages/terms.html
- [ ] src/pages/privacy.html

### 4. Expected Results
- All buttons should be ≥ 44x44px
- All links should be ≥ 44x44px
- Pass rate should be 100%

## CSS Rules Found

### src\css\certificate-carousel.css
```css
ative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.certificate-carousel {
    flex: 1;
    overflow: hidden;
    border-radius: 12px;
    max-width: 100%;
}
```


### src\css\certificate-carousel.css
```css
ay: flex;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
}

.certificate-image {
    min-width: 100%;
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
}
```


### src\css\certificate-carousel.css
```css
ate-arrow {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    width: 36px;
    height: 36px;
    min-width: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0;
    flex-shrink: 0;
    backdrop-filter: blur(10px);
    z-index: 10;
}
```


### src\css\certificate-carousel.css
```css
ansform: scale(0.95);
}

.certificate-arrow svg {
    width: 18px;
    height: 18px;
    color: rgba(255, 255, 255, 0.9);
}
```


### src\css\certificate-carousel.css
```css
ap: 8px;
    }
    
    .certificate-arrow {
        width: 32px;
        height: 32px;
        min-width: 32px;
    }
```


### src\css\certificate-carousel.css
```css
ate-arrow svg {
        width: 16px;
        height: 16px;
    }
```


### src\css\certificate-carousel.css
```css
ap: 6px;
    }
    
    .certificate-arrow {
        width: 28px;
        height: 28px;
        min-width: 28px;
    }
```


### src\css\certificate-carousel.css
```css
ate-arrow svg {
        width: 14px;
        height: 14px;
    }
```


### src\css\certificate-carousel.css
```css
osition: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.certificate-carousel {
    flex: 1;
    overflow: hidden;
    border-radius: 12px;
    max-width: 100%;
}
```


### src\css\certificate-carousel.css
```css
lay: flex;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
}

.certificate-image {
    min-width: 100%;
    width: 100%;
    height: auto;
    display: block;
    object-fit: contain;
}
```


### src\css\certificate-carousel.css
```css
ertificate-arrow {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    width: 36px;
    height: 36px;
    min-width: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    padding: 0;
    flex-shrink: 0;
    backdrop-filter: blur(10px);
    z-index: 10;
}
```


### src\css\certificate-carousel.css
```css
transform: scale(0.95);
}

.certificate-arrow svg {
    width: 18px;
    height: 18px;
    color: rgba(255, 255, 255, 0.9);
}
```


### src\css\certificate-carousel.css
```css
ertificate-arrow {
        width: 32px;
        height: 32px;
        min-width: 32px;
    }
```


### src\css\certificate-carousel.css
```css
ertificate-arrow svg {
        width: 16px;
        height: 16px;
    }
```


### src\css\certificate-carousel.css
```css
ertificate-arrow {
        width: 28px;
        height: 28px;
        min-width: 28px;
    }
```


### src\css\certificate-carousel.css
```css
ertificate-arrow svg {
        width: 14px;
        height: 14px;
    }
```


### src\css\keyboard-navigation.css
```css
abindex: 0; /* Make focusable via keyboard */
}

/* ========================================
   SKIP LINKS FOR KEYBOARD NAVIGATION
   ======================================== */

.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: rgba(168, 85, 247, 0.95);
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 4px;
  z-index: 10003;
  font-weight: 600;
  transition: top 0.3s ease;
}
```


### src\css\keyboard-navigation.css
```css
ass will be added by JavaScript for keyboard navigation */
}

/* ========================================
   ARIA LIVE REGIONS FOR SCREEN READERS
   ======================================== */

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```


### src\css\keyboard-navigation.css
```css
Announcements for dynamic content changes */
.aria-live-region {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
```


### src\css\keyboard-navigation.css
```css
ARD SHORTCUTS INDICATORS
   ======================================== */

/* Visual indicators for keyboard shortcuts */
.keyboard-shortcut {
  font-family: monospace;
  background: rgba(168, 85, 247, 0.1);
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-radius: 3px;
  padding: 2px 6px;
  font-size: 0.8em;
  margin-left: 8px;
}
```


### src\css\keyboard-navigation.css
```css
ainer for focus trapping */
}

.focus-trap-start,
.focus-trap-end {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}
```


### src\css\keyboard-navigation.css
```css
ursor: pointer;
  tabindex: 0; /* Make focusable via keyboard */
}

/* ========================================
   SKIP LINKS FOR KEYBOARD NAVIGATION
   ======================================== */

.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: rgba(168, 85, 247, 0.95);
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 4px;
  z-index: 10003;
  font-weight: 600;
  transition: top 0.3s ease;
}
```


### src\css\keyboard-navigation.css
```css
This class will be added by JavaScript for keyboard navigation */
}

/* ========================================
   ARIA LIVE REGIONS FOR SCREEN READERS
   ======================================== */

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```


### src\css\keyboard-navigation.css
```css
nnouncements for dynamic content changes */
.aria-live-region {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
```


### src\css\keyboard-navigation.css
```css
========================================
   KEYBOARD SHORTCUTS INDICATORS
   ======================================== */

/* Visual indicators for keyboard shortcuts */
.keyboard-shortcut {
  font-family: monospace;
  background: rgba(168, 85, 247, 0.1);
  border: 1px solid rgba(168, 85, 247, 0.3);
  border-radius: 3px;
  padding: 2px 6px;
  font-size: 0.8em;
  margin-left: 8px;
}
```


### src\css\keyboard-navigation.css
```css
ontainer for focus trapping */
}

.focus-trap-start,
.focus-trap-end {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
}
```


### src\css\responsive.css
```css
button */
.mobile-menu-btn {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 44px;
  height: 44px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 10000;
  position: relative;
}
```


### src\css\responsive.css
```css
buttons - minimum 44x44px touch targets */
button,
input[type="submit"],
input[type="button"],
input[type="reset"],
.btn,
.btn-primary,
.btn-secondary,
.btn-tertiary,
.cta-button,
.card-button,
.plan-button,
.submit-button,
.tab-button,
.view-more-button,
.mobile-menu-btn,
.carousel-arrow,
.certificate-arrow,
.auth-submit-btn,
.auth-modal-close,
.auth-password-toggle,
.feedback-close {
  min-height: 44px;
  min-width: 44px;
  padding: 0.75rem 1.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
}
```


### src\css\responsive.css
```css
button spacing */
form button[type="submit"],
form input[type="submit"] {
  margin-top: 0.5rem;
  width: 100%;
}
```


### src\css\responsive.css
```css
button styling for mobile */
input[type="checkbox"],
input[type="radio"] {
  min-width: 20px;
  min-height: 20px;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  cursor: pointer;
}
```


### src\css\responsive.css
```css
button */
input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  appearance: none;
  height: 20px;
  width: 20px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23CBD5E1'%3E%3Cpath fill-rule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z' clip-rule='evenodd'/%3E%3C/svg%3E");
  background-size: 20px 20px;
  cursor: pointer;
}
```


### src\css\responsive.css
```css
buttons don't overflow on very small screens */
  .cta-button,
  .card-button,
  .plan-button,
  .submit-button {
    width: 100%;
    max-width: 100%;
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
```


### src\css\responsive.css
```css
buttons vertically with proper spacing */
  .card-button-container,
  .plan-button-container {
    width: 100%;
  }
```


### src\css\responsive.css
```css
button,
  .plan-button {
    width: 100%;
    margin-bottom: 8px;
  }
```


### src\css\responsive.css
```css
buttons fit on small screens */
  .tab-button {
    padding: 0.625rem 0.75rem;
    font-size: 0.85rem;
    min-width: auto;
    flex: 1;
  }
```


### src\css\responsive.css
```css
button,
  a,
  input[type="submit"],
  input[type="button"],
  .btn,
  .cta-button,
  .card-button,
  .nav-link {
    /* Increase touch target size on touch devices */
    min-height: 48px;
    min-width: 48px;
  }
```


### src\css\responsive.css
```css
button {
  min-height: 44px;
  min-width: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
}
```


### src\css\responsive.css
```css
buttons */
.plan-button {
  width: 100%;
  min-height: 44px;
  padding: 0.875rem 1.5rem;
  margin-top: 8px;
}
```


### src\css\responsive.css
```css
button {
  margin: 4px;
  min-height: 44px;
}
```


### src\css\responsive.css
```css
buttons */
.auth-modal-close,
.feedback-close {
  min-height: 44px;
  min-width: 44px;
  padding: 0.75rem;
}
```


### src\css\responsive.css
```css
button in navigation */
.login-btn {
  min-height: 44px;
  min-width: 44px;
  padding: 0.625rem 1.25rem;
}
```


### src\css\responsive.css
```css
buttons */
.view-more-container {
  margin-top: 1rem;
  padding-top: 8px;
}
```


### src\css\responsive.css
```css
button {
  min-height: 44px;
  padding: 0.875rem 2rem;
}
```


### src\css\responsive.css
```css
buttons container spacing */
.card-button-container {
  margin-top: 1rem;
  padding-top: 8px;
}
```


### src\css\responsive.css
```css
button-group > * {
  min-height: 44px;
  min-width: 44px;
}
```


### src\css\responsive.css
```css
button */
.auth-password-toggle {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  min-height: 44px;
  min-width: 44px;
  padding: 0.5rem;
}
```


### src\css\responsive.css
```css
button min-width for very small screens */
  .tab-button {
    min-width: 100px;
    padding: 0.75rem 1rem;
    font-size: 0.85rem;
  }
```


### src\css\responsive.css
```css
Age Coders
 * Mobile-First Responsive Design
 */

/* ========================================
   MOBILE-FIRST BASE STYLES (320px+)
   ======================================== */

/* Base responsive container */
.container {
  width: 100%;
  max-width: 100%;
  padding: 0 1rem;
  margin: 0 auto;
}
```


### src\css\responsive.css
```css
al scroll */
body {
  overflow-x: hidden;
  max-width: 100vw;
}
```


### src\css\responsive.css
```css
ax-width: 100%;
}

/* Responsive images - Requirements: 4.7, 8.2, 8.4, 8.5 */
img {
  max-width: 100%;
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}
```


### src\css\responsive.css
```css
ages - maintain aspect ratio */
.hero-image img,
.hero-section img {
  max-width: 100%;
  width: 100%;
  height: auto;
  object-fit: contain;
}
```


### src\css\responsive.css
```css
ails - maintain aspect ratio */
.card-thumbnail-container img,
.course-image-container img,
.course-image,
.course-card img {
  max-width: 100%;
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 16 / 9;
}
```


### src\css\responsive.css
```css
ages */
.logo-img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}
```


### src\css\responsive.css
```css
aphy - Mobile base */
body {
  font-size: 14px;
  line-height: 1.6;
}
```


### src\css\responsive.css
```css
amp(1.75rem, 5vw, 2.5rem);
  line-height: 1.2;
  margin-bottom: 1rem;
}

h2 {
  font-size: clamp(1.5rem, 4vw, 2rem);
  line-height: 1.3;
  margin-bottom: 0.875rem;
}
```


### src\css\responsive.css
```css
amp(1.25rem, 3vw, 1.5rem);
  line-height: 1.4;
  margin-bottom: 0.75rem;
}

h4 {
  font-size: clamp(1.125rem, 2.5vw, 1.25rem);
  line-height: 1.4;
  margin-bottom: 0.625rem;
}
```


### src\css\responsive.css
```css
argin-bottom: 1rem;
  max-width: 65ch;
}

/* Responsive spacing */
.section {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
}
```


### src\css\responsive.css
```css
avigation */
.nav-menu {
  display: none;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 10, 20, 0.98);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  flex-direction: column;
  padding: 2rem 1rem;
  overflow-y: auto;
  z-index: 9998;
  -webkit-transform: translateX(-100%);
  -moz-transform: translateX(-100%);
  -ms-transform: translateX(-100%);
  transform: translateX(-100%);
  -webkit-transition: transform 0.3s ease;
  -moz-transition: transform 0.3s ease;
  transition: transform 0.3s ease;
}
```


### src\css\responsive.css
```css
ay: flex;
  -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
}

.nav-item {
  width: 100%;
  margin: 8px 0; /* Minimum 8px spacing between items */
}
```


### src\css\responsive.css
```css
av-link {
  display: flex;
  align-items: center;
  padding: 0.75rem 1.25rem;
  min-height: 44px; /* Minimum touch target height */
  min-width: 44px; /* Minimum touch target width */
  font-size: 1.125rem;
  -webkit-transition: background-color 0.2s ease, opacity 0.2s ease;
  -moz-transition: background-color 0.2s ease, opacity 0.2s ease;
  transition: background-color 0.2s ease, opacity 0.2s ease;
}
```


### src\css\responsive.css
```css
ackground-color: rgba(168, 85, 247, 0.2);
  opacity: 0.8;
}

/* Mobile menu button */
.mobile-menu-btn {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 44px;
  height: 44px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 10000;
  position: relative;
}
```


### src\css\responsive.css
```css
an {
  width: 24px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  transition: all 0.3s ease;
  -webkit-transform-origin: center;
  -moz-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;
}
```


### src\css\responsive.css
```css
ansform: translateY(-7px) rotate(-45deg);
  -moz-transform: translateY(-7px) rotate(-45deg);
  -ms-transform: translateY(-7px) rotate(-45deg);
  transform: translateY(-7px) rotate(-45deg);
}

/* ========================================
   TOUCH TARGET OPTIMIZATION (44x44px minimum)
   Requirements: 5.1, 5.2, 5.3, 5.4, 5.5
   ======================================== */

/* All buttons - minimum 44x44px touch targets */
button,
input[type="submit"],
input[type="button"],
input[type="reset"],
.btn,
.btn-primary,
.btn-secondary,
.btn-tertiary,
.cta-button,
.card-button,
.plan-button,
.submit-button,
.tab-button,
.view-more-button,
.mobile-menu-btn,
.carousel-arrow,
.certificate-arrow,
.auth-submit-btn,
.auth-modal-close,
.auth-password-toggle,
.feedback-close {
  min-height: 44px;
  min-width: 44px;
  padding: 0.75rem 1.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
}
```


### src\css\responsive.css
```css
All links - minimum 44x44px touch targets */
a,
.nav-link,
.dropdown-item,
.footer-link,
.social-link {
  min-height: 44px;
  min-width: 44px;
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
}
```


### src\css\responsive.css
```css
acity: 0.7;
  -webkit-transform: scale(0.9);
  -moz-transform: scale(0.9);
  -ms-transform: scale(0.9);
  transform: scale(0.9);
}

/* ========================================
   MOBILE FORM OPTIMIZATION
   Requirements: 9.1, 9.2, 9.3, 9.4, 9.5
   ======================================== */

/* Form inputs - minimum 44px height (Requirement 5.4, 9.2) */
input,
textarea,
select,
input[type="text"],
input[type="email"],
input[type="tel"],
input[type="number"],
input[type="password"],
input[type="search"],
input[type="url"],
input[type="date"] {
  min-height: 44px;
  font-size: 16px; /* Prevents zoom on iOS - Requirement 9.2 */
  padding: 0.75rem 1rem;
  width: 100%;
  max-width: 100%;
  border-radius: 0.5rem;
  -webkit-border-radius: 0.5rem; /* Safari */
  -moz-border-radius: 0.5rem; /* Firefox */
  transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease; /* Safari */
  -moz-transition: all 0.2s ease; /* Firefox */
  -webkit-appearance: none; /* Remove default iOS styling */
  -moz-appearance: none;
  appearance: none;
}
```


### src\css\responsive.css
```css
area specific styles */
textarea {
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  line-height: 1.5;
}
```


### src\css\responsive.css
```css
ative mobile select controls - Requirement 9.5 */
select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23CBD5E1' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 12px;
  padding-right: 2.5rem;
  cursor: pointer;
}
```


### src\css\responsive.css
```css
argin-bottom: 1rem;
  position: relative;
}

/* Labels positioned above inputs - Requirement 9.4 */
label {
  display: block;
  margin-bottom: 8px;
  min-height: 24px;
  font-weight: 500;
  color: var(--text-primary);
  font-size: 1rem;
}
```


### src\css\responsive.css
```css
a(255, 107, 107, 0.8);
  font-weight: bold;
}

/* Validation message styles - Requirement 9.3 */
.validation-message {
  display: none;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  line-height: 1.4;
}
```


### src\css\responsive.css
```css
ar(--text-primary);
  -webkit-box-shadow: 0 0 0px 1000px rgba(16, 16, 28, 0.8) inset;
  -webkit-transition: background-color 5000s ease-in-out 0s;
  -moz-transition: background-color 5000s ease-in-out 0s;
  transition: background-color 5000s ease-in-out 0s;
}

/* Form submit button spacing */
form button[type="submit"],
form input[type="submit"] {
  margin-top: 0.5rem;
  width: 100%;
}
```


### src\css\responsive.css
```css
and radio button styling for mobile */
input[type="checkbox"],
input[type="radio"] {
  min-width: 20px;
  min-height: 20px;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  cursor: pointer;
}
```


### src\css\responsive.css
```css
adio labels */
label.checkbox-label,
label.radio-label {
  display: flex;
  align-items: center;
  min-height: 44px;
  cursor: pointer;
  padding: 0.5rem 0;
}
```


### src\css\responsive.css
```css
appearance: textfield;
}

/* Date input styling */
input[type="date"]::-webkit-calendar-picker-indicator {
  cursor: pointer;
  filter: invert(0.8);
  padding: 0.25rem;
}
```


### src\css\responsive.css
```css
arch input clear button */
input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  appearance: none;
  height: 20px;
  width: 20px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23CBD5E1'%3E%3Cpath fill-rule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z' clip-rule='evenodd'/%3E%3C/svg%3E");
  background-size: 20px 20px;
  cursor: pointer;
}
```


### src\css\responsive.css
```css
age styles - Requirement 9.3 */
.form-message {
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  line-height: 1.5;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
```


### src\css\responsive.css
```css
ackground: rgba(203, 213, 225, 0.1);
  border: 1px solid rgba(203, 213, 225, 0.3);
}

.form-message::before {
  content: '';
  display: inline-block;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}
```


### src\css\responsive.css
```css
atures-grid,
.courses-grid,
.curriculum-grid,
.testimonial-grid,
.values-grid {
  display: grid;
  grid-template-columns: 1fr; /* Single column on mobile */
  gap: 1.5rem;
  width: 100%;
  margin: 0 auto;
}
```


### src\css\responsive.css
```css
aphics-grid {
  display: grid;
  grid-template-columns: 1fr; /* Single column on mobile */
  gap: 1.5rem;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
}
```


### src\css\responsive.css
```css
aphic cards mobile optimization */
.demographic-card-mobile {
  width: 100%;
  min-width: unset;
  padding: 1.5rem;
  margin-bottom: 1rem;
}
```


### src\css\responsive.css
```css
ation - Requirements: 4.2, 4.3 */
.hero-section {
  flex-direction: column; /* Stack vertically on mobile */
  text-align: center; /* Center-align content on mobile */
  padding: 2rem 1rem; /* Adjust padding for mobile */
  gap: 2rem;
  align-items: center;
  justify-content: center;
}
```


### src\css\responsive.css
```css
age {
  width: 100%;
  flex: none;
  max-width: 100%;
}
```


### src\css\responsive.css
```css
age second on mobile */
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image svg {
  max-width: 280px;
  width: 100%;
  height: auto;
  margin: 0 auto;
}
```


### src\css\responsive.css
```css
age sizing - Requirements: 4.7, 8.4, 8.5 */
.hero-image img {
  max-width: 280px;
  width: 100%;
  height: auto;
  margin: 0 auto;
  object-fit: contain;
}
```


### src\css\responsive.css
```css
ard-thumbnail-container,
.course-image-container {
  max-width: 100%;
  overflow: hidden;
}
```


### src\css\responsive.css
```css
ard-thumbnail-container img,
.course-image-container img {
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
}
```


### src\css\responsive.css
```css
ards responsive */
.course-card,
.feature-item,
.demographic-card,
.content-card {
  padding: 1.5rem;
  margin-bottom: 1rem;
}
```


### src\css\responsive.css
```css
acked layout */
.dropdown-content {
  position: static;
  display: none;
  background: rgba(20, 20, 35, 0.95);
  border: none;
  box-shadow: none;
  padding: 0.5rem 0;
  margin-top: 8px; /* Minimum 8px spacing */
  border-left: 3px solid rgba(168, 85, 247, 0.5);
  margin-left: 1rem;
  border-radius: 4px;
}
```


### src\css\responsive.css
```css
acity: 1;
    -moz-transform: translateY(0);
  }
}

.dropdown-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 1.25rem;
  min-height: 44px; /* Minimum touch target height */
  min-width: 44px; /* Minimum touch target width */
  margin: 4px 0; /* Spacing between dropdown items */
  transition: background-color 0.2s ease, opacity 0.2s ease, transform 0.1s ease;
  border-radius: 4px;
  position: relative;
}
```


### src\css\responsive.css
```css
ansform: rotate(180deg);
  }
}

/* Tables responsive */
table {
  width: 100%;
  display: block;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
```


### src\css\responsive.css
```css
A SMALL MOBILE (320px - 359px)
   Touch target optimization for smallest devices
   ======================================== */

@media (max-width: 359px) {
  /* Ensure buttons don't overflow on very small screens */
  .cta-button,
  .card-button,
  .plan-button,
  .submit-button {
    width: 100%;
    max-width: 100%;
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
```


### src\css\responsive.css
```css
ack buttons vertically with proper spacing */
  .card-button-container,
  .plan-button-container {
    width: 100%;
  }
```


### src\css\responsive.css
```css
ard-button,
  .plan-button {
    width: 100%;
    margin-bottom: 8px;
  }
```


### src\css\responsive.css
```css
ab buttons fit on small screens */
  .tab-button {
    padding: 0.625rem 0.75rem;
    font-size: 0.85rem;
    min-width: auto;
    flex: 1;
  }
```


### src\css\responsive.css
```css
acing on very small screens */
  .features-grid,
  .courses-grid,
  .curriculum-grid,
  .testimonial-grid,
  .values-grid,
  .inclusivity-demographics-grid {
    gap: 1rem;
    padding: 0 0.5rem;
  }
```


### src\css\responsive.css
```css
ation for very small screens */
  .hero-section {
    padding: 1.5rem 0.75rem;
    gap: 1.5rem;
  }
```


### src\css\responsive.css
```css
age svg,
  .hero-image img {
    max-width: 240px;
  }
```


### src\css\responsive.css
```css
ALL MOBILE (360px+)
   ======================================== */

@media (min-width: 360px) {
  .container {
    padding: 0 1.25rem;
  }
```


### src\css\responsive.css
```css
argin-left: 10px;
  }
}

/* ========================================
   LARGE MOBILE (480px+)
   ======================================== */

@media (min-width: 480px) {
  .container {
    padding: 0 1.5rem;
  }
```


### src\css\responsive.css
```css
amp(2rem, 5vw, 2.75rem);
  }
  
  .section {
    padding: 3rem 1.5rem;
  }
```


### src\css\responsive.css
```css
arger mobile */
  .hero-section {
    padding: 2.5rem 1.5rem;
    gap: 2.5rem;
  }
```


### src\css\responsive.css
```css
age svg {
    max-width: 350px;
  }
```


### src\css\responsive.css
```css
age img {
    max-width: 350px;
  }
```


### src\css\responsive.css
```css
ard-thumbnail-container img,
  .course-image-container img {
    max-height: 220px;
  }
```


### src\css\responsive.css
```css
ate-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }
  
  .course-card,
  .feature-item {
    padding: 2rem;
  }
```


### src\css\responsive.css
```css
ABLET PORTRAIT (768px+)
   ======================================== */

@media (min-width: 768px) {
  .container {
    max-width: 720px;
    padding: 0 2rem;
  }
```


### src\css\responsive.css
```css
ay: none;
  }
  
  .nav-menu {
    display: flex;
    position: static;
    flex-direction: row;
    background: transparent;
    padding: 0;
    transform: none;
    overflow: visible;
  }
```


### src\css\responsive.css
```css
av-item {
    width: auto;
    margin: 0 0.25rem;
  }
```


### src\css\responsive.css
```css
av-link {
    padding: 0.625rem 1.25rem;
    font-size: 1rem;
  }
```


### src\css\responsive.css
```css
acity: 1;
    visibility: visible;
    transform: translateY(0);
    display: block;
  }
  
  .dropdown-item {
    padding: 0.75rem 1.25rem;
  }
```


### src\css\responsive.css
```css
ablet */
  .hero-section {
    flex-direction: row;
    text-align: left;
    padding: 3rem 2rem;
    gap: 3rem;
    align-items: center;
  }
```


### src\css\responsive.css
```css
age {
    width: 50%;
    flex: 1;
  }
```


### src\css\responsive.css
```css
age svg {
    max-width: 400px;
  }
```


### src\css\responsive.css
```css
age img {
    max-width: 400px;
  }
```


### src\css\responsive.css
```css
ard-thumbnail-container img,
  .course-image-container img {
    max-height: 240px;
  }
```


### src\css\responsive.css
```css
ate-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  /* Inclusivity demographics grid - 2 columns on tablet */
  .inclusivity-demographics-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    padding: 0 2rem;
  }
```


### src\css\responsive.css
```css
amp(2rem, 4vw, 2.75rem);
  }
}

/* ========================================
   TABLET LANDSCAPE / SMALL DESKTOP (1024px+)
   ======================================== */

@media (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
```


### src\css\responsive.css
```css
ate-columns: repeat(4, 1fr);
    gap: 2.5rem;
  }
  
  .section {
    padding: 5rem 2rem;
  }
```


### src\css\responsive.css
```css
adding: 4rem 2rem;
  }
  
  .hero-image svg {
    max-width: 450px;
  }
```


### src\css\responsive.css
```css
age img {
    max-width: 450px;
  }
```


### src\css\responsive.css
```css
a (min-width: 1280px) {
  .container {
    max-width: 1200px;
  }
```


### src\css\responsive.css
```css
adding: 6rem 3rem;
  }
  
  .hero-section {
    padding: 5rem 3rem;
  }
```


### src\css\responsive.css
```css
amp(2.5rem, 4vw, 3rem);
  }
}

/* ========================================
   LARGE DESKTOP (1440px+)
   ======================================== */

@media (min-width: 1440px) {
  .container {
    max-width: 1400px;
  }
```


### src\css\responsive.css
```css
age svg {
    max-width: 500px;
  }
```


### src\css\responsive.css
```css
age img {
    max-width: 500px;
  }
```


### src\css\responsive.css
```css
ATIONS
   Requirements: 5.1, 5.2, 5.3, 5.4, 5.5
   ======================================== */

@media (hover: none) and (pointer: coarse) {
  /* Ensure all interactive elements are easily tappable on touch devices */
  button,
  a,
  input[type="submit"],
  input[type="button"],
  .btn,
  .cta-button,
  .card-button,
  .nav-link {
    /* Increase touch target size on touch devices */
    min-height: 48px;
    min-width: 48px;
  }
```


### src\css\responsive.css
```css
argin-left: 10px;
  }
  
  /* Ensure form inputs are touch-friendly */
  input,
  textarea,
  select {
    min-height: 48px;
    font-size: 16px;
  }
```


### src\css\responsive.css
```css
ak-inside: avoid;
    page-break-inside: avoid;
  }
}

/* ========================================
   ADDITIONAL TOUCH TARGET OPTIMIZATIONS
   ======================================== */

/* Ensure social media links have proper touch targets */
.social-links a,
.social-link,
.whatsapp-sticky-button {
  min-height: 44px;
  min-width: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
}
```


### src\css\responsive.css
```css
argin-bottom: 8px;
}

.footer-links a {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 0;
}
```


### src\css\responsive.css
```css
an selection buttons */
.plan-button {
  width: 100%;
  min-height: 44px;
  padding: 0.875rem 1.5rem;
  margin-top: 8px;
}
```


### src\css\responsive.css
```css
ay: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tab-button {
  margin: 4px;
  min-height: 44px;
}
```


### src\css\responsive.css
```css
arousel controls */
.carousel-arrow,
.certificate-arrow {
  min-height: 44px;
  min-width: 44px;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
```


### src\css\responsive.css
```css
al close buttons */
.auth-modal-close,
.feedback-close {
  min-height: 44px;
  min-width: 44px;
  padding: 0.75rem;
}
```


### src\css\responsive.css
```css
avigation */
.login-btn {
  min-height: 44px;
  min-width: 44px;
  padding: 0.625rem 1.25rem;
}
```


### src\css\responsive.css
```css
ainer {
  margin-top: 1rem;
  padding-top: 8px;
}
```


### src\css\responsive.css
```css
adding: 0.875rem 2rem;
}

/* Card buttons container spacing */
.card-button-container {
  margin-top: 1rem;
  padding-top: 8px;
}
```


### src\css\responsive.css
```css
ay: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.button-group > * {
  min-height: 44px;
  min-width: 44px;
}
```


### src\css\responsive.css
```css
assword toggle button */
.auth-password-toggle {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  min-height: 44px;
  min-width: 44px;
  padding: 0.5rem;
}
```


### src\css\responsive.css
```css
a(168, 85, 247, 0.8);
  outline-offset: 2px;
  border-radius: 4px;
}

/* Skip to main content link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: rgba(168, 85, 247, 0.95);
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 0 0 4px 0;
  z-index: 10001;
  transition: top 0.3s ease;
}
```


### src\css\responsive.css
```css
ader only content */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```


### src\css\responsive.css
```css
ay: none;
  }
}

/* Responsive spacing utilities */
.p-mobile-sm {
  padding: 1rem;
}
```


### src\css\responsive.css
```css
adding: 1.5rem;
}

.p-mobile-lg {
  padding: 2rem;
}
```


### src\css\responsive.css
```css
a (min-width: 768px) {
  .p-mobile-sm {
    padding: 1.5rem;
  }
```


### src\css\responsive.css
```css
adding: 2rem;
  }
  
  .p-mobile-lg {
    padding: 3rem;
  }
```


### src\css\responsive.css
```css
A SMALL MOBILE (320px and below)
   Fix horizontal scroll issues
   ======================================== */

@media (max-width: 320px) {
  /* Ensure no element causes horizontal scroll on iPhone SE */
  .search-box {
    min-width: 280px;
    max-width: 100%;
  }
```


### src\css\responsive.css
```css
atures-grid > * {
    min-width: 280px;
    max-width: 100%;
  }
```


### src\css\responsive.css
```css
atures-grid > *,
  .inclusivity-chart > * {
    min-width: 280px;
    max-width: 100%;
  }
```


### src\css\responsive.css
```css
ainers don't exceed viewport */
  .container {
    max-width: 100%;
    padding: 0 0.75rem;
  }
```


### src\css\responsive.css
```css
ab button min-width for very small screens */
  .tab-button {
    min-width: 100px;
    padding: 0.75rem 1rem;
    font-size: 0.85rem;
  }
```


### src\css\responsive.css
```css
ards fit */
  .course-card {
    min-width: 280px;
    max-width: 100%;
  }
```


### src\css\responsive.css
```css
ant;
    height: 32px !important;
    max-width: 32px !important;
    max-height: 32px !important;
    min-width: 32px;
    min-height: 32px;
  }
}  /* Fi
x empowerment circle for very small screens */
  .empowerment-circle {
    width: 280px;
    height: 280px;
    max-width: 90vw;
    max-height: 90vw;
  }
```


### src\css\responsive.css
```css
-btn {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 44px;
  height: 44px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 10000;
  position: relative;
}
```


### src\css\responsive.css
```css
-btn span {
  width: 24px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  transition: all 0.3s ease;
  -webkit-transform-origin: center;
  -moz-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;
}
```


### src\css\responsive.css
```css
.btn,
.btn-primary,
.btn-secondary,
.btn-tertiary,
.cta-button,
.card-button,
.plan-button,
.submit-button,
.tab-button,
.view-more-button,
.mobile-menu-btn,
.carousel-arrow,
.certificate-arrow,
.auth-submit-btn,
.auth-modal-close,
.auth-password-toggle,
.feedback-close {
  min-height: 44px;
  min-width: 44px;
  padding: 0.75rem 1.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
}
```


### src\css\responsive.css
```css
.btn,
  .cta-button,
  .card-button,
  .nav-link {
    /* Increase touch target size on touch devices */
    min-height: 48px;
    min-width: 48px;
  }
```


### src\css\responsive.css
```css
-btn {
  min-height: 44px;
  min-width: 44px;
  padding: 0.625rem 1.25rem;
}
```


### src\css\responsive.css
```css
input[type="submit"],
input[type="button"],
input[type="reset"],
.btn,
.btn-primary,
.btn-secondary,
.btn-tertiary,
.cta-button,
.card-button,
.plan-button,
.submit-button,
.tab-button,
.view-more-button,
.mobile-menu-btn,
.carousel-arrow,
.certificate-arrow,
.auth-submit-btn,
.auth-modal-close,
.auth-password-toggle,
.feedback-close {
  min-height: 44px;
  min-width: 44px;
  padding: 0.75rem 1.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
}
```


### src\css\responsive.css
```css
inputs - minimum 44px height (Requirement 5.4, 9.2) */
input,
textarea,
select,
input[type="text"],
input[type="email"],
input[type="tel"],
input[type="number"],
input[type="password"],
input[type="search"],
input[type="url"],
input[type="date"] {
  min-height: 44px;
  font-size: 16px; /* Prevents zoom on iOS - Requirement 9.2 */
  padding: 0.75rem 1rem;
  width: 100%;
  max-width: 100%;
  border-radius: 0.5rem;
  -webkit-border-radius: 0.5rem; /* Safari */
  -moz-border-radius: 0.5rem; /* Firefox */
  transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease; /* Safari */
  -moz-transition: all 0.2s ease; /* Firefox */
  -webkit-appearance: none; /* Remove default iOS styling */
  -moz-appearance: none;
  appearance: none;
}
```


### src\css\responsive.css
```css
inputs - Requirement 9.4 */
label {
  display: block;
  margin-bottom: 8px;
  min-height: 24px;
  font-weight: 500;
  color: var(--text-primary);
  font-size: 1rem;
}
```


### src\css\responsive.css
```css
input[type="submit"] {
  margin-top: 0.5rem;
  width: 100%;
}
```


### src\css\responsive.css
```css
input[type="checkbox"],
input[type="radio"] {
  min-width: 20px;
  min-height: 20px;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  cursor: pointer;
}
```


### src\css\responsive.css
```css
input styling */
input[type="date"]::-webkit-calendar-picker-indicator {
  cursor: pointer;
  filter: invert(0.8);
  padding: 0.25rem;
}
```


### src\css\responsive.css
```css
input clear button */
input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  appearance: none;
  height: 20px;
  width: 20px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23CBD5E1'%3E%3Cpath fill-rule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z' clip-rule='evenodd'/%3E%3C/svg%3E");
  background-size: 20px 20px;
  cursor: pointer;
}
```


### src\css\responsive.css
```css
input[type="submit"],
  input[type="button"],
  .btn,
  .cta-button,
  .card-button,
  .nav-link {
    /* Increase touch target size on touch devices */
    min-height: 48px;
    min-width: 48px;
  }
```


### src\css\responsive.css
```css
inputs are touch-friendly */
  input,
  textarea,
  select {
    min-height: 48px;
    font-size: 16px;
  }
```


### src\css\responsive.css
```css
Responsive CSS for Modern Age Coders
 * Mobile-First Responsive Design
 */

/* ========================================
   MOBILE-FIRST BASE STYLES (320px+)
   ======================================== */

/* Base responsive container */
.container {
  width: 100%;
  max-width: 100%;
  padding: 0 1rem;
  margin: 0 auto;
}
```


### src\css\responsive.css
```css
revent horizontal scroll */
body {
  overflow-x: hidden;
  max-width: 100vw;
}
```


### src\css\responsive.css
```css
th: 100%;
}

/* Responsive images - Requirements: 4.7, 8.2, 8.4, 8.5 */
img {
  max-width: 100%;
  width: 100%;
  height: auto;
  display: block;
  object-fit: contain;
}
```


### src\css\responsive.css
```css
ero images - maintain aspect ratio */
.hero-image img,
.hero-section img {
  max-width: 100%;
  width: 100%;
  height: auto;
  object-fit: contain;
}
```


### src\css\responsive.css
```css
ourse thumbnails - maintain aspect ratio */
.card-thumbnail-container img,
.course-image-container img,
.course-image,
.course-card img {
  max-width: 100%;
  width: 100%;
  height: auto;
  object-fit: cover;
  aspect-ratio: 16 / 9;
}
```


### src\css\responsive.css
```css
Logo images */
.logo-img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}
```


### src\css\responsive.css
```css
Responsive typography - Mobile base */
body {
  font-size: 14px;
  line-height: 1.6;
}
```


### src\css\responsive.css
```css
ont-size: clamp(1.75rem, 5vw, 2.5rem);
  line-height: 1.2;
  margin-bottom: 1rem;
}

h2 {
  font-size: clamp(1.5rem, 4vw, 2rem);
  line-height: 1.3;
  margin-bottom: 0.875rem;
}
```


### src\css\responsive.css
```css
ont-size: clamp(1.25rem, 3vw, 1.5rem);
  line-height: 1.4;
  margin-bottom: 0.75rem;
}

h4 {
  font-size: clamp(1.125rem, 2.5vw, 1.25rem);
  line-height: 1.4;
  margin-bottom: 0.625rem;
}
```


### src\css\responsive.css
```css
ont-size: 1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  max-width: 65ch;
}

/* Responsive spacing */
.section {
  padding: 2rem 1rem;
  margin-bottom: 2rem;
}
```


### src\css\responsive.css
```css
obile navigation */
.nav-menu {
  display: none;
  position: fixed;
  top: 70px;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 10, 20, 0.98);
  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  flex-direction: column;
  padding: 2rem 1rem;
  overflow-y: auto;
  z-index: 9998;
  -webkit-transform: translateX(-100%);
  -moz-transform: translateX(-100%);
  -ms-transform: translateX(-100%);
  transform: translateX(-100%);
  -webkit-transition: transform 0.3s ease;
  -moz-transition: transform 0.3s ease;
  transition: transform 0.3s ease;
}
```


### src\css\responsive.css
```css
lay: flex;
  -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
}

.nav-item {
  width: 100%;
  margin: 8px 0; /* Minimum 8px spacing between items */
}
```


### src\css\responsive.css
```css
nav-link {
  display: flex;
  align-items: center;
  padding: 0.75rem 1.25rem;
  min-height: 44px; /* Minimum touch target height */
  min-width: 44px; /* Minimum touch target width */
  font-size: 1.125rem;
  -webkit-transition: background-color 0.2s ease, opacity 0.2s ease;
  -moz-transition: background-color 0.2s ease, opacity 0.2s ease;
  transition: background-color 0.2s ease, opacity 0.2s ease;
}
```


### src\css\responsive.css
```css
background-color: rgba(168, 85, 247, 0.2);
  opacity: 0.8;
}

/* Mobile menu button */
.mobile-menu-btn {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 44px;
  height: 44px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 10px;
  z-index: 10000;
  position: relative;
}
```


### src\css\responsive.css
```css
obile-menu-btn span {
  width: 24px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  transition: all 0.3s ease;
  -webkit-transform-origin: center;
  -moz-transform-origin: center;
  -ms-transform-origin: center;
  transform-origin: center;
}
```


### src\css\responsive.css
```css
ebkit-transform: translateY(-7px) rotate(-45deg);
  -moz-transform: translateY(-7px) rotate(-45deg);
  -ms-transform: translateY(-7px) rotate(-45deg);
  transform: translateY(-7px) rotate(-45deg);
}

/* ========================================
   TOUCH TARGET OPTIMIZATION (44x44px minimum)
   Requirements: 5.1, 5.2, 5.3, 5.4, 5.5
   ======================================== */

/* All buttons - minimum 44x44px touch targets */
button,
input[type="submit"],
input[type="button"],
input[type="reset"],
.btn,
.btn-primary,
.btn-secondary,
.btn-tertiary,
.cta-button,
.card-button,
.plan-button,
.submit-button,
.tab-button,
.view-more-button,
.mobile-menu-btn,
.carousel-arrow,
.certificate-arrow,
.auth-submit-btn,
.auth-modal-close,
.auth-password-toggle,
.feedback-close {
  min-height: 44px;
  min-width: 44px;
  padding: 0.75rem 1.25rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
}
```


### src\css\responsive.css
```css
ll links - minimum 44x44px touch targets */
a,
.nav-link,
.dropdown-item,
.footer-link,
.social-link {
  min-height: 44px;
  min-width: 44px;
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
}
```


### src\css\responsive.css
```css
opacity: 0.7;
  -webkit-transform: scale(0.9);
  -moz-transform: scale(0.9);
  -ms-transform: scale(0.9);
  transform: scale(0.9);
}

/* ========================================
   MOBILE FORM OPTIMIZATION
   Requirements: 9.1, 9.2, 9.3, 9.4, 9.5
   ======================================== */

/* Form inputs - minimum 44px height (Requirement 5.4, 9.2) */
input,
textarea,
select,
input[type="text"],
input[type="email"],
input[type="tel"],
input[type="number"],
input[type="password"],
input[type="search"],
input[type="url"],
input[type="date"] {
  min-height: 44px;
  font-size: 16px; /* Prevents zoom on iOS - Requirement 9.2 */
  padding: 0.75rem 1rem;
  width: 100%;
  max-width: 100%;
  border-radius: 0.5rem;
  -webkit-border-radius: 0.5rem; /* Safari */
  -moz-border-radius: 0.5rem; /* Firefox */
  transition: all 0.2s ease;
  -webkit-transition: all 0.2s ease; /* Safari */
  -moz-transition: all 0.2s ease; /* Firefox */
  -webkit-appearance: none; /* Remove default iOS styling */
  -moz-appearance: none;
  appearance: none;
}
```


### src\css\responsive.css
```css
Textarea specific styles */
textarea {
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  line-height: 1.5;
}
```


### src\css\responsive.css
```css
Native mobile select controls - Requirement 9.5 */
select {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23CBD5E1' d='M6 9L1 4h10z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 12px;
  padding-right: 2.5rem;
  cursor: pointer;
}
```


### src\css\responsive.css
```css
rgin-bottom: 1rem;
  position: relative;
}

/* Labels positioned above inputs - Requirement 9.4 */
label {
  display: block;
  margin-bottom: 8px;
  min-height: 24px;
  font-weight: 500;
  color: var(--text-primary);
  font-size: 1rem;
}
```


### src\css\responsive.css
```css
ontent: ' *';
  color: rgba(255, 107, 107, 0.8);
  font-weight: bold;
}

/* Validation message styles - Requirement 9.3 */
.validation-message {
  display: none;
  font-size: 0.875rem;
  margin-top: 0.5rem;
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  line-height: 1.4;
}
```


### src\css\responsive.css
```css
ebkit-text-fill-color: var(--text-primary);
  -webkit-box-shadow: 0 0 0px 1000px rgba(16, 16, 28, 0.8) inset;
  -webkit-transition: background-color 5000s ease-in-out 0s;
  -moz-transition: background-color 5000s ease-in-out 0s;
  transition: background-color 5000s ease-in-out 0s;
}

/* Form submit button spacing */
form button[type="submit"],
form input[type="submit"] {
  margin-top: 0.5rem;
  width: 100%;
}
```


### src\css\responsive.css
```css
eckbox and radio button styling for mobile */
input[type="checkbox"],
input[type="radio"] {
  min-width: 20px;
  min-height: 20px;
  width: 20px;
  height: 20px;
  margin-right: 8px;
  cursor: pointer;
}
```


### src\css\responsive.css
```css
eckbox/radio labels */
label.checkbox-label,
label.radio-label {
  display: flex;
  align-items: center;
  min-height: 44px;
  cursor: pointer;
  padding: 0.5rem 0;
}
```


### src\css\responsive.css
```css
oz-appearance: textfield;
}

/* Date input styling */
input[type="date"]::-webkit-calendar-picker-indicator {
  cursor: pointer;
  filter: invert(0.8);
  padding: 0.25rem;
}
```


### src\css\responsive.css
```css
earch input clear button */
input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
  appearance: none;
  height: 20px;
  width: 20px;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='%23CBD5E1'%3E%3Cpath fill-rule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z' clip-rule='evenodd'/%3E%3C/svg%3E");
  background-size: 20px 20px;
  cursor: pointer;
}
```


### src\css\responsive.css
```css
orm-level message styles - Requirement 9.3 */
.form-message {
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  line-height: 1.5;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}
```


### src\css\responsive.css
```css
olor: #CBD5E1;
  background: rgba(203, 213, 225, 0.1);
  border: 1px solid rgba(203, 213, 225, 0.3);
}

.form-message::before {
  content: '';
  display: inline-block;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}
```


### src\css\responsive.css
```css
ontent: 'ℹ';
  font-size: 1.25rem;
}

/* Responsive grids - Mobile First (Requirements: 4.2, 4.3) */
.features-grid,
.courses-grid,
.curriculum-grid,
.testimonial-grid,
.values-grid {
  display: grid;
  grid-template-columns: 1fr; /* Single column on mobile */
  gap: 1.5rem;
  width: 100%;
  margin: 0 auto;
}
```


### src\css\responsive.css
```css
nclusivity section grid - convert inline flex to responsive grid */
.inclusivity-demographics-grid {
  display: grid;
  grid-template-columns: 1fr; /* Single column on mobile */
  gap: 1.5rem;
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 0 1rem;
}
```


### src\css\responsive.css
```css
emographic cards mobile optimization */
.demographic-card-mobile {
  width: 100%;
  min-width: unset;
  padding: 1.5rem;
  margin-bottom: 1rem;
}
```


### src\css\responsive.css
```css
ero section mobile optimization - Requirements: 4.2, 4.3 */
.hero-section {
  flex-direction: column; /* Stack vertically on mobile */
  text-align: center; /* Center-align content on mobile */
  padding: 2rem 1rem; /* Adjust padding for mobile */
  gap: 2rem;
  align-items: center;
  justify-content: center;
}
```


### src\css\responsive.css
```css
ero-text,
.hero-image {
  width: 100%;
  flex: none;
  max-width: 100%;
}
```


### src\css\responsive.css
```css
order: 2; /* Image second on mobile */
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image svg {
  max-width: 280px;
  width: 100%;
  height: auto;
  margin: 0 auto;
}
```


### src\css\responsive.css
```css
obile image sizing - Requirements: 4.7, 8.4, 8.5 */
.hero-image img {
  max-width: 280px;
  width: 100%;
  height: auto;
  margin: 0 auto;
  object-fit: contain;
}
```


### src\css\responsive.css
```css
rd-thumbnail-container,
.course-image-container {
  max-width: 100%;
  overflow: hidden;
}
```


### src\css\responsive.css
```css
rd-thumbnail-container img,
.course-image-container img {
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
}
```


### src\css\responsive.css
```css
rds responsive */
.course-card,
.feature-item,
.demographic-card,
.content-card {
  padding: 1.5rem;
  margin-bottom: 1rem;
}
```


### src\css\responsive.css
```css
ropdown mobile - stacked layout */
.dropdown-content {
  position: static;
  display: none;
  background: rgba(20, 20, 35, 0.95);
  border: none;
  box-shadow: none;
  padding: 0.5rem 0;
  margin-top: 8px; /* Minimum 8px spacing */
  border-left: 3px solid rgba(168, 85, 247, 0.5);
  margin-left: 1rem;
  border-radius: 4px;
}
```


### src\css\responsive.css
```css
opacity: 1;
    -moz-transform: translateY(0);
  }
}

.dropdown-item {
  display: flex;
  align-items: center;
  padding: 0.75rem 1.25rem;
  min-height: 44px; /* Minimum touch target height */
  min-width: 44px; /* Minimum touch target width */
  margin: 4px 0; /* Spacing between dropdown items */
  transition: background-color 0.2s ease, opacity 0.2s ease, transform 0.1s ease;
  border-radius: 4px;
  position: relative;
}
```


### src\css\responsive.css
```css
transform: rotate(180deg);
  }
}

/* Tables responsive */
table {
  width: 100%;
  display: block;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}
```


### src\css\responsive.css
```css
========================================
   EXTRA SMALL MOBILE (320px - 359px)
   Touch target optimization for smallest devices
   ======================================== */

@media (max-width: 359px) {
  /* Ensure buttons don't overflow on very small screens */
  .cta-button,
  .card-button,
  .plan-button,
  .submit-button {
    width: 100%;
    max-width: 100%;
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
  }
```


### src\css\responsive.css
```css
tack buttons vertically with proper spacing */
  .card-button-container,
  .plan-button-container {
    width: 100%;
  }
```


### src\css\responsive.css
```css
rd-button,
  .plan-button {
    width: 100%;
    margin-bottom: 8px;
  }
```


### src\css\responsive.css
```css
Ensure tab buttons fit on small screens */
  .tab-button {
    padding: 0.625rem 0.75rem;
    font-size: 0.85rem;
    min-width: auto;
    flex: 1;
  }
```


### src\css\responsive.css
```css
Tighter grid spacing on very small screens */
  .features-grid,
  .courses-grid,
  .curriculum-grid,
  .testimonial-grid,
  .values-grid,
  .inclusivity-demographics-grid {
    gap: 1rem;
    padding: 0 0.5rem;
  }
```


### src\css\responsive.css
```css
ero section optimization for very small screens */
  .hero-section {
    padding: 1.5rem 0.75rem;
    gap: 1.5rem;
  }
```


### src\css\responsive.css
```css
ero-image svg,
  .hero-image img {
    max-width: 240px;
  }
```


### src\css\responsive.css
```css
========================================
   SMALL MOBILE (360px+)
   ======================================== */

@media (min-width: 360px) {
  .container {
    padding: 0 1.25rem;
  }
```


### src\css\responsive.css
```css
ont-size: 15px;
  }
  
  .section {
    padding: 2.5rem 1.25rem;
  }
```


### src\css\responsive.css
```css
rgin-left: 10px;
  }
}

/* ========================================
   LARGE MOBILE (480px+)
   ======================================== */

@media (min-width: 480px) {
  .container {
    padding: 0 1.5rem;
  }
```


### src\css\responsive.css
```css
ont-size: clamp(2rem, 5vw, 2.75rem);
  }
  
  .section {
    padding: 3rem 1.5rem;
  }
```


### src\css\responsive.css
```css
ero section improvements for larger mobile */
  .hero-section {
    padding: 2.5rem 1.5rem;
    gap: 2.5rem;
  }
```


### src\css\responsive.css
```css
ero-image svg {
    max-width: 350px;
  }
```


### src\css\responsive.css
```css
ero-image img {
    max-width: 350px;
  }
```


### src\css\responsive.css
```css
rd-thumbnail-container img,
  .course-image-container img {
    max-height: 220px;
  }
```


### src\css\responsive.css
```css
rid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
  }
  
  .course-card,
  .feature-item {
    padding: 2rem;
  }
```


### src\css\responsive.css
```css
========================================
   TABLET PORTRAIT (768px+)
   ======================================== */

@media (min-width: 768px) {
  .container {
    max-width: 720px;
    padding: 0 2rem;
  }
```


### src\css\responsive.css
```css
lay: none;
  }
  
  .nav-menu {
    display: flex;
    position: static;
    flex-direction: row;
    background: transparent;
    padding: 0;
    transform: none;
    overflow: visible;
  }
```


### src\css\responsive.css
```css
nav-item {
    width: auto;
    margin: 0 0.25rem;
  }
```


### src\css\responsive.css
```css
nav-link {
    padding: 0.625rem 1.25rem;
    font-size: 1rem;
  }
```


### src\css\responsive.css
```css
ropdown desktop */
  .dropdown-content {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 220px;
    background: rgba(16, 16, 28, 0.98);
    border: 1px solid rgba(168, 85, 247, 0.3);
    border-radius: 0.875rem;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    padding: 0.5rem 0;
    margin-top: 0.5rem;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s ease;
  }
```


### src\css\responsive.css
```css
opacity: 1;
    visibility: visible;
    transform: translateY(0);
    display: block;
  }
  
  .dropdown-item {
    padding: 0.75rem 1.25rem;
  }
```


### src\css\responsive.css
```css
ero section tablet */
  .hero-section {
    flex-direction: row;
    text-align: left;
    padding: 3rem 2rem;
    gap: 3rem;
    align-items: center;
  }
```


### src\css\responsive.css
```css
ero-text,
  .hero-image {
    width: 50%;
    flex: 1;
  }
```


### src\css\responsive.css
```css
ero-image svg {
    max-width: 400px;
  }
```


### src\css\responsive.css
```css
ero-image img {
    max-width: 400px;
  }
```


### src\css\responsive.css
```css
rd-thumbnail-container img,
  .course-image-container img {
    max-height: 240px;
  }
```


### src\css\responsive.css
```css
rid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  /* Inclusivity demographics grid - 2 columns on tablet */
  .inclusivity-demographics-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    padding: 0 2rem;
  }
```


### src\css\responsive.css
```css
ection {
    padding: 4rem 2rem;
    margin-bottom: 3rem;
  }
```


### src\css\responsive.css
```css
ont-size: clamp(2rem, 4vw, 2.75rem);
  }
}

/* ========================================
   TABLET LANDSCAPE / SMALL DESKTOP (1024px+)
   ======================================== */

@media (min-width: 1024px) {
  .container {
    max-width: 960px;
  }
```


### src\css\responsive.css
```css
rid-template-columns: repeat(4, 1fr);
    gap: 2.5rem;
  }
  
  .section {
    padding: 5rem 2rem;
  }
```


### src\css\responsive.css
```css
ero-section {
    padding: 4rem 2rem;
  }
```


### src\css\responsive.css
```css
ero-image svg {
    max-width: 450px;
  }
```


### src\css\responsive.css
```css
ero-image img {
    max-width: 450px;
  }
```


### src\css\responsive.css
```css
========================================
   DESKTOP (1280px+)
   ======================================== */

@media (min-width: 1280px) {
  .container {
    max-width: 1200px;
  }
```


### src\css\responsive.css
```css
ection {
    padding: 6rem 3rem;
  }
```


### src\css\responsive.css
```css
ero-section {
    padding: 5rem 3rem;
  }
```


### src\css\responsive.css
```css
ont-size: clamp(2.5rem, 4vw, 3rem);
  }
}

/* ========================================
   LARGE DESKTOP (1440px+)
   ======================================== */

@media (min-width: 1440px) {
  .container {
    max-width: 1400px;
  }
```


### src\css\responsive.css
```css
ero-image svg {
    max-width: 500px;
  }
```


### src\css\responsive.css
```css
ero-image img {
    max-width: 500px;
  }
```


### src\css\responsive.css
```css
========================================
   TOUCH DEVICE OPTIMIZATIONS
   Requirements: 5.1, 5.2, 5.3, 5.4, 5.5
   ======================================== */

@media (hover: none) and (pointer: coarse) {
  /* Ensure all interactive elements are easily tappable on touch devices */
  button,
  a,
  input[type="submit"],
  input[type="button"],
  .btn,
  .cta-button,
  .card-button,
  .nav-link {
    /* Increase touch target size on touch devices */
    min-height: 48px;
    min-width: 48px;
  }
```


### src\css\responsive.css
```css
rgin-left: 10px;
  }
  
  /* Ensure form inputs are touch-friendly */
  input,
  textarea,
  select {
    min-height: 48px;
    font-size: 16px;
  }
```


### src\css\responsive.css
```css
break-inside: avoid;
    page-break-inside: avoid;
  }
}

/* ========================================
   ADDITIONAL TOUCH TARGET OPTIMIZATIONS
   ======================================== */

/* Ensure social media links have proper touch targets */
.social-links a,
.social-link,
.whatsapp-sticky-button {
  min-height: 44px;
  min-width: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem;
}
```


### src\css\responsive.css
```css
rgin-bottom: 8px;
}

.footer-links a {
  min-height: 44px;
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 0;
}
```


### src\css\responsive.css
```css
lan selection buttons */
.plan-button {
  width: 100%;
  min-height: 44px;
  padding: 0.875rem 1.5rem;
  margin-top: 8px;
}
```


### src\css\responsive.css
```css
lay: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.tab-button {
  margin: 4px;
  min-height: 44px;
}
```


### src\css\responsive.css
```css
rousel controls */
.carousel-arrow,
.certificate-arrow {
  min-height: 44px;
  min-width: 44px;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
```


### src\css\responsive.css
```css
odal close buttons */
.auth-modal-close,
.feedback-close {
  min-height: 44px;
  min-width: 44px;
  padding: 0.75rem;
}
```


### src\css\responsive.css
```css
Login button in navigation */
.login-btn {
  min-height: 44px;
  min-width: 44px;
  padding: 0.625rem 1.25rem;
}
```


### src\css\responsive.css
```css
ew more buttons */
.view-more-container {
  margin-top: 1rem;
  padding-top: 8px;
}
```


### src\css\responsive.css
```css
ew-more-button {
  min-height: 44px;
  padding: 0.875rem 2rem;
}
```


### src\css\responsive.css
```css
rd buttons container spacing */
.card-button-container {
  margin-top: 1rem;
  padding-top: 8px;
}
```


### src\css\responsive.css
```css
lay: flex;
  gap: 8px;
  flex-wrap: wrap;
}

.button-group > * {
  min-height: 44px;
  min-width: 44px;
}
```


### src\css\responsive.css
```css
ord toggle button */
.auth-password-toggle {
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  min-height: 44px;
  min-width: 44px;
  padding: 0.5rem;
}
```


### src\css\responsive.css
```css
outline: 2px solid rgba(168, 85, 247, 0.8);
  outline-offset: 2px;
  border-radius: 4px;
}

/* Skip to main content link */
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: rgba(168, 85, 247, 0.95);
  color: white;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 0 0 4px 0;
  z-index: 10001;
  transition: top 0.3s ease;
}
```


### src\css\responsive.css
```css
top: 0;
}

/* Screen reader only content */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
```


### src\css\responsive.css
```css
lay: none;
  }
}

/* Responsive spacing utilities */
.p-mobile-sm {
  padding: 1rem;
}
```


### src\css\responsive.css
```css
obile-md {
  padding: 1.5rem;
}
```


### src\css\responsive.css
```css
obile-lg {
  padding: 2rem;
}
```


### src\css\responsive.css
```css
edia (min-width: 768px) {
  .p-mobile-sm {
    padding: 1.5rem;
  }
```


### src\css\responsive.css
```css
obile-md {
    padding: 2rem;
  }
```


### src\css\responsive.css
```css
obile-lg {
    padding: 3rem;
  }
```


### src\css\responsive.css
```css
========================================
   EXTRA SMALL MOBILE (320px and below)
   Fix horizontal scroll issues
   ======================================== */

@media (max-width: 320px) {
  /* Ensure no element causes horizontal scroll on iPhone SE */
  .search-box {
    min-width: 280px;
    max-width: 100%;
  }
```


### src\css\responsive.css
```css
rls-features-grid > * {
    min-width: 280px;
    max-width: 100%;
  }
```


### src\css\responsive.css
```css
eatures-grid > *,
  .inclusivity-chart > * {
    min-width: 280px;
    max-width: 100%;
  }
```


### src\css\responsive.css
```css
Ensure containers don't exceed viewport */
  .container {
    max-width: 100%;
    padding: 0 0.75rem;
  }
```


### src\css\responsive.css
```css
Reduce tab button min-width for very small screens */
  .tab-button {
    min-width: 100px;
    padding: 0.75rem 1rem;
    font-size: 0.85rem;
  }
```


### src\css\responsive.css
```css
Ensure course cards fit */
  .course-card {
    min-width: 280px;
    max-width: 100%;
  }
```


### src\css\responsive.css
```css
Reduce logo size if needed */
  .logo-img {
    width: 32px !important;
    height: 32px !important;
    max-width: 32px !important;
    max-height: 32px !important;
    min-width: 32px;
    min-height: 32px;
  }
```


### src\css\responsive.css
```css
empowerment circle for very small screens */
  .empowerment-circle {
    width: 280px;
    height: 280px;
    max-width: 90vw;
    max-height: 90vw;
  }
```


### src\css\style.css
```css
button {
        min-width: 130px;
        padding: 0.875rem 1.25rem;
        font-size: 0.9rem;
    }
```


### src\css\style.css
```css
button,
    .card-button {
        min-height: 44px;
        min-width: 44px;
    }
```


### src\css\style.css
```css
button,
.card-button.coding {
    background: linear-gradient(135deg, #8A2BE2, #4A00E0);
    color: white;
    padding: var(--spacing-md) var(--spacing-xl);
    border-radius: var(--border-radius-lg);
    text-decoration: none;
    font-weight: 600;
    font-size: var(--body-regular);
    transition: all var(--transition-speed) ease;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 6px 25px var(--primary-glow-color);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm);
    cursor: pointer;
    text-align: center;
    min-height: 44px;
}
```


### src\css\style.css
```css
button.math {
    background: linear-gradient(135deg, #FFD700, #FFA500);
    color: #000;
    padding: var(--spacing-md) var(--spacing-xl);
    border-radius: var(--border-radius-lg);
    text-decoration: none;
    font-weight: 600;
    font-size: var(--body-regular);
    transition: all var(--transition-speed) ease;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 6px 25px var(--math-glow-color);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm);
    cursor: pointer;
    text-align: center;
    min-height: 44px;
}
```


### src\css\style.css
```css
button.ai {
    background: linear-gradient(135deg, #EC4899, #BE185D);
    color: white;
    padding: var(--spacing-md) var(--spacing-xl);
    border-radius: var(--border-radius-lg);
    text-decoration: none;
    font-weight: 600;
    font-size: var(--body-regular);
    transition: all var(--transition-speed) ease;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 6px 25px var(--ai-glow-color);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm);
    cursor: pointer;
    text-align: center;
    min-height: 44px;
}
```


### src\css\style.css
```css
button,
    .card-button,
    .tab-button,
    .sub-tab {
        min-height: 44px;
        min-width: 44px;
        padding: var(--spacing-md) var(--spacing-lg);
    }
```


### src\css\style.css
```css
Button: 10000 (must be clickable)
   - Header/Navbar: 9999
   - Mobile Menu: 9998
   - Page Content: 1 or auto
   - Background: -1 to -3
   ======================================== */

header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    /* Below mobile menu button (10000) */
    width: 100%;
    margin: 0;
    padding: 0;
    background: rgba(10, 10, 20, 0.95);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
}
```


### src\css\style.css
```css
button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: rgba(168, 85, 247, 0.1);
    border: 1px solid rgba(168, 85, 247, 0.3);
    color: #a855f7;
    transition: all 0.3s ease;
    text-decoration: none;
    flex-shrink: 0;
}
```


### src\css\style.css
```css
button svg {
    width: 20px;
    height: 20px;
}
```


### src\css\style.css
```css
button {
    background: linear-gradient(135deg, #8A2BE2, #4A00E0);
    color: white;
    padding: 0.875rem 2rem;
    border-radius: 0.875rem;
    text-decoration: none;
    font-weight: 700;
    font-size: 1rem;
    transition: all var(--transition-speed) ease;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 6px 25px var(--primary-glow-color);
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}
```


### src\css\style.css
```css
button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s ease;
    pointer-events: none;
}
```


### src\css\style.css
```css
BUTTON - Z-INDEX HIERARCHY
   Button must be above navbar (9999) to ensure clickability
   ======================================== */
.mobile-menu-btn {
    display: none;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 10px;
    /* Increased clickable area */
    z-index: 10000;
    /* Above navbar to ensure clickability */
    position: relative;
    /* Create stacking context */
    min-width: 44px;
    /* Meet touch target minimum */
    min-height: 44px;
    /* Meet touch target minimum */
    align-items: center;
    justify-content: center;
}
```


### src\css\style.css
```css
button {
    background: linear-gradient(135deg, var(--girls-empowerment-color), var(--girls-confidence-color));
    color: white;
    padding: var(--spacing-lg) var(--spacing-2xl);
    border-radius: var(--border-radius-lg);
    text-decoration: none;
    font-weight: 700;
    font-size: var(--body-regular);
    transition: all var(--transition-speed) ease;
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-sm);
    box-shadow: 0 10px 30px rgba(236, 72, 153, 0.3);
}
```


### src\css\style.css
```css
button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1.2rem;
    line-height: 1;
    padding: 0;
    margin-left: 0.25rem;
    transition: transform 0.3s ease;
}
```


### src\css\style.css
```css
button-container {
    margin-top: auto;
    padding-top: 0.5rem;
}
```


### src\css\style.css
```css
button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1.875rem;
    border-radius: 0.75rem;
    text-decoration: none;
    font-weight: 600;
    color: #fff;
    transition: all var(--transition-speed) ease;
    background-size: 200% auto;
    position: relative;
    overflow: hidden;
    border: none;
}
```


### src\css\style.css
```css
button {
    display: block;
    width: 100%;
    padding: 1.25rem 2rem;
    border-radius: 0.875rem;
    text-align: center;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.1rem;
    color: white;
    transition: all var(--transition-speed) ease;
    background-size: 200% auto;
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border: 2px solid transparent;
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.3);
}
```


### src\css\style.css
```css
button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
    pointer-events: none;
}
```


### src\css\style.css
```css
button {
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: 0.75rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    background-image: linear-gradient(to right, #8A2BE2 0%, #4A00E0 51%, #8A2BE2 100%);
    background-size: 200% auto;
    transition: all var(--transition-speed) ease;
    position: relative;
    overflow: hidden;
}
```


### src\css\style.css
```css
button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s ease;
}
```


### src\css\style.css
```css
Button */
.feedback-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border: none;
    color: var(--text-secondary);
    font-size: 2rem;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
BUTTON
   ======================================== */

.whatsapp-sticky-button {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    background: #25D366;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
    z-index: 9999;
    transition: all 0.3s ease;
    text-decoration: none;
    animation: float 3s ease-in-out infinite;
}
```


### src\css\style.css
```css
Button */
.whatsapp-sticky-button::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #25D366;
    opacity: 0.7;
    animation: pulse 2s ease-out infinite;
}
```


### src\css\style.css
```css
button {
        bottom: 20px;
        right: 20px;
        width: 56px;
        height: 56px;
    }
```


### src\css\style.css
```css
button 10000, below navbar 9999)
   ======================================== */
@media (max-width: 900px) {
    .nav-menu {
        display: none;
        flex-direction: column;
        position: fixed;
        top: 70px;
        left: 0;
        width: 100%;
        height: calc(100vh - 70px);
        background: rgba(10, 10, 20, 0.98);
        backdrop-filter: blur(30px);
        -webkit-backdrop-filter: blur(30px);
        border: none;
        border-top: 1px solid var(--glass-border);
        padding: 2rem 1.5rem;
        gap: 0.75rem;
        overflow-y: auto;
        z-index: 9998;
        /* Below mobile button and navbar */
    }
```


### src\css\style.css
```css
button {
        width: 100%;
        justify-content: center;
        padding: 1rem;
        font-size: 1.1rem;
    }
```


### src\css\style.css
```css
button {
        padding: 0.625rem 1.25rem;
        font-size: 0.9rem;
    }
```


### src\css\style.css
```css
button {
    background: none;
    border: none;
    padding: 0.75rem 1.5rem;
    color: #94a3b8;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 0.875rem;
    cursor: pointer;
    transition: color 0.4s ease;
    position: relative;
    z-index: 2;
    white-space: nowrap;
}
```


### src\css\style.css
```css
button {
    display: inline-block;
    padding: 0.875rem 2.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    background: var(--glass-bg-light);
    border: 1px solid var(--glass-border);
    border-radius: 50px;

    box-shadow: var(--glass-shadow);
    transition: all var(--transition-speed) var(--transition-timing);
    position: relative;
    overflow: hidden;
}
```


### src\css\style.css
```css
button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.4), transparent);
    transition: left 0.6s ease;
    pointer-events: none;
}
```


### src\css\style.css
```css
BUTTON OPTIMIZATION
   Reduced min-width and optimized spacing to prevent squeezing
   ======================================== */
@media (max-width: 768px) {
    .tabs-wrapper {
        margin-bottom: 3rem;
        padding: 0 1rem;
        /* Increased from 0.5rem for better spacing */
    }
```


### src\css\style.css
```css
button {
        flex: 0 0 auto;
        min-width: 140px;
        /* Reduced from 150px to prevent squeezing */
        max-width: 180px;
        /* Added max-width constraint */
        padding: 0.875rem 1.25rem;
        /* Optimized padding */
        font-size: 0.95rem;
        /* Slightly smaller for better fit */
        white-space: nowrap;
        scroll-snap-align: center;
        background: rgba(168, 85, 247, 0.1);
        border: 1px solid rgba(168, 85, 247, 0.3);
        min-height: 44px;
        /* Ensure touch target minimum */
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        /* Smooth feedback */
    }
```


### src\css\style.css
```css
button {
        min-width: 120px;
        /* Further reduced for small screens */
        max-width: 160px;
        padding: 0.75rem 1rem;
        /* Reduced padding */
        font-size: 0.9rem;
        /* Smaller font */
    }
```


### src\css\style.css
```css
button {
        min-width: 120px;
        padding: 0.75rem 1rem;
        font-size: 0.9rem;
    }
```


### src\css\style.css
```css
button adjustments for very small screens */
    .mobile-menu-btn {
        width: 40px;
        height: 40px;
        padding: 8px;
    }
```


### src\css\style.css
```css
button {
    display: block;
    width: 100%;
    padding: 1rem;
    border-radius: 0.75rem;
    text-decoration: none;
    font-weight: 600;
    color: #fff;
    transition: all var(--transition-speed) ease;
    background: var(--glass-bg-dark);
    border: 1px solid var(--glass-border);
}
```


### src\css\style.css
```css
button {
    flex: 1;
    min-width: 150px;
    padding: 1rem 1.5rem;
    background: transparent;
    border: none;
    color: #94a3b8;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    z-index: 2;
    white-space: nowrap;
}
```


### src\css\style.css
```css
button {
    width: 100%;
    padding: 1.25rem 2rem;
    background: linear-gradient(135deg, #a855f7, #4ecdc4);
    border: none;
    border-radius: 12px;
    color: white;
    font-size: 1.25rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(168, 85, 247, 0.3);
}
```


### src\css\style.css
```css
button {
        min-width: auto;
    }
```


### src\css\style.css
```css
button {
    width: 100%;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #8A2BE2, #4A00E0);
    color: white;
    border: none;
    border-radius: 0.875rem;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    transition: all var(--transition-speed) ease;
    box-shadow: 0 6px 25px var(--primary-glow-color);
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}
```


### src\css\style.css
```css
button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s ease;
    pointer-events: none;
}
```


### src\css\style.css
```css
button
 */
.auth-modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-2xl) var(--spacing-2xl) var(--spacing-lg);
    border-bottom: 1px solid var(--glass-border);
}
```


### src\css\style.css
```css
BUTTON
 * X button in top-right corner
 */
.auth-modal-close {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-md);
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
BUTTON
 * Eye icon to show/hide password
 */
.auth-password-toggle {
    position: absolute;
    right: var(--spacing-md);
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: var(--border-radius-sm);
}
```


### src\css\style.css
```css
BUTTON
 */
.auth-submit-btn {
    width: 100%;
    padding: var(--spacing-md) var(--spacing-xl);
    background: linear-gradient(135deg, #8A2BE2, #4A00E0);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: var(--border-radius-lg);
    color: white;
    font-size: var(--body-regular);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}
```


### src\css\style.css
```css
ARIABLE DEFINITIONS & RESET
   ======================================== */

:root {
    /* ===== CORE COLOR SYSTEM ===== */
    --primary-glow-color: rgba(168, 85, 247, 0.5);
    --secondary-glow-color: rgba(78, 205, 196, 0.4);
    --math-glow-color: rgba(255, 165, 0, 0.5);
    --ai-glow-color: rgba(236, 72, 153, 0.5);

    /* ===== GLASSMORPHISM SYSTEM ===== */
    --glass-bg-dark: rgba(8, 8, 16, 0.9);
    --glass-bg-light: rgba(16, 16, 28, 0.8);
    --glass-border: rgba(255, 255, 255, 0.12);
    --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    --glass-blur: 20px;
    --glass-hover-bg-light: rgba(24, 24, 40, 0.9);
    --glass-hover-border: rgba(255, 255, 255, 0.2);
    --glass-hover-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);

    /* ===== INCLUSIVITY SECTION COLORS ===== */
    --inclusivity-gradient: linear-gradient(135deg,
            var(--primary-glow-color),
            var(--secondary-glow-color),
            var(--math-glow-color),
            var(--ai-glow-color));
    --inclusivity-bg: rgba(168, 85, 247, 0.05);
    --inclusivity-border: rgba(168, 85, 247, 0.2);
    --demographic-kids: rgba(78, 205, 196, 0.8);
    --demographic-teens: rgba(168, 85, 247, 0.8);
    --demographic-adults: rgba(255, 165, 0, 0.8);
    --demographic-professionals: rgba(236, 72, 153, 0.8);

    /* ===== GIRLS SECTION COLORS ===== */
    --girls-primary: rgba(236, 72, 153, 0.8);
    --girls-secondary: rgba(251, 207, 232, 0.6);
    --girls-accent: rgba(168, 85, 247, 0.7);
    --girls-warm-bg: rgba(251, 207, 232, 0.1);
    /* Accent text colors - all meet WCAG AA standards against #000002 background */
    --girls-empowerment-color: #EC4899;  /* Contrast: 5.95:1 ✓ WCAG AA */
    --girls-confidence-color: #A855F7;   /* Contrast: 5.30:1 ✓ WCAG AA */
    --girls-creativity-color: #F59E0B;   /* Contrast: 9.77:1 ✓ WCAG AA */
    --girls-teamwork-color: #10B981;     /* Contrast: 8.27:1 ✓ WCAG AA */

    /* ===== ENHANCED TYPOGRAPHY SYSTEM ===== */
    /* All text colors meet WCAG AA standards (4.5:1 contrast ratio) against #000002 background */
    --text-primary: #F8FAFC;      /* Contrast: 20.05:1 ✓ WCAG AA */
    --text-secondary: #CBD5E1;    /* Contrast: 14.13:1 ✓ WCAG AA */
    --text-muted: #94A3B8;        /* Contrast: 8.18:1 ✓ WCAG AA */
    --heading-primary: clamp(2.5rem, 5vw, 4rem);
    --heading-secondary: clamp(2rem, 4vw, 3rem);
    --heading-tertiary: clamp(1.5rem, 3vw, 2rem);
    --body-large: clamp(1.125rem, 2vw, 1.25rem);
    --body-regular: clamp(1rem, 1.5vw, 1.125rem);
    --body-small: clamp(0.875rem, 1.2vw, 1rem);

    /* ===== ENHANCED SPACING SYSTEM ===== */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-2xl: 3rem;
    --spacing-3xl: 4rem;
    --section-gap: clamp(4rem, 8vw, 8rem);
    --card-gap: clamp(1.5rem, 3vw, 2.5rem);
    --section-padding-mobile: 2rem 1rem;
    --section-padding-tablet: 3rem 2rem;
    --section-padding-desktop: 4rem 3rem;
    --content-max-width: 1200px;
    --text-max-width: 65ch;

    /* ===== BORDER RADIUS SYSTEM ===== */
    --border-radius-sm: 0.5rem;
    --border-radius-md: 0.75rem;
    --border-radius-lg: 1rem;
    --border-radius-xl: 1.5rem;
    --border-radius-2xl: 2rem;

    /* ===== ANIMATION & TRANSITION SYSTEM ===== */
    --card-hover-transform: translateY(-8px) scale(1.02);
    --transition-speed: 0.3s;
    --transition-timing: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --animation-duration-fast: 0.2s;
    --animation-duration-normal: 0.3s;
    --animation-duration-slow: 0.5s;
}
```


### src\css\style.css
```css
ansition-delay: 0.4s;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #000002;
    color: var(--text-primary);
    min-height: 100vh;
    overflow-x: hidden;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
```


### src\css\style.css
```css
ANCED TYPOGRAPHY HIERARCHY
   ======================================== */

.heading-primary {
    font-size: var(--heading-primary);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.02em;
    background: linear-gradient(135deg, var(--text-primary), #d1d8ff);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}
```


### src\css\style.css
```css
ading-secondary {
    font-size: var(--heading-secondary);
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.01em;
    background: linear-gradient(135deg, var(--text-primary), #d1d8ff);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}
```


### src\css\style.css
```css
ading-tertiary {
    font-size: var(--heading-tertiary);
    font-weight: 600;
    line-height: 1.3;
    color: var(--text-primary);
}
```


### src\css\style.css
```css
arge {
    font-size: var(--body-large);
    font-weight: 500;
    line-height: 1.6;
    color: var(--text-secondary);
}
```


### src\css\style.css
```css
ar {
    font-size: var(--body-regular);
    font-weight: 400;
    line-height: 1.6;
    color: var(--text-secondary);
}
```


### src\css\style.css
```css
all {
    font-size: var(--body-small);
    font-weight: 400;
    line-height: 1.5;
    color: var(--text-muted);
}
```


### src\css\style.css
```css
ainer {
        padding: 0 var(--spacing-md);
    }
```


### src\css\style.css
```css
av-container {
        padding: 0.875rem 1rem;
    }
```


### src\css\style.css
```css
ax-width: 38px;
        max-height: 38px;
    }

    .logo-icon {
        width: 36px;
        height: 36px;
    }
```


### src\css\style.css
```css
ay: none;
        }
        .logo-img {
            width: 36px;
            height: 36px;
            max-width: 36px;
            max-height: 36px;
        }
```


### src\css\style.css
```css
ab-button {
        min-width: 130px;
        padding: 0.875rem 1.25rem;
        font-size: 0.9rem;
    }
```


### src\css\style.css
```css
adding: 0 1rem;
    }

    .section-subtitle {
        font-size: 0.95rem;
        padding: 0 1rem;
    }
```


### src\css\style.css
```css
abs-wrapper {
        padding: 0;
    }
```


### src\css\style.css
```css
abs-container {
        padding: 0.5rem 0.25rem;
    }
```


### src\css\style.css
```css
ation */
    .hero-section {
        padding: 2rem 1rem;
        gap: 1.5rem;
        border-radius: 1rem;
    }
```


### src\css\style.css
```css
amp(1.75rem, 7vw, 2.25rem);
        line-height: 1.3;
        margin-bottom: 1rem;
    }
    
    .hero-text p {
        font-size: clamp(0.9rem, 3vw, 1rem);
        line-height: 1.5;
        padding: 0 0.5rem;
    }
```


### src\css\style.css
```css
a (max-width: 768px) {


    body.index-page main,
    body.courses-page main {
        padding: 100px var(--spacing-md) var(--spacing-md);
    }
```


### src\css\style.css
```css
ate-columns: 1fr;
        gap: var(--spacing-lg);
    }

    .feature-item {
        text-align: center;
        padding: var(--spacing-lg);
    }
```


### src\css\style.css
```css
a (max-width: 1024px) {


    .nav-container {
        padding: var(--spacing-md) var(--spacing-xl);
    }
```


### src\css\style.css
```css
ate-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
}

@media (min-width: 1400px) {


    .container {
        max-width: 1400px;
    }
```


### src\css\style.css
```css
ansform: scale(0.98);
    }


    .nav-link,
    .cta-button,
    .card-button {
        min-height: 44px;
        min-width: 44px;
    }
```


### src\css\style.css
```css
age-rendering: -webkit-optimize-contrast;
        image-rendering: crisp-edges;
    }
}

/* ========================================
   STANDARDIZED DESIGN CONSISTENCY
   ======================================== */


.btn-primary,
.cta-button,
.card-button.coding {
    background: linear-gradient(135deg, #8A2BE2, #4A00E0);
    color: white;
    padding: var(--spacing-md) var(--spacing-xl);
    border-radius: var(--border-radius-lg);
    text-decoration: none;
    font-weight: 600;
    font-size: var(--body-regular);
    transition: all var(--transition-speed) ease;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 6px 25px var(--primary-glow-color);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm);
    cursor: pointer;
    text-align: center;
    min-height: 44px;
}
```


### src\css\style.css
```css
ary,
.card-button.math {
    background: linear-gradient(135deg, #FFD700, #FFA500);
    color: #000;
    padding: var(--spacing-md) var(--spacing-xl);
    border-radius: var(--border-radius-lg);
    text-decoration: none;
    font-weight: 600;
    font-size: var(--body-regular);
    transition: all var(--transition-speed) ease;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 6px 25px var(--math-glow-color);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm);
    cursor: pointer;
    text-align: center;
    min-height: 44px;
}
```


### src\css\style.css
```css
ary,
.card-button.ai {
    background: linear-gradient(135deg, #EC4899, #BE185D);
    color: white;
    padding: var(--spacing-md) var(--spacing-xl);
    border-radius: var(--border-radius-lg);
    text-decoration: none;
    font-weight: 600;
    font-size: var(--body-regular);
    transition: all var(--transition-speed) ease;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 6px 25px var(--ai-glow-color);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm);
    cursor: pointer;
    text-align: center;
    min-height: 44px;
}
```


### src\css\style.css
```css
ackground: var(--glass-hover-bg-light);
    border-color: var(--glass-hover-border);
    box-shadow: var(--glass-hover-shadow);
    transform: var(--card-hover-transform);
}


h1,
.h1 {
    font-size: var(--heading-primary);
    font-weight: 800;
    line-height: 1.1;
}
```


### src\css\style.css
```css
ar(--heading-secondary);
    font-weight: 700;
    line-height: 1.2;
}

h3,
.h3 {
    font-size: var(--heading-tertiary);
    font-weight: 600;
    line-height: 1.3;
}
```


### src\css\style.css
```css
ar(--body-large);
    font-weight: 600;
    line-height: 1.4;
}

h5,
.h5 {
    font-size: var(--body-regular);
    font-weight: 600;
    line-height: 1.4;
}
```


### src\css\style.css
```css
ar(--body-small);
    font-weight: 600;
    line-height: 1.4;
}

p,
.body-text {
    font-size: var(--body-regular);
    line-height: 1.6;
    color: var(--text-secondary);
}
```


### src\css\style.css
```css
arge {
    font-size: var(--body-large);
    line-height: 1.6;
    color: var(--text-secondary);
}
```


### src\css\style.css
```css
all {
    font-size: var(--body-small);
    line-height: 1.5;
    color: var(--text-muted);
}
```


### src\css\style.css
```css
argin-bottom: var(--spacing-2xl);
}

.p-xs {
    padding: var(--spacing-xs);
}
```


### src\css\style.css
```css
adding: var(--spacing-sm);
}

.p-md {
    padding: var(--spacing-md);
}
```


### src\css\style.css
```css
adding: var(--spacing-lg);
}

.p-xl {
    padding: var(--spacing-xl);
}
```


### src\css\style.css
```css
ackground: rgba(16, 16, 28, 0.95);
    }
}


img {
    loading: lazy;
    decoding: async;
    max-width: 100%;
    height: auto;
}
```


### src\css\style.css
```css
ackground: rgba(16, 16, 28, 0.9);
  }
  
  /* Samsung Internet scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
```


### src\css\style.css
```css
ay: none;
  }
  
  /* Firefox Mobile scrollbar styling */
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(168, 85, 247, 0.5) rgba(16, 16, 28, 0.3);
  }
```


### src\css\style.css
```css
ay: flex;
        flex-wrap: wrap;
        gap: var(--spacing-lg);
    }

    .courses-grid>*,
    .features-grid>*,
    .inclusivity-chart>*,
    .girls-features-grid>* {
        flex: 1 1 280px;
        min-width: 280px;
    }
```


### src\css\style.css
```css
ay: grid) {

    .demographic-card,
    .girls-empowerment-card,
    .course-card {
        width: calc(50% - var(--spacing-lg));
        display: inline-block;
        vertical-align: top;
        margin-bottom: var(--spacing-lg);
    }
```


### src\css\style.css
```css
argin-top: -8px;
        margin-bottom: 8px;
    }
}


@supports not (clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)) {

    .hero-section::before,
    .inclusivity-section::before {
        border-radius: 50%;
        width: 200px;
        height: 200px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
```


### src\css\style.css
```css
a (pointer: coarse) {

    .nav-link,
    .cta-button,
    .card-button,
    .tab-button,
    .sub-tab {
        min-height: 44px;
        min-width: 44px;
        padding: var(--spacing-md) var(--spacing-lg);
    }
```


### src\css\style.css
```css
absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}


.skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: var(--primary-glow-color);
    color: white;
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 10003;
}
```


### src\css\style.css
```css
ackground-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -3;
    opacity: 0.8;
}
```


### src\css\style.css
```css
ansform: translateY(5px) rotate(-1deg);
    }
}


/* ========================================
   HEADER & NAVBAR Z-INDEX HIERARCHY
   
   Z-Index Layering (highest to lowest):
   - Modal/Overlay: 10001+
   - Dropdown Content: 10000
   - Mobile Menu Button: 10000 (must be clickable)
   - Header/Navbar: 9999
   - Mobile Menu: 9998
   - Page Content: 1 or auto
   - Background: -1 to -3
   ======================================== */

header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    /* Below mobile menu button (10000) */
    width: 100%;
    margin: 0;
    padding: 0;
    background: rgba(10, 10, 20, 0.95);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
}
```


### src\css\style.css
```css
av {
    width: 100%;
    z-index: 1000;
    /* Relative z-index within header */
    position: relative;
    /* Create stacking context */
}
```


### src\css\style.css
```css
avbar {
    background: transparent;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid rgba(168, 85, 247, 0.3);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
    transition: all var(--transition-speed) var(--transition-timing);
    margin: 0;
    width: 100%;
    z-index: 9999;
    /* Same as header */
    position: relative;
    /* Explicit positioning for stacking context */
}
```


### src\css\style.css
```css
adow: 0 12px 40px rgba(168, 85, 247, 0.2);
}

.nav-container {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    padding: 0.875rem 1.75rem;
    gap: 1.5rem;
    position: relative;
    /* Ensure proper stacking */
    z-index: 1;
    /* Lower than mobile-menu-btn to not block it */
}
```


### src\css\style.css
```css
ate-columns: 40px auto 1fr auto;
}

.back-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: rgba(168, 85, 247, 0.1);
    border: 1px solid rgba(168, 85, 247, 0.3);
    color: #a855f7;
    transition: all 0.3s ease;
    text-decoration: none;
    flex-shrink: 0;
}
```


### src\css\style.css
```css
ackground: rgba(168, 85, 247, 0.2);
    border-color: rgba(168, 85, 247, 0.5);
    transform: translateX(-3px);
}

.back-button svg {
    width: 20px;
    height: 20px;
}
```


### src\css\style.css
```css
ansform: scale(1.02);
}

/* Logo Image Styling */
.logo-img {
    width: 45px !important;
    height: 45px !important;
    max-width: 45px !important;
    max-height: 45px !important;
    min-width: 45px;
    min-height: 45px;
    object-fit: contain;
    object-position: center;
    display: block;
    transition: all 0.4s ease;
    filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.3));
}
```


### src\css\style.css
```css
ansform: scale(1.05);
    filter: drop-shadow(0 0 20px rgba(168, 85, 247, 0.6));
}

/* Legacy logo-icon support (if needed elsewhere) */
.logo-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(45deg, #a855f7, #4ecdc4);
    border-radius: 0.875rem;
    display: grid;
    place-items: center;
    position: relative;
    box-shadow: 0 0 25px rgba(168, 85, 247, 0.5);
    transition: all 0.4s ease;
    animation: pulse-glow 3s ease-in-out infinite;
}
```


### src\css\style.css
```css
ackground: linear-gradient(135deg, #ffffff, #E0E7FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    white-space: nowrap;
}

.nav-menu {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
    justify-self: end;
}
```


### src\css\style.css
```css
av-link {
    padding: 0.625rem 1.25rem;
    text-decoration: none;
    color: #CBD5E1;
    font-weight: 500;
    font-size: 1rem;
    border-radius: 0.875rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: visible;
    border: 1px solid transparent;
    display: inline-flex;
    align-items: center;
    gap: 4px;
}
```


### src\css\style.css
```css
ative;
}

.dropdown-content {
    position: absolute;
    top: calc(100% + 10px);
    left: 50%;
    background: var(--glass-bg-dark);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: 1rem;
    min-width: 220px;
    padding: 0.5rem;
    box-shadow: var(--glass-shadow);
    opacity: 0;
    visibility: hidden;
    transform: translateX(-50%) translateY(-10px);
    transition: all var(--transition-speed) var(--transition-timing);
    z-index: 1001;
}
```


### src\css\style.css
```css
acity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
}

.dropdown-item {
    display: block;
    padding: 0.75rem 1rem;
    color: #CBD5E1;
    text-decoration: none;
    font-size: 0.95rem;
    border-radius: 0.625rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: visible;
}
```


### src\css\style.css
```css
ackground: rgba(168, 85, 247, 0.2);
    color: white;
    border-left: 3px solid rgba(168, 85, 247, 0.8);
}

/* Remove the flashy animation effect */
.dropdown-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(168, 85, 247, 0.1);
    transition: left 0.4s ease;
}
```


### src\css\style.css
```css
ackground: rgba(255, 255, 255, 0.1);
    color: white;
    padding-left: 1.5rem;
}

.cta-button {
    background: linear-gradient(135deg, #8A2BE2, #4A00E0);
    color: white;
    padding: 0.875rem 2rem;
    border-radius: 0.875rem;
    text-decoration: none;
    font-weight: 700;
    font-size: 1rem;
    transition: all var(--transition-speed) ease;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 6px 25px var(--primary-glow-color);
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}
```


### src\css\style.css
```css
a-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s ease;
    pointer-events: none;
}
```


### src\css\style.css
```css
ansform: translateY(-2px) scale(1.05);
}

/* ========================================
   MOBILE MENU BUTTON - Z-INDEX HIERARCHY
   Button must be above navbar (9999) to ensure clickability
   ======================================== */
.mobile-menu-btn {
    display: none;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 10px;
    /* Increased clickable area */
    z-index: 10000;
    /* Above navbar to ensure clickability */
    position: relative;
    /* Create stacking context */
    min-width: 44px;
    /* Meet touch target minimum */
    min-height: 44px;
    /* Meet touch target minimum */
    align-items: center;
    justify-content: center;
}
```


### src\css\style.css
```css
ain {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6rem;
    width: 100%;
}
```


### src\css\style.css
```css
AGE-SPECIFIC LAYOUTS & SPACING
   ======================================== */


body.index-page main {
    padding: 120px 20px 20px;
}
```


### src\css\style.css
```css
age main {
    padding: var(--section-padding-desktop);
    padding-top: 120px;
    gap: var(--spacing-2xl);
    max-width: 100%;
}
```


### src\css\style.css
```css
about-page main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 20px;
    gap: 3rem;
}
```


### src\css\style.css
```css
age .container {
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
}
```


### src\css\style.css
```css
ay: flex;
    flex-direction: column;
    gap: var(--spacing-2xl);
}


.tab-navigation {
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-xl);
    padding: var(--spacing-xl);
    margin-bottom: var(--spacing-2xl);
    box-shadow: var(--glass-shadow);
}
```


### src\css\style.css
```css
ain-tabs {
    display: flex;
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-2xl);
    justify-content: center;
    background: rgba(255, 255, 255, 0.02);
    padding: var(--spacing-sm);
    border-radius: var(--border-radius-xl);
    position: relative;
}
```


### src\css\style.css
```css
ain-tab {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-lg) var(--spacing-xl);
    background: transparent;
    border: none;
    border-radius: var(--border-radius-lg);
    color: var(--text-secondary);
    font-weight: 600;
    font-size: var(--body-regular);
    cursor: pointer;
    transition: all var(--transition-speed) ease;
    min-width: 140px;
    justify-content: center;
    position: relative;
    z-index: 2;
}
```


### src\css\style.css
```css
ackground: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    color: white;
    box-shadow: 0 8px 25px rgba(168, 85, 247, 0.2);
}

.main-tab .tab-icon {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
```


### src\css\style.css
```css
ain-tab .tab-icon svg {
    width: 18px;
    height: 18px;
    transition: all var(--transition-speed) ease;
}
```


### src\css\style.css
```css
ar(--primary-glow-color);
}

.sub-tabs-container {
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    padding-top: var(--spacing-xl);
    margin-top: var(--spacing-lg);
}
```


### src\css\style.css
```css
abs {
    display: flex;
    gap: var(--spacing-sm);
    flex-wrap: wrap;
    justify-content: center;
    padding: var(--spacing-md);
    background: rgba(255, 255, 255, 0.02);
    border-radius: var(--border-radius-lg);
}
```


### src\css\style.css
```css
ab {
    padding: var(--spacing-md) var(--spacing-lg);
    background: transparent;
    border: 1px solid transparent;
    border-radius: var(--border-radius-md);
    color: var(--text-muted);
    font-weight: 500;
    font-size: var(--body-small);
    cursor: pointer;
    transition: all var(--transition-speed) ease;
    white-space: nowrap;
    position: relative;
}
```


### src\css\style.css
```css
ab::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: var(--primary-glow-color);
    transition: all var(--transition-speed) ease;
    transform: translateX(-50%);
}
```


### src\css\style.css
```css
ar(--text-primary);
    background: rgba(168, 85, 247, 0.1);
    border-color: rgba(168, 85, 247, 0.3);
}

.sub-tab.active::before {
    width: 80%;
}
```


### src\css\style.css
```css
a (max-width: 768px) {
    .main-tabs {
        flex-direction: column;
        gap: var(--spacing-xs);
        padding: var(--spacing-md);
    }
```


### src\css\style.css
```css
ain-tab {
        min-width: auto;
        width: 100%;
        padding: var(--spacing-md);
    }
```


### src\css\style.css
```css
abs {
        flex-direction: column;
        gap: var(--spacing-xs);
        padding: var(--spacing-sm);
    }
```


### src\css\style.css
```css
ab {
        width: 100%;
        text-align: center;
        padding: var(--spacing-sm) var(--spacing-md);
    }
```


### src\css\style.css
```css
ax-width: 1200px;
    opacity: 0;
    transform: translateY(20px);
    animation: slideInUp 0.8s forwards;
    animation-timing-function: var(--transition-timing);
}

.section-title {
    text-align: center;
    font-size: clamp(2rem, 4vw, 2.8rem);
    font-weight: 700;
    margin-bottom: var(--spacing-2xl);
    background: linear-gradient(135deg, var(--text-primary), #d1d8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.02em;
    line-height: 1.2;
}
```


### src\css\style.css
```css
align: center;
    font-size: 1.125rem;
    color: var(--text-muted);
    max-width: 600px;
    margin: calc(-1 * var(--spacing-lg)) auto var(--spacing-2xl);
    font-weight: 400;
    line-height: 1.6;
}


.container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
}
```


### src\css\style.css
```css
adow: 0 20px 50px rgba(168, 85, 247, 0.3);
    border-color: var(--glass-hover-border);
}

.hero-section::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 50%);
    z-index: 0;
    animation: subtle-glow 15s ease-in-out infinite;
}
```


### src\css\style.css
```css
animation: slideInLeft 1s ease;
}

.hero-text h1 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 800;
    background: linear-gradient(135deg, #ffffff, #d1d8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 40px rgba(255, 255, 255, 0.2);
    margin-bottom: 1rem;
    line-height: 1.2;
    white-space: nowrap;
}
```


### src\css\style.css
```css
ace: normal;
        text-align: center;
        margin-bottom: 1.5rem;
    }
    
    .hero-text p {
        text-align: center;
        max-width: 100%;
        margin: 0 auto;
        padding: 0 1rem;
    }
```


### src\css\style.css
```css
ackground: linear-gradient(135deg, #a855f7, #4ecdc4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 900;
    text-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
    display: inline-block;
}

.hero-text p {
    font-size: clamp(1rem, 2vw, 1.15rem);
    color: #94a3b8;
    max-width: 500px;
    animation: fadeIn 1s ease 0.5s both;
}
```


### src\css\style.css
```css
ay: grid;
    place-items: center;
    animation: slideInRight 1s ease;
}

.hero-image svg {
    width: 100%;
    max-width: 300px;
    animation: hero-float 6s ease-in-out infinite;
}
```


### src\css\style.css
```css
ansform: translateY(-10px) rotate(1deg);
    }
}

/* ========================================
   INCLUSIVITY SECTION - "CODING AND MATHS FOR EVERYONE"
   ======================================== */

.inclusivity-section {
    width: 100%;
    max-width: var(--content-max-width);
    margin: var(--section-gap) auto;
    padding: var(--spacing-3xl);
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--inclusivity-border);
    border-radius: var(--border-radius-2xl);
    box-shadow: var(--glass-shadow);
    position: relative;
    overflow: hidden;
    animation: slideInUp 0.8s ease-out;
}
```


### src\css\style.css
```css
absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--inclusivity-gradient);
    opacity: 0.05;
    z-index: 0;
    animation: subtle-glow 20s ease-in-out infinite;
}

.inclusivity-section::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%);
    z-index: 0;
    animation: subtle-glow 25s ease-in-out infinite reverse;
}
```


### src\css\style.css
```css
ative;
    z-index: 1;
    text-align: center;
}

.inclusivity-title {
    font-size: var(--heading-primary);
    font-weight: 800;
    margin-bottom: var(--spacing-lg);
    background: var(--inclusivity-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.2;
    letter-spacing: -0.02em;
    position: relative;
    animation: fadeIn 1s ease-out 0.3s both;
}
```


### src\css\style.css
```css
after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: var(--inclusivity-gradient);
    border-radius: 2px;
    animation: slideInUp 0.8s ease-out 0.8s both;
}
```


### src\css\style.css
```css
ay: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--card-gap);
    margin-top: var(--spacing-3xl);
}

.demographic-card {
    background: var(--glass-bg-dark);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-xl);
    padding: var(--spacing-xl);
    text-align: center;
    transition: all var(--transition-speed) var(--transition-timing);
    position: relative;
    overflow: hidden;
    animation: fadeIn 0.8s ease-out;
}
```


### src\css\style.css
```css
animation-delay: 0.4s;
}

.demographic-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    transition: transform var(--transition-speed) ease;
    transform: scaleX(0);
    transform-origin: left;
}
```


### src\css\style.css
```css
ansform: scaleX(1);
}

.demographic-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto var(--spacing-lg);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    transition: all var(--transition-speed) ease;
    position: relative;
    overflow: hidden;
}
```


### src\css\style.css
```css
ar(--heading-tertiary);
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--spacing-sm);
}

.demographic-description {
    font-size: var(--body-regular);
    color: var(--text-muted);
    line-height: 1.5;
}
```


### src\css\style.css
```css
ar(--body-small);
    color: var(--text-secondary);
    font-weight: 500;
    margin-top: var(--spacing-sm);
    opacity: 0.8;
}


@media (max-width: 768px) {
    .inclusivity-section {
        padding: var(--section-padding-mobile);
        margin: var(--spacing-2xl) auto;
    }
```


### src\css\style.css
```css
ate-columns: 1fr;
        gap: var(--spacing-lg);
    }

    .demographic-card {
        padding: var(--spacing-lg);
    }
```


### src\css\style.css
```css
ANCED CODING FOR GIRLS SECTION
   ======================================== */

.coding-for-girls-section {
    width: 100%;
    max-width: var(--content-max-width);
    margin: var(--section-gap) auto;
    padding: var(--spacing-3xl);
    background: var(--girls-warm-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--girls-primary);
    border-radius: var(--border-radius-2xl);
    box-shadow: 0 20px 50px rgba(236, 72, 153, 0.2);
    position: relative;
    overflow: hidden;
    animation: slideInUp 0.8s ease-out;
}
```


### src\css\style.css
```css
ay: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.empowerment-circle {
    width: 300px;
    height: 300px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
```


### src\css\style.css
```css
absolute;
    border-radius: 50%;
    animation: float 6s ease-in-out infinite;
}

.circle-layer:nth-child(1) {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--girls-empowerment-color), transparent);
    opacity: 0.2;
    animation-delay: 0s;
}
```


### src\css\style.css
```css
ayer:nth-child(2) {
    width: 80%;
    height: 80%;
    background: linear-gradient(225deg, var(--girls-confidence-color), transparent);
    opacity: 0.3;
    animation-delay: -2s;
}
```


### src\css\style.css
```css
ayer:nth-child(3) {
    width: 60%;
    height: 60%;
    background: linear-gradient(315deg, var(--girls-creativity-color), transparent);
    opacity: 0.4;
    animation-delay: -4s;
}
```


### src\css\style.css
```css
absolute;
    width: 100%;
    height: 100%;
}

.empowerment-icon {
    position: absolute;
    width: 60px;
    height: 60px;
    background: var(--glass-bg-dark);
    border: 2px solid var(--girls-empowerment-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: var(--girls-empowerment-color);
    animation: pulse-glow 3s ease-in-out infinite;
    transition: all var(--transition-speed) ease;
}
```


### src\css\style.css
```css
align: left;
}

.girls-title {
    font-size: var(--heading-primary);
    font-weight: 800;
    margin-bottom: var(--spacing-lg);
    background: linear-gradient(135deg, var(--girls-empowerment-color), var(--girls-confidence-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.2;
    letter-spacing: -0.02em;
}
```


### src\css\style.css
```css
ay: grid;
    gap: var(--spacing-md);
}

.girls-feature {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    padding: var(--spacing-md);
    background: rgba(236, 72, 153, 0.1);
    border-radius: var(--border-radius-lg);
    transition: all var(--transition-speed) ease;
}
```


### src\css\style.css
```css
ackground: rgba(236, 72, 153, 0.15);
    transform: translateX(10px);
}

.girls-feature-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, var(--girls-empowerment-color), var(--girls-confidence-color));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
    flex-shrink: 0;
}
```


### src\css\style.css
```css
argin-top: var(--spacing-xl);
}

.girls-cta-button {
    background: linear-gradient(135deg, var(--girls-empowerment-color), var(--girls-confidence-color));
    color: white;
    padding: var(--spacing-lg) var(--spacing-2xl);
    border-radius: var(--border-radius-lg);
    text-decoration: none;
    font-weight: 700;
    font-size: var(--body-regular);
    transition: all var(--transition-speed) ease;
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-sm);
    box-shadow: 0 10px 30px rgba(236, 72, 153, 0.3);
}
```


### src\css\style.css
```css
ay: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--card-gap);
    margin-top: var(--spacing-3xl);
    position: relative;
    z-index: 1;
}

.girls-empowerment-card {
    background: var(--glass-bg-dark);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--girls-primary);
    border-radius: var(--border-radius-xl);
    padding: var(--spacing-xl);
    text-align: center;
    transition: all var(--transition-speed) ease;
    position: relative;
    overflow: hidden;
}
```


### src\css\style.css
```css
ard::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--girls-empowerment-color), var(--girls-confidence-color));
    transform: scaleX(0);
    transition: transform var(--transition-speed) ease;
    transform-origin: left;
}
```


### src\css\style.css
```css
ansform: scaleX(1);
}

.girls-card-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto var(--spacing-lg);
    background: linear-gradient(135deg, var(--girls-empowerment-color), var(--girls-confidence-color));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: white;
    transition: all var(--transition-speed) ease;
}
```


### src\css\style.css
```css
ar(--heading-tertiary);
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--spacing-sm);
}

.girls-card-description {
    font-size: var(--body-regular);
    color: var(--text-muted);
    line-height: 1.5;
}
```


### src\css\style.css
```css
a (max-width: 768px) {
    .coding-for-girls-section {
        padding: var(--section-padding-mobile);
    }
```


### src\css\style.css
```css
ate-columns: 1fr;
        gap: var(--spacing-2xl);
        text-align: center;
    }

    .empowerment-circle {
        width: 250px;
        height: 250px;
    }
```


### src\css\style.css
```css
ate-columns: 1fr;
        gap: var(--spacing-lg);
    }
}

/* ========================================
   PROFESSIONAL LEARNING PATHWAY SECTION
   ======================================== */

.learning-pathway {
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--spacing-2xl) 0;
}
```


### src\css\style.css
```css
ay: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-3xl);
    flex-wrap: wrap;
}

.pathway-node {
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-xl);
    padding: var(--spacing-xl);
    text-align: center;
    transition: all var(--transition-speed) ease;
    position: relative;
    min-width: 180px;
    animation: slideInUp 0.8s ease-out;
}
```


### src\css\style.css
```css
ative;
    z-index: 1;
}

.node-icon {
    width: 60px;
    height: 60px;
    margin: 0 auto var(--spacing-md);
    background: linear-gradient(135deg, var(--primary-glow-color), var(--secondary-glow-color));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    transition: all var(--transition-speed) ease;
}
```


### src\css\style.css
```css
ansform: scale(1.1);
    box-shadow: 0 10px 30px rgba(168, 85, 247, 0.4);
}

.node-icon svg {
    width: 24px;
    height: 24px;
}
```


### src\css\style.css
```css
ar(--body-small);
    color: var(--text-secondary);
    margin-bottom: var(--spacing-sm);
    font-weight: 500;
}

.node-description {
    font-size: var(--body-small);
    color: var(--text-muted);
    line-height: 1.4;
    display: block;
}
```


### src\css\style.css
```css
athway-connector {
    flex-shrink: 0;
    width: 100px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
```


### src\css\style.css
```css
athway-connector svg {
    width: 100%;
    height: 100%;
}
```


### src\css\style.css
```css
athway-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-xl);
    margin-top: var(--spacing-3xl);
    padding: var(--spacing-2xl);
    background: var(--glass-bg-dark);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-xl);
    box-shadow: var(--glass-shadow);
}
```


### src\css\style.css
```css
at-item {
    text-align: center;
    padding: var(--spacing-lg);
    transition: all var(--transition-speed) ease;
}
```


### src\css\style.css
```css
ansform: translateY(-4px);
}

.stat-number {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    background: linear-gradient(135deg, var(--primary-glow-color), var(--secondary-glow-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: var(--spacing-sm);
    line-height: 1;
}
```


### src\css\style.css
```css
ackground: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid rgba(236, 72, 153, 0.3);
    box-shadow: 0 20px 50px rgba(236, 72, 153, 0.1);
}

.girls-visual svg {
    width: 100%;
    height: 200px;
}
```


### src\css\style.css
```css
ay: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    margin: var(--spacing-xl) 0;
}

.highlight-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    padding: var(--spacing-md);
    background: rgba(236, 72, 153, 0.05);
    border-radius: var(--border-radius-md);
    transition: all var(--transition-speed) ease;
}
```


### src\css\style.css
```css
ackground: rgba(236, 72, 153, 0.1);
    transform: translateX(8px);
}

.highlight-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #EC4899, #A855F7);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-shrink: 0;
}
```


### src\css\style.css
```css
ap: var(--spacing-md);
    }

    .pathway-connector {
        transform: rotate(90deg);
        width: 20px;
        height: 60px;
    }
```


### src\css\style.css
```css
athway-node {
        min-width: 280px;
        width: 100%;
    }
```


### src\css\style.css
```css
athway-stats {
        grid-template-columns: 1fr;
        gap: var(--spacing-lg);
        padding: var(--spacing-lg);
    }
```


### src\css\style.css
```css
ap: var(--spacing-sm);
    }

    .highlight-item {
        padding: var(--spacing-sm);
    }
```


### src\css\style.css
```css
AMAZING QUADRANT LAYOUT STYLES - GLOWY PURPLE VIBES
   ======================================== */

.learning-quadrant-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 3rem 0;
}
```


### src\css\style.css
```css
adrant-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2rem;
    min-height: 550px;
    padding: 1rem;
}
```


### src\css\style.css
```css
adrant-item {
    position: relative;
    border-radius: 2rem;
    padding: 3.5rem 2.5rem;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    animation: fadeInUp 0.8s ease-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}
```


### src\css\style.css
```css
ay: none;
}

.quadrant-content {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 1.5rem;
}
```


### src\css\style.css
```css
adrant-icon {
    width: 120px;
    height: 120px;
    filter: drop-shadow(0 0 20px currentColor);
    transition: all 0.4s ease;
}
```


### src\css\style.css
```css
ansform: scale(1.1) translateY(-5px);
    filter: drop-shadow(0 0 35px currentColor);
}

.quadrant-title {
    font-size: 2.5rem;
    font-weight: 800;
    margin: 0;
    letter-spacing: 0.5px;
    text-shadow: 0 0 30px currentColor;
    line-height: 1.2;
}
```


### src\css\style.css
```css
adow: 0 15px 60px rgba(236, 72, 153, 0.4), 0 0 80px rgba(236, 72, 153, 0.2);
    border-color: rgba(236, 72, 153, 0.5);
}

.quadrant-overall-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
    padding: 2rem;
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: 1.5rem;
    box-shadow: var(--glass-shadow);
}
```


### src\css\style.css
```css
all-stat-item {
    text-align: center;
    padding: 1.5rem;
    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
ar(--text-secondary);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}


@media (max-width: 768px) {
    .learning-quadrant-container {
        padding: 2rem 0;
        max-width: 600px;
    }
```


### src\css\style.css
```css
adrant-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        min-height: auto;
        padding: 0.5rem;
    }
```


### src\css\style.css
```css
adrant-item {
        padding: 2.5rem 2rem;
    }
```


### src\css\style.css
```css
adrant-icon {
        width: 100px;
        height: 100px;
    }
```


### src\css\style.css
```css
adrant-overall-stats {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        margin-top: 2rem;
        padding: 1.5rem;
    }
```


### src\css\style.css
```css
a (max-width: 480px) {
    .learning-quadrant-container {
        max-width: 400px;
        padding: 1.5rem 0;
    }
```


### src\css\style.css
```css
ate-columns: 1fr;
    }

    .quadrant-item {
        padding: 2rem 1.5rem;
    }
```


### src\css\style.css
```css
adrant-icon {
        width: 80px;
        height: 80px;
    }
```


### src\css\style.css
```css
ay: grid;
    grid-template-columns: 280px 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
}

.filter-sidebar {
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: 1.5rem;
    padding: 2rem;
    position: sticky;
    top: 20px;
    height: fit-content;
    box-shadow: var(--glass-shadow);
    transition: all var(--transition-speed) ease;
    animation: slideInLeft 0.8s ease-out;
}
```


### src\css\style.css
```css
adow: 0 12px 40px rgba(168, 85, 247, 0.2);
    border-color: var(--glass-hover-border);
}

.filter-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--glass-border);
}
```


### src\css\style.css
```css
ackground: linear-gradient(135deg, #ffffff, #d1d8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.clear-btn {
    background: transparent;
    border: 1px solid var(--glass-border);
    color: #94a3b8;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
argin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.filter-group-title::before {
    content: '';
    width: 4px;
    height: 20px;
    background: linear-gradient(180deg, var(--primary-glow-color), var(--secondary-glow-color));
    border-radius: 2px;
}
```


### src\css\style.css
```css
ay: flex;
    align-items: center;
    padding: 0.75rem;
    margin-bottom: 0.5rem;
    border-radius: 0.75rem;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}

.filter-option::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.1), transparent);
    transition: left 0.5s ease;
}
```


### src\css\style.css
```css
ackground: rgba(168, 85, 247, 0.2);
    color: #a855f7;
    padding: 0.25rem 0.5rem;
    border-radius: 1rem;
    font-size: 0.8rem;
    font-weight: 600;
}

.mobile-filter-toggle {
    display: none;
    width: 100%;
    padding: 1rem;
    background: var(--glass-bg-light);
    border: 1px solid var(--glass-border);
    border-radius: 1rem;
    color: white;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 1rem;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
ackground: var(--glass-hover-bg-light);
    transform: translateY(-2px);
}

.course-content {
    flex: 1;
    padding: var(--spacing-xl) 0;
}
```


### src\css\style.css
```css
arch-controls {
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-xl);
    padding: var(--spacing-xl);
    margin-bottom: var(--spacing-2xl);
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: var(--spacing-lg);
    align-items: center;
    box-shadow: var(--glass-shadow);
    transition: all var(--transition-speed) ease;
    animation: slideInUp 0.8s ease-out 0.2s both;
}
```


### src\css\style.css
```css
a(168, 85, 247, 0.3);
    box-shadow: 0 12px 40px rgba(168, 85, 247, 0.15);
}

.search-box {
    position: relative;
    min-width: 280px;
}
```


### src\css\style.css
```css
arch-input {
    width: 100%;
    padding: var(--spacing-md) var(--spacing-lg) var(--spacing-md) 3.5rem;
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--border-radius-lg);
    color: var(--text-primary);
    font-size: var(--body-regular);
    outline: none;
    transition: all var(--transition-speed) ease;
    font-family: inherit;
}
```


### src\css\style.css
```css
ar(--text-muted);
    font-weight: 400;
}

.search-icon {
    position: absolute;
    left: var(--spacing-lg);
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-muted);
    pointer-events: none;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color var(--transition-speed) ease;
}
```


### src\css\style.css
```css
ative;
}

.sort-btn {
    padding: var(--spacing-md) var(--spacing-lg);
    background: rgba(168, 85, 247, 0.1);
    border: 1px solid rgba(168, 85, 247, 0.3);
    border-radius: var(--border-radius-lg);
    color: var(--text-primary);
    font-weight: 600;
    font-size: var(--body-regular);
    cursor: pointer;
    transition: all var(--transition-speed) ease;
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    white-space: nowrap;
    min-width: 140px;
    justify-content: space-between;
}
```


### src\css\style.css
```css
ackground: rgba(168, 85, 247, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(168, 85, 247, 0.2);
    border-color: rgba(168, 85, 247, 0.5);
}

.view-toggle {
    display: flex;
    gap: var(--spacing-xs);
    background: rgba(255, 255, 255, 0.03);
    padding: var(--spacing-xs);
    border-radius: var(--border-radius-md);
    border: 1px solid rgba(255, 255, 255, 0.1);
}
```


### src\css\style.css
```css
ate-columns: 1fr;
        gap: var(--spacing-md);
        text-align: center;
    }

    .search-box {
        min-width: auto;
    }
```


### src\css\style.css
```css
a (max-width: 768px) {
    .search-controls {
        padding: var(--spacing-lg);
        gap: var(--spacing-md);
    }
```


### src\css\style.css
```css
arch-input {
        padding: var(--spacing-md) var(--spacing-md) var(--spacing-md) 3rem;
        font-size: var(--body-small);
    }
```


### src\css\style.css
```css
ative;
}

.search-icon {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: #94a3b8;
    pointer-events: none;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
```


### src\css\style.css
```css
arch-icon svg {
    width: 18px;
    height: 18px;
    color: currentColor;
}
```


### src\css\style.css
```css
arch-input {
    width: 100%;
    padding: 0.875rem 1rem 0.875rem 3rem;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid var(--glass-border);
    border-radius: 0.75rem;
    color: #fff;
    font-size: 1rem;
    outline: none;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
ARCH SECTION
   ======================================== */

.search-section {
    width: 100%;
    padding: 1.5rem 0 1rem;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.05), rgba(78, 205, 196, 0.03));
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 1.5rem;
}
```


### src\css\style.css
```css
arch-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 2rem;
}
```


### src\css\style.css
```css
arch-box-prominent {
    position: relative;
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 24px;
    padding: 0;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}
```


### src\css\style.css
```css
ar(--primary-glow-color);
    box-shadow: 0 0 0 4px rgba(168, 85, 247, 0.2), 0 12px 40px rgba(168, 85, 247, 0.3);
    background: rgba(255, 255, 255, 0.15);
}

.search-input-prominent {
    width: 100%;
    padding: 1.25rem 4rem 1.25rem 4rem;
    background: transparent;
    border: none;
    outline: none;
    color: var(--text-primary);
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.5;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
a(148, 163, 184, 0.7);
    transform: translateX(4px);
}

.search-icon-prominent {
    position: absolute;
    left: 1.25rem;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    color: var(--text-muted);
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    display: flex;
    align-items: center;
    justify-content: center;
}
```


### src\css\style.css
```css
ar(--primary-glow-color);
    transform: translateY(-50%) scale(1.1);
}

.search-icon-prominent svg {
    width: 20px;
    height: 20px;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
arch-clear-btn {
    position: absolute;
    right: 1.25rem;
    top: 50%;
    transform: translateY(-50%);
    width: 32px;
    height: 32px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    color: var(--text-muted);
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
}
```


### src\css\style.css
```css
ackground: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
    color: var(--text-primary);
    transform: translateY(-50%) scale(1.1);
}

.search-clear-btn svg {
    width: 16px;
    height: 16px;
}
```


### src\css\style.css
```css
ay: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    padding: 0 0.5rem;
    gap: 1rem;
}

/* ========================================
   PROMINENT SEARCH RESPONSIVE DESIGN
   ======================================== */

@media (max-width: 1024px) {
    .search-container {
        padding: 0 1.5rem;
    }
```


### src\css\style.css
```css
arch-input-prominent {
        padding: 1.125rem 3.5rem 1.125rem 3.5rem;
        font-size: 1rem;
    }
```


### src\css\style.css
```css
arch-icon-prominent {
        left: 1rem;
        width: 22px;
        height: 22px;
    }
```


### src\css\style.css
```css
arch-clear-btn {
        right: 1rem;
        width: 28px;
        height: 28px;
    }
```


### src\css\style.css
```css
arch-section {
        padding: 1.5rem 0 1rem;
        margin-bottom: 1.5rem;
    }
```


### src\css\style.css
```css
arch-container {
        padding: 0 1rem;
    }
```


### src\css\style.css
```css
adius: 20px;
    }

    .search-input-prominent {
        padding: 1rem 3rem 1rem 3rem;
        font-size: 0.95rem;
    }
```


### src\css\style.css
```css
arch-icon-prominent {
        left: 0.875rem;
        width: 20px;
        height: 20px;
    }
```


### src\css\style.css
```css
arch-icon-prominent svg {
        width: 18px;
        height: 18px;
    }
```


### src\css\style.css
```css
arch-clear-btn {
        right: 0.875rem;
        width: 26px;
        height: 26px;
    }
```


### src\css\style.css
```css
arch-clear-btn svg {
        width: 14px;
        height: 14px;
    }
```


### src\css\style.css
```css
arch-section {
        padding: 1rem 0 0.75rem;
        margin-bottom: 1rem;
    }
```


### src\css\style.css
```css
arch-container {
        padding: 0 0.75rem;
    }
```


### src\css\style.css
```css
adius: 18px;
    }

    .search-input-prominent {
        padding: 0.875rem 2.75rem 0.875rem 2.75rem;
        font-size: 0.9rem;
    }
```


### src\css\style.css
```css
arch-icon-prominent {
        left: 0.75rem;
        width: 18px;
        height: 18px;
    }
```


### src\css\style.css
```css
arch-icon-prominent svg {
        width: 16px;
        height: 16px;
    }
```


### src\css\style.css
```css
arch-clear-btn {
        right: 0.75rem;
        width: 24px;
        height: 24px;
    }
```


### src\css\style.css
```css
arch-clear-btn svg {
        width: 12px;
        height: 12px;
    }
```


### src\css\style.css
```css
ARCH HIGHLIGHTING
   ======================================== */

.search-highlight {
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(78, 205, 196, 0.2));
    color: var(--text-primary);
    padding: 0.125rem 0.25rem;
    border-radius: 4px;
    font-weight: 600;
    box-shadow: 0 2px 8px rgba(168, 85, 247, 0.2);
    border: 1px solid rgba(168, 85, 247, 0.3);
}
```


### src\css\style.css
```css
ative;
}

.sort-btn {
    padding: 0.875rem 1.5rem;
    background: rgba(168, 85, 247, 0.1);
    border: 2px solid rgba(168, 85, 247, 0.2);
    border-radius: 12px;
    color: var(--text-primary);
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    display: flex;
    align-items: center;
    gap: 0.75rem;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}
```


### src\css\style.css
```css
ansform: rotate(180deg);
}

.sort-menu {
    position: absolute;
    top: calc(100% + 0.75rem);
    right: 0;
    background: rgba(16, 16, 28, 0.95);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    padding: 0.75rem;
    min-width: 220px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-15px);
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    z-index: 10000;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
}
```


### src\css\style.css
```css
acity: 1;
    visibility: visible;
    transform: translateY(0);
}

.sort-option {
    padding: 0.875rem 1.25rem;
    color: var(--text-secondary);
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    display: block;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    margin-bottom: 0.25rem;
    position: relative;
    overflow: hidden;
}
```


### src\css\style.css
```css
argin-bottom: 0;
}

.sort-option::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.1), transparent);
    transition: left 0.4s ease;
}
```


### src\css\style.css
```css
ackground: rgba(168, 85, 247, 0.2);
    color: var(--text-primary);
    transform: translateX(4px);
    border-left: 3px solid var(--primary-glow-color);
}

.view-toggle {
    display: flex;
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.05);
    padding: 0.25rem;
    border-radius: 0.5rem;
}
```


### src\css\style.css
```css
ackground: rgba(168, 85, 247, 0.1);
    color: white;
}

.results-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacing-2xl);
    padding: var(--spacing-lg) var(--spacing-xl);
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-lg);
    animation: fadeIn 0.8s ease-out 0.3s both;
    flex-wrap: wrap;
    gap: var(--spacing-md);
}
```


### src\css\style.css
```css
a (max-width: 768px) {
    .results-bar {
        flex-direction: column;
        text-align: center;
        padding: var(--spacing-md);
    }
```


### src\css\style.css
```css
ay: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.filter-tag {
    padding: 0.375rem 0.75rem;
    background: rgba(168, 85, 247, 0.2);
    border: 1px solid #a855f7;
    border-radius: 2rem;
    color: white;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    animation: fadeIn 0.3s ease;
}
```


### src\css\style.css
```css
ag button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1.2rem;
    line-height: 1;
    padding: 0;
    margin-left: 0.25rem;
    transition: transform 0.3s ease;
}
```


### src\css\style.css
```css
ansform: scale(1.2);
}

/* ========================================
   ENHANCED NO RESULTS STATE
   ======================================== */

.no-results {
    display: none;
    width: 100%;
    padding: 3rem 2rem;
    margin: 2rem 0;
}
```


### src\css\style.css
```css
ay: block;
    animation: fadeIn 0.6s ease;
}

.no-results-content {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 2px solid var(--glass-border);
    border-radius: 24px;
    padding: 3rem 2rem;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
}
```


### src\css\style.css
```css
argin: 0 auto 2rem;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(78, 205, 196, 0.1));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-glow-color);
    animation: pulse-glow 3s ease-in-out infinite;
}

.no-results-icon svg {
    width: 40px;
    height: 40px;
}
```


### src\css\style.css
```css
ar(--text-primary);
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--text-primary), #d1d8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.no-results-description {
    font-size: 1.125rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    line-height: 1.6;
}
```


### src\css\style.css
```css
ar(--text-primary);
    margin-bottom: 1rem;
    text-align: center;
}

.suggestions-list {
    list-style: none;
    padding: 0;
    margin: 0;
}
```


### src\css\style.css
```css
ay: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}

.clear-search-btn,
.browse-all-btn {
    padding: 0.875rem 1.5rem;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}
```


### src\css\style.css
```css
ay: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
}

.suggestion-tag {
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    color: var(--text-secondary);
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
}
```


### src\css\style.css
```css
ackground: rgba(168, 85, 247, 0.2);
    border-color: rgba(168, 85, 247, 0.4);
    color: var(--text-primary);
    transform: translateY(-2px);
}


@media (max-width: 768px) {
    .no-results-content {
        padding: 2rem 1.5rem;
    }
```


### src\css\style.css
```css
align-items: center;
    }

    .clear-search-btn,
    .browse-all-btn {
        width: 100%;
        max-width: 200px;
        justify-content: center;
    }
```


### src\css\style.css
```css
a (max-width: 480px) {
    .no-results {
        padding: 2rem 1rem;
    }
```


### src\css\style.css
```css
adding: 1.5rem 1rem;
    }

    .no-results-icon {
        width: 60px;
        height: 60px;
        margin-bottom: 1.5rem;
    }
```


### src\css\style.css
```css
ap: 0.5rem;
    }

    .suggestion-tag {
        font-size: 0.8rem;
        padding: 0.375rem 0.75rem;
    }
```


### src\css\style.css
```css
ate-columns: 1fr;
}

/* Math section - 2 cards per row with better width for index.html */
#math-tabs .courses-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 1rem;
}
```


### src\css\style.css
```css
ath section cards - larger and more prominent */
#math-tabs .course-card {
    min-height: 420px;
}
```


### src\css\style.css
```css
a (max-width: 1200px) {
    #math-tabs .courses-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        max-width: 1000px;
    }
```


### src\css\style.css
```css
a (max-width: 900px) {
    #math-tabs .courses-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-lg);
        max-width: 600px;
    }
```


### src\css\style.css
```css
ate-columns: 1fr;
        gap: var(--spacing-lg);
    }
}

/* Math section for course.html page - when maths tab is active */
.courses-grid.maths-grid {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 2.5rem !important;
    max-width: 1200px !important;
    margin-left: auto !important;
    margin-right: auto !important;
    padding: 0 1rem !important;
}
```


### src\css\style.css
```css
ards in maths section are larger */
.courses-grid.maths-grid .course-card {
    min-height: 420px !important;
}
```


### src\css\style.css
```css
a (max-width: 1200px) {
    .courses-grid.maths-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 2rem !important;
        max-width: 1000px !important;
    }
```


### src\css\style.css
```css
a (max-width: 900px) {
    .courses-grid.maths-grid {
        grid-template-columns: 1fr !important;
        gap: var(--spacing-lg) !important;
        max-width: 600px !important;
    }
```


### src\css\style.css
```css
ate-columns: 1fr !important;
        gap: var(--spacing-lg) !important;
    }
}

.course-card {
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: 16px;
    text-align: center;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    animation: fadeIn 0.6s ease both;
    cursor: pointer;
    margin-bottom: 1rem;
    height: 100%;
}
```


### src\css\style.css
```css
ard::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #a855f7, #4ecdc4);
    transform: scaleX(0);
    transition: transform var(--transition-speed) ease;
    transform-origin: left;
}
```


### src\css\style.css
```css
ader {
    width: 200px;
    height: auto;
    min-height: 150px;
}
```


### src\css\style.css
```css
align: left;
}

.course-header {
    position: relative;

    height: 200px !important;
    min-height: 200px !important;

    padding: 0 !important;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.05), rgba(78, 205, 196, 0.05));
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;

    overflow: hidden !important;
    border-bottom: 1px solid var(--glass-border);
    transition: all 0.4s ease;
}
```


### src\css\style.css
```css
absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.badge {
    padding: 0.375rem 0.75rem;
    background: var(--glass-bg-dark);
    backdrop-filter: blur(10px);
    border-radius: 2rem;
    font-size: 0.75rem;
    font-weight: 700;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
}
```


### src\css\style.css
```css
ackground: linear-gradient(135deg, #a855f7, #4ecdc4);
}

.card-content {
    padding: 1.5rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    z-index: 1;
    gap: 1rem;
    min-height: 280px;
    justify-content: space-between;
}
```


### src\css\style.css
```css
a (max-width: 768px) {
    .card-content {
        padding: 1.25rem;
        min-height: 260px;
    }
```


### src\css\style.css
```css
ard-icon svg,
.course-icon svg,
.course-header svg {
    display: none !important;
    visibility: hidden !important;
    width: 0 !important;
    height: 0 !important;
    opacity: 0 !important;
}
```


### src\css\style.css
```css
ard .course-header img,
.course-card .course-header .course-image,
.course-header > img,
.course-header > .course-image {
    width: 200px !important;
    height: 200px !important;
    min-width: 200px !important;
    min-height: 200px !important;
    max-width: 200px !important;
    max-height: 200px !important;
    object-fit: contain !important;
    border-radius: 16px !important;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05)) !important;
    padding: 20px !important;
    margin: 0 auto !important;
    display: block !important;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3),
                0 0 0 1px rgba(255, 255, 255, 0.1) inset !important;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.2)) !important;
    position: relative !important;
    z-index: 2 !important;
    flex-shrink: 0 !important;
}
```


### src\css\style.css
```css
adow: 0 20px 60px rgba(236, 72, 153, 0.6),
                0 0 0 2px rgba(236, 72, 153, 0.3) inset !important;
    filter: drop-shadow(0 12px 40px rgba(236, 72, 153, 0.7)) brightness(1.15) !important;
}


/* @media (max-width: 768px) {
    .course-card .course-header img,
    .course-card .course-header .course-image,
    .course-header > img,
    .course-header > .course-image {
        width: 160px !important;
        height: 160px !important;
        min-width: 160px !important;
        min-height: 160px !important;
        max-width: 160px !important;
        max-height: 160px !important;
        padding: 15px !important;
    }
```


### src\css\style.css
```css
ader {
        min-height: 220px !important;
        padding: 25px 18px !important;
    }
```


### src\css\style.css
```css
a (max-width: 480px) {
    .course-card .course-header img,
    .course-card .course-header .course-image,
    .course-header > img,
    .course-header > .course-image {
        width: 140px !important;
        height: 140px !important;
        min-width: 140px !important;
        min-height: 140px !important;
        max-width: 140px !important;
        max-height: 140px !important;
        padding: 12px !important;
    }
```


### src\css\style.css
```css
ader {
        min-height: 200px !important;
        padding: 20px 15px !important;
    }
```


### src\css\style.css
```css
AGE STYLES === */


.course-header .course-image {
    width: 100% !important;
    height: 100% !important;


    object-fit: cover !important;


    padding: 0 !important;
    border-radius: 0 !important;
    background: none !important;
    box-shadow: none !important;


    transition: transform 0.4s ease !important;
}
```


### src\css\style.css
```css
ard-title {
    font-size: 1.375rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0;
    line-height: 1.3;
    letter-spacing: -0.01em;
}
```


### src\css\style.css
```css
ard-description {
    font-size: 0.9rem;
    color: var(--text-muted);
    flex-grow: 1;
    margin-bottom: 0;
    line-height: 1.5;
    font-weight: 400;
}
```


### src\css\style.css
```css
ard-skills {
    list-style: none;
    padding: 1.25rem 0;
    margin: 1.5rem 0;
    text-align: left;
    font-size: 0.9rem;
    color: #cbd5e1;
    border-top: 1px solid var(--glass-border);
    border-bottom: 1px solid var(--glass-border);
}
```


### src\css\style.css
```css
argin-bottom: 0;
}

.card-skills li::before {
    content: '';
    margin-right: 0.75rem;
    font-weight: 900;
    color: #4ecdc4;
    background: rgba(78, 205, 196, 0.2);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: inline-grid;
    place-items: center;
    font-size: 0.8rem;
    flex-shrink: 0;
}
```


### src\css\style.css
```css
ackground: rgba(236, 72, 153, 0.2);
}

.course-meta {
    display: flex;
    gap: 1.5rem;
    margin: 1rem 0;
    padding: 1rem 0;
    border-top: 1px solid var(--glass-border);
}
```


### src\css\style.css
```css
ay: flex;
    align-items: center;
    gap: 0.5rem;
    color: #CBD5E1;
    font-size: 0.9rem;
}

.meta-icon {
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}
```


### src\css\style.css
```css
a-icon svg {
    width: 14px;
    height: 14px;
    color: currentColor;
}
```


### src\css\style.css
```css
ard-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    padding-top: 1rem;
}
```


### src\css\style.css
```css
ation: line-through;
}

.card-button-container {
    margin-top: auto;
    padding-top: 0.5rem;
}
```


### src\css\style.css
```css
ard-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1.875rem;
    border-radius: 0.75rem;
    text-decoration: none;
    font-weight: 600;
    color: #fff;
    transition: all var(--transition-speed) ease;
    background-size: 200% auto;
    position: relative;
    overflow: hidden;
    border: none;
}
```


### src\css\style.css
```css
ackground-position: right center;
    transform: scale(1.05) translateY(-2px);
    box-shadow: 0 5px 25px var(--glow-color);
}


.card-actions {
    display: flex;
    gap: 0.75rem;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--glass-border);
}
```


### src\css\style.css
```css
ackground: rgba(255, 255, 255, 0.2);
    border-color: var(--glass-hover-border);
    transform: translateY(-2px);
}

.buy-now-btn {
    flex: 1.5;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    border-radius: 0.75rem;
    border: none;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    transition: all var(--transition-speed) ease;
    background-size: 200% auto;
    position: relative;
    overflow: hidden;
    font-size: 0.9rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}
```


### src\css\style.css
```css
acity: 0.9;
}

.buy-now-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
    pointer-events: none;
}
```


### src\css\style.css
```css
argin-bottom: 0;
}


.course-pricing-section {
    padding: 4rem 2rem;
    background: var(--glass-bg-dark);
    margin-top: 3rem;
}
```


### src\css\style.css
```css
ainer {
    max-width: 1200px;
    margin: 0 auto;
}
```


### src\css\style.css
```css
align: center;
    color: #94a3b8;
    font-size: 1.1rem;
    margin-bottom: 3rem;
}

.pricing-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    max-width: 900px;
    margin: 0 auto;
}
```


### src\css\style.css
```css
ard {
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: 1.5rem;
    padding: 2.5rem;
    position: relative;
    transition: all 0.4s ease;
}
```


### src\css\style.css
```css
a855f7;
    box-shadow: 0 0 40px rgba(168, 85, 247, 0.2);
}

.featured-badge {
    position: absolute;
    top: -15px;
    right: 20px;
    background: linear-gradient(135deg, #a855f7, #4ecdc4);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
}
```


### src\css\style.css
```css
a3b8;
    font-size: 0.95rem;
}

.pricing-amount {
    display: flex;
    align-items: baseline;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--glass-border);
}
```


### src\css\style.css
```css
argin-bottom: 2rem;
}

.pricing-features li {
    padding: 0.75rem 0;
    color: #CBD5E1;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
}
```


### src\css\style.css
```css
ay: block;
    width: 100%;
    padding: 1.25rem 2rem;
    border-radius: 0.875rem;
    text-align: center;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.1rem;
    color: white;
    transition: all var(--transition-speed) ease;
    background-size: 200% auto;
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border: 2px solid transparent;
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.3);
}

.pricing-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
    pointer-events: none;
}
```


### src\css\style.css
```css
ature-card {
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border-radius: 1.5rem;
    border: 1px solid var(--glass-border);
    padding: 3.5rem;
    display: flex;
    align-items: center;
    gap: 3.5rem;
    box-shadow: var(--glass-shadow);
    overflow: hidden;
    transition: all var(--transition-speed) ease;
    animation: fadeIn 1s ease both;
}
```


### src\css\style.css
```css
argin-bottom: 1rem;
    animation: fadeIn 1s ease 0.5s both;
}

.feature-text h3 {
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    font-weight: 700;
    color: #fff;
    margin-bottom: 1.5rem;
    line-height: 1.3;
}
```


### src\css\style.css
```css
ature-text p {
    color: #94a3b8;
    max-width: 500px;
}
```


### src\css\style.css
```css
ay: grid;
    place-items: center;
    animation: slideInRight 1s ease 0.3s both;
}

.feature-visual svg,
.feature-visual img {
    width: 100%;
    max-width: 350px;
    animation: float 4s ease-in-out infinite;
}
```


### src\css\style.css
```css
ansform: rotateY(10deg) rotateX(5deg) scale(1.05);
}

.certificate-features {
    list-style: none;
    padding-left: 0;
    margin-top: 2rem;
}
```


### src\css\style.css
```css
ansform: translateX(5px);
}

.certificate-features li::before {
    content: '';
    margin-right: 12px;
    font-weight: 900;
    color: #4ecdc4;
    background: rgba(78, 205, 196, 0.2);
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: inline-grid;
    place-items: center;
}
```


### src\css\style.css
```css
ay: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.feature-item {
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: 1.25rem;
    padding: 2rem;
    text-align: center;
    transition: all var(--transition-speed) ease;
    animation: slideInUp 0.8s ease both;
    position: relative;
    overflow: hidden;
}
```


### src\css\style.css
```css
ature-item::before {
    content: '';
    position: absolute;
    top: -100%;
    left: -100%;
    width: 300%;
    height: 300%;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 40%);
    transition: all 0.6s ease;
}
```


### src\css\style.css
```css
ansform: var(--card-hover-transform);
    background: var(--glass-hover-bg-light);
    border-color: var(--glass-hover-border);
    box-shadow: var(--glass-hover-shadow);
}

.feature-icon {
    height: 50px;
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 1;
}
```


### src\css\style.css
```css
ature-icon svg {
    height: 100%;
    width: auto;
    stroke: #a855f7;
    transition: all 0.4s ease;
}
```


### src\css\style.css
```css
ansform: var(--card-hover-transform);
    background: var(--glass-hover-bg-light);
    border-color: var(--glass-hover-border);
    box-shadow: 0 15px 40px rgba(168, 85, 247, 0.2);
}

.testimonial-content {
    padding: 2rem;
}
```


### src\css\style.css
```css
al-content blockquote {
    font-style: italic;
    color: #cbd5e1;
    border-left: 3px solid var(--primary-glow-color);
    padding-left: 1.5rem;
    margin-bottom: 1.5rem;
    transition: padding-left 0.3s ease;
}
```


### src\css\style.css
```css
al-card:hover blockquote {
    padding-left: 2rem;
}
```


### src\css\style.css
```css
a3b8;
}

.parent-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 1rem;
    border: 2px solid var(--glass-border);
    float: left;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
ar(--primary-glow-color);
    transform: scale(1.1);
}

.parent-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```


### src\css\style.css
```css
allery-wrapper {
    position: relative;
    width: 100%;
}
```


### src\css\style.css
```css
allery {
    display: flex;
    gap: 2rem;
    padding: 2rem 10px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: thin;
    scrollbar-color: var(--primary-glow-color) transparent;
}
```


### src\css\style.css
```css
allery::-webkit-scrollbar {
    height: 8px;
}
```


### src\css\style.css
```css
ackground: linear-gradient(90deg, #a855f7, #4ecdc4);
    border-radius: 4px;
}

.project-card {
    flex: 0 0 400px;
    height: 250px;
    border-radius: 1.25rem;
    overflow: hidden;
    position: relative;
    scroll-snap-align: center;
    border: 1px solid var(--glass-border);
    transition: all 0.4s ease;
    animation: fadeIn 1s ease both;
}
```


### src\css\style.css
```css
ansform: scale(1.05) translateY(-5px);
    box-shadow: 0 15px 50px var(--primary-glow-color);
    z-index: 10;
    border-color: var(--glass-hover-border);
}

.project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
}
```


### src\css\style.css
```css
ansform: scale(1.15);
}

.project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.4s ease;
    display: flex;
    align-items: flex-end;
    padding: 1.5rem;
}
```


### src\css\style.css
```css
alic;
    color: #94a3b8;
}


.roadmap-timeline {
    position: relative;
    padding: 20px 0;
    max-width: 900px;
    margin: 0 auto;
}
```


### src\css\style.css
```css
admap-timeline::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 4px;
    background: linear-gradient(to bottom, var(--primary-glow-color), var(--secondary-glow-color));
    transform: translateX(-50%);
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
}
```


### src\css\style.css
```css
admap-item {
    display: flex;
    justify-content: flex-end;
    padding-right: 30px;
    position: relative;
    margin-bottom: 50px;
    width: 50%;
    animation: slideInLeft 0.8s ease both;
}
```


### src\css\style.css
```css
admap-item:nth-child(even) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 0;
    margin-left: 50%;
    animation: slideInRight 0.8s ease both;
}
```


### src\css\style.css
```css
admap-item::before {
    content: '';
    position: absolute;
    top: 15px;
    right: -13px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #010103;
    border: 4px solid #a855f7;
    box-shadow: 0 0 15px var(--primary-glow-color);
    z-index: 1;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
auto;
    left: -13px;
}

.roadmap-content {
    background: var(--glass-bg-dark);
    border: 1px solid var(--glass-border);
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: var(--glass-shadow);
    transition: all var(--transition-speed) ease;
    max-width: 400px;
}
```


### src\css\style.css
```css
ay: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 15px;
}

.roadmap-skill {
    background: rgba(168, 85, 247, 0.1);
    border: 1px solid rgba(168, 85, 247, 0.3);
    border-radius: 20px;
    padding: 5px 12px;
    font-size: 0.8rem;
    color: #cbd5e1;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
ackground: rgba(168, 85, 247, 0.2);
    transform: scale(1.05);
}


.faq-container {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
```


### src\css\style.css
```css
ar(--glass-hover-border);
    box-shadow: 0 5px 20px rgba(168, 85, 247, 0.1);
}

.faq-question {
    padding: 1.25rem 1.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
aq-question:hover {
    color: #a855f7;
    padding-left: 2rem;
}
```


### src\css\style.css
```css
ansition: transform var(--transition-speed) ease;
}

.faq-answer {
    padding: 0 1.5rem;
    max-height: 0;
    overflow: hidden;
    transition: all 0.5s ease-out;
    opacity: 0;
}
```


### src\css\style.css
```css
aq-answer p {
    padding-bottom: 1.25rem;
    color: #94a3b8;
}
```


### src\css\style.css
```css
ansform: rotate(45deg);
    color: #a855f7;
}

.faq-item.active .faq-answer {
    max-height: 300px;
    opacity: 1;
}
```


### src\css\style.css
```css
a-banner {
    background: linear-gradient(135deg, rgba(138, 43, 226, 0.9), rgba(74, 0, 224, 0.9));
    border-radius: 1.5rem;
    padding: 3rem;
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(138, 43, 226, 0.4);
    transition: all 0.4s ease;
    animation: fadeIn 1s ease both;
}
```


### src\css\style.css
```css
ansform: translateY(-5px);
    box-shadow: 0 15px 50px rgba(138, 43, 226, 0.5);
}

.cta-banner::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 40%);
    animation: subtle-glow 10s ease-in-out infinite;
}
```


### src\css\style.css
```css
argin-bottom: 1rem;
    font-weight: 700;
}

.cta-text p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.1rem;
    max-width: 600px;
}
```


### src\css\style.css
```css
ackground: #f0f0f0;
    transform: scale(1.1) translateY(-3px);
}


.contact-container {
    max-width: 700px;
    margin: 0 auto;
    background: var(--glass-bg-light);
    border: 1px solid var(--glass-border);
    border-radius: 1.5rem;
    padding: 3rem;
    box-shadow: var(--glass-shadow);
    transition: all 0.4s ease;
    animation: fadeIn 1s ease both;
}
```


### src\css\style.css
```css
argin-bottom: 1.25rem;
    animation: slideInUp 0.8s ease both;
}

.contact-form .input-field {
    width: 100%;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid var(--glass-border);
    border-radius: 0.75rem;
    color: #fff;
    font-size: 1rem;
    transition: all var(--transition-speed) ease;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}
```


### src\css\style.css
```css
ar(--primary-glow-color);
    box-shadow: 0 0 20px rgba(168, 85, 247, 0.3);
    background: rgba(0, 0, 0, 0.4);
    transform: translateY(-2px);
}

.contact-form textarea.input-field {
    resize: vertical;
    min-height: 120px;
}
```


### src\css\style.css
```css
act-form .submit-button {
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: 0.75rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    background-image: linear-gradient(to right, #8A2BE2 0%, #4A00E0 51%, #8A2BE2 100%);
    background-size: 200% auto;
    transition: all var(--transition-speed) ease;
    position: relative;
    overflow: hidden;
}
```


### src\css\style.css
```css
act-form .submit-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s ease;
}
```


### src\css\style.css
```css
ackground-position: right center;
    box-shadow: 0 10px 30px var(--primary-glow-color);
    transform: translateY(-3px);
}

/* ========================================
   TRY CODING SECTION - ENHANCED STYLES
   ======================================== */

/* Try Coding Section Container */
.try-coding-section {
    position: relative;
    padding: 4rem 2rem;
}
```


### src\css\style.css
```css
absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    filter: blur(20px);
    opacity: 0.5;
    background: linear-gradient(135deg, #a855f7, #4ecdc4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Error Messages */
.error-message {
    display: none;
    color: #ff6b6b;
    font-size: 0.875rem;
    margin-top: 0.5rem;
    padding-left: 0.5rem;
    animation: shake 0.3s ease;
}
```


### src\css\style.css
```css
ay: inline-block;
}

.spinner {
    animation: rotate 1s linear infinite;
    width: 24px;
    height: 24px;
}
```


### src\css\style.css
```css
asharray: 90, 150;
        stroke-dashoffset: -124;
    }
}

/* Form Feedback (Success/Error Messages) */
.form-feedback {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--glass-bg-dark);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: 1.5rem;
    padding: 2.5rem;
    max-width: 500px;
    width: 90%;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    z-index: 10000;
    text-align: center;
    animation: feedbackSlideIn 0.4s ease;
}
```


### src\css\style.css
```css
ackground: rgba(0, 0, 0, 0.7);
    z-index: -1;
    animation: fadeIn 0.3s ease;
}

/* Feedback Icon */
.feedback-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 1.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    animation: scaleIn 0.5s ease;
}
```


### src\css\style.css
```css
a(255, 107, 107, 0.5);
}

/* Feedback Message */
.feedback-message {
    color: var(--text-primary);
    font-size: 1.125rem;
    line-height: 1.6;
    margin: 0;
}
```


### src\css\style.css
```css
ack Close Button */
.feedback-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border: none;
    color: var(--text-secondary);
    font-size: 2rem;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
ackground: rgba(255, 255, 255, 0.1);
    color: var(--text-primary);
    transform: rotate(90deg);
}

/* ========================================
   WHATSAPP STICKY BUTTON
   ======================================== */

.whatsapp-sticky-button {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    background: #25D366;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
    z-index: 9999;
    transition: all 0.3s ease;
    text-decoration: none;
    animation: float 3s ease-in-out infinite;
}
```


### src\css\style.css
```css
ansform: scale(1.1) translateY(-5px);
    box-shadow: 0 8px 20px rgba(37, 211, 102, 0.6);
    animation: none;
}

.whatsapp-icon {
    width: 32px;
    height: 32px;
    color: white;
}
```


### src\css\style.css
```css
atsApp Tooltip */
.whatsapp-tooltip {
    position: absolute;
    right: 75px;
    background: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 10px 16px;
    border-radius: 8px;
    white-space: nowrap;
    font-size: 0.875rem;
    font-weight: 500;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
}
```


### src\css\style.css
```css
acity: 1;
}

/* Pulse Animation for WhatsApp Button */
.whatsapp-sticky-button::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #25D366;
    opacity: 0.7;
    animation: pulse 2s ease-out infinite;
}
```


### src\css\style.css
```css
ansform: translate(-50%, -50%) scale(1.5);
        opacity: 0;
    }
}

/* ========================================
   RESPONSIVE DESIGN FOR TRY CODING SECTION
   ======================================== */

@media (max-width: 768px) {
    .try-coding-section {
        padding: 3rem 1rem;
    }
```


### src\css\style.css
```css
act-container {
        padding: 2rem 1.5rem;
    }
```


### src\css\style.css
```css
ack {
        padding: 2rem;
        width: 95%;
    }
```


### src\css\style.css
```css
ack-icon {
        width: 60px;
        height: 60px;
        font-size: 2rem;
    }
```


### src\css\style.css
```css
atsapp-sticky-button {
        bottom: 20px;
        right: 20px;
        width: 56px;
        height: 56px;
    }
```


### src\css\style.css
```css
atsapp-icon {
        width: 28px;
        height: 28px;
    }
```


### src\css\style.css
```css
argin-bottom: 2rem;
    }

    .contact-container {
        padding: 1.5rem 1rem;
    }
```


### src\css\style.css
```css
argin-bottom: 1rem;
    }

    .form-feedback {
        padding: 1.5rem;
    }
```


### src\css\style.css
```css
andled in main implementation above */


.about-hero {
    background: var(--glass-bg-dark);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border-radius: 1.5rem;
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow);
    padding: 4rem;
    position: relative;
    overflow: hidden;
    transition: all var(--transition-speed) ease;
}
```


### src\css\style.css
```css
about-hero::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 50%);
    z-index: 0;
    animation: subtle-glow 15s ease-in-out infinite;
}
```


### src\css\style.css
```css
ative;
    z-index: 1;
    text-align: center;
}

.hero-content h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    background: linear-gradient(135deg, #ffffff, #d1d8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 40px rgba(255, 255, 255, 0.2);
    margin-bottom: 1.5rem;
    line-height: 1.2;
}
```


### src\css\style.css
```css
ay: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
}

.content-card {
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: 1.5rem;
    padding: 2.5rem;
    transition: all var(--transition-speed) var(--transition-timing);
    position: relative;
    overflow: hidden;
    box-shadow: var(--glass-shadow);
}
```


### src\css\style.css
```css
ard::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #a855f7, #4ecdc4);
    transform: scaleX(0);
    transition: transform 0.4s ease;
    transform-origin: left;
}
```


### src\css\style.css
```css
argin-bottom: 1rem;
    position: relative;
}

.content-card p {
    font-size: 1rem;
    color: #cbd5e1;
    line-height: 1.8;
}
```


### src\css\style.css
```css
ats-section {
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border-radius: 1.5rem;
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow);
    padding: 3rem;
}
```


### src\css\style.css
```css
ay: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-top: 2rem;
}

.stat-item {
    text-align: center;
    padding: 2rem;
    background: var(--glass-bg-dark);
    backdrop-filter: blur(var(--glass-blur));
    border-radius: 1rem;
    border: 1px solid var(--glass-border);
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
argin-top: 1rem;
}

.timeline {
    position: relative;
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 0;
}
```


### src\css\style.css
```css
argin-right: auto;
    text-align: right;
}

.timeline-marker {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #8A2BE2, #4A00E0);
    border: 3px solid rgba(168, 85, 247, 0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 700;
    font-size: 1.2rem;
    box-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
    z-index: 2;
}
```


### src\css\style.css
```css
argin-bottom: 0.8rem;
    font-weight: 700;
}

.timeline-content p {
    font-size: 0.95rem;
    color: #cbd5e1;
    line-height: 1.7;
}
```


### src\css\style.css
```css
ay: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 2rem;
}

.curriculum-card {
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: 1.3rem;
    padding: 2rem;
    box-shadow: var(--glass-shadow);
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
}
```


### src\css\style.css
```css
ard::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, transparent, #a855f7, #4ecdc4, transparent);
    transition: left 0.6s ease;
}
```


### src\css\style.css
```css
argin-bottom: 1.5rem;
}

.curriculum-list {
    list-style: none;
    margin: 0;
    padding: 0;
}
```


### src\css\style.css
```css
ay: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 2rem;
}

.about-page .testimonial-card {
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: 1.3rem;
    padding: 2rem;
    box-shadow: var(--glass-shadow);
    transition: all 0.4s ease;
    position: relative;
}
```


### src\css\style.css
```css
ansform: translateY(-8px);
    border-color: var(--glass-hover-border);
    box-shadow: 0 20px 50px rgba(168, 85, 247, 0.3);
}

.testimonial-text {
    font-size: 0.95rem;
    color: #cbd5e1;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-style: italic;
}
```


### src\css\style.css
```css
ay: flex;
    align-items: center;
    gap: 1rem;
}

.author-avatar {
    width: 45px;
    height: 45px;
    background: linear-gradient(135deg, #a855f7, #4ecdc4);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
}
```


### src\css\style.css
```css
ay: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
}

.value-card {
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    padding: 2.5rem;
    border-radius: 1.5rem;
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow);
    transition: all var(--transition-speed) ease;
    position: relative;
    overflow: hidden;
}
```


### src\css\style.css
```css
alue-card::before {
    content: '';
    position: absolute;
    top: -100%;
    left: -100%;
    width: 300%;
    height: 300%;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 40%);
    transition: all 0.6s ease;
}
```


### src\css\style.css
```css
argin-bottom: 1rem;
    font-weight: 700;
    position: relative;
    z-index: 1;
}

.value-card p {
    font-size: 1rem;
    color: #94a3b8;
    line-height: 1.7;
    position: relative;
    z-index: 1;
}
```


### src\css\style.css
```css
adding: 4rem 0 1.5rem 0;
    background: rgba(4, 4, 8, 0.95);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    margin-top: 5rem;
    border-top: 1px solid var(--glass-border);
    position: relative;
    z-index: 10;
}

.footer-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.25rem;
}
```


### src\css\style.css
```css
ay: flex;
    gap: 1rem;
}

.social-links a {
    display: inline-grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    color: #cbd5e1;
    transition: all var(--transition-speed) ease;
    border: 1px solid var(--glass-border);
}
```


### src\css\style.css
```css
ackground: var(--primary-glow-color);
    color: #fff;
    transform: translateY(-5px) rotate(360deg);
    border-color: transparent;
    box-shadow: 0 5px 20px var(--primary-glow-color);
}

.social-links a svg {
    width: 18px;
    height: 18px;
}
```


### src\css\style.css
```css
acity: 1;
}

.footer-links a:hover {
    color: #fff;
    padding-left: 10px;
}
```


### src\css\style.css
```css
ate-columns: repeat(2, 1fr);
    }
}

/* ========================================
   MOBILE NAVIGATION MENU (900px and below)
   Z-index: 9998 (below mobile button 10000, below navbar 9999)
   ======================================== */
@media (max-width: 900px) {
    .nav-menu {
        display: none;
        flex-direction: column;
        position: fixed;
        top: 70px;
        left: 0;
        width: 100%;
        height: calc(100vh - 70px);
        background: rgba(10, 10, 20, 0.98);
        backdrop-filter: blur(30px);
        -webkit-backdrop-filter: blur(30px);
        border: none;
        border-top: 1px solid var(--glass-border);
        padding: 2rem 1.5rem;
        gap: 0.75rem;
        overflow-y: auto;
        z-index: 9998;
        /* Below mobile button and navbar */
    }
```


### src\css\style.css
```css
ay: flex;
        animation: slideInUp 0.4s ease;
    }

    .nav-item {
        width: 100%;
    }
```


### src\css\style.css
```css
av-link {
        width: 100%;
        padding: 1rem 1.25rem;
        text-align: left;
        font-size: 1.1rem;
        border: 1px solid rgba(168, 85, 247, 0.2);
        background: rgba(168, 85, 247, 0.05);
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 44px;
        /* Ensure touch target minimum */
        transition: all 0.2s ease;
        /* Smooth feedback */
    }
```


### src\css\style.css
```css
ackground: rgba(168, 85, 247, 0.2);
        border-color: rgba(168, 85, 247, 0.4);
        transform: scale(0.98);
    }

    .mobile-menu-btn {
        display: flex !important;
        flex-direction: column;
        justify-content: center;
        /* Changed from space-between for better centering */
        gap: 5px;
        /* Space between hamburger lines */
        width: 44px;
        /* Increased from 32px for better touch target */
        height: 44px;
        /* Increased from 24px for better touch target */
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 10px;
        /* Added padding for larger clickable area */
        z-index: 10000;
        /* Above navbar (9999) to ensure clickability */
        transition: all 0.2s ease;
        /* Smooth feedback */
    }
```


### src\css\style.css
```css
ackground: rgba(168, 85, 247, 0.1);
        border-radius: 8px;
        transform: scale(0.95);
    }

    .mobile-menu-btn span {
        display: block;
        width: 24px;
        /* Fixed width for hamburger lines */
        height: 3px;
        background: white;
        border-radius: 3px;
        transition: all 0.3s var(--transition-timing);
    }
```


### src\css\style.css
```css
ansform: rotate(-45deg) translate(8px, -8px);
    }

    .dropdown-content {
        position: static;
        transform: none;
        opacity: 1;
        visibility: visible;
        background: rgba(168, 85, 247, 0.1);
        border: 1px solid rgba(168, 85, 247, 0.2);
        border-radius: 0.75rem;
        box-shadow: none;
        display: none;
        padding: 0.5rem;
        margin-top: 0.5rem;
    }
```


### src\css\style.css
```css
ay: block;
    }

    .dropdown-item {
        padding: 0.875rem 1rem;
        font-size: 1rem;
        border-radius: 0.5rem;
    }
```


### src\css\style.css
```css
a-button {
        width: 100%;
        justify-content: center;
        padding: 1rem;
        font-size: 1.1rem;
    }
```


### src\css\style.css
```css
a (max-width: 800px) {
    .feature-card {
        flex-direction: column;
        padding: 2.5rem;
    }
```


### src\css\style.css
```css
align: center;
    }
}

@media (max-width: 768px) {


    .hero-section {
        flex-direction: column;
        padding: 2.5rem;
        text-align: center;
    }
```


### src\css\style.css
```css
admap-item,
    .roadmap-item:nth-child(even) {
        width: 100%;
        padding-left: 50px;
        padding-right: 0;
        margin-left: 0;
    }
```


### src\css\style.css
```css
ap: 1rem;
    }


    .about-hero {
        padding: 2.5rem;
    }
```


### src\css\style.css
```css
ard {
        padding: 2rem;
    }
```


### src\css\style.css
```css
ats-section {
        padding: 2rem;
    }
```


### src\css\style.css
```css
ate-columns: 1fr;
    }

    .timeline-content {
        padding: 1.5rem;
    }
```


### src\css\style.css
```css
ate-columns: 1fr;
    }

    .filter-sidebar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1000;
        transform: translateX(-100%);
        border-radius: 0;
        max-width: none;
        height: 100%;
        overflow-y: auto;
    }
```


### src\css\style.css
```css
ap: 1rem;
    }

    .search-box {
        width: 100%;
    }
```


### src\css\style.css
```css
ay: none;
    }

    .sort-btn {
        width: 100%;
        justify-content: center;
        padding: 1rem 1.5rem;
        font-size: 1rem;
    }
```


### src\css\style.css
```css
auto;
        width: 100%;
        max-width: 300px;
        margin: 0 auto;
        top: calc(100% + 1rem);
    }

    .sort-option {
        padding: 1rem 1.25rem;
        font-size: 1rem;
        text-align: center;
    }
```


### src\css\style.css
```css
ap: var(--spacing-sm);
    }

    .view-course-btn,
    .buy-now-btn {
        padding: 0.75rem 1rem;
        font-size: 0.9rem;
    }
```


### src\css\style.css
```css
asis: 90%;
    }
}

@media (max-width: 480px) {
    main.courses-page {
        padding: 20px 10px;
    }
```


### src\css\style.css
```css
ard-content {
        padding: 1rem;
    }
```


### src\css\style.css
```css
ard-button {
        padding: 0.625rem 1.25rem;
        font-size: 0.9rem;
    }
```


### src\css\style.css
```css
ap: var(--spacing-sm);
    }

    .view-course-btn,
    .buy-now-btn {
        flex: 1;
        padding: 0.875rem 1rem;
        font-size: 0.9rem;
    }
```


### src\css\style.css
```css
age main {
    padding: 120px 20px 20px;
}
```


### src\css\style.css
```css
argin-bottom: 4rem;

    animation: slideInUp 0.8s ease-out 0.4s both;
}

.tabs-container {
    display: flex;
    position: relative;
    background: var(--glass-bg-light);
    border: 1px solid var(--glass-border);
    border-radius: 1rem;
    padding: 0.5rem;
    box-shadow: var(--glass-shadow);
    max-width: fit-content;

    margin: 0 auto 2rem;

}
```


### src\css\style.css
```css
ab-button {
    background: none;
    border: none;
    padding: 0.75rem 1.5rem;
    color: #94a3b8;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 0.875rem;
    cursor: pointer;
    transition: color 0.4s ease;
    position: relative;
    z-index: 2;
    white-space: nowrap;
}
```


### src\css\style.css
```css
ab-glider {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    height: calc(100% - 1rem);
    border-radius: 0.875rem;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.5), rgba(78, 205, 196, 0.5));
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
}
```


### src\css\style.css
```css
align: center;
    margin-top: 3rem;
}

.view-more-button {
    display: inline-block;
    padding: 0.875rem 2.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    background: var(--glass-bg-light);
    border: 1px solid var(--glass-border);
    border-radius: 50px;

    box-shadow: var(--glass-shadow);
    transition: all var(--transition-speed) var(--transition-timing);
    position: relative;
    overflow: hidden;
}
```


### src\css\style.css
```css
AB BUTTON OPTIMIZATION
   Reduced min-width and optimized spacing to prevent squeezing
   ======================================== */
@media (max-width: 768px) {
    .tabs-wrapper {
        margin-bottom: 3rem;
        padding: 0 1rem;
        /* Increased from 0.5rem for better spacing */
    }
```


### src\css\style.css
```css
abs-container {
        overflow-x: auto;
        overflow-y: hidden;
        padding: 0.75rem 0.5rem;
        /* Increased vertical padding */
        padding-bottom: 15px;
        display: flex;
        flex-wrap: nowrap;
        gap: 0.75rem;
        /* Increased from 0.5rem for better spacing */
        -webkit-overflow-scrolling: touch;
        scroll-snap-type: x proximity;
        max-width: 100%;
        margin: 0 auto 2rem;
        scrollbar-width: thin;
        scrollbar-color: var(--primary-glow-color) rgba(0, 0, 0, 0.2);
    }
```


### src\css\style.css
```css
ab-button {
        flex: 0 0 auto;
        min-width: 140px;
        /* Reduced from 150px to prevent squeezing */
        max-width: 180px;
        /* Added max-width constraint */
        padding: 0.875rem 1.25rem;
        /* Optimized padding */
        font-size: 0.95rem;
        /* Slightly smaller for better fit */
        white-space: nowrap;
        scroll-snap-align: center;
        background: rgba(168, 85, 247, 0.1);
        border: 1px solid rgba(168, 85, 247, 0.3);
        min-height: 44px;
        /* Ensure touch target minimum */
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        /* Smooth feedback */
    }
```


### src\css\style.css
```css
ackground: rgba(168, 85, 247, 0.3);
        border-color: rgba(168, 85, 247, 0.5);
        box-shadow: 0 0 15px rgba(168, 85, 247, 0.4);
    }

    .tabs-container::-webkit-scrollbar {
        height: 8px;
    }
```


### src\css\style.css
```css
ackground: rgba(255, 165, 0, 0.3);
        border-color: rgba(255, 165, 0, 0.5);
        box-shadow: 0 0 15px rgba(255, 165, 0, 0.4);
    }
}

/* ========================================
   EXTRA SMALL SCREENS (480px and below)
   Further optimizations for iPhone SE and similar devices
   ======================================== */
@media (max-width: 480px) {
    .tabs-wrapper {
        padding: 0 0.75rem;
    }
```


### src\css\style.css
```css
abs-container {
        padding: 0.5rem 0.25rem;
        gap: 0.5rem;
    }
```


### src\css\style.css
```css
ab-button {
        min-width: 120px;
        /* Further reduced for small screens */
        max-width: 160px;
        padding: 0.75rem 1rem;
        /* Reduced padding */
        font-size: 0.9rem;
        /* Smaller font */
    }
```


### src\css\style.css
```css
ath tabs for small screens */
    #math-tabs .tab-button {
        min-width: 120px;
        padding: 0.75rem 1rem;
        font-size: 0.9rem;
    }
```


### src\css\style.css
```css
adjustments for very small screens */
    .mobile-menu-btn {
        width: 40px;
        height: 40px;
        padding: 8px;
    }
```


### src\css\style.css
```css
an {
        width: 22px;
        /* Slightly smaller hamburger lines */
    }
```


### src\css\style.css
```css
ay: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    max-width: 900px;
    margin: 3rem auto 0;
}

.pricing-card {
    background: var(--glass-bg-light);
    border: 1px solid var(--glass-border);
    border-radius: 1.5rem;
    padding: 2.5rem;
    text-align: center;
    transition: all var(--transition-speed) var(--transition-timing);
    position: relative;
    overflow: hidden;
}
```


### src\css\style.css
```css
ansform: scale(1.08) translateY(-10px);
    box-shadow: 0 20px 50px var(--primary-glow-color);
}

.popular-badge {
    position: absolute;
    top: 1.5rem;
    right: -50px;
    background: linear-gradient(135deg, #a855f7, #8A2BE2);
    color: white;
    padding: 0.5rem 4rem;
    transform: rotate(45deg);
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 1px;
}
```


### src\css\style.css
```css
argin-bottom: 1.5rem;
}

.plan-price {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #ffffff, #d1d8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
}
```


### src\css\style.css
```css
argin: 2rem 0;
    text-align: left;
    color: #cbd5e1;
}

.plan-features li {
    padding-left: 1.75rem;
    position: relative;
    margin-bottom: 1rem;
}
```


### src\css\style.css
```css
an-features li::before {
    content: '';
    position: absolute;
    left: 0;
    color: #4ecdc4;
    background: rgba(78, 205, 196, 0.2);
    border-radius: 50%;
    width: 22px;
    height: 22px;
    display: grid;
    place-items: center;
    font-size: 0.8rem;
    font-weight: bold;
}
```


### src\css\style.css
```css
an-button {
    display: block;
    width: 100%;
    padding: 1rem;
    border-radius: 0.75rem;
    text-decoration: none;
    font-weight: 600;
    color: #fff;
    transition: all var(--transition-speed) ease;
    background: var(--glass-bg-dark);
    border: 1px solid var(--glass-border);
}
```


### src\css\style.css
```css
ansform: scale(1);

    }
}


.card-thumbnail-container {
    width: 100%;

    padding-top: 56.25%;
    position: relative;
    overflow: hidden;
}
```


### src\css\style.css
```css
ard-thumbnail-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

}
```


### src\css\style.css
```css
AGE STYLES ====== */


.course-detail-page main {
    padding-top: 6rem;

    position: relative;
    z-index: 10;
    min-height: 100vh;
}
```


### src\css\style.css
```css
ay: none;
}

.breadcrumb-list {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
}
```


### src\css\style.css
```css
ategory {
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 1rem;
}
```


### src\css\style.css
```css
argin-bottom: 1rem;
    background: linear-gradient(135deg, #a855f7, #4ecdc4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.course-hero-subtitle {
    font-size: 1.25rem;
    color: #94a3b8;
    line-height: 1.6;
}
```


### src\css\style.css
```css
age {
    flex: 0 0 400px;
    max-width: 400px;
}
```


### src\css\style.css
```css
age img {
    width: 100%;
    height: auto;
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(168, 85, 247, 0.3);
}
```


### src\css\style.css
```css
abs-section {
    max-width: 1200px;
    margin: 4rem auto;
    padding: 0 2rem;
    position: relative;
    z-index: 10;
}
```


### src\css\style.css
```css
abs-wrapper {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 2rem;
}
```


### src\css\style.css
```css
abs-container {
    position: relative;
    display: flex;
    gap: 1rem;
    background: rgba(255, 255, 255, 0.05);
    padding: 0.5rem;
    border-radius: 12px;
    margin-bottom: 2rem;
    overflow-x: auto;
}
```


### src\css\style.css
```css
ab-button {
    flex: 1;
    min-width: 150px;
    padding: 1rem 1.5rem;
    background: transparent;
    border: none;
    color: #94a3b8;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    z-index: 2;
    white-space: nowrap;
}
```


### src\css\style.css
```css
ab-glider {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    height: calc(100% - 1rem);
    background: linear-gradient(135deg, #a855f7, #4ecdc4);
    border-radius: 8px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
}
```


### src\css\style.css
```css
argin-top: 2rem;
    margin-bottom: 1rem;
    color: #a855f7;
}

.about-content p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #94a3b8;
    margin-bottom: 1.5rem;
}
```


### src\css\style.css
```css
ay: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    padding: 0;
}

.skills-list li {
    padding: 1rem 1.5rem;
    background: rgba(168, 85, 247, 0.1);
    border: 1px solid rgba(168, 85, 247, 0.3);
    border-radius: 8px;
    color: #e2e8f0;
    font-size: 1rem;
}
```


### src\css\style.css
```css
ay: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
}

.tool-item {
    padding: 1rem;
    background: rgba(78, 205, 196, 0.1);
    border: 1px solid rgba(78, 205, 196, 0.3);
    border-radius: 8px;
    text-align: center;
    color: #4ecdc4;
    font-weight: 600;
    font-size: 0.95rem;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
a(168, 85, 247, 0.3);
}

.module-header {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    background: transparent;
    border: none;
    color: #e2e8f0;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    text-align: left;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
ackground: rgba(168, 85, 247, 0.1);
}

.module-number {
    flex-shrink: 0;
    padding: 0.5rem 1rem;
    background: linear-gradient(135deg, #a855f7, #4ecdc4);
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 700;
}
```


### src\css\style.css
```css
ansform: rotate(180deg);
}

.module-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
}
```


### src\css\style.css
```css
adding: 0 1.5rem 1.5rem 1.5rem;
    margin: 0;
}

.lesson-list li {
    padding: 0.75rem 1rem;
    margin-bottom: 0.5rem;
    background: rgba(255, 255, 255, 0.02);
    border-left: 3px solid #4ecdc4;
    border-radius: 4px;
    color: #94a3b8;
    font-size: 1rem;
}
```


### src\css\style.css
```css
argin-right: 0.75rem;
    font-weight: bold;
}


.enroll-content {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
}
```


### src\css\style.css
```css
ard {
    max-width: 500px;
    width: 100%;
    padding: 3rem;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(168, 85, 247, 0.3);
    border-radius: 20px;
    text-align: center;
}
```


### src\css\style.css
```css
ation: line-through;
    margin-left: 1rem;
}

.pricing-features {
    list-style: none;
    padding: 0;
    margin: 2rem 0;
    text-align: left;
}
```


### src\css\style.css
```css
atures li {
    padding: 0.75rem 0;
    color: #94a3b8;
    font-size: 1.1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
```


### src\css\style.css
```css
align: center;
    }

    .course-hero-image {
        flex: 0 0 auto;
        max-width: 100%;
    }
```


### src\css\style.css
```css
ap: 0.5rem;
    }

    .course-tab-button {
        min-width: auto;
    }
```


### src\css\style.css
```css
ay: none;
    }

    .breadcrumb {
        padding: 0.75rem 1rem;
    }
```


### src\css\style.css
```css
ard {
        padding: 2rem 1.5rem;
    }
```


### src\css\style.css
```css
ate-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
}

/* === NAVBAR CONFLICT FIX FOR COURSE PAGES === */
body.course-detail-page nav {
    position: static;
    transform: none;
    width: 100%;
    max-width: none;
}
```


### src\css\style.css
```css
AGE SPECIFIC STYLES ===== */


main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 40px 20px 20px;
}
```


### src\css\style.css
```css
ainer {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
}
```


### src\css\style.css
```css
ab-navigation {
    margin-bottom: 2rem;
    animation: slideInUp 0.8s ease-out;
    padding: 1rem 0;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
}
```


### src\css\style.css
```css
ar(--text-muted);
    margin-bottom: 0;
}


.main-tabs {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    padding: 1rem 0;
}
```


### src\css\style.css
```css
ain-tab {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 2px solid var(--glass-border);
    border-radius: 16px;
    color: var(--text-secondary);
    font-size: 1.125rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    position: relative;
    overflow: hidden;
    min-width: 160px;
    justify-content: center;
    will-change: transform;
    transform: translateZ(0);
}
```


### src\css\style.css
```css
ain-tab::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.1), transparent);
    transition: left 0.5s ease;
}
```


### src\css\style.css
```css
animation: pulse-glow 2s ease-in-out infinite;
    --glow-color: var(--primary-glow-color);
}

.tab-icon {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.1);
}
```


### src\css\style.css
```css
ab-icon svg {
    width: 18px;
    height: 18px;
    color: currentColor;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```


### src\css\style.css
```css
ay: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0 0.75rem;
    gap: 1rem;
}

.indicator-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    max-width: 100px;
}
```


### src\css\style.css
```css
ator-text {
    font-size: 0.875rem;
    color: var(--text-muted);
    font-weight: 500;
    white-space: nowrap;
    padding: 0 1rem;
}
```


### src\css\style.css
```css
abs-container {
    position: relative;
    min-height: 60px;
    margin-top: 0.5rem;
}
```


### src\css\style.css
```css
abs {
    display: none;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    opacity: 0;
    transform: translateY(15px);
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    padding: 0.5rem;
}
```


### src\css\style.css
```css
ay: flex;
    opacity: 1;
    transform: translateY(0);
}

.sub-tab {
    padding: 0.75rem 1.5rem;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 20px;
    color: var(--text-secondary);
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
    overflow: hidden;
    min-width: 100px;
    text-align: center;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    will-change: transform;
    transform: translateZ(0);
}
```


### src\css\style.css
```css
ab::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(78, 205, 196, 0.1), transparent);
    transition: left 0.4s ease;
}
```


### src\css\style.css
```css
ansform: scale(0.98);
    }
}


.courses-grid.list-view .course-card-link {
    display: block;
    height: 100%;
}
```


### src\css\style.css
```css
AB NAVIGATION RESPONSIVE --- */
@media (max-width: 1024px) {
    .main-tab {
        padding: 1rem 2rem;
        font-size: 1.125rem;
        min-width: 160px;
    }
```


### src\css\style.css
```css
ab-icon {
        width: 26px;
        height: 26px;
    }
```


### src\css\style.css
```css
ab-icon svg {
        width: 20px;
        height: 20px;
    }
```


### src\css\style.css
```css
ab {
        padding: 0.75rem 1.5rem;
        font-size: 0.9rem;
        min-width: 110px;
    }
```


### src\css\style.css
```css
argin-bottom: 1.5rem;
    }

    .main-tabs {
        gap: 1rem;
        padding: 1rem 0;
    }
```


### src\css\style.css
```css
ain-tab {
        padding: 0.875rem 1.5rem;
        font-size: 1rem;
        min-width: 140px;
    }
```


### src\css\style.css
```css
ab-icon {
        width: 24px;
        height: 24px;
    }
```


### src\css\style.css
```css
ab-icon svg {
        width: 18px;
        height: 18px;
    }
```


### src\css\style.css
```css
ap: 0.75rem;
        justify-content: center;
        flex-wrap: wrap;
    }

    .sub-tab {
        padding: 0.75rem 1.25rem;
        font-size: 0.875rem;
        min-width: 100px;
    }
```


### src\css\style.css
```css
a (max-width: 480px) {
    .main-tabs {
        flex-direction: column;
        gap: 0.75rem;
        padding: 0.75rem 0;
    }
```


### src\css\style.css
```css
ain-tab {
        padding: 1rem 1.5rem;
        font-size: 1rem;
        min-width: auto;
        width: 100%;
        max-width: 280px;
        margin: 0 auto;
    }
```


### src\css\style.css
```css
ab-icon {
        width: 22px;
        height: 22px;
    }
```


### src\css\style.css
```css
ab-icon svg {
        width: 18px;
        height: 18px;
    }
```


### src\css\style.css
```css
abs-container {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
```


### src\css\style.css
```css
ay: none;
    }

    .sub-tabs {
        gap: 0.75rem;
        justify-content: flex-start;
        flex-wrap: nowrap;
        padding: 0.5rem 1rem;
        min-width: max-content;
    }
```


### src\css\style.css
```css
ab {
        padding: 0.75rem 1.25rem;
        font-size: 0.875rem;
        min-width: 100px;
        flex-shrink: 0;
        white-space: nowrap;
    }
```


### src\css\style.css
```css
ace: nowrap;
        font-size: 0.8rem;
    }
}

@media (max-width: 480px) {
    .main-tabs {
        flex-direction: column;
        gap: 0.75rem;
        padding: 0.75rem 0;
    }
```


### src\css\style.css
```css
ain-tab {
        padding: 1rem 1.5rem;
        font-size: 1rem;
        min-width: auto;
        width: 100%;
        max-width: 280px;
        margin: 0 auto;
    }
```


### src\css\style.css
```css
ab-icon {
        width: 22px;
        height: 22px;
    }
```


### src\css\style.css
```css
ab-icon svg {
        width: 16px;
        height: 16px;
    }
```


### src\css\style.css
```css
abs {
        gap: 0.5rem;
        padding: 0 0.5rem;
    }
```


### src\css\style.css
```css
ab {
        padding: 0.625rem 1rem;
        font-size: 0.875rem;
        flex: 1;
        min-width: 0;
    }
```


### src\css\style.css
```css
align: center;
}

.pricing-title {
    font-size: clamp(2rem, 4vw, 2.8rem);
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--text-primary), #d1d8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.02em;
    line-height: 1.2;
}
```


### src\css\style.css
```css
ar(--text-muted);
    margin-bottom: 3rem;
    font-weight: 400;
    line-height: 1.6;
}

.pricing-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    max-width: 800px;
    margin: 0 auto;
}
```


### src\css\style.css
```css
ard {
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-xl);
    padding: 2.5rem 2rem;
    position: relative;
    overflow: hidden;
    box-shadow: var(--glass-shadow);
    transition: all var(--transition-speed) var(--transition-timing);
    animation: fadeIn 0.8s ease both;
}
```


### src\css\style.css
```css
ard::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #a855f7, #4ecdc4);
    transform: scaleX(0);
    transition: transform var(--transition-speed) ease;
    transform-origin: left;
}
```


### src\css\style.css
```css
ar(--text-primary);
    margin-bottom: 0.5rem;
}

.pricing-badge {
    display: inline-block;
    padding: 0.375rem 0.75rem;
    background: linear-gradient(135deg, #a855f7, #4ecdc4);
    color: white;
    border-radius: 2rem;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 0.5rem;
}
```


### src\css\style.css
```css
ar(--text-secondary);
}

.price {
    font-size: 3rem;
    font-weight: 800;
    background: linear-gradient(135deg, white, #E0E7FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
}
```


### src\css\style.css
```css
ar(--text-muted);
    font-weight: 500;
}

.pricing-features {
    list-style: none;
    padding: 0;
    margin: 0 0 2.5rem 0;
    text-align: left;
}
```


### src\css\style.css
```css
atures li {
    padding: 0.75rem 0;
    color: var(--text-secondary);
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    transition: transform 0.3s ease;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
```


### src\css\style.css
```css
atures li::before {
    content: '';
    margin-right: 0.75rem;
    font-weight: 900;
    color: #4ecdc4;
    background: rgba(78, 205, 196, 0.2);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: inline-grid;
    place-items: center;
    font-size: 0.8rem;
    flex-shrink: 0;
}
```


### src\css\style.css
```css
a-button {
    width: 100%;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #8A2BE2, #4A00E0);
    color: white;
    border: none;
    border-radius: 0.875rem;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    transition: all var(--transition-speed) ease;
    box-shadow: 0 6px 25px var(--primary-glow-color);
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}
```


### src\css\style.css
```css
a-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s ease;
    pointer-events: none;
}
```


### src\css\style.css
```css
adow: 0 12px 40px rgba(239, 68, 68, 0.5);
}


body.course-detail-page main {
    padding: 120px 20px 20px;
    gap: 0;
}
```


### src\css\style.css
```css
argin-bottom: 0;
    padding: 3rem 2rem;
    background: var(--glass-bg-dark);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border-radius: 1.5rem;
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow);
    position: relative;
    overflow: hidden;
    transition: all var(--transition-speed) ease;
    animation: slideInUp 0.8s ease-out both;
    max-width: 1200px;
    margin: 0 auto 2rem auto;
}

.course-hero::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 50%);
    z-index: 0;
    animation: subtle-glow 15s ease-in-out infinite;
}
```


### src\css\style.css
```css
ative;
    z-index: 1;
    text-align: center;
}

.course-category {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: rgba(168, 85, 247, 0.2);
    border: 1px solid rgba(168, 85, 247, 0.4);
    border-radius: 2rem;
    color: #a855f7;
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1rem;
}
```


### src\css\style.css
```css
amp(2.5rem, 5vw, 3.5rem);
    font-weight: 800;
    background: linear-gradient(135deg, #ffffff, #d1d8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 40px rgba(255, 255, 255, 0.2);
    margin-bottom: 1rem;
    line-height: 1.2;
}

.course-hero-subtitle {
    font-size: clamp(1rem, 2vw, 1.15rem);
    color: #94a3b8;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}
```


### src\css\style.css
```css
abs-section {
    max-width: 1200px;
    margin: 2rem auto 0 auto;
    animation: slideInUp 0.8s ease-out 0.2s both;
}
```


### src\css\style.css
```css
a (max-width: 768px) {
    .pricing-section {
        padding: 3rem 1rem;
    }
```


### src\css\style.css
```css
adding: 2rem 1rem;
        margin-bottom: 1rem;
    }
}

@media (max-width: 480px) {
    .pricing-card {
        padding: 2rem 1.5rem;
    }
```


### src\css\style.css
```css
AMAZING ENROLLMENT BAR STYLES === */

/* === UPDATED AMAZING ENROLLMENT BAR STYLES === */


.enrollment-cta-section {
    max-width: 1200px;
    margin: 3rem auto 2rem;
    padding: 0 2rem;
    animation: slideInUp 0.8s ease-out 0.2s both;
}
```


### src\css\style.css
```css
a-container {
    background: var(--glass-bg-dark);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-xl);
    padding: 2.5rem;
    box-shadow: var(--glass-shadow);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    transition: all var(--transition-speed) ease;
    position: relative;
    overflow: hidden;
}
```


### src\css\style.css
```css
amp(1.8rem, 3vw, 2.2rem);
    font-weight: 700;
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, #ffffff, #d1d8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.enrollment-cta-text p {
    color: var(--text-muted);
    font-size: 1rem;
    max-width: 400px;
}
```


### src\css\style.css
```css
ay: flex;
    gap: 1.5rem;
    flex-shrink: 0;
}

.enrollment-option {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-lg);
    padding: 1.5rem;
    text-align: center;
    transition: all var(--transition-speed) ease;
    width: 280px;
    position: relative;
}
```


### src\css\style.css
```css
ar(--text-muted);
    margin: 0 0 1.25rem 0;
}

.enroll-btn {
    display: inline-block;
    width: 100%;
    padding: 0.875rem 2rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 700;
    font-size: 1rem;
    transition: all var(--transition-speed) ease;
    border: 2px solid transparent;
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}
```


### src\css\style.css
```css
ackground: transparent;
    color: #a855f7;
    border-color: #a855f7;
    --glow-color: var(--primary-glow-color);
}

.enroll-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s ease;
}
```


### src\css\style.css
```css
align: center;
    }
}

@media (max-width: 768px) {
    .enrollment-options {
        flex-direction: column;
        width: 100%;
    }
```


### src\css\style.css
```css
AGE ===== */
.blog-listing-page {
    background: var(--glass-bg-dark);
    min-height: 100vh;
}
```


### src\css\style.css
```css
adding: 120px 0 80px;
    background: linear-gradient(135deg,
            rgba(168, 85, 247, 0.1),
            rgba(78, 205, 196, 0.1));
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
}

.blog-hero-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}
```


### src\css\style.css
```css
ar(--heading-primary);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #a855f7, #4ecdc4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.blog-hero-subtitle {
    font-size: 1.25rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    line-height: 1.6;
}
```


### src\css\style.css
```css
ay: flex;
    justify-content: center;
    align-items: center;
}

.blog-hero-image svg {
    width: 100%;
    max-width: 400px;
    height: auto;
}
```


### src\css\style.css
```css
ATURED POSTS SECTION ===== */
.featured-posts-section {
    padding: 80px 0;
    background: var(--glass-bg-light);
}
```


### src\css\style.css
```css
atured-posts-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}
```


### src\css\style.css
```css
ansform: translateY(-8px);
    border-color: var(--glass-hover-border);
    box-shadow: var(--glass-hover-shadow);
}

.featured-post-image {
    height: 200px;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(78, 205, 196, 0.2));
    display: flex;
    align-items: center;
    justify-content: center;
}
```


### src\css\style.css
```css
atured-post-image svg {
    width: 80%;
    height: 80%;
}
```


### src\css\style.css
```css
atured-post-content {
    padding: 1.5rem;
}
```


### src\css\style.css
```css
ay: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
}

.post-category {
    background: rgba(168, 85, 247, 0.2);
    color: #a855f7;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}
```


### src\css\style.css
```css
argin-bottom: 1rem;
}

.post-title a {
    color: var(--text-primary);
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.4;
    transition: color 0.3s ease;
}
```


### src\css\style.css
```css
a855f7;
}

.post-excerpt {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1rem;
}
```


### src\css\style.css
```css
adding: 60px 0;
    background: var(--glass-bg-dark);
    border-top: 1px solid var(--glass-border);
}

.blog-filter-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}
```


### src\css\style.css
```css
ay: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.search-box {
    position: relative;
    flex: 1;
    max-width: 400px;
}
```


### src\css\style.css
```css
arch-box input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 3rem;
    background: var(--glass-bg-light);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    color: var(--text-primary);
    font-size: 1rem;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
a855f7;
    box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
}

.search-btn {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    padding: 0.25rem;
}
```


### src\css\style.css
```css
arch-btn svg {
    width: 1.25rem;
    height: 1.25rem;
}
```


### src\css\style.css
```css
ay: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.filter-btn {
    padding: 0.5rem 1rem;
    background: var(--glass-bg-light);
    border: 1px solid var(--glass-border);
    border-radius: 8px;
    color: var(--text-secondary);
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
ackground: rgba(168, 85, 247, 0.2);
    border-color: #a855f7;
    color: #a855f7;
}

/* ===== ALL POSTS SECTION ===== */
.all-posts-section {
    padding: 80px 0;
    background: var(--glass-bg-light);
}
```


### src\css\style.css
```css
all-posts-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}
```


### src\css\style.css
```css
ansform: translateY(-4px);
    border-color: var(--glass-hover-border);
    box-shadow: var(--glass-hover-shadow);
}

.post-image {
    height: 160px;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(78, 205, 196, 0.1));
    display: flex;
    align-items: center;
    justify-content: center;
}
```


### src\css\style.css
```css
age svg {
    width: 70%;
    height: 70%;
}
```


### src\css\style.css
```css
adding: 1.25rem;
}

.post-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--glass-border);
}
```


### src\css\style.css
```css
ay: flex;
    align-items: center;
    gap: 0.5rem;
}

.pagination-btn {
    padding: 0.5rem;
    background: var(--glass-bg-dark);
    border: 1px solid var(--glass-border);
    border-radius: 8px;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
acity: 0.5;
    cursor: not-allowed;
}

.pagination-btn svg {
    width: 1rem;
    height: 1rem;
}
```


### src\css\style.css
```css
ay: flex;
    gap: 0.25rem;
    margin: 0 1rem;
}

.pagination-number {
    padding: 0.5rem 0.75rem;
    background: var(--glass-bg-dark);
    border: 1px solid var(--glass-border);
    border-radius: 8px;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.875rem;
}
```


### src\css\style.css
```css
ackground: rgba(168, 85, 247, 0.2);
    border-color: #a855f7;
    color: #a855f7;
}

.pagination-dots {
    color: var(--text-muted);
    padding: 0.5rem;
}
```


### src\css\style.css
```css
adding: 80px 0;
    background: var(--glass-bg-dark);
    border-top: 1px solid var(--glass-border);
}

.newsletter-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}
```


### src\css\style.css
```css
ar(--text-primary);
    margin-bottom: 1rem;
}

.newsletter-content p {
    color: var(--text-secondary);
    font-size: 1.125rem;
    margin-bottom: 2rem;
    line-height: 1.6;
}
```


### src\css\style.css
```css
ay: flex;
    gap: 1rem;
    margin-bottom: 1rem;
}

.newsletter-form input {
    flex: 1;
    padding: 0.875rem 1rem;
    background: var(--glass-bg-light);
    border: 1px solid var(--glass-border);
    border-radius: 8px;
    color: var(--text-primary);
    font-size: 1rem;
}
```


### src\css\style.css
```css
a855f7;
    box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
}

.newsletter-btn {
    padding: 0.875rem 1.5rem;
    background: linear-gradient(135deg, #a855f7, #4ecdc4);
    border: none;
    border-radius: 8px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
ay: flex;
    justify-content: center;
    align-items: center;
}

.newsletter-image svg {
    width: 100%;
    max-width: 300px;
    height: auto;
}
```


### src\css\style.css
```css
AIL PAGE ===== */
.blog-detail-page {
    background: var(--glass-bg-dark);
    min-height: 100vh;
}
```


### src\css\style.css
```css
ADCRUMB NAVIGATION ===== */
.breadcrumb-section {
    padding: 100px 0 20px;
    background: var(--glass-bg-light);
}
```


### src\css\style.css
```css
adcrumb-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}
```


### src\css\style.css
```css
ar(--text-secondary);
    font-weight: 500;
}

/* ===== BLOG HERO SECTION ===== */
.blog-hero {
    padding: 40px 0 80px;
    background: var(--glass-bg-light);
    display: flex;
    align-items: center;
    justify-content: center;
}
```


### src\css\style.css
```css
ay: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
}

.blog-category {
    background: rgba(168, 85, 247, 0.2);
    color: #a855f7;
    padding: 0.375rem 1rem;
    border-radius: 16px;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}
```


### src\css\style.css
```css
ar(--text-muted);
    font-size: 0.875rem;
    font-weight: 500;
}

.blog-hero-title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;
    line-height: 1.2;
}
```


### src\css\style.css
```css
ay: flex;
    align-items: center;
    gap: 0.75rem;
}

.author-avatar {
    width: 48px;
    height: 48px;
    background: rgba(168, 85, 247, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #a855f7;
}
```


### src\css\style.css
```css
author-avatar svg {
    width: 24px;
    height: 24px;
}
```


### src\css\style.css
```css
ay: flex;
    justify-content: center;
    align-items: center;
}

.blog-hero-image svg {
    width: 100%;
    max-width: 350px;
    height: auto;
}
```


### src\css\style.css
```css
adding: 80px 0;
    background: var(--glass-bg-dark);
}

.blog-content-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
}
```


### src\css\style.css
```css
article {
    background: var(--glass-bg-light);
    border: 1px solid var(--glass-border);
    border-radius: 16px;
    padding: 3rem;
    backdrop-filter: blur(var(--glass-blur));
}
```


### src\css\style.css
```css
argin-bottom: 3rem;
}

.blog-section h2 {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    line-height: 1.3;
}
```


### src\css\style.css
```css
ar(--text-secondary);
    line-height: 1.7;
    margin-bottom: 1rem;
    font-size: 1.0625rem;
}

.blog-list {
    list-style: none;
    padding: 0;
    margin: 1.5rem 0;
}
```


### src\css\style.css
```css
absolute;
    left: 0;
    color: #a855f7;
    font-weight: bold;
}

.code-section pre {
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    padding: 1.5rem;
    overflow-x: auto;
    margin: 1.5rem 0;
}
```


### src\css\style.css
```css
argin: 2rem 0;
    text-align: center;
}

.blog-image img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
```


### src\css\style.css
```css
ar(--text-primary);
    margin-bottom: 1.5rem;
}

.blog-conclusion p {
    color: var(--text-secondary);
    line-height: 1.7;
    font-size: 1.0625rem;
}
```


### src\css\style.css
```css
AL SHARING ===== */
.blog-sharing {
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid var(--glass-border);
}
```


### src\css\style.css
```css
ay: flex;
    gap: 1rem;
}

.share-btn {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: all 0.3s ease;
    border: 1px solid var(--glass-border);
}
```


### src\css\style.css
```css
are-btn svg {
    width: 20px;
    height: 20px;
}
```


### src\css\style.css
```css
ay: flex;
    flex-direction: column;
    gap: 2rem;
}

.sidebar-widget {
    background: var(--glass-bg-light);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    padding: 1.5rem;
    backdrop-filter: blur(var(--glass-blur));
}
```


### src\css\style.css
```css
ay: flex;
    flex-direction: column;
    gap: 1rem;
}

.related-post {
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--glass-border);
}
```


### src\css\style.css
```css
ated-post:last-child {
    border-bottom: none;
    padding-bottom: 0;
}
```


### src\css\style.css
```css
argin-bottom: 0.5rem;
}

.related-post h4 a {
    color: var(--text-primary);
    text-decoration: none;
    font-size: 0.9375rem;
    font-weight: 500;
    line-height: 1.4;
    transition: color 0.3s ease;
}
```


### src\css\style.css
```css
ay: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.category-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.9375rem;
    transition: color 0.3s ease;
}
```


### src\css\style.css
```css
ackground: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(78, 205, 196, 0.1));
    border-color: rgba(168, 85, 247, 0.3);
}

.cta-widget p {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    line-height: 1.5;
}
```


### src\css\style.css
```css
ar-cta-btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: linear-gradient(135deg, #a855f7, #4ecdc4);
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    text-align: center;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
ansform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(168, 85, 247, 0.3);
}

/* ===== BLOG NAVIGATION ===== */
.blog-navigation {
    padding: 60px 0;
    background: var(--glass-bg-light);
    border-top: 1px solid var(--glass-border);
}
```


### src\css\style.css
```css
av-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}
```


### src\css\style.css
```css
av-post {
    background: var(--glass-bg-dark);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    padding: 1.5rem;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
ay: block;
    color: var(--text-muted);
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.5rem;
}

.nav-title {
    color: var(--text-primary);
    text-decoration: none;
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.4;
    transition: color 0.3s ease;
}
```


### src\css\style.css
```css
align: center;
    }

    .blog-article {
        padding: 2rem;
    }
```


### src\css\style.css
```css
align-items: stretch;
    }

    .search-box {
        max-width: none;
    }
```


### src\css\style.css
```css
article {
        padding: 1.5rem;
    }
```


### src\css\style.css
```css
a855f7;
    position: relative;
}

.nav-link.active::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 6px;
    background: #a855f7;
    border-radius: 50%;
}
```


### src\css\style.css
```css
ay: none;
}

/* ===== BLOG SEARCH HIGHLIGHTING ===== */
.search-highlight {
    background: rgba(168, 85, 247, 0.3);
    padding: 0.125rem 0.25rem;
    border-radius: 4px;
}
```


### src\css\style.css
```css
ar(--heading-primary);
    background: linear-gradient(135deg, var(--text-primary), #d1d8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: var(--spacing-md);
}

.blog-listing-hero-content p {
    font-size: var(--body-large);
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
}
```


### src\css\style.css
```css
atured-post-section {
    padding: var(--spacing-2xl) var(--spacing-xl);
    max-width: var(--content-max-width);
    margin: 0 auto;
}
```


### src\css\style.css
```css
ative;
    overflow: hidden;
}

.featured-post-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}
```


### src\css\style.css
```css
ansform: scale(1.05);
}

.featured-post-content {
    padding: var(--spacing-2xl);
    display: flex;
    flex-direction: column;
    justify-content: center;
}
```


### src\css\style.css
```css
atured-badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: linear-gradient(135deg, #FFD700, #FFA500);
    color: #000;
    border-radius: var(--border-radius-sm);
    font-size: var(--body-small);
    font-weight: 600;
    margin-bottom: var(--spacing-md);
    width: fit-content;
}
```


### src\css\style.css
```css
ar(--heading-secondary);
    color: var(--text-primary);
    margin: var(--spacing-md) 0;
}

.featured-post-content p {
    font-size: var(--body-regular);
    color: var(--text-secondary);
    margin-bottom: var(--spacing-lg);
    line-height: 1.6;
}
```


### src\css\style.css
```css
ay: flex;
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-xl);
    font-size: var(--body-small);
    color: var(--text-muted);
}


.blog-listing-section {
    padding: var(--spacing-2xl) var(--spacing-xl);
    max-width: var(--content-max-width);
    margin: 0 auto;
}
```


### src\css\style.css
```css
ackground: var(--glass-hover-bg-light);
    border-color: var(--glass-hover-border);
    box-shadow: var(--glass-hover-shadow);
    transform: var(--card-hover-transform);
}

.blog-card-image {
    width: 100%;
    height: 200px;
    overflow: hidden;
    position: relative;
}
```


### src\css\style.css
```css
ard-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}
```


### src\css\style.css
```css
ansform: scale(1.1);
}

.blog-card-content {
    padding: var(--spacing-lg);
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}
```


### src\css\style.css
```css
ard-category {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background: var(--primary-glow-color);
    color: var(--text-primary);
    border-radius: var(--border-radius-sm);
    font-size: var(--body-small);
    font-weight: 600;
    margin-bottom: var(--spacing-md);
    width: fit-content;
}
```


### src\css\style.css
```css
ard-title {
    font-size: var(--heading-tertiary);
    color: var(--text-primary);
    margin-bottom: var(--spacing-md);
    line-height: 1.3;
}
```


### src\css\style.css
```css
ard-excerpt {
    font-size: var(--body-regular);
    color: var(--text-secondary);
    margin-bottom: var(--spacing-lg);
    line-height: 1.6;
    flex-grow: 1;
}
```


### src\css\style.css
```css
ard-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: var(--spacing-md);
    border-top: 1px solid var(--glass-border);
    font-size: var(--body-small);
    color: var(--text-muted);
}
```


### src\css\style.css
```css
ay: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
}

.blog-category {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: var(--primary-glow-color);
    color: var(--text-primary);
    border-radius: var(--border-radius-sm);
    font-size: var(--body-small);
    font-weight: 600;
    width: fit-content;
}
```


### src\css\style.css
```css
ar(--heading-primary);
    color: var(--text-primary);
    line-height: 1.1;
    background: linear-gradient(135deg, var(--text-primary), #d1d8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.blog-hero-subtitle {
    font-size: var(--body-large);
    color: var(--text-secondary);
    line-height: 1.6;
}
```


### src\css\style.css
```css
a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: var(--spacing-lg);
    border-top: 1px solid var(--glass-border);
}
```


### src\css\style.css
```css
ay: flex;
    align-items: center;
    gap: var(--spacing-md);
}

.author-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 2px solid var(--primary-glow-color);
}
```


### src\css\style.css
```css
ar(--body-small);
    color: var(--text-muted);
}

.read-time {
    font-size: var(--body-small);
    color: var(--text-muted);
    padding: 0.5rem 1rem;
    background: var(--glass-bg-dark);
    border-radius: var(--border-radius-sm);
}
```


### src\css\style.css
```css
adius: var(--border-radius-xl);
    overflow: hidden;
    box-shadow: var(--glass-shadow);
}

.blog-hero-image img {
    width: 100%;
    height: auto;
    display: block;
}
```


### src\css\style.css
```css
ax-width: 800px;
    margin: 0 auto;
    padding: var(--spacing-3xl) var(--spacing-xl);
}

.blog-content {
    font-size: var(--body-large);
    line-height: 1.8;
    color: var(--text-secondary);
}
```


### src\css\style.css
```css
ar(--heading-secondary);
    color: var(--text-primary);
    margin-top: var(--spacing-3xl);
    margin-bottom: var(--spacing-lg);
    line-height: 1.2;
}

.blog-content h3 {
    font-size: var(--heading-tertiary);
    color: var(--text-primary);
    margin-top: var(--spacing-2xl);
    margin-bottom: var(--spacing-md);
    line-height: 1.3;
}
```


### src\css\style.css
```css
argin-bottom: var(--spacing-lg);
}

.blog-content ul,
.blog-content ol {
    margin-bottom: var(--spacing-lg);
    padding-left: var(--spacing-2xl);
}
```


### src\css\style.css
```css
argin: var(--spacing-2xl) 0;
}

.blog-content .blog-image img {
    width: 100%;
    height: auto;
    border-radius: var(--border-radius-md);
    box-shadow: var(--glass-shadow);
}
```


### src\css\style.css
```css
align: center;
    font-size: var(--body-small);
    color: var(--text-muted);
    margin-top: var(--spacing-md);
    font-style: italic;
}

.blog-content pre {
    background: var(--glass-bg-dark);
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-md);
    padding: var(--spacing-lg);
    overflow-x: auto;
    margin: var(--spacing-2xl) 0;
}
```


### src\css\style.css
```css
ar(--text-secondary);
}

.blog-content blockquote {
    border-left: 4px solid var(--primary-glow-color);
    padding-left: var(--spacing-lg);
    margin: var(--spacing-2xl) 0;
    font-style: italic;
    color: var(--text-muted);
    background: var(--glass-bg-dark);
    padding: var(--spacing-lg);
    border-radius: var(--border-radius-md);
}
```


### src\css\style.css
```css
ay: block;
    font-size: var(--body-small);
    color: var(--text-muted);
    font-style: normal;
    margin-top: var(--spacing-sm);
}


.author-bio-section {
    display: flex;
    gap: var(--spacing-lg);
    padding: var(--spacing-xl);
    background: var(--glass-bg-light);
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-lg);
    margin-top: var(--spacing-3xl);
}
```


### src\css\style.css
```css
author-bio-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 3px solid var(--primary-glow-color);
    flex-shrink: 0;
}
```


### src\css\style.css
```css
ar(--heading-tertiary);
    color: var(--text-primary);
    margin-bottom: var(--spacing-sm);
}

.author-bio-content p {
    font-size: var(--body-regular);
    color: var(--text-secondary);
    line-height: 1.6;
}
```


### src\css\style.css
```css
ay: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--card-gap);
}

.no-related {
    text-align: center;
    color: var(--text-muted);
    padding: var(--spacing-xl);
    background: var(--glass-bg-dark);
    border-radius: var(--border-radius-md);
}
```


### src\css\style.css
```css
a (max-width: 768px) {
    .blog-hero {
        grid-template-columns: 1fr;
        padding: var(--spacing-2xl) var(--spacing-md);
        margin-top: 60px;
    }
```


### src\css\style.css
```css
ate-columns: 1fr;
    }

    .featured-post-image {
        height: 250px;
    }
```


### src\css\style.css
```css
ate-columns: 1fr;
    }

    .blog-content-section {
        padding: var(--spacing-xl) var(--spacing-md);
    }
```


### src\css\style.css
```css
align: center;
        align-items: center;
    }
}

@media (max-width: 480px) {
    .blog-listing-hero {
        padding: var(--spacing-2xl) var(--spacing-md);
    }
```


### src\css\style.css
```css
align-items: flex-start;
        gap: var(--spacing-md);
    }
}

/* === NEW AWESOME COURSE IMAGE STYLES === */


.course-header {

    padding: 0 !important;


    height: 200px !important;
    min-height: 200px !important;


    overflow: hidden !important;
}
```


### src\css\style.css
```css
ader .course-image {

    width: 100% !important;
    height: 100% !important;


    object-fit: cover !important;


    padding: 0 !important;
    border-radius: 0 !important;
    background: none !important;
    box-shadow: none !important;


    transition: transform 0.4s ease !important;
}
```


### src\css\style.css
```css
ansform: scale(1.1);
}

/* ===
=====================================
   MINIMAL COURSE CARD STYLES (REDESIGN)
   ======================================== */

.course-card-minimal {
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-xl);
    overflow: hidden;
    transition: all 0.3s ease;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    box-shadow: var(--glass-shadow);
    cursor: pointer;
}
```


### src\css\style.css
```css
ard-minimal::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--primary-glow-color), var(--secondary-glow-color));
    transform: scaleX(0);
    transition: transform var(--transition-speed) ease;
    transform-origin: left;
    z-index: 1;
}
```


### src\css\style.css
```css
adow: 0 12px 40px rgba(255, 165, 0, 0.4);
}


.course-image-container {
    width: 100%;
    height: 220px;
    min-height: 220px;
    max-height: 220px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.05), rgba(78, 205, 196, 0.05));
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    border-radius: 16px 16px 0 0;
}
```


### src\css\style.css
```css
ackground: linear-gradient(135deg, rgba(255, 215, 0, 0.08), rgba(255, 165, 0, 0.05));
}

.course-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    transition: transform 0.4s ease;
    display: block;
}
```


### src\css\style.css
```css
ansform: scale(1.05);
}


.course-content-minimal {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
}
```


### src\css\style.css
```css
al {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0 0 0.75rem 0;
    line-height: 1.3;
    text-align: center;
}
```


### src\css\style.css
```css
al {
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.7;
    margin: 0 0 1rem 0;
    text-align: center;
    flex-grow: 1;
}
```


### src\css\style.css
```css
art-learning-btn {
    width: 100%;
    padding: 0.875rem 1.5rem;
    background: linear-gradient(135deg, #8A2BE2, #4A00E0);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    box-shadow: 0 4px 15px rgba(138, 43, 226, 0.3);
    margin-top: auto;
}
```


### src\css\style.css
```css
ansition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.start-learning-btn .btn-arrow {
    width: 20px;
    height: 20px;
    stroke: currentColor;
    stroke-width: 2;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: transform var(--transition-speed) ease;
}
```


### src\css\style.css
```css
ackground: linear-gradient(135deg, #FBBF24, #F59E0B);
    box-shadow: 0 6px 25px rgba(245, 158, 11, 0.5);
}


@media (max-width: 1024px) {
    .course-image-container {
        height: 200px;
        min-height: 200px;
        max-height: 200px;
    }
```


### src\css\style.css
```css
al {
        padding: 1.25rem;
    }
```


### src\css\style.css
```css
art-learning-btn {
        padding: 0.75rem 1.25rem;
        font-size: 0.95rem;
    }
```


### src\css\style.css
```css
a (max-width: 768px) {
    .course-image-container {
        height: 180px;
        min-height: 180px;
        max-height: 180px;
    }
```


### src\css\style.css
```css
al {
        padding: 1rem;
        gap: 0.875rem;
    }
```


### src\css\style.css
```css
art-learning-btn {
        padding: 0.75rem 1rem;
        font-size: 0.9rem;
    }
```


### src\css\style.css
```css
a (max-width: 480px) {
    .course-image-container {
        height: 160px;
        min-height: 160px;
        max-height: 160px;
    }
```


### src\css\style.css
```css
al {
        padding: 1rem;
    }
```


### src\css\style.css
```css
art-learning-btn {
        padding: 0.625rem 1rem;
        font-size: 0.875rem;
    }
```


### src\css\style.css
```css
argin: 0;
}


/* ========================================
   COMING SOON TOAST NOTIFICATION
   ======================================== */

.coming-soon-toast {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: var(--glass-bg-dark);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-lg);
    padding: var(--spacing-lg);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    z-index: 10000;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
    max-width: 400px;
}
```


### src\css\style.css
```css
argin: 0;
    font-size: 0.875rem;
    color: var(--text-secondary);
}

@media (max-width: 768px) {
    .coming-soon-toast {
        bottom: 1rem;
        right: 1rem;
        left: 1rem;
        max-width: none;
    }
```


### src\css\style.css
```css
AL CARDS
   ======================================== */

.courses-grid.list-view .course-card-minimal {
    flex-direction: row;
    height: auto;
}
```


### src\css\style.css
```css
age-container {
    width: 250px;
    min-width: 250px;
    height: auto;
    min-height: 200px;
}
```


### src\css\style.css
```css
align: left;
}

.courses-grid.list-view .start-learning-btn {
    width: auto;
    align-self: flex-start;
}
```


### src\css\style.css
```css
age-container {
        width: 100%;
        height: 180px;
    }
```


### src\css\style.css
```css
align: center;
    }

    .courses-grid.list-view .start-learning-btn {
        width: 100%;
    }
```


### src\css\style.css
```css
AUTHENTICATION MODAL STYLES
   ======================================== */

/**
 * LOGIN MODAL OVERLAY
 * Full-screen overlay that appears behind the modal
 * Darkens the background and prevents interaction with page content
 */
.auth-modal-overlay {
    /* Positioning */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10000;
    /* Above all other content */

    /* Appearance */
    background: rgba(0, 0, 0, 0.85);
    /* Dark semi-transparent background */
    backdrop-filter: blur(10px);
    /* Blur effect on background */
    -webkit-backdrop-filter: blur(10px);
    /* Safari support */

    /* Layout */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-lg);

    /* Animation */
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s var(--transition-timing);

    /* Prevent scrolling when modal is open */
    overflow-y: auto;
}
```


### src\css\style.css
```css
acity: 1;
    visibility: visible;
}

/**
 * LOGIN MODAL CONTAINER
 * The actual modal box with glassmorphism effect
 */
.auth-modal {
    /* Sizing */
    width: 100%;
    max-width: 450px;

    /* Glassmorphism Effect */
    background: var(--glass-bg-dark);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-2xl);
    box-shadow: 0 20px 60px rgba(168, 85, 247, 0.3);

    /* Animation */
    transform: scale(0.9) translateY(20px);
    transition: all 0.3s var(--transition-timing);

    /* Prevent modal from closing when clicking inside */
    position: relative;
}
```


### src\css\style.css
```css
ansform: scale(1) translateY(0);
}

/**
 * MODAL HEADER
 * Contains title and close button
 */
.auth-modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-2xl) var(--spacing-2xl) var(--spacing-lg);
    border-bottom: 1px solid var(--glass-border);
}
```


### src\css\style.css
```css
ar(--heading-tertiary);
    font-weight: 700;
    background: linear-gradient(135deg, #a855f7, #4ecdc4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
}

/**
 * CLOSE BUTTON
 * X button in top-right corner
 */
.auth-modal-close {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-md);
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
ackground: rgba(255, 255, 255, 0.1);
    border-color: var(--glass-hover-border);
    color: var(--text-primary);
    transform: rotate(90deg);
}

.auth-modal-close svg {
    width: 20px;
    height: 20px;
}
```


### src\css\style.css
```css
AL BODY
 * Contains the login form
 */
.auth-modal-body {
    padding: var(--spacing-2xl);
}
```


### src\css\style.css
```css
at top of form
 */
.auth-role-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto var(--spacing-xl);
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(78, 205, 196, 0.2));
    border: 2px solid var(--glass-border);
    border-radius: 50%;
    color: #a855f7;
}
```


### src\css\style.css
```css
auth-role-icon svg {
    width: 40px;
    height: 40px;
}
```


### src\css\style.css
```css
ative;
    display: flex;
    align-items: center;
}

/**
 * INPUT ICON
 * Icon on left side of input
 */
.auth-input-icon {
    position: absolute;
    left: var(--spacing-md);
    width: 20px;
    height: 20px;
    color: var(--text-muted);
    pointer-events: none;
    z-index: 1;
}
```


### src\css\style.css
```css
auth-input {
    width: 100%;
    padding: var(--spacing-md) var(--spacing-md) var(--spacing-md) 48px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-lg);
    color: var(--text-primary);
    font-size: var(--body-regular);
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
ackground: rgba(255, 255, 255, 0.08);
    border-color: #a855f7;
    box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
}

/**
 * PASSWORD TOGGLE BUTTON
 * Eye icon to show/hide password
 */
.auth-password-toggle {
    position: absolute;
    right: var(--spacing-md);
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: var(--border-radius-sm);
}
```


### src\css\style.css
```css
ackground: rgba(255, 255, 255, 0.05);
    color: var(--text-secondary);
}

.auth-password-toggle svg {
    width: 20px;
    height: 20px;
}
```


### src\css\style.css
```css
AGE
 * Displayed when login fails
 */
.auth-error-message {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-md);
    background: rgba(239, 68, 68, 0.1);
    border: 1px solid rgba(239, 68, 68, 0.3);
    border-radius: var(--border-radius-md);
    color: #fca5a5;
    font-size: var(--body-small);
    animation: shake 0.5s ease;
}
```


### src\css\style.css
```css
auth-error-message svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
}
```


### src\css\style.css
```css
ansform: translateX(5px);
    }
}

/**
 * SUBMIT BUTTON
 */
.auth-submit-btn {
    width: 100%;
    padding: var(--spacing-md) var(--spacing-xl);
    background: linear-gradient(135deg, #8A2BE2, #4A00E0);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: var(--border-radius-lg);
    color: white;
    font-size: var(--body-regular);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}
```


### src\css\style.css
```css
auth-submit-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
}
```


### src\css\style.css
```css
ay: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm);
}

.auth-spinner {
    width: 20px;
    height: 20px;
    animation: spin 1s linear infinite;
}
```


### src\css\style.css
```css
a855f7;
}

/**
 * RESPONSIVE DESIGN
 */
@media (max-width: 768px) {
    .auth-modal {
        max-width: 90%;
        margin: var(--spacing-lg);
    }
```


### src\css\style.css
```css
auth-modal-header,
    .auth-modal-body {
        padding: var(--spacing-xl);
    }
```


### src\css\style.css
```css
auth-role-icon {
        width: 60px;
        height: 60px;
    }
```


### src\css\style.css
```css
auth-role-icon svg {
        width: 30px;
        height: 30px;
    }
```


### src\css\style.css
```css
a (max-width: 480px) {
    .auth-modal-overlay {
        padding: var(--spacing-md);
    }
```


### src\css\style.css
```css
auth-modal-header,
    .auth-modal-body {
        padding: var(--spacing-lg);
    }
```


### src\css\style.css
```css
ansform: translateX(400px);
        opacity: 0;
    }
}


/* ========================================
   GIRLS IN TECH & CERTIFICATION SECTIONS
   ======================================== */

/* Feature Card Container */
.feature-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-xl);
    padding: 3rem;
    box-shadow: var(--glass-shadow);
    transition: all var(--transition-speed) var(--transition-timing);
}
```


### src\css\style.css
```css
a(236, 72, 153, 0.5);
    box-shadow: 0 12px 40px rgba(236, 72, 153, 0.3);
}

/* Feature Visual */
.feature-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    border-radius: var(--border-radius-lg);
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);
}
```


### src\css\style.css
```css
al svg {
    width: 100%;
    height: auto;
    max-width: 300px;
}
```


### src\css\style.css
```css
ackground: rgba(168, 85, 247, 0.05);
    border: 1px solid rgba(168, 85, 247, 0.2);
}

.certificate-visual img {
    width: 100%;
    height: auto;
    border-radius: var(--border-radius-md);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
```


### src\css\style.css
```css
acing: 0.1em;
    text-transform: uppercase;
    color: var(--girls-empowerment-color);
    margin-bottom: 0.5rem;
}

.feature-text h3 {
    font-size: clamp(1.75rem, 3vw, 2.5rem);
    font-weight: 700;
    line-height: 1.2;
    color: var(--text-primary);
    margin-bottom: 1rem;
}
```


### src\css\style.css
```css
ature-text p {
    font-size: var(--body-regular);
    line-height: 1.7;
    color: var(--text-secondary);
    margin-bottom: 1rem;
}
```


### src\css\style.css
```css
ay: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1.5rem 0;
}

.highlight-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: rgba(236, 72, 153, 0.05);
    border: 1px solid rgba(236, 72, 153, 0.2);
    border-radius: var(--border-radius-md);
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
ackground: rgba(236, 72, 153, 0.1);
    border-color: rgba(236, 72, 153, 0.4);
    transform: translateX(5px);
}

.highlight-icon {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #EC4899, #A855F7);
    border-radius: 50%;
    color: white;
}
```


### src\css\style.css
```css
ar(--body-regular);
    color: var(--text-primary);
    font-weight: 500;
}

/* Certificate Features */
.certificate-features {
    list-style: none;
    padding: 0;
    margin: 1.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}
```


### src\css\style.css
```css
ate-features li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: var(--body-regular);
    color: var(--text-secondary);
    padding: 0.75rem;
    background: rgba(168, 85, 247, 0.05);
    border: 1px solid rgba(168, 85, 247, 0.2);
    border-radius: var(--border-radius-sm);
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
ackground: rgba(168, 85, 247, 0.1);
    border-color: rgba(168, 85, 247, 0.4);
    transform: translateX(5px);
}

.certificate-features li::before {
    content: '✓';
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: linear-gradient(135deg, #8A2BE2, #4A00E0);
    border-radius: 50%;
    color: white;
    font-weight: bold;
    flex-shrink: 0;
}
```


### src\css\style.css
```css
a (max-width: 768px) {
    .feature-card {
        grid-template-columns: 1fr;
        gap: 2rem;
        padding: 2rem;
    }
```


### src\css\style.css
```css
al svg {
        max-width: 250px;
    }
```


### src\css\style.css
```css
ap: 0.75rem;
    }

    .highlight-item,
    .certificate-features li {
        padding: 0.75rem;
    }
```


### src\css\style.css
```css
a (max-width: 480px) {
    .feature-card {
        padding: 1.5rem;
        gap: 1.5rem;
    }
```


### src\css\style.css
```css
ate-features li::before {
        width: 20px;
        height: 20px;
        font-size: 0.875rem;
    }
```


### src\css\style.css
```css
.btn-primary,
.cta-button,
.card-button.coding {
    background: linear-gradient(135deg, #8A2BE2, #4A00E0);
    color: white;
    padding: var(--spacing-md) var(--spacing-xl);
    border-radius: var(--border-radius-lg);
    text-decoration: none;
    font-weight: 600;
    font-size: var(--body-regular);
    transition: all var(--transition-speed) ease;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 6px 25px var(--primary-glow-color);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm);
    cursor: pointer;
    text-align: center;
    min-height: 44px;
}
```


### src\css\style.css
```css
.btn-secondary,
.card-button.math {
    background: linear-gradient(135deg, #FFD700, #FFA500);
    color: #000;
    padding: var(--spacing-md) var(--spacing-xl);
    border-radius: var(--border-radius-lg);
    text-decoration: none;
    font-weight: 600;
    font-size: var(--body-regular);
    transition: all var(--transition-speed) ease;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 6px 25px var(--math-glow-color);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm);
    cursor: pointer;
    text-align: center;
    min-height: 44px;
}
```


### src\css\style.css
```css
.btn-tertiary,
.card-button.ai {
    background: linear-gradient(135deg, #EC4899, #BE185D);
    color: white;
    padding: var(--spacing-md) var(--spacing-xl);
    border-radius: var(--border-radius-lg);
    text-decoration: none;
    font-weight: 600;
    font-size: var(--body-regular);
    transition: all var(--transition-speed) ease;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 6px 25px var(--ai-glow-color);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm);
    cursor: pointer;
    text-align: center;
    min-height: 44px;
}
```


### src\css\style.css
```css
-btn {
    display: none;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 10px;
    /* Increased clickable area */
    z-index: 10000;
    /* Above navbar to ensure clickability */
    position: relative;
    /* Create stacking context */
    min-width: 44px;
    /* Meet touch target minimum */
    min-height: 44px;
    /* Meet touch target minimum */
    align-items: center;
    justify-content: center;
}
```


### src\css\style.css
```css
-btn {
    background: transparent;
    border: 1px solid var(--glass-border);
    color: #94a3b8;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
-btn {
    padding: var(--spacing-md) var(--spacing-lg);
    background: rgba(168, 85, 247, 0.1);
    border: 1px solid rgba(168, 85, 247, 0.3);
    border-radius: var(--border-radius-lg);
    color: var(--text-primary);
    font-weight: 600;
    font-size: var(--body-regular);
    cursor: pointer;
    transition: all var(--transition-speed) ease;
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    white-space: nowrap;
    min-width: 140px;
    justify-content: space-between;
}
```


### src\css\style.css
```css
-btn {
    padding: var(--spacing-sm) var(--spacing-md);
    background: transparent;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    border-radius: var(--border-radius-sm);
    transition: all var(--transition-speed) ease;
    font-size: 1.1rem;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}
```


### src\css\style.css
```css
-btn {
        min-width: auto;
        width: 100%;
        justify-content: center;
    }
```


### src\css\style.css
```css
-btn {
    position: absolute;
    right: 1.25rem;
    top: 50%;
    transform: translateY(-50%);
    width: 32px;
    height: 32px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    color: var(--text-muted);
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
}
```


### src\css\style.css
```css
-btn svg {
    width: 16px;
    height: 16px;
}
```


### src\css\style.css
```css
-btn {
        right: 1rem;
        width: 28px;
        height: 28px;
    }
```


### src\css\style.css
```css
-btn {
        right: 0.875rem;
        width: 26px;
        height: 26px;
    }
```


### src\css\style.css
```css
-btn svg {
        width: 14px;
        height: 14px;
    }
```


### src\css\style.css
```css
-btn {
        right: 0.75rem;
        width: 24px;
        height: 24px;
    }
```


### src\css\style.css
```css
-btn svg {
        width: 12px;
        height: 12px;
    }
```


### src\css\style.css
```css
-btn {
    padding: 0.875rem 1.5rem;
    background: rgba(168, 85, 247, 0.1);
    border: 2px solid rgba(168, 85, 247, 0.2);
    border-radius: 12px;
    color: var(--text-primary);
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    display: flex;
    align-items: center;
    gap: 0.75rem;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}
```


### src\css\style.css
```css
-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.1), transparent);
    transition: left 0.4s ease;
}
```


### src\css\style.css
```css
-btn {
    padding: 0.5rem 0.75rem;
    background: transparent;
    border: none;
    color: #94a3b8;
    cursor: pointer;
    border-radius: 0.375rem;
    transition: all 0.3s ease;
    font-size: 1.2rem;
}
```


### src\css\style.css
```css
-btn,
.browse-all-btn {
    padding: 0.875rem 1.5rem;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}
```


### src\css\style.css
```css
-btn,
    .browse-all-btn {
        width: 100%;
        max-width: 200px;
        justify-content: center;
    }
```


### src\css\style.css
```css
-btn {
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1rem;
    border-radius: 0.75rem;
    text-decoration: none;
    font-weight: 600;
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid var(--glass-border);
    transition: all var(--transition-speed) ease;
    font-size: 0.9rem;
}
```


### src\css\style.css
```css
-btn {
    flex: 1.5;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    border-radius: 0.75rem;
    border: none;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    transition: all var(--transition-speed) ease;
    background-size: 200% auto;
    position: relative;
    overflow: hidden;
    font-size: 0.9rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}
```


### src\css\style.css
```css
-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
    pointer-events: none;
}
```


### src\css\style.css
```css
-btn {
        display: flex !important;
        flex-direction: column;
        justify-content: center;
        /* Changed from space-between for better centering */
        gap: 5px;
        /* Space between hamburger lines */
        width: 44px;
        /* Increased from 32px for better touch target */
        height: 44px;
        /* Increased from 24px for better touch target */
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 10px;
        /* Added padding for larger clickable area */
        z-index: 10000;
        /* Above navbar (9999) to ensure clickability */
        transition: all 0.2s ease;
        /* Smooth feedback */
    }
```


### src\css\style.css
```css
-btn span {
        display: block;
        width: 24px;
        /* Fixed width for hamburger lines */
        height: 3px;
        background: white;
        border-radius: 3px;
        transition: all 0.3s var(--transition-timing);
    }
```


### src\css\style.css
```css
-btn {
        width: 100%;
        justify-content: center;
        padding: 1rem 1.5rem;
        font-size: 1rem;
    }
```


### src\css\style.css
```css
-btn,
    .buy-now-btn {
        padding: 0.75rem 1rem;
        font-size: 0.9rem;
    }
```


### src\css\style.css
```css
-btn,
    .buy-now-btn {
        flex: 1;
        padding: 0.875rem 1rem;
        font-size: 0.9rem;
    }
```


### src\css\style.css
```css
-btn {
        width: 40px;
        height: 40px;
        padding: 8px;
    }
```


### src\css\style.css
```css
-btn span {
        width: 22px;
        /* Slightly smaller hamburger lines */
    }
```


### src\css\style.css
```css
-btn {
    display: inline-block;
    width: 100%;
    padding: 0.875rem 2rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 700;
    font-size: 1rem;
    transition: all var(--transition-speed) ease;
    border: 2px solid transparent;
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}
```


### src\css\style.css
```css
-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s ease;
}
```


### src\css\style.css
```css
-btn {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    padding: 0.25rem;
}
```


### src\css\style.css
```css
-btn svg {
    width: 1.25rem;
    height: 1.25rem;
}
```


### src\css\style.css
```css
-btn {
    padding: 0.5rem 1rem;
    background: var(--glass-bg-light);
    border: 1px solid var(--glass-border);
    border-radius: 8px;
    color: var(--text-secondary);
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
-btn {
    padding: 0.5rem;
    background: var(--glass-bg-dark);
    border: 1px solid var(--glass-border);
    border-radius: 8px;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
-btn svg {
    width: 1rem;
    height: 1rem;
}
```


### src\css\style.css
```css
-btn {
    padding: 0.875rem 1.5rem;
    background: linear-gradient(135deg, #a855f7, #4ecdc4);
    border: none;
    border-radius: 8px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
-btn {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: all 0.3s ease;
    border: 1px solid var(--glass-border);
}
```


### src\css\style.css
```css
-btn svg {
    width: 20px;
    height: 20px;
}
```


### src\css\style.css
```css
-btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: linear-gradient(135deg, #a855f7, #4ecdc4);
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    text-align: center;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
-btn {
    width: 100%;
    padding: 0.875rem 1.5rem;
    background: linear-gradient(135deg, #8A2BE2, #4A00E0);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    box-shadow: 0 4px 15px rgba(138, 43, 226, 0.3);
    margin-top: auto;
}
```


### src\css\style.css
```css
-btn .btn-arrow {
    width: 20px;
    height: 20px;
    stroke: currentColor;
    stroke-width: 2;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: transform var(--transition-speed) ease;
}
```


### src\css\style.css
```css
-btn {
        padding: 0.75rem 1.25rem;
        font-size: 0.95rem;
    }
```


### src\css\style.css
```css
-btn {
        padding: 0.75rem 1rem;
        font-size: 0.9rem;
    }
```


### src\css\style.css
```css
-btn {
        padding: 0.625rem 1rem;
        font-size: 0.875rem;
    }
```


### src\css\style.css
```css
-btn {
    width: auto;
    align-self: flex-start;
}
```


### src\css\style.css
```css
-btn {
        width: 100%;
    }
```


### src\css\style.css
```css
-btn {
    width: 100%;
    padding: var(--spacing-md) var(--spacing-xl);
    background: linear-gradient(135deg, #8A2BE2, #4A00E0);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: var(--border-radius-lg);
    color: white;
    font-size: var(--body-regular);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}
```


### src\css\style.css
```css
-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
}
```


### src\css\style.css
```css
input {
    width: 100%;
    padding: var(--spacing-md) var(--spacing-lg) var(--spacing-md) 3.5rem;
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--border-radius-lg);
    color: var(--text-primary);
    font-size: var(--body-regular);
    outline: none;
    transition: all var(--transition-speed) ease;
    font-family: inherit;
}
```


### src\css\style.css
```css
input {
        padding: var(--spacing-md) var(--spacing-md) var(--spacing-md) 3rem;
        font-size: var(--body-small);
    }
```


### src\css\style.css
```css
input {
    width: 100%;
    padding: 0.875rem 1rem 0.875rem 3rem;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid var(--glass-border);
    border-radius: 0.75rem;
    color: #fff;
    font-size: 1rem;
    outline: none;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
input-prominent {
    width: 100%;
    padding: 1.25rem 4rem 1.25rem 4rem;
    background: transparent;
    border: none;
    outline: none;
    color: var(--text-primary);
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.5;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
input-prominent {
        padding: 1.125rem 3.5rem 1.125rem 3.5rem;
        font-size: 1rem;
    }
```


### src\css\style.css
```css
input-prominent {
        padding: 1rem 3rem 1rem 3rem;
        font-size: 0.95rem;
    }
```


### src\css\style.css
```css
input-prominent {
        padding: 0.875rem 2.75rem 0.875rem 2.75rem;
        font-size: 0.9rem;
    }
```


### src\css\style.css
```css
input-field {
    width: 100%;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid var(--glass-border);
    border-radius: 0.75rem;
    color: #fff;
    font-size: 1rem;
    transition: all var(--transition-speed) ease;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}
```


### src\css\style.css
```css
input-field {
    resize: vertical;
    min-height: 120px;
}
```


### src\css\style.css
```css
input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 3rem;
    background: var(--glass-bg-light);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    color: var(--text-primary);
    font-size: 1rem;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
input {
    flex: 1;
    padding: 0.875rem 1rem;
    background: var(--glass-bg-light);
    border: 1px solid var(--glass-border);
    border-radius: 8px;
    color: var(--text-primary);
    font-size: 1rem;
}
```


### src\css\style.css
```css
INPUT ICON
 * Icon on left side of input
 */
.auth-input-icon {
    position: absolute;
    left: var(--spacing-md);
    width: 20px;
    height: 20px;
    color: var(--text-muted);
    pointer-events: none;
    z-index: 1;
}
```


### src\css\style.css
```css
INPUT FIELD
 */
.auth-input {
    width: 100%;
    padding: var(--spacing-md) var(--spacing-md) var(--spacing-md) 48px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-lg);
    color: var(--text-primary);
    font-size: var(--body-regular);
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
========================================
   VARIABLE DEFINITIONS & RESET
   ======================================== */

:root {
    /* ===== CORE COLOR SYSTEM ===== */
    --primary-glow-color: rgba(168, 85, 247, 0.5);
    --secondary-glow-color: rgba(78, 205, 196, 0.4);
    --math-glow-color: rgba(255, 165, 0, 0.5);
    --ai-glow-color: rgba(236, 72, 153, 0.5);

    /* ===== GLASSMORPHISM SYSTEM ===== */
    --glass-bg-dark: rgba(8, 8, 16, 0.9);
    --glass-bg-light: rgba(16, 16, 28, 0.8);
    --glass-border: rgba(255, 255, 255, 0.12);
    --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    --glass-blur: 20px;
    --glass-hover-bg-light: rgba(24, 24, 40, 0.9);
    --glass-hover-border: rgba(255, 255, 255, 0.2);
    --glass-hover-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);

    /* ===== INCLUSIVITY SECTION COLORS ===== */
    --inclusivity-gradient: linear-gradient(135deg,
            var(--primary-glow-color),
            var(--secondary-glow-color),
            var(--math-glow-color),
            var(--ai-glow-color));
    --inclusivity-bg: rgba(168, 85, 247, 0.05);
    --inclusivity-border: rgba(168, 85, 247, 0.2);
    --demographic-kids: rgba(78, 205, 196, 0.8);
    --demographic-teens: rgba(168, 85, 247, 0.8);
    --demographic-adults: rgba(255, 165, 0, 0.8);
    --demographic-professionals: rgba(236, 72, 153, 0.8);

    /* ===== GIRLS SECTION COLORS ===== */
    --girls-primary: rgba(236, 72, 153, 0.8);
    --girls-secondary: rgba(251, 207, 232, 0.6);
    --girls-accent: rgba(168, 85, 247, 0.7);
    --girls-warm-bg: rgba(251, 207, 232, 0.1);
    /* Accent text colors - all meet WCAG AA standards against #000002 background */
    --girls-empowerment-color: #EC4899;  /* Contrast: 5.95:1 ✓ WCAG AA */
    --girls-confidence-color: #A855F7;   /* Contrast: 5.30:1 ✓ WCAG AA */
    --girls-creativity-color: #F59E0B;   /* Contrast: 9.77:1 ✓ WCAG AA */
    --girls-teamwork-color: #10B981;     /* Contrast: 8.27:1 ✓ WCAG AA */

    /* ===== ENHANCED TYPOGRAPHY SYSTEM ===== */
    /* All text colors meet WCAG AA standards (4.5:1 contrast ratio) against #000002 background */
    --text-primary: #F8FAFC;      /* Contrast: 20.05:1 ✓ WCAG AA */
    --text-secondary: #CBD5E1;    /* Contrast: 14.13:1 ✓ WCAG AA */
    --text-muted: #94A3B8;        /* Contrast: 8.18:1 ✓ WCAG AA */
    --heading-primary: clamp(2.5rem, 5vw, 4rem);
    --heading-secondary: clamp(2rem, 4vw, 3rem);
    --heading-tertiary: clamp(1.5rem, 3vw, 2rem);
    --body-large: clamp(1.125rem, 2vw, 1.25rem);
    --body-regular: clamp(1rem, 1.5vw, 1.125rem);
    --body-small: clamp(0.875rem, 1.2vw, 1rem);

    /* ===== ENHANCED SPACING SYSTEM ===== */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-2xl: 3rem;
    --spacing-3xl: 4rem;
    --section-gap: clamp(4rem, 8vw, 8rem);
    --card-gap: clamp(1.5rem, 3vw, 2.5rem);
    --section-padding-mobile: 2rem 1rem;
    --section-padding-tablet: 3rem 2rem;
    --section-padding-desktop: 4rem 3rem;
    --content-max-width: 1200px;
    --text-max-width: 65ch;

    /* ===== BORDER RADIUS SYSTEM ===== */
    --border-radius-sm: 0.5rem;
    --border-radius-md: 0.75rem;
    --border-radius-lg: 1rem;
    --border-radius-xl: 1.5rem;
    --border-radius-2xl: 2rem;

    /* ===== ANIMATION & TRANSITION SYSTEM ===== */
    --card-hover-transform: translateY(-8px) scale(1.02);
    --transition-speed: 0.3s;
    --transition-timing: cubic-bezier(0.25, 0.46, 0.45, 0.94);
    --animation-duration-fast: 0.2s;
    --animation-duration-normal: 0.3s;
    --animation-duration-slow: 0.5s;
}
```


### src\css\style.css
```css
transition-delay: 0.4s;
}

body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #000002;
    color: var(--text-primary);
    min-height: 100vh;
    overflow-x: hidden;
    line-height: 1.6;
    margin: 0;
    padding: 0;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
```


### src\css\style.css
```css
========================================
   ENHANCED TYPOGRAPHY HIERARCHY
   ======================================== */

.heading-primary {
    font-size: var(--heading-primary);
    font-weight: 800;
    line-height: 1.1;
    letter-spacing: -0.02em;
    background: linear-gradient(135deg, var(--text-primary), #d1d8ff);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}
```


### src\css\style.css
```css
eading-secondary {
    font-size: var(--heading-secondary);
    font-weight: 700;
    line-height: 1.2;
    letter-spacing: -0.01em;
    background: linear-gradient(135deg, var(--text-primary), #d1d8ff);
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
}
```


### src\css\style.css
```css
eading-tertiary {
    font-size: var(--heading-tertiary);
    font-weight: 600;
    line-height: 1.3;
    color: var(--text-primary);
}
```


### src\css\style.css
```css
body-large {
    font-size: var(--body-large);
    font-weight: 500;
    line-height: 1.6;
    color: var(--text-secondary);
}
```


### src\css\style.css
```css
body-regular {
    font-size: var(--body-regular);
    font-weight: 400;
    line-height: 1.6;
    color: var(--text-secondary);
}
```


### src\css\style.css
```css
body-small {
    font-size: var(--body-small);
    font-weight: 400;
    line-height: 1.5;
    color: var(--text-muted);
}
```


### src\css\style.css
```css
ont-size: 14px;
    }

    .container {
        padding: 0 var(--spacing-md);
    }
```


### src\css\style.css
```css
nav-container {
        padding: 0.875rem 1rem;
    }
```


### src\css\style.css
```css
ont-size: 0.95rem;
    }

    .logo-img {
        width: 38px;
        height: 38px;
        max-width: 38px;
        max-height: 38px;
    }
```


### src\css\style.css
```css
logo-icon {
        width: 36px;
        height: 36px;
    }
```


### src\css\style.css
```css
lay: none;
        }
        .logo-img {
            width: 36px;
            height: 36px;
            max-width: 36px;
            max-height: 36px;
        }
```


### src\css\style.css
```css
tab-button {
        min-width: 130px;
        padding: 0.875rem 1.25rem;
        font-size: 0.9rem;
    }
```


### src\css\style.css
```css
ection-title {
        font-size: 1.75rem;
        padding: 0 1rem;
    }
```


### src\css\style.css
```css
ection-subtitle {
        font-size: 0.95rem;
        padding: 0 1rem;
    }
```


### src\css\style.css
```css
tabs-wrapper {
        padding: 0;
    }
```


### src\css\style.css
```css
tabs-container {
        padding: 0.5rem 0.25rem;
    }
```


### src\css\style.css
```css
ero section mobile optimization */
    .hero-section {
        padding: 2rem 1rem;
        gap: 1.5rem;
        border-radius: 1rem;
    }
```


### src\css\style.css
```css
ero-text h1 {
        font-size: clamp(1.75rem, 7vw, 2.25rem);
        line-height: 1.3;
        margin-bottom: 1rem;
    }
```


### src\css\style.css
```css
ero-text p {
        font-size: clamp(0.9rem, 3vw, 1rem);
        line-height: 1.5;
        padding: 0 0.5rem;
    }
```


### src\css\style.css
```css
edia (max-width: 768px) {


    body.index-page main,
    body.courses-page main {
        padding: 100px var(--spacing-md) var(--spacing-md);
    }
```


### src\css\style.css
```css
ero-section {
        flex-direction: column;
        text-align: center;
        padding: var(--spacing-2xl);
        gap: var(--spacing-2xl);
    }
```


### src\css\style.css
```css
rid-template-columns: 1fr;
        gap: var(--spacing-lg);
    }

    .feature-item {
        text-align: center;
        padding: var(--spacing-lg);
    }
```


### src\css\style.css
```css
edia (max-width: 1024px) {


    .nav-container {
        padding: var(--spacing-md) var(--spacing-xl);
    }
```


### src\css\style.css
```css
ero-section {
        padding: var(--spacing-2xl);
    }
```


### src\css\style.css
```css
rid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
}

@media (min-width: 1400px) {


    .container {
        max-width: 1400px;
    }
```


### src\css\style.css
```css
ero-section {
        padding: var(--spacing-3xl);
    }
```


### src\css\style.css
```css
transform: scale(0.98);
    }


    .nav-link,
    .cta-button,
    .card-button {
        min-height: 44px;
        min-width: 44px;
    }
```


### src\css\style.css
```css
e-rendering: -webkit-optimize-contrast;
        image-rendering: crisp-edges;
    }
}

/* ========================================
   STANDARDIZED DESIGN CONSISTENCY
   ======================================== */


.btn-primary,
.cta-button,
.card-button.coding {
    background: linear-gradient(135deg, #8A2BE2, #4A00E0);
    color: white;
    padding: var(--spacing-md) var(--spacing-xl);
    border-radius: var(--border-radius-lg);
    text-decoration: none;
    font-weight: 600;
    font-size: var(--body-regular);
    transition: all var(--transition-speed) ease;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 6px 25px var(--primary-glow-color);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm);
    cursor: pointer;
    text-align: center;
    min-height: 44px;
}
```


### src\css\style.css
```css
btn-secondary,
.card-button.math {
    background: linear-gradient(135deg, #FFD700, #FFA500);
    color: #000;
    padding: var(--spacing-md) var(--spacing-xl);
    border-radius: var(--border-radius-lg);
    text-decoration: none;
    font-weight: 600;
    font-size: var(--body-regular);
    transition: all var(--transition-speed) ease;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 6px 25px var(--math-glow-color);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm);
    cursor: pointer;
    text-align: center;
    min-height: 44px;
}
```


### src\css\style.css
```css
btn-tertiary,
.card-button.ai {
    background: linear-gradient(135deg, #EC4899, #BE185D);
    color: white;
    padding: var(--spacing-md) var(--spacing-xl);
    border-radius: var(--border-radius-lg);
    text-decoration: none;
    font-weight: 600;
    font-size: var(--body-regular);
    transition: all var(--transition-speed) ease;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 6px 25px var(--ai-glow-color);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm);
    cursor: pointer;
    text-align: center;
    min-height: 44px;
}
```


### src\css\style.css
```css
background: var(--glass-hover-bg-light);
    border-color: var(--glass-hover-border);
    box-shadow: var(--glass-hover-shadow);
    transform: var(--card-hover-transform);
}


h1,
.h1 {
    font-size: var(--heading-primary);
    font-weight: 800;
    line-height: 1.1;
}
```


### src\css\style.css
```css
ont-size: var(--heading-secondary);
    font-weight: 700;
    line-height: 1.2;
}

h3,
.h3 {
    font-size: var(--heading-tertiary);
    font-weight: 600;
    line-height: 1.3;
}
```


### src\css\style.css
```css
ont-size: var(--body-large);
    font-weight: 600;
    line-height: 1.4;
}

h5,
.h5 {
    font-size: var(--body-regular);
    font-weight: 600;
    line-height: 1.4;
}
```


### src\css\style.css
```css
ont-size: var(--body-small);
    font-weight: 600;
    line-height: 1.4;
}

p,
.body-text {
    font-size: var(--body-regular);
    line-height: 1.6;
    color: var(--text-secondary);
}
```


### src\css\style.css
```css
text-large {
    font-size: var(--body-large);
    line-height: 1.6;
    color: var(--text-secondary);
}
```


### src\css\style.css
```css
text-small {
    font-size: var(--body-small);
    line-height: 1.5;
    color: var(--text-muted);
}
```


### src\css\style.css
```css
rgin-bottom: var(--spacing-2xl);
}

.p-xs {
    padding: var(--spacing-xs);
}
```


### src\css\style.css
```css
ng: var(--spacing-sm);
}

.p-md {
    padding: var(--spacing-md);
}
```


### src\css\style.css
```css
lg {
    padding: var(--spacing-lg);
}
```


### src\css\style.css
```css
l {
    padding: var(--spacing-xl);
}
```


### src\css\style.css
```css
l {
    padding: var(--spacing-2xl);
}
```


### src\css\style.css
```css
background: rgba(16, 16, 28, 0.95);
    }
}


img {
    loading: lazy;
    decoding: async;
    max-width: 100%;
    height: auto;
}
```


### src\css\style.css
```css
background: rgba(16, 16, 28, 0.9);
  }
  
  /* Samsung Internet scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
```


### src\css\style.css
```css
lay: none;
  }
  
  /* Firefox Mobile scrollbar styling */
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(168, 85, 247, 0.5) rgba(16, 16, 28, 0.3);
  }
```


### src\css\style.css
```css
lay: flex;
        flex-wrap: wrap;
        gap: var(--spacing-lg);
    }

    .courses-grid>*,
    .features-grid>*,
    .inclusivity-chart>*,
    .girls-features-grid>* {
        flex: 1 1 280px;
        min-width: 280px;
    }
```


### src\css\style.css
```css
upports not (display: grid) {

    .demographic-card,
    .girls-empowerment-card,
    .course-card {
        width: calc(50% - var(--spacing-lg));
        display: inline-block;
        vertical-align: top;
        margin-bottom: var(--spacing-lg);
    }
```


### src\css\style.css
```css
rgin-top: -8px;
        margin-bottom: 8px;
    }
}


@supports not (clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%)) {

    .hero-section::before,
    .inclusivity-section::before {
        border-radius: 50%;
        width: 200px;
        height: 200px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
```


### src\css\style.css
```css
olor: #64748b;
    }
}


@media (pointer: coarse) {

    .nav-link,
    .cta-button,
    .card-button,
    .tab-button,
    .sub-tab {
        min-height: 44px;
        min-width: 44px;
        padding: var(--spacing-md) var(--spacing-lg);
    }
```


### src\css\style.css
```css
ndex: 10002;
}


.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}
```


### src\css\style.css
```css
link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: var(--primary-glow-color);
    color: white;
    padding: 8px;
    text-decoration: none;
    border-radius: 4px;
    z-index: 10003;
}
```


### src\css\style.css
```css
top: 6px;
}


#background-canvas {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -3;
    opacity: 0.8;
}
```


### src\css\style.css
```css
body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -2;
    background-image:
        radial-gradient(ellipse 80% 50% at 50% -20%, rgba(120, 119, 198, 0.2), transparent),
        radial-gradient(ellipse 80% 50% at 50% 120%, rgba(168, 85, 247, 0.15), transparent);
    animation: subtle-glow 20s ease-in-out infinite;
}
```


### src\css\style.css
```css
transform: translateY(5px) rotate(-1deg);
    }
}


/* ========================================
   HEADER & NAVBAR Z-INDEX HIERARCHY
   
   Z-Index Layering (highest to lowest):
   - Modal/Overlay: 10001+
   - Dropdown Content: 10000
   - Mobile Menu Button: 10000 (must be clickable)
   - Header/Navbar: 9999
   - Mobile Menu: 9998
   - Page Content: 1 or auto
   - Background: -1 to -3
   ======================================== */

header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    /* Below mobile menu button (10000) */
    width: 100%;
    margin: 0;
    padding: 0;
    background: rgba(10, 10, 20, 0.95);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
}
```


### src\css\style.css
```css
nav {
    width: 100%;
    z-index: 1000;
    /* Relative z-index within header */
    position: relative;
    /* Create stacking context */
}
```


### src\css\style.css
```css
navbar {
    background: transparent;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid rgba(168, 85, 247, 0.3);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
    transition: all var(--transition-speed) var(--transition-timing);
    margin: 0;
    width: 100%;
    z-index: 9999;
    /* Same as header */
    position: relative;
    /* Explicit positioning for stacking context */
}
```


### src\css\style.css
```css
box-shadow: 0 12px 40px rgba(168, 85, 247, 0.2);
}

.nav-container {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    padding: 0.875rem 1.75rem;
    gap: 1.5rem;
    position: relative;
    /* Ensure proper stacking */
    z-index: 1;
    /* Lower than mobile-menu-btn to not block it */
}
```


### src\css\style.css
```css
rid-template-columns: 40px auto 1fr auto;
}

.back-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background: rgba(168, 85, 247, 0.1);
    border: 1px solid rgba(168, 85, 247, 0.3);
    color: #a855f7;
    transition: all 0.3s ease;
    text-decoration: none;
    flex-shrink: 0;
}
```


### src\css\style.css
```css
background: rgba(168, 85, 247, 0.2);
    border-color: rgba(168, 85, 247, 0.5);
    transform: translateX(-3px);
}

.back-button svg {
    width: 20px;
    height: 20px;
}
```


### src\css\style.css
```css
lex-shrink: 0;
}

.logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    transition: transform 0.3s ease;
    max-height: 60px;
}
```


### src\css\style.css
```css
transform: scale(1.02);
}

/* Logo Image Styling */
.logo-img {
    width: 45px !important;
    height: 45px !important;
    max-width: 45px !important;
    max-height: 45px !important;
    min-width: 45px;
    min-height: 45px;
    object-fit: contain;
    object-position: center;
    display: block;
    transition: all 0.4s ease;
    filter: drop-shadow(0 0 10px rgba(168, 85, 247, 0.3));
}
```


### src\css\style.css
```css
transform: scale(1.05);
    filter: drop-shadow(0 0 20px rgba(168, 85, 247, 0.6));
}

/* Legacy logo-icon support (if needed elsewhere) */
.logo-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(45deg, #a855f7, #4ecdc4);
    border-radius: 0.875rem;
    display: grid;
    place-items: center;
    position: relative;
    box-shadow: 0 0 25px rgba(168, 85, 247, 0.5);
    transition: all 0.4s ease;
    animation: pulse-glow 3s ease-in-out infinite;
}
```


### src\css\style.css
```css
ont-weight: 700;
    font-size: 1.25rem;
    background: linear-gradient(135deg, #ffffff, #E0E7FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    white-space: nowrap;
}

.nav-menu {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    list-style: none;
    margin: 0;
    padding: 0;
    justify-self: end;
}
```


### src\css\style.css
```css
nav-link {
    padding: 0.625rem 1.25rem;
    text-decoration: none;
    color: #CBD5E1;
    font-weight: 500;
    font-size: 1rem;
    border-radius: 0.875rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: visible;
    border: 1px solid transparent;
    display: inline-flex;
    align-items: center;
    gap: 4px;
}
```


### src\css\style.css
```css
osition: relative;
}

.dropdown-content {
    position: absolute;
    top: calc(100% + 10px);
    left: 50%;
    background: var(--glass-bg-dark);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: 1rem;
    min-width: 220px;
    padding: 0.5rem;
    box-shadow: var(--glass-shadow);
    opacity: 0;
    visibility: hidden;
    transform: translateX(-50%) translateY(-10px);
    transition: all var(--transition-speed) var(--transition-timing);
    z-index: 1001;
}
```


### src\css\style.css
```css
opacity: 1;
    visibility: visible;
    transform: translateX(-50%) translateY(0);
}

.dropdown-item {
    display: block;
    padding: 0.75rem 1rem;
    color: #CBD5E1;
    text-decoration: none;
    font-size: 0.95rem;
    border-radius: 0.625rem;
    transition: all 0.3s ease;
    position: relative;
    overflow: visible;
}
```


### src\css\style.css
```css
background: rgba(168, 85, 247, 0.2);
    color: white;
    border-left: 3px solid rgba(168, 85, 247, 0.8);
}

/* Remove the flashy animation effect */
.dropdown-item::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(168, 85, 247, 0.1);
    transition: left 0.4s ease;
}
```


### src\css\style.css
```css
left: 0;
}

.dropdown-item:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    padding-left: 1.5rem;
}
```


### src\css\style.css
```css
ta-button {
    background: linear-gradient(135deg, #8A2BE2, #4A00E0);
    color: white;
    padding: 0.875rem 2rem;
    border-radius: 0.875rem;
    text-decoration: none;
    font-weight: 700;
    font-size: 1rem;
    transition: all var(--transition-speed) ease;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 6px 25px var(--primary-glow-color);
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}
```


### src\css\style.css
```css
ta-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s ease;
    pointer-events: none;
}
```


### src\css\style.css
```css
transform: translateY(-2px) scale(1.05);
}

/* ========================================
   MOBILE MENU BUTTON - Z-INDEX HIERARCHY
   Button must be above navbar (9999) to ensure clickability
   ======================================== */
.mobile-menu-btn {
    display: none;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 10px;
    /* Increased clickable area */
    z-index: 10000;
    /* Above navbar to ensure clickability */
    position: relative;
    /* Create stacking context */
    min-width: 44px;
    /* Meet touch target minimum */
    min-height: 44px;
    /* Meet touch target minimum */
    align-items: center;
    justify-content: center;
}
```


### src\css\style.css
```css
n {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6rem;
    width: 100%;
}
```


### src\css\style.css
```css
========================================
   PAGE-SPECIFIC LAYOUTS & SPACING
   ======================================== */


body.index-page main {
    padding: 120px 20px 20px;
}
```


### src\css\style.css
```css
body.courses-page main {
    padding: var(--section-padding-desktop);
    padding-top: 120px;
    gap: var(--spacing-2xl);
    max-width: 100%;
}
```


### src\css\style.css
```css
body.about-page main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 80px 20px;
    gap: 3rem;
}
```


### src\css\style.css
```css
body.courses-page .container {
    max-width: var(--content-max-width);
    margin: 0 auto;
    padding: 0 var(--spacing-lg);
}
```


### src\css\style.css
```css
lay: flex;
    flex-direction: column;
    gap: var(--spacing-2xl);
}


.tab-navigation {
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-xl);
    padding: var(--spacing-xl);
    margin-bottom: var(--spacing-2xl);
    box-shadow: var(--glass-shadow);
}
```


### src\css\style.css
```css
n-tabs {
    display: flex;
    gap: var(--spacing-sm);
    margin-bottom: var(--spacing-2xl);
    justify-content: center;
    background: rgba(255, 255, 255, 0.02);
    padding: var(--spacing-sm);
    border-radius: var(--border-radius-xl);
    position: relative;
}
```


### src\css\style.css
```css
n-tab {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-lg) var(--spacing-xl);
    background: transparent;
    border: none;
    border-radius: var(--border-radius-lg);
    color: var(--text-secondary);
    font-weight: 600;
    font-size: var(--body-regular);
    cursor: pointer;
    transition: all var(--transition-speed) ease;
    min-width: 140px;
    justify-content: center;
    position: relative;
    z-index: 2;
}
```


### src\css\style.css
```css
background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    color: white;
    box-shadow: 0 8px 25px rgba(168, 85, 247, 0.2);
}

.main-tab .tab-icon {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
```


### src\css\style.css
```css
n-tab .tab-icon svg {
    width: 18px;
    height: 18px;
    transition: all var(--transition-speed) ease;
}
```


### src\css\style.css
```css
olor: var(--primary-glow-color);
}

.sub-tabs-container {
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    padding-top: var(--spacing-xl);
    margin-top: var(--spacing-lg);
}
```


### src\css\style.css
```css
ub-tabs {
    display: flex;
    gap: var(--spacing-sm);
    flex-wrap: wrap;
    justify-content: center;
    padding: var(--spacing-md);
    background: rgba(255, 255, 255, 0.02);
    border-radius: var(--border-radius-lg);
}
```


### src\css\style.css
```css
ub-tab {
    padding: var(--spacing-md) var(--spacing-lg);
    background: transparent;
    border: 1px solid transparent;
    border-radius: var(--border-radius-md);
    color: var(--text-muted);
    font-weight: 500;
    font-size: var(--body-small);
    cursor: pointer;
    transition: all var(--transition-speed) ease;
    white-space: nowrap;
    position: relative;
}
```


### src\css\style.css
```css
ub-tab::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: var(--primary-glow-color);
    transition: all var(--transition-speed) ease;
    transform: translateX(-50%);
}
```


### src\css\style.css
```css
olor: var(--text-primary);
    background: rgba(168, 85, 247, 0.1);
    border-color: rgba(168, 85, 247, 0.3);
}

.sub-tab.active::before {
    width: 80%;
}
```


### src\css\style.css
```css
edia (max-width: 768px) {
    .main-tabs {
        flex-direction: column;
        gap: var(--spacing-xs);
        padding: var(--spacing-md);
    }
```


### src\css\style.css
```css
n-tab {
        min-width: auto;
        width: 100%;
        padding: var(--spacing-md);
    }
```


### src\css\style.css
```css
ub-tabs {
        flex-direction: column;
        gap: var(--spacing-xs);
        padding: var(--spacing-sm);
    }
```


### src\css\style.css
```css
ub-tab {
        width: 100%;
        text-align: center;
        padding: var(--spacing-sm) var(--spacing-md);
    }
```


### src\css\style.css
```css
ection {
    width: 100%;
    max-width: 1200px;
    opacity: 0;
    transform: translateY(20px);
    animation: slideInUp 0.8s forwards;
    animation-timing-function: var(--transition-timing);
}
```


### src\css\style.css
```css
ection-title {
    text-align: center;
    font-size: clamp(2rem, 4vw, 2.8rem);
    font-weight: 700;
    margin-bottom: var(--spacing-2xl);
    background: linear-gradient(135deg, var(--text-primary), #d1d8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.02em;
    line-height: 1.2;
}
```


### src\css\style.css
```css
ection-subtitle {
    text-align: center;
    font-size: 1.125rem;
    color: var(--text-muted);
    max-width: 600px;
    margin: calc(-1 * var(--spacing-lg)) auto var(--spacing-2xl);
    font-weight: 400;
    line-height: 1.6;
}
```


### src\css\style.css
```css
ontainer {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
}
```


### src\css\style.css
```css
ero-section {
    display: flex;
    align-items: center;
    gap: 2.5rem;
    background: var(--glass-bg-dark);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border-radius: 1.5rem;
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow);
    padding: 3.5rem;
    overflow: hidden;
    position: relative;
    transition: all var(--transition-speed) ease;
}
```


### src\css\style.css
```css
box-shadow: 0 20px 50px rgba(168, 85, 247, 0.3);
    border-color: var(--glass-hover-border);
}

.hero-section::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 50%);
    z-index: 0;
    animation: subtle-glow 15s ease-in-out infinite;
}
```


### src\css\style.css
```css
lex: 1 1 55%;
    animation: slideInLeft 1s ease;
}

.hero-text h1 {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 800;
    background: linear-gradient(135deg, #ffffff, #d1d8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 40px rgba(255, 255, 255, 0.2);
    margin-bottom: 1rem;
    line-height: 1.2;
    white-space: nowrap;
}
```


### src\css\style.css
```css
te-space: normal;
        text-align: center;
        margin-bottom: 1.5rem;
    }
    
    .hero-text p {
        text-align: center;
        max-width: 100%;
        margin: 0 auto;
        padding: 0 1rem;
    }
```


### src\css\style.css
```css
background: linear-gradient(135deg, #a855f7, #4ecdc4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-weight: 900;
    text-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
    display: inline-block;
}

.hero-text p {
    font-size: clamp(1rem, 2vw, 1.15rem);
    color: #94a3b8;
    max-width: 500px;
    animation: fadeIn 1s ease 0.5s both;
}
```


### src\css\style.css
```css
lex: 1 1 45%;
    display: grid;
    place-items: center;
    animation: slideInRight 1s ease;
}

.hero-image svg {
    width: 100%;
    max-width: 300px;
    animation: hero-float 6s ease-in-out infinite;
}
```


### src\css\style.css
```css
transform: translateY(-10px) rotate(1deg);
    }
}

/* ========================================
   INCLUSIVITY SECTION - "CODING AND MATHS FOR EVERYONE"
   ======================================== */

.inclusivity-section {
    width: 100%;
    max-width: var(--content-max-width);
    margin: var(--section-gap) auto;
    padding: var(--spacing-3xl);
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--inclusivity-border);
    border-radius: var(--border-radius-2xl);
    box-shadow: var(--glass-shadow);
    position: relative;
    overflow: hidden;
    animation: slideInUp 0.8s ease-out;
}
```


### src\css\style.css
```css
ontent: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--inclusivity-gradient);
    opacity: 0.05;
    z-index: 0;
    animation: subtle-glow 20s ease-in-out infinite;
}

.inclusivity-section::after {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 70%);
    z-index: 0;
    animation: subtle-glow 25s ease-in-out infinite reverse;
}
```


### src\css\style.css
```css
osition: relative;
    z-index: 1;
    text-align: center;
}

.inclusivity-title {
    font-size: var(--heading-primary);
    font-weight: 800;
    margin-bottom: var(--spacing-lg);
    background: var(--inclusivity-gradient);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.2;
    letter-spacing: -0.02em;
    position: relative;
    animation: fadeIn 1s ease-out 0.3s both;
}
```


### src\css\style.css
```css
nclusivity-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: var(--inclusivity-gradient);
    border-radius: 2px;
    animation: slideInUp 0.8s ease-out 0.8s both;
}
```


### src\css\style.css
```css
nclusivity-subtitle {
    font-size: var(--body-large);
    color: var(--text-secondary);
    margin-bottom: var(--spacing-3xl);
    max-width: var(--text-max-width);
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
}
```


### src\css\style.css
```css
lay: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: var(--card-gap);
    margin-top: var(--spacing-3xl);
}

.demographic-card {
    background: var(--glass-bg-dark);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-xl);
    padding: var(--spacing-xl);
    text-align: center;
    transition: all var(--transition-speed) var(--transition-timing);
    position: relative;
    overflow: hidden;
    animation: fadeIn 0.8s ease-out;
}
```


### src\css\style.css
```css
nimation-delay: 0.4s;
}

.demographic-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    transition: transform var(--transition-speed) ease;
    transform: scaleX(0);
    transform-origin: left;
}
```


### src\css\style.css
```css
transform: scaleX(1);
}

.demographic-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto var(--spacing-lg);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    transition: all var(--transition-speed) ease;
    position: relative;
    overflow: hidden;
}
```


### src\css\style.css
```css
ont-size: var(--heading-tertiary);
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--spacing-sm);
}

.demographic-description {
    font-size: var(--body-regular);
    color: var(--text-muted);
    line-height: 1.5;
}
```


### src\css\style.css
```css
ont-size: var(--body-small);
    color: var(--text-secondary);
    font-weight: 500;
    margin-top: var(--spacing-sm);
    opacity: 0.8;
}


@media (max-width: 768px) {
    .inclusivity-section {
        padding: var(--section-padding-mobile);
        margin: var(--spacing-2xl) auto;
    }
```


### src\css\style.css
```css
rid-template-columns: 1fr;
        gap: var(--spacing-lg);
    }

    .demographic-card {
        padding: var(--spacing-lg);
    }
```


### src\css\style.css
```css
========================================
   ENHANCED CODING FOR GIRLS SECTION
   ======================================== */

.coding-for-girls-section {
    width: 100%;
    max-width: var(--content-max-width);
    margin: var(--section-gap) auto;
    padding: var(--spacing-3xl);
    background: var(--girls-warm-bg);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--girls-primary);
    border-radius: var(--border-radius-2xl);
    box-shadow: 0 20px 50px rgba(236, 72, 153, 0.2);
    position: relative;
    overflow: hidden;
    animation: slideInUp 0.8s ease-out;
}
```


### src\css\style.css
```css
lay: flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.empowerment-circle {
    width: 300px;
    height: 300px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
```


### src\css\style.css
```css
osition: absolute;
    border-radius: 50%;
    animation: float 6s ease-in-out infinite;
}

.circle-layer:nth-child(1) {
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--girls-empowerment-color), transparent);
    opacity: 0.2;
    animation-delay: 0s;
}
```


### src\css\style.css
```css
rcle-layer:nth-child(2) {
    width: 80%;
    height: 80%;
    background: linear-gradient(225deg, var(--girls-confidence-color), transparent);
    opacity: 0.3;
    animation-delay: -2s;
}
```


### src\css\style.css
```css
rcle-layer:nth-child(3) {
    width: 60%;
    height: 60%;
    background: linear-gradient(315deg, var(--girls-creativity-color), transparent);
    opacity: 0.4;
    animation-delay: -4s;
}
```


### src\css\style.css
```css
empowerment-icons {
    position: absolute;
    width: 100%;
    height: 100%;
}
```


### src\css\style.css
```css
empowerment-icon {
    position: absolute;
    width: 60px;
    height: 60px;
    background: var(--glass-bg-dark);
    border: 2px solid var(--girls-empowerment-color);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    color: var(--girls-empowerment-color);
    animation: pulse-glow 3s ease-in-out infinite;
    transition: all var(--transition-speed) ease;
}
```


### src\css\style.css
```css
text-align: left;
}

.girls-title {
    font-size: var(--heading-primary);
    font-weight: 800;
    margin-bottom: var(--spacing-lg);
    background: linear-gradient(135deg, var(--girls-empowerment-color), var(--girls-confidence-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1.2;
    letter-spacing: -0.02em;
}
```


### src\css\style.css
```css
rls-subtitle {
    font-size: var(--body-large);
    color: var(--text-secondary);
    margin-bottom: var(--spacing-xl);
    line-height: 1.6;
    font-weight: 500;
}
```


### src\css\style.css
```css
lay: grid;
    gap: var(--spacing-md);
}

.girls-feature {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    padding: var(--spacing-md);
    background: rgba(236, 72, 153, 0.1);
    border-radius: var(--border-radius-lg);
    transition: all var(--transition-speed) ease;
}
```


### src\css\style.css
```css
background: rgba(236, 72, 153, 0.15);
    transform: translateX(10px);
}

.girls-feature-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, var(--girls-empowerment-color), var(--girls-confidence-color));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.2rem;
    flex-shrink: 0;
}
```


### src\css\style.css
```css
rgin-top: var(--spacing-xl);
}

.girls-cta-button {
    background: linear-gradient(135deg, var(--girls-empowerment-color), var(--girls-confidence-color));
    color: white;
    padding: var(--spacing-lg) var(--spacing-2xl);
    border-radius: var(--border-radius-lg);
    text-decoration: none;
    font-weight: 700;
    font-size: var(--body-regular);
    transition: all var(--transition-speed) ease;
    display: inline-flex;
    align-items: center;
    gap: var(--spacing-sm);
    box-shadow: 0 10px 30px rgba(236, 72, 153, 0.3);
}
```


### src\css\style.css
```css
lay: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--card-gap);
    margin-top: var(--spacing-3xl);
    position: relative;
    z-index: 1;
}

.girls-empowerment-card {
    background: var(--glass-bg-dark);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--girls-primary);
    border-radius: var(--border-radius-xl);
    padding: var(--spacing-xl);
    text-align: center;
    transition: all var(--transition-speed) ease;
    position: relative;
    overflow: hidden;
}
```


### src\css\style.css
```css
rls-empowerment-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--girls-empowerment-color), var(--girls-confidence-color));
    transform: scaleX(0);
    transition: transform var(--transition-speed) ease;
    transform-origin: left;
}
```


### src\css\style.css
```css
transform: scaleX(1);
}

.girls-card-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto var(--spacing-lg);
    background: linear-gradient(135deg, var(--girls-empowerment-color), var(--girls-confidence-color));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
    color: white;
    transition: all var(--transition-speed) ease;
}
```


### src\css\style.css
```css
ont-size: var(--heading-tertiary);
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--spacing-sm);
}

.girls-card-description {
    font-size: var(--body-regular);
    color: var(--text-muted);
    line-height: 1.5;
}
```


### src\css\style.css
```css
edia (max-width: 768px) {
    .coding-for-girls-section {
        padding: var(--section-padding-mobile);
    }
```


### src\css\style.css
```css
rid-template-columns: 1fr;
        gap: var(--spacing-2xl);
        text-align: center;
    }

    .empowerment-circle {
        width: 250px;
        height: 250px;
    }
```


### src\css\style.css
```css
rid-template-columns: 1fr;
        gap: var(--spacing-lg);
    }
}

/* ========================================
   PROFESSIONAL LEARNING PATHWAY SECTION
   ======================================== */

.learning-pathway {
    max-width: 1200px;
    margin: 0 auto;
    padding: var(--spacing-2xl) 0;
}
```


### src\css\style.css
```css
lay: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-3xl);
    flex-wrap: wrap;
}

.pathway-node {
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-xl);
    padding: var(--spacing-xl);
    text-align: center;
    transition: all var(--transition-speed) ease;
    position: relative;
    min-width: 180px;
    animation: slideInUp 0.8s ease-out;
}
```


### src\css\style.css
```css
osition: relative;
    z-index: 1;
}

.node-icon {
    width: 60px;
    height: 60px;
    margin: 0 auto var(--spacing-md);
    background: linear-gradient(135deg, var(--primary-glow-color), var(--secondary-glow-color));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    transition: all var(--transition-speed) ease;
}
```


### src\css\style.css
```css
transform: scale(1.1);
    box-shadow: 0 10px 30px rgba(168, 85, 247, 0.4);
}

.node-icon svg {
    width: 24px;
    height: 24px;
}
```


### src\css\style.css
```css
ont-size: var(--body-small);
    color: var(--text-secondary);
    margin-bottom: var(--spacing-sm);
    font-weight: 500;
}

.node-description {
    font-size: var(--body-small);
    color: var(--text-muted);
    line-height: 1.4;
    display: block;
}
```


### src\css\style.css
```css
thway-connector {
    flex-shrink: 0;
    width: 100px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
```


### src\css\style.css
```css
thway-connector svg {
    width: 100%;
    height: 100%;
}
```


### src\css\style.css
```css
thway-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: var(--spacing-xl);
    margin-top: var(--spacing-3xl);
    padding: var(--spacing-2xl);
    background: var(--glass-bg-dark);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-xl);
    box-shadow: var(--glass-shadow);
}
```


### src\css\style.css
```css
tat-item {
    text-align: center;
    padding: var(--spacing-lg);
    transition: all var(--transition-speed) ease;
}
```


### src\css\style.css
```css
transform: translateY(-4px);
}

.stat-number {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 800;
    background: linear-gradient(135deg, var(--primary-glow-color), var(--secondary-glow-color));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: var(--spacing-sm);
    line-height: 1;
}
```


### src\css\style.css
```css
background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid rgba(236, 72, 153, 0.3);
    box-shadow: 0 20px 50px rgba(236, 72, 153, 0.1);
}

.girls-visual svg {
    width: 100%;
    height: 200px;
}
```


### src\css\style.css
```css
lay: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    margin: var(--spacing-xl) 0;
}

.highlight-item {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    padding: var(--spacing-md);
    background: rgba(236, 72, 153, 0.05);
    border-radius: var(--border-radius-md);
    transition: all var(--transition-speed) ease;
}
```


### src\css\style.css
```css
background: rgba(236, 72, 153, 0.1);
    transform: translateX(8px);
}

.highlight-icon {
    width: 40px;
    height: 40px;
    background: linear-gradient(135deg, #EC4899, #A855F7);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    flex-shrink: 0;
}
```


### src\css\style.css
```css
light-icon svg {
    width: 20px;
    height: 20px;
}
```


### src\css\style.css
```css
lex-direction: column;
        gap: var(--spacing-md);
    }

    .pathway-connector {
        transform: rotate(90deg);
        width: 20px;
        height: 60px;
    }
```


### src\css\style.css
```css
thway-node {
        min-width: 280px;
        width: 100%;
    }
```


### src\css\style.css
```css
thway-stats {
        grid-template-columns: 1fr;
        gap: var(--spacing-lg);
        padding: var(--spacing-lg);
    }
```


### src\css\style.css
```css
r(--spacing-sm);
    }

    .highlight-item {
        padding: var(--spacing-sm);
    }
```


### src\css\style.css
```css
========================================
   AMAZING QUADRANT LAYOUT STYLES - GLOWY PURPLE VIBES
   ======================================== */

.learning-quadrant-container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 3rem 0;
}
```


### src\css\style.css
```css
uadrant-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 2rem;
    min-height: 550px;
    padding: 1rem;
}
```


### src\css\style.css
```css
uadrant-item {
    position: relative;
    border-radius: 2rem;
    padding: 3.5rem 2.5rem;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    animation: fadeInUp 0.8s ease-out;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}
```


### src\css\style.css
```css
lay: none;
}

.quadrant-content {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    gap: 1.5rem;
}
```


### src\css\style.css
```css
uadrant-icon {
    width: 120px;
    height: 120px;
    filter: drop-shadow(0 0 20px currentColor);
    transition: all 0.4s ease;
}
```


### src\css\style.css
```css
transform: scale(1.1) translateY(-5px);
    filter: drop-shadow(0 0 35px currentColor);
}

.quadrant-title {
    font-size: 2.5rem;
    font-weight: 800;
    margin: 0;
    letter-spacing: 0.5px;
    text-shadow: 0 0 30px currentColor;
    line-height: 1.2;
}
```


### src\css\style.css
```css
box-shadow: 0 15px 60px rgba(236, 72, 153, 0.4), 0 0 80px rgba(236, 72, 153, 0.2);
    border-color: rgba(236, 72, 153, 0.5);
}

.quadrant-overall-stats {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
    padding: 2rem;
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: 1.5rem;
    box-shadow: var(--glass-shadow);
}
```


### src\css\style.css
```css
overall-stat-item {
    text-align: center;
    padding: 1.5rem;
    border-radius: 1rem;
    background: rgba(255, 255, 255, 0.05);
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
ont-size: 1rem;
    color: var(--text-secondary);
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}


@media (max-width: 768px) {
    .learning-quadrant-container {
        padding: 2rem 0;
        max-width: 600px;
    }
```


### src\css\style.css
```css
uadrant-grid {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        min-height: auto;
        padding: 0.5rem;
    }
```


### src\css\style.css
```css
uadrant-item {
        padding: 2.5rem 2rem;
    }
```


### src\css\style.css
```css
uadrant-icon {
        width: 100px;
        height: 100px;
    }
```


### src\css\style.css
```css
ont-size: 2rem;
    }

    .quadrant-overall-stats {
        grid-template-columns: repeat(2, 1fr);
        gap: 1rem;
        margin-top: 2rem;
        padding: 1.5rem;
    }
```


### src\css\style.css
```css
ont-size: 1.8rem;
    }
}

@media (max-width: 480px) {
    .learning-quadrant-container {
        max-width: 400px;
        padding: 1.5rem 0;
    }
```


### src\css\style.css
```css
rid-template-columns: 1fr;
    }

    .quadrant-item {
        padding: 2rem 1.5rem;
    }
```


### src\css\style.css
```css
uadrant-icon {
        width: 80px;
        height: 80px;
    }
```


### src\css\style.css
```css
lay: grid;
    grid-template-columns: 280px 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
}

.filter-sidebar {
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: 1.5rem;
    padding: 2rem;
    position: sticky;
    top: 20px;
    height: fit-content;
    box-shadow: var(--glass-shadow);
    transition: all var(--transition-speed) ease;
    animation: slideInLeft 0.8s ease-out;
}
```


### src\css\style.css
```css
box-shadow: 0 12px 40px rgba(168, 85, 247, 0.2);
    border-color: var(--glass-hover-border);
}

.filter-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid var(--glass-border);
}
```


### src\css\style.css
```css
ont-size: 1.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #ffffff, #d1d8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.clear-btn {
    background: transparent;
    border: 1px solid var(--glass-border);
    color: #94a3b8;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    font-size: 0.85rem;
    cursor: pointer;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
ont-size: 1.1rem;
    font-weight: 600;
    color: #fff;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.filter-group-title::before {
    content: '';
    width: 4px;
    height: 20px;
    background: linear-gradient(180deg, var(--primary-glow-color), var(--secondary-glow-color));
    border-radius: 2px;
}
```


### src\css\style.css
```css
lter-option {
    display: flex;
    align-items: center;
    padding: 0.75rem;
    margin-bottom: 0.5rem;
    border-radius: 0.75rem;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}
```


### src\css\style.css
```css
lter-option::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.1), transparent);
    transition: left 0.5s ease;
}
```


### src\css\style.css
```css
left: 100%;
}

.filter-checkbox {
    width: 22px;
    height: 22px;
    margin-right: 0.75rem;
    border: 2px solid var(--glass-border);
    border-radius: 6px;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    flex-shrink: 0;
}
```


### src\css\style.css
```css
olor: #CBD5E1;
    font-size: 0.95rem;
    flex: 1;
    font-weight: 500;
}

.filter-count {
    background: rgba(168, 85, 247, 0.2);
    color: #a855f7;
    padding: 0.25rem 0.5rem;
    border-radius: 1rem;
    font-size: 0.8rem;
    font-weight: 600;
}
```


### src\css\style.css
```css
obile-filter-toggle {
    display: none;
    width: 100%;
    padding: 1rem;
    background: var(--glass-bg-light);
    border: 1px solid var(--glass-border);
    border-radius: 1rem;
    color: white;
    font-weight: 600;
    cursor: pointer;
    margin-bottom: 1rem;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
background: var(--glass-hover-bg-light);
    transform: translateY(-2px);
}

.course-content {
    flex: 1;
    padding: var(--spacing-xl) 0;
}
```


### src\css\style.css
```css
earch-controls {
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-xl);
    padding: var(--spacing-xl);
    margin-bottom: var(--spacing-2xl);
    display: grid;
    grid-template-columns: 1fr auto auto;
    gap: var(--spacing-lg);
    align-items: center;
    box-shadow: var(--glass-shadow);
    transition: all var(--transition-speed) ease;
    animation: slideInUp 0.8s ease-out 0.2s both;
}
```


### src\css\style.css
```css
border-color: rgba(168, 85, 247, 0.3);
    box-shadow: 0 12px 40px rgba(168, 85, 247, 0.15);
}

.search-box {
    position: relative;
    min-width: 280px;
}
```


### src\css\style.css
```css
earch-input {
    width: 100%;
    padding: var(--spacing-md) var(--spacing-lg) var(--spacing-md) 3.5rem;
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--border-radius-lg);
    color: var(--text-primary);
    font-size: var(--body-regular);
    outline: none;
    transition: all var(--transition-speed) ease;
    font-family: inherit;
}
```


### src\css\style.css
```css
olor: var(--text-muted);
    font-weight: 400;
}

.search-icon {
    position: absolute;
    left: var(--spacing-lg);
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-muted);
    pointer-events: none;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: color var(--transition-speed) ease;
}
```


### src\css\style.css
```css
osition: relative;
}

.sort-btn {
    padding: var(--spacing-md) var(--spacing-lg);
    background: rgba(168, 85, 247, 0.1);
    border: 1px solid rgba(168, 85, 247, 0.3);
    border-radius: var(--border-radius-lg);
    color: var(--text-primary);
    font-weight: 600;
    font-size: var(--body-regular);
    cursor: pointer;
    transition: all var(--transition-speed) ease;
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    white-space: nowrap;
    min-width: 140px;
    justify-content: space-between;
}
```


### src\css\style.css
```css
background: rgba(168, 85, 247, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(168, 85, 247, 0.2);
    border-color: rgba(168, 85, 247, 0.5);
}

.view-toggle {
    display: flex;
    gap: var(--spacing-xs);
    background: rgba(255, 255, 255, 0.03);
    padding: var(--spacing-xs);
    border-radius: var(--border-radius-md);
    border: 1px solid rgba(255, 255, 255, 0.1);
}
```


### src\css\style.css
```css
ew-btn {
    padding: var(--spacing-sm) var(--spacing-md);
    background: transparent;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    border-radius: var(--border-radius-sm);
    transition: all var(--transition-speed) ease;
    font-size: 1.1rem;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}
```


### src\css\style.css
```css
rid-template-columns: 1fr;
        gap: var(--spacing-md);
        text-align: center;
    }

    .search-box {
        min-width: auto;
    }
```


### src\css\style.css
```css
ustify-self: center;
    }
}

@media (max-width: 768px) {
    .search-controls {
        padding: var(--spacing-lg);
        gap: var(--spacing-md);
    }
```


### src\css\style.css
```css
earch-input {
        padding: var(--spacing-md) var(--spacing-md) var(--spacing-md) 3rem;
        font-size: var(--body-small);
    }
```


### src\css\style.css
```css
ort-btn {
        min-width: auto;
        width: 100%;
        justify-content: center;
    }
```


### src\css\style.css
```css
lex: 1;
    position: relative;
}

.search-icon {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: #94a3b8;
    pointer-events: none;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
}
```


### src\css\style.css
```css
earch-icon svg {
    width: 18px;
    height: 18px;
    color: currentColor;
}
```


### src\css\style.css
```css
earch-input {
    width: 100%;
    padding: 0.875rem 1rem 0.875rem 3rem;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid var(--glass-border);
    border-radius: 0.75rem;
    color: #fff;
    font-size: 1rem;
    outline: none;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
olor: #64748b;
}

/* ========================================
   PROMINENT SEARCH SECTION
   ======================================== */

.search-section {
    width: 100%;
    padding: 1.5rem 0 1rem;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.05), rgba(78, 205, 196, 0.03));
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    margin-bottom: 1.5rem;
}
```


### src\css\style.css
```css
earch-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 2rem;
}
```


### src\css\style.css
```css
earch-box-prominent {
    position: relative;
    width: 100%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 24px;
    padding: 0;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}
```


### src\css\style.css
```css
border-color: var(--primary-glow-color);
    box-shadow: 0 0 0 4px rgba(168, 85, 247, 0.2), 0 12px 40px rgba(168, 85, 247, 0.3);
    background: rgba(255, 255, 255, 0.15);
}

.search-input-prominent {
    width: 100%;
    padding: 1.25rem 4rem 1.25rem 4rem;
    background: transparent;
    border: none;
    outline: none;
    color: var(--text-primary);
    font-size: 1.125rem;
    font-weight: 500;
    line-height: 1.5;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
olor: rgba(148, 163, 184, 0.7);
    transform: translateX(4px);
}

.search-icon-prominent {
    position: absolute;
    left: 1.25rem;
    top: 50%;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    color: var(--text-muted);
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    display: flex;
    align-items: center;
    justify-content: center;
}
```


### src\css\style.css
```css
olor: var(--primary-glow-color);
    transform: translateY(-50%) scale(1.1);
}

.search-icon-prominent svg {
    width: 20px;
    height: 20px;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
earch-clear-btn {
    position: absolute;
    right: 1.25rem;
    top: 50%;
    transform: translateY(-50%);
    width: 32px;
    height: 32px;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    color: var(--text-muted);
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    visibility: hidden;
}
```


### src\css\style.css
```css
background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
    color: var(--text-primary);
    transform: translateY(-50%) scale(1.1);
}

.search-clear-btn svg {
    width: 16px;
    height: 16px;
}
```


### src\css\style.css
```css
ontrols-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    padding: 0 0.5rem;
    gap: 1rem;
}
```


### src\css\style.css
```css
========================================
   PROMINENT SEARCH RESPONSIVE DESIGN
   ======================================== */

@media (max-width: 1024px) {
    .search-container {
        padding: 0 1.5rem;
    }
```


### src\css\style.css
```css
earch-input-prominent {
        padding: 1.125rem 3.5rem 1.125rem 3.5rem;
        font-size: 1rem;
    }
```


### src\css\style.css
```css
earch-icon-prominent {
        left: 1rem;
        width: 22px;
        height: 22px;
    }
```


### src\css\style.css
```css
earch-clear-btn {
        right: 1rem;
        width: 28px;
        height: 28px;
    }
```


### src\css\style.css
```css
ont-size: 0.9rem;
    }

    .search-section {
        padding: 1.5rem 0 1rem;
        margin-bottom: 1.5rem;
    }
```


### src\css\style.css
```css
earch-container {
        padding: 0 1rem;
    }
```


### src\css\style.css
```css
border-radius: 20px;
    }

    .search-input-prominent {
        padding: 1rem 3rem 1rem 3rem;
        font-size: 0.95rem;
    }
```


### src\css\style.css
```css
earch-icon-prominent {
        left: 0.875rem;
        width: 20px;
        height: 20px;
    }
```


### src\css\style.css
```css
earch-icon-prominent svg {
        width: 18px;
        height: 18px;
    }
```


### src\css\style.css
```css
earch-clear-btn {
        right: 0.875rem;
        width: 26px;
        height: 26px;
    }
```


### src\css\style.css
```css
earch-clear-btn svg {
        width: 14px;
        height: 14px;
    }
```


### src\css\style.css
```css
ont-size: 0.85rem;
    }

    .search-section {
        padding: 1rem 0 0.75rem;
        margin-bottom: 1rem;
    }
```


### src\css\style.css
```css
earch-container {
        padding: 0 0.75rem;
    }
```


### src\css\style.css
```css
border-radius: 18px;
    }

    .search-input-prominent {
        padding: 0.875rem 2.75rem 0.875rem 2.75rem;
        font-size: 0.9rem;
    }
```


### src\css\style.css
```css
earch-icon-prominent {
        left: 0.75rem;
        width: 18px;
        height: 18px;
    }
```


### src\css\style.css
```css
earch-icon-prominent svg {
        width: 16px;
        height: 16px;
    }
```


### src\css\style.css
```css
earch-clear-btn {
        right: 0.75rem;
        width: 24px;
        height: 24px;
    }
```


### src\css\style.css
```css
earch-clear-btn svg {
        width: 12px;
        height: 12px;
    }
```


### src\css\style.css
```css
========================================
   SEARCH HIGHLIGHTING
   ======================================== */

.search-highlight {
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.3), rgba(78, 205, 196, 0.2));
    color: var(--text-primary);
    padding: 0.125rem 0.25rem;
    border-radius: 4px;
    font-weight: 600;
    box-shadow: 0 2px 8px rgba(168, 85, 247, 0.2);
    border: 1px solid rgba(168, 85, 247, 0.3);
}
```


### src\css\style.css
```css
osition: relative;
}

.sort-btn {
    padding: 0.875rem 1.5rem;
    background: rgba(168, 85, 247, 0.1);
    border: 2px solid rgba(168, 85, 247, 0.2);
    border-radius: 12px;
    color: var(--text-primary);
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    display: flex;
    align-items: center;
    gap: 0.75rem;
    white-space: nowrap;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}
```


### src\css\style.css
```css
ort-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.1), transparent);
    transition: left 0.4s ease;
}
```


### src\css\style.css
```css
transform: rotate(180deg);
}

.sort-menu {
    position: absolute;
    top: calc(100% + 0.75rem);
    right: 0;
    background: rgba(16, 16, 28, 0.95);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    padding: 0.75rem;
    min-width: 220px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(-15px);
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    z-index: 10000;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.4);
}
```


### src\css\style.css
```css
opacity: 1;
    visibility: visible;
    transform: translateY(0);
}

.sort-option {
    padding: 0.875rem 1.25rem;
    color: var(--text-secondary);
    cursor: pointer;
    border-radius: 8px;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    display: block;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    margin-bottom: 0.25rem;
    position: relative;
    overflow: hidden;
}
```


### src\css\style.css
```css
rgin-bottom: 0;
}

.sort-option::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.1), transparent);
    transition: left 0.4s ease;
}
```


### src\css\style.css
```css
background: rgba(168, 85, 247, 0.2);
    color: var(--text-primary);
    transform: translateX(4px);
    border-left: 3px solid var(--primary-glow-color);
}

.view-toggle {
    display: flex;
    gap: 0.5rem;
    background: rgba(255, 255, 255, 0.05);
    padding: 0.25rem;
    border-radius: 0.5rem;
}
```


### src\css\style.css
```css
ew-btn {
    padding: 0.5rem 0.75rem;
    background: transparent;
    border: none;
    color: #94a3b8;
    cursor: pointer;
    border-radius: 0.375rem;
    transition: all 0.3s ease;
    font-size: 1.2rem;
}
```


### src\css\style.css
```css
background: rgba(168, 85, 247, 0.1);
    color: white;
}

.results-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: var(--spacing-2xl);
    padding: var(--spacing-lg) var(--spacing-xl);
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-lg);
    animation: fadeIn 0.8s ease-out 0.3s both;
    flex-wrap: wrap;
    gap: var(--spacing-md);
}
```


### src\css\style.css
```css
edia (max-width: 768px) {
    .results-bar {
        flex-direction: column;
        text-align: center;
        padding: var(--spacing-md);
    }
```


### src\css\style.css
```css
lay: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.filter-tag {
    padding: 0.375rem 0.75rem;
    background: rgba(168, 85, 247, 0.2);
    border: 1px solid #a855f7;
    border-radius: 2rem;
    color: white;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    animation: fadeIn 0.3s ease;
}
```


### src\css\style.css
```css
lter-tag button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 1.2rem;
    line-height: 1;
    padding: 0;
    margin-left: 0.25rem;
    transition: transform 0.3s ease;
}
```


### src\css\style.css
```css
transform: scale(1.2);
}

/* ========================================
   ENHANCED NO RESULTS STATE
   ======================================== */

.no-results {
    display: none;
    width: 100%;
    padding: 3rem 2rem;
    margin: 2rem 0;
}
```


### src\css\style.css
```css
lay: block;
    animation: fadeIn 0.6s ease;
}

.no-results-content {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 2px solid var(--glass-border);
    border-radius: 24px;
    padding: 3rem 2rem;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
}
```


### src\css\style.css
```css
no-results-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 2rem;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(78, 205, 196, 0.1));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-glow-color);
    animation: pulse-glow 3s ease-in-out infinite;
}
```


### src\css\style.css
```css
no-results-icon svg {
    width: 40px;
    height: 40px;
}
```


### src\css\style.css
```css
ont-size: 2rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--text-primary), #d1d8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.no-results-description {
    font-size: 1.125rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    line-height: 1.6;
}
```


### src\css\style.css
```css
no-results-suggestions {
    text-align: left;
    margin-bottom: 2rem;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    padding: 1.5rem;
    border: 1px solid rgba(255, 255, 255, 0.1);
}
```


### src\css\style.css
```css
ont-size: 1.125rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 1rem;
    text-align: center;
}

.suggestions-list {
    list-style: none;
    padding: 0;
    margin: 0;
}
```


### src\css\style.css
```css
uggestions-list li {
    padding: 0.5rem 0;
    color: var(--text-secondary);
    position: relative;
    padding-left: 1.5rem;
}
```


### src\css\style.css
```css
lay: flex;
    gap: 1rem;
    justify-content: center;
    margin-bottom: 2rem;
    flex-wrap: wrap;
}

.clear-search-btn,
.browse-all-btn {
    padding: 0.875rem 1.5rem;
    border-radius: 12px;
    font-weight: 600;
    font-size: 0.95rem;
    cursor: pointer;
    transition: all 0.3s ease;
    border: 2px solid transparent;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}
```


### src\css\style.css
```css
lay: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    justify-content: center;
}

.suggestion-tag {
    padding: 0.5rem 1rem;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    color: var(--text-secondary);
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
}
```


### src\css\style.css
```css
background: rgba(168, 85, 247, 0.2);
    border-color: rgba(168, 85, 247, 0.4);
    color: var(--text-primary);
    transform: translateY(-2px);
}


@media (max-width: 768px) {
    .no-results-content {
        padding: 2rem 1.5rem;
    }
```


### src\css\style.css
```css
lex-direction: column;
        align-items: center;
    }

    .clear-search-btn,
    .browse-all-btn {
        width: 100%;
        max-width: 200px;
        justify-content: center;
    }
```


### src\css\style.css
```css
edia (max-width: 480px) {
    .no-results {
        padding: 2rem 1rem;
    }
```


### src\css\style.css
```css
no-results-content {
        padding: 1.5rem 1rem;
    }
```


### src\css\style.css
```css
no-results-icon {
        width: 60px;
        height: 60px;
        margin-bottom: 1.5rem;
    }
```


### src\css\style.css
```css
no-results-icon svg {
        width: 30px;
        height: 30px;
    }
```


### src\css\style.css
```css
rem;
    }

    .suggestion-tag {
        font-size: 0.8rem;
        padding: 0.375rem 0.75rem;
    }
```


### src\css\style.css
```css
rid-template-columns: 1fr;
}

/* Math section - 2 cards per row with better width for index.html */
#math-tabs .courses-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.5rem;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 1rem;
}
```


### src\css\style.css
```css
th section cards - larger and more prominent */
#math-tabs .course-card {
    min-height: 420px;
}
```


### src\css\style.css
```css
edia (max-width: 1200px) {
    #math-tabs .courses-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
        max-width: 1000px;
    }
```


### src\css\style.css
```css
edia (max-width: 900px) {
    #math-tabs .courses-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-lg);
        max-width: 600px;
    }
```


### src\css\style.css
```css
rid-template-columns: 1fr;
        gap: var(--spacing-lg);
    }
}

/* Math section for course.html page - when maths tab is active */
.courses-grid.maths-grid {
    grid-template-columns: repeat(2, 1fr) !important;
    gap: 2.5rem !important;
    max-width: 1200px !important;
    margin-left: auto !important;
    margin-right: auto !important;
    padding: 0 1rem !important;
}
```


### src\css\style.css
```css
Ensure course cards in maths section are larger */
.courses-grid.maths-grid .course-card {
    min-height: 420px !important;
}
```


### src\css\style.css
```css
edia (max-width: 1200px) {
    .courses-grid.maths-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 2rem !important;
        max-width: 1000px !important;
    }
```


### src\css\style.css
```css
edia (max-width: 900px) {
    .courses-grid.maths-grid {
        grid-template-columns: 1fr !important;
        gap: var(--spacing-lg) !important;
        max-width: 600px !important;
    }
```


### src\css\style.css
```css
rid-template-columns: 1fr !important;
        gap: var(--spacing-lg) !important;
    }
}

.course-card {
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: 16px;
    text-align: center;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    animation: fadeIn 0.6s ease both;
    cursor: pointer;
    margin-bottom: 1rem;
    height: 100%;
}
```


### src\css\style.css
```css
ourse-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #a855f7, #4ecdc4);
    transform: scaleX(0);
    transition: transform var(--transition-speed) ease;
    transform-origin: left;
}
```


### src\css\style.css
```css
lex-direction: row;
}

.courses-grid.list-view .course-header {
    width: 200px;
    height: auto;
    min-height: 150px;
}
```


### src\css\style.css
```css
lex: 1;
    text-align: left;
}

.course-header {
    position: relative;

    height: 200px !important;
    min-height: 200px !important;

    padding: 0 !important;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.05), rgba(78, 205, 196, 0.05));
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;

    overflow: hidden !important;
    border-bottom: 1px solid var(--glass-border);
    transition: all 0.4s ease;
}
```


### src\css\style.css
```css
osition: absolute;
    top: 1rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.badge {
    padding: 0.375rem 0.75rem;
    background: var(--glass-bg-dark);
    backdrop-filter: blur(10px);
    border-radius: 2rem;
    font-size: 0.75rem;
    font-weight: 700;
    color: white;
    text-transform: uppercase;
    letter-spacing: 1px;
}
```


### src\css\style.css
```css
background: linear-gradient(135deg, #a855f7, #4ecdc4);
}

.card-content {
    padding: 1.5rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    z-index: 1;
    gap: 1rem;
    min-height: 280px;
    justify-content: space-between;
}
```


### src\css\style.css
```css
edia (max-width: 768px) {
    .card-content {
        padding: 1.25rem;
        min-height: 260px;
    }
```


### src\css\style.css
```css
rd-icon svg,
.course-icon svg,
.course-header svg {
    display: none !important;
    visibility: hidden !important;
    width: 0 !important;
    height: 0 !important;
    opacity: 0 !important;
}
```


### src\css\style.css
```css
ourse-card .course-header img,
.course-card .course-header .course-image,
.course-header > img,
.course-header > .course-image {
    width: 200px !important;
    height: 200px !important;
    min-width: 200px !important;
    min-height: 200px !important;
    max-width: 200px !important;
    max-height: 200px !important;
    object-fit: contain !important;
    border-radius: 16px !important;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05)) !important;
    padding: 20px !important;
    margin: 0 auto !important;
    display: block !important;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3),
                0 0 0 1px rgba(255, 255, 255, 0.1) inset !important;
    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1) !important;
    filter: drop-shadow(0 4px 20px rgba(0, 0, 0, 0.2)) !important;
    position: relative !important;
    z-index: 2 !important;
    flex-shrink: 0 !important;
}
```


### src\css\style.css
```css
box-shadow: 0 20px 60px rgba(236, 72, 153, 0.6),
                0 0 0 2px rgba(236, 72, 153, 0.3) inset !important;
    filter: drop-shadow(0 12px 40px rgba(236, 72, 153, 0.7)) brightness(1.15) !important;
}


/* @media (max-width: 768px) {
    .course-card .course-header img,
    .course-card .course-header .course-image,
    .course-header > img,
    .course-header > .course-image {
        width: 160px !important;
        height: 160px !important;
        min-width: 160px !important;
        min-height: 160px !important;
        max-width: 160px !important;
        max-height: 160px !important;
        padding: 15px !important;
    }
```


### src\css\style.css
```css
ourse-header {
        min-height: 220px !important;
        padding: 25px 18px !important;
    }
```


### src\css\style.css
```css
edia (max-width: 480px) {
    .course-card .course-header img,
    .course-card .course-header .course-image,
    .course-header > img,
    .course-header > .course-image {
        width: 140px !important;
        height: 140px !important;
        min-width: 140px !important;
        min-height: 140px !important;
        max-width: 140px !important;
        max-height: 140px !important;
        padding: 12px !important;
    }
```


### src\css\style.css
```css
ourse-header {
        min-height: 200px !important;
        padding: 20px 15px !important;
    }
```


### src\css\style.css
```css
=== NEW, CORRECTED COURSE IMAGE STYLES === */


.course-header .course-image {
    width: 100% !important;
    height: 100% !important;


    object-fit: cover !important;


    padding: 0 !important;
    border-radius: 0 !important;
    background: none !important;
    box-shadow: none !important;


    transition: transform 0.4s ease !important;
}
```


### src\css\style.css
```css
olor: #EC4899;
}

.card-title {
    font-size: 1.375rem;
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: 0;
    line-height: 1.3;
    letter-spacing: -0.01em;
}
```


### src\css\style.css
```css
rd-description {
    font-size: 0.9rem;
    color: var(--text-muted);
    flex-grow: 1;
    margin-bottom: 0;
    line-height: 1.5;
    font-weight: 400;
}
```


### src\css\style.css
```css
rd-skills {
    list-style: none;
    padding: 1.25rem 0;
    margin: 1.5rem 0;
    text-align: left;
    font-size: 0.9rem;
    color: #cbd5e1;
    border-top: 1px solid var(--glass-border);
    border-bottom: 1px solid var(--glass-border);
}
```


### src\css\style.css
```css
rgin-bottom: 0;
}

.card-skills li::before {
    content: '';
    margin-right: 0.75rem;
    font-weight: 900;
    color: #4ecdc4;
    background: rgba(78, 205, 196, 0.2);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: inline-grid;
    place-items: center;
    font-size: 0.8rem;
    flex-shrink: 0;
}
```


### src\css\style.css
```css
olor: #EC4899;
    background: rgba(236, 72, 153, 0.2);
}

.course-meta {
    display: flex;
    gap: 1.5rem;
    margin: 1rem 0;
    padding: 1rem 0;
    border-top: 1px solid var(--glass-border);
}
```


### src\css\style.css
```css
lay: flex;
    align-items: center;
    gap: 0.5rem;
    color: #CBD5E1;
    font-size: 0.9rem;
}

.meta-icon {
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
}
```


### src\css\style.css
```css
eta-icon svg {
    width: 14px;
    height: 14px;
    color: currentColor;
}
```


### src\css\style.css
```css
rd-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    padding-top: 1rem;
}
```


### src\css\style.css
```css
ont-size: 1.1rem;
    color: #64748b;
    text-decoration: line-through;
}

.card-button-container {
    margin-top: auto;
    padding-top: 0.5rem;
}
```


### src\css\style.css
```css
rd-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1.875rem;
    border-radius: 0.75rem;
    text-decoration: none;
    font-weight: 600;
    color: #fff;
    transition: all var(--transition-speed) ease;
    background-size: 200% auto;
    position: relative;
    overflow: hidden;
    border: none;
}
```


### src\css\style.css
```css
background-position: right center;
    transform: scale(1.05) translateY(-2px);
    box-shadow: 0 5px 25px var(--glow-color);
}


.card-actions {
    display: flex;
    gap: 0.75rem;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--glass-border);
}
```


### src\css\style.css
```css
ew-course-btn {
    flex: 1;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.75rem 1rem;
    border-radius: 0.75rem;
    text-decoration: none;
    font-weight: 600;
    color: #fff;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid var(--glass-border);
    transition: all var(--transition-speed) ease;
    font-size: 0.9rem;
}
```


### src\css\style.css
```css
background: rgba(255, 255, 255, 0.2);
    border-color: var(--glass-hover-border);
    transform: translateY(-2px);
}

.buy-now-btn {
    flex: 1.5;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.75rem 1rem;
    border-radius: 0.75rem;
    border: none;
    font-weight: 700;
    color: #fff;
    cursor: pointer;
    transition: all var(--transition-speed) ease;
    background-size: 200% auto;
    position: relative;
    overflow: hidden;
    font-size: 0.9rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}
```


### src\css\style.css
```css
ont-size: 0.85rem;
    font-weight: 600;
    opacity: 0.9;
}

.buy-now-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
    pointer-events: none;
}
```


### src\css\style.css
```css
rgin-bottom: 0;
}


.course-pricing-section {
    padding: 4rem 2rem;
    background: var(--glass-bg-dark);
    margin-top: 3rem;
}
```


### src\css\style.css
```css
ricing-container {
    max-width: 1200px;
    margin: 0 auto;
}
```


### src\css\style.css
```css
text-align: center;
    color: #94a3b8;
    font-size: 1.1rem;
    margin-bottom: 3rem;
}

.pricing-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
    max-width: 900px;
    margin: 0 auto;
}
```


### src\css\style.css
```css
ricing-card {
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: 1.5rem;
    padding: 2.5rem;
    position: relative;
    transition: all 0.4s ease;
}
```


### src\css\style.css
```css
border-color: #a855f7;
    box-shadow: 0 0 40px rgba(168, 85, 247, 0.2);
}

.featured-badge {
    position: absolute;
    top: -15px;
    right: 20px;
    background: linear-gradient(135deg, #a855f7, #4ecdc4);
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 2rem;
    font-size: 0.85rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
}
```


### src\css\style.css
```css
olor: #94a3b8;
    font-size: 0.95rem;
}

.pricing-amount {
    display: flex;
    align-items: baseline;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--glass-border);
}
```


### src\css\style.css
```css
list-style: none;
    margin-bottom: 2rem;
}

.pricing-features li {
    padding: 0.75rem 0;
    color: #CBD5E1;
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    gap: 0.75rem;
}
```


### src\css\style.css
```css
ricing-button {
    display: block;
    width: 100%;
    padding: 1.25rem 2rem;
    border-radius: 0.875rem;
    text-align: center;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.1rem;
    color: white;
    transition: all var(--transition-speed) ease;
    background-size: 200% auto;
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border: 2px solid transparent;
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.3);
}
```


### src\css\style.css
```css
ricing-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.6s ease;
    pointer-events: none;
}
```


### src\css\style.css
```css
ont-size: 2.5rem;
    }
}


.feature-card {
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border-radius: 1.5rem;
    border: 1px solid var(--glass-border);
    padding: 3.5rem;
    display: flex;
    align-items: center;
    gap: 3.5rem;
    box-shadow: var(--glass-shadow);
    overflow: hidden;
    transition: all var(--transition-speed) ease;
    animation: fadeIn 1s ease both;
}
```


### src\css\style.css
```css
ont-weight: 600;
    color: #EC4899;
    margin-bottom: 1rem;
    animation: fadeIn 1s ease 0.5s both;
}

.feature-text h3 {
    font-size: clamp(1.8rem, 4vw, 2.5rem);
    font-weight: 700;
    color: #fff;
    margin-bottom: 1.5rem;
    line-height: 1.3;
}
```


### src\css\style.css
```css
eature-text p {
    color: #94a3b8;
    max-width: 500px;
}
```


### src\css\style.css
```css
lex: 1 1 45%;
    display: grid;
    place-items: center;
    animation: slideInRight 1s ease 0.3s both;
}

.feature-visual svg,
.feature-visual img {
    width: 100%;
    max-width: 350px;
    animation: float 4s ease-in-out infinite;
}
```


### src\css\style.css
```css
transform: rotateY(10deg) rotateX(5deg) scale(1.05);
}

.certificate-features {
    list-style: none;
    padding-left: 0;
    margin-top: 2rem;
}
```


### src\css\style.css
```css
transform: translateX(5px);
}

.certificate-features li::before {
    content: '';
    margin-right: 12px;
    font-weight: 900;
    color: #4ecdc4;
    background: rgba(78, 205, 196, 0.2);
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: inline-grid;
    place-items: center;
}
```


### src\css\style.css
```css
lay: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
}

.feature-item {
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: 1.25rem;
    padding: 2rem;
    text-align: center;
    transition: all var(--transition-speed) ease;
    animation: slideInUp 0.8s ease both;
    position: relative;
    overflow: hidden;
}
```


### src\css\style.css
```css
eature-item::before {
    content: '';
    position: absolute;
    top: -100%;
    left: -100%;
    width: 300%;
    height: 300%;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 40%);
    transition: all 0.6s ease;
}
```


### src\css\style.css
```css
transform: var(--card-hover-transform);
    background: var(--glass-hover-bg-light);
    border-color: var(--glass-hover-border);
    box-shadow: var(--glass-hover-shadow);
}

.feature-icon {
    height: 50px;
    margin-bottom: 1.5rem;
    position: relative;
    z-index: 1;
}
```


### src\css\style.css
```css
eature-icon svg {
    height: 100%;
    width: auto;
    stroke: #a855f7;
    transition: all 0.4s ease;
}
```


### src\css\style.css
```css
transform: var(--card-hover-transform);
    background: var(--glass-hover-bg-light);
    border-color: var(--glass-hover-border);
    box-shadow: 0 15px 40px rgba(168, 85, 247, 0.2);
}

.testimonial-content {
    padding: 2rem;
}
```


### src\css\style.css
```css
testimonial-content blockquote {
    font-style: italic;
    color: #cbd5e1;
    border-left: 3px solid var(--primary-glow-color);
    padding-left: 1.5rem;
    margin-bottom: 1.5rem;
    transition: padding-left 0.3s ease;
}
```


### src\css\style.css
```css
testimonial-card:hover blockquote {
    padding-left: 2rem;
}
```


### src\css\style.css
```css
ont-size: 0.9rem;
    color: #94a3b8;
}

.parent-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 1rem;
    border: 2px solid var(--glass-border);
    float: left;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
border-color: var(--primary-glow-color);
    transform: scale(1.1);
}

.parent-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```


### src\css\style.css
```css
rojects-gallery-wrapper {
    position: relative;
    width: 100%;
}
```


### src\css\style.css
```css
rojects-gallery {
    display: flex;
    gap: 2rem;
    padding: 2rem 10px;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scrollbar-width: thin;
    scrollbar-color: var(--primary-glow-color) transparent;
}
```


### src\css\style.css
```css
rojects-gallery::-webkit-scrollbar {
    height: 8px;
}
```


### src\css\style.css
```css
background: linear-gradient(90deg, #a855f7, #4ecdc4);
    border-radius: 4px;
}

.project-card {
    flex: 0 0 400px;
    height: 250px;
    border-radius: 1.25rem;
    overflow: hidden;
    position: relative;
    scroll-snap-align: center;
    border: 1px solid var(--glass-border);
    transition: all 0.4s ease;
    animation: fadeIn 1s ease both;
}
```


### src\css\style.css
```css
transform: scale(1.05) translateY(-5px);
    box-shadow: 0 15px 50px var(--primary-glow-color);
    z-index: 10;
    border-color: var(--glass-hover-border);
}

.project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
}
```


### src\css\style.css
```css
transform: scale(1.15);
}

.project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.95) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.4s ease;
    display: flex;
    align-items: flex-end;
    padding: 1.5rem;
}
```


### src\css\style.css
```css
ont-size: 0.9rem;
    font-style: italic;
    color: #94a3b8;
}


.roadmap-timeline {
    position: relative;
    padding: 20px 0;
    max-width: 900px;
    margin: 0 auto;
}
```


### src\css\style.css
```css
roadmap-timeline::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 50%;
    width: 4px;
    background: linear-gradient(to bottom, var(--primary-glow-color), var(--secondary-glow-color));
    transform: translateX(-50%);
    border-radius: 4px;
    box-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
}
```


### src\css\style.css
```css
roadmap-item {
    display: flex;
    justify-content: flex-end;
    padding-right: 30px;
    position: relative;
    margin-bottom: 50px;
    width: 50%;
    animation: slideInLeft 0.8s ease both;
}
```


### src\css\style.css
```css
roadmap-item:nth-child(even) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 0;
    margin-left: 50%;
    animation: slideInRight 0.8s ease both;
}
```


### src\css\style.css
```css
roadmap-item::before {
    content: '';
    position: absolute;
    top: 15px;
    right: -13px;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #010103;
    border: 4px solid #a855f7;
    box-shadow: 0 0 15px var(--primary-glow-color);
    z-index: 1;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
right: auto;
    left: -13px;
}

.roadmap-content {
    background: var(--glass-bg-dark);
    border: 1px solid var(--glass-border);
    border-radius: 1rem;
    padding: 1.5rem;
    box-shadow: var(--glass-shadow);
    transition: all var(--transition-speed) ease;
    max-width: 400px;
}
```


### src\css\style.css
```css
lay: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 15px;
}

.roadmap-skill {
    background: rgba(168, 85, 247, 0.1);
    border: 1px solid rgba(168, 85, 247, 0.3);
    border-radius: 20px;
    padding: 5px 12px;
    font-size: 0.8rem;
    color: #cbd5e1;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
background: rgba(168, 85, 247, 0.2);
    transform: scale(1.05);
}


.faq-container {
    max-width: 800px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
```


### src\css\style.css
```css
border-color: var(--glass-hover-border);
    box-shadow: 0 5px 20px rgba(168, 85, 247, 0.1);
}

.faq-question {
    padding: 1.25rem 1.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
uestion:hover {
    color: #a855f7;
    padding-left: 2rem;
}
```


### src\css\style.css
```css
ont-size: 1.5rem;
    transition: transform var(--transition-speed) ease;
}

.faq-answer {
    padding: 0 1.5rem;
    max-height: 0;
    overflow: hidden;
    transition: all 0.5s ease-out;
    opacity: 0;
}
```


### src\css\style.css
```css
nswer p {
    padding-bottom: 1.25rem;
    color: #94a3b8;
}
```


### src\css\style.css
```css
transform: rotate(45deg);
    color: #a855f7;
}

.faq-item.active .faq-answer {
    max-height: 300px;
    opacity: 1;
}
```


### src\css\style.css
```css
ta-banner {
    background: linear-gradient(135deg, rgba(138, 43, 226, 0.9), rgba(74, 0, 224, 0.9));
    border-radius: 1.5rem;
    padding: 3rem;
    position: relative;
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(138, 43, 226, 0.4);
    transition: all 0.4s ease;
    animation: fadeIn 1s ease both;
}
```


### src\css\style.css
```css
transform: translateY(-5px);
    box-shadow: 0 15px 50px rgba(138, 43, 226, 0.5);
}

.cta-banner::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 40%);
    animation: subtle-glow 10s ease-in-out infinite;
}
```


### src\css\style.css
```css
olor: white;
    font-size: 2rem;
    margin-bottom: 1rem;
    font-weight: 700;
}

.cta-text p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.1rem;
    max-width: 600px;
}
```


### src\css\style.css
```css
background: #f0f0f0;
    transform: scale(1.1) translateY(-3px);
}


.contact-container {
    max-width: 700px;
    margin: 0 auto;
    background: var(--glass-bg-light);
    border: 1px solid var(--glass-border);
    border-radius: 1.5rem;
    padding: 3rem;
    box-shadow: var(--glass-shadow);
    transition: all 0.4s ease;
    animation: fadeIn 1s ease both;
}
```


### src\css\style.css
```css
rgin-bottom: 1.25rem;
    animation: slideInUp 0.8s ease both;
}

.contact-form .input-field {
    width: 100%;
    padding: 1rem;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid var(--glass-border);
    border-radius: 0.75rem;
    color: #fff;
    font-size: 1rem;
    transition: all var(--transition-speed) ease;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}
```


### src\css\style.css
```css
outline: none;
    border-color: var(--primary-glow-color);
    box-shadow: 0 0 20px rgba(168, 85, 247, 0.3);
    background: rgba(0, 0, 0, 0.4);
    transform: translateY(-2px);
}

.contact-form textarea.input-field {
    resize: vertical;
    min-height: 120px;
}
```


### src\css\style.css
```css
ontact-form .submit-button {
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: 0.75rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    background-image: linear-gradient(to right, #8A2BE2 0%, #4A00E0 51%, #8A2BE2 100%);
    background-size: 200% auto;
    transition: all var(--transition-speed) ease;
    position: relative;
    overflow: hidden;
}
```


### src\css\style.css
```css
ontact-form .submit-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s ease;
}
```


### src\css\style.css
```css
background-position: right center;
    box-shadow: 0 10px 30px var(--primary-glow-color);
    transform: translateY(-3px);
}

/* ========================================
   TRY CODING SECTION - ENHANCED STYLES
   ======================================== */

/* Try Coding Section Container */
.try-coding-section {
    position: relative;
    padding: 4rem 2rem;
}
```


### src\css\style.css
```css
ontent: 'Try Coding';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    filter: blur(20px);
    opacity: 0.5;
    background: linear-gradient(135deg, #a855f7, #4ecdc4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Error Messages */
.error-message {
    display: none;
    color: #ff6b6b;
    font-size: 0.875rem;
    margin-top: 0.5rem;
    padding-left: 0.5rem;
    animation: shake 0.3s ease;
}
```


### src\css\style.css
```css
lay: inline-block;
}

.spinner {
    animation: rotate 1s linear infinite;
    width: 24px;
    height: 24px;
}
```


### src\css\style.css
```css
troke-dasharray: 90, 150;
        stroke-dashoffset: -124;
    }
}

/* Form Feedback (Success/Error Messages) */
.form-feedback {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: var(--glass-bg-dark);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: 1.5rem;
    padding: 2.5rem;
    max-width: 500px;
    width: 90%;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    z-index: 10000;
    text-align: center;
    animation: feedbackSlideIn 0.4s ease;
}
```


### src\css\style.css
```css
ontent: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    z-index: -1;
    animation: fadeIn 0.3s ease;
}

/* Feedback Icon */
.feedback-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 1.5rem;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3rem;
    animation: scaleIn 0.5s ease;
}
```


### src\css\style.css
```css
border-color: rgba(255, 107, 107, 0.5);
}

/* Feedback Message */
.feedback-message {
    color: var(--text-primary);
    font-size: 1.125rem;
    line-height: 1.6;
    margin: 0;
}
```


### src\css\style.css
```css
eedback Close Button */
.feedback-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: transparent;
    border: none;
    color: var(--text-secondary);
    font-size: 2rem;
    cursor: pointer;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
background: rgba(255, 255, 255, 0.1);
    color: var(--text-primary);
    transform: rotate(90deg);
}

/* ========================================
   WHATSAPP STICKY BUTTON
   ======================================== */

.whatsapp-sticky-button {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 60px;
    height: 60px;
    background: #25D366;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(37, 211, 102, 0.4);
    z-index: 9999;
    transition: all 0.3s ease;
    text-decoration: none;
    animation: float 3s ease-in-out infinite;
}
```


### src\css\style.css
```css
transform: scale(1.1) translateY(-5px);
    box-shadow: 0 8px 20px rgba(37, 211, 102, 0.6);
    animation: none;
}

.whatsapp-icon {
    width: 32px;
    height: 32px;
    color: white;
}
```


### src\css\style.css
```css
tsApp Tooltip */
.whatsapp-tooltip {
    position: absolute;
    right: 75px;
    background: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 10px 16px;
    border-radius: 8px;
    white-space: nowrap;
    font-size: 0.875rem;
    font-weight: 500;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
}
```


### src\css\style.css
```css
opacity: 1;
}

/* Pulse Animation for WhatsApp Button */
.whatsapp-sticky-button::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #25D366;
    opacity: 0.7;
    animation: pulse 2s ease-out infinite;
}
```


### src\css\style.css
```css
transform: translate(-50%, -50%) scale(1.5);
        opacity: 0;
    }
}

/* ========================================
   RESPONSIVE DESIGN FOR TRY CODING SECTION
   ======================================== */

@media (max-width: 768px) {
    .try-coding-section {
        padding: 3rem 1rem;
    }
```


### src\css\style.css
```css
ontact-container {
        padding: 2rem 1.5rem;
    }
```


### src\css\style.css
```css
orm-feedback {
        padding: 2rem;
        width: 95%;
    }
```


### src\css\style.css
```css
eedback-icon {
        width: 60px;
        height: 60px;
        font-size: 2rem;
    }
```


### src\css\style.css
```css
tsapp-sticky-button {
        bottom: 20px;
        right: 20px;
        width: 56px;
        height: 56px;
    }
```


### src\css\style.css
```css
tsapp-icon {
        width: 28px;
        height: 28px;
    }
```


### src\css\style.css
```css
rgin-bottom: 2rem;
    }

    .contact-container {
        padding: 1.5rem 1rem;
    }
```


### src\css\style.css
```css
rgin-bottom: 1rem;
    }

    .form-feedback {
        padding: 1.5rem;
    }
```


### src\css\style.css
```css
ont-size: 1rem;
    }
}

/* Reduced motion for try-coding section now handled in main implementation above */


.about-hero {
    background: var(--glass-bg-dark);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border-radius: 1.5rem;
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow);
    padding: 4rem;
    position: relative;
    overflow: hidden;
    transition: all var(--transition-speed) ease;
}
```


### src\css\style.css
```css
bout-hero::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 50%);
    z-index: 0;
    animation: subtle-glow 15s ease-in-out infinite;
}
```


### src\css\style.css
```css
osition: relative;
    z-index: 1;
    text-align: center;
}

.hero-content h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    font-weight: 800;
    background: linear-gradient(135deg, #ffffff, #d1d8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 40px rgba(255, 255, 255, 0.2);
    margin-bottom: 1.5rem;
    line-height: 1.2;
}
```


### src\css\style.css
```css
ero-content p {
    font-size: clamp(1.1rem, 2vw, 1.3rem);
    color: #94a3b8;
    max-width: 800px;
    margin: 0 auto;
}
```


### src\css\style.css
```css
lay: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
}

.content-card {
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: 1.5rem;
    padding: 2.5rem;
    transition: all var(--transition-speed) var(--transition-timing);
    position: relative;
    overflow: hidden;
    box-shadow: var(--glass-shadow);
}
```


### src\css\style.css
```css
ontent-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #a855f7, #4ecdc4);
    transform: scaleX(0);
    transition: transform 0.4s ease;
    transform-origin: left;
}
```


### src\css\style.css
```css
ont-size: 1.6rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 1rem;
    position: relative;
}

.content-card p {
    font-size: 1rem;
    color: #cbd5e1;
    line-height: 1.8;
}
```


### src\css\style.css
```css
tats-section {
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border-radius: 1.5rem;
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow);
    padding: 3rem;
}
```


### src\css\style.css
```css
lay: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
    margin-top: 2rem;
}

.stat-item {
    text-align: center;
    padding: 2rem;
    background: var(--glass-bg-dark);
    backdrop-filter: blur(var(--glass-blur));
    border-radius: 1rem;
    border: 1px solid var(--glass-border);
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
rgin-top: 1rem;
}

.timeline {
    position: relative;
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 0;
}
```


### src\css\style.css
```css
timeline::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, rgba(168, 85, 247, 0.5), transparent);
}
```


### src\css\style.css
```css
rgin-right: auto;
    text-align: right;
}

.timeline-marker {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 50px;
    background: linear-gradient(135deg, #8A2BE2, #4A00E0);
    border: 3px solid rgba(168, 85, 247, 0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 700;
    font-size: 1.2rem;
    box-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
    z-index: 2;
}
```


### src\css\style.css
```css
timeline-content {
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: 1.2rem;
    padding: 2rem;
    width: calc(50% - 50px);
    box-shadow: var(--glass-shadow);
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
ont-size: 1.4rem;
    color: #fff;
    margin-bottom: 0.8rem;
    font-weight: 700;
}

.timeline-content p {
    font-size: 0.95rem;
    color: #cbd5e1;
    line-height: 1.7;
}
```


### src\css\style.css
```css
lay: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
    margin-top: 2rem;
}

.curriculum-card {
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: 1.3rem;
    padding: 2rem;
    box-shadow: var(--glass-shadow);
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;
}
```


### src\css\style.css
```css
urriculum-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, transparent, #a855f7, #4ecdc4, transparent);
    transition: left 0.6s ease;
}
```


### src\css\style.css
```css
ont-size: 1.4rem;
    color: #fff;
    font-weight: 700;
    margin-bottom: 1.5rem;
}

.curriculum-list {
    list-style: none;
    margin: 0;
    padding: 0;
}
```


### src\css\style.css
```css
urriculum-list li {
    padding: 0.6rem 0;
    color: #cbd5e1;
    font-size: 0.95rem;
    position: relative;
    padding-left: 1.5rem;
    line-height: 1.6;
}
```


### src\css\style.css
```css
lay: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 2rem;
}

.about-page .testimonial-card {
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: 1.3rem;
    padding: 2rem;
    box-shadow: var(--glass-shadow);
    transition: all 0.4s ease;
    position: relative;
}
```


### src\css\style.css
```css
transform: translateY(-8px);
    border-color: var(--glass-hover-border);
    box-shadow: 0 20px 50px rgba(168, 85, 247, 0.3);
}

.testimonial-text {
    font-size: 0.95rem;
    color: #cbd5e1;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    font-style: italic;
}
```


### src\css\style.css
```css
lay: flex;
    align-items: center;
    gap: 1rem;
}

.author-avatar {
    width: 45px;
    height: 45px;
    background: linear-gradient(135deg, #a855f7, #4ecdc4);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.2rem;
    font-weight: 700;
    color: #fff;
}
```


### src\css\style.css
```css
lay: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
}

.value-card {
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    padding: 2.5rem;
    border-radius: 1.5rem;
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow);
    transition: all var(--transition-speed) ease;
    position: relative;
    overflow: hidden;
}
```


### src\css\style.css
```css
lue-card::before {
    content: '';
    position: absolute;
    top: -100%;
    left: -100%;
    width: 300%;
    height: 300%;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 40%);
    transition: all 0.6s ease;
}
```


### src\css\style.css
```css
ont-size: 1.5rem;
    color: #fff;
    margin-bottom: 1rem;
    font-weight: 700;
    position: relative;
    z-index: 1;
}

.value-card p {
    font-size: 1rem;
    color: #94a3b8;
    line-height: 1.7;
    position: relative;
    z-index: 1;
}
```


### src\css\style.css
```css
te-footer {
    width: 100%;
    padding: 4rem 0 1.5rem 0;
    background: rgba(4, 4, 8, 0.95);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    margin-top: 5rem;
    border-top: 1px solid var(--glass-border);
    position: relative;
    z-index: 10;
}
```


### src\css\style.css
```css
ooter-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1.25rem;
}
```


### src\css\style.css
```css
lay: flex;
    gap: 1rem;
}

.social-links a {
    display: inline-grid;
    place-items: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    color: #cbd5e1;
    transition: all var(--transition-speed) ease;
    border: 1px solid var(--glass-border);
}
```


### src\css\style.css
```css
background: var(--primary-glow-color);
    color: #fff;
    transform: translateY(-5px) rotate(360deg);
    border-color: transparent;
    box-shadow: 0 5px 20px var(--primary-glow-color);
}

.social-links a svg {
    width: 18px;
    height: 18px;
}
```


### src\css\style.css
```css
left: -15px;
    opacity: 1;
}

.footer-links a:hover {
    color: #fff;
    padding-left: 10px;
}
```


### src\css\style.css
```css
ooter-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 1.5rem;
    border-top: 1px solid var(--glass-border);
    font-size: 0.9rem;
    color: #94a3b8;
}
```


### src\css\style.css
```css
left: 30px;
    }

    .timeline-item:nth-child(odd) .timeline-content,
    .timeline-item:nth-child(even) .timeline-content {
        width: calc(100% - 80px);
        margin-left: 80px;
        text-align: left;
    }
```


### src\css\style.css
```css
rid-template-columns: repeat(2, 1fr);
    }
}

/* ========================================
   MOBILE NAVIGATION MENU (900px and below)
   Z-index: 9998 (below mobile button 10000, below navbar 9999)
   ======================================== */
@media (max-width: 900px) {
    .nav-menu {
        display: none;
        flex-direction: column;
        position: fixed;
        top: 70px;
        left: 0;
        width: 100%;
        height: calc(100vh - 70px);
        background: rgba(10, 10, 20, 0.98);
        backdrop-filter: blur(30px);
        -webkit-backdrop-filter: blur(30px);
        border: none;
        border-top: 1px solid var(--glass-border);
        padding: 2rem 1.5rem;
        gap: 0.75rem;
        overflow-y: auto;
        z-index: 9998;
        /* Below mobile button and navbar */
    }
```


### src\css\style.css
```css
lay: flex;
        animation: slideInUp 0.4s ease;
    }

    .nav-item {
        width: 100%;
    }
```


### src\css\style.css
```css
nav-link {
        width: 100%;
        padding: 1rem 1.25rem;
        text-align: left;
        font-size: 1.1rem;
        border: 1px solid rgba(168, 85, 247, 0.2);
        background: rgba(168, 85, 247, 0.05);
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 44px;
        /* Ensure touch target minimum */
        transition: all 0.2s ease;
        /* Smooth feedback */
    }
```


### src\css\style.css
```css
background: rgba(168, 85, 247, 0.2);
        border-color: rgba(168, 85, 247, 0.4);
        transform: scale(0.98);
    }

    .mobile-menu-btn {
        display: flex !important;
        flex-direction: column;
        justify-content: center;
        /* Changed from space-between for better centering */
        gap: 5px;
        /* Space between hamburger lines */
        width: 44px;
        /* Increased from 32px for better touch target */
        height: 44px;
        /* Increased from 24px for better touch target */
        background: transparent;
        border: none;
        cursor: pointer;
        padding: 10px;
        /* Added padding for larger clickable area */
        z-index: 10000;
        /* Above navbar (9999) to ensure clickability */
        transition: all 0.2s ease;
        /* Smooth feedback */
    }
```


### src\css\style.css
```css
background: rgba(168, 85, 247, 0.1);
        border-radius: 8px;
        transform: scale(0.95);
    }

    .mobile-menu-btn span {
        display: block;
        width: 24px;
        /* Fixed width for hamburger lines */
        height: 3px;
        background: white;
        border-radius: 3px;
        transition: all 0.3s var(--transition-timing);
    }
```


### src\css\style.css
```css
transform: rotate(-45deg) translate(8px, -8px);
    }

    .dropdown-content {
        position: static;
        transform: none;
        opacity: 1;
        visibility: visible;
        background: rgba(168, 85, 247, 0.1);
        border: 1px solid rgba(168, 85, 247, 0.2);
        border-radius: 0.75rem;
        box-shadow: none;
        display: none;
        padding: 0.5rem;
        margin-top: 0.5rem;
    }
```


### src\css\style.css
```css
lay: block;
    }

    .dropdown-item {
        padding: 0.875rem 1rem;
        font-size: 1rem;
        border-radius: 0.5rem;
    }
```


### src\css\style.css
```css
ta-button {
        width: 100%;
        justify-content: center;
        padding: 1rem;
        font-size: 1.1rem;
    }
```


### src\css\style.css
```css
edia (max-width: 800px) {
    .feature-card {
        flex-direction: column;
        padding: 2.5rem;
    }
```


### src\css\style.css
```css
text-align: center;
    }
}

@media (max-width: 768px) {


    .hero-section {
        flex-direction: column;
        padding: 2.5rem;
        text-align: center;
    }
```


### src\css\style.css
```css
left: 15px;
    }

    .roadmap-item,
    .roadmap-item:nth-child(even) {
        width: 100%;
        padding-left: 50px;
        padding-right: 0;
        margin-left: 0;
    }
```


### src\css\style.css
```css
lex-direction: column;
        gap: 1rem;
    }


    .about-hero {
        padding: 2.5rem;
    }
```


### src\css\style.css
```css
ontent-card {
        padding: 2rem;
    }
```


### src\css\style.css
```css
tats-section {
        padding: 2rem;
    }
```


### src\css\style.css
```css
rid-template-columns: 1fr;
    }

    .timeline-content {
        padding: 1.5rem;
    }
```


### src\css\style.css
```css
rid-template-columns: 1fr;
    }

    .filter-sidebar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 1000;
        transform: translateX(-100%);
        border-radius: 0;
        max-width: none;
        height: 100%;
        overflow-y: auto;
    }
```


### src\css\style.css
```css
lex-direction: column;
        gap: 1rem;
    }

    .search-box {
        width: 100%;
    }
```


### src\css\style.css
```css
lay: none;
    }

    .sort-btn {
        width: 100%;
        justify-content: center;
        padding: 1rem 1.5rem;
        font-size: 1rem;
    }
```


### src\css\style.css
```css
ort-menu {
        left: 0;
        right: 0;
        min-width: auto;
        width: 100%;
        max-width: 300px;
        margin: 0 auto;
        top: calc(100% + 1rem);
    }
```


### src\css\style.css
```css
ort-option {
        padding: 1rem 1.25rem;
        font-size: 1rem;
        text-align: center;
    }
```


### src\css\style.css
```css
r(--spacing-sm);
    }

    .view-course-btn,
    .buy-now-btn {
        padding: 0.75rem 1rem;
        font-size: 0.9rem;
    }
```


### src\css\style.css
```css
lex-basis: 90%;
    }
}

@media (max-width: 480px) {
    main.courses-page {
        padding: 20px 10px;
    }
```


### src\css\style.css
```css
rd-content {
        padding: 1rem;
    }
```


### src\css\style.css
```css
ont-size: 1.5rem;
    }

    .card-button {
        padding: 0.625rem 1.25rem;
        font-size: 0.9rem;
    }
```


### src\css\style.css
```css
lex-direction: column;
        gap: var(--spacing-sm);
    }

    .view-course-btn,
    .buy-now-btn {
        flex: 1;
        padding: 0.875rem 1rem;
        font-size: 0.9rem;
    }
```


### src\css\style.css
```css
ont-size: 0.85rem;
    }
}

body.index-page main {
    padding: 120px 20px 20px;
}
```


### src\css\style.css
```css
rgin-bottom: 4rem;

    animation: slideInUp 0.8s ease-out 0.4s both;
}

.tabs-container {
    display: flex;
    position: relative;
    background: var(--glass-bg-light);
    border: 1px solid var(--glass-border);
    border-radius: 1rem;
    padding: 0.5rem;
    box-shadow: var(--glass-shadow);
    max-width: fit-content;

    margin: 0 auto 2rem;

}
```


### src\css\style.css
```css
tab-button {
    background: none;
    border: none;
    padding: 0.75rem 1.5rem;
    color: #94a3b8;
    font-weight: 600;
    font-size: 1rem;
    border-radius: 0.875rem;
    cursor: pointer;
    transition: color 0.4s ease;
    position: relative;
    z-index: 2;
    white-space: nowrap;
}
```


### src\css\style.css
```css
olor: #e2e8f0;
}

.tab-glider {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    height: calc(100% - 1rem);
    border-radius: 0.875rem;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.5), rgba(78, 205, 196, 0.5));
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
}
```


### src\css\style.css
```css
text-align: center;
    margin-top: 3rem;
}

.view-more-button {
    display: inline-block;
    padding: 0.875rem 2.5rem;
    font-size: 1.1rem;
    font-weight: 600;
    color: #fff;
    text-decoration: none;
    background: var(--glass-bg-light);
    border: 1px solid var(--glass-border);
    border-radius: 50px;

    box-shadow: var(--glass-shadow);
    transition: all var(--transition-speed) var(--transition-timing);
    position: relative;
    overflow: hidden;
}
```


### src\css\style.css
```css
ew-more-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.4), transparent);
    transition: left 0.6s ease;
    pointer-events: none;
}
```


### src\css\style.css
```css
left: 100%;
}


/* ========================================
   MOBILE TAB BUTTON OPTIMIZATION
   Reduced min-width and optimized spacing to prevent squeezing
   ======================================== */
@media (max-width: 768px) {
    .tabs-wrapper {
        margin-bottom: 3rem;
        padding: 0 1rem;
        /* Increased from 0.5rem for better spacing */
    }
```


### src\css\style.css
```css
tabs-container {
        overflow-x: auto;
        overflow-y: hidden;
        padding: 0.75rem 0.5rem;
        /* Increased vertical padding */
        padding-bottom: 15px;
        display: flex;
        flex-wrap: nowrap;
        gap: 0.75rem;
        /* Increased from 0.5rem for better spacing */
        -webkit-overflow-scrolling: touch;
        scroll-snap-type: x proximity;
        max-width: 100%;
        margin: 0 auto 2rem;
        scrollbar-width: thin;
        scrollbar-color: var(--primary-glow-color) rgba(0, 0, 0, 0.2);
    }
```


### src\css\style.css
```css
tab-button {
        flex: 0 0 auto;
        min-width: 140px;
        /* Reduced from 150px to prevent squeezing */
        max-width: 180px;
        /* Added max-width constraint */
        padding: 0.875rem 1.25rem;
        /* Optimized padding */
        font-size: 0.95rem;
        /* Slightly smaller for better fit */
        white-space: nowrap;
        scroll-snap-align: center;
        background: rgba(168, 85, 247, 0.1);
        border: 1px solid rgba(168, 85, 247, 0.3);
        min-height: 44px;
        /* Ensure touch target minimum */
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.2s ease;
        /* Smooth feedback */
    }
```


### src\css\style.css
```css
background: rgba(168, 85, 247, 0.3);
        border-color: rgba(168, 85, 247, 0.5);
        box-shadow: 0 0 15px rgba(168, 85, 247, 0.4);
    }

    .tabs-container::-webkit-scrollbar {
        height: 8px;
    }
```


### src\css\style.css
```css
background: rgba(255, 165, 0, 0.3);
        border-color: rgba(255, 165, 0, 0.5);
        box-shadow: 0 0 15px rgba(255, 165, 0, 0.4);
    }
}

/* ========================================
   EXTRA SMALL SCREENS (480px and below)
   Further optimizations for iPhone SE and similar devices
   ======================================== */
@media (max-width: 480px) {
    .tabs-wrapper {
        padding: 0 0.75rem;
    }
```


### src\css\style.css
```css
tabs-container {
        padding: 0.5rem 0.25rem;
        gap: 0.5rem;
    }
```


### src\css\style.css
```css
tab-button {
        min-width: 120px;
        /* Further reduced for small screens */
        max-width: 160px;
        padding: 0.75rem 1rem;
        /* Reduced padding */
        font-size: 0.9rem;
        /* Smaller font */
    }
```


### src\css\style.css
```css
th tabs for small screens */
    #math-tabs .tab-button {
        min-width: 120px;
        padding: 0.75rem 1rem;
        font-size: 0.9rem;
    }
```


### src\css\style.css
```css
obile menu button adjustments for very small screens */
    .mobile-menu-btn {
        width: 40px;
        height: 40px;
        padding: 8px;
    }
```


### src\css\style.css
```css
obile-menu-btn span {
        width: 22px;
        /* Slightly smaller hamburger lines */
    }
```


### src\css\style.css
```css
ricing-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    max-width: 900px;
    margin: 3rem auto 0;
}
```


### src\css\style.css
```css
ricing-card {
    background: var(--glass-bg-light);
    border: 1px solid var(--glass-border);
    border-radius: 1.5rem;
    padding: 2.5rem;
    text-align: center;
    transition: all var(--transition-speed) var(--transition-timing);
    position: relative;
    overflow: hidden;
}
```


### src\css\style.css
```css
transform: scale(1.08) translateY(-10px);
    box-shadow: 0 20px 50px var(--primary-glow-color);
}

.popular-badge {
    position: absolute;
    top: 1.5rem;
    right: -50px;
    background: linear-gradient(135deg, #a855f7, #8A2BE2);
    color: white;
    padding: 0.5rem 4rem;
    transform: rotate(45deg);
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 1px;
}
```


### src\css\style.css
```css
ont-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1.5rem;
}

.plan-price {
    font-size: 3.5rem;
    font-weight: 800;
    margin-bottom: 1.5rem;
    background: linear-gradient(135deg, #ffffff, #d1d8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
}
```


### src\css\style.css
```css
list-style: none;
    margin: 2rem 0;
    text-align: left;
    color: #cbd5e1;
}

.plan-features li {
    padding-left: 1.75rem;
    position: relative;
    margin-bottom: 1rem;
}
```


### src\css\style.css
```css
lan-features li::before {
    content: '';
    position: absolute;
    left: 0;
    color: #4ecdc4;
    background: rgba(78, 205, 196, 0.2);
    border-radius: 50%;
    width: 22px;
    height: 22px;
    display: grid;
    place-items: center;
    font-size: 0.8rem;
    font-weight: bold;
}
```


### src\css\style.css
```css
lan-button {
    display: block;
    width: 100%;
    padding: 1rem;
    border-radius: 0.75rem;
    text-decoration: none;
    font-weight: 600;
    color: #fff;
    transition: all var(--transition-speed) ease;
    background: var(--glass-bg-dark);
    border: 1px solid var(--glass-border);
}
```


### src\css\style.css
```css
transform: scale(1);

    }
}


.card-thumbnail-container {
    width: 100%;

    padding-top: 56.25%;
    position: relative;
    overflow: hidden;
}
```


### src\css\style.css
```css
rd-thumbnail-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

}
```


### src\css\style.css
```css
===
=== COURSE PAGE STYLES ====== */


.course-detail-page main {
    padding-top: 6rem;

    position: relative;
    z-index: 10;
    min-height: 100vh;
}
```


### src\css\style.css
```css
lay: none;
}

.breadcrumb-list {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0;
    padding: 0;
    flex-wrap: wrap;
}
```


### src\css\style.css
```css
olor: #e2e8f0;
}


.course-hero {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3rem;
    max-width: 1200px;
    margin: 0 auto 3rem;

    padding: 0 2rem;
    position: relative;
    z-index: 10;
}
```


### src\css\style.css
```css
lex: 1;
}

.course-category {
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 1rem;
}
```


### src\css\style.css
```css
ont-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #a855f7, #4ecdc4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.course-hero-subtitle {
    font-size: 1.25rem;
    color: #94a3b8;
    line-height: 1.6;
}
```


### src\css\style.css
```css
ourse-hero-image {
    flex: 0 0 400px;
    max-width: 400px;
}
```


### src\css\style.css
```css
ourse-hero-image img {
    width: 100%;
    height: auto;
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(168, 85, 247, 0.3);
}
```


### src\css\style.css
```css
ourse-tabs-section {
    max-width: 1200px;
    margin: 4rem auto;
    padding: 0 2rem;
    position: relative;
    z-index: 10;
}
```


### src\css\style.css
```css
ourse-tabs-wrapper {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 2rem;
}
```


### src\css\style.css
```css
ourse-tabs-container {
    position: relative;
    display: flex;
    gap: 1rem;
    background: rgba(255, 255, 255, 0.05);
    padding: 0.5rem;
    border-radius: 12px;
    margin-bottom: 2rem;
    overflow-x: auto;
}
```


### src\css\style.css
```css
ourse-tab-button {
    flex: 1;
    min-width: 150px;
    padding: 1rem 1.5rem;
    background: transparent;
    border: none;
    color: #94a3b8;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    z-index: 2;
    white-space: nowrap;
}
```


### src\css\style.css
```css
olor: white;
}

.course-tab-glider {
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    height: calc(100% - 1rem);
    background: linear-gradient(135deg, #a855f7, #4ecdc4);
    border-radius: 8px;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
}
```


### src\css\style.css
```css
ont-size: 1.5rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: #a855f7;
}

.about-content p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #94a3b8;
    margin-bottom: 1.5rem;
}
```


### src\css\style.css
```css
lls-list {
    list-style: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    padding: 0;
}
```


### src\css\style.css
```css
lls-list li {
    padding: 1rem 1.5rem;
    background: rgba(168, 85, 247, 0.1);
    border: 1px solid rgba(168, 85, 247, 0.3);
    border-radius: 8px;
    color: #e2e8f0;
    font-size: 1rem;
}
```


### src\css\style.css
```css
lay: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
}

.tool-item {
    padding: 1rem;
    background: rgba(78, 205, 196, 0.1);
    border: 1px solid rgba(78, 205, 196, 0.3);
    border-radius: 8px;
    text-align: center;
    color: #4ecdc4;
    font-weight: 600;
    font-size: 0.95rem;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
border-color: rgba(168, 85, 247, 0.3);
}

.module-header {
    width: 100%;
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    background: transparent;
    border: none;
    color: #e2e8f0;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    text-align: left;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
background: rgba(168, 85, 247, 0.1);
}

.module-number {
    flex-shrink: 0;
    padding: 0.5rem 1rem;
    background: linear-gradient(135deg, #a855f7, #4ecdc4);
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 700;
}
```


### src\css\style.css
```css
transform: rotate(180deg);
}

.module-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
}
```


### src\css\style.css
```css
lesson-list {
    list-style: none;
    padding: 0 1.5rem 1.5rem 1.5rem;
    margin: 0;
}
```


### src\css\style.css
```css
lesson-list li {
    padding: 0.75rem 1rem;
    margin-bottom: 0.5rem;
    background: rgba(255, 255, 255, 0.02);
    border-left: 3px solid #4ecdc4;
    border-radius: 4px;
    color: #94a3b8;
    font-size: 1rem;
}
```


### src\css\style.css
```css
ontent: '';
    color: #4ecdc4;
    margin-right: 0.75rem;
    font-weight: bold;
}


.enroll-content {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 400px;
}
```


### src\css\style.css
```css
ricing-card {
    max-width: 500px;
    width: 100%;
    padding: 3rem;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(168, 85, 247, 0.3);
    border-radius: 20px;
    text-align: center;
}
```


### src\css\style.css
```css
ont-size: 1.5rem;
    color: #64748b;
    text-decoration: line-through;
    margin-left: 1rem;
}

.pricing-features {
    list-style: none;
    padding: 0;
    margin: 2rem 0;
    text-align: left;
}
```


### src\css\style.css
```css
ricing-features li {
    padding: 0.75rem 0;
    color: #94a3b8;
    font-size: 1.1rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}
```


### src\css\style.css
```css
border-bottom: none;
}

.enroll-button {
    width: 100%;
    padding: 1.25rem 2rem;
    background: linear-gradient(135deg, #a855f7, #4ecdc4);
    border: none;
    border-radius: 12px;
    color: white;
    font-size: 1.25rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 10px 30px rgba(168, 85, 247, 0.3);
}
```


### src\css\style.css
```css
lex-direction: column;
        text-align: center;
    }

    .course-hero-image {
        flex: 0 0 auto;
        max-width: 100%;
    }
```


### src\css\style.css
```css
lex-direction: column;
        gap: 0.5rem;
    }

    .course-tab-button {
        min-width: auto;
    }
```


### src\css\style.css
```css
lay: none;
    }

    .breadcrumb {
        padding: 0.75rem 1rem;
    }
```


### src\css\style.css
```css
ont-size: 0.8rem;
    }

    .pricing-card {
        padding: 2rem 1.5rem;
    }
```


### src\css\style.css
```css
rid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    }
}

/* === NAVBAR CONFLICT FIX FOR COURSE PAGES === */
body.course-detail-page nav {
    position: static;
    transform: none;
    width: 100%;
    max-width: none;
}
```


### src\css\style.css
```css
=
==== COURSE PAGE SPECIFIC STYLES ===== */


main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 40px 20px 20px;
}
```


### src\css\style.css
```css
ontainer {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
}
```


### src\css\style.css
```css
lex: 1;
}


.tab-navigation {
    margin-bottom: 2rem;
    animation: slideInUp 0.8s ease-out;
    padding: 1rem 0;
    background: rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
}
```


### src\css\style.css
```css
ont-size: 1rem;
    color: var(--text-muted);
    margin-bottom: 0;
}


.main-tabs {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
    padding: 1rem 0;
}
```


### src\css\style.css
```css
n-tab {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 1rem 2rem;
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 2px solid var(--glass-border);
    border-radius: 16px;
    color: var(--text-secondary);
    font-size: 1.125rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    position: relative;
    overflow: hidden;
    min-width: 160px;
    justify-content: center;
    will-change: transform;
    transform: translateZ(0);
}
```


### src\css\style.css
```css
n-tab::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.1), transparent);
    transition: left 0.5s ease;
}
```


### src\css\style.css
```css
nimation: pulse-glow 2s ease-in-out infinite;
    --glow-color: var(--primary-glow-color);
}

.tab-icon {
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    border-radius: 6px;
    background: rgba(255, 255, 255, 0.1);
}
```


### src\css\style.css
```css
tab-icon svg {
    width: 18px;
    height: 18px;
    color: currentColor;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}
```


### src\css\style.css
```css
lay: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0 0.75rem;
    gap: 1rem;
}

.indicator-line {
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    max-width: 100px;
}
```


### src\css\style.css
```css
ndicator-text {
    font-size: 0.875rem;
    color: var(--text-muted);
    font-weight: 500;
    white-space: nowrap;
    padding: 0 1rem;
}
```


### src\css\style.css
```css
ub-tabs-container {
    position: relative;
    min-height: 60px;
    margin-top: 0.5rem;
}
```


### src\css\style.css
```css
ub-tabs {
    display: none;
    justify-content: center;
    gap: 1rem;
    flex-wrap: wrap;
    opacity: 0;
    transform: translateY(15px);
    transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    padding: 0.5rem;
}
```


### src\css\style.css
```css
lay: flex;
    opacity: 1;
    transform: translateY(0);
}

.sub-tab {
    padding: 0.75rem 1.5rem;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 20px;
    color: var(--text-secondary);
    font-size: 0.9rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    position: relative;
    overflow: hidden;
    min-width: 100px;
    text-align: center;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.1);
    will-change: transform;
    transform: translateZ(0);
}
```


### src\css\style.css
```css
ub-tab::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(78, 205, 196, 0.1), transparent);
    transition: left 0.4s ease;
}
```


### src\css\style.css
```css
transform: scale(0.98);
    }
}


.courses-grid.list-view .course-card-link {
    display: block;
    height: 100%;
}
```


### src\css\style.css
```css
TAB NAVIGATION RESPONSIVE --- */
@media (max-width: 1024px) {
    .main-tab {
        padding: 1rem 2rem;
        font-size: 1.125rem;
        min-width: 160px;
    }
```


### src\css\style.css
```css
tab-icon {
        width: 26px;
        height: 26px;
    }
```


### src\css\style.css
```css
tab-icon svg {
        width: 20px;
        height: 20px;
    }
```


### src\css\style.css
```css
ub-tab {
        padding: 0.75rem 1.5rem;
        font-size: 0.9rem;
        min-width: 110px;
    }
```


### src\css\style.css
```css
rgin-bottom: 1.5rem;
    }

    .main-tabs {
        gap: 1rem;
        padding: 1rem 0;
    }
```


### src\css\style.css
```css
n-tab {
        padding: 0.875rem 1.5rem;
        font-size: 1rem;
        min-width: 140px;
    }
```


### src\css\style.css
```css
tab-icon {
        width: 24px;
        height: 24px;
    }
```


### src\css\style.css
```css
tab-icon svg {
        width: 18px;
        height: 18px;
    }
```


### src\css\style.css
```css
rem;
        justify-content: center;
        flex-wrap: wrap;
    }

    .sub-tab {
        padding: 0.75rem 1.25rem;
        font-size: 0.875rem;
        min-width: 100px;
    }
```


### src\css\style.css
```css
edia (max-width: 480px) {
    .main-tabs {
        flex-direction: column;
        gap: 0.75rem;
        padding: 0.75rem 0;
    }
```


### src\css\style.css
```css
n-tab {
        padding: 1rem 1.5rem;
        font-size: 1rem;
        min-width: auto;
        width: 100%;
        max-width: 280px;
        margin: 0 auto;
    }
```


### src\css\style.css
```css
tab-icon {
        width: 22px;
        height: 22px;
    }
```


### src\css\style.css
```css
tab-icon svg {
        width: 18px;
        height: 18px;
    }
```


### src\css\style.css
```css
ub-tabs-container {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        -ms-overflow-style: none;
    }
```


### src\css\style.css
```css
lay: none;
    }

    .sub-tabs {
        gap: 0.75rem;
        justify-content: flex-start;
        flex-wrap: nowrap;
        padding: 0.5rem 1rem;
        min-width: max-content;
    }
```


### src\css\style.css
```css
ub-tab {
        padding: 0.75rem 1.25rem;
        font-size: 0.875rem;
        min-width: 100px;
        flex-shrink: 0;
        white-space: nowrap;
    }
```


### src\css\style.css
```css
te-space: nowrap;
        font-size: 0.8rem;
    }
}

@media (max-width: 480px) {
    .main-tabs {
        flex-direction: column;
        gap: 0.75rem;
        padding: 0.75rem 0;
    }
```


### src\css\style.css
```css
n-tab {
        padding: 1rem 1.5rem;
        font-size: 1rem;
        min-width: auto;
        width: 100%;
        max-width: 280px;
        margin: 0 auto;
    }
```


### src\css\style.css
```css
tab-icon {
        width: 22px;
        height: 22px;
    }
```


### src\css\style.css
```css
tab-icon svg {
        width: 16px;
        height: 16px;
    }
```


### src\css\style.css
```css
ub-tabs {
        gap: 0.5rem;
        padding: 0 0.5rem;
    }
```


### src\css\style.css
```css
ub-tab {
        padding: 0.625rem 1rem;
        font-size: 0.875rem;
        flex: 1;
        min-width: 0;
    }
```


### src\css\style.css
```css
ont-size: 0.8rem;
    }
}

/*
--- PRICING SECTION STYLES --- */
.pricing-section {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 4rem 2rem;
    animation: slideInUp 0.8s ease-out 0.4s both;
}
```


### src\css\style.css
```css
text-align: center;
}

.pricing-title {
    font-size: clamp(2rem, 4vw, 2.8rem);
    font-weight: 700;
    margin-bottom: 1rem;
    background: linear-gradient(135deg, var(--text-primary), #d1d8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    letter-spacing: -0.02em;
    line-height: 1.2;
}
```


### src\css\style.css
```css
ricing-subtitle {
    font-size: 1.125rem;
    color: var(--text-muted);
    margin-bottom: 3rem;
    font-weight: 400;
    line-height: 1.6;
}
```


### src\css\style.css
```css
ricing-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    max-width: 800px;
    margin: 0 auto;
}
```


### src\css\style.css
```css
ricing-card {
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-xl);
    padding: 2.5rem 2rem;
    position: relative;
    overflow: hidden;
    box-shadow: var(--glass-shadow);
    transition: all var(--transition-speed) var(--transition-timing);
    animation: fadeIn 0.8s ease both;
}
```


### src\css\style.css
```css
ricing-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, #a855f7, #4ecdc4);
    transform: scaleX(0);
    transition: transform var(--transition-speed) ease;
    transform-origin: left;
}
```


### src\css\style.css
```css
ont-size: 1.5rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 0.5rem;
}

.pricing-badge {
    display: inline-block;
    padding: 0.375rem 0.75rem;
    background: linear-gradient(135deg, #a855f7, #4ecdc4);
    color: white;
    border-radius: 2rem;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-top: 0.5rem;
}
```


### src\css\style.css
```css
ont-size: 1.25rem;
    font-weight: 600;
    color: var(--text-secondary);
}

.price {
    font-size: 3rem;
    font-weight: 800;
    background: linear-gradient(135deg, white, #E0E7FF);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    line-height: 1;
}
```


### src\css\style.css
```css
ont-size: 1rem;
    color: var(--text-muted);
    font-weight: 500;
}

.pricing-features {
    list-style: none;
    padding: 0;
    margin: 0 0 2.5rem 0;
    text-align: left;
}
```


### src\css\style.css
```css
ricing-features li {
    padding: 0.75rem 0;
    color: var(--text-secondary);
    font-size: 0.95rem;
    display: flex;
    align-items: center;
    transition: transform 0.3s ease;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}
```


### src\css\style.css
```css
border-bottom: none;
}

.pricing-features li::before {
    content: '';
    margin-right: 0.75rem;
    font-weight: 900;
    color: #4ecdc4;
    background: rgba(78, 205, 196, 0.2);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: inline-grid;
    place-items: center;
    font-size: 0.8rem;
    flex-shrink: 0;
}
```


### src\css\style.css
```css
ricing-cta-button {
    width: 100%;
    padding: 1rem 2rem;
    background: linear-gradient(135deg, #8A2BE2, #4A00E0);
    color: white;
    border: none;
    border-radius: 0.875rem;
    font-weight: 700;
    font-size: 1rem;
    cursor: pointer;
    transition: all var(--transition-speed) ease;
    box-shadow: 0 6px 25px var(--primary-glow-color);
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}
```


### src\css\style.css
```css
ricing-cta-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s ease;
    pointer-events: none;
}
```


### src\css\style.css
```css
box-shadow: 0 12px 40px rgba(239, 68, 68, 0.5);
}


body.course-detail-page main {
    padding: 120px 20px 20px;
    gap: 0;
}
```


### src\css\style.css
```css
ourse-hero {
    margin-bottom: 0;
    padding: 3rem 2rem;
    background: var(--glass-bg-dark);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border-radius: 1.5rem;
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow);
    position: relative;
    overflow: hidden;
    transition: all var(--transition-speed) ease;
    animation: slideInUp 0.8s ease-out both;
    max-width: 1200px;
    margin: 0 auto 2rem auto;
}
```


### src\css\style.css
```css
ourse-hero::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(168, 85, 247, 0.1) 0%, transparent 50%);
    z-index: 0;
    animation: subtle-glow 15s ease-in-out infinite;
}
```


### src\css\style.css
```css
osition: relative;
    z-index: 1;
    text-align: center;
}

.course-category {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: rgba(168, 85, 247, 0.2);
    border: 1px solid rgba(168, 85, 247, 0.4);
    border-radius: 2rem;
    color: #a855f7;
    font-size: 0.85rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 1rem;
}
```


### src\css\style.css
```css
ourse-hero-title {
    font-size: clamp(2.5rem, 5vw, 3.5rem);
    font-weight: 800;
    background: linear-gradient(135deg, #ffffff, #d1d8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0 0 40px rgba(255, 255, 255, 0.2);
    margin-bottom: 1rem;
    line-height: 1.2;
}
```


### src\css\style.css
```css
ourse-hero-subtitle {
    font-size: clamp(1rem, 2vw, 1.15rem);
    color: #94a3b8;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}
```


### src\css\style.css
```css
ourse-tabs-section {
    max-width: 1200px;
    margin: 2rem auto 0 auto;
    animation: slideInUp 0.8s ease-out 0.2s both;
}
```


### src\css\style.css
```css
edia (max-width: 768px) {
    .pricing-section {
        padding: 3rem 1rem;
    }
```


### src\css\style.css
```css
ont-size: 2.5rem;
    }

    .course-hero {
        padding: 2rem 1rem;
        margin-bottom: 1rem;
    }
```


### src\css\style.css
```css
edia (max-width: 480px) {
    .pricing-card {
        padding: 2rem 1.5rem;
    }
```


### src\css\style.css
```css
ont-size: 2rem;
    }
}

/* === NEW AMAZING ENROLLMENT BAR STYLES === */

/* === UPDATED AMAZING ENROLLMENT BAR STYLES === */


.enrollment-cta-section {
    max-width: 1200px;
    margin: 3rem auto 2rem;
    padding: 0 2rem;
    animation: slideInUp 0.8s ease-out 0.2s both;
}
```


### src\css\style.css
```css
enrollment-cta-container {
    background: var(--glass-bg-dark);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-xl);
    padding: 2.5rem;
    box-shadow: var(--glass-shadow);
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    transition: all var(--transition-speed) ease;
    position: relative;
    overflow: hidden;
}
```


### src\css\style.css
```css
ont-size: clamp(1.8rem, 3vw, 2.2rem);
    font-weight: 700;
    margin-bottom: 0.5rem;
    background: linear-gradient(135deg, #ffffff, #d1d8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.enrollment-cta-text p {
    color: var(--text-muted);
    font-size: 1rem;
    max-width: 400px;
}
```


### src\css\style.css
```css
lay: flex;
    gap: 1.5rem;
    flex-shrink: 0;
}

.enrollment-option {
    background: rgba(0, 0, 0, 0.2);
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-lg);
    padding: 1.5rem;
    text-align: center;
    transition: all var(--transition-speed) ease;
    width: 280px;
    position: relative;
}
```


### src\css\style.css
```css
ont-size: 0.85rem;
    color: var(--text-muted);
    margin: 0 0 1.25rem 0;
}

.enroll-btn {
    display: inline-block;
    width: 100%;
    padding: 0.875rem 2rem;
    border-radius: 50px;
    text-decoration: none;
    font-weight: 700;
    font-size: 1rem;
    transition: all var(--transition-speed) ease;
    border: 2px solid transparent;
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
    position: relative;
    overflow: hidden;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}
```


### src\css\style.css
```css
background: transparent;
    color: #a855f7;
    border-color: #a855f7;
    --glow-color: var(--primary-glow-color);
}

.enroll-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.6s ease;
}
```


### src\css\style.css
```css
lex-direction: column;
        text-align: center;
    }
}

@media (max-width: 768px) {
    .enrollment-options {
        flex-direction: column;
        width: 100%;
    }
```


### src\css\style.css
```css
enrollment-option {
        width: 100%;
    }
```


### src\css\style.css
```css
========================================
   BLOG SYSTEM STYLES
   ======================================== */

/* ===== BLOG LISTING PAGE ===== */
.blog-listing-page {
    background: var(--glass-bg-dark);
    min-height: 100vh;
}
```


### src\css\style.css
```css
blog-listing-hero {
    padding: 120px 0 80px;
    background: linear-gradient(135deg,
            rgba(168, 85, 247, 0.1),
            rgba(78, 205, 196, 0.1));
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
}
```


### src\css\style.css
```css
blog-hero-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}
```


### src\css\style.css
```css
ont-size: var(--heading-primary);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;
    background: linear-gradient(135deg, #a855f7, #4ecdc4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

.blog-hero-subtitle {
    font-size: 1.25rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    line-height: 1.6;
}
```


### src\css\style.css
```css
lay: flex;
    justify-content: center;
    align-items: center;
}

.blog-hero-image svg {
    width: 100%;
    max-width: 400px;
    height: auto;
}
```


### src\css\style.css
```css
===== FEATURED POSTS SECTION ===== */
.featured-posts-section {
    padding: 80px 0;
    background: var(--glass-bg-light);
}
```


### src\css\style.css
```css
eatured-posts-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}
```


### src\css\style.css
```css
transform: translateY(-8px);
    border-color: var(--glass-hover-border);
    box-shadow: var(--glass-hover-shadow);
}

.featured-post-image {
    height: 200px;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(78, 205, 196, 0.2));
    display: flex;
    align-items: center;
    justify-content: center;
}
```


### src\css\style.css
```css
eatured-post-image svg {
    width: 80%;
    height: 80%;
}
```


### src\css\style.css
```css
eatured-post-content {
    padding: 1.5rem;
}
```


### src\css\style.css
```css
lay: flex;
    gap: 1rem;
    margin-bottom: 1rem;
    flex-wrap: wrap;
}

.post-category {
    background: rgba(168, 85, 247, 0.2);
    color: #a855f7;
    padding: 0.25rem 0.75rem;
    border-radius: 12px;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}
```


### src\css\style.css
```css
rgin-bottom: 1rem;
}

.post-title a {
    color: var(--text-primary);
    text-decoration: none;
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.4;
    transition: color 0.3s ease;
}
```


### src\css\style.css
```css
olor: #a855f7;
}

.post-excerpt {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: 1rem;
}
```


### src\css\style.css
```css
ont-weight: 500;
}

/* ===== BLOG FILTER SECTION ===== */
.blog-filter-section {
    padding: 60px 0;
    background: var(--glass-bg-dark);
    border-top: 1px solid var(--glass-border);
}
```


### src\css\style.css
```css
blog-filter-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}
```


### src\css\style.css
```css
lay: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
}

.search-box {
    position: relative;
    flex: 1;
    max-width: 400px;
}
```


### src\css\style.css
```css
earch-box input {
    width: 100%;
    padding: 0.75rem 1rem 0.75rem 3rem;
    background: var(--glass-bg-light);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    color: var(--text-primary);
    font-size: 1rem;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
outline: none;
    border-color: #a855f7;
    box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
}

.search-btn {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    padding: 0.25rem;
}
```


### src\css\style.css
```css
earch-btn svg {
    width: 1.25rem;
    height: 1.25rem;
}
```


### src\css\style.css
```css
lay: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
}

.filter-btn {
    padding: 0.5rem 1rem;
    background: var(--glass-bg-light);
    border: 1px solid var(--glass-border);
    border-radius: 8px;
    color: var(--text-secondary);
    font-size: 0.875rem;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
background: rgba(168, 85, 247, 0.2);
    border-color: #a855f7;
    color: #a855f7;
}

/* ===== ALL POSTS SECTION ===== */
.all-posts-section {
    padding: 80px 0;
    background: var(--glass-bg-light);
}
```


### src\css\style.css
```css
ll-posts-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}
```


### src\css\style.css
```css
transform: translateY(-4px);
    border-color: var(--glass-hover-border);
    box-shadow: var(--glass-hover-shadow);
}

.post-image {
    height: 160px;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(78, 205, 196, 0.1));
    display: flex;
    align-items: center;
    justify-content: center;
}
```


### src\css\style.css
```css
ost-image svg {
    width: 70%;
    height: 70%;
}
```


### src\css\style.css
```css
ost-content {
    padding: 1.25rem;
}
```


### src\css\style.css
```css
ost-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--glass-border);
}
```


### src\css\style.css
```css
lay: flex;
    align-items: center;
    gap: 0.5rem;
}

.pagination-btn {
    padding: 0.5rem;
    background: var(--glass-bg-dark);
    border: 1px solid var(--glass-border);
    border-radius: 8px;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
opacity: 0.5;
    cursor: not-allowed;
}

.pagination-btn svg {
    width: 1rem;
    height: 1rem;
}
```


### src\css\style.css
```css
lay: flex;
    gap: 0.25rem;
    margin: 0 1rem;
}

.pagination-number {
    padding: 0.5rem 0.75rem;
    background: var(--glass-bg-dark);
    border: 1px solid var(--glass-border);
    border-radius: 8px;
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 0.875rem;
}
```


### src\css\style.css
```css
background: rgba(168, 85, 247, 0.2);
    border-color: #a855f7;
    color: #a855f7;
}

.pagination-dots {
    color: var(--text-muted);
    padding: 0.5rem;
}
```


### src\css\style.css
```css
===== NEWSLETTER SECTION ===== */
.newsletter-section {
    padding: 80px 0;
    background: var(--glass-bg-dark);
    border-top: 1px solid var(--glass-border);
}
```


### src\css\style.css
```css
newsletter-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
}
```


### src\css\style.css
```css
ont-size: 2.5rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;
}

.newsletter-content p {
    color: var(--text-secondary);
    font-size: 1.125rem;
    margin-bottom: 2rem;
    line-height: 1.6;
}
```


### src\css\style.css
```css
lay: flex;
    gap: 1rem;
    margin-bottom: 1rem;
}

.newsletter-form input {
    flex: 1;
    padding: 0.875rem 1rem;
    background: var(--glass-bg-light);
    border: 1px solid var(--glass-border);
    border-radius: 8px;
    color: var(--text-primary);
    font-size: 1rem;
}
```


### src\css\style.css
```css
outline: none;
    border-color: #a855f7;
    box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
}

.newsletter-btn {
    padding: 0.875rem 1.5rem;
    background: linear-gradient(135deg, #a855f7, #4ecdc4);
    border: none;
    border-radius: 8px;
    color: white;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
lay: flex;
    justify-content: center;
    align-items: center;
}

.newsletter-image svg {
    width: 100%;
    max-width: 300px;
    height: auto;
}
```


### src\css\style.css
```css
===== BLOG DETAIL PAGE ===== */
.blog-detail-page {
    background: var(--glass-bg-dark);
    min-height: 100vh;
}
```


### src\css\style.css
```css
===== BREADCRUMB NAVIGATION ===== */
.breadcrumb-section {
    padding: 100px 0 20px;
    background: var(--glass-bg-light);
}
```


### src\css\style.css
```css
breadcrumb-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
}
```


### src\css\style.css
```css
olor: var(--text-secondary);
    font-weight: 500;
}

/* ===== BLOG HERO SECTION ===== */
.blog-hero {
    padding: 40px 0 80px;
    background: var(--glass-bg-light);
    display: flex;
    align-items: center;
    justify-content: center;
}
```


### src\css\style.css
```css
blog-hero-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
    align-items: center;
}
```


### src\css\style.css
```css
lay: flex;
    gap: 1rem;
    margin-bottom: 1.5rem;
    flex-wrap: wrap;
}

.blog-category {
    background: rgba(168, 85, 247, 0.2);
    color: #a855f7;
    padding: 0.375rem 1rem;
    border-radius: 16px;
    font-size: 0.875rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05em;
}
```


### src\css\style.css
```css
olor: var(--text-muted);
    font-size: 0.875rem;
    font-weight: 500;
}

.blog-hero-title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1rem;
    line-height: 1.2;
}
```


### src\css\style.css
```css
blog-hero-subtitle {
    font-size: 1.25rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    line-height: 1.5;
}
```


### src\css\style.css
```css
lay: flex;
    align-items: center;
    gap: 0.75rem;
}

.author-avatar {
    width: 48px;
    height: 48px;
    background: rgba(168, 85, 247, 0.2);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #a855f7;
}
```


### src\css\style.css
```css
uthor-avatar svg {
    width: 24px;
    height: 24px;
}
```


### src\css\style.css
```css
lay: flex;
    justify-content: center;
    align-items: center;
}

.blog-hero-image svg {
    width: 100%;
    max-width: 350px;
    height: auto;
}
```


### src\css\style.css
```css
===== BLOG CONTENT SECTION ===== */
.blog-content-section {
    padding: 80px 0;
    background: var(--glass-bg-dark);
}
```


### src\css\style.css
```css
blog-content-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
}
```


### src\css\style.css
```css
blog-article {
    background: var(--glass-bg-light);
    border: 1px solid var(--glass-border);
    border-radius: 16px;
    padding: 3rem;
    backdrop-filter: blur(var(--glass-blur));
}
```


### src\css\style.css
```css
blog-introduction {
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--text-secondary);
    margin-bottom: 3rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid var(--glass-border);
}
```


### src\css\style.css
```css
rgin-bottom: 3rem;
}

.blog-section h2 {
    font-size: 1.75rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
    line-height: 1.3;
}
```


### src\css\style.css
```css
blog-section p {
    color: var(--text-secondary);
    line-height: 1.7;
    margin-bottom: 1rem;
    font-size: 1.0625rem;
}
```


### src\css\style.css
```css
blog-list {
    list-style: none;
    padding: 0;
    margin: 1.5rem 0;
}
```


### src\css\style.css
```css
blog-list li {
    position: relative;
    padding-left: 2rem;
    margin-bottom: 0.75rem;
    color: var(--text-secondary);
    line-height: 1.6;
}
```


### src\css\style.css
```css
ontent: '';
    position: absolute;
    left: 0;
    color: #a855f7;
    font-weight: bold;
}

.code-section pre {
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    padding: 1.5rem;
    overflow-x: auto;
    margin: 1.5rem 0;
}
```


### src\css\style.css
```css
ode-section code {
    color: #f8f8f2;
    font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
    font-size: 0.9375rem;
    line-height: 1.5;
}
```


### src\css\style.css
```css
rgin: 2rem 0;
    text-align: center;
}

.blog-image img {
    max-width: 100%;
    height: auto;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
```


### src\css\style.css
```css
blog-conclusion {
    padding-top: 2rem;
    border-top: 1px solid var(--glass-border);
}
```


### src\css\style.css
```css
ont-size: 1.75rem;
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: 1.5rem;
}

.blog-conclusion p {
    color: var(--text-secondary);
    line-height: 1.7;
    font-size: 1.0625rem;
}
```


### src\css\style.css
```css
===== SOCIAL SHARING ===== */
.blog-sharing {
    margin-top: 3rem;
    padding-top: 2rem;
    border-top: 1px solid var(--glass-border);
}
```


### src\css\style.css
```css
lay: flex;
    gap: 1rem;
}

.share-btn {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: all 0.3s ease;
    border: 1px solid var(--glass-border);
}
```


### src\css\style.css
```css
re-btn svg {
    width: 20px;
    height: 20px;
}
```


### src\css\style.css
```css
lay: flex;
    flex-direction: column;
    gap: 2rem;
}

.sidebar-widget {
    background: var(--glass-bg-light);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    padding: 1.5rem;
    backdrop-filter: blur(var(--glass-blur));
}
```


### src\css\style.css
```css
lay: flex;
    flex-direction: column;
    gap: 1rem;
}

.related-post {
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--glass-border);
}
```


### src\css\style.css
```css
related-post:last-child {
    border-bottom: none;
    padding-bottom: 0;
}
```


### src\css\style.css
```css
rgin-bottom: 0.5rem;
}

.related-post h4 a {
    color: var(--text-primary);
    text-decoration: none;
    font-size: 0.9375rem;
    font-weight: 500;
    line-height: 1.4;
    transition: color 0.3s ease;
}
```


### src\css\style.css
```css
lay: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.category-link {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.5rem 0;
    color: var(--text-secondary);
    text-decoration: none;
    font-size: 0.9375rem;
    transition: color 0.3s ease;
}
```


### src\css\style.css
```css
background: linear-gradient(135deg, rgba(168, 85, 247, 0.1), rgba(78, 205, 196, 0.1));
    border-color: rgba(168, 85, 247, 0.3);
}

.cta-widget p {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    line-height: 1.5;
}
```


### src\css\style.css
```css
ebar-cta-btn {
    display: inline-block;
    padding: 0.75rem 1.5rem;
    background: linear-gradient(135deg, #a855f7, #4ecdc4);
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    text-align: center;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(168, 85, 247, 0.3);
}

/* ===== BLOG NAVIGATION ===== */
.blog-navigation {
    padding: 60px 0;
    background: var(--glass-bg-light);
    border-top: 1px solid var(--glass-border);
}
```


### src\css\style.css
```css
blog-nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}
```


### src\css\style.css
```css
nav-post {
    background: var(--glass-bg-dark);
    border: 1px solid var(--glass-border);
    border-radius: 12px;
    padding: 1.5rem;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
lay: block;
    color: var(--text-muted);
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 0.5rem;
}

.nav-title {
    color: var(--text-primary);
    text-decoration: none;
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.4;
    transition: color 0.3s ease;
}
```


### src\css\style.css
```css
text-align: center;
    }

    .blog-article {
        padding: 2rem;
    }
```


### src\css\style.css
```css
lex-direction: column;
        align-items: stretch;
    }

    .search-box {
        max-width: none;
    }
```


### src\css\style.css
```css
ont-size: 1rem;
    }

    .blog-article {
        padding: 1.5rem;
    }
```


### src\css\style.css
```css
olor: #a855f7;
    position: relative;
}

.nav-link.active::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 6px;
    background: #a855f7;
    border-radius: 50%;
}
```


### src\css\style.css
```css
lay: none;
}

/* ===== BLOG SEARCH HIGHLIGHTING ===== */
.search-highlight {
    background: rgba(168, 85, 247, 0.3);
    padding: 0.125rem 0.25rem;
    border-radius: 4px;
}
```


### src\css\style.css
```css
blog-listing-hero {
    text-align: center;
    padding: var(--spacing-3xl) var(--spacing-xl);
    margin-top: 80px;
}
```


### src\css\style.css
```css
ont-size: var(--heading-primary);
    background: linear-gradient(135deg, var(--text-primary), #d1d8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: var(--spacing-md);
}

.blog-listing-hero-content p {
    font-size: var(--body-large);
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
}
```


### src\css\style.css
```css
eatured-post-section {
    padding: var(--spacing-2xl) var(--spacing-xl);
    max-width: var(--content-max-width);
    margin: 0 auto;
}
```


### src\css\style.css
```css
osition: relative;
    overflow: hidden;
}

.featured-post-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}
```


### src\css\style.css
```css
transform: scale(1.05);
}

.featured-post-content {
    padding: var(--spacing-2xl);
    display: flex;
    flex-direction: column;
    justify-content: center;
}
```


### src\css\style.css
```css
eatured-badge {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: linear-gradient(135deg, #FFD700, #FFA500);
    color: #000;
    border-radius: var(--border-radius-sm);
    font-size: var(--body-small);
    font-weight: 600;
    margin-bottom: var(--spacing-md);
    width: fit-content;
}
```


### src\css\style.css
```css
ont-size: var(--heading-secondary);
    color: var(--text-primary);
    margin: var(--spacing-md) 0;
}

.featured-post-content p {
    font-size: var(--body-regular);
    color: var(--text-secondary);
    margin-bottom: var(--spacing-lg);
    line-height: 1.6;
}
```


### src\css\style.css
```css
lay: flex;
    gap: var(--spacing-lg);
    margin-bottom: var(--spacing-xl);
    font-size: var(--body-small);
    color: var(--text-muted);
}


.blog-listing-section {
    padding: var(--spacing-2xl) var(--spacing-xl);
    max-width: var(--content-max-width);
    margin: 0 auto;
}
```


### src\css\style.css
```css
background: var(--glass-hover-bg-light);
    border-color: var(--glass-hover-border);
    box-shadow: var(--glass-hover-shadow);
    transform: var(--card-hover-transform);
}

.blog-card-image {
    width: 100%;
    height: 200px;
    overflow: hidden;
    position: relative;
}
```


### src\css\style.css
```css
blog-card-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
}
```


### src\css\style.css
```css
transform: scale(1.1);
}

.blog-card-content {
    padding: var(--spacing-lg);
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}
```


### src\css\style.css
```css
blog-card-category {
    display: inline-block;
    padding: 0.25rem 0.75rem;
    background: var(--primary-glow-color);
    color: var(--text-primary);
    border-radius: var(--border-radius-sm);
    font-size: var(--body-small);
    font-weight: 600;
    margin-bottom: var(--spacing-md);
    width: fit-content;
}
```


### src\css\style.css
```css
blog-card-title {
    font-size: var(--heading-tertiary);
    color: var(--text-primary);
    margin-bottom: var(--spacing-md);
    line-height: 1.3;
}
```


### src\css\style.css
```css
blog-card-excerpt {
    font-size: var(--body-regular);
    color: var(--text-secondary);
    margin-bottom: var(--spacing-lg);
    line-height: 1.6;
    flex-grow: 1;
}
```


### src\css\style.css
```css
blog-card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: var(--spacing-md);
    border-top: 1px solid var(--glass-border);
    font-size: var(--body-small);
    color: var(--text-muted);
}
```


### src\css\style.css
```css
blog-hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--card-gap);
    padding: var(--spacing-3xl) var(--spacing-xl);
    max-width: var(--content-max-width);
    margin: 80px auto 0;
    align-items: center;
}
```


### src\css\style.css
```css
lay: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
}

.blog-category {
    display: inline-block;
    padding: 0.5rem 1rem;
    background: var(--primary-glow-color);
    color: var(--text-primary);
    border-radius: var(--border-radius-sm);
    font-size: var(--body-small);
    font-weight: 600;
    width: fit-content;
}
```


### src\css\style.css
```css
blog-hero-title {
    font-size: var(--heading-primary);
    color: var(--text-primary);
    line-height: 1.1;
    background: linear-gradient(135deg, var(--text-primary), #d1d8ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}
```


### src\css\style.css
```css
blog-hero-subtitle {
    font-size: var(--body-large);
    color: var(--text-secondary);
    line-height: 1.6;
}
```


### src\css\style.css
```css
blog-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: var(--spacing-lg);
    border-top: 1px solid var(--glass-border);
}
```


### src\css\style.css
```css
lay: flex;
    align-items: center;
    gap: var(--spacing-md);
}

.author-avatar {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 2px solid var(--primary-glow-color);
}
```


### src\css\style.css
```css
ont-size: var(--body-small);
    color: var(--text-muted);
}

.read-time {
    font-size: var(--body-small);
    color: var(--text-muted);
    padding: 0.5rem 1rem;
    background: var(--glass-bg-dark);
    border-radius: var(--border-radius-sm);
}
```


### src\css\style.css
```css
border-radius: var(--border-radius-xl);
    overflow: hidden;
    box-shadow: var(--glass-shadow);
}

.blog-hero-image img {
    width: 100%;
    height: auto;
    display: block;
}
```


### src\css\style.css
```css
blog-content-section {
    max-width: 800px;
    margin: 0 auto;
    padding: var(--spacing-3xl) var(--spacing-xl);
}
```


### src\css\style.css
```css
blog-content {
    font-size: var(--body-large);
    line-height: 1.8;
    color: var(--text-secondary);
}
```


### src\css\style.css
```css
blog-content h2 {
    font-size: var(--heading-secondary);
    color: var(--text-primary);
    margin-top: var(--spacing-3xl);
    margin-bottom: var(--spacing-lg);
    line-height: 1.2;
}
```


### src\css\style.css
```css
blog-content h3 {
    font-size: var(--heading-tertiary);
    color: var(--text-primary);
    margin-top: var(--spacing-2xl);
    margin-bottom: var(--spacing-md);
    line-height: 1.3;
}
```


### src\css\style.css
```css
rgin-bottom: var(--spacing-lg);
}

.blog-content ul,
.blog-content ol {
    margin-bottom: var(--spacing-lg);
    padding-left: var(--spacing-2xl);
}
```


### src\css\style.css
```css
blog-content li {
    margin-bottom: var(--spacing-sm);
    line-height: 1.8;
}
```


### src\css\style.css
```css
rgin: var(--spacing-2xl) 0;
}

.blog-content .blog-image img {
    width: 100%;
    height: auto;
    border-radius: var(--border-radius-md);
    box-shadow: var(--glass-shadow);
}
```


### src\css\style.css
```css
text-align: center;
    font-size: var(--body-small);
    color: var(--text-muted);
    margin-top: var(--spacing-md);
    font-style: italic;
}

.blog-content pre {
    background: var(--glass-bg-dark);
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-md);
    padding: var(--spacing-lg);
    overflow-x: auto;
    margin: var(--spacing-2xl) 0;
}
```


### src\css\style.css
```css
olor: var(--text-secondary);
}

.blog-content blockquote {
    border-left: 4px solid var(--primary-glow-color);
    padding-left: var(--spacing-lg);
    margin: var(--spacing-2xl) 0;
    font-style: italic;
    color: var(--text-muted);
    background: var(--glass-bg-dark);
    padding: var(--spacing-lg);
    border-radius: var(--border-radius-md);
}
```


### src\css\style.css
```css
lay: block;
    font-size: var(--body-small);
    color: var(--text-muted);
    font-style: normal;
    margin-top: var(--spacing-sm);
}


.author-bio-section {
    display: flex;
    gap: var(--spacing-lg);
    padding: var(--spacing-xl);
    background: var(--glass-bg-light);
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-lg);
    margin-top: var(--spacing-3xl);
}
```


### src\css\style.css
```css
uthor-bio-avatar {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 3px solid var(--primary-glow-color);
    flex-shrink: 0;
}
```


### src\css\style.css
```css
ont-size: var(--heading-tertiary);
    color: var(--text-primary);
    margin-bottom: var(--spacing-sm);
}

.author-bio-content p {
    font-size: var(--body-regular);
    color: var(--text-secondary);
    line-height: 1.6;
}
```


### src\css\style.css
```css
lay: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--card-gap);
}

.no-related {
    text-align: center;
    color: var(--text-muted);
    padding: var(--spacing-xl);
    background: var(--glass-bg-dark);
    border-radius: var(--border-radius-md);
}
```


### src\css\style.css
```css
edia (max-width: 768px) {
    .blog-hero {
        grid-template-columns: 1fr;
        padding: var(--spacing-2xl) var(--spacing-md);
        margin-top: 60px;
    }
```


### src\css\style.css
```css
rid-template-columns: 1fr;
    }

    .featured-post-image {
        height: 250px;
    }
```


### src\css\style.css
```css
rid-template-columns: 1fr;
    }

    .blog-content-section {
        padding: var(--spacing-xl) var(--spacing-md);
    }
```


### src\css\style.css
```css
lex-direction: column;
        text-align: center;
        align-items: center;
    }
}

@media (max-width: 480px) {
    .blog-listing-hero {
        padding: var(--spacing-2xl) var(--spacing-md);
    }
```


### src\css\style.css
```css
lex-direction: column;
        align-items: flex-start;
        gap: var(--spacing-md);
    }
}

/* === NEW AWESOME COURSE IMAGE STYLES === */


.course-header {

    padding: 0 !important;


    height: 200px !important;
    min-height: 200px !important;


    overflow: hidden !important;
}
```


### src\css\style.css
```css
ourse-header .course-image {

    width: 100% !important;
    height: 100% !important;


    object-fit: cover !important;


    padding: 0 !important;
    border-radius: 0 !important;
    background: none !important;
    box-shadow: none !important;


    transition: transform 0.4s ease !important;
}
```


### src\css\style.css
```css
transform: scale(1.1);
}

/* ===
=====================================
   MINIMAL COURSE CARD STYLES (REDESIGN)
   ======================================== */

.course-card-minimal {
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-xl);
    overflow: hidden;
    transition: all 0.3s ease;
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    box-shadow: var(--glass-shadow);
    cursor: pointer;
}
```


### src\css\style.css
```css
ourse-card-minimal::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--primary-glow-color), var(--secondary-glow-color));
    transform: scaleX(0);
    transition: transform var(--transition-speed) ease;
    transform-origin: left;
    z-index: 1;
}
```


### src\css\style.css
```css
box-shadow: 0 12px 40px rgba(255, 165, 0, 0.4);
}


.course-image-container {
    width: 100%;
    height: 220px;
    min-height: 220px;
    max-height: 220px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.05), rgba(78, 205, 196, 0.05));
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    border-radius: 16px 16px 0 0;
}
```


### src\css\style.css
```css
background: linear-gradient(135deg, rgba(255, 215, 0, 0.08), rgba(255, 165, 0, 0.05));
}

.course-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center;
    transition: transform 0.4s ease;
    display: block;
}
```


### src\css\style.css
```css
transform: scale(1.05);
}


.course-content-minimal {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
}
```


### src\css\style.css
```css
ourse-title-minimal {
    font-size: 1.25rem;
    font-weight: 700;
    color: var(--text-primary);
    margin: 0 0 0.75rem 0;
    line-height: 1.3;
    text-align: center;
}
```


### src\css\style.css
```css
ourse-description-minimal {
    font-size: 0.95rem;
    color: var(--text-secondary);
    line-height: 1.7;
    margin: 0 0 1rem 0;
    text-align: center;
    flex-grow: 1;
}
```


### src\css\style.css
```css
tart-learning-btn {
    width: 100%;
    padding: 0.875rem 1.5rem;
    background: linear-gradient(135deg, #8A2BE2, #4A00E0);
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    box-shadow: 0 4px 15px rgba(138, 43, 226, 0.3);
    margin-top: auto;
}
```


### src\css\style.css
```css
transition-timing-function: cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.start-learning-btn .btn-arrow {
    width: 20px;
    height: 20px;
    stroke: currentColor;
    stroke-width: 2;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    transition: transform var(--transition-speed) ease;
}
```


### src\css\style.css
```css
background: linear-gradient(135deg, #FBBF24, #F59E0B);
    box-shadow: 0 6px 25px rgba(245, 158, 11, 0.5);
}


@media (max-width: 1024px) {
    .course-image-container {
        height: 200px;
        min-height: 200px;
        max-height: 200px;
    }
```


### src\css\style.css
```css
ourse-content-minimal {
        padding: 1.25rem;
    }
```


### src\css\style.css
```css
ont-size: 0.9rem;
    }

    .start-learning-btn {
        padding: 0.75rem 1.25rem;
        font-size: 0.95rem;
    }
```


### src\css\style.css
```css
edia (max-width: 768px) {
    .course-image-container {
        height: 180px;
        min-height: 180px;
        max-height: 180px;
    }
```


### src\css\style.css
```css
ourse-content-minimal {
        padding: 1rem;
        gap: 0.875rem;
    }
```


### src\css\style.css
```css
ont-size: 0.875rem;
    }

    .start-learning-btn {
        padding: 0.75rem 1rem;
        font-size: 0.9rem;
    }
```


### src\css\style.css
```css
edia (max-width: 480px) {
    .course-image-container {
        height: 160px;
        min-height: 160px;
        max-height: 160px;
    }
```


### src\css\style.css
```css
ourse-content-minimal {
        padding: 1rem;
    }
```


### src\css\style.css
```css
ont-size: 0.8125rem;
    }

    .start-learning-btn {
        padding: 0.625rem 1rem;
        font-size: 0.875rem;
    }
```


### src\css\style.css
```css
rgin: 0;
}


/* ========================================
   COMING SOON TOAST NOTIFICATION
   ======================================== */

.coming-soon-toast {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background: var(--glass-bg-dark);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-lg);
    padding: var(--spacing-lg);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
    z-index: 10000;
    opacity: 0;
    transform: translateY(20px);
    transition: all 0.3s ease;
    max-width: 400px;
}
```


### src\css\style.css
```css
rgin: 0;
    font-size: 0.875rem;
    color: var(--text-secondary);
}

@media (max-width: 768px) {
    .coming-soon-toast {
        bottom: 1rem;
        right: 1rem;
        left: 1rem;
        max-width: none;
    }
```


### src\css\style.css
```css
========================================
   LIST VIEW FOR MINIMAL CARDS
   ======================================== */

.courses-grid.list-view .course-card-minimal {
    flex-direction: row;
    height: auto;
}
```


### src\css\style.css
```css
ourses-grid.list-view .course-image-container {
    width: 250px;
    min-width: 250px;
    height: auto;
    min-height: 200px;
}
```


### src\css\style.css
```css
text-align: left;
}

.courses-grid.list-view .start-learning-btn {
    width: auto;
    align-self: flex-start;
}
```


### src\css\style.css
```css
lex-direction: column;
    }

    .courses-grid.list-view .course-image-container {
        width: 100%;
        height: 180px;
    }
```


### src\css\style.css
```css
text-align: center;
    }

    .courses-grid.list-view .start-learning-btn {
        width: 100%;
    }
```


### src\css\style.css
```css
========================================
   AUTHENTICATION MODAL STYLES
   ======================================== */

/**
 * LOGIN MODAL OVERLAY
 * Full-screen overlay that appears behind the modal
 * Darkens the background and prevents interaction with page content
 */
.auth-modal-overlay {
    /* Positioning */
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10000;
    /* Above all other content */

    /* Appearance */
    background: rgba(0, 0, 0, 0.85);
    /* Dark semi-transparent background */
    backdrop-filter: blur(10px);
    /* Blur effect on background */
    -webkit-backdrop-filter: blur(10px);
    /* Safari support */

    /* Layout */
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing-lg);

    /* Animation */
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s var(--transition-timing);

    /* Prevent scrolling when modal is open */
    overflow-y: auto;
}
```


### src\css\style.css
```css
opacity: 1;
    visibility: visible;
}

/**
 * LOGIN MODAL CONTAINER
 * The actual modal box with glassmorphism effect
 */
.auth-modal {
    /* Sizing */
    width: 100%;
    max-width: 450px;

    /* Glassmorphism Effect */
    background: var(--glass-bg-dark);
    backdrop-filter: blur(var(--glass-blur));
    -webkit-backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-2xl);
    box-shadow: 0 20px 60px rgba(168, 85, 247, 0.3);

    /* Animation */
    transform: scale(0.9) translateY(20px);
    transition: all 0.3s var(--transition-timing);

    /* Prevent modal from closing when clicking inside */
    position: relative;
}
```


### src\css\style.css
```css
transform: scale(1) translateY(0);
}

/**
 * MODAL HEADER
 * Contains title and close button
 */
.auth-modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: var(--spacing-2xl) var(--spacing-2xl) var(--spacing-lg);
    border-bottom: 1px solid var(--glass-border);
}
```


### src\css\style.css
```css
ont-size: var(--heading-tertiary);
    font-weight: 700;
    background: linear-gradient(135deg, #a855f7, #4ecdc4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin: 0;
}

/**
 * CLOSE BUTTON
 * X button in top-right corner
 */
.auth-modal-close {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-md);
    color: var(--text-secondary);
    cursor: pointer;
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
background: rgba(255, 255, 255, 0.1);
    border-color: var(--glass-hover-border);
    color: var(--text-primary);
    transform: rotate(90deg);
}

.auth-modal-close svg {
    width: 20px;
    height: 20px;
}
```


### src\css\style.css
```css
ODAL BODY
 * Contains the login form
 */
.auth-modal-body {
    padding: var(--spacing-2xl);
}
```


### src\css\style.css
```css
ROLE ICON
 * User icon at top of form
 */
.auth-role-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto var(--spacing-xl);
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(78, 205, 196, 0.2));
    border: 2px solid var(--glass-border);
    border-radius: 50%;
    color: #a855f7;
}
```


### src\css\style.css
```css
uth-role-icon svg {
    width: 40px;
    height: 40px;
}
```


### src\css\style.css
```css
osition: relative;
    display: flex;
    align-items: center;
}

/**
 * INPUT ICON
 * Icon on left side of input
 */
.auth-input-icon {
    position: absolute;
    left: var(--spacing-md);
    width: 20px;
    height: 20px;
    color: var(--text-muted);
    pointer-events: none;
    z-index: 1;
}
```


### src\css\style.css
```css
NPUT FIELD
 */
.auth-input {
    width: 100%;
    padding: var(--spacing-md) var(--spacing-md) var(--spacing-md) 48px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-lg);
    color: var(--text-primary);
    font-size: var(--body-regular);
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
outline: none;
    background: rgba(255, 255, 255, 0.08);
    border-color: #a855f7;
    box-shadow: 0 0 0 3px rgba(168, 85, 247, 0.1);
}

/**
 * PASSWORD TOGGLE BUTTON
 * Eye icon to show/hide password
 */
.auth-password-toggle {
    position: absolute;
    right: var(--spacing-md);
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    transition: all 0.3s ease;
    border-radius: var(--border-radius-sm);
}
```


### src\css\style.css
```css
background: rgba(255, 255, 255, 0.05);
    color: var(--text-secondary);
}

.auth-password-toggle svg {
    width: 20px;
    height: 20px;
}
```


### src\css\style.css
```css
ERROR MESSAGE
 * Displayed when login fails
 */
.auth-error-message {
    display: flex;
    align-items: center;
    gap: var(--spacing-sm);
    padding: var(--spacing-md);
    background: rgba(239, 68, 68, 0.1);
    border: 1px solid rgba(239, 68, 68, 0.3);
    border-radius: var(--border-radius-md);
    color: #fca5a5;
    font-size: var(--body-small);
    animation: shake 0.5s ease;
}
```


### src\css\style.css
```css
uth-error-message svg {
    width: 20px;
    height: 20px;
    flex-shrink: 0;
}
```


### src\css\style.css
```css
transform: translateX(5px);
    }
}

/**
 * SUBMIT BUTTON
 */
.auth-submit-btn {
    width: 100%;
    padding: var(--spacing-md) var(--spacing-xl);
    background: linear-gradient(135deg, #8A2BE2, #4A00E0);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: var(--border-radius-lg);
    color: white;
    font-size: var(--body-regular);
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
}
```


### src\css\style.css
```css
uth-submit-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
}
```


### src\css\style.css
```css
lay: flex;
    align-items: center;
    justify-content: center;
    gap: var(--spacing-sm);
}

.auth-spinner {
    width: 20px;
    height: 20px;
    animation: spin 1s linear infinite;
}
```


### src\css\style.css
```css
olor: #a855f7;
}

/**
 * RESPONSIVE DESIGN
 */
@media (max-width: 768px) {
    .auth-modal {
        max-width: 90%;
        margin: var(--spacing-lg);
    }
```


### src\css\style.css
```css
uth-modal-header,
    .auth-modal-body {
        padding: var(--spacing-xl);
    }
```


### src\css\style.css
```css
ont-size: 1.5rem;
    }

    .auth-role-icon {
        width: 60px;
        height: 60px;
    }
```


### src\css\style.css
```css
uth-role-icon svg {
        width: 30px;
        height: 30px;
    }
```


### src\css\style.css
```css
edia (max-width: 480px) {
    .auth-modal-overlay {
        padding: var(--spacing-md);
    }
```


### src\css\style.css
```css
uth-modal-header,
    .auth-modal-body {
        padding: var(--spacing-lg);
    }
```


### src\css\style.css
```css
transform: translateX(400px);
        opacity: 0;
    }
}


/* ========================================
   GIRLS IN TECH & CERTIFICATION SECTIONS
   ======================================== */

/* Feature Card Container */
.feature-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
    background: var(--glass-bg-light);
    backdrop-filter: blur(var(--glass-blur));
    border: 1px solid var(--glass-border);
    border-radius: var(--border-radius-xl);
    padding: 3rem;
    box-shadow: var(--glass-shadow);
    transition: all var(--transition-speed) var(--transition-timing);
}
```


### src\css\style.css
```css
border-color: rgba(236, 72, 153, 0.5);
    box-shadow: 0 12px 40px rgba(236, 72, 153, 0.3);
}

/* Feature Visual */
.feature-visual {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    border-radius: var(--border-radius-lg);
    background: rgba(255, 255, 255, 0.02);
    border: 1px solid rgba(255, 255, 255, 0.05);
}
```


### src\css\style.css
```css
rls-visual svg {
    width: 100%;
    height: auto;
    max-width: 300px;
}
```


### src\css\style.css
```css
background: rgba(168, 85, 247, 0.05);
    border: 1px solid rgba(168, 85, 247, 0.2);
}

.certificate-visual img {
    width: 100%;
    height: auto;
    border-radius: var(--border-radius-md);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}
```


### src\css\style.css
```css
ont-size: 0.875rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--girls-empowerment-color);
    margin-bottom: 0.5rem;
}

.feature-text h3 {
    font-size: clamp(1.75rem, 3vw, 2.5rem);
    font-weight: 700;
    line-height: 1.2;
    color: var(--text-primary);
    margin-bottom: 1rem;
}
```


### src\css\style.css
```css
eature-text p {
    font-size: var(--body-regular);
    line-height: 1.7;
    color: var(--text-secondary);
    margin-bottom: 1rem;
}
```


### src\css\style.css
```css
lay: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1.5rem 0;
}

.highlight-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    background: rgba(236, 72, 153, 0.05);
    border: 1px solid rgba(236, 72, 153, 0.2);
    border-radius: var(--border-radius-md);
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
background: rgba(236, 72, 153, 0.1);
    border-color: rgba(236, 72, 153, 0.4);
    transform: translateX(5px);
}

.highlight-icon {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #EC4899, #A855F7);
    border-radius: 50%;
    color: white;
}
```


### src\css\style.css
```css
light-icon svg {
    width: 24px;
    height: 24px;
}
```


### src\css\style.css
```css
ont-size: var(--body-regular);
    color: var(--text-primary);
    font-weight: 500;
}

/* Certificate Features */
.certificate-features {
    list-style: none;
    padding: 0;
    margin: 1.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}
```


### src\css\style.css
```css
ertificate-features li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: var(--body-regular);
    color: var(--text-secondary);
    padding: 0.75rem;
    background: rgba(168, 85, 247, 0.05);
    border: 1px solid rgba(168, 85, 247, 0.2);
    border-radius: var(--border-radius-sm);
    transition: all 0.3s ease;
}
```


### src\css\style.css
```css
background: rgba(168, 85, 247, 0.1);
    border-color: rgba(168, 85, 247, 0.4);
    transform: translateX(5px);
}

.certificate-features li::before {
    content: '✓';
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    background: linear-gradient(135deg, #8A2BE2, #4A00E0);
    border-radius: 50%;
    color: white;
    font-weight: bold;
    flex-shrink: 0;
}
```


### src\css\style.css
```css
Responsive Design */
@media (max-width: 768px) {
    .feature-card {
        grid-template-columns: 1fr;
        gap: 2rem;
        padding: 2rem;
    }
```


### src\css\style.css
```css
order: -1;
    }

    .girls-visual svg {
        max-width: 250px;
    }
```


### src\css\style.css
```css
rem;
    }

    .highlight-item,
    .certificate-features li {
        padding: 0.75rem;
    }
```


### src\css\style.css
```css
edia (max-width: 480px) {
    .feature-card {
        padding: 1.5rem;
        gap: 1.5rem;
    }
```


### src\css\style.css
```css
ont-size: 1.5rem;
    }

    .highlight-icon {
        width: 32px;
        height: 32px;
    }
```


### src\css\style.css
```css
light-icon svg {
        width: 20px;
        height: 20px;
    }
```


### src\css\style.css
```css
ertificate-features li::before {
        width: 20px;
        height: 20px;
        font-size: 0.875rem;
    }
```


### src\css\testimonials-carousel.css
```css
ative;
    overflow: hidden;
}

.testimonials-carousel-container {
    position: relative;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 60px;
}
```


### src\css\testimonials-carousel.css
```css
als-carousel {
    overflow: hidden;
    width: 100%;
}
```


### src\css\testimonials-carousel.css
```css
ay: flex;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    gap: 30px;
}

.testimonial-card {
    flex: 0 0 calc(50% - 15px);
    min-width: calc(50% - 15px);
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 35px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}
```


### src\css\testimonials-carousel.css
```css
ansform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(168, 85, 247, 0.3);
    box-shadow: 0 8px 30px rgba(168, 85, 247, 0.2);
}

.testimonial-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;
}
```


### src\css\testimonials-carousel.css
```css
arent-avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid rgba(168, 85, 247, 0.5);
    box-shadow: 0 4px 15px rgba(168, 85, 247, 0.3);
}
```


### src\css\testimonials-carousel.css
```css
arent-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```


### src\css\testimonials-carousel.css
```css
al-content blockquote {
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.85);
    font-style: italic;
    flex-grow: 1;
}
```


### src\css\testimonials-carousel.css
```css
al-info {
    margin-top: auto;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}
```


### src\css\testimonials-carousel.css
```css
a(255, 255, 255, 0.6);
    margin: 0;
}

/* Carousel Arrows */
.carousel-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(168, 85, 247, 0.2);
    border: 2px solid rgba(168, 85, 247, 0.5);
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    z-index: 10;
    backdrop-filter: blur(10px);
}
```


### src\css\testimonials-carousel.css
```css
ansform: translateY(-50%) scale(0.95);
}

.carousel-arrow svg {
    width: 24px;
    height: 24px;
}
```


### src\css\testimonials-carousel.css
```css
ay: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 40px;
}

.carousel-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid rgba(255, 255, 255, 0.3);
    cursor: pointer;
    transition: all 0.3s ease;
}
```


### src\css\testimonials-carousel.css
```css
ackground: rgba(168, 85, 247, 0.5);
    border-color: rgba(168, 85, 247, 0.7);
}

.carousel-dot.active {
    background: rgba(168, 85, 247, 0.8);
    border-color: rgba(168, 85, 247, 1);
    width: 30px;
    border-radius: 6px;
}
```


### src\css\testimonials-carousel.css
```css
a (max-width: 1024px) {
    .testimonials-carousel-container {
        padding: 0 50px;
    }
```


### src\css\testimonials-carousel.css
```css
arousel-arrow {
        width: 45px;
        height: 45px;
    }
```


### src\css\testimonials-carousel.css
```css
arousel-arrow svg {
        width: 20px;
        height: 20px;
    }
```


### src\css\testimonials-carousel.css
```css
a (max-width: 768px) {
    .testimonials-carousel-container {
        padding: 0 45px;
    }
```


### src\css\testimonials-carousel.css
```css
ap: 20px;
    }
    
    .testimonial-card {
        flex: 0 0 100%;
        min-width: 100%;
        padding: 25px;
    }
```


### src\css\testimonials-carousel.css
```css
arousel-arrow {
        width: 40px;
        height: 40px;
    }
```


### src\css\testimonials-carousel.css
```css
arousel-arrow svg {
        width: 18px;
        height: 18px;
    }
```


### src\css\testimonials-carousel.css
```css
arent-avatar {
        width: 60px;
        height: 60px;
    }
```


### src\css\testimonials-carousel.css
```css
argin-top: 30px;
    }
    
    .carousel-dot {
        width: 10px;
        height: 10px;
    }
```


### src\css\testimonials-carousel.css
```css
arousel-dot.active {
        width: 25px;
    }
```


### src\css\testimonials-carousel.css
```css
a (max-width: 480px) {
    .testimonials-carousel-container {
        padding: 0 40px;
    }
```


### src\css\testimonials-carousel.css
```css
al-card {
        padding: 20px;
    }
```


### src\css\testimonials-carousel.css
```css
arousel-arrow {
        width: 36px;
        height: 36px;
    }
```


### src\css\testimonials-carousel.css
```css
arousel-arrow svg {
        width: 16px;
        height: 16px;
    }
```


### src\css\testimonials-carousel.css
```css
arent-avatar {
        width: 50px;
        height: 50px;
        border-width: 2px;
    }
```


### src\css\testimonials-carousel.css
```css
al-content blockquote {
        font-size: 14px;
        line-height: 1.6;
    }
```


### src\css\testimonials-carousel.css
```css
ap: 8px;
        margin-top: 25px;
    }
    
    .carousel-dot {
        width: 8px;
        height: 8px;
    }
```


### src\css\testimonials-carousel.css
```css
arousel-dot.active {
        width: 20px;
    }
```


### src\css\testimonials-carousel.css
```css
osition: relative;
    overflow: hidden;
}

.testimonials-carousel-container {
    position: relative;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 60px;
}
```


### src\css\testimonials-carousel.css
```css
testimonials-carousel {
    overflow: hidden;
    width: 100%;
}
```


### src\css\testimonials-carousel.css
```css
lay: flex;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
    gap: 30px;
}

.testimonial-card {
    flex: 0 0 calc(50% - 15px);
    min-width: calc(50% - 15px);
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 35px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}
```


### src\css\testimonials-carousel.css
```css
transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(168, 85, 247, 0.3);
    box-shadow: 0 8px 30px rgba(168, 85, 247, 0.2);
}

.testimonial-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
    height: 100%;
}
```


### src\css\testimonials-carousel.css
```css
rent-avatar {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid rgba(168, 85, 247, 0.5);
    box-shadow: 0 4px 15px rgba(168, 85, 247, 0.3);
}
```


### src\css\testimonials-carousel.css
```css
rent-avatar img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
```


### src\css\testimonials-carousel.css
```css
testimonial-content blockquote {
    margin: 0;
    padding: 0;
    font-size: 16px;
    line-height: 1.7;
    color: rgba(255, 255, 255, 0.85);
    font-style: italic;
    flex-grow: 1;
}
```


### src\css\testimonials-carousel.css
```css
testimonial-info {
    margin-top: auto;
    padding-top: 15px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
}
```


### src\css\testimonials-carousel.css
```css
ont-size: 14px;
    color: rgba(255, 255, 255, 0.6);
    margin: 0;
}

/* Carousel Arrows */
.carousel-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(168, 85, 247, 0.2);
    border: 2px solid rgba(168, 85, 247, 0.5);
    color: #fff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    z-index: 10;
    backdrop-filter: blur(10px);
}
```


### src\css\testimonials-carousel.css
```css
transform: translateY(-50%) scale(0.95);
}

.carousel-arrow svg {
    width: 24px;
    height: 24px;
}
```


### src\css\testimonials-carousel.css
```css
lay: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 40px;
}

.carousel-dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    border: 2px solid rgba(255, 255, 255, 0.3);
    cursor: pointer;
    transition: all 0.3s ease;
}
```


### src\css\testimonials-carousel.css
```css
background: rgba(168, 85, 247, 0.5);
    border-color: rgba(168, 85, 247, 0.7);
}

.carousel-dot.active {
    background: rgba(168, 85, 247, 0.8);
    border-color: rgba(168, 85, 247, 1);
    width: 30px;
    border-radius: 6px;
}
```


### src\css\testimonials-carousel.css
```css
obile Responsive Styles */
@media (max-width: 1024px) {
    .testimonials-carousel-container {
        padding: 0 50px;
    }
```


### src\css\testimonials-carousel.css
```css
rousel-arrow {
        width: 45px;
        height: 45px;
    }
```


### src\css\testimonials-carousel.css
```css
rousel-arrow svg {
        width: 20px;
        height: 20px;
    }
```


### src\css\testimonials-carousel.css
```css
edia (max-width: 768px) {
    .testimonials-carousel-container {
        padding: 0 45px;
    }
```


### src\css\testimonials-carousel.css
```css
testimonial-card {
        flex: 0 0 100%;
        min-width: 100%;
        padding: 25px;
    }
```


### src\css\testimonials-carousel.css
```css
rousel-arrow {
        width: 40px;
        height: 40px;
    }
```


### src\css\testimonials-carousel.css
```css
rousel-arrow svg {
        width: 18px;
        height: 18px;
    }
```


### src\css\testimonials-carousel.css
```css
rent-avatar {
        width: 60px;
        height: 60px;
    }
```


### src\css\testimonials-carousel.css
```css
rgin-top: 30px;
    }
    
    .carousel-dot {
        width: 10px;
        height: 10px;
    }
```


### src\css\testimonials-carousel.css
```css
rousel-dot.active {
        width: 25px;
    }
```


### src\css\testimonials-carousel.css
```css
edia (max-width: 480px) {
    .testimonials-carousel-container {
        padding: 0 40px;
    }
```


### src\css\testimonials-carousel.css
```css
testimonial-card {
        padding: 20px;
    }
```


### src\css\testimonials-carousel.css
```css
rousel-arrow {
        width: 36px;
        height: 36px;
    }
```


### src\css\testimonials-carousel.css
```css
rousel-arrow svg {
        width: 16px;
        height: 16px;
    }
```


### src\css\testimonials-carousel.css
```css
rent-avatar {
        width: 50px;
        height: 50px;
        border-width: 2px;
    }
```


### src\css\testimonials-carousel.css
```css
testimonial-content blockquote {
        font-size: 14px;
        line-height: 1.6;
    }
```


### src\css\testimonials-carousel.css
```css
rgin-top: 25px;
    }
    
    .carousel-dot {
        width: 8px;
        height: 8px;
    }
```


### src\css\testimonials-carousel.css
```css
rousel-dot.active {
        width: 20px;
    }
```


## Next Steps
1. Run the manual testing process above
2. Document any failing elements
3. Update CSS to fix elements smaller than 44x44px
4. Re-test to verify all elements pass
5. Update this report with final results

## Notes
- This analysis is based on static HTML/CSS analysis
- Actual measurements must be done in the browser
- Some elements may be styled dynamically via JavaScript
- Mobile viewport testing is essential for accurate measurements
