export interface ISection {
  id: string;
  name: string;
}

const sections: ISection[] = [
  {
    id: "about",
    name: "Sobre",
  },
  {
    id: "links",
    name: "Links",
  },
  {
    id: "projects",
    name: "Projetos",
  },
  {
    id: "contact",
    name: "Contato",
  },
];

export default sections;
