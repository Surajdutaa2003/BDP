import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/BooksDeploy/', // 👈 this line is important for GitHub Pages
})
