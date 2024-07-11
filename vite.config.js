import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgr from 'vite-plugin-svgr'

const INVALID_CHAR_REGEX = /[\x00-\x1F\x7F<>*#"{}|^[\]`;?:&=+$,]/g
const DRIVE_LETTER_REGEX = /^[a-z]:/i

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgr()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: '/rosa-homePage/', // 將 <REPO_NAME> 替換為你的 GitHub repository 名稱
  build: {
    chunkSizeWarningLimit: 1000, // 根據需要調整這個值
    rollupOptions: {
      output: {
        // https://github.com/rollup/rollup/blob/master/src/utils/sanitizeFileName.ts
        sanitizeFileName(name) {
          const match = DRIVE_LETTER_REGEX.exec(name)
          const driveLetter = match ? match[0] : ''
          // substr 是被淘汰語法，因此要改 slice
          return driveLetter + name.slice(driveLetter.length).replace(INVALID_CHAR_REGEX, '')
        }
      }
    }
  }
})
