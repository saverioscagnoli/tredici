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
        "gray-tr-3-dark": "rgba(157, 157, 157, 0.7)"
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
