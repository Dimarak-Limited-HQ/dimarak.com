import type { Config } from 'tailwindcss';
const flowbite = require('flowbite-react/tailwind');

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A73E8',
        body: '#212121',
        voilet: '#0000EE',
        link: '#172b4d',
        dark: '#212121',
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
