/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        'flax': '#EDD382',
        'eerie-black': '#191919',
        'bitter-sweet': '#E87461',
      },
      fontFamily: {
        'Inconsolata': "'Inconsolata'"
      }
    }
  },
  plugins: [],
}

