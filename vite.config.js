import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@hooks": "/src/hooks",
      "@services": "/src/services",
      "@components": "/src/components",
      "@context": "/src/context",
      "@layouts": "/src/layouts",
      "@pages": "/src/pages",
      "@store": "/src/store",
    },
  },
});
