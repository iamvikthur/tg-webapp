/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tapFontFam: ["Inter", "Roboto Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};
