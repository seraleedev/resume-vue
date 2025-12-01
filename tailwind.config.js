/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'black-333': '#333333',
        'gray-7d': '#7d7d7d',
        'gray-ed': '#EDEDED',
        'green-01': '#158000',
        'green-02': '#0F622D',
      },
      fontFamily: {
        sans: ['SUIT', 'sans-serif'],
      },
      boxShadow: {
        default: '0px 0px 20px 0px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      addUtilities({
        '.container-custom': {
          width: '1000px',
          marginLeft: 'auto',
          marginRight: 'auto',
        },
      })
    }),
  ],
}
