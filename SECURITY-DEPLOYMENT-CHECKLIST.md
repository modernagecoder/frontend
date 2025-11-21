# Beat the Babu - Security Deployment Checklist

Use this checklist to ensure everything is set up correctly.

## ☑️ Pre-Deployment Checklist

### 1. Firebase Security Rules
- [ ] Go to Firebase Console: https://console.firebase.google.com/project/babu-f0594/firestore/rules
- [ ] Copy rules from `firestore.rules` file
- [ ] Click "Publish"
- [ ] Verify rules are active (should show "allow write: if false")

### 2. Firebase Admin Credentials
- [ ] Go to: https://console.firebase.google.com/project/babu-f0594/settings/serviceaccounts/adminsdk
- [ ] Click "Generate New Private Key"
- [ ] Download JSON file
- [ ] Save it securely (DO NOT commit to git!)
- [ ] Extract these values:
  - [ ] `project_id`
  - [ ] `client_email`
  - [ ] `private_key`

### 3. Local Environment Setup
- [ ] Create `.env` file in project root
- [ ] Add `FIREBASE_PROJECT_ID` from JSON
- [ ] Add `FIREBASE_CLIENT_EMAIL` from JSON
- [ ] Add `FIREBASE_PRIVATE_KEY` from JSON (keep the \n characters)
- [ ] Verify `.env` is in `.gitignore`

### 4. Install Dependencies
```bash
cd api
npm install
cd ..
```
- [ ] No errors during installation
- [ ] `node_modules` folder created in `api/`

### 5. Local Testing (Optional but Recommended)
```bash
cd api
npm start
```
- [ ] Server starts on http://localhost:3001
- [ ] Visit http://localhost:3001 in browser
- [ ] Should return leaderboard data or empty array
- [ ] No error messages in console

## ☑️ Netlify Deployment Checklist

### 6. Configure Netlify Environment Variables
- [ ] Go to Netlify Dashboard → Your Site
- [ ] Navigate to: Site Settings → Environment Variables
- [ ] Click "Add a variable"
- [ ] Add these 3 variables:

**Variable 1:**
- Key: `FIREBASE_PROJECT_ID`
- Value: `babu-f0594`

**Variable 2:**
- Key: `FIREBASE_CLIENT_EMAIL`
- Value: `firebase-adminsdk-xxxxx@babu-f0594.iam.gserviceaccount.com`
  (Copy from your downloaded JSON)

**Variable 3:**
- Key: `FIREBASE_PRIVATE_KEY`
- Value: `-----BEGIN PRIVATE KEY-----\nYour-Key-Here\n-----END PRIVATE KEY-----\n`
  (Copy entire private_key value from JSON, including quotes)

- [ ] All 3 variables added
- [ ] Values match your Firebase JSON file
- [ ] Click "Save"

### 7. Deploy to Netlify
```bash
git add .
git commit -m "Add secure API for Beat the Babu game"
git push
```
- [ ] Code pushed to repository
- [ ] Netlify build triggered automatically
- [ ] Build completes successfully
- [ ] No errors in build log

### 8. Verify Netlify Functions
- [ ] Go to Netlify Dashboard → Functions tab
- [ ] Should see `game-api` function listed
- [ ] Status should be "Active" or "Ready"
- [ ] Click on function to view logs

## ☑️ Post-Deployment Testing

### 9. Test Leaderboard Loading
- [ ] Visit: https://learn.modernagecoders.com/beat-the-babu
- [ ] Leaderboard section loads
- [ ] Shows existing scores OR "No scores yet"
- [ ] No error messages in browser console

### 10. Test Score Submission
- [ ] Click "START GAME"
- [ ] Play for at least 10 seconds
- [ ] Answer some questions
- [ ] Wait for timer to reach 0
- [ ] If score qualifies, enter name
- [ ] Click "SAVE TO LEADERBOARD"
- [ ] Should reload and show your score
- [ ] Score appears in correct position

### 11. Verify Security
- [ ] Open browser DevTools (F12)
- [ ] Go to Network tab
- [ ] Reload the page
- [ ] Check all network requests
- [ ] Verify NO Firebase credentials visible
- [ ] Should only see calls to `/.netlify/functions/game-api`

### 12. Test Security Rules
- [ ] Open browser console (F12)
- [ ] Try to run: `fetch('/.netlify/functions/game-api', {method: 'POST', body: JSON.stringify({name: 'TEST', score: 999999, timeSpent: 1})})`
- [ ] Should fail or return error (score validation)
- [ ] Cannot submit impossible scores

### 13. Test Rate Limiting
- [ ] Try submitting multiple scores quickly
- [ ] After 10 requests in 1 minute, should get "Too many requests" error
- [ ] Wait 1 minute, should work again

## ☑️ Monitoring & Maintenance

### 14. Set Up Monitoring
- [ ] Bookmark Firebase Console: https://console.firebase.google.com/project/babu-f0594
- [ ] Bookmark Netlify Functions logs
- [ ] Set up email alerts for unusual activity (optional)

### 15. Regular Checks (Weekly)
- [ ] Review Firebase usage in console
- [ ] Check Netlify Functions logs for errors
- [ ] Review leaderboard for suspicious scores
- [ ] Monitor for abuse patterns

## ☑️ Troubleshooting

### If Leaderboard Doesn't Load:
- [ ] Check Netlify Functions logs for errors
- [ ] Verify environment variables are set correctly
- [ ] Check Firebase security rules are published
- [ ] Test API directly: `curl https://learn.modernagecoders.com/.netlify/functions/game-api`

### If Scores Don't Save:
- [ ] Check browser console for error messages
- [ ] Verify Firebase security rules allow reads
- [ ] Check Netlify Functions logs
- [ ] Verify all 3 environment variables are set
- [ ] Test that private key has no extra spaces or line breaks

### If You See Firebase Credentials:
- [ ] Clear browser cache (Ctrl+Shift+Delete)
- [ ] Hard refresh (Ctrl+Shift+R)
- [ ] Check you're viewing the latest deployed version
- [ ] Verify changes were pushed to git and deployed

## ✅ Success Criteria

Your security implementation is successful when:
- ✅ No Firebase credentials visible in browser
- ✅ Leaderboard loads correctly
- ✅ Scores can be submitted and saved
- ✅ Invalid scores are rejected
- ✅ Rate limiting works
- ✅ No errors in console or logs

## 📞 Need Help?

If you're stuck:
1. Check `BEAT-THE-BABU-SECURITY-GUIDE.md` for detailed explanations
2. Review Netlify Functions logs for specific errors
3. Verify each step in this checklist
4. Check Firebase Console for database activity

---

**Estimated Time:** 15-20 minutes for complete setup and testing

**Status:** [ ] Not Started  [ ] In Progress  [ ] Complete ✅
