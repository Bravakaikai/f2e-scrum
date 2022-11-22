/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  screen: {
    sm: "375px",
    md: "767px",
    lg: "1023px",
    xl: "1440px",
  },
  theme: {
    extend: {
    colors: {
        primary: "#9C7548",
        secondary: "#605140",
      },
    },
  },
  plugins: [],
}
