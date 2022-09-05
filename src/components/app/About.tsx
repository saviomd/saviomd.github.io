import { Container, Heading, Section } from "../library";

function About() {
  return (
    <Section bg="light" id="about" hasPaddingY={false}>
      <Container>
        <div className="mx-auto bg-avatar bg-[right_-20px] bg-no-repeat pb-4 pt-32 sm:pt-4 sm:pr-[130px] md:w-10/12 lg:w-8/12">
          <Heading level={1}>Sobre</Heading>
          <div className="relative rounded-lg bg-white p-4 text-xl">
            Olá, meu nome é Sávio Mendes, sou desenvolvedor front-end e designer
            de interfaces, carioca, flamenguista, maluco por filmes, ala direito
            nas peladas de terça, fã de Iron Maiden, Van Halen, Faith No More,
            John Mayer, Dave Matthews Band, Mr. Big, blá blá blá, etc.
            <span className="absolute -top-[30px] right-28 border-[15px] border-transparent border-b-white sm:top-[20px] sm:-right-[30px] sm:border-l-white sm:border-b-transparent" />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default About;
