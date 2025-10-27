# Certificate Carousel Guide

## Overview
The certificate section now features a smooth carousel with left and right navigation arrows. The carousel works seamlessly on both desktop and mobile devices.

## Features
- ✅ Small, elegant navigation arrows on both sides
- ✅ Smooth transitions with cubic-bezier easing
- ✅ Touch/swipe support for mobile devices
- ✅ Keyboard navigation (arrow keys)
- ✅ Responsive design for all screen sizes
- ✅ Hover effects on arrows
- ✅ No additional UI elements (no dots, no names)

## How to Add More Certificates

### Step 1: Add Certificate Images
Place your certificate images in the `public/images/` folder with descriptive names:
- `certificate-student1.png`
- `certificate-student2.png`
- etc.

### Step 2: Update HTML
Edit `src/pages/index.html` and find the certificate section (around line 997). Add more `<img>` tags inside the `.certificate-track` div:

```html
<div class="certificate-track">
    <img src="public/images/somraj-certificate.png" alt="Certificate 1" class="certificate-image">
    <img src="public/images/certificate-student2.png" alt="Certificate 2" class="certificate-image">
    <img src="public/images/certificate-student3.png" alt="Certificate 3" class="certificate-image">
</div>
```

### Step 3: Test
The carousel will automatically detect all images and enable navigation. No JavaScript changes needed!

## Technical Details

### Files Modified/Created
1. **src/pages/index.html** - Updated certificate section with carousel structure
2. **src/css/certificate-carousel.css** - Carousel styling (NEW)
3. **src/js/certificate-carousel.js** - Carousel functionality (NEW)

### Arrow Sizes
- Desktop: 36px × 36px
- Tablet: 32px × 32px
- Mobile: 28px × 28px

### Navigation Methods
1. Click left/right arrows
2. Swipe left/right on mobile
3. Use keyboard arrow keys (← →)

## Customization

### Change Arrow Size
Edit `src/css/certificate-carousel.css`:
```css
.certificate-arrow {
    width: 40px;  /* Change this */
    height: 40px; /* Change this */
}
```

### Change Transition Speed
Edit `src/css/certificate-carousel.css`:
```css
.certificate-track {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1); /* Change 0.5s */
}
```

### Change Arrow Colors
Edit `src/css/certificate-carousel.css`:
```css
.certificate-arrow {
    background: rgba(255, 255, 255, 0.1); /* Arrow background */
    border: 1px solid rgba(255, 255, 255, 0.2); /* Arrow border */
}

.certificate-arrow svg {
    color: rgba(255, 255, 255, 0.9); /* Arrow icon color */
}
```

## Browser Support
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## Notes
- The carousel loops infinitely (after the last image, it goes back to the first)
- Touch gestures require a minimum swipe distance of 50px to trigger navigation
- All transitions use hardware acceleration for smooth performance
