/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "420px",
      },
      colors: {
        dark: "#0C0C0C",
        accent: "#D7E2EA",
      },
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        sans: ["Kanit", "sans-serif"],
      },
    },
  },
  plugins: [],
}
