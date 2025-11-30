import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [
    react(),
    ViteImageOptimizer({
      webp: { quality: 80 },
      avif: { quality: 70 },
      png: { quality: 80 },
      jpeg: { quality: 80 },
    }),
  ],
  build: {
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'vendor-react'
          }
          if (id.includes('node_modules/bootstrap/') || id.includes('node_modules/swiper/')) {
            return 'vendor-ui'
          }
          if (id.includes('node_modules/lodash/') || id.includes('node_modules/axios/')) {
            return 'vendor-utils'
          }
          if (id.includes('node_modules/')) {
            return 'vendor'
          }
        },
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'assets/css/[name]-[hash].css'
          }
          return 'assets/[name]-[hash].[ext]'
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js'
      }
    }
  },
  css: {
    devSourcemap: false,
    postcss: {
      plugins: [
        require('@fullhuman/postcss-purgecss')({
          content: [
            './index.html',
            './src/**/*.html',
            './src/**/*.tsx',
            './src/**/*.ts',
            './src/**/*.jsx',
            './src/**/*.js',
            './src/**/*.css'
          ],
          defaultExtractor: (content: string) => content.match(/[\w-/:]+(?<!:)/g) || [],
          safelist: [
            /^swiper-/,
            /^col-/,
            /^row/,
            /^container/,
            /^p-/,
            /^m-/,
            /^d-/,
            /^text-/,
            /^bg-/,
            /^justify-/,
            /^align-/,
            /^flex/,
            /^btn/,
            /^form/,
            /^input/,
            /^select/,
            /^table/,
            /^modal/,
            /^carousel/,
            /^nav/,
            /^navbar/,
            /^dropdown/,
            /^show/,
            /^active/,
            /^fade/,
            /^collapse/,
            /^collapsing/,
            /^offcanvas/,
            /^tooltip/,
            /^popover/,
            /^alert/,
            /^progress/,
            /^badge/,
            /^card/,
            /^list-group/,
            /^spinner/,
            /^toast/,
            /^h/,
            /^display/,
            /^lead/,
            /^small/,
            /^mark/,
            /^initialism/,
            /^blockquote/,
            /^figure/,
            /^img/,
            /^float/,
            /^position/,
            /^visible/,
            /^invisible/,
            /^ratio/,
            /^fixed/,
            /^sticky/,
            /^vr/,
            /^opacity/,
            /^shadow/,
            /^object/,
            /^overflow/,
            /^z-/,
            /^fs-/,
            /^fw-/,
            /^lh-/,
            /^font/,
            /^text-opacity/,
            /^bg-opacity/,
            /^user-select/,
            /^pe-/,
            /^rounded/,
            /^transition/,
            /^custom-/  // Ձեր custom class-ների համար
          ]
        })
      ]
    }
  }
})