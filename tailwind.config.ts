import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // Enable class-based dark mode
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        wave: 'wave 1s ease-in-out',
      },
      keyframes: {
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      colors: {
        customDark: '#36454F',
        customDarkText: '#B57EDC',
        linkedIn: '#0077B5',
      },
    },
  },
  plugins: [],
};
export default config;
