/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gold" : "#efb810",
        "light-black": "#191919"
      }
    },
  },
  plugins: [],
}