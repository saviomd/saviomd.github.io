export interface IProject {
  description: string;
  icon: string;
  name: string;
  tags: string[];
  url: string;
}

const projects: IProject[] = [
  {
    description:
      "Web app com dados e estatísticas de times, partidas e jogadores do modo Clubs do EA Sports FC / FIFA",
    icon: "https://proclubshead.com/assets/img/26/icon-512.png",
    name: "Pro Clubs Head",
    tags: [
      "Arquitetura de informação",
      "Layout",
      "Node.js",
      "Express",
      "HTML",
      "Pug",
      "CSS",
      "Sass",
      "JavaScript",
    ],
    url: "https://proclubshead.com/",
  },
  {
    description:
      "Site ilustrando a evolução ano a ano das listras na camisa principal do Flamengo",
    icon: "https://saviomd.com/listrasflamengo/img/icon-512.png",
    name: "Listras do Flamengo",
    tags: ["Layout", "HTML", "CSS", "JavaScript", "React"],
    url: "https://saviomd.com/listrasflamengo",
  },
  {
    description:
      "Web app com minhas notas de filmes e estatísticas na rede social Letterboxd",
    icon: "https://saviomd.com/movieratings/img/icon-512.png",
    name: "Movie ratings",
    tags: ["Layout", "HTML", "JavaScript", "React"],
    url: "https://saviomd.com/movieratings/",
  },
  {
    description:
      "Web app com comandos de dribles e comemorações do EA Sports FC / FIFA",
    icon: "https://saviomd.com/driblesfifa/img/icon-512.png",
    name: "Dribles FIFA",
    tags: ["Layout", "HTML", "CSS", "JavaScript", "Svelte"],
    url: "https://saviomd.com/driblesfifa/",
  },
];

export default projects;
