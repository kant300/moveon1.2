import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host:5173,
    host:true,
    strictPort:true,
    cors:true,
  }
})
