# Beat the Babu - Security Quick Reference Card

## 🚀 Quick Deploy (Copy & Paste)

### 1. Firebase Rules (2 min)
Go to: https://console.firebase.google.com/project/babu-f0594/firestore/rules

**⚠️ IMPORTANT:** Your current rules still allow cheating! Replace with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /scores/{scoreId} {
      allow read: if true;
      allow write: if false;  // Block ALL client writes
    }
  }
}
```
Click **Publish**

**Why?** Your current rules allow `write: if request.auth == null` which means anyone can still write fake scores from browser console. The new rules block ALL client writes - only the secure backend API can write.

### 2. Get Credentials (2 min)
Go to: https://console.firebase.google.com/project/babu-f0594/settings/serviceaccounts/adminsdk
- Click **Generate New Private Key**
- Download JSON file

### 3. Netlify Variables (2 min)
Netlify Dashboard → Site Settings → Environment Variables

Add these 3 variables (copy from JSON):
```
FIREBASE_PROJECT_ID
FIREBASE_CLIENT_EMAIL
FIREBASE_PRIVATE_KEY
```

### 4. Deploy (1 min)
```bash
cd api
npm install
cd ..
git add .
git commit -m "Secure Beat the Babu"
git push
```

---

## 📁 Files Overview

| File | Purpose |
|------|---------|
| `api/game-api.js` | Secure backend API |
| `api/package.json` | Dependencies |
| `api/local-server.js` | Local testing |
| `.env.example` | Template for credentials |
| `firestore.rules` | Firebase security rules |
| `src/pages/beat-the-babu.html` | Updated game (no credentials) |

---

## 🔍 Quick Test

After deployment:
1. Visit: https://learn.modernagecoders.com/beat-the-babu
2. Open DevTools (F12) → Network tab
3. Reload page
4. ✅ Should NOT see Firebase credentials
5. ✅ Should see calls to `/.netlify/functions/game-api`

---

## 🛡️ Security Features

| Feature | Status |
|---------|--------|
| Hidden credentials | ✅ |
| Score validation | ✅ (max 2000) |
| Time validation | ✅ (min 10 sec) |
| Rate limiting | ✅ (10/min) |
| Profanity filter | ✅ |
| IP tracking | ✅ |
| Firebase rules | ✅ |

---

## 🆘 Troubleshooting

| Problem | Solution |
|---------|----------|
| Leaderboard not loading | Check Netlify Functions logs |
| Scores not saving | Verify environment variables |
| "Too many requests" | Wait 1 minute |
| Still see credentials | Clear cache, hard refresh |

---

## 📞 Full Guides

- **Complete Setup:** `BEAT-THE-BABU-SECURITY-GUIDE.md`
- **Quick Setup:** `BEAT-THE-BABU-QUICK-SETUP.md`
- **Checklist:** `SECURITY-DEPLOYMENT-CHECKLIST.md`
- **Architecture:** `SECURITY-ARCHITECTURE-DIAGRAM.md`
- **Summary:** `SECURITY-FIX-SUMMARY.md`

---

## ⚡ Local Testing

```bash
# Create .env file with credentials
cd api
npm install
npm start
# Test at http://localhost:3001
```

---

## 🎯 What Changed

**Before:**
```javascript
const firebaseConfig = {
    apiKey: "AIzaSyAIVEr093jDi3TXeCDZUoSSeb-cHkSr7U4",
    // ... exposed!
};
```

**After:**
```javascript
const API_URL = '/.netlify/functions/game-api';
// Credentials hidden on server
```

---

**Status:** Ready to deploy! 🚀
**Time:** ~10 minutes total
**Difficulty:** Easy ⭐⭐☆☆☆
