module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'laptop': {'max': '1200px'},
      'mobile': {'max': '700px'}
    }
  },
  plugins: [],
}