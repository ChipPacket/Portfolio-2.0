/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: 'tw-',
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
    },
    colors: {
      'gray-dark': '#273444',
      'gray-light': '#d3dce6',

      //mine
      'dark-green': '#313715',
      'light-green': '#939F5C',
      'dark-orange': '#D16014',
    },
    fontFamily: {
        /* 
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      */
    },
  },
}