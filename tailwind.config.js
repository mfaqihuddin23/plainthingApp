/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'plainthing': {
          100: '#100432',
          200: '#393D4E',
          300: '#ECE3F5',
          400: '#843DDD',
          500: '',
          600: '',
          700: '',
          800: '',
          900: '',
        },
      },
      fontFamily: {
        adelia: ["GeneralSans", ],
      },
    },
    container: {
      center: true,
    },
    
  },
  plugins: [],
}