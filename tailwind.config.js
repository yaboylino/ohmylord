const colors = require('tailwindcss/colors')

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50vh',
      '3/4': '75%',
      'full': '100%',
     },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: []
}
