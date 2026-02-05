# 🔌 Integrasi CMS & Database

Panduan untuk mengintegrasikan website dengan CMS dan Database agar lebih dinamis.

## 📊 Opsi Database

### 1️⃣ MongoDB (Recommended untuk pemula)

**Install**:
```bash
npm install mongodb
```

**Setup**: 
1. Buat account di [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Buat cluster (gratis)
3. Dapatkan connection string

**File**: `src/lib/mongodb.ts`
```typescript
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || '';
const client = new MongoClient(uri);

export async function connectDB() {
  await client.connect();
  return client.db('portfolio');
}
```

**Update API**: `src/pages/api/projects.ts`
```typescript
import { connectDB } from '@/lib/mongodb';

export async function GET() {
  const db = await connectDB();
  const projects = await db.collection('projects').find().toArray();
  return new Response(JSON.stringify(projects));
}
```

### 2️⃣ PostgreSQL (Production-ready)

**Install**:
```bash
npm install pg
```

**Setup**:
1. Buat database di [Supabase](https://supabase.com) (gratis)
2. Dapatkan connection string

**File**: `src/lib/postgres.ts`
```typescript
import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

export async function query(text: string, params?: any[]) {
  const result = await pool.query(text, params);
  return result.rows;
}
```

### 3️⃣ Firebase (Realtime)

**Install**:
```bash
npm install firebase
```

**Setup**: `src/lib/firebase.ts`
```typescript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const app = initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  projectId: process.env.FIREBASE_PROJECT_ID,
  // ...
});

export const db = getFirestore(app);
```

## 🎨 Opsi CMS

### 1️⃣ Strapi (Open Source, Self-hosted)

**Kenapa Strapi?**
- ✅ Free & open source
- ✅ Self-hosted (kontrol penuh)
- ✅ GraphQL & REST API
- ✅ Media library
- ✅ Role-based access

**Setup**:
```bash
# Install Strapi di folder terpisah
npx create-strapi-app@latest portfolio-cms --quickstart

# Atau gunakan cloud: https://strapi.io/cloud
```

**Integrasi**:
```typescript
// src/services/strapi.ts
const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';

export async function getProjects() {
  const res = await fetch(`${STRAPI_URL}/api/projects?populate=*`);
  const data = await res.json();
  return data.data;
}
```

### 2️⃣ Sanity (Cloud-based)

**Kenapa Sanity?**
- ✅ Cloud-hosted
- ✅ Real-time collaboration
- ✅ Powerful query language (GROQ)
- ✅ Free tier generous

**Setup**:
```bash
npm install @sanity/client
```

**Config**: `src/lib/sanity.ts`
```typescript
import { createClient } from '@sanity/client';

export const sanity = createClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true
});
```

**Query**:
```typescript
const projects = await sanity.fetch(`
  *[_type == "project"] {
    title,
    slug,
    description,
    "image": image.asset->url
  }
`);
```

### 3️⃣ Contentful (Enterprise)

**Kenapa Contentful?**
- ✅ Enterprise-grade
- ✅ Excellent UI
- ✅ CDN built-in
- ✅ Free tier available

**Setup**:
```bash
npm install contentful
```

**Config**: `src/lib/contentful.ts`
```typescript
import { createClient } from 'contentful';

export const contentful = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
});
```

### 4️⃣ Notion (Quick & Easy)

**Kenapa Notion?**
- ✅ No setup needed
- ✅ Familiar interface
- ✅ Free
- ✅ Non-technical friendly

**Setup**:
```bash
npm install @notionhq/client
```

**Config**: `src/lib/notion.ts`
```typescript
import { Client } from '@notionhq/client';

export const notion = new Client({
  auth: process.env.NOTION_TOKEN
});
```

## 📧 Email Service Integration

### 1️⃣ Resend (Modern & Simple)

**Setup**:
```bash
npm install resend
```

**Update**: `src/pages/api/contact.ts`
```typescript
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST({ request }) {
  const body = await request.json();
  
  await resend.emails.send({
    from: 'portfolio@yourdomain.com',
    to: 'your-email@example.com',
    subject: `New message from ${body.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${body.name}</p>
      <p><strong>Email:</strong> ${body.email}</p>
      <p><strong>Message:</strong> ${body.message}</p>
    `
  });
  
  return new Response(JSON.stringify({ success: true }));
}
```

**Get API Key**: [resend.com](https://resend.com)

### 2️⃣ SendGrid

```bash
npm install @sendgrid/mail
```

```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

await sgMail.send({
  to: 'your-email@example.com',
  from: 'portfolio@yourdomain.com',
  subject: 'New Contact',
  html: `...`
});
```

### 3️⃣ Nodemailer (SMTP)

```bash
npm install nodemailer
```

```typescript
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

await transporter.sendMail({
  from: 'portfolio@yourdomain.com',
  to: 'your-email@example.com',
  subject: 'New Contact',
  html: `...`
});
```

## 🔐 Environment Variables

Update `.env`:
```bash
# Database
MONGODB_URI=mongodb+srv://...
# atau
DATABASE_URL=postgresql://...
# atau
FIREBASE_API_KEY=...

# CMS
STRAPI_URL=http://localhost:1337
# atau
SANITY_PROJECT_ID=...
# atau
CONTENTFUL_SPACE_ID=...

# Email
RESEND_API_KEY=re_...
# atau
SENDGRID_API_KEY=SG...
# atau
SMTP_HOST=smtp.gmail.com
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## 🚀 Deployment dengan Database

### Vercel
- Tambahkan environment variables di dashboard
- Database connection akan otomatis work

### Netlify
- Settings → Environment → Add variables
- Rebuild site

## 📊 Recommended Stack

### Untuk Pemula:
- **Database**: Firebase (realtime, mudah)
- **CMS**: Notion (familiar UI)
- **Email**: Resend (simple setup)

### Untuk Production:
- **Database**: PostgreSQL via Supabase
- **CMS**: Strapi (self-hosted) atau Sanity (cloud)
- **Email**: SendGrid (reliable)

### Untuk Enterprise:
- **Database**: PostgreSQL
- **CMS**: Contentful
- **Email**: SendGrid
- **Hosting**: Vercel Pro

## 🎓 Learning Resources

- [MongoDB University](https://university.mongodb.com)
- [Strapi Documentation](https://docs.strapi.io)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Supabase Tutorials](https://supabase.com/docs)

---

Pilih stack yang sesuai dengan kebutuhan dan skill level Anda! 🚀
