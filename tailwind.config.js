const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'hover-hover': { raw: '(hover: hover)' },
        'hover-none': { raw: '(hover: none)' },
      },
      colors: {
        gray: colors.blueGray,
      },
    },
  },
  variants: {
    extend: {
      textColor: ['active'],
      textDecoration: ['active'],
    },
  },
  plugins: [],
};
