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
          50: "#fff1f1",
          100: "#ffdfdf",
          200: "#ffc5c5",
          300: "#ff9d9d",
          400: "#ff6464",
          500: "#ff1e1e",
          600: "#ed1515",
          700: "#c80d0d",
          800: "#a50f0f",
          900: "#881414",
          950: "#4b0404"
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
