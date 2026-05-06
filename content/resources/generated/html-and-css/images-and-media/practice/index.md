---
title: "Practice: Images and Media - Bringing Your Pages to Life"
description: "57 practice problems for Images and Media - Bringing Your Pages to Life in HTML and CSS"
slug: images-and-media-practice
canonical: https://learn.modernagecoders.com/resources/html-and-css/images-and-media/practice
category: "HTML and CSS"
---
# Practice: Images and Media - Bringing Your Pages to Life

**Total questions:** 57

## Topic-Specific Questions

### Q1. [Easy] What does this HTML display?

```

```

*Hint:* It is an image tag.

**Answer:** An image from 'cat.jpg' with the alt text 'A cat' shown if the image fails to load.

The `` tag displays an image. The `src` attribute is the image source and `alt` is the alternative text for accessibility.

### Q2. [Easy] Write HTML for an image called 'sunset.jpg' with alt text 'A beautiful orange sunset at the beach'.

*Hint:* Use  with src and alt.

**Answer:** ```

```

Every image needs `src` for the file and `alt` for the description. Good alt text describes what the image shows.

### Q3. [Easy] This image has an accessibility problem. Fix it:

```

```

*Hint:* Screen readers need help.

**Answer:** ```

```

The `alt` attribute is missing. Screen readers cannot describe the image to blind users without alt text. Always include a meaningful description.

### Q4. [Easy] What does the alt attribute do?

*Hint:* It has multiple purposes.

**Answer:** It provides alternative text that is shown if the image fails to load, read by screen readers for accessibility, and used by search engines.

Alt text serves three purposes: accessibility (screen readers), fallback (if image fails), and SEO (search engines understand the image content).

### Q5. [Easy] Write HTML for an image that is 500 pixels wide and 300 pixels tall.

*Hint:* Use width and height attributes.

**Answer:** ```

```

Setting `width` and `height` reserves space on the page for the image before it loads, preventing layout shifts.

### Q6. [Easy] What is wrong with this img tag?

```

```

*Hint:* Check the attribute name carefully.

**Answer:** ```

```

The attribute is `src`, not `scr`. This is a very common typo. The image will not load with the wrong attribute name.

### Q7. [Easy] What does this render?

```

  
  A Bengal tiger in the jungle

```

*Hint:* figure groups an image with its caption.

**Answer:** An image of a tiger with a caption 'A Bengal tiger in the jungle' shown below (or sometimes above) it.

The `` element groups an image and its ``. The caption is semantically associated with the image.

### Q8. [Easy] Write HTML for a video with controls and a width of 500 pixels.

*Hint:* Use  with src, controls, and width.

**Answer:** ```

  Your browser does not support video.

```

The `controls` attribute shows play/pause buttons. `width` sets the player width in pixels. The text inside is fallback for old browsers.

### Q9. [Easy] What does the controls attribute do on a video tag?

*Hint:* It is about the user interface.

**Answer:** It shows the built-in video player controls: play/pause button, time slider, volume control, and fullscreen button.

Without `controls`, the video has no visible buttons. Users cannot play, pause, or control it (unless you add custom JavaScript controls).

### Q10. [Easy] Fix this audio tag so users can play it:

```

```

*Hint:* Something is needed for the user to interact.

**Answer:** ```

```

Without `controls`, the audio element has no visible interface. Users cannot play it. Add `controls` to show the built-in player.

### Q11. [Easy] Write an HTML image tag that uses lazy loading.

*Hint:* Use loading="lazy".

**Answer:** ```

```

The `loading="lazy"` attribute tells the browser to delay loading the image until it is about to scroll into view. This makes pages faster.

### Q12. [Medium] What does the poster attribute do on a video?

*Hint:* It is about what users see before clicking play.

**Answer:** It sets the image shown before the video plays. Like a thumbnail or preview image.

`poster="image.jpg"` displays that image where the video will play until the user clicks play. It is like a movie poster for your video.

### Q13. [Medium] This autoplay video does not play. Fix it:

```

```

*Hint:* Modern browsers need one more attribute for autoplay.

**Answer:** ```

```

Modern browsers block autoplay videos with sound. Add `muted` along with `autoplay` so the browser allows it to play automatically.

### Q14. [Medium] Add a video with a poster image 'thumbnail.jpg' and controls, with the video source 'tutorial.mp4'.

*Hint:* Combine video, source, controls, and poster.

