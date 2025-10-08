import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://d3.techsoc-iiitbbsr.com',
      urls: ['/', '/about-us', '/events', '/register', '/merch', '/sponsor', '/contact-us'],
    }),
  ],
  server: {
    host: '127.0.0.1',
  },
})
