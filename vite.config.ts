import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { SITE_URL } from './scripts/site-url.js'

const siteUrl = SITE_URL.replace(/\/$/, '')

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    {
      name: 'html-inject-site-url',
      transformIndexHtml(html) {
        return html.replace(/__SITE_URL__/g, siteUrl)
      },
    },
  ],
})
