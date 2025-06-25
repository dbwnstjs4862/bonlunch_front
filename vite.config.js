import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base : '/',
  plugins: [react()],
  // 2. server의 proxy 설정
  // 5173 port -> 8089 port
  // Cross-origin 간주하고 이를 차단! CORS
  server : {
    proxy : {
      '/api' : 'http://52.79.228.55:8089'
    }
  }
})
