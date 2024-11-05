import { defineConfig } from 'vite';
import { resolve } from 'path';
import postcss from './postcss.config.js';

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
  css: {
    postcss,
  },
});
