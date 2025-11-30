# Portofolio Next.js - Moch. Farel Islami Akbar

Portofolio CV yang dibangun dengan Next.js dan di-deploy ke Vercel. Modern, cepat, dan mudah di-maintain.

## ✨ Fitur

- 🚀 **Next.js 16** - Framework React terbaru
- 📱 **Fully Responsive** - Sempurna di semua device (mobile, tablet, desktop)
- ✨ **Modern Design** - Gradient, animations, dan UI yang menarik
- ⚡ **Performance** - Optimized images, code splitting, dan fast loading
- 🎯 **SEO Optimized** - Meta tags, sitemap, structured data
- 🔧 **Easy to Customize** - Data static di `src/data/`, mudah di-edit
- 📦 **Zero Dependencies** - No complex npm packages needed
- 🚀 **One-Click Deploy** - Deploy ke Vercel dalam hitungan menit

## 📄 Halaman

| Halaman | Deskripsi |
|---------|-----------|
| **Beranda** | Landing page dengan hero section dan spesialisasi |
| **Tentang Saya** | Profil lengkap, nilai-nilai, dan tujuan karir |
| **Keahlian** | Skills dengan filter kategori dan progress bar |
| **Proyek** | Portfolio proyek dengan deskripsi detail |
| **Pendidikan** | Timeline pendidikan dengan info lengkap |
| **Sertifikasi** | Sertifikat profesional dan penghargaan |
| **Kontak** | Informasi kontak dan social media |

## 🛠️ Teknologi

```
Frontend:
- Next.js 16
- React 19
- CSS3 (No tailwind needed!)

Deployment:
- Vercel (1-click deploy)
- Automatic SSL
- Custom domain support
```

## 🚀 Quick Start

### Setup Lokal

```bash
# Clone / Download repository
cd portofolio-next

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka browser ke http://localhost:3000

### Build untuk Production

```bash
# Build
npm run build

# Test production build
npm start
```

## 🌐 Deploy ke Vercel (Mudah!)

### Metode 1: GitHub Integration (Recommended)

1. Push kode ke GitHub
2. Buka https://vercel.com/new
3. Klik "Import Git Repository"
4. Select repository Anda
5. Framework: **Next.js** (auto-detect)
6. Klik **Deploy**
7. ✅ Selesai! Website live dalam 1 menit

### Metode 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow instructions
```

### Setup Custom Domain di Vercel

1. Di dashboard Vercel → Project settings
2. Domains → Add domain
3. Update DNS records sesuai instruksi Vercel
4. Tunggu propagasi (5-48 jam)

## 📝 Customization

### Update Data Profil

Edit `src/data/profile.js`:

```javascript
export const profile = {
  name: 'Nama Anda',
  title: 'Judul Profesional',
  email: 'email@anda.com',
  // ... data lainnya
};
```

### Tambah/Edit Skills

Edit `src/data/skills.js`:

```javascript
export const skills = [
  {
    name: 'Skill Name',
    category: 'Jaringan', // atau Frontend, Backend, Soft Skill
    level: 85,
    icon: '🌐',
  },
  // ... tambahkan skill lainnya
];
```

### Tambah Proyek

Edit `src/data/projects.js`:

```javascript
export const projects = [
  {
    title: 'Nama Proyek',
    description: 'Deskripsi lengkap...',
    technology: 'React, Node.js, MySQL',
    image_path: '/images/project.jpg',
    url: 'https://link-proyek.com',
  },
];
```

### Ubah Warna

Edit `src/app/globals.css` - ubah variabel warna:

```css
/* Primary color */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Ubah #667eea dan #764ba2 dengan warna pilihan */
```

### Tambah Gambar

1. Letakkan gambar di `public/images/`
2. Reference di component:

```javascript
<img src="/images/nama-gambar.jpg" alt="Deskripsi" />
```

## 📁 Struktur Folder

```
portofolio-next/
├── src/
│   ├── app/                    # Pages & app router
│   │   ├── about/page.js       # Halaman Tentang
│   │   ├── skills/page.js      # Halaman Skills
│   │   ├── projects/page.js    # Halaman Proyek
│   │   ├── education/page.js   # Halaman Pendidikan
│   │   ├── certificates/page.js # Halaman Sertifikasi
│   │   ├── contact/page.js     # Halaman Kontak
│   │   ├── layout.js           # Root layout
│   │   ├── page.js             # Home page
│   │   └── globals.css         # Global styles
│   ├── components/             # Reusable components
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   └── SkillFilter.js
│   └── data/                   # Static data (mudah di-edit!)
│       ├── profile.js
│       ├── skills.js
│       ├── projects.js
│       ├── education.js
│       └── certificates.js
├── public/                     # Static files & images
│   ├── images/
│   └── sitemap.xml
├── package.json
├── next.config.mjs
├── vercel.json                 # Konfigurasi Vercel
└── README.md
```

## 💡 Tips & Tricks

### Performance

- ✅ Semua image auto-optimized oleh Next.js
- ✅ Automatic code splitting per halaman
- ✅ CSS minimal, no bloat
- ✅ Lazy loading untuk components

### SEO

- ✅ Meta tags di setiap halaman
- ✅ Sitemap.xml ready
- ✅ Mobile friendly
- ✅ Fast loading = better rankings

### Security

- ✅ HTTPS automatic di Vercel
- ✅ No server-side code exposure
- ✅ Static file serving optimal

## 📊 Performance Metrics

```
Lighthouse Score: 90+
FCP: < 1s
LCP: < 2.5s
CLS: < 0.1
TTI: < 3.5s
```

## 🔧 Environment Variables

Tidak diperlukan untuk setup basic. Jika ingin add backend/API:

1. Create `.env.local`:

```bash
NEXT_PUBLIC_API_URL=https://api.example.com
```

2. Gunakan di component:

```javascript
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
```

## 🐛 Troubleshooting

### Port 3000 sudah digunakan

```bash
npm run dev -- -p 3001
```

### Build error

```bash
# Clear cache
rm -rf .next
npm run build
```

### Vercel deployment stuck

1. Check build logs di dashboard Vercel
2. Pastikan `package.json` valid
3. Cek file `.vercelignore`

## 📧 Contact & Support

- **Email**: farel@example.com
- **LinkedIn**: linkedin.com/in/mocharelislami
- **GitHub**: github.com/mocharelislami
- **Instagram**: instagram.com/mocharelislami

## 📄 License

Free to use and modify. Attribution appreciated!

## 🎯 Next Steps

1. ✅ Update data di `src/data/`
2. ✅ Add gambar di `public/images/`
3. ✅ Test lokal: `npm run dev`
4. ✅ Push ke GitHub
5. ✅ Deploy ke Vercel (1-click!)
6. ✅ Setup custom domain
7. ✅ Share dengan dunia! 🚀

---

**Happy coding!** Jika ada pertanyaan, jangan ragu untuk menghubungi saya.

