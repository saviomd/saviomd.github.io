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
          dark: "#600",
          default: "#900",
          hover: "#c00",
        },
      },
      fontFamily: {
        verdana: "Verdana, Geneva, sans-serif",
      },
    },
  },
  plugins: [],
};
