---
title: "HTML Images and Media - img, video, audio, figure, alt text, lazy loading | Modern Age Coders"
description: "Learn HTML images with img tag, video and audio elements, figure and figcaption, alt text for accessibility, and lazy loading. 57 hands-on practice questions."
slug: images-and-media
canonical: https://learn.modernagecoders.com/resources/html-and-css/images-and-media/
category: "HTML and CSS"
keywords: ["html images", "img tag", "alt text", "html video", "html audio", "figure figcaption", "lazy loading", "responsive images", "source tag", "poster attribute"]
---
# Images and Media - Bringing Your Pages to Life

**Difficulty:** Beginner  
**Reading time:** 22 min  
**Chapter:** 5  
**Practice questions:** 57

## What Are Images and Media in HTML?

A web page with only text is boring. Images, videos, and audio are what make web pages come alive. A beautiful photograph, an instructional video, or a background music clip — all of these are added using HTML media tags.

HTML gives you a handful of powerful tags to add media to your pages:

- `` — for images
- `` — for video files
- `` — for music and sound
- `` and `` — for images with captions
- `` — for providing multiple formats to the browser

All of these are self-closing or specialised tags that let your page show pictures and play media without needing any JavaScript.

## Why Add Media to Your Pages?

### 1. Humans Love Visuals

Our brains process images 60,000 times faster than text. A single well-chosen photo can communicate more than a whole paragraph of words. When building a recipe page, a product page, or a blog — images make content instantly understandable and engaging.

### 2. Accessibility Through Alt Text

Every image should have alt text (alternative text) — a short description that screen readers read aloud for blind users. Alt text also appears if the image fails to load. Good alt text makes your website work for everyone.

### 3. SEO Benefits

Google cannot 'see' images directly — it reads alt text to understand what an image is about. Pages with descriptive alt text rank higher in image search results. So good alt text means more visitors.

### 4. Native Video and Audio

Before HTML5 (2014), you needed Flash plugins to play videos. Now, `` and `` are built right into HTML. Any modern browser can play media without installing anything.

### 5. Creative Freedom

Once you know image and media tags, you can build photo galleries, recipe sites with step images, music players, video tutorials, and so much more. Your pages stop looking like text documents and start looking like real websites.

## Detailed Explanation

### The img Tag

The `` tag is self-closing (no closing tag). It has two essential attributes:

- `src` — the source (URL or path to the image file)
- `alt` — alternative text describing the image

```

```

The src can be a relative path (`cat.jpg`, `images/cat.jpg`) or a full URL (`https://example.com/cat.jpg`).

### Why alt Text Is Required

The `alt` attribute is not optional — it is essential. Here is why:

1. **Accessibility:** Screen readers announce the alt text to blind users
2. **SEO:** Google uses it to understand what your image shows
3. **Fallback:** If the image fails to load (slow connection, broken URL), the browser shows the alt text instead

Good alt text describes what the image shows, not just 'image' or 'picture'. For decorative images with no meaning, use `alt=""` (empty string) — this tells screen readers to skip it.

### Width and Height Attributes

You can set the dimensions of an image with `width` and `height` attributes (in pixels):

```

```

Always set these attributes — they tell the browser how much space to reserve for the image before it loads, which prevents the page layout from jumping around.

### figure and figcaption

When an image needs a caption, wrap it in a `` element with a ``:

```

  
  The Eiffel Tower in Paris, built in 1889.

```

This is the semantic way to associate a caption with an image. Screen readers understand the relationship.

### The video Tag

The `` tag plays video files. Basic syntax:

```

  Your browser does not support video.

```

Common attributes:

- `src` — path to the video file
- `controls` — shows play/pause/volume controls
- `width` and `height` — video player size
- `autoplay` — starts playing automatically (use carefully)
- `muted` — starts muted (required for autoplay in most browsers)
- `loop` — replays when finished
- `poster` — image shown before the video plays
- `preload` — how much to preload (none/metadata/auto)

The text inside the `` tag is shown if the browser cannot play video (very old browsers).

### The source Tag for Multiple Formats

Different browsers support different video formats. To be safe, provide multiple formats using `` tags inside ``:

```

  
  
  Your browser does not support video.

```

The browser picks the first format it can play. MP4 works almost everywhere, so it should usually be listed first.

### The audio Tag

The `` tag works similarly to video. It plays sound files:

```

  Your browser does not support audio.

```

It has the same attributes as video: `controls`, `autoplay`, `muted`, `loop`, and can also use `` tags for multiple formats.

### Responsive Images with srcset

Modern phones have different screen densities. A 'retina' display needs bigger images than a regular monitor. The `srcset` attribute lets you provide multiple sizes:

```

```

