/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        lexend: ["Lexend", "serif"],
      },
      colors: {
        fundedGreen: "#00C487", // Custom green
        textGray: "#999F9F",   // Custom gray
      },
      backgroundImage: {
        'combined-gradient': 'linear-gradient(to bottom, rgba(0, 196, 135, 0.10), rgba(0, 196, 135, 0.10)), linear-gradient(to bottom, #050505, #050505)',
      },
    },
  },
  plugins: [],
};
