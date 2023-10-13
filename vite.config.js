import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
const manifestForPlugin = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
  manifest: {
    name: "Pokemon EV",
    short_name: "Pokemon EV",
    description: "Pokemon EV",
    icons: [
      {
        src: "eevee-512x512.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "monochrome",
      },
      {
        src: "eevee-512x512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "eevee-512x512.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "eevee-512x512.png",
        sizes: "225x225",
        type: "image/png",
        purpose: "maskable",
      },
    ],
    theme_color: "#171717",
    background_color: "#e8ebf2",
    display: "standalone",
    scope: "/",
    start_url: "/",
    orientation: "portrait",
  },
};

export default defineConfig({
  base: "/pokemon-scarlet-and-violet-ev-list/",
  plugins: [react(), VitePWA(manifestForPlugin)],
});
