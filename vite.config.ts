/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './tests/setup.ts',
    coverage: {
      enabled: true,
      provider: 'c8',
      all: true,
      clean: true,
      exclude: ['**/types/*.ts', '**/*.test.ts', 'vite.config.ts', '**/vite-env.d.ts'],
    },
  },
});
