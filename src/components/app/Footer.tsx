import { Container } from "../library";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-4 text-sm">
      <Container>
        <div className="mb-1">© 2007-{year} Sávio Mendes</div>
        <div className="mb-1">
          Powered by React, Tailwind, Vite, GitHub Pages, Hover.
          <br />
          Italiana font by Santiago Orozco and Google Fonts.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
