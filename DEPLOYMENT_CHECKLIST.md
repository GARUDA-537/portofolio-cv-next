# Checklist Deployment untuk Fitur Email

Agar fitur email berfungsi dengan baik saat di-deploy (Vercel/Netlify), pastikan langkah-langkah berikut sudah dilakukan:

## 1. Environment Variables
Pastikan Anda telah menambahkan Environment Variables berikut di dashboard deployment Anda (Settings > Environment Variables):

| Key | Value | Deskripsi |
|-----|-------|-----------|
| `GMAIL_USER` | `email-anda@gmail.com` | Email Gmail yang digunakan untuk mengirim pesan. |
| `GMAIL_PASSWORD` | `xxxx xxxx xxxx xxxx` | **App Password** (bukan password login biasa). |

### Cara Membuat App Password Gmail:
1. Buka [Google Account Security](https://myaccount.google.com/security).
2. Pastikan **2-Step Verification** (Verifikasi 2 Langkah) sudah **ON**.
3. Cari menu **App Passwords** (Sandi Aplikasi).
4. Buat password baru dengan nama "Portfolio".
5. Copy 16 digit password yang muncul (tanpa spasi).

## 2. Testing
Setelah deploy, coba kirim pesan melalui form kontak.
Jika gagal:
1. Buka tab **Logs** di dashboard Vercel.
2. Cari pesan error yang diawali dengan `❌`.
3. Pesan error tersebut akan memberitahu apa yang salah (misal: "Missing Environment Variables" atau "SMTP Verification failed").

## 3. Troubleshooting Umum
- **Error: Invalid login**: Pastikan `GMAIL_USER` benar dan `GMAIL_PASSWORD` adalah App Password yang valid (bukan password login email).
- **Error: Missing credentials**: Environment variables belum di-set di Vercel.
- **Timeout**: Koneksi ke Gmail lambat. Coba lagi. Kode sudah dioptimalkan menggunakan port 465 untuk koneksi yang lebih stabil.
