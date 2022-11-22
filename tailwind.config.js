/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    extend: {
      backgroundImage: {
        'mainBg': "url('../imgs/background.jpg')"
      },
      fontFamily: {
        'baseBold': ['Montserrat','sans-serif']
      }
    },
  },
  plugins: [],
}
