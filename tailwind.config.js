/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "violet-light": "rgb(152, 84, 224)",
        "violet-dark": "rgb(173, 123, 226)",
        "gray-tr-light": "rgba(174, 172, 176, 0.3)",
        "gray-tr-dark": "rgba(157, 157, 157, 0.3)",
        "gray-tr-2-light": "rgba(174, 172, 176, 0.5)",
        "gray-tr-2-dark": "rgba(157, 157, 157, 0.5)",
        "gray-tr-3-light": "rgba(174, 172, 176, 0.7)",
        "gray-tr-3-dark": "rgba(157, 157, 157, 0.7)"
      }
    }
  },
  plugins: [],
  darkMode: "class"
};
