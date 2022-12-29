/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      heather: "#BDC5D0",
      gold: "#D6AD60",
      gray: "#4E4F50",
      charcoal: "#122620",
      tan: "#B68D40",
      midnight: "#121063",
      metal: "#565584",
      tahiti: "#3ab7bf",
      silver: "#ecebff",
      "bubble-gum": "#ff77e9",
      bermuda: "#78dcca",
    },

    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#BDC5D0",
          secondary: "#B68D40",
          accent: "#122620",
          neutral: "#1C171C",
          "base-100": "#363338",
          info: "#6DA3E9",
          success: "#1E8045",
          warning: "#FBD53C",
          error: "#F90637",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
