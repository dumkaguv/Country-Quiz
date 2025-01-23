import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@styles": path.resolve(__dirname, "src/assets/styles"),
      "@": path.resolve(__dirname, "src")
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@styles/helpers" as *;`,
      },
    },
  },
});
