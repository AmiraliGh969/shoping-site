import { defineConfig } from 'vite'
import path from 'path'
// import vue from '@vitejs/plugin-vue'
import { createVuePlugin } from 'vite-plugin-vue2'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // vue()
    createVuePlugin(/* options */)
  ],
  resolve: {
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue'],
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ]
  }
})