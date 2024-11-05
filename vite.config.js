import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
    rollupOptions: {
      input: resolve(__dirname, 'src/index.html'), // Entry point
      output: {
        entryFileNames: 'app.js', // Specify the output filename
      },
    },
  },
  server: {
    open: true, // Automatically open the app in the browser
    hmr: true, // Enable Hot Module Replacement
  },
});