**Answer:** ```

  
  Your browser does not support video.

```

The `poster` attribute shows 'thumbnail.jpg' before the video plays. `controls` gives the user play/pause buttons. The source tag specifies the video file and its type.

### Q15. [Medium] Why use multiple  tags inside a video?

*Hint:* Different browsers support different formats.

**Answer:** Different browsers support different video formats. Providing multiple sources (like MP4 and WebM) ensures the browser can find one it supports.

Browsers try each `` in order and use the first format they support. MP4 is almost universal, but WebM is sometimes preferred. Providing both is a safety net.

### Q16. [Medium] Why will this image not load?

```

```

*Hint:* The path is specific to Rohan's computer.

**Answer:** Use a relative path or URL: 

```

<!-- Or -->

```

Absolute file paths from your computer only work on that computer. When you upload the website, the path breaks. Always use relative paths or web URLs.

### Q17. [Medium] Write HTML for a gallery of 4 images with captions using figure and figcaption.

*Hint:* Four figure elements, each with an img and figcaption.

**Answer:** ```

  
  Caption for photo 1

  
  Caption for photo 2

  
  Caption for photo 3

  
  Caption for photo 4

```

Each image gets its own figure with a figcaption. This is the semantic way to build image galleries where each image has a caption.

### Q18. [Medium] What does loading="lazy" do?

*Hint:* It is about performance.

**Answer:** It delays loading the image until the user is about to scroll it into view, making the initial page load faster.

Lazy loading improves performance. Instead of loading all images at once, the browser only loads each image when it is needed. This is especially useful for long pages with many images.

### Q19. [Medium] This video has no sound and users want to hear it. What is wrong?

```

```

*Hint:* Look at all the attributes.

**Answer:** Remove `muted` if you want sound. But then `autoplay` may not work. Either remove muted and accept that the user must click play, or keep muted for autoplay and let users unmute.

The `muted` attribute forces the video to start without sound. If you want sound, remove it — but know that browsers will then block autoplay. It is a tradeoff.

### Q20. [Medium] Write an audio player with two source formats: 'song.mp3' and 'song.ogg', with controls.

*Hint:* audio tag with two source tags.

**Answer:** ```

  
  
  Your browser does not support audio.

```

Multiple audio formats ensure compatibility. MP3 works everywhere, OGG is supported by Firefox and Chrome. The browser picks the first one it can play.

### Q21. [Hard] What does the empty alt attribute mean: alt=""?

*Hint:* It is not a mistake.

**Answer:** An empty alt (alt="") tells screen readers that the image is decorative and should be skipped. It is valid and sometimes correct.

For purely decorative images (like dividers, background patterns), use `alt=""`. This tells screen readers the image has no meaningful content. Never just omit alt — always include it, even if empty.

### Q22. [Hard] This image is 4000 pixels wide but the page shows it as 500px. Fix it properly:

```

```

*Hint:* Using CSS to shrink a huge image wastes bandwidth.

**Answer:** Resize the actual image file to 500px first (using an image editor), then: 

```

```

Using CSS to shrink a huge image still downloads the full 4000px file, wasting bandwidth and slowing the page. Resize the source image file first, then use proper width/height attributes.

### Q23. [Hard] Add a video with a poster and controls that uses lazy loading — use attributes: width 600, controls, poster 'thumb.jpg', preload metadata.

*Hint:* Video does not have loading="lazy" directly, but has preload attribute.

**Answer:** ```

  

```

For videos, use `preload="metadata"` to load only the video's duration and dimensions initially, not the whole file. The poster shows as a preview. This achieves similar savings to lazy loading.

### Q24. [Hard] Ananya wants her image to be centered on the page but it is aligned left. Fix the HTML (not using CSS):

```

```

*Hint:* HTML alone cannot center easily, but you can wrap in a block element.

**Answer:** ```

  

<!-- Or better: use CSS externally -->
```

HTML alone does not have a 'center' attribute anymore (it was removed). You need CSS to center images. The cleanest way is to use CSS in a stylesheet, but inline style on a wrapper element works too.

### Q25. [Hard] Write a complete HTML page with a heading, an intro paragraph, a figure with an image and caption, a video player with poster, and an audio player. Use proper semantics and lazy loading where appropriate.

*Hint:* Combine figure, video, audio all in a complete page.

