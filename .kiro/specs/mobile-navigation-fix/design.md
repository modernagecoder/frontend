# Design Document

## Overview

This design document outlines the technical approach to fix mobile navigation issues on the Modern Age Coders website. The solution focuses on correcting z-index layering problems that prevent the hamburger menu from being clickable, and improving the mobile layout of tab buttons to ensure they are easily accessible and not squeezed on smaller screens.

The fixes will be implemented entirely through CSS modifications to the existing `src/css/style.css` file, ensuring no JavaScript changes are required and maintaining backward compatibility with desktop views.

## Architecture

### Component Hierarchy

The navigation system consists of the following layered components (from highest to lowest z-index):

1. **Modal/Overlay Layer** (z-index: 10001+) - For any modal dialogs
2. **Dropdown Content** (z-index: 10000) - Navigation dropdowns
3. **Mobile Menu Button** (z-index: 9999) - Hamburger button
4. **Header/Navbar** (z-index: 9999) - Fixed header container
5. **Mobile Menu** (z-index: 9998) - Expanded mobile navigation
6. **Page Content** (z-index: 1 or auto) - Main content area
7. **Background Elements** (z-index: -1 to -3) - Canvas and decorative elements

### Current Issues Identified

1. **Z-Index Conflict**: The mobile menu button currently has `z-index: 1001` but may be rendered behind other elements due to stacking context issues
2. **Tab Button Squeeze**: Tab buttons use `min-width: 150px` on mobile but with padding and multiple buttons, they overflow and become cramped
3. **Touch Target Size**: Some interactive elements don't meet the 44x44px minimum touch target requirement

## Components and Interfaces

### 1. Mobile Menu Button Component

**Location**: `.mobile-menu-btn` class in `src/css/style.css`

**Current State**:
```css
.mobile-menu-btn {
    display: none;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1001;
}

@media (max-width: 768px) {
    .mobile-menu-btn {
        display: flex !important;
        flex-direction: column;
        justify-content: space-between;
        width: 32px;
        height: 24px;
        z-index: 9999;
    }
}
```

**Design Changes**:
- Increase button size to meet 44x44px touch target minimum
- Ensure consistent z-index of 10000 (above navbar)
- Add explicit positioning context
- Increase padding/clickable area

**Proposed CSS**:
```css
.mobile-menu-btn {
    display: none;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 10px; /* Increase clickable area */
    z-index: 10000; /* Above navbar */
    position: relative; /* Create stacking context */
    min-width: 44px;
    min-height: 44px;
    align-items: center;
    justify-content: center;
}

@media (max-width: 768px) {
    .mobile-menu-btn {
        display: flex !important;
        flex-direction: column;
        justify-content: center;
        gap: 5px;
        width: 44px; /* Increased from 32px */
        height: 44px; /* Increased from 24px */
        z-index: 10000;
    }
}
```

### 2. Header and Navbar Component

**Location**: `header` and `.navbar` classes

**Current State**:
```css
header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
}

.navbar {
    z-index: 9999;
}
```

**Design Changes**:
- Ensure header maintains proper z-index
- Verify no conflicting stacking contexts
- Ensure nav-container doesn't create new stacking context that blocks button

**Proposed CSS**:
```css
header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;
    width: 100%;
}

.navbar {
    z-index: 9999;
    position: relative; /* Explicit positioning */
}

.nav-container {
    position: relative; /* Ensure proper stacking */
    z-index: 1; /* Lower than mobile-menu-btn */
}
```

### 3. Tab Button Component

**Location**: `.tab-button` and `.tabs-container` classes

**Current State**:
```css
@media (max-width: 768px) {
    .tabs-container {
        overflow-x: auto;
        display: flex;
        flex-wrap: nowrap;
        gap: 0.5rem;
    }
    
    .tab-button {
        flex: 0 0 auto;
        min-width: 150px;
        padding: 1rem 1.5rem;
        font-size: 1rem;
    }
}
```

**Design Changes**:
- Reduce min-width to prevent squeezing
- Optimize padding for mobile
- Improve scrolling behavior
- Ensure adequate touch targets

