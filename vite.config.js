import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      // Keep the same registration flow as before (src/registerServiceWorker.js)
      injectRegister: false,
      registerType: 'prompt',
      filename: 'service-worker.js',
      includeAssets: ['favicon.ico', 'robots.txt', 'img/icons/*.png', 'img/icons/*.svg', 'images/*.png'],
      manifest: {
        name: 'future2021',
        short_name: 'future2021',
        theme_color: '#4DBA87',
        background_color: '#000000',
        display: 'standalone',
        start_url: '.',
        icons: [
          { src: './img/icons/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
          { src: './img/icons/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
          { src: './img/icons/android-chrome-maskable-192x192.png', sizes: '192x192', type: 'image/png', purpose: 'maskable' },
          { src: './img/icons/android-chrome-maskable-512x512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' }
        ]
      }
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 8080
  },
  preview: {
    port: 8080
  },
  test: {
    environment: 'happy-dom',
    globals: true,
    include: ['tests/unit/**/*.spec.js'],
    setupFiles: ['tests/unit/setup.js']
  }
})
