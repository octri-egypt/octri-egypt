import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { fileURLToPath, URL } from "node:url";

// Static SPA build for GitHub Pages. The site is served at the user/org root
// (https://octri-egypt.github.io/), so the base path is "/".
// A copy of index.html is emitted as 404.html (done in the deploy workflow and
// via the `postbuild` step) so deep-linked routes fall back to the SPA.
export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
