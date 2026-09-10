import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Base './' keeps every asset path relative, so the built site works from any
// location — local preview, GitHub Pages project sites, or a custom domain.
export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    target: 'es2018',
    cssCodeSplit: false,
  },
})
