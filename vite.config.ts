import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import usePluginImport from 'vite-plugin-importer';
import { resolve } from 'path';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    usePluginImport({
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: (name) => `${name}/style/index.js`
    })
  ],

  resolve: {
    alias: [{ find: '@', replacement: resolve('./src') }],
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.d.ts']
  },

  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
});
