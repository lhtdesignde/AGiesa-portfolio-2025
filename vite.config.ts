import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';
import {defineConfig, splitVendorChunkPlugin} from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig((configEnv) => {
  return {
    base: './',
    plugins: [react(), basicSsl(), splitVendorChunkPlugin(), tsconfigPaths()],
    build: {
      assetsInlineLimit: 0,
      cssCodeSplit: true,
      chunkSizeWarningLimit: 500,
      sourcemap: configEnv.mode === 'production' ? 'hidden' : true,
    },
    css: {
      devSourcemap: true,
      modules: {
        generateScopedName: '[local]-[hash:base64:5]',
        localsConvention: 'camelCaseOnly'
      },
      postcss: {
        plugins: [
          autoprefixer({
            cascade: false,
            remove: false,
            flexbox: 'no-2009'
          })
        ]
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/tests/setupTests.ts',
      includeSource: ["src/**/*.{ts,tsx}"],
    }
  };
});
