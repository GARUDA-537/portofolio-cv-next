# 🚀 Quick Start Guide - Portofolio Next.js

Panduan cepat untuk menjalankan dan deploy portofolio Anda dalam **5 menit**!

## Step 1: Persiapan (1 menit)

```bash
# Navigate ke folder project
cd d:\laragon\www\portofolio-next

# Install dependencies (jika belum)
npm install
```

## Step 2: Test Lokal (2 menit)

```bash
# Jalankan development server
npm run dev

# Buka browser ke http://localhost:3000
# Tekan CTRL+C untuk stop server
```

✅ Jika tampil sempurna, lanjut ke step 3

## Step 3: Update Data Anda (1 menit)

Edit file berikut dengan informasi Anda:

### 1. Profile (`src/data/profile.js`)
```javascript
export const profile = {
  name: 'Nama Anda',
  title: 'Judul Profesi',
  email: 'email@anda.com',
  phone: '08XX-XXXX-XXXX',
  address: 'Kota, Negara',
  // ... etc
};
```

### 2. Skills (`src/data/skills.js`)
Tambah keahlian Anda di array `skills`

### 3. Projects (`src/data/projects.js`)
Tambah proyek di array `projects`

### 4. Education (`src/data/education.js`)
Update info pendidikan Anda

### 5. Certificates (`src/data/certificates.js`)
Tambah sertifikasi yang Anda miliki

## Step 4: Push ke GitHub (1 menit)

```bash
# Siapkan git
git add .
git commit -m "Update portfolio with my data"
git push origin main
```

## Step 5: Deploy ke Vercel (AUTO!)

1. **Buka https://vercel.com**
2. **Sign up dengan GitHub** (jika belum)
3. **Import Repository** → Pilih `portofolio-next`
4. **Deploy!** → Tunggu 1-2 menit

✅ **SELESAI!** Website Anda live di vercel.app domain

---

## 📝 Customization Tips

### Ubah Warna
Edit `src/app/globals.css`, ganti `#667eea` dengan warna pilihan

### Tambah Gambar
1. Upload ke `public/images/`
2. Reference di component: `src="/images/nama-file.jpg"`

### Ubah Logo/Emoji
Edit di `src/components/Navbar.js` dan halaman lain

---

## 🆘 Troubleshooting

### ❌ `npm install` error
```bash
# Clear cache dan retry
npm cache clean --force
npm install
```

### ❌ Build error lokal
```bash
# Delete .next folder
rm -rf .next
npm run build
```

### ❌ Port 3000 sudah digunakan
```bash
# Gunakan port lain
npm run dev -- -p 3001
```

---

## 📋 Checklist Sebelum Deploy

- [ ] Data profile sudah diupdate
- [ ] Skills sudah ditambahkan
- [ ] Proyek sudah ditambahkan
- [ ] Email & contact info benar
- [ ] Social media links benar
- [ ] Lokal test berhasil: `npm run dev`
- [ ] Build berhasil: `npm run build`
- [ ] Commit & push ke GitHub

---

## 🎯 Setelah Deploy

1. ✅ Copy Vercel URL
2. ✅ Share di LinkedIn
3. ✅ Share di Portfolio/Resume
4. ✅ Share di GitHub profile
5. ✅ Monitor analytics
6. ✅ Update konten berkala

---

## 📚 Referensi

- **Deployment Guide**: Baca `DEPLOYMENT_GUIDE.md`
- **Full README**: Baca `README.md`
- **Next.js Docs**: https://nextjs.org/docs
- **Vercel Docs**: https://vercel.com/docs

---

## ✨ Pro Tips

### 1. Preview Deployment
```bash
git checkout -b fix/update
# ... edit files ...
git push origin fix/update
# Buka GitHub → Create Pull Request
# Vercel akan create preview URL
```

### 2. Automatic Redeployment
Setiap kali push ke main, Vercel otomatis rebuild!

### 3. Custom Domain
After deploy → Vercel Dashboard → Settings → Domains → Add Custom Domain

---

**🎉 Anda siap! Mulai dengan step 1 sekarang juga!**

Jika ada pertanyaan, cek documentation atau tanya di GitHub Discussions.

**Happy coding! 🚀**
