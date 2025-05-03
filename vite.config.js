import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './', // Usa './' si el proyecto está en un subdirectorio
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    rollupOptions: {
      // Elimina 'mathjs' de la configuración de externos
      external: [],
    },
  },
})