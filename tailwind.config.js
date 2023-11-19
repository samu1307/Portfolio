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
        'blue-neon' : '#275DAD',
        'alice-blue':'#EBF2FA',
      },
      fontFamily: {
        'Inconsolata': "Inconsolata",
        'kanit': 'Kanit'
      },
      dropShadow: {
        'text-neon': '0 0 3px currentColor'
      }
    }
  },
  plugins: [],
}

