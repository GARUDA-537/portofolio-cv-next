# 📚 Panduan Deployment ke Vercel

Panduan lengkap untuk deploy portofolio Next.js Anda ke Vercel dengan mudah.

## ⏱️ Waktu Persiapan: ~5 menit
## 🚀 Waktu Deploy: ~2 menit

---

## Opsi 1: Deploy via GitHub (RECOMMENDED - Paling Mudah!)

### Langkah 1: Siapkan GitHub Repository

```bash
# Jika belum punya repo
git init
git add .
git commit -m "Initial commit: Portofolio Next.js"

# Tambahkan remote GitHub
git remote add origin https://github.com/USERNAME/portofolio-next.git
git branch -M main
git push -u origin main
```

### Langkah 2: Connect ke Vercel

1. **Buka https://vercel.com**
   - Klik **"Sign Up"** atau **"Log In"** dengan akun GitHub/GitLab

2. **Create New Project**
   - Klik **"Add New"** → **"Project"**
   - Klik **"Import Git Repository"**

3. **Pilih Repository**
   - Cari dan pilih repo **portofolio-next**
   - Klik **"Import"**

4. **Configure Project**
   - Framework Preset: **Next.js** (auto-detect ✓)
   - Build Command: `next build` (default)
   - Output Directory: `.next` (default)
   - Klik **"Deploy"**

5. **✅ Selesai!**
   - Website Anda live di domain Vercel otomatis
   - Setiap push ke GitHub = auto-redeploy

---

## Opsi 2: Deploy via Vercel CLI

### Langkah 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Langkah 2: Deploy

```bash
cd d:\laragon\www\portofolio-next

# Deploy
vercel

# Ikuti prompts:
# - Log in dengan GitHub/GitLab/Email
# - "Link to existing project?" → No
# - "What's your project's name?" → portofolio-next
# - "In which directory is your code?" → ./
# - "Want to modify these settings?" → No
```

### Langkah 3: Verifikasi

```bash
# Output akan menampilkan deployment URL
# Contoh: https://portofolio-next.vercel.app
```

---

## Setup Custom Domain (Opsional)

### Pakai Domain Sendiri (contoh: portfolio.com)

1. **Di Dashboard Vercel**
   ```
   Project → Settings → Domains → Add Domain
   ```

2. **Input domain Anda**
   ```
   portfolio.com
   www.portfolio.com
   ```

3. **Update DNS Records**
   - Provider: Namecheap, GoDaddy, Niagahoster, dll
   - Tambah record A:
     ```
     Name: @
     Type: A
     Value: 76.76.19.89
     ```
   - Atau pakai CNAME (lihat instruksi Vercel)

4. **Tunggu Propagasi**
   ```
   Biasanya 5 menit - 48 jam
   Cek status: https://dnschecker.org
   ```

---

## Environment Variables (Jika Perlu)

Jika ingin tambah API key atau konfigurasi khusus:

### Local Development

1. Create file `.env.local`:
   ```
   NEXT_PUBLIC_API_URL=https://api.example.com
   NEXT_PUBLIC_SITE_NAME=Portfolio Saya
   ```

2. Gunakan di component:
   ```javascript
   const apiUrl = process.env.NEXT_PUBLIC_API_URL;
   ```

### Production (Vercel)

1. Di Dashboard Vercel → Project → Settings → Environment Variables
2. Add variable:
   ```
   Name: NEXT_PUBLIC_API_URL
   Value: https://api.example.com
   ```
3. Klik **"Add" → "Deploy"**

---

## Update & Maintenance

### Auto-Deploy dari GitHub

Setiap kali push ke branch main:
```bash
git add .
git commit -m "Update portfolio"
git push origin main
```
→ Vercel otomatis rebuild & deploy!

### Manual Update Data

1. Edit file di `src/data/`
   - `profile.js` - Info profil
   - `skills.js` - Keahlian
   - `projects.js` - Proyek
   - `education.js` - Pendidikan
   - `certificates.js` - Sertifikasi

2. Push ke GitHub
3. Vercel otomatis redeploy

### Preview Deployment

