# Google Map Setup Guide

## ✅ Map Added to Homepage

I've added a beautiful Google Map section at the bottom of your homepage (`src/pages/index.html`).

## 📍 How to Add Your Real Location

### Step 1: Get Your Google Maps Embed Code

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your business location: "Modern Age Coders" or your address
3. Click on your location marker
4. Click the **"Share"** button
5. Select the **"Embed a map"** tab
6. Choose your preferred size (I recommend "Large" - 800x600)
7. Click **"COPY HTML"**

### Step 2: Replace the Placeholder

1. Open `src/pages/index.html`
2. Find the map section (search for `<!-- ====== GOOGLE MAP SECTION ====== -->`)
3. Replace the entire `<iframe>` tag with your copied embed code
4. Make sure to keep these attributes:
   - `width="100%"`
   - `height="450"`
   - `style="border:0;"`
   - `title="Modern Age Coders Location"`

### Example:

Your embed code will look something like this:

```html
<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.9..." 
    width="100%" 
    height="450" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade"
    title="Modern Age Coders Location">
</iframe>
```

## 🎨 Current Design Features

- Beautiful purple gradient background
- Rounded corners with shadow
- Responsive design (works on all devices)
- "Find Us" heading with description
- Positioned at the bottom of the homepage before closing body tag

## 📱 Mobile Friendly

The map automatically adjusts to mobile screens and maintains good visibility.

## 🔧 Customization Options

If you want to change the map section styling, you can modify:
- Background gradient colors
- Section padding
- Map height
- Border radius
- Shadow effects

All styling is inline in the HTML for easy customization.

## ⚠️ Important Note

The current map has a placeholder embed URL. You MUST replace it with your actual Google Maps embed code for it to show your real location!
