import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  css: {
    preprocessorOptions: {
      scss: { 
         // example : additionalData: `@import "./src/design/styles/variables";`
         // dont need include file extend .scss
         additionalData: `@import "./src/assets/variables.scss";` 
     },
    },
  }
})
