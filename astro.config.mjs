// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import icon from "astro-icon";   // ⬅️ add this import

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  integrations: [
    tailwind({ applyBaseStyles: true }),
    mdx(),
    react(),
    icon(),  // ⬅️ register astro-icon here
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});