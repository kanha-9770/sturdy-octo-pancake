import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    react(),
    viteCompression({
      verbose: true,
      disable: false,
      deleteOriginFile: false,
      threshold: 10240, // Only compress files larger than 10KB
      algorithm: 'gzip', // Compression algorithm (you can use 'brotliCompress' if preferred)
      ext: '.gz', // Extension for compressed files
    }),
  ],
  resolve: {
    alias: {
      gsap: 'gsap/dist/gsap',
    },
  },
});
