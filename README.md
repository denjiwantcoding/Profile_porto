# 🚀 Portfolio Website Dinamis dengan Astro

Website portofolio modern dan dinamis menggunakan **Astro**, **React**, dan **Tailwind CSS**. Dirancang untuk developer yang ingin showcase project dengan cara profesional dan interaktif.

![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Fitur Unggulan

- ✅ **Server-Side Rendering (SSR)** - Website dinamis dengan Astro hybrid mode
- ✅ **Dynamic Routing** - URL otomatis untuk setiap project
- ✅ **API Routes** - Backend terintegrasi untuk data dinamis
- ✅ **Interactive Components** - Form React untuk interaksi user
- ✅ **Responsive Design** - Tampil sempurna di semua device
- ✅ **Type-Safe** - TypeScript untuk development yang aman
- ✅ **SEO Optimized** - Meta tags dan structure yang SEO-friendly
- ✅ **Fast Performance** - Optimized untuk kecepatan loading

## 🎯 Halaman & Fitur

### 🏠 Homepage
- Hero section dengan call-to-action
- Featured projects showcase
- Skills & technologies display
- About me section

### 📂 Projects
- Grid layout semua project
- Filter by category (ready to implement)
- Dynamic project detail pages
- Links ke demo & source code

### 📬 Contact
- Interactive form dengan validation
- Real-time status feedback
- Contact information display
- Social media integration

### 🔌 API
- `GET /api/projects` - List projects
- `POST /api/contact` - Submit messages

## ⚡ Quick Start

### Windows Users

**Cara Termudah:**
1. Double-click `install.bat` untuk install dependencies
2. Double-click `start.bat` untuk jalankan server
3. Buka browser: http://localhost:4321

### Mac/Linux Users

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:4321
```

## 📖 Dokumentasi

- **[QUICKSTART.md](QUICKSTART.md)** - Panduan cepat mulai
- **[SETUP.md](SETUP.md)** - Panduan lengkap setup & kustomisasi
- **[FEATURES.md](FEATURES.md)** - Detail fitur & struktur project

## 🎨 Kustomisasi

### 1️⃣ Update Informasi Pribadi

Edit **`src/data/site.ts`**:

```typescript
export const siteConfig = {
  name: 'Portfolio',
  author: 'NAMA ANDA',           // ← Ganti
  email: 'email@example.com',     // ← Ganti
  phone: '+62 812 3456 7890',     // ← Ganti
  location: 'Jakarta, Indonesia', // ← Ganti
  social: {
    github: 'https://github.com/username',    // ← Ganti
    linkedin: 'https://linkedin.com/in/...',  // ← Ganti
    // ...
  }
};
```

### 2️⃣ Tambah/Edit Projects

Edit **`src/pages/api/projects.ts`** - Ubah array `projects`

### 3️⃣ Upload Gambar

```
public/
├── images/
│   ├── profile.jpg          ← Profile photo
│   └── projects/
│       ├── project1.jpg     ← Project images
│       └── project2.jpg
└── resume.pdf               ← Your CV/Resume
```

### 4️⃣ Ubah Warna Theme

Edit **`tailwind.config.mjs`**:

```javascript
colors: {
  primary: {
    500: '#0ea5e9', // ← Warna utama
    600: '#0284c7', // ← Warna hover
  }
}
```

## 🚀 Deployment

### Deploy ke Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push code ke GitHub
2. Import di Vercel
3. Auto-deploy! ✨

### Deploy ke Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

1. Push code ke GitHub
2. Import di Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`

## 📦 Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
npm run astro check  # Check for errors
```

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Astro 4** | Framework utama & SSR |
| **React 18** | Interactive components |
| **Tailwind CSS 3** | Styling & design |
| **TypeScript** | Type safety |

## 📁 Project Structure

```
my-portfolio-dynamic/
├── public/              # Static files
│   ├── images/
│   └── favicon.svg
├── src/
│   ├── components/      # UI Components
│   ├── layouts/         # Layout templates
│   ├── pages/           # Routes & API
│   ├── services/        # API services
│   ├── data/            # Configuration
│   ├── styles/          # Global CSS
│   └── utils/           # Helpers
└── astro.config.mjs     # Config
```

## 🎓 Learning Resources

- [Astro Documentation](https://docs.astro.build)
- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs)

## 🤝 Contributing

Contributions welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📄 License

MIT License - feel free to use this project for your portfolio!

## 💬 Support

Ada pertanyaan? Buka issue di GitHub atau hubungi saya!

---

**Made with ❤️ using Astro + React + Tailwind CSS**

⭐ Star this repo if you find it helpful!
