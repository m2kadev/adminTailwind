/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        lightGreen: '#4baf4f',
        lightGrey: '#f2f2f2',
        veryLightGrey: '#797993',
        deepGrey: '#9e9e9e',
        textColor: '#3c3f3f'
      },
    },
  },
  plugins: [],
}
