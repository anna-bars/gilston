import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      // WebP օպտիմալացում
      webp: {
        quality: 80,
      },
      // AVIF օպտիմալացում  
      avif: {
        quality: 70,
      },
      // PNG/JPG օպտիմալացում
      png: {
        quality: 80,
      },
      jpeg: {
        quality: 80,
      },
    }),
  ],
})