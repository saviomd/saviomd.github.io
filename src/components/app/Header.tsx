import { MouseEvent, useState } from "react";

import { Button, Container } from "src/components/library";
import { sections } from "src/data";
import { trackGaEvent } from "src/utils";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>) => {
    const { hash, innerText } = event.currentTarget;
    event.preventDefault();
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    trackGaEvent({ action: "Cabeçalho", label: innerText });
  };

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <header>
      <div className="overflow-hidden bg-gradient-to-b from-primary-default to-primary-light pt-8 sm:pt-12 md:pt-16">
        <Container>
          <h1 className="animate__animated animate__slideInUp h-[40px] font-italiana text-5xl font-bold text-layer-1-light sm:h-[61px] sm:text-7xl md:h-[81px] md:text-8xl dark:text-layer-1-dark">
            saviomd.com
          </h1>
        </Container>
      </div>
      <div className="py-2 sm:py-0">
        <Container>
          <div className="block text-right sm:hidden">
            <Button label="☰ Menu" onClick={toggleMenu} />
          </div>
          <ul
            className={`${
              isMenuOpen ? "max-h-64" : "max-h-0"
            } overflow-hidden text-center duration-300 sm:max-h-max sm:text-right`}
          >
            {sections.map(({ id, name }) => (
              <li className="sm:inline-block" key={id}>
                <a
                  className="block px-4 py-2 text-lg text-primary-default transition duration-300 hover:text-primary-light"
                  href={`#${id}`}
                  onClick={scrollToSection}
                >
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </header>
  );
}

export default Header;
