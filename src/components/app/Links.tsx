import { Button, Container, Heading, Section } from "../library";
import { variants } from "../library/Button";
import { links } from "../../data";

function Links() {
  const sectionName = "Links";
  return (
    <Container>
      <Section id="links">
        <Heading level={1}>{sectionName}</Heading>
        <ul>
          {links.map(({ id, name, url }) => {
            const variant = id as keyof typeof variants;
            return (
              <li className="mr-4 mb-4 inline-block" key={name}>
                <Button
                  gaEvent={{ action: sectionName, label: name }}
                  href={url}
                  label={name}
                  target="_blank"
                  variant={variant}
                />
              </li>
            );
          })}
        </ul>
      </Section>
    </Container>
  );
}

export default Links;
