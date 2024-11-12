import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import TailwindCSS from 'tailwindcss'
import Autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/

const pwaBaseConfig = {
  scope: 'https://paix26875.github.io/practice_pwa/',
  includeAssets: ['robots.txt'],
  injectRegister: 'script',
  registerType: 'autoUpdate',
  devOptions: {
    enabled: true
  },
  strategies: 'generateSW',
  manifest: {
    name: 'Vite + Vue',
    short_name: 'VitePWA',
    description: 'this app is PWA created with Vite + Vue + Vite Plugin PWA',
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
  },
  related_applications: [
    {
      platform: 'play',
      url: 'https://play.google.com/store/apps/details?id=cheeaun.hackerweb'
    }
  ]
}

const customSWConfig = {
  ...pwaBaseConfig, // BaseConfigを上書きする
  // registerType: 'autoUpdate',
  // outDir: path.resolve(__dirname, 'public'),
  // manifest: manifest,
  manifestFilename: 'manifest.webmanifest', // Change name for app manifest
  injectRegister: false, // I register SW in app.ts, disable auto registration

  // HERE! For custom service worker
  // srcDir: path.resolve(__dirname, 'resources/js/'),
  filename: 'serviceWorker.js',
  strategies: 'injectManifest',

  workbox: {
    // globDirectory: path.resolve(__dirname, 'public'),
    globPatterns: [
      '{build,images,sounds,icons}/**/*.{js,css,html,ico,png,jpg,mp4,svg}'
    ]
  }
}
export default defineConfig({
  publicDir: 'public',
  base: 'https://paix26875.github.io/practice_pwa/',
  server: {
    port: 3000,
    open: true
  },
  css: {
    postcss: {
      plugins: [TailwindCSS, Autoprefixer]
    }
  },
  plugins: [vue(), VitePWA(pwaBaseConfig)]
})