**Answer:** ```
<!DOCTYPE html>

  
  Media Showcase

  My Media Showcase
  This page demonstrates HTML images, video, and audio.

  
    
    A photo from my recent trip
  

  Watch My Video
  
    
    Your browser does not support video.
  

  Listen to My Song
  
    
    Your browser does not support audio.
  

```

This page showcases all three media tags: figure with image, video with poster, and audio player. The image uses lazy loading and proper alt text. The video has a preview poster and controls. The audio has fallback text for old browsers.

## Mixed Questions

### Q1. [Easy] What attribute is required on every img tag?

*Hint:* For accessibility.

**Answer:** The `alt` attribute (for accessibility and fallback).

Every image must have alt text — either describing the image or empty (alt="") for decorative images.

### Q2. [Easy] Write HTML for an image 'logo.png' with alt 'Company Logo', width 200, height 100.

*Hint:* Include all three attributes.

**Answer:** ```

```

Setting width and height helps the browser reserve space for the image before it loads, preventing layout jumps.

### Q3. [Easy] What is wrong?

```

```

*Hint:* img has specific rules about attributes and closing.

**Answer:** The img tag is missing src and alt, and also has an unnecessary closing tag. Correct: ``

The img tag is self-closing — no `` needed. It also requires src (source) and alt (description).

### Q4. [Easy] What tag is used for sound files?

*Hint:* Not video.

**Answer:** The `` tag.

`` plays sound files like MP3, WAV, and OGG. It works similarly to the video tag.

### Q5. [Easy] Write HTML for a figure with an image 'beach.jpg' (alt 'Sandy beach') and caption 'Visit Goa'.

*Hint:* Use figure and figcaption.

**Answer:** ```

  
  Visit Goa

```

figure groups an image with its caption. figcaption provides the caption text below (or above) the image.

### Q6. [Medium] What is the difference between  and ?

*Hint:* Both show the image but behave differently for some users.

**Answer:** Both show the image, but only the second has alt text, which is essential for screen readers, search engines, and fallback display if the image fails to load.

Without alt, the image is invisible to blind users and search engines cannot understand it. Always include alt text.

### Q7. [Medium] Write HTML for a video that autoplays, loops, and has no sound (background video).

*Hint:* autoplay + muted + loop.

**Answer:** ```

```

For a background-style video: `autoplay` starts it, `muted` is required for autoplay to work, and `loop` makes it replay forever. No controls needed for decorative background.

### Q8. [Medium] Vikram's image loads with a long delay. What attribute can make it faster for below-the-fold images?

```

```

*Hint:* Lazy something.

**Answer:** ```

```

`loading="lazy"` delays loading until the image scrolls into view. Use this for images below the fold (not visible on initial page load).

### Q9. [Medium] What does this code produce?

```

```

*Hint:* Autoplay has limitations.

**Answer:** An audio player with controls. However, in most modern browsers, autoplay with sound is blocked unless the user has interacted with the page first.

Browsers block autoplay audio with sound to prevent annoying users. The audio will usually need a user click before it plays. Adding `muted` is not meaningful for audio since audio is all about sound.

### Q10. [Medium] Write HTML for a video tag with two source formats: MP4 ('clip.mp4') and WebM ('clip.webm'), with controls.

*Hint:* Use source tags inside video.

**Answer:** ```

  
  
  Your browser does not support video.

```

Multiple source tags let the browser pick the format it supports. MP4 works everywhere and should usually be listed first.

### Q11. [Medium] Why might this image take forever to load?

```

```

*Hint:* Think about file size.

**Answer:** The image is downloaded at full 8000x6000 resolution even though only 400px is displayed. Use a properly sized image file instead.

Setting width in HTML only changes the display size, not the download size. You still download the full file. For fast pages, save the image at the size you will actually display.

### Q12. [Hard] What does this do?

```

```

*Hint:* Empty alt has meaning.

**Answer:** Loads a decorative image (marked as decorative with empty alt) lazily — only when it scrolls into view. Screen readers skip it.

Empty alt means the image is decorative and has no semantic meaning. Screen readers skip it. Lazy loading delays loading until needed.

### Q13. [Hard] Write HTML for a complete photo gallery page with 3 figures, each containing an image (placeholder URLs), alt text, figcaption, and lazy loading. Include full boilerplate.

*Hint:* Complete page with 3 figures.

**Answer:** ```
<!DOCTYPE html>

  
  
  Gallery

  My Gallery
  
    
    Himalayas at sunrise
  
  
    
    Goa beach
  
  
    
    Mumbai skyline
  

```

A complete gallery page with three figures. Each image has descriptive alt text, proper dimensions, lazy loading, and a caption. This is a production-quality gallery structure.

### Q14. [Hard] This gallery is slow. What three things should be fixed?

```

```

*Hint:* Alt, size, and loading.

**Answer:** Add alt attributes, use properly sized image files, and add loading="lazy":

```

```

Three issues: (1) missing alt attributes hurt accessibility and SEO, (2) huge file sizes slow download, (3) no lazy loading means all images download at once.

### Q15. [Hard] What does preload="none" do on a video?

*Hint:* It is about what the browser downloads.

**Answer:** It tells the browser not to preload any video data — only download when the user clicks play. Saves bandwidth but adds a delay when user plays.

The `preload` attribute has three values: `none` (download nothing), `metadata` (only info like duration), and `auto` (download whole video). Use `none` or `metadata` for performance.

## Multiple Choice Questions

### Q1. [Easy] Which tag displays an image?

**B is correct.** The `` tag displays images. `` is not a valid tag. `` exists but wraps multiple sources.

### Q2. [Easy] Which attribute specifies the image file?

**B is correct.** `src` (source) points to the image file. `href` is for links, not images.

### Q3. [Easy] Why is the alt attribute important?

**C is correct.** alt text serves three purposes: screen readers use it, search engines use it, and it displays if the image fails to load.

### Q4. [Easy] Which tag plays video files?

**B is correct.** The `` tag plays video files.

### Q5. [Easy] Which attribute shows play/pause buttons on a video?

**C is correct.** The `controls` attribute shows the built-in video player controls.

### Q6. [Easy] Which element wraps an image with its caption?

**B is correct.** `` wraps an image and its `` caption.

### Q7. [Easy] Which tag plays audio files?

**C is correct.** The `` tag plays audio files like MP3 and WAV.

### Q8. [Medium] What does loading="lazy" do?

**B is correct.** Lazy loading delays loading until the image scrolls into view, making pages load faster initially.

### Q9. [Medium] What does the poster attribute do?

**B is correct.** `poster` is the preview image shown before the video starts playing.

### Q10. [Medium] Why provide multiple  tags in a video?

**B is correct.** Different browsers support different video formats. Multiple sources let the browser pick the first format it supports.

### Q11. [Medium] To autoplay a video in a modern browser, which attribute must be included?

**C is correct.** Modern browsers block autoplay videos with sound. You must also include `muted` for autoplay to work.

### Q12. [Medium] Which is a valid image alt attribute for a decorative divider line?

**C is correct.** For purely decorative images, use empty alt (`alt=""`). This tells screen readers to skip it. Never omit alt entirely.

### Q13. [Medium] Which is a good source of free images?

**B is correct.** Unsplash, Pexels, and Pixabay offer free, legal images you can use in your projects. Never steal copyrighted images.

### Q14. [Medium] Which tag element wraps the image caption?

**C is correct.** `` is the caption for an image inside a ``.

### Q15. [Hard] What happens if an image with no alt attribute fails to load?

**C is correct.** Without alt text, failed images just show a broken icon. With alt, the alt text displays instead, giving context.

### Q16. [Hard] Why should you set width and height attributes on images?

**B is correct.** When the browser knows the dimensions, it can reserve the right amount of space before the image loads, preventing content from jumping around.

### Q17. [Hard] What is the best way to handle a video that needs to autoplay as a background?

**C is correct.** Background videos need `autoplay` + `muted` (so browser allows autoplay) + `loop` (so it replays). No controls since it is decorative.

### Q18. [Hard] Which is TRUE about responsive images?

**B is correct.** The `srcset` attribute lets you provide multiple image sizes. The browser picks the best one for the user's screen.

### Q19. [Hard] Which is valid HTML for the img tag?

**C is correct.** img is self-closing, needs src and alt, and uses `` not ``.

### Q20. [Hard] Why should you NOT use absolute file paths like C:/photos/cat.jpg in img src?

**B is correct.** Absolute paths from your computer only work locally. When you upload the site to a server, those paths no longer exist. Always use relative paths or URLs.

## Coding Challenges

### Challenge 1. Simple Image With Alt

**Difficulty:** Easy

**Constraints:**

