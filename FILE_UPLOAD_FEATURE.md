# 📎 Fitur Upload File pada Form Kontak

## Overview

Fitur upload file telah ditambahkan pada form kontak untuk memudahkan HRD atau recruiter mengirimkan dokumen seperti:
- Jadwal interview
- Surat panggilan
- Dokumen persyaratan
- File pendukung lainnya

---

## ✨ Fitur Utama

### 1. **Multiple File Upload**
- User dapat mengunggah beberapa file sekaligus
- Drag & drop atau klik untuk memilih file

### 2. **File Validation**
- **Ukuran maksimal**: 25MB per file (Batas Email Gmail)
- **Format yang didukung**: 
  - PDF (.pdf)
  - Microsoft Word (.doc, .docx)
  - Gambar (.jpg, .jpeg, .png)
  - Text (.txt)
  - Archive (.zip)

### 3. **File Preview**
- Menampilkan daftar file yang akan dikirim
- Menampilkan nama file dan ukuran
- Tombol hapus untuk setiap file

### 4. **Email Integration**
- File otomatis dilampirkan ke email
- Informasi file ditampilkan di email
- Support untuk multiple attachments

---

## 🎯 Cara Penggunaan

### Untuk User (Pengirim Pesan):

1. **Buka halaman Contact**
   - Navigasi ke `/contact`
   - Pilih tab "📝 Hubungi via Web"

2. **Isi Form**
   - Nama Lengkap
   - Email
   - Subjek
   - Pesan

3. **Upload File (Opsional)**
   - Klik area upload file atau drag & drop
   - Pilih satu atau beberapa file (max 25MB/file)
   - File akan muncul dalam daftar preview
   - **Catatan**: Untuk file > 25MB (hingga 1GB), harap upload ke Google Drive/Dropbox dan sertakan link di pesan.

4. **Hapus File (jika perlu)**
   - Klik tombol `✕` di samping file untuk menghapus

5. **Kirim**
   - Klik tombol "✉️ Kirim Pesan"
   - Tunggu konfirmasi sukses

### Untuk Admin (Penerima Email):

Email yang diterima akan berisi:
- Informasi pengirim (nama, email, subjek)
- Isi pesan
- **📎 File Terlampir**: Daftar dan jumlah file
- File attachment yang dapat langsung diunduh

---

## 🔧 Technical Details

### Frontend (ContactForm.js)

```javascript
// State Management
const [files, setFiles] = useState([]);

// File Handler
const handleFileChange = (e) => {
  const selectedFiles = Array.from(e.target.files);
  const maxSize = 25 * 1024 * 1024; // 25MB (Gmail Limit)
  
  // Validasi ukuran
  const validFiles = selectedFiles.filter(file => {
    if (file.size > maxSize) {
      setStatus(`❌ File "${file.name}" terlalu besar.`);
      return false;
    }
    return true;
  });
  
  setFiles(prevFiles => [...prevFiles, ...validFiles]);
};

// Form Submission dengan FormData
const formDataToSend = new FormData();
formDataToSend.append('name', formData.name);
formDataToSend.append('email', formData.email);
// ... other fields
files.forEach((file) => {
  formDataToSend.append('files', file);
});
```

### Backend (API Route)

```javascript
// Parsing FormData
const formData = await request.formData();
const files = formData.getAll('files');

// Process Attachments
const attachments = [];
for (const file of files) {
  const buffer = Buffer.from(await file.arrayBuffer());
  attachments.push({
    filename: file.name,
    content: buffer,
    contentType: file.type,
  });
}

// Send Email with Attachments
await transporter.sendMail({
  ...mailOptions,
  attachments: attachments,
});
```

---

## 🔒 Security & Limitations

### Validasi:
- ✅ File size validation (client-side)
- ✅ File type restriction (accept attribute)
- ✅ Server-side file processing

### Limitasi:
- **Ukuran max**: 25MB per file (Email Limit)
- **Format**: Hanya format yang ditentukan
- **Jumlah**: Tidak ada batas jumlah file, tapi perhatikan total size

### Security Best Practices:
- File di-buffer di server, tidak disimpan permanen
- File langsung dikirim via email
- Tidak ada file storage di server

---

## 📧 Email Configuration

Pastikan environment variables sudah dikonfigurasi:

```env
GMAIL_USER=your-email@gmail.com
GMAIL_PASSWORD=your-app-password
```

**Catatan**: Gunakan App Password untuk Gmail, bukan password biasa.

---

## 🎨 UI/UX Features

### File Upload Area:
- Dashed border warna brand (#667eea)
- Background transparan dengan hint color
- Clear instructions dan file format info

### File List Preview:
- Card style dengan background abu-abu terang
- Nama file dengan ellipsis untuk nama panjang
- Ukuran file dalam KB
- Remove button dengan hover effect

### Status Messages:
- Success: Green background
- Error: Red background
- Auto-dismiss setelah 5 detik

---

## 🧪 Testing

### Test Cases:

1. **Upload Single File**
   - ✓ File < 25MB
   - ✓ Format valid

2. **Upload Multiple Files**
   - ✓ Beberapa file sekaligus
   - ✓ Semua valid

3. **File Validation**
   - ✓ File > 25MB ditolak
   - ✓ Error message ditampilkan

4. **Remove File**
   - ✓ File bisa dihapus sebelum submit
   - ✓ List update correctly

5. **Form Submission**
   - ✓ Dengan file
   - ✓ Tanpa file (opsional)
   - ✓ Email terkirim dengan attachment

---

## 📝 Future Improvements

Potensi pengembangan:
- [ ] Drag & drop UI yang lebih advanced
- [ ] Image preview untuk file gambar
- [ ] Progress bar untuk upload
- [ ] Total file size indicator
- [ ] Virus scanning integration

---

## 🐛 Troubleshooting

### File tidak ter-upload:
- Check ukuran file (max 25MB)
- Verify format file yang didukung
- Lihat console untuk error messages

### Email tidak ada attachment:
- Pastikan SMTP configuration benar
- Check server logs
- Verify file berhasil di-process

### File terlalu besar:
- Compress file terlebih dahulu
- Split file besar menjadi beberapa email
- Gunakan cloud storage dan kirim link

---

**Fitur ini sudah LIVE di**: https://portofolio-cv-next.vercel.app/contact

Deployment akan otomatis setelah push ke GitHub! 🚀
