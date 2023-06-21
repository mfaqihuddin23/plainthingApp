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
    extend: {},
    container: {
      center: true,
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'plainthing': {
        100: '#100432',
        200: '',
        300: '',
        400: '',
        500: '',
        600: '',
        700: '',
        800: '',
        900: '',
      },
    },
  },
  plugins: [],
}