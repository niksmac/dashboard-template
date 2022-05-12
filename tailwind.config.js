const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      sans: ['Oxygen', ...defaultTheme.fontFamily.sans],
      serif: defaultTheme.fontFamily.serif
    },
    extend: {}
  },
  plugins: []
}