- Must include alt, width, and height attributes.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Pet</title>
</head>
<body>
  <h1>My Pet Dog</h1>
  <p>Meet Buddy, my golden retriever who loves playing fetch.</p>
  <img src="https://via.placeholder.com/400x300" alt="A golden retriever sitting on grass" width="400" height="300">
</body>
</html>
```

A basic image with all essential attributes: src for the source, alt for accessibility and SEO, width and height for layout stability.

### Challenge 2. Image With Caption

**Difficulty:** Easy

**Constraints:**

- Must use figure and figcaption elements.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Indian Landmark</title>
</head>
<body>
  <h1>Famous Indian Landmarks</h1>
  <figure>
    <img src="https://via.placeholder.com/500x350" alt="Taj Mahal, a white marble monument" width="500" height="350">
    <figcaption>The Taj Mahal in Agra, built in 1653 by Emperor Shah Jahan in memory of his wife Mumtaz.</figcaption>
  </figure>
</body>
</html>
```

The figure element groups an image with its caption. figcaption provides semantic meaning — this is the description of the image above it.

### Challenge 3. Image Gallery of 4 Photos

**Difficulty:** Medium

**Constraints:**

- All 4 images must use figure, figcaption, descriptive alt, and loading="lazy".

**Solution:**

```html-and-css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Photo Gallery</title>
</head>
<body>
  <h1>My Photo Gallery</h1>
  <figure>
    <img src="https://via.placeholder.com/300x200" alt="Sunset at the beach" width="300" height="200" loading="lazy">
    <figcaption>Sunset at Goa Beach</figcaption>
  </figure>
  <figure>
    <img src="https://via.placeholder.com/300x200" alt="Snow covered mountains" width="300" height="200" loading="lazy">
    <figcaption>Himalayas in winter</figcaption>
  </figure>
  <figure>
    <img src="https://via.placeholder.com/300x200" alt="Colourful festival lights" width="300" height="200" loading="lazy">
    <figcaption>Diwali lights at home</figcaption>
  </figure>
  <figure>
    <img src="https://via.placeholder.com/300x200" alt="Green rice fields" width="300" height="200" loading="lazy">
    <figcaption>Rice paddies in Kerala</figcaption>
  </figure>
</body>
</html>
```

A complete gallery with 4 captioned figures. Lazy loading improves performance — images load only when scrolled into view. Each alt text describes what the image shows.

### Challenge 4. Video Player With Poster

**Difficulty:** Medium

**Constraints:**

- Must use video tag with controls, poster, width, and source tag.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Video</title>
</head>
<body>
  <h1>Watch My Video</h1>
  <video width="600" controls poster="https://via.placeholder.com/600x400">
    <source src="my-video.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <p>Click play to watch the video.</p>
</body>
</html>
```

The video player has all the best-practice attributes: controls for user interaction, poster for the preview image, width for size, and a source tag specifying the MP4 file. Fallback text appears only for very old browsers.

### Challenge 5. Audio Player

**Difficulty:** Medium

**Constraints:**

- Must use audio tag with controls and two source tags.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Song</title>
</head>
<body>
  <h1>Listen to My Song</h1>
  <p>A peaceful melody for relaxation.</p>
  <audio controls>
    <source src="song.mp3" type="audio/mpeg">
    <source src="song.ogg" type="audio/ogg">
    Your browser does not support the audio element.
  </audio>
  <p>Song: Peaceful Morning<br>Artist: Aarav Singh</p>
</body>
</html>
```

An audio player with multiple source formats ensures maximum compatibility. MP3 works everywhere, OGG is an open format supported by Firefox and Chrome.

### Challenge 6. Recipe Page With Images

**Difficulty:** Hard

**Constraints:**

- Must use figure and figcaption for all images, lazy loading, descriptive alt text, and proper HTML structure.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chocolate Chip Cookies</title>
</head>
<body>
  <h1>Chocolate Chip Cookies</h1>
  <p>Learn how to make soft and chewy chocolate chip cookies at home.</p>

  <figure>
    <img src="https://via.placeholder.com/600x400" alt="A plate of freshly baked chocolate chip cookies" width="600" height="400">
    <figcaption>The finished cookies - golden brown and delicious</figcaption>
  </figure>

  <h2>Ingredients</h2>
  <ul>
    <li>2 cups flour</li>
    <li>1 cup butter</li>
    <li>1 cup sugar</li>
    <li>2 eggs</li>
    <li>1 cup chocolate chips</li>
  </ul>

  <h2>Steps</h2>
  <figure>
    <img src="https://via.placeholder.com/400x250" alt="Mixing butter and sugar in a bowl" width="400" height="250" loading="lazy">
    <figcaption>Step 1: Mix the butter and sugar</figcaption>
  </figure>
  <figure>
    <img src="https://via.placeholder.com/400x250" alt="Adding chocolate chips to the dough" width="400" height="250" loading="lazy">
    <figcaption>Step 2: Fold in the chocolate chips</figcaption>
  </figure>
  <figure>
    <img src="https://via.placeholder.com/400x250" alt="Cookies on a baking tray ready for the oven" width="400" height="250" loading="lazy">
    <figcaption>Step 3: Bake at 180C for 12 minutes</figcaption>
  </figure>
