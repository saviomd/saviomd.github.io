import { Anchor, Container, Heading, Section } from "src/components/library";

function Contact() {
  const sectionName = "Contato";
  const gaEvent = { action: sectionName, label: "Enviar mensagem" };

  return (
    <Container>
      <Section id="contact">
        <div className="mx-auto md:w-1/2">
          <Heading level={1}>{sectionName}</Heading>
          <p>
            Ofertas de emprego para trabalhar pouco e ganhar muito, convites
            para jogar futebol e etc podem ser enviados por DM no twitter{" "}
            <Anchor
              gaEvent={gaEvent}
              href="https://twitter.com/saviomd"
              target="_blank"
            >
              clicando aqui
            </Anchor>
            .
          </p>
        </div>
      </Section>
    </Container>
  );
}

export default Contact;
