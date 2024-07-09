/// <reference types="vite/client" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from "tailwindcss"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css :{
    postcss : {
      plugins:[tailwindcss()]

    },
  },
  // types: ["vite/client", "@types/node"],
});
