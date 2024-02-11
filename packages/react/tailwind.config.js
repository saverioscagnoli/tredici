/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  variants: {
    extend: {
      outline: {
        "no-offset": "0"
      }
    }
  },
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
        },
        yellow: {
          50: "#fcfee8",
          100: "#f9fdc4",
          200: "#f6fb8d",
          300: "#f9f94b",
          400: "#f5ec1a",
          500: "#e7d50d",
          600: "#c6a708",
          700: "#9e790a",
          800: "#825f11",
          900: "#6f4e14",
          950: "#412907"
        }
      }
    }
  },
  darkMode: "class",
  plugins: []
};
