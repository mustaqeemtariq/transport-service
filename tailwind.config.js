/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
      },
      colors: {
        blueishGray: "#242C37",
        mildBlack: "#232B36",
        oceanBlue: "#00A1EF",
        redishOrange: "#F7694E",
        borderGreen: "#2FAA6E",
        liteGray: "#F5F7FA",
      },
      fontFamily: {
        circular: ["circular", "sans-serif"],
        "circular-book": ["circular-book", "sans-serif"],
        inter: ["inter", "sans-serif"],
        poppins: ["poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
