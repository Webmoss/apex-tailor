import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import { VitePWA } from "vite-plugin-pwa";
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    VitePWA({
      injectRegister: "auto",
      registerType: "autoUpdate",
      filename: "service-worker.js",
      manifest: {
        name: "ApeX Tailor",
        short_name: "ApeXTailor",
        description: "Apes onchain, all the time.",
        theme_color: "#d0ff38",
        display: "standalone",
        orientation: "portrait",
        icons: [
          {
            src: "apple-icon-120x120.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "android-icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "ms-icon-310x310.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "android-chrome-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
      workbox: {
        globPatterns: [
          "**/*.{js,css,html,ico,png,svg,jpg,jpeg,woff,woff2,ttf}",
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    host: true,
  },
})
