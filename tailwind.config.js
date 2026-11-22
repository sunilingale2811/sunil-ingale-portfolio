/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Inter Tight"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: { DEFAULT: '#00463c', 600: '#005a4d', 700: '#00382f', 900: '#002620' },
        lime: { soft: '#e6f5c8' },
        coral: '#ff6f59',
      },
    },
  },
  plugins: [],
};
