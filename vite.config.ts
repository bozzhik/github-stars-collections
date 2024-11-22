import {defineConfig} from 'vite'
import {crx} from '@crxjs/vite-plugin'
import react from '@vitejs/plugin-react'
import path from 'path'

import manifest from './src/manifest'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  return {
    server: {
      port: 5173,
      strictPort: true,
      hmr: {
        port: 5173,
      },
    },
    build: {
      emptyOutDir: true,
      outDir: 'build',
      rollupOptions: {
        output: {
          chunkFileNames: 'assets/chunk-[hash].js',
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '#': path.resolve(__dirname, './src/views'),
        '~~': path.resolve(__dirname, './src/modules'),
        '~': path.resolve(__dirname, './src/components'),
        $: path.resolve(__dirname, './src/scripts'),
      },
    },

    plugins: [crx({manifest}), react()],
  }
})
