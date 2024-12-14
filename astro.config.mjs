// @ts-check
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import partytown from "@astrojs/partytown";
import robotsTxt from "astro-robots-txt";
import icon from "astro-icon";

//https://astro.build/config
export default defineConfig({
  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
      config: {
        // Konfigurasi opsional seperti limit input pixels atau kualitas kompresi gambar
        limitInputPixels: false, // agar bisa memproses gambar besar
      },
    },
  },
  site: "https://alfayzoud.web.id/", // Tambahkan URL situs di sini
  integrations: [
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push, fbq, windows.fbq"],
      },
    }),
    react({
      experimentalReactChildren: true,
    }),
    robotsTxt(),
    icon(),
  ],
  vite: {
    optimizeDeps: {
      include: ["fbevents"],
    },
  },
  // Konfigurasi lain
});