**Proposed CSS**:
```css
@media (max-width: 768px) {
    .tabs-wrapper {
        margin-bottom: 3rem;
        padding: 0 1rem; /* Increased from 0.5rem */
    }

    .tabs-container {
        overflow-x: auto;
        overflow-y: hidden;
        padding: 0.75rem 0.5rem; /* Increased vertical padding */
        padding-bottom: 15px;
        display: flex;
        flex-wrap: nowrap;
        gap: 0.75rem; /* Increased from 0.5rem */
        -webkit-overflow-scrolling: touch;
        scroll-snap-type: x proximity;
        max-width: 100%;
        margin: 0 auto 2rem;
    }

    .tab-button {
        flex: 0 0 auto;
        min-width: 140px; /* Reduced from 150px */
        max-width: 180px;
        padding: 0.875rem 1.25rem; /* Optimized padding */
        font-size: 0.95rem; /* Slightly smaller */
        white-space: nowrap;
        scroll-snap-align: center;
        min-height: 44px; /* Ensure touch target */
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

@media (max-width: 480px) {
    .tab-button {
        min-width: 120px; /* Further reduced for small screens */
        padding: 0.75rem 1rem;
        font-size: 0.9rem;
    }
}
```

### 4. Mobile Navigation Menu

**Location**: `.nav-menu` class

**Design Changes**:
- Ensure proper z-index when expanded
- Verify touch targets for all links
- Ensure proper spacing

**Proposed CSS**:
```css
@media (max-width: 768px) {
    .nav-menu {
        position: fixed;
        top: 0;
        right: -100%;
        width: 80%;
        max-width: 400px;
        height: 100vh;
        background: rgba(10, 10, 20, 0.98);
        backdrop-filter: blur(20px);
        flex-direction: column;
        padding: 80px 20px 20px;
        transition: right 0.3s ease;
        z-index: 9998; /* Below mobile-menu-btn */
        overflow-y: auto;
    }

    .nav-menu.active {
        right: 0;
    }

    .nav-link {
        min-height: 44px; /* Touch target */
        padding: 1rem 1.25rem;
        display: flex;
        align-items: center;
    }
}
```

## Data Models

No data models are required for this CSS-only fix.

## Error Handling

### Potential Issues and Solutions

1. **Z-Index Stacking Context Conflicts**
   - **Issue**: Parent elements creating new stacking contexts
   - **Solution**: Explicitly set `position: relative` and appropriate z-index values on parent containers

2. **Touch Target Overlap**
   - **Issue**: Adjacent buttons too close together
   - **Solution**: Increase gap between elements and add adequate padding

3. **Horizontal Scroll Not Visible**
   - **Issue**: Users may not realize tabs are scrollable
   - **Solution**: Add visible scrollbar styling and scroll-snap behavior

4. **Browser Compatibility**
   - **Issue**: Older browsers may not support certain CSS properties
   - **Solution**: Include fallbacks and vendor prefixes where necessary

## Testing Strategy

### Manual Testing Checklist

1. **Mobile Menu Button Clickability**
   - [ ] Test on iPhone Safari (iOS 14+)
   - [ ] Test on Android Chrome (Android 10+)
   - [ ] Test on iPad Safari (tablet view)
   - [ ] Verify button responds to tap immediately
   - [ ] Verify button is visible and not obscured
   - [ ] Test with different screen orientations

2. **Tab Button Usability**
   - [ ] Test Kids/Teens/College/Girls tabs on mobile
   - [ ] Test Maths/Coding section tabs on mobile
   - [ ] Verify horizontal scrolling works smoothly
   - [ ] Verify no buttons are cut off or squeezed
   - [ ] Test on screens 320px, 375px, 414px, 768px wide
   - [ ] Verify touch targets are at least 44x44px

3. **Navigation Flow**
   - [ ] Test opening and closing mobile menu
   - [ ] Test dropdown menus within mobile nav
   - [ ] Verify page scrolling is prevented when menu is open
   - [ ] Test tapping outside menu to close
   - [ ] Verify smooth transitions and animations

4. **Cross-Browser Testing**
   - [ ] Chrome Mobile
   - [ ] Safari iOS
   - [ ] Firefox Mobile
   - [ ] Samsung Internet
   - [ ] Edge Mobile

### Responsive Breakpoints to Test

- 320px (iPhone SE)
- 375px (iPhone 12/13)
- 414px (iPhone 12 Pro Max)
- 768px (iPad portrait)
- 1024px (iPad landscape)

### Accessibility Testing

- [ ] Test with screen reader (VoiceOver/TalkBack)
- [ ] Verify keyboard navigation works
- [ ] Check color contrast ratios
- [ ] Verify focus indicators are visible
- [ ] Test with 200% zoom level

## Implementation Notes

1. All changes will be made to `src/css/style.css`
2. No JavaScript modifications required
3. Changes are backward compatible with desktop views
4. Use mobile-first approach with media queries
5. Maintain existing design aesthetic and color scheme
6. Preserve all existing animations and transitions
7. Test on real devices, not just browser dev tools
