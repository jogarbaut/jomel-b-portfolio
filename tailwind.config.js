/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-500": "#3D9970",
        "secondary-500": "#FF851B"
      }
    },
  },
  plugins: [],
}