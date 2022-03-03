import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import usePluginImport from 'vite-plugin-importer';

export default defineConfig({
  base: '/blog/',
  plugins: [
    react(),
    usePluginImport({
      libraryName: 'antd',
      libraryDirectory: 'es',
      style: (name) => `${name}/style/index.less`
    })
  ],

  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
});
