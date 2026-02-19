const color = "#b91c1c";
const iconSizes = ["192", "512"];
const url = import.meta.env.PROD ? "https://saviomd.com" : "";

const manifest = {
  background_color: color,
  description:
    "Site pessoal de Sávio Mendes com portfólio de trabalhos realizados em desenvolvimento e design web",
  display: "standalone",
  icons: iconSizes.map((size) => ({
    sizes: `${size}x${size}`,
    src: `${url}/img/icon-${size}.png`,
    type: "image/png",
  })),
  name: "saviomd.com » Sávio Mendes, desenvolvedor front-end e designer de interfaces",
  short_name: "saviomd.com",
  start_url: url,
  theme_color: color,
};

export default manifest;
