import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        all: resolve(__dirname, 'all.html'),
        active: resolve(__dirname, 'active.html'),
        completed: resolve(__dirname, 'completed.html'),
      },
    },
  },
});
