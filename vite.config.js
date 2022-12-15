import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/pokemon-scarlet-and-violet-ev-list/",
  plugins: [react()],
});
