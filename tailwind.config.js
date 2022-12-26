/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#262626',
        secondary: '#F5F7F9'
      }
    },
  },
  plugins: [require("daisyui")],
}
