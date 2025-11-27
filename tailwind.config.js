/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'text-black': '#333',
        'gray-7d': '#7d7d7d',
        'gray-ed': '#EDEDED',
        'green-01': '#158000',
        'green-02': '#0F622D',
      },
      textColor: {
        black: '#333',
        'green-01': '#158000',
        'green-02': '#0F622D',
      },
      fontFamily: {
        sans: ['SUIT', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
