import { Container, Heading, Section } from "../library";

function About() {
  return (
    <Section bg="light" id="about" hasPaddingY={false}>
      <Container>
        <div className="mx-auto bg-avatar bg-[right_-20px] bg-no-repeat pb-4 pt-32 sm:pr-[130px] sm:pt-4 md:w-10/12 lg:w-8/12">
          <Heading level={1}>Sobre</Heading>
          <div className="animate__animated animate__delay-1s animate__fadeInRight relative rounded-lg bg-layer-1-light p-4 text-xl dark:bg-layer-1-dark">
            Olá, meu nome é Sávio Mendes, sou desenvolvedor front-end e designer
            de interfaces, carioca, flamenguista, maluco por filmes, ala direito
            nas peladas de terça, fã de Iron Maiden, Van Halen, Faith No More,
            John Mayer, Dave Matthews Band, Mr. Big, blá blá blá, etc.
            <span className="absolute -top-[30px] right-28 border-[15px] border-transparent border-b-layer-1-light dark:border-b-layer-1-dark sm:-right-[30px] sm:top-[20px] sm:border-b-transparent sm:border-l-layer-1-light dark:sm:border-l-layer-1-dark" />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default About;
