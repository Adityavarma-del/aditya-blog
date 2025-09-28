import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Clean minimal config for Netlify/Vercel
export default defineConfig({
  plugins: [react()],
})
