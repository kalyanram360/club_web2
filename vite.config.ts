import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Note: using PostCSS to run Tailwind instead of the @tailwindcss/vite plugin
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
