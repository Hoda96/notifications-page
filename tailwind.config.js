/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  // content: ["index.html", "./src/**/*.{js,html}"],
  content: ["*"],
  darkMode: true,
  theme: {
    extend: {
      screens: {
        xs: "375px",
        lg: "1440px",
      },
      colors: {
        Red: "hsl(1, 90%, 64%)",
        Blue: "hsl(219, 85%, 26%)",
        White: "hsl(0, 0%, 100%)",
        VeryLightGrayishBlue: "hsl(210, 60%, 98%)",
        LightGrayishBlue1: "hsl(211, 68%, 94%)",
        LightGrayishBlue2: "hsl(205, 33%, 90%)",
        GrayishBlue: "hsl(219, 14%, 63%)",
        DarkGrayishBlue: "hsl(219, 12%, 42%)",
        VeryDarkBlue: "hsl(224, 21%, 14%)",
      },
      // fontFamily: { custom: "PlusJakartaSans" },
      fontWeight: {
        customMedium: 500,
        customExtrBold: 800,
      },
    },
  },
  plugins: [],
};
