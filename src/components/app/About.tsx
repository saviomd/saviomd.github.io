import { Container, Heading, Section } from "src/components/library";

const text = [
  "Olá, meu nome é Sávio Mendes, sou desenvolvedor front-end e designer de interfaces, graduado em Sistemas para Internet pelo CEFET-RJ, pós-graduado em Design de Interface Gráfica pelo SENAC Rio, pós-graduado em Liderança e Inovação pela FGV.",
  "Sou carioca, flamenguista, cinéfilo, ala direito nas peladas de terça, skatista (muito) amador, fã de Iron Maiden, Van Halen, Faith No More, John Mayer, Dave Matthews Band, Mr. Big, Angra, Skank, blá blá blá, etc.",
];

function About() {
  return (
    <Section bg="light" id="about" hasPaddingY={false}>
      <Container>
        <div className="bg-avatar mx-auto bg-position-[right_-20px] bg-no-repeat pt-32 pb-4 sm:pt-4 sm:pr-[130px] md:w-10/12 lg:w-8/12">
          <Heading level={1}>Sobre</Heading>
          {text.map((item, index) => (
            <div
              className={`animate__animated animate__delay-${
                index + 1
              }s animate__fadeInRight bg-layer-1-light dark:bg-layer-1-dark relative mb-4 rounded-lg p-4 text-xl`}
              key={item}
            >
              {item}
              <span className="border-b-layer-1-light sm:border-l-layer-1-light dark:border-b-layer-1-dark dark:sm:border-l-layer-1-dark absolute -top-[30px] right-28 border-15 border-transparent sm:top-[20px] sm:-right-[30px] sm:border-b-transparent dark:sm:border-b-transparent" />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default About;
