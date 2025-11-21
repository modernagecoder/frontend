# Beat the Babu - Security Implementation Guide

## 🔒 Problem Solved
Your Firebase API keys and configuration were exposed in the client-side code, allowing anyone to:
- View your database credentials
- Directly manipulate game scores
- Bypass game logic and submit fake scores

## ✅ Solution Implemented
All Firebase operations now go through a secure backend API that:
- Hides Firebase credentials on the server
- Validates scores before saving
- Implements rate limiting to prevent spam
- Filters profanity from player names
- Tracks IP addresses to prevent abuse

---

## 📋 Setup Instructions

### Step 1: Set Up Firebase Security Rules

1. Go to Firebase Console: https://console.firebase.google.com
2. Select your project: `babu-f0594`
3. Go to **Firestore Database** → **Rules**
4. Replace the rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Deny all client-side writes
    match /scores/{document=**} {
      allow read: if true;  // Anyone can read leaderboard
      allow write: if false; // No direct writes from client
    }
  }
}
```

5. Click **Publish**

### Step 2: Get Firebase Admin Credentials

1. In Firebase Console, go to **Project Settings** (gear icon)
2. Go to **Service Accounts** tab
3. Click **Generate New Private Key**
4. Download the JSON file (keep it secure!)
5. Copy these values from the JSON:
   - `project_id`
   - `client_email`
   - `private_key`

### Step 3: Configure Environment Variables

Create a `.env` file in your project root (copy from `.env.example`):

```bash
FIREBASE_PROJECT_ID=babu-f0594
FIREBASE_CLIENT_EMAIL=firebase-adminsdk-xxxxx@babu-f0594.iam.gserviceaccount.com
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour-Private-Key-Here\n-----END PRIVATE KEY-----\n"
```

**IMPORTANT:** Add `.env` to your `.gitignore` file so it's never committed!

### Step 4: Deploy the Backend API

#### Option A: Deploy to Netlify (Recommended)

1. Install dependencies:
```bash
cd api
npm install
cd ..
```

2. Update `netlify.toml` to include the API function:
```toml
[build]
  functions = "api"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/:splat"
  status = 200
```

3. In Netlify Dashboard:
   - Go to **Site Settings** → **Environment Variables**
   - Add your three Firebase variables
   - Redeploy your site

4. Update the API URL in `beat-the-babu.html`:
```javascript
const API_URL = '/.netlify/functions/game-api';
```

#### Option B: Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

3. Add environment variables in Vercel Dashboard
4. Update API_URL to your Vercel function endpoint

#### Option C: Deploy to Your Own Server

1. Set up a Node.js server (Express, etc.)
2. Install dependencies: `npm install`
3. Set environment variables on your server
4. Run the API: `node api/game-api.js`
5. Update API_URL to your server endpoint

---

## 🛡️ Security Features Implemented

### 1. **Hidden Credentials**
- Firebase config is now server-side only
- No API keys visible in browser

### 2. **Score Validation**
- Maximum score limits based on game mechanics
- Minimum time requirements
- Server-side validation prevents cheating

### 3. **Rate Limiting**
- Max 10 requests per minute per IP
- Prevents spam and abuse

### 4. **Profanity Filter**
- Automatically filters inappropriate names
- Customizable word list

### 5. **IP Tracking**
- Logs IP addresses with scores
- Helps identify abuse patterns

### 6. **Leaderboard Qualification**
- Only top 10 scores are saved
- Prevents database bloat

---

## 🧪 Testing

1. **Test Leaderboard Loading:**
   - Open the game
   - Check if existing scores load

2. **Test Score Submission:**
   - Play a game
   - Try to submit a score
   - Verify it appears on leaderboard

3. **Test Security:**
   - Open browser DevTools → Network tab
   - Verify no Firebase credentials are visible
   - Try to submit a fake score via console (should fail)

---

## 🚨 Important Notes

1. **Never commit `.env` file** - Add it to `.gitignore`
2. **Keep service account JSON secure** - Don't share or commit it
3. **Update API_URL** - Point to your deployed API endpoint
4. **Monitor usage** - Check Firebase Console for unusual activity
5. **Customize profanity filter** - Add words specific to your audience

---

## 📊 What Changed in the Code

### Before (Insecure):
```javascript
// Firebase config exposed in HTML
const firebaseConfig = {
    apiKey: "AIzaSyAIVEr093jDi3TXeCDZUoSSeb-cHkSr7U4",
    // ... other credentials
};
```

### After (Secure):
```javascript
// Only API calls, no credentials
const API_URL = '/api/game-api';
await fetch(API_URL, { method: 'POST', body: JSON.stringify({...}) });
```

---

## 🔧 Troubleshooting

### Leaderboard not loading?
- Check API_URL is correct
- Verify API is deployed and running
- Check browser console for errors

### Scores not saving?
- Verify environment variables are set
- Check Firebase security rules are updated
- Look at API logs for errors

### "Too many requests" error?
- Wait 1 minute between submissions
- Adjust rate limit in `game-api.js` if needed

---

## 📞 Need Help?

If you encounter issues:
1. Check browser console for errors
2. Check API logs (Netlify/Vercel dashboard)
3. Verify Firebase security rules are published
4. Ensure environment variables are set correctly

Your game is now secure! Players can enjoy honest competition without the ability to manipulate scores. 🎮🔒
