/* eslint-disable import/no-extraneous-dependencies */
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from 'vite'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: resolve(__dirname, 'src') }],
  },
  server: {
    host: '127.0.0.1'
  }
})
