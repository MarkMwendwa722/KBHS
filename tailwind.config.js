/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#295E4F',
        'custom-gray': '#D9D9D9', 
      },
    },
  },
  plugins: [],
}
