/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#829B85",
      secondary: "#F55F1E",
      transparent: "transparent",
      white: "#ffffff",
      black: "#000",
      oliveGreen: {
        100: "#EDF1EE",
        200: "#7B7B7B",
        300: "#202A2E",
        400: "#E8EDF2",
        500: "#D4D4D4",
        600: "",
        700: "",
        800: "",
        900: "",
      },
    },
    extend: {},
  },
  plugins: [],
};
