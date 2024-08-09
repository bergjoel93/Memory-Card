/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        grobold: ["grobold", "sans-serif"],
        lucky: ["lucky", "sans-serif"],
        cartoon: ["cartoon", "sans-serif"],
      },
      colors: {
        bobRed: "#C80A00",
        bobYellow: "#FBF152",
        bobGreen: "#A3EE4D",
        bobBrown: "#E1A753",
        bobBlue: "#296194",
      },
    },
  },
  plugins: [],
};
