// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgPlugin from "vite-plugin-svg";

export default defineConfig({
  plugins: [react(), svgPlugin()],
});
