# Quick Setup: Formspree (5 Minutes)

## 🚀 Fastest Way to Receive Form Submissions

### Step 1: Sign Up (2 minutes)

1. Go to: **https://formspree.io/**
2. Click "Get Started" or "Sign Up"
3. Create free account (email + password)

### Step 2: Create Form (1 minute)

1. Click "New Form" button
2. Name: `Corporate Training Requests`
3. Copy your **Form ID** (looks like: `xyzabc123`)

### Step 3: Update Code (2 minutes)

I'll update the code for you! Just give me your Form ID, or:

**Open:** `src/js/corporate-training-form.js`

**Find this section (around line 30):**
```javascript
// Simulate form submission (replace with actual API call)
setTimeout(() => {
    // Log form data (in production, send to backend)
    console.log('Corporate Training Request:', data);
    
    // Show success message
    showSuccessMessage();
    
    // Reset form
    form.reset();
    
    // Restore button
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnText;
}, 2000);
```

**Replace with:**
```javascript
// Send to Formspree
fetch('https://formspree.io/f/YOUR_FORM_ID_HERE', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
})
.then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(result => {
    console.log('Success:', result);
    showSuccessMessage();
    form.reset();
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnText;
})
.catch(error => {
    console.error('Error:', error);
    alert('Something went wrong. Please try again or contact us directly.');
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnText;
});
```

**Important:** Replace `YOUR_FORM_ID_HERE` with your actual Formspree form ID!

### Step 4: Test! (30 seconds)

1. Refresh your website
2. Fill out the form
3. Submit
4. Check your email! 📧

---

## 📧 What You'll Receive

Every form submission will be emailed to you with:
- Full Name
- Email Address
- Phone Number
- Training Type
- Training Area
- Company Name (if corporate)
- Team Size (if corporate)
- Employment Status (if individual)
- Career Goal (if individual)
- Skill Level
- Goals Description

---

## 🎯 Formspree Dashboard

You can also view all submissions in your Formspree dashboard:
- https://formspree.io/forms

Features:
- ✅ View all submissions
- ✅ Export to CSV
- ✅ Spam filtering
- ✅ Email notifications
- ✅ Webhook integrations

---

## 💰 Pricing

**Free Tier:**
- 50 submissions/month
- Email notifications
- Spam filtering
- Perfect for testing!

**Paid Plans:**
- Start at $10/month
- 1,000+ submissions
- More features

---

## 🔧 Alternative: Just Give Me Your Form ID

If you create a Formspree account and give me your form ID, I can update the code for you right now! Just reply with:

```
My Formspree Form ID: xyzabc123
```

And I'll update the code immediately! 🚀
