import { Container, Heading, Section } from "../library";

function About() {
  return (
    <Section bg="light" id="about" hasPaddingY={false}>
      <Container>
        <div className="mx-auto bg-avatar bg-[right_-20px] bg-no-repeat py-4 pr-[130px] md:w-10/12 lg:w-8/12">
          <Heading level={1}>Sobre</Heading>
          <div className="relative rounded-lg bg-white p-4 text-xl">
            Olá, meu nome é Sávio Mendes, sou desenvolvedor front-end e designer
            de interfaces, carioca, flamenguista, maluco por filmes, ala direito
            nas peladas de terça, fã de Iron Maiden, Van Halen, Faith No More,
            John Mayer, Dave Matthews Band, Mr. Big, blá blá blá, etc.
            <span className="absolute top-[20px] -right-[30px] border-[15px] border-transparent border-l-white" />
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default About;