</body>
</html>
```

A complete recipe page with a main hero image (not lazy loaded since it is above the fold), an ingredients list, and three step-by-step images (all lazy loaded because they are below the fold). Every image has descriptive alt text and a caption.

### Challenge 7. Multi-Media Page

**Difficulty:** Hard

**Constraints:**

- Must include all three media types with best practice attributes.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Media Showcase</title>
</head>
<body>
  <h1>My Media Showcase</h1>
  <p>This page demonstrates images, video, and audio in HTML.</p>

  <h2>Featured Image</h2>
  <figure>
    <img src="https://via.placeholder.com/500x350" alt="A scenic mountain landscape" width="500" height="350" loading="lazy">
    <figcaption>The Himalayas at sunrise, photographed by Priya Sharma</figcaption>
  </figure>

  <h2>Watch the Video</h2>
  <video width="600" controls poster="https://via.placeholder.com/600x400">
    <source src="tour.mp4" type="video/mp4">
    <source src="tour.webm" type="video/webm">
    Your browser does not support video.
  </video>

  <h2>Listen to the Audio</h2>
  <audio controls>
    <source src="narration.mp3" type="audio/mpeg">
    <source src="narration.ogg" type="audio/ogg">
    Your browser does not support audio.
  </audio>
</body>
</html>
```

A comprehensive media showcase demonstrating every best practice: figure/figcaption for images, multiple video sources for compatibility, multiple audio sources, and proper alt text and semantic structure.

### Challenge 8. Complete Portfolio With Media

**Difficulty:** Hard

**Constraints:**

- Must include nav, figure for images with captions, video with controls and poster, lazy loading, and contact links.

**Solution:**

```html-and-css
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ananya Singh - Portfolio</title>
</head>
<body>
  <nav>
    <a href="index.html">Home</a> |
    <a href="projects.html">Projects</a> |
    <a href="contact.html">Contact</a>
  </nav>

  <h1>Ananya Singh</h1>
  <figure>
    <img src="https://via.placeholder.com/200x200" alt="Profile photo of Ananya Singh" width="200" height="200">
    <figcaption>Student developer from Bangalore</figcaption>
  </figure>

  <h2>Introduction Video</h2>
  <video width="600" controls poster="https://via.placeholder.com/600x400">
    <source src="intro.mp4" type="video/mp4">
    Your browser does not support video.
  </video>

  <h2>My Projects</h2>
  <figure>
    <img src="https://via.placeholder.com/400x250" alt="Screenshot of blog website" width="400" height="250" loading="lazy">
    <figcaption>Project 1: Personal Blog</figcaption>
  </figure>
  <figure>
    <img src="https://via.placeholder.com/400x250" alt="Screenshot of recipe website" width="400" height="250" loading="lazy">
    <figcaption>Project 2: Recipe Collection</figcaption>
  </figure>
  <figure>
    <img src="https://via.placeholder.com/400x250" alt="Screenshot of photo gallery" width="400" height="250" loading="lazy">
    <figcaption>Project 3: Photo Gallery</figcaption>
  </figure>

  <hr>
  <h2>Contact</h2>
  <p>Email: <a href="mailto:ananya@example.com">ananya@example.com</a></p>
  <p>Phone: <a href="tel:+919876543210">+91 98765 43210</a></p>
</body>
</html>
```

A complete portfolio home page showcasing every media feature from this chapter plus links from chapter 4: navigation, profile figure, video player with poster and controls, a gallery of project screenshots with lazy loading, and contact info with mailto and tel links. This is a production-quality portfolio structure.

---

*Notes: https://learn.modernagecoders.com/resources/html-and-css/images-and-media/*
