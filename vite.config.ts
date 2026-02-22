import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    dedupe: ['three'],
    alias: {
      'three/webgpu': path.resolve('./node_modules/three/src/Three.WebGPU.js'),
      'three/tsl': path.resolve('./node_modules/three/src/Three.TSL.js'),
    },
  },
  build: {
    chunkSizeWarningLimit: 2500,
  },
})

