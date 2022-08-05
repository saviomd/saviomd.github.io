import { Container } from "../library";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-4 text-sm">
      <Container>© 2007-{year} Sávio Mendes</Container>
    </footer>
  );
}

export default Footer;
