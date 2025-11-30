# 🎨 Customization Guide

Panduan lengkap untuk mengubah tampilan dan isi portofolio sesuai kebutuhan Anda.

---

## 📝 1. Update Data (Most Important!)

### Profile Information

**File**: `src/data/profile.js`

```javascript
export const profile = {
  name: 'Nama Anda',           // ← Ubah
  title: 'Judul Pekerjaan',    // ← Ubah
  bio: 'Deskripsi singkat...',
  education: 'Sekolah/Universitas',
  tagline: 'Tagline Anda',
  phone: '+62 81X-XXXX-XXXX',
  email: 'email@anda.com',
  address: 'Kota, Negara'
};
```

### Tambah/Edit Skills

**File**: `src/data/skills.js`

```javascript
export const skills = [
  {
    id: 1,
    name: 'React',              // Nama skill
    category: 'Frontend',        // Kategori: Jaringan, Frontend, Backend, Soft Skill
    level: 90,                   // 0-100
    icon: '⚛️',                 // Emoji atau icon
  },
  // Tambah lebih banyak...
];
```

**Kategori yang tersedia:**
- `Jaringan` - Networking skills
- `Frontend` - UI/UX technologies
- `Backend` - Server-side technologies
- `Soft Skill` - People skills

### Tambah/Edit Projects

**File**: `src/data/projects.js`

```javascript
export const projects = [
  {
    id: 1,
    title: 'Nama Proyek',
    description: `<h4>Heading</h4>
      <p>Deskripsi proyek...</p>
      <h4>Fitur</h4>
      <ul>
        <li>Fitur 1</li>
        <li>Fitur 2</li>
      </ul>`,
    technology: 'React, Node.js, MongoDB', // Comma-separated
    image_path: '/images/project.jpg',     // Optional
    url: 'https://link-proyek.com',
  },
];
```

### Update Education Timeline

**File**: `src/data/education.js`

```javascript
export const education = [
  {
    id: 1,
    school: 'Nama Sekolah/Universitas',
    major: 'Jurusan',
    degree: 'Gelar/Tingkat',
    start_year: 2020,
    end_year: 2023,
    description: 'Deskripsi pendidikan...'
  },
];
```

### Add Certificates

**File**: `src/data/certificates.js`

```javascript
export const certificates = [
  {
    id: 1,
    title: 'Nama Sertifikasi',
    issuer: 'Organisasi Penerbit',
    credential_id: 'CERT-2024-001',
    issue_date: '2024-06-15',
    expiry_date: '2025-06-15', // null jika tidak ada
    description: 'Deskripsi sertifikasi',
    image_path: '/images/cert.jpg',
    url: 'https://verify.com/cert',
    category: 'Networking', // atau kategori lainnya
  },
];
```

---

## 🎨 2. Ubah Warna & Styling

### Primary Colors

**File**: `src/app/globals.css`

Cari dan ubah:
```css
/* CURRENT COLORS */
#667eea    /* Primary Blue */
#764ba2    /* Secondary Purple */
```

**Color Palettes yang recommended:**

**Option 1: Cool Blue & Purple** (default)
```css
#667eea → #764ba2
```

**Option 2: Modern Green & Teal**
```css
#11998e → #38ef7d
```

**Option 3: Warm Orange & Red**
```css
#f12711 → #f5af19
```

**Option 4: Elegant Purple & Pink**
```css
#a8edea → #fed6e3
```

**Option 5: Dark Blue & Purple**
```css
#00395b → #5a3e7b
```

### Update Gradient

Find in `globals.css`:
```css
/* Sebelum */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Sesudah (contoh) */
background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
```

### Change Font

Default: `'Times New Roman', Times, serif`

Popular alternatives:
```css
/* Modern Sans-serif */
font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

/* Google Font (tambah di atas css) */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');
font-family: 'Poppins', sans-serif;

/* Professional */
font-family: Georgia, 'Times New Roman', serif;
```

---

## 🖼️ 3. Add Images/Media

### Project Images

1. **Create folder** (jika belum ada):
   ```
   public/images/
   ```

2. **Add images**:
   ```
   public/images/
   ├── project-1.jpg
   ├── project-2.jpg
   ├── cert-1.jpg
   └── profile.jpg
   ```

3. **Reference in data**:
   ```javascript
   // In projects.js
   {
     title: 'My Project',
     image_path: '/images/project-1.jpg',
   }
   ```

### Recommended Image Sizes

- **Project images**: 1200x600px (16:9 ratio)
- **Certificate images**: 300x400px (3:4 ratio)
- **Profile image**: 200x200px (1:1 ratio)

### Optimize Images

Online tools:
- https://tinypng.com (PNG/JPG compression)
- https://squoosh.app (Google's image optimizer)

---

## 🌐 4. Update Navigation & Links

### Social Media Links

**File**: `src/components/Footer.js` & `/app/contact/page.js`

Update links:
```javascript
<a href="https://linkedin.com/in/USERNAME">LinkedIn</a>
<a href="https://github.com/USERNAME">GitHub</a>
<a href="https://instagram.com/USERNAME">Instagram</a>
<a href="https://twitter.com/USERNAME">Twitter</a>
```

### Navigation Menu

**File**: `src/components/Navbar.js`

Menu items sudah auto-generated dari routes. Untuk menambah:
1. Create folder di `src/app/new-page/`
2. Create `page.js` di dalamnya
3. Auto-appear di navbar!

---

## 📱 5. Responsive Design Tweaks

### Mobile Breakpoints

Edit `globals.css`:
```css
/* Tablet & below */
@media (max-width: 768px) {
  /* Mobile-specific styles */
}

/* Mobile only */
@media (max-width: 480px) {
  /* Very small screens */
}
```

