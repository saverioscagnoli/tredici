/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        select: "0 0 0 2px rgb(152, 84, 224)"
      },
      colors: {
        "violet-light": "rgb(152, 84, 224)",
        "violet-dark": "rgb(173, 123, 226)",
        "violet-darker-light": "rgb(133, 46, 226)",
        "violet-darker-dark": "rgb(152, 84, 224)",
        "violet-darkest-light": "rgb(93, 6, 185)",
        "violet-darkest-dark": "rgb(133, 46, 226)",
        "gray-tr-light": "rgba(174, 172, 176, 0.3)",
        "gray-tr-dark": "rgba(157, 157, 157, 0.3)",
        "gray-tr-2-light": "rgba(174, 172, 176, 0.5)",
        "gray-tr-2-dark": "rgba(157, 157, 157, 0.5)",
        "gray-tr-3-light": "rgba(174, 172, 176, 0.7)",
        "gray-tr-3-dark": "rgba(157, 157, 157, 0.7)",
        amethyst: {
          50: "#faf6fe",
          100: "#f2eafd",
          200: "#e8d8fc",
          300: "#d6b9f9",
          400: "#bc8df3",
          500: "#a361eb",
          600: "#9854e0",
          700: "#772fc1",
          800: "#662b9e",
          900: "#53247f",
          950: "#370e5d"
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
        silver: {
          50: "#f7f7f7",
          100: "#ededed",
          200: "#dfdfdf",
          300: "#c8c8c8",
          400: "#a9a9a9",
          500: "#999999",
          600: "#888888",
          700: "#7b7b7b",
          800: "#676767",
          900: "#545454",
          950: "#363636"
        }
      },
      animation: {
        "progress-indefinite": "progress-indefinite 2s infinite"
      },
      keyframes: {
        "progress-indefinite": {
          "0%": { left: "-50%" },
          "100%": { left: "100%" }
        }
      }
    }
  },
  plugins: [],
  darkMode: "class"
};
