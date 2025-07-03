import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => ({
  base: "/", // ✅ Important for custom domain
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && false // just to remove mode condition effect
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
