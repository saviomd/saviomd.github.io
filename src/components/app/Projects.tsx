import {
  Button,
  Card,
  Container,
  Heading,
  Image,
  Section,
  Tag,
} from "src/components/library";
import { projects } from "src/data";

function Projects() {
  const sectionName = "Projetos";

  return (
    <Container>
      <Section id="projects">
        <Heading level={1}>{sectionName}</Heading>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {projects.map(({ description, icon, name, tags, url }) => (
            <Card key={name}>
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-3">
                  <Image alt={name} aspectRatio="square" src={icon} />
                </div>
                <div className="col-span-9">
                  <Heading level={2}>{name}</Heading>
                  <p className="mb-4">{description}</p>
                  <ul>
                    {tags.map((tag) => (
                      <li className="mr-2 mb-2 inline-block" key={tag}>
                        <Tag>{tag}</Tag>
                      </li>
                    ))}
                  </ul>
                  <div className="text-right">
                    <Button
                      gaEvent={{ action: sectionName, label: name }}
                      href={url}
                      label="Visitar"
                      target="_blank"
                    />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </Container>
  );
}

export default Projects;
