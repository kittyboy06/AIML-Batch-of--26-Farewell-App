import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/AIML-Batch-of--26-Farewell-App/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})
