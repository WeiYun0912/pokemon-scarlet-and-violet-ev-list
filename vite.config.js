import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const manifest = {
  registerType: "autoUpdate",
  devOptions: {
    enabled: true,
  },
  manifest: {
    name: "Pokemon EV",
    short_name: "Pokemon EV",
    description: "Pokemon EV",
    icons: [
      {
        src: "/pokemon-scarlet-and-violet-ev-list/eevee-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
    theme_color: "#171717",
    background_color: "#e8ebf2",
    display: "standalone",
    scope: "/pokemon-scarlet-and-violet-ev-list/",
    start_url: "/pokemon-scarlet-and-violet-ev-list/",
    orientation: "portrait",
  },
};

export default defineConfig({
  base: "/pokemon-scarlet-and-violet-ev-list/",
  plugins: [react(), VitePWA(manifest)],
});
