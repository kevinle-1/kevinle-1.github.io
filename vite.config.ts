import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from '@honkhonk/vite-plugin-svgr'
const { plugin: mdPlugin, Mode } = require('vite-plugin-markdown')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svgr(),
    react(),
    mdPlugin(
      {
        mode: [Mode.HTML, Mode.TOC, Mode.REACT]
      }
    )
  ]
})