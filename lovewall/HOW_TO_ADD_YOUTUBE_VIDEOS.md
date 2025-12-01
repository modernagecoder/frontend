# How to Add Your YouTube Videos

## Quick Guide

### Step 1: Get Your YouTube Video ID

Your YouTube URL looks like this:
```
https://www.youtube.com/watch?v=ABC123XYZ
                              ↑
                    This is your Video ID
```

**Examples:**
- `https://www.youtube.com/watch?v=dQw4w9WgXcQ` → Video ID: `dQw4w9WgXcQ`
- `https://youtu.be/xyz789` → Video ID: `xyz789`
- `https://www.youtube.com/watch?v=abc123&t=30s` → Video ID: `abc123`

### Step 2: Open constants.ts File

Find the `MEETUP_MEDIA` array and look for entries with `type: 'youtube'`

### Step 3: Replace the youtubeId

**Current code (line ~202):**
```typescript
{
  id: 'mm2',
  type: 'youtube' as const,
  url: '',
  youtubeId: 'dQw4w9WgXcQ',  // 👈 CHANGE THIS
  thumbnailUrl: 'https://picsum.photos/800/450?random=31',
  title: 'Video Highlights 1',
  date: '',
  emoji: '🍕',
  rotation: 1
}
```

**Replace with YOUR video ID:**
```typescript
{
  id: 'mm2',
  type: 'youtube' as const,
  url: '',
  youtubeId: 'YOUR_VIDEO_ID_HERE',  // 👈 Put your actual video ID
  thumbnailUrl: 'https://picsum.photos/800/450?random=31',
  title: 'Student Success Story',  // You can change the title too
  date: '',
  emoji: '🎉',  // Change emoji if you want
  rotation: 1
}
```

## Full Example

Let's say you have these 3 YouTube videos:
1. `https://www.youtube.com/watch?v=abc123` - Student testimonial
2. `https://www.youtube.com/watch?v=xyz789` - Coding workshop
3. `https://youtu.be/def456` - Fun moments

### Here's how to add them:

```typescript
export const MEETUP_MEDIA: MediaItem[] = [
  // ... your images ...
  
  // First YouTube Video
  {
    id: 'mm2',
    type: 'youtube' as const,
    url: '',
    youtubeId: 'abc123',  // ✅ Your first video ID
    thumbnailUrl: '',  // Leave empty to use YouTube's thumbnail
    title: 'Student Testimonial',
    date: '',
    emoji: '🎓',
    rotation: 1
  },
  
  // ... more images ...
  
  // Second YouTube Video
  {
    id: 'mm8',
    type: 'youtube' as const,
    url: '',
    youtubeId: 'xyz789',  // ✅ Your second video ID
    thumbnailUrl: '',
    title: 'Coding Workshop',
    date: '',
    emoji: '💻',
    rotation: -1
  },
  
  // ... more items ...
];
```

## Adding MORE YouTube Videos

Want to add more than 2 videos? Just copy this template and add it anywhere in the array:

```typescript
{
  id: 'mm20',  // Make sure ID is unique (mm20, mm21, etc.)
  type: 'youtube' as const,
  url: '',
  youtubeId: 'YOUR_VIDEO_ID',
  thumbnailUrl: '',
  title: 'Your Video Title',
  date: '',
  emoji: '🎬',
  rotation: 2
}
```

## Tips

1. **Leave `url` empty** for YouTube videos (it's not used)
2. **Leave `thumbnailUrl` empty** to automatically use YouTube's thumbnail
3. **Change the title** to describe your video
4. **Pick fun emojis** that match your content: 🎉 🎓 💻 🎬 🏆 🎮 📸
5. **Rotation** can be between -3 and 3 for that tilted polaroid look

## Testing

After adding your video IDs:
1. Save the file
2. Refresh your browser
3. Scroll to the "Student Meetups & Masti" section
4. Your videos should appear with a red YouTube play button

## Need Help?

If your video doesn't show:
- Double-check the video ID (no spaces, exact match)
- Make sure the video is PUBLIC on YouTube (not private/unlisted)
- Check that you didn't accidentally delete any commas or brackets
