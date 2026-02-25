import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        Perfil: resolve(__dirname, 'index.html'),
        
        proyectos: resolve(__dirname, 'pages/proyectos.html'),
        habilidades: resolve(__dirname, 'pages/habilidades.html'),
        servicios: resolve(__dirname, 'pages/servicios.html'),

      }
    }
  }
})