import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgr from 'vite-plugin-svgr'

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
    outDir: 'docs' // 打包項目文件的輸出目錄
  }
})
