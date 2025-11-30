# 🚀 Deploy ke Vercel - Panduan Step-by-Step

Selamat! Kode Anda sudah di GitHub. Sekarang tinggal deploy ke Vercel dalam **2 menit**!

---

## ✅ Prerequisites

- ✓ Kode sudah di-push ke GitHub (https://github.com/GARUDA-537/portofolio-cv-next)
- ✓ GitHub account Anda
- ✓ Akses internet

---

## 🎯 Cara Deploy ke Vercel (3 Langkah!)

### **LANGKAH 1: Buka Vercel**

1. Buka https://vercel.com
2. Klik **"Sign Up"** atau **"Log In"**
3. Pilih **"Continue with GitHub"**
4. Authorize Vercel untuk access repository Anda

### **LANGKAH 2: Import Repository**

1. Setelah login, klik **"Add New"** → **"Project"**
2. Atau buka langsung: https://vercel.com/new
3. Klik **"Import Git Repository"**
4. Search: `portofolio-cv-next`
5. Klik **"Import"** pada repository yang ditemukan

### **LANGKAH 3: Deploy!**

Vercel akan auto-detect Next.js:

```
Configure Project
├─ Framework Preset: Next.js ✓ (sudah auto-detect)
├─ Build Command: next build ✓ (default)
├─ Output Directory: .next ✓ (default)
├─ Environment Variables: (skip, tidak perlu)
└─ Click "Deploy"
```

---

## ⏱️ Proses Deploy

1. Klik **"Deploy"** → Loading...
2. Vercel akan:
   - Clone repository dari GitHub
   - Install dependencies (`npm install`)
   - Build project (`npm run build`)
   - Deploy ke edge servers global
3. **Tunggu 1-2 menit**... ✓ **DONE!**

---

## 🎉 Website Sudah LIVE!

Setelah deploy selesai, Anda akan lihat:

```
✓ Deployment Complete!

Your site is live at:
https://portofolio-cv-next-XXXXX.vercel.app
```

---

## 📋 Vercel Deployment Checklist

### Saat Deploy:
- [ ] Framework: Next.js (auto-detect)
- [ ] Build Command: `next build`
- [ ] Output Directory: `.next`
- [ ] Environment Variables: (skip)

### Hasil Deploy:
- [ ] See "Deployment Successful" message
- [ ] Get Vercel domain URL
- [ ] Website accessible dari public

### Test Website:
- [ ] Akses URL dari browser ✓
- [ ] Check semua halaman berfungsi ✓
- [ ] Test responsif di mobile ✓

---

## 🔗 Setelah Deploy (Optional tapi Recommended)

### 1. Setup Custom Domain (Optional)

Jika punya domain sendiri (contoh: portfolio.com):

**Di Vercel Dashboard:**
```
Project → Settings → Domains → Add Domain
```

**Masukkan domain:**
```
portfolio.com
www.portfolio.com
```

**Update DNS di registrar (Niagahoster, GoDaddy, dll):**
```
Type: A Record
Name: @
Value: 76.76.19.89

Atau pakai CNAME (lihat instruksi Vercel)
```

**Tunggu propagasi:** 5 menit - 48 jam

---

### 2. Monitor Deployment

**Di Vercel Dashboard:**
```
Project → Deployments
```

Bisa lihat:
- ✓ Deployment history
- ✓ Build logs
- ✓ Performance metrics
- ✓ Error logs (jika ada)

---

### 3. Setup Auto-Redeploy

**Sudah otomatis!** Setiap kali push ke GitHub:

```bash
git add .
git commit -m "Update content"
git push origin main
# → Vercel otomatis rebuild & deploy!
```

Tidak perlu setup apapun, sudah enabled by default.

---

## ✨ Vercel Features (Bonus!)

### Included in Free Tier:
- ✅ Free hosting selamanya
- ✅ Auto SSL/HTTPS
- ✅ Global CDN
- ✅ Auto-redeploy dari GitHub
- ✅ Unlimited deployments
- ✅ Analytics dashboard
- ✅ Custom domains
- ✅ 99.95% uptime SLA

---

## 🆘 Troubleshooting

### ❌ Build Failed

**Check build logs:**
1. Vercel Dashboard → Deployments
2. Klik deployment yang failed
3. Lihat error message di "Logs"

**Common issues:**
```
- Missing dependencies: npm install
- Port error: Check next.config.js
- Import error: Check file paths
```

### ❌ Deployment stuck

**Solusi:**
```
1. Go to Vercel Dashboard
2. Project Settings → General
3. Click "Redeploy"
4. Pilih branch: main
5. Click "Redeploy"
```

### ❌ Domain tidak terhubung

**Check:**
```
1. DNS records sudah benar?
2. Propagasi selesai? (cek: dnschecker.org)
3. Vercel domain settings correct?
```

---

## 📊 Performance Setelah Deploy

**Expected Metrics:**
```
Load Time: < 1 detik
Lighthouse Score: 90+
Uptime: 99.95%
```

**Monitor di Vercel:**
```
Dashboard → Analytics → Web Vitals
```

---

## 🔄 Workflow Setelah Deploy

### Setiap kali update data:

```bash
# 1. Edit file di src/data/
nano src/data/profile.js

# 2. Test lokal
npm run dev

# 3. Commit & push
git add .
git commit -m "Update profile"
git push origin main

# 4. Vercel auto-redeploy ✓
# Tunggu 1-2 menit... live!
```

### Check deployment status:

```
1. Vercel Dashboard → Deployments
2. Lihat latest deployment
3. Check status: "Ready", "Building", atau "Error"
```

---

## 🎯 Langkah Demi Langkah (Visual)

```
┌─────────────────────────────────────┐
│ 1. Buka vercel.com                  │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│ 2. Sign in dengan GitHub            │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│ 3. Add New Project                  │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│ 4. Import Git Repository            │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│ 5. Select portofolio-cv-next        │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│ 6. Click Import                     │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│ 7. Configure (auto-detect)          │
│ Framework: Next.js ✓                │
│ Build Command: next build ✓         │
│ Output: .next ✓                     │
└──────────────┬──────────────────────┘
               │
┌──────────────▼──────────────────────┐
│ 8. Click DEPLOY                     │
└──────────────┬──────────────────────┘
               │
        ⏳ Waiting 1-2 min...
               │
┌──────────────▼──────────────────────┐
│ ✅ DEPLOYMENT SUCCESSFUL!           │
│                                     │
│ Live at:                            │
│ portofolio-cv-next-XXXXX.vercel.app │
└─────────────────────────────────────┘
```

---

## 🌐 Share Website Anda!

Setelah live di Vercel:

1. **Share di LinkedIn**
   ```
   Copy URL dari Vercel
   Paste di LinkedIn profile
   Update "Website" field
   ```

2. **Share di Portfolio/Resume**
   ```
   Tambahkan URL ke CV
   ```

3. **Share di Social Media**
   ```
   Twitter, Instagram, Facebook: Bagikan link
   ```

4. **Share ke Recruiter**
   ```
   Email: "Check out my portfolio: [URL]"
   ```

---

## 📝 Setelah Deploy - Checklist

- [ ] Website live di Vercel URL ✓
- [ ] Semua halaman berfungsi ✓
- [ ] Mobile responsive ✓
- [ ] Data terlihat benar ✓
- [ ] Links work properly ✓
- [ ] Social links correct ✓
- [ ] Contact info tersedia ✓
- [ ] Website dapat di-access publik ✓

---

## 🎓 Bonus: Advanced Setup (Optional)

### Analytics Setup

```
1. Vercel Dashboard → Settings → Web Analytics
2. Enable Web Analytics
3. Lihat traffic di Analytics dashboard
```

### Environment Variables (jika ada API)

```
1. Vercel Dashboard → Settings → Environment Variables
2. Add variable (jika diperlukan)
3. Redeploy setelah add variable
```

### Custom Domain (Recommended)

```
1. Buy domain (Niagahoster, Namecheap, dll)
2. Vercel Dashboard → Settings → Domains
3. Add custom domain
4. Update DNS records
5. Wait propagation (1-48 jam)
```

---

## 📞 Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Status Page**: https://vercel-status.com

---

## ✅ SELESAI! 🎉

**Portofolio Anda sekarang LIVE di internet!**

### Share sekarang:
1. Copy Vercel URL
2. Share ke LinkedIn
3. Share ke portfolio/resume
4. Share ke recruiter
5. Celebrate! 🎉

---

## 🚀 Quick Reference

| Action | URL |
|--------|-----|
| Deploy | https://vercel.com/new |
| Dashboard | https://vercel.com/dashboard |
| Settings | https://vercel.com/account/settings |
| Docs | https://vercel.com/docs |

---

**Sukses! Website Anda sudah live di Vercel! 🚀**

Setiap kali update data, cukup push ke GitHub - Vercel akan otomatis redeploy!

Happy coding! 💻✨
