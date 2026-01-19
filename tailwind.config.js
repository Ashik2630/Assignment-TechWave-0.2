/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      backgroundImage:{
        bannerImage:"url('./assets/hero-bg.png')",
        footerImage:"url('./assets/footer-bg.png')"
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
