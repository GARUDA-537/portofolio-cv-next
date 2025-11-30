# 📧 Quick Reference - Setup Email SMTP

## ⚡ Quick Start (5 Menit)

### 1. Buka Google Account Settings
```
https://myaccount.google.com/ → Security
```

### 2. Enable 2-Step Verification
- Jika belum aktif, setup sekarang

### 3. Generate App Password
```
Security → App passwords 
→ Select "Mail" & "Windows Computer"
→ Generate
→ Copy 16-character password
```

### 4. Edit `.env.local`
```env
GMAIL_USER=your-email@gmail.com
GMAIL_PASSWORD=xxxx xxxx xxxx xxxx
```

### 5. Restart Server
```bash
npm run dev
```

### 6. Test
```
http://localhost:3000/contact
→ Fill form → Submit
→ Check inbox
```

---

## 📍 UI Components

### Web Form Tab
- Name input
- Email input
- Subject input
- Message textarea
- Submit button dengan loading state
- Status messages (success/error)

### Gmail Tab
- Info text
- "Buka Gmail Sekarang" button
- Opens Gmail compose dengan pre-filled recipient

---

## 🛠️ Configuration Files

### `.env.local` (Create if not exists)
```env
GMAIL_USER=your-email@gmail.com
GMAIL_PASSWORD=your-16-char-app-password
```

### `package.json` (Already updated)
```json
{
  "dependencies": {
    "nodemailer": "^6.x.x"
  }
}
```

---

## 📄 File Locations

| File | Purpose |
|------|---------|
| `src/components/ContactForm.js` | React component dengan 2 tab |
| `src/app/api/send-email/route.js` | SMTP API endpoint |
| `src/app/contact/page.js` | Contact page utama |
| `.env.local` | Gmail credentials |

---

## ✅ Testing Checklist

```javascript
// Test case 1: Submit form
POST /api/send-email {
  name: "Test User",
  email: "test@example.com",
  subject: "Test Subject",
  message: "Test message"
}
// Expected: Email received in inbox within 5 seconds

// Test case 2: Gmail button
Click "📧 Buka Gmail Sekarang"
// Expected: Gmail opens in new tab with draft compose

// Test case 3: Form validation
Submit with empty fields
// Expected: Browser shows "required" validation

// Test case 4: Invalid email
Submit with invalid email format
// Expected: Error message "Please enter valid email"
```

---

## 🚨 Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| "Konfigurasi belum diatur" | Check `.env.local` filled correctly |
| Email goes to Spam | Whitelist sender in Gmail settings |
| App Password rejected | Pastikan 2FA enabled, try generate ulang |
| SMTP timeout | Check internet connection, Gmail server status |
| No confirmation email sent | Check spam folder for confirmation |

---

## 🌐 Deployment

### Vercel Setup
1. Go to vercel.com/dashboard
2. Select project → Settings → Environment Variables
3. Add:
   - `GMAIL_USER` = your-email@gmail.com
   - `GMAIL_PASSWORD` = your-app-password
4. Save & Redeploy

### Test on Vercel
```
https://your-domain.vercel.app/contact
→ Test form
→ Verify email received
```

---

## 📚 Reference Files

- **Setup Guide**: `SMTP_SETUP_GUIDE.md` (Full detailed guide)
- **Feature Summary**: `EMAIL_FEATURE_SUMMARY.md` (Feature overview)
- **Deployment Guide**: `VERCEL_DEPLOYMENT_SIMPLE.md` (Vercel instructions)

---

## 🎓 Code Snippets

### Customize Email Template
```javascript
// Edit src/app/api/send-email/route.js
const mailOptions = {
  from: `"${name}" <${process.env.GMAIL_USER}>`,
  to: to,
  subject: `[Portofolio] ${subject}`, // Customize prefix
  html: `<!-- Custom HTML template here -->`
}
```

### Add More Form Fields
```javascript
// Add to ContactForm.js state
const [formData, setFormData] = useState({
  name: '',
  email: '',
  subject: '',
  message: '',
  phone: '', // Add new field
});
```

### Add Rate Limiting
```javascript
// In route.js, add at start
const clientIP = request.headers.get('x-forwarded-for');
const emailCount = await checkDailyLimit(clientIP);
if (emailCount > 10) return error('Too many requests');
```

---

## 📞 Support Info

If issue persists:
1. Check browser console (F12) untuk error details
2. Check server logs untuk API errors
3. Verify Gmail settings at myaccount.google.com
4. Read full guide: `SMTP_SETUP_GUIDE.md`

---

**Status**: ✅ Ready for Production
**Last Updated**: November 30, 2025
**GitHub**: https://github.com/GARUDA-537/portofolio-cv-next
