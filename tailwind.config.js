/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#262626',
        secondary: '#D8D8D8'
      }
    },
  },
  plugins: [require("daisyui")],
}
