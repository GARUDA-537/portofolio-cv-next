# 🚀 Push ke GitHub - Panduan Lengkap

Setelah initialize git local, langkah berikutnya adalah push ke GitHub agar bisa di-deploy ke Vercel.

---

## ✅ Status Lokal

Git repository sudah di-initialize di local:
```
✓ Repository: D:\laragon\www\portofolio-next
✓ Branch: main
✓ Commits: 1 (Initial commit)
✓ Files: 45 files tracked
✓ Status: Ready to push!
```

---

## 🎯 Step-by-Step Push ke GitHub

### Step 1: Buat Repository Baru di GitHub

1. **Buka GitHub**: https://github.com/new
2. **Isi form**:
   - Repository name: `portofolio-next`
   - Description: `Portofolio CV dengan Next.js - Deployed di Vercel`
   - Visibility: **Public** (agar bisa di-deploy ke Vercel)
   - ❌ Jangan pilih "Initialize repository with README" (sudah ada)
3. **Klik "Create repository"**

### Step 2: Connect Local ke GitHub

Setelah create repository, copy command dari GitHub dan jalankan:

```bash
cd d:\laragon\www\portofolio-next

# Tambahkan remote URL (ganti USERNAME dengan GitHub username Anda)
git remote add origin https://github.com/USERNAME/portofolio-next.git

# Rename branch ke main (jika belum)
git branch -M main

# Push ke GitHub
git push -u origin main
```

**Contoh lengkap**:
```bash
# Jika username GitHub Anda adalah "johndoe"
git remote add origin https://github.com/johndoe/portofolio-next.git
git branch -M main
git push -u origin main
```

### Step 3: Verifikasi di GitHub

1. Buka https://github.com/USERNAME/portofolio-next
2. Pastikan semua file sudah ter-push:
   - ✓ src/
   - ✓ public/
   - ✓ Documentation files (.md)
   - ✓ package.json
   - ✓ vercel.json
   - Dll

---

## 🔑 Authentication (Jika Diperlukan)

Jika diminta username/password:

### Opsi 1: Personal Access Token (Recommended)

1. **Generate token di GitHub**:
   - Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Click "Generate new token"
   - Pilih scopes: `repo` (full control of private repositories)
   - Click "Generate token"
   - **Copy token** (hanya tampil sekali!)

2. **Gunakan saat push**:
   ```bash
   git push -u origin main
   # Username: YOUR_GITHUB_USERNAME
   # Password: PASTE_TOKEN_HERE
   ```

### Opsi 2: SSH Key (Advanced)

```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "email@anda.com"

# Add ke GitHub SSH keys
# Settings → SSH and GPG keys → New SSH key
# Paste public key

# Update remote URL
git remote set-url origin git@github.com:USERNAME/portofolio-next.git

# Push
git push -u origin main
```

---

## 📋 Troubleshooting

### ❌ "Repository already exists"

Solusi:
```bash
# Ubah repository name atau hapus repo lama
# Atau gunakan nama berbeda
git remote remove origin
git remote add origin https://github.com/USERNAME/NEW-NAME.git
git push -u origin main
```

### ❌ "Permission denied (publickey)"

Solusi (SSH):
```bash
# Pastikan SSH key sudah di-add ke GitHub
ssh -T git@github.com  # Test connection

# Atau gunakan HTTPS dengan token
git remote set-url origin https://github.com/USERNAME/portofolio-next.git
```

### ❌ "fatal: The remote end hung up unexpectedly"

Solusi:
```bash
# Increase buffer
git config http.postBuffer 524288000

# Retry push
git push -u origin main
```

---

## ✅ Setelah Push ke GitHub

1. **Verifikasi files**:
   - Buka: https://github.com/USERNAME/portofolio-next
   - Check semua files sudah ada

2. **Siap untuk Vercel**:
   - Next step: Deploy ke Vercel (lihat DEPLOYMENT_GUIDE.md)
   - Vercel akan auto-detect Next.js project
   - 1-click deploy!

3. **Automatic deployment**:
   ```bash
   # Setiap push ke main = auto-redeploy di Vercel
   git add .
   git commit -m "Update content"
   git push origin main  # Vercel otomatis rebuild!
   ```

---

## 📚 Reference Commands

```bash
# Check status
git status

# View commits
git log --oneline

# View remote
git remote -v

# Add remote
git remote add origin URL

# Change remote
git remote set-url origin URL

# Push ke GitHub
git push -u origin main

# Pull dari GitHub
git pull origin main

# Undo last commit (jika ada kesalahan)
git reset --soft HEAD~1
```

---

## 🎯 Next Steps

Setelah push ke GitHub:

1. ✅ Buka https://github.com/USERNAME/portofolio-next
2. ✅ Verifikasi semua files ada
3. ✅ Siap untuk deploy ke Vercel
4. ✅ Lihat DEPLOYMENT_GUIDE.md untuk langkah berikutnya

---

## 🚀 Quick Deploy setelah Push

Setelah push ke GitHub, deploy ke Vercel:

```
1. Buka https://vercel.com/new
2. Click "Import Git Repository"
3. Authorize GitHub
4. Select "portofolio-next"
5. Framework: Next.js (auto-detect)
6. Click "Deploy"
7. ✅ LIVE! Website online dalam 2 menit!
```

---

**Selamat! Repository Anda siap di-deploy! 🎉**