The browser automatically picks the best size based on the user's screen.

### Lazy Loading

By default, browsers load all images on a page immediately. This can slow down pages with many images. The `loading="lazy"` attribute tells the browser to wait until an image is about to scroll into view:

```

```

This makes pages much faster, especially for image galleries. Use `loading="lazy"` for images below the fold (not visible when the page first loads).

### Where to Get Free Images

For practice and projects, use free image sites that allow commercial use:

- **Unsplash** (unsplash.com) — high-quality photos
- **Pexels** (pexels.com) — free photos and videos
- **Pixabay** (pixabay.com) — photos, illustrations, and videos
- **placeholder.com** or **via.placeholder.com** — placeholder images while developing

Never steal images from random websites — many are copyrighted. Always use images you have permission to use.

## Code Examples

### Basic Image With Alt Text

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First Image</title>
</head>
<body>
  <h1>My Pet</h1>
  <p>Meet Buddy, my golden retriever.</p>
  <img src="https://via.placeholder.com/400x300" alt="A golden retriever dog sitting on grass" width="400" height="300">
  <p>He loves playing fetch and going for walks.</p>
</body>
</html>
```

A basic image with all the essential attributes: `src` for the image URL, `alt` for the description (critical for accessibility and SEO), and `width`/`height` to reserve space on the page before the image loads. The placeholder URL shows a blank 400x300 rectangle — replace it with your real image path.

**Output:**

```
A page with a heading 'My Pet', a paragraph, a 400x300 image, and another paragraph.
```

### Figure With Caption

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Famous Landmarks</title>
</head>
<body>
  <h1>Famous Indian Landmarks</h1>
  <figure>
    <img src="https://via.placeholder.com/500x300" alt="Taj Mahal, white marble monument" width="500" height="300">
    <figcaption>The Taj Mahal in Agra, built by Shah Jahan in memory of his wife.</figcaption>
  </figure>
  <figure>
    <img src="https://via.placeholder.com/500x300" alt="India Gate at night with lights" width="500" height="300">
    <figcaption>India Gate in New Delhi, a war memorial for Indian soldiers.</figcaption>
  </figure>
</body>
</html>
```

The `` element groups an image with its caption. The `` is the caption text — it can be above or below the image. This is the semantic way to add captions to images. Screen readers understand the relationship between the image and caption.

**Output:**

```
A page with two image figures, each with a caption below it describing a famous Indian landmark.
```

### Image Gallery

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Photo Gallery</title>
</head>
<body>
  <h1>Priya's Photo Gallery</h1>
  <h2>Recent Photos</h2>

  <figure>
    <img src="https://via.placeholder.com/300x200" alt="Sunrise over the mountains" width="300" height="200" loading="lazy">
    <figcaption>Sunrise at Manali</figcaption>
  </figure>

  <figure>
    <img src="https://via.placeholder.com/300x200" alt="Waves crashing on a beach" width="300" height="200" loading="lazy">
    <figcaption>Goa Beach</figcaption>
  </figure>

  <figure>
    <img src="https://via.placeholder.com/300x200" alt="A plate of biryani" width="300" height="200" loading="lazy">
    <figcaption>Hyderabadi Biryani</figcaption>
  </figure>

  <figure>
    <img src="https://via.placeholder.com/300x200" alt="Colourful rangoli design" width="300" height="200" loading="lazy">
    <figcaption>Diwali Rangoli</figcaption>
  </figure>
</body>
</html>
```

A simple gallery with four images, each in its own figure with a caption. All images use `loading="lazy"` so they only load when scrolled into view — this makes the page load much faster. Every image has descriptive alt text for accessibility.

**Output:**

```
A photo gallery page with four figures, each showing an image and a caption.
```

### Video Player With Poster and Controls

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Video Example</title>
</head>
<body>
  <h1>Watch My Video</h1>
  <video width="600" controls poster="https://via.placeholder.com/600x400">
    <source src="my-video.mp4" type="video/mp4">
    <source src="my-video.webm" type="video/webm">
    Your browser does not support the video tag.
  </video>
  <p>This video shows highlights from my school trip.</p>
</body>
</html>
```

A video player with several best practices: `controls` shows play/pause/volume buttons. `poster` is the preview image shown before the video plays. Two `` tags provide MP4 and WebM formats — the browser picks whichever it supports. The text inside is fallback for very old browsers.

**Output:**

```
A video player with a preview image that shows controls when hovered. Click play to watch the video.
```

### Audio Player

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Audio Example</title>
</head>
<body>
  <h1>Rohan's Favourite Song</h1>
  <p>Click play to listen:</p>
  <audio controls>
    <source src="song.mp3" type="audio/mpeg">
    <source src="song.ogg" type="audio/ogg">
    Your browser does not support the audio element.
  </audio>
  <p>Title: 'My Melody'<br>Artist: The Code Band</p>
