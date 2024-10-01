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
        dark: '#12192B',
        accent: '#FFB74D',
        paragraph: '#6B7280',
      },
      backgroundImage: {
        'hero-pattern': "url('/particle.png')",
        'hero-image': "url('/here.png')",
        'gradient-three-color':
          'linear-gradient(to right, #82CAFF 5%, #92C7C7 40%, #50C878 70%, #BEE580 100%)',
      },
      keyframes: {
        bubble1: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-10px, 10px)' },
        },
        bubble2: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(15px, -10px)' },
        },
        bubble3: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(-15px, -15px)' },
        },
        bubble4: {
          '0%, 100%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(10px, 15px)' },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'bubble-1': 'bubble1 5s ease-in-out infinite',
        'bubble-2': 'bubble2 6s ease-in-out infinite',
        'bubble-3': 'bubble3 4s ease-in-out infinite',
        'bubble-4': 'bubble4 7s ease-in-out infinite',
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
