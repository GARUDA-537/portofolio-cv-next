# Setup Fitur Email SMTP - Contact Form

## 📧 Gambaran Fitur

Fitur contact di website sekarang memiliki **2 opsi** untuk menghubungi:

1. **📝 Hubungi via Web Form** - Form yang mengirim email langsung ke inbox Anda melalui SMTP
2. **📧 Buka Gmail** - Tombol untuk langsung membuka Gmail dan mengirim email ke Anda

---

## 🔧 Setup Konfigurasi SMTP (Gmail)

### Langkah 1: Enable 2-Step Verification

1. Buka [Google Account Settings](https://myaccount.google.com/)
2. Pilih **Security** di sidebar kiri
3. Cari bagian **"2-Step Verification"**
4. Jika belum aktif, klik **"2-Step Verification"** dan ikuti instruksi

### Langkah 2: Buat App Password

1. Kembali ke [Google Account Settings](https://myaccount.google.com/)
2. Pilih **Security** di sidebar kiri
3. Scroll ke bawah, cari **"App passwords"** (hanya muncul jika 2FA sudah aktif)
4. Klik **"App passwords"**
5. Pilih:
   - **Select app**: Mail
   - **Select device**: Windows Computer (atau device Anda)
6. Klik **"Generate"**
7. Google akan menampilkan password 16 karakter - **COPY password ini**

### Langkah 3: Setup `.env.local`

1. Buka file `.env.local` di root project:
   ```
   d:\laragon\www\portofolio-next\.env.local
   ```

2. Isi dengan email dan app password:
   ```env
   GMAIL_USER=your-email@gmail.com
   GMAIL_PASSWORD=xxxx xxxx xxxx xxxx
   ```

3. **PENTING**: Jangan simpan app password ini di Git! File `.env.local` sudah di `.gitignore`

### Langkah 4: Restart Dev Server

```bash
npm run dev
```

---

## 🎯 Cara Kerja

### Web Form (Form Method)
- User mengisi form dengan nama, email, subject, dan pesan
- Ketika submit, data dikirim ke `/api/send-email`
- API akan mengirim email ke inbox Anda via SMTP Gmail
- Pengirim akan menerima konfirmasi email bahwa pesan sudah diterima

### Gmail Method
- User klik tombol "Buka Gmail Sekarang"
- Browser akan membuka Gmail dalam tab baru dengan draft email
- Email siap untuk diedit dan dikirim langsung dari Gmail

---

## 📋 Testing Form

1. Buka http://localhost:3000/contact
2. Pilih tab **"📝 Hubungi via Web"**
3. Isi form dengan data test
4. Klik **"✉️ Kirim Pesan"**
5. Cek inbox Anda - email akan masuk dalam beberapa detik

### Troubleshooting Testing

**Error: "Konfigurasi email belum diatur"**
- Pastikan `.env.local` sudah diisi dengan benar
- Restart dev server setelah edit `.env.local`

**Email tidak masuk**
- Cek folder Spam/Junk di Gmail
- Pastikan 2-Step Verification sudah aktif
- Pastikan App Password benar (bukan regular password)

---

## 🚀 Deployment ke Vercel

Saat deploy ke Vercel, tambahkan environment variables:

1. Buka https://vercel.com/dashboard
2. Pilih project **portofolio-cv-next**
3. Klik **Settings → Environment Variables**
4. Tambahkan:
   - Key: `GMAIL_USER` | Value: `your-email@gmail.com`
   - Key: `GMAIL_PASSWORD` | Value: `xxxx xxxx xxxx xxxx`
5. Klik **Save**
6. Redeploy project

---

## 📁 File Structure

```
src/
├── app/
│   ├── contact/
│   │   └── page.js          # Contact page dengan 2 opsi
│   └── api/
│       └── send-email/
│           └── route.js     # API untuk kirim email via SMTP
├── components/
│   └── ContactForm.js       # Component contact form
└── data/
    └── profile.js           # Email dari profile.js

.env.local                    # Environment variables (di .gitignore)
```

---

## 🔐 Security Notes

1. **Never commit `.env.local`** - File sudah di `.gitignore`
2. **Gunakan App Password, bukan regular password**
3. **Enable 2FA** untuk keamanan akun Google
4. **Rate limiting** - Pertimbangkan menambahkan rate limiting untuk production

---

## 💡 Tips & Trik

### Kustomisasi Email Template
Edit file `src/app/api/send-email/route.js` untuk mengubah template email:
- Baris 57-90: Template email ke pemilik portfolio
- Baris 93-130: Template email konfirmasi ke pengirim

### Tambah Validasi Lebih Ketat
```javascript
// Di ContactForm.js, tambahkan validasi custom
if (message.length < 10) {
  setStatus('Pesan minimal 10 karakter');
  return;
}
```

### Tambah Attachments
```javascript
// Di route.js, tambahkan attachments
attachments: [
  {
    filename: 'document.pdf',
    path: '/path/to/document.pdf'
  }
]
```

---

## ❓ FAQ

**Q: Apakah saya bisa menggunakan email selain Gmail?**
A: Ya, ubah `service: 'gmail'` ke email provider lain di `route.js`

**Q: Berapa limit email yang bisa dikirim?**
A: Gmail memiliki limit ~500 email per hari untuk regular accounts

**Q: Bagaimana jika lupa app password?**
A: Generate ulang dari Google Account Settings → Security → App passwords

**Q: Bisa kirim attachment dari form?**
A: Bisa, tapi perlu menambahkan file upload input dan handle file di API

---

## 📞 Support

Jika ada masalah:
1. Cek console browser (F12) untuk error message
2. Cek server logs saat development
3. Pastikan semua env variables sudah benar
4. Restart dev server

Selamat! Fitur SMTP email sudah siap digunakan! 🎉
