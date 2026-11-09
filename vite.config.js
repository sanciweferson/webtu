import { defineConfig } from "vite"
import { fileURLToPath, URL } from "node:url"

export default defineConfig({
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),

      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url),
      ),

      "@layout": fileURLToPath(new URL("./src/layout", import.meta.url)),
    },
  },

  server: {
    port: 3000,
    open: true,
  },

  build: {
    rolldownOptions: {
      input: {
        inicio: fileURLToPath(new URL("./index.html", import.meta.url)),

        contato: fileURLToPath(new URL("./contato.html", import.meta.url)),
      },
    },
  },
})
