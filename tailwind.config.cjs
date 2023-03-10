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
        layer: {
          1: {
            dark: colors.slate[900],
            light: colors.white,
          },
          2: {
            dark: colors.slate[700],
            light: colors.slate[200],
          },
        },
        primary: {
          default: colors.red[700],
          light: colors.red[500],
        },
        typography: {
          default: {
            dark: colors.slate[200],
            light: colors.slate[900],
          },
          title: {
            dark: colors.slate[300],
            light: colors.slate[800],
          },
        },
      },
      fontFamily: {
        italiana: "Italiana, serif",
      },
    },
  },
  plugins: [],
};
