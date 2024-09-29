import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: 'https://achraflarbi.github.io/Portfolio/',
  plugins: [
    react(),
  ],
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.png', '**/*.svg', '**/*.PNG'], // Add this line
  server: {
    open: true, // automatically open the app in the browser
    port: 3000,
  },
  resolve: {
    alias: {
      screens: path.resolve(__dirname, './src/screens'),
    },
  },
  build: {
    outDir: 'build',
  },
});