# ⚡ Quick Start Guide

## 🚀 Cara Cepat Memulai

### Windows

1. **Double-click** file `install.bat` untuk install dependencies
2. **Double-click** file `start.bat` untuk menjalankan website
3. Buka browser ke **http://localhost:4321**

### Mac/Linux

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## 📝 Edit Informasi Anda

### 1️⃣ Informasi Pribadi
File: `src/data/site.ts`
- Ganti nama, email, phone, lokasi
- Update link social media

### 2️⃣ Tambah/Edit Project
File: `src/pages/api/projects.ts`
- Edit array `projects`
- Tambah project baru atau edit yang ada

### 3️⃣ Upload Gambar
- Profile: `public/images/profile.jpg`
- Projects: `public/images/projects/`
- Resume: `public/resume.pdf`

### 4️⃣ Edit Skills
File: `src/pages/index.astro`
- Scroll ke section `const skills = [...]`
- Tambah atau edit skills

## 🎨 Ubah Tema Warna

File: `tailwind.config.mjs`

Cari section `colors > primary` dan ganti dengan warna pilihan Anda:

```javascript
primary: {
  500: '#0ea5e9', // ← Ganti dengan warna Anda
  600: '#0284c7', // ← Ganti dengan warna Anda
}
```

## 🌐 Deploy Online

### Vercel (Termudah)
1. Push ke GitHub
2. Login [vercel.com](https://vercel.com)
3. Import repository
4. Deploy!

### Netlify
1. Push ke GitHub
2. Login [netlify.com](https://netlify.com)
3. New site from Git
4. Deploy!

## 📚 Dokumentasi Lengkap

Lihat [SETUP.md](SETUP.md) untuk panduan lengkap.

---

**Butuh bantuan?** Baca dokumentasi Astro di [docs.astro.build](https://docs.astro.build)
