/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Josefins Sans': ['Josefin Sans', 'sans-serif'],
        'Lora': ['Lora', 'serif'],
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Varela': ['Varela', 'sans-serif'],
        'Varela Round': ['Varela Round', 'sans-serif']
      },

    },
    screens: {
      '2xl': { 'max': '1536px' },
      'xl': { 'max': '1280px' },
      'lg': { 'max': '1024px' },
      'md': { 'max': '768px' },
      'sm': { 'max': '640px' },
    },
  },
  plugins: [],
});