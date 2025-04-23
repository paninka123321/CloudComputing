import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  resolve: {
    alias: {
      // This tells Vite to replace react-native with react-native-web
      'react-native': 'react-native-web',
    },
    // You may also want to add these extensions so Vite properly resolves web files:
    extensions: ['.web.js', '.js', '.json', '.web.jsx', '.jsx', '.web.ts', '.ts', '.web.tsx', '.tsx'],
  },

})
