/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        '3': '3px', // Custom border width of 3px
        '12': '12px', // Custom border width of 5px
      }
    },
  },
  plugins: [],
}
