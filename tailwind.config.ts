import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1A73E8",
        body: "#212121",
        voilet: "#0000EE",
        link: "#172b4d",
        dark: "#12192B",
        accent:"#FFB74D",
        paragraph: "#6B7280",


      },
      backgroundImage: {
        "hero-pattern": "url('/particle.png')",
        "hero-image": "url('/Dimarhero.png')",
      },
    },
  },
  plugins: [],
};
export default config;
