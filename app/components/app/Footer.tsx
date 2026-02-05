import { Container } from "~/components/library";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-4 text-sm">
      <Container>
        <div className="mb-1">&copy; 2007-{year} Sávio Mendes</div>
        <div className="mb-1">
          Powered by React, React Router, Tailwind, Font Awesome, Vite, GitHub
          Pages, Cloudflare.
          <br />
          Italiana font by Santiago Orozco and Google Fonts.
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
