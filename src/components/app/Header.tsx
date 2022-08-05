import { MouseEvent, useState } from "react";

import { Button, Container } from "../library";
import { sections } from "../../data";
import { trackGaEvent } from "../../utils";

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
      <Container>
        <h1 className="h-[32px] overflow-hidden font-verdana text-4xl font-bold tracking-tighter text-primary-default [text-shadow:_1px_-1px_0_rgb(0_0_16_/_50%)] sm:h-[61px] sm:text-7xl">
          saviomd.com
        </h1>
      </Container>
      <div className="bg-primary-default bg-gradient-to-b from-primary-default to-primary-dark py-2 sm:py-0">
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
                  className="block px-4 py-2 font-verdana text-lg text-white transition duration-300 [text-shadow:_0_-1px_0_rgb(0_0_16_/_50%)] hover:bg-primary-default sm:py-4"
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