### Container Width

Default: `max-width: 1200px`

```css
.container {
  max-width: 1200px; /* ← Ubah ini */
}
```

---

## ✨ 6. Animation & Effects

### Change Animation Speed

**Fade in animation:**
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);  /* Distance */
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out;  /* 0.6s = speed */
}
```

### Disable Animations (for performance)

```css
/* Comment out animations */
/* animation: fadeInUp 0.6s ease-out; */
```

### Add Hover Effects

```css
.skill-card:hover {
  transform: translateY(-5px);      /* Move up */
  box-shadow: 0 8px 20px rgba(...); /* Add shadow */
  background: #f5f5f5;              /* Background change */
}
```

---

## 🔤 7. Customize Text & Content

### Page Titles

**Home Page** (`src/app/page.js`):
```javascript
<h1>{profile.name}</h1>
<p>{profile.tagline}</p>
```

**Skills Page** (`src/app/skills/page.js`):
```javascript
<h1>💼 Keahlian Saya</h1>
<p>Berikut adalah kumpulan keahlian teknis...</p>
```

### Emoji & Icons

Replace anywhere:
- `💼` → Skills icon
- `🚀` → Projects icon
- `🎓` → Education icon
- `🏆` → Certificates icon
- `📧` → Contact icon
- `🌐` → Network icon

---

## 🔍 8. SEO Customization

### Meta Tags

**File**: `src/app/layout.js`

```javascript
export const metadata = {
  title: "Your Portfolio - Your Name",
  description: "Full Stack Developer | Network Engineer",
};
```

### Per-page metadata

**File**: `src/app/projects/page.js`

```javascript
export const metadata = {
  title: 'Projects - Your Name',
};
```

### Sitemap

**File**: `public/sitemap.xml`

Update domain:
```xml
<loc>https://yourdomain.com/</loc>
```

### Robots.txt

**File**: `public/robots.txt`

Already configured. Update if needed:
```
Sitemap: https://yourdomain.com/sitemap.xml
```

---

## 🎯 9. Component Customization

### Modify Navbar

**File**: `src/components/Navbar.js`

```javascript
export default function Navbar() {
  // Change logo
  <Link href="/">
    <span style={{ color: '#667eea' }}>Your</span> Logo
  </Link>
  
  // Change nav items
  const navItems = [
    { href: '/', label: 'Home' },
    // Add/remove items
  ];
}
```

### Modify Footer

**File**: `src/components/Footer.js`

```javascript
// Add/change social links
// Update copyright year (auto)
// Change footer text
```

### Modify Skill Filter

**File**: `src/components/SkillFilter.js`

```javascript
// Add/remove categories
// Change filter button styles
```

---

## ⚙️ 10. Build & Performance Optimization

### Enable Image Optimization

Already enabled! But can optimize further:

```javascript
import Image from 'next/image';

<Image 
  src="/images/photo.jpg"
  alt="Description"
  width={1200}
  height={600}
  priority={true} // Lazy load or not
/>
```

### Minimize CSS

Already minified in production build.

### Code Splitting

Automatic per page. No action needed.

---

## 🧪 11. Testing Changes Locally

```bash
# Development mode (auto-reload)
npm run dev
# Visit http://localhost:3000

# Production build test
npm run build
npm start
# Visit http://localhost:3000 (production mode)

# Lint check
npm run lint
```

---

## 📤 12. Deployment Customization

### Environment Variables

**File**: `.env.local` (create if not exists)

```bash
NEXT_PUBLIC_SITE_NAME=My Portfolio
NEXT_PUBLIC_API_URL=https://api.example.com
```

Use in component:
```javascript
const siteName = process.env.NEXT_PUBLIC_SITE_NAME;
```

### Vercel Configuration

**File**: `vercel.json`

```json
{
  "buildCommand": "next build",
  "outputDirectory": ".next"
}
```

---

## 🎁 Bonus: Advanced Customization

### Add Dark Mode

Create `src/context/ThemeContext.js`:
```javascript
export const useTheme = () => {
  // Add theme logic
};
```

### Add Blog Section

1. Create `src/app/blog/page.js`
2. Create `src/data/blog.js`
3. Add to navigation

### Add Contact Form

Replace email link dengan form:
```javascript
import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  // Add form logic
}
```

### Add Analytics

Add to `src/app/layout.js`:
```javascript
import Script from 'next/script';

<Script 
  strategy="afterInteractive"
  src="https://www.googletagmanager.com/gtag/js?id=GA_ID"
/>
```

---

## 📋 Common Customization Checklist

- [ ] Update profile data
- [ ] Add/edit skills
- [ ] Add projects
- [ ] Update colors
- [ ] Add images
- [ ] Update social links
- [ ] Change fonts (optional)
- [ ] Update meta tags
- [ ] Test locally
- [ ] Deploy to Vercel

---

## 🆘 Quick Fixes

### Color not changing?
- Clear `.next` folder: `rm -rf .next`
- Rebuild: `npm run build`

### Images not showing?
- Check path: `/images/file.jpg`
- File exists in `public/images/`?
- Correct extension (.jpg, .png)?

### Links not working?
- Check URL spelling
- Verify page exists
- Use relative paths: `/page` not `./page`

---

## 🎓 Learn More

- Next.js Docs: https://nextjs.org/docs
- CSS-Tricks: https://css-tricks.com
- Web Design Resources: https://webdesign.tutsplus.com
- Color Palettes: https://coolors.co

---

**Happy customizing! 🎨**

Jika ada pertanyaan, check existing files atau baca main documentation.
