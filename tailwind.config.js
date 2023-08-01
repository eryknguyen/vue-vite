/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      borderRadius: {
        none: "0",
        3: "3px",
        DEFAULT: "5px",
        7: "7px",
        10: "10px",
        15: "15px",
      },
    },
    colors: {
      background: "#ECEFF5",
      white: {
        DEFAULT: "#FFFFFF",
        900: "#F8F9FB",
        800: "#ECEFF5",
      },
      blue: {
        DEFAULT: "#173C6C",
        700: "#36547E",
        300: "#B6C7DE",
      },
      green: "#33AC45",
      red: "#FF0000",
      yellow: {
        300: "#FDFBC5",
      },
      black: {
        DEFAULT: "#000000",
        800: "#1C1D1D",
      },
    },

  },
  plugins: [],
};
