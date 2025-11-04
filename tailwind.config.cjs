// tailwind.config.js
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: "var(--brand)",
        bg: "var(--bg)",
        fg: "var(--fg)",
        muted: "var(--muted)",
        subtle: "var(--subtle)",
      },
      borderRadius: {
        lg: "var(--r-lg)",
        xl: "var(--r-xl)",
      },
      boxShadow: {
        soft: "var(--shadow-1)",
      },
      maxWidth: {
        container: "var(--container)",
      },
      // Minimal prose defaults that follow your tokens
      typography: {
        DEFAULT: {
          css: {
            color: "var(--fg)",
            a: { color: "var(--brand)" },
            h1: { color: "var(--fg)" },
            h2: { color: "var(--fg)" },
            h3: { color: "var(--fg)" },
            strong: { color: "var(--fg)" },
            p: { color: "var(--fg)" },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
