import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'public',
  base: 'https://paix26875.github.io/practice_pwa/',
  plugins: [
    vue(),
    VitePWA({
      scope: 'https://paix26875.github.io/practice_pwa/',
      includeAssets: ['robots.txt'],
      injectRegister: 'script',
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true
      },
      strategies: 'generateSW',
      manifest: {
        name: 'My Awesome App',
        short_name: 'MyApp',
        description: 'My Awesome App description',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'image/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'image/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ],
        display: 'standalone'
      }
    })
  ]
})
