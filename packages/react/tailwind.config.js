/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        amethyst: {
          50: "#faf5ff",
          100: "#f3e7ff",
          200: "#e9d3ff",
          300: "#d8b0ff",
          400: "#c07eff",
          500: "#b15eff",
          600: "#942af3",
          700: "#801ad6",
          800: "#6c1aaf",
          900: "#59178c",
          950: "#3c0269"
        },
        teal: {
          50: "#f1fcfb",
          100: "#cef9f5",
          200: "#9df2eb",
          300: "#64e4de",
          400: "#34cdcb",
          500: "#1aacac",
          600: "#138b8e",
          700: "#137072",
          800: "#14585b",
          900: "#154a4c",
          950: "#062a2d"
        }
      }
    }
  },
  darkMode: "class",
  plugins: []
};
