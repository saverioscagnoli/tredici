/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark": "#18181b",
        "light": "#fafafa",
        purple: {
          50: "#fcf4ff",
          100: "#f7e6ff",
          200: "#f0d2ff",
          300: "#e4afff",
          400: "#d37cff",
          500: "#c34aff",
          600: "#b326f7",
          700: "#9c16da",
          800: "#8318b1",
          900: "#6b158e",
          950: "#4c016a"
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
        },
        green: {
          50: "#f4faf3",
          100: "#e2f6e2",
          200: "#c7ebc7",
          300: "#9bda9b",
          400: "#68c068",
          500: "#43a443",
          600: "#379237",
          700: "#2b6a2b",
          800: "#265527",
          900: "#214622",
          950: "#0d260e"
        },
        red: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fda4a4",
          400: "#f97070",
          500: "#f04343",
          600: "#dd2525",
          700: "#ba1b1b",
          800: "#a61c1c",
          900: "#801c1c",
          950: "#450a0a"
        }
      }
    }
  },
  plugins: [],
  darkMode: "class"
};