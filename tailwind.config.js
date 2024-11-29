/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        dark: "#0d0d0d",
        light: "#fbfbf6",
      },
      colors: {
        dark: "#0d0d0d",
        light: "#fbfbf6",
      },
      fontFamily: {
        sans: ["Geist Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
