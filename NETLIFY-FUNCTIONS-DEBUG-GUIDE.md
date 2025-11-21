# Debug Guide - Beat the Babu Leaderboard Not Working

## 🔍 Problem: Leaderboard is empty and scores won't save

This usually means the Netlify Function can't connect to Firebase. Let's debug it.

---

## Step 1: Check Netlify Functions Logs

1. Go to your Netlify Dashboard
2. Click on your site
3. Go to **Functions** tab (in the left sidebar)
4. Click on **game-api** function
5. Look at the logs - you should see errors there

**Common errors you might see:**
- "Error: The default Firebase app does not exist"
- "Error: Could not load the default credentials"
- "Error: private_key must be a string"

---

## Step 2: Verify Environment Variables

Go to: **Site Settings** → **Environment Variables**

Make sure you have ALL 3 variables set:

### ✅ Check #1: FIREBASE_PROJECT_ID
```
Key: FIREBASE_PROJECT_ID
Value: babu-f0594
```

### ✅ Check #2: FIREBASE_CLIENT_EMAIL
```
Key: FIREBASE_CLIENT_EMAIL
Value: firebase-adminsdk-xxxxx@babu-f0594.iam.gserviceaccount.com
```
(Should look like an email address)

### ✅ Check #3: FIREBASE_PRIVATE_KEY

This is the tricky one! The value should be the ENTIRE private key including:
- The opening quote `"`
- `-----BEGIN PRIVATE KEY-----\n`
- All the key content with `\n` characters
- `-----END PRIVATE KEY-----\n`
- The closing quote `"`

**Example format:**
```
"-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQE...(lots of text)...-----END PRIVATE KEY-----\n"
```

