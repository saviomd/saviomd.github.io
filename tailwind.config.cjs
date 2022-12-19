const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        avatar:
          "url('https://avatar-ssl.xboxlive.com/avatar/saviomd/avatar-body.png')",
      },
      colors: {
        primary: {
          default: colors.red[700],
          light: colors.red[500],
        },
        typography: {
          default: colors.slate[900],
          title: colors.slate[800],
        },
      },
      fontFamily: {
        italiana: "Italiana, serif",
      },
    },
  },
  plugins: [],
};
