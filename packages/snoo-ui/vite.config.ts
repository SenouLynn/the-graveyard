import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
// https://dev.to/receter/how-to-create-a-react-component-library-using-vites-library-mode-4lma

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({ include: ["src"], exclude: ["src/**/*.stories.tsx"] }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "ui-lib",
      fileName: "index",
    },
  },
});
