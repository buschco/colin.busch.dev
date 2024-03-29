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
        ["bg3"]: "#17171b",
        normal: "#d5d8da",
        accent: "#e95678",
        muted: "#818596",
        func: "#25b0bc",
        cons: "#f09483",
        str: "#fab795",
        special: "#b877db",
      },
    },
  },
  plugins: [],
};
