import { Button, Container, Heading, Section } from "src/components/library";
import { variants } from "src/components/library/Button";
import { links } from "src/data";

function Links() {
  const sectionName = "Links";

  return (
    <Container>
      <Section id="links">
        <Heading level={1}>{sectionName}</Heading>
        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {links.map(({ icon, id, name, url }) => {
            const variant = id as keyof typeof variants;
            return (
              <li key={name}>
                <Button
                  gaEvent={{ action: sectionName, label: name }}
                  href={url}
                  icon={icon}
                  label={name}
                  rel="me"
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
