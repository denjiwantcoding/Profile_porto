# 🚀 Cara Menjalankan Website Portfolio

## 📋 Prerequisites

Pastikan Anda sudah menginstall:
- **Node.js** (v18 atau lebih baru) - [Download](https://nodejs.org/)
- **npm** atau **yarn** atau **pnpm**

## 🔧 Instalasi

### 1. Install Dependencies

Buka terminal di folder project dan jalankan:

```bash
npm install
```

Atau jika menggunakan yarn:
```bash
yarn install
```

Atau jika menggunakan pnpm:
```bash
pnpm install
```

### 2. Jalankan Development Server

```bash
npm run dev
```

Website akan berjalan di: **http://localhost:4321**

### 3. Build untuk Production

```bash
npm run build
```

### 4. Preview Production Build

```bash
npm run preview
```

## 📝 Kustomisasi Website

### 1. Update Informasi Pribadi

Edit file [src/data/site.ts](src/data/site.ts):

```typescript
export const siteConfig: SiteConfig = {
  name: 'Portfolio',
  title: 'Portfolio Saya',
  description: 'Website portofolio profesional',
  author: 'NAMA ANDA',           // ← Ganti ini
  email: 'email@example.com',     // ← Ganti ini
  phone: '+62 812 3456 7890',     // ← Ganti ini
  location: 'Jakarta, Indonesia', // ← Ganti ini
  social: {
    github: 'https://github.com/username',      // ← Ganti ini
    linkedin: 'https://linkedin.com/in/username',  // ← Ganti ini
    twitter: 'https://twitter.com/username',       // ← Ganti ini
    instagram: 'https://instagram.com/username'    // ← Ganti ini
  }
};
```

### 2. Update Data Project

Edit file [src/pages/api/projects.ts](src/pages/api/projects.ts):

Tambah, edit, atau hapus project di array `projects`.

### 3. Upload Gambar

- **Profile photo**: `public/images/profile.jpg`
- **Project images**: `public/images/projects/nama-project.jpg`
- **Resume/CV**: `public/resume.pdf`

### 4. Ubah Warna Theme

Edit file [tailwind.config.mjs](tailwind.config.mjs):

```javascript
colors: {
  primary: {
    // Ganti dengan warna pilihan Anda
    500: '#0ea5e9',
    600: '#0284c7',
    // dst...
  }
}
```

### 5. Edit Skills

Edit file [src/pages/index.astro](src/pages/index.astro):

```typescript
const skills = [
  { name: 'JavaScript', level: 'expert', icon: '⚡' },
  // Tambahkan skill Anda di sini
];
```

## 🌐 Deploy ke Internet

### Deploy ke Vercel (Recommended)

1. Push code ke GitHub
2. Login ke [Vercel](https://vercel.com)
3. Import GitHub repository
4. Vercel akan auto-detect Astro
5. Click Deploy

### Deploy ke Netlify

1. Push code ke GitHub
2. Login ke [Netlify](https://netlify.com)
3. New site from Git
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy site

## 🔥 Fitur Dinamis

### 1. API Routes

Endpoint yang tersedia:
- `GET /api/projects` - List semua project
- `GET /api/projects?featured=true` - Project unggulan
- `POST /api/contact` - Submit contact form

### 2. Form Contact

Form sudah terintegrasi dengan API. Untuk mengirim email sungguhan:

1. Gunakan service seperti:
   - [Resend](https://resend.com)
   - [SendGrid](https://sendgrid.com)
   - Nodemailer + SMTP

2. Edit [src/pages/api/contact.ts](src/pages/api/contact.ts)

### 3. Integrase CMS (Optional)

Untuk konten yang lebih dinamis, integrasikan dengan:
- **Strapi** (self-hosted)
- **Sanity** (cloud)
- **Contentful** (cloud)

Edit [src/services/api.ts](src/services/api.ts) untuk connect ke CMS.

## 📦 Struktur Project

```
my-portfolio-dynamic/
├── public/              # Static files
│   ├── images/
│   ├── favicon.svg
│   └── resume.pdf
├── src/
│   ├── components/      # UI Components
│   ├── layouts/         # Layout templates
│   ├── pages/           # Routes & Pages
│   │   └── api/         # API endpoints
│   ├── services/        # API services
│   ├── data/            # Static data
│   ├── styles/          # CSS styles
│   └── utils/           # Helper functions
└── astro.config.mjs     # Astro config
```

## 🆘 Troubleshooting

### Port 4321 sudah digunakan?

Ganti port di `astro.config.mjs`:

```javascript
export default defineConfig({
  server: { port: 3000 }
});
```

### Module not found?

```bash
rm -rf node_modules
npm install
```

### Build error?

```bash
npm run astro check
```

## 📞 Support

Jika ada pertanyaan atau kendala:
1. Baca dokumentasi [Astro](https://docs.astro.build)
2. Check [Tailwind CSS docs](https://tailwindcss.com/docs)
3. Lihat issues di GitHub

---

**Happy Coding! 🚀**
