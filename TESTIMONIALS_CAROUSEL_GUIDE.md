# Testimonials Carousel - Implementation Guide

## Overview
A beautiful, responsive testimonials carousel that displays 2 testimonials at a time on desktop and 1 on mobile, with smooth navigation arrows and auto-play functionality.

## Features

### ✨ Core Features
- **Responsive Design**: Shows 2 cards on desktop/tablet, 1 card on mobile
- **Navigation Arrows**: Left/right arrows for manual navigation
- **Dot Indicators**: Visual indicators showing current position
- **Auto-play**: Automatically cycles through testimonials every 5 seconds
- **Touch Support**: Swipe gestures on mobile devices
- **Keyboard Navigation**: Arrow keys for accessibility
- **Smooth Animations**: CSS transitions for professional feel
- **Hover Effects**: Pauses auto-play when hovering over carousel

### 📱 Mobile Optimizations
- Single card view on screens < 768px
- Touch-friendly swipe gestures
- Optimized button sizes for touch
- Smooth scrolling with momentum
- Responsive spacing and typography

### 🎨 Visual Features
- Gradient borders on hover
- Smooth card transitions
- Animated dots indicator
- Glassmorphism effects on arrows
- Purple accent colors matching site theme

## Files Added

1. **src/css/testimonials-carousel.css**
   - All carousel styling
   - Responsive breakpoints
   - Animation definitions
   - Mobile optimizations

2. **src/js/testimonials-carousel.js**
   - Carousel logic and functionality
   - Touch/swipe support
   - Auto-play management
   - Keyboard navigation
   - Responsive behavior

3. **Updated src/pages/index.html**
   - New carousel HTML structure
   - Added 3 more testimonials (total 6)
   - Linked CSS and JS files

## How It Works

### Desktop (≥768px)
- Displays 2 testimonial cards side by side
- Navigation arrows on left and right
- Dots show 3 pages (6 cards ÷ 2 per view = 3 pages)
- Auto-advances every 5 seconds

### Mobile (<768px)
- Displays 1 testimonial card at a time
- Navigation arrows remain visible
- Dots show 6 pages (6 cards ÷ 1 per view = 6 pages)
- Swipe left/right to navigate
- Auto-advances every 5 seconds

## User Interactions

1. **Arrow Clicks**: Navigate to previous/next slide
2. **Dot Clicks**: Jump directly to specific slide
3. **Keyboard**: Use ← → arrow keys to navigate
4. **Touch Swipe**: Swipe left/right on mobile
5. **Hover**: Pauses auto-play when hovering over carousel
6. **Auto-play**: Resumes when mouse leaves carousel area

## Customization

### Change Auto-play Speed
In `src/js/testimonials-carousel.js`, modify:
```javascript
this.autoplayDelay = 5000; // Change to desired milliseconds
```

### Change Cards Per View
In `getCardsPerView()` method:
```javascript
getCardsPerView() {
    const width = window.innerWidth;
    if (width < 768) return 1;  // Mobile
    if (width < 1024) return 2; // Tablet (optional)
    return 2; // Desktop
}
```

### Add More Testimonials
Simply add more `.testimonial-card` divs inside `.testimonials-track` in the HTML.

### Change Colors
In `src/css/testimonials-carousel.css`, update:
- `rgba(168, 85, 247, ...)` - Purple accent color
- Border colors, backgrounds, etc.

## Browser Support
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ✅ Touch devices
- ✅ Keyboard navigation

## Accessibility
- ARIA labels on navigation buttons
- Keyboard navigation support
- Focus indicators
- Semantic HTML structure
- Screen reader friendly

## Performance
- CSS transforms for smooth animations
- Debounced resize handler
- Passive touch event listeners
- Minimal DOM manipulation
- Hardware-accelerated animations

## Testing Checklist
- [ ] Desktop view shows 2 cards
- [ ] Mobile view shows 1 card
- [ ] Left/right arrows work
- [ ] Dots navigation works
- [ ] Auto-play advances slides
- [ ] Hover pauses auto-play
- [ ] Touch swipe works on mobile
- [ ] Keyboard arrows work
- [ ] Responsive on window resize
- [ ] Smooth animations
- [ ] No layout shifts

## Troubleshooting

**Carousel not showing:**
- Check if CSS file is loaded
- Verify JS file is loaded after DOM
- Check browser console for errors

**Arrows not working:**
- Ensure JS file is loaded
- Check for JavaScript errors
- Verify event listeners are attached

**Mobile swipe not working:**
- Check touch event listeners
- Verify passive event listeners
- Test on actual mobile device

**Auto-play not working:**
- Check autoplayDelay value
- Verify startAutoplay() is called
- Check if hover is pausing it

## Future Enhancements (Optional)
- [ ] Add fade transition option
- [ ] Add vertical carousel option
- [ ] Add lazy loading for images
- [ ] Add video testimonials support
- [ ] Add social media integration
- [ ] Add testimonial filtering
- [ ] Add infinite loop cloning for seamless transitions