Sebelum merge ke main, test di preview:
1. Buat branch baru: `git checkout -b fitur-baru`
2. Commit & push: `git push origin fitur-baru`
3. Create Pull Request di GitHub
4. Vercel membuat preview URL otomatis
5. Review preview sebelum merge

---

## Monitoring & Analytics

### Traffic & Performance

**Di Vercel Dashboard:**
- View Analytics
- Monitor Build Status
- Check Error Logs
- View Deployment History

### Custom Analytics (Opsional)

Add Google Analytics ke `src/app/layout.js`:

```javascript
// Tambahkan di component
<Script 
  strategy="afterInteractive"
  src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
/>
<Script strategy="afterInteractive">
  {`window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_ID');`}
</Script>
```

---

## Troubleshooting

### Build Failed

```
Error: Module not found
```

**Solusi:**
```bash
# Clear dependencies
rm -rf node_modules
npm install

# Build lokal
npm run build

# Jika sukses, push ke GitHub
git add .
git commit -m "Fix build"
git push origin main
```

### Domain Tidak Terhubung

**Cek:**
1. DNS record sudah benar?
2. Nameserver sudah update?
3. Tunggu propagasi (bisa 48 jam)

**Test DNS:**
- https://dnschecker.org
- https://mxtoolbox.com

### Vercel Deployment Stuck

1. Go to Vercel Dashboard
2. Click project
3. Click "Redeploy" atau "Cancel"
4. Check build logs untuk error details

### Port Conflict Lokal

```bash
# Jika port 3000 digunakan
npm run dev -- -p 3001
```

---

## Performance Optimization

### Already Optimized:
- ✅ Image optimization otomatis
- ✅ Code splitting per halaman
- ✅ CSS minification
- ✅ JavaScript compression

### Cek Performance:

```bash
# Lighthouse score
npm install -g @wooorm/starry-night
vercel inspect

# Atau via browser
Dev Tools → Lighthouse
```

---

## Security Checklist

- ✅ HTTPS otomatis (Vercel)
- ✅ No sensitive data di code
- ✅ Environment variables untuk secrets
- ✅ Static hosting (no backend = no vulnerability)

---

## Backup & Version Control

### GitHub Backup

```bash
# Jangan lupa commit
git add .
git commit -m "Update portfolio content"
git push origin main

# Rollback jika perlu
git log --oneline
git revert COMMIT_HASH
```

### Vercel Deployment History

1. Dashboard → Deployments
2. Lihat semua versi
3. Instant rollback available

---

## Tips & Tricks

### 1. Develop Lokal Terlebih Dahulu

```bash
npm run dev
# Test di http://localhost:3000 sebelum push
```

### 2. Use Staging Environment

```bash
# Create staging branch
git checkout -b staging
git push origin staging

# Deploy staging ke Vercel
# Then test sebelum merge ke main
```

### 3. Automated Testing

Tambah di `package.json`:
```json
{
  "scripts": {
    "test": "next lint && next build"
  }
}
```

### 4. SEO Optimization

- Update meta tags di `layout.js`
- Add sitemap: `/public/sitemap.xml`
- Add robots.txt: `/public/robots.txt`

---

## Next Steps Setelah Deploy

1. ✅ Share portfolio link dengan recruiter
2. ✅ Add ke LinkedIn profile
3. ✅ Share di Twitter/Instagram
4. ✅ Monitor analytics
5. ✅ Update konten secara berkala

---

## Support & Help

**Jika ada masalah:**

1. **Vercel Docs**: https://vercel.com/docs
2. **Next.js Docs**: https://nextjs.org/docs
3. **GitHub Issues**: Cek solution di existing issues
4. **Stack Overflow**: Tag: `nextjs`, `vercel`

---

## Deployment Summary

| Aspek | Status |
|-------|--------|
| **Framework** | Next.js 16 ✅ |
| **Hosting** | Vercel ✅ |
| **Domain** | Custom domain support ✅ |
| **SSL/HTTPS** | Automatic ✅ |
| **CDN** | Global CDN ✅ |
| **Uptime SLA** | 99.95% ✅ |
| **Cost** | Free tier available ✅ |

---

**🎉 Selamat! Portfolio Anda sudah live!**

Enjoy dan terus update konten Anda! 🚀