**Common mistakes:**
- ❌ Missing the quotes at start/end
- ❌ Removing the `\n` characters (they're important!)
- ❌ Adding extra spaces or line breaks
- ❌ Not copying the entire key

---

## Step 3: Test the API Directly

Open your browser console (F12) and run this:

```javascript
// Test GET (fetch leaderboard)
fetch('https://learn.modernagecoders.com/.netlify/functions/game-api')
  .then(r => r.json())
  .then(data => console.log('GET result:', data))
  .catch(err => console.error('GET error:', err));

// Test POST (submit score)
fetch('https://learn.modernagecoders.com/.netlify/functions/game-api', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'TEST',
    score: 100,
    timeSpent: 90
  })
})
  .then(r => r.json())
  .then(data => console.log('POST result:', data))
  .catch(err => console.error('POST error:', err));
```

**What you should see:**
- GET: `{success: true, scores: [...]}`
- POST: `{success: true, message: "Score saved!"}`

**If you see errors:**
- `{success: false, error: "Server error"}` → Check Netlify Functions logs
- Network error → API not deployed correctly

---

## Step 4: Common Fixes

### Fix #1: Re-enter the Private Key

The most common issue is the private key format. Let me give you the exact format:

1. Go to Netlify → Site Settings → Environment Variables
2. Find `FIREBASE_PRIVATE_KEY`
3. Click **Edit**
4. Delete the current value
5. Paste this EXACT format (with your key):

```
"-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCWWauXlwI5j3ck\nXHoKbg4QsQu5PxMCS8kWIQutbWMqfN5bhDXppvG1kpbvUOc/bM90CdxqzWQhibRo\nxySXdW768r0nFLU2wQu4jJnGEdLoGIpPtGuAahXHP46z1wX2n+eiY4zV2dJHod+k\nAs0P7OzTaClJt7oXmrVdVyfbLbkrjnbnWsGaE2rcGw6uL1LukgxazhxKwyOdOrvW\nviydhzbNpp2+4djQ59Xi3ksY6mTMGxZGgFRUduodxWiBHwztgLZlbOXFgp05NDY3\nezHKZyLBm+FwOMQmdg8o/z/qE2i/7YN01OFBW7An6kbcD2gpU8EXQaPv7k5qmFZy\nzDScgqvhAgMBAAECggEACxcwQNgN0ksn7GcPRZJat+vSGTxy3YTTn4ND25Ypw3+U\niMcBkcET1riqfkVx2XbgUrH2MBat3991jxO+5OvvtNPlFMCX9s2vXKdadzGSD4wy\niltHtsrx3PxuPWE2JRF57RD6LugzdRSWwlVxOk8tembA7O7Vlloo2MAjcNfi7zh6\ne+lJjZ1tRVmQ68jFQbxGc6eWp5ydpCUV4b6u9Vm5rr6vcp4wAjPXp4FdNLdnN42k\nR471PdYZAMEh7UxgqEXwcukh3OryUvwjPcEL+fRnWztLFfXl9+oHM3E258mYv7EE\nVu8v0MYBEXT1nYUa413rGDRaLbyl9L7PJKbHpzEzNQKBgQDES4GxBBL0QkMS+a9j\nmilSdCO99Ujbf/laiUTwrjw+4nzpubKogGCkP00TEm/SxeLubDHltVM6SCmy67EF\nNEUqoo6XQoNQCHnP1Rqu4cEs7+jMjiAYUn706zBhz8J+EuBRO/zWy1zn0v/dAyta\nYIPEvcvV72HueYVoSm1gE87lBwKBgQDEFK9G1ZDk4b84sK+J8ql/UcFRFau10EGb\nr2jaAJcmkHex8F/2Rfr6UXyZeZ9po9HSLei3jQvZIQ+yWStGQ4Sw32XUU0KPBDjK\nXkQ/dlWloUPBGHtGv2bCipsBtK/1mstsytjZMpf4h/9qOlMK6uPfSd4s7WNQ4brE\nUR09GmNV1wKBgFP6kcOvoIRLjPKjS7vrCl6yPVBZjhAKUh2/uHTXtgKZVyOPRLX+\nJlpekpTkQF8GNi4Wr8o8pxy6HszjNNqrICQ7Y5Gm7RLibWrTGxVSlBirkwdgjq6Z\nLKOPsyVFg0n4vWtDpMooOtkbVkexwWxq+jTDll8yiM1DxCV4Ig8Gqm8lAoGAQvrZ\n4PWFOFpRCtl4LURCWCaiRcOEU2gfcUIbLBT1jQveh18YOLUxBZ8eVALyzJBUVVqv\nWzwIJxSfGwpQuQDJa+30B/KlEtubVq2a3J7cpOaQkX5+Ze1t+diFGLETRm+pO7GT\nH6ajuRcjzbK8uUcBrj26clhpC7EALp2SwlOoSSMCgYA86uCRDu17PSKiJmOZGaV4\ne3FUIJJsIyjOpScSDCGqBRAyEwE4DbjgtyXMl3lXOUbq/4W8cqZuaLTYocQVPfIV\nYDu/FUJI1Mo0HLSj18fte8QqlWCeR1LX1W/M/emhtrkU67MW/jE0RJSwUNzaVUQH\nY/sSEkOeVcNMVx5W+9SUxg==\n-----END PRIVATE KEY-----\n"
```

6. Click **Save**
7. Wait 1 minute for Netlify to redeploy
8. Test again

### Fix #2: Check Firebase Security Rules

Make sure your Firebase rules allow reads:

1. Go to: https://console.firebase.google.com/project/babu-f0594/firestore/rules
2. Should look like this:

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

3. Click **Publish** if you made changes

### Fix #3: Manually Add a Test Score

Let's verify Firebase is working by adding a score manually:

1. Go to: https://console.firebase.google.com/project/babu-f0594/firestore/data
2. Click on the **scores** collection
3. Click **Add document**
4. Set:
   - Document ID: (auto)
   - Field: `name` (string) = `TEST`
   - Field: `score` (number) = `999`
   - Field: `createdAt` (timestamp) = (current time)
5. Click **Save**
6. Reload your game - you should see TEST with 999 points

If you see the manual score, the problem is with the API. If you don't see it, the problem is with Firebase connection.

---

## Step 5: Check Browser Console

Open your game and press F12. Look for errors in the Console tab.

**Common errors:**
- `Failed to fetch` → API not responding
- `CORS error` → API CORS settings issue
- `Network error` → Check your internet connection

---

## Step 6: Still Not Working?

If none of the above works, check:

1. **Netlify Functions are deployed:**
   - Go to Netlify → Functions tab
   - Should see `game-api` listed

2. **Environment variables are set:**
   - All 3 variables present
   - No typos in variable names

3. **Firebase project is active:**
   - Go to Firebase Console
   - Check if project is active and not suspended

---

## Quick Test Checklist

- [ ] All 3 environment variables set in Netlify
- [ ] Private key includes quotes and `\n` characters
- [ ] Firebase security rules published
- [ ] Netlify Functions deployed successfully
- [ ] No errors in Netlify Functions logs
- [ ] No errors in browser console
- [ ] Can see manually added test score

---

## Need More Help?

Share the following information:
1. Error from Netlify Functions logs
2. Error from browser console
3. Screenshot of your environment variables (hide the actual values)
4. Result of the API test from Step 3

This will help identify the exact issue! 🔍
