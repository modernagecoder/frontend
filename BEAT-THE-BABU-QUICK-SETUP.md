# Beat the Babu - Quick Security Setup

## 🚀 5-Minute Setup Guide

### Step 1: Update Firebase Security Rules (2 minutes)

1. Go to: https://console.firebase.google.com/project/babu-f0594/firestore/rules
2. Copy and paste this:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /scores/{scoreId} {
      allow read: if true;
      allow write: if false;
    }
  }
}
```

3. Click **Publish**

### Step 2: Get Firebase Admin Key (2 minutes)

1. Go to: https://console.firebase.google.com/project/babu-f0594/settings/serviceaccounts/adminsdk
2. Click **Generate New Private Key**
3. Download the JSON file
4. Keep it safe - you'll need it next!

### Step 3: Add to Netlify (1 minute)

1. Go to your Netlify site dashboard
2. Go to **Site Settings** → **Environment Variables**
3. Add these 3 variables (copy from the JSON file you downloaded):

```
FIREBASE_PROJECT_ID = babu-f0594
FIREBASE_CLIENT_EMAIL = firebase-adminsdk-xxxxx@babu-f0594.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY = -----BEGIN PRIVATE KEY-----\nYour-Key-Here\n-----END PRIVATE KEY-----\n
```

**Important:** For FIREBASE_PRIVATE_KEY, copy the entire private_key value including the quotes and newlines (\n)

### Step 4: Install Dependencies & Deploy

```bash
cd api
npm install
cd ..
git add .
git commit -m "Add secure API for Beat the Babu"
git push
```

Netlify will automatically deploy your changes!

---

## ✅ Verify It's Working

1. Visit your game: https://learn.modernagecoders.com/beat-the-babu
2. Check if leaderboard loads
3. Play a game and submit a score
4. Open DevTools → Network tab
5. Verify you DON'T see any Firebase credentials

---

## 🔒 What Changed?

**Before:** Firebase credentials were visible in the HTML source code
**After:** All database operations go through a secure backend API

**Security Features Added:**
- ✅ Hidden Firebase credentials
- ✅ Score validation (prevents cheating)
- ✅ Rate limiting (10 requests/minute)
- ✅ Profanity filter
- ✅ IP tracking for abuse prevention

---

## 🆘 Troubleshooting

**Leaderboard shows "No scores yet"?**
- Wait 1-2 minutes for Netlify to deploy
- Check Netlify deploy logs for errors
- Verify environment variables are set

**"Failed to save score" error?**
- Check Netlify Functions logs
- Verify Firebase rules are published
- Make sure all 3 environment variables are set correctly

**Still seeing Firebase credentials in HTML?**
- Clear your browser cache
- Do a hard refresh (Ctrl+Shift+R)
- Check you're viewing the latest deployed version

---

## 📞 Need Help?

Check the full guide: `BEAT-THE-BABU-SECURITY-GUIDE.md`

Your game is now secure! 🎮🔒
