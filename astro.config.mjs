import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

// https://astro.build/config
export default defineConfig({
  output: 'hybrid', // Allows API routes to work
  adapter: vercel({
    runtime: 'nodejs18'
  }),
  integrations: [
    react(),
    tailwind()
  ],
  vite: {
    ssr: {
      external: ['react', 'react-dom']
    }
  }
});
