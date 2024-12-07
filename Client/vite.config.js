import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
   proxy: {
      '/api' : "http://localhost:5100",
    }
  // esbuild: {
  //       loader: 'jsx',
  //       include: /src\/.*\.js$/, // Apply to .js files in the src directory
  //   },
})