</body>
</html>
```

A simple audio player. The `controls` attribute shows the play button, time slider, and volume control. Multiple `` tags provide MP3 and OGG formats for maximum browser support. MP3 is universal, while OGG is an open format supported by Firefox and Chrome.

**Output:**

```
An audio player with play/pause controls and time slider, ready to play the song.
```

### Autoplay Muted Looping Video

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Background Video</title>
</head>
<body>
  <h1>Hero Section</h1>
  <video width="800" autoplay muted loop playsinline>
    <source src="background.mp4" type="video/mp4">
    Your browser does not support video.
  </video>
  <p>This is how modern websites add looping background videos.</p>
</body>
</html>
```

This is how websites add hero-section background videos. `autoplay` starts the video automatically. `muted` is required for autoplay in most browsers (they block autoplay with sound). `loop` replays the video forever. `playsinline` prevents mobile devices from opening it fullscreen. Use this sparingly — autoplaying videos can be annoying.

**Output:**

```
A video that plays automatically without sound and loops forever, perfect for a website hero section.
```

## Common Mistakes

### Missing alt Attribute

**Wrong:**

```
<img src="cat.jpg">
```

Bad for accessibility and SEO. Screen readers will not describe the image, and the HTML is invalid.

**Correct:**

```
<img src="cat.jpg" alt="An orange tabby cat sitting on a windowsill">
```

Every `` must have an `alt` attribute. For decorative images with no meaning, use `alt=""` (empty string). For meaningful images, describe what they show in a few words.

### Wrong Image Path

**Wrong:**

```
<img src="C:\Users\Priya\Desktop\cat.jpg" alt="Cat">
```

The image works on Priya's computer but breaks when the website is uploaded to a server.

**Correct:**

```
<img src="images/cat.jpg" alt="Cat">
```

Never use absolute file paths from your computer (like C:\ on Windows). Use relative paths that work on any server. Put your images in a folder inside your project, like `images/` or `assets/`, and link using `images/cat.jpg`.

### Forgetting the controls Attribute on Video

**Wrong:**

```
<video src="movie.mp4" width="600"></video>
```

The video shows but there are no play/pause buttons — users cannot control it.

**Correct:**

```
<video src="movie.mp4" width="600" controls></video>
```

Without the `controls` attribute, the video has no visible interface. Add `controls` so users can play, pause, and adjust volume. For background videos, omit controls but add `autoplay muted loop`.

### Autoplay Video Without muted

**Wrong:**

```
<video src="movie.mp4" autoplay></video>
```

Modern browsers block autoplay videos that have sound — the video does not play at all.

**Correct:**

```
<video src="movie.mp4" autoplay muted></video>
```

Browsers now require `muted` for `autoplay` to work, to stop annoying websites from blasting sound. If you want autoplay, add muted as well. Users can then manually unmute if they want.

### Using Full Computer Path Instead of URL

**Wrong:**

```
<img src="file:///C:/photos/cat.jpg" alt="Cat">
```

The image does not load for other users because they do not have that file.

**Correct:**

```
<img src="https://example.com/photos/cat.jpg" alt="Cat">
<!-- Or a relative path: -->
<img src="photos/cat.jpg" alt="Cat">
```

Never use `file:///` URLs — they only work on your own computer. Either upload the image to a web server and use its URL, or keep it in your project folder and use a relative path.

## Summary

- The  tag displays images. It is self-closing and requires both src (image source) and alt (description).
- Alt text is essential — it describes the image for screen readers, appears when the image fails to load, and helps SEO.
- Always set width and height attributes on images to prevent the page layout from jumping around while images load.
- Wrap images with captions in  and use  for the caption text. This is the semantic way to add captions.
- The  tag plays video files. Use the controls attribute to show play/pause buttons and poster to set a preview image.
- The  tag plays sound files. It has the same controls, autoplay, muted, and loop attributes as video.
- Use  tags inside  and  to provide multiple formats — the browser picks the first one it supports.
- For autoplay to work in modern browsers, you must also add the muted attribute. Otherwise browsers block autoplay.
- Use loading="lazy" on images below the fold to make your page load faster — images load only when about to scroll into view.
- Get free images from Unsplash, Pexels, or Pixabay. Never steal copyrighted images from random websites.
- Use relative paths like 'images/cat.jpg' for files in your project, or full URLs starting with https:// for external images.

## Related Topics

- undefined
- undefined

---

*Source: https://learn.modernagecoders.com/resources/html-and-css/images-and-media/*
*Practice questions: https://learn.modernagecoders.com/resources/html-and-css/images-and-media/practice/*
