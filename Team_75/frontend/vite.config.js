import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server:{
    open: "/",
    port: 5173,
  },
  plugins: [react()],
})
