/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF8B94",
        secondary: "#A8E6CF",
        accent: "#FFD3B6",
        bg: "#FFF9F0",
      },
    },
  },
  plugins: [],
}