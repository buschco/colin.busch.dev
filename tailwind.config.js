/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#1c1e26",
        ["bg2"]: "#2e303e",
        normal: "#d5d8da",
        accent: "#e95678",
      },
    },
  },
  plugins: [],
};
