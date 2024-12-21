import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"), // Archivo principal de la librería
      name: "Input", // Nombre global de la librería
      fileName: (format) => `input.${format}.js`,
    },
    rollupOptions: {
      // Excluir dependencias externas de la compilación
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
