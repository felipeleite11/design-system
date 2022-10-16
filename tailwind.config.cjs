/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
      '2xl': 26
    },

    colors: {
      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7C7C8A',
        200: '#C4C4CC',
        100: '#E1E1E6'
      },
      cyan: {
        500: '#81D8F7',
        300: '#98E1F8'
      },
      black: '#000',
      white: '#FFF',
      transparent: 'transparent'
    },
    extend: {
      fontFamily: {
        sans: 'Inter, sans-serif'
      }
    },
  },
  plugins: [],
}
