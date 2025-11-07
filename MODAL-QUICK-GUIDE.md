# Enrollment Modal - Quick Guide

## 🎯 What It Does

When students click **"Enroll Now"** button, a beautiful modal appears with contact information.

## 📞 Contact Information Shown

### Shivam Sir
- **Phone**: 9123366161 (click to call)
- **WhatsApp**: Opens WhatsApp chat
- **Email**: connect@modernagecoders.com

## ✨ Features

- ✅ Beautiful gradient design
- ✅ Smooth animations
- ✅ Mobile responsive
- ✅ Multiple close options (X, overlay, Escape key)
- ✅ Direct call/WhatsApp/email links

## 🎨 Design

```
┌─────────────────────────────────┐
│         [Phone Icon]            │
│   Get Started with Your         │
│     Learning Journey            │
│                                 │
│  ┌───────────────────────────┐ │
│  │ 📞 Call or WhatsApp       │ │
│  │ Shivam Sir                │ │
│  │ [9123366161]              │ │
│  │ [WhatsApp]                │ │
│  └───────────────────────────┘ │
│                                 │
│            OR                   │
│                                 │
│  ┌───────────────────────────┐ │
│  │ ✉️ Email Us               │ │
│  │ [connect@modernagecoders] │ │
│  └───────────────────────────┘ │
│                                 │
│  ℹ️ Shivam Sir will provide    │
│     course details & pricing    │
└─────────────────────────────────┘
```

## 🚀 How It Works

1. Student clicks "Enroll Now"
2. Modal appears with animation
3. Student sees contact options
4. Student clicks preferred method:
   - **Call** → Phone app opens
   - **WhatsApp** → WhatsApp opens
   - **Email** → Email client opens

## 📱 Mobile Optimized

- Full-screen on small phones
- Large touch targets
- Easy to read
- Smooth animations

## 🔧 To Update Contact Info

Edit `content/courses/template/course-template.html`:
- Change phone number: `tel:+919123366161`
- Change WhatsApp: `https://wa.me/919123366161`
- Change email: `mailto:connect@modernagecoders.com`
- Change name: `<p class="contact-name">Shivam Sir</p>`

Then regenerate:
```bash
node scripts/generate-courses.js
```

## ✅ Status

- **51 courses** have the modal
- **All "Enroll Now" buttons** trigger it
- **Fully responsive** on all devices
- **Production ready** ✨

---

**Quick Test**: Click any "Enroll Now" button on a course page!
