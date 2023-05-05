import {
  Button,
  Card,
  Container,
  Heading,
  Image,
  Section,
  Tag,
} from "../library";
import { projects } from "../../data";

function Projects() {
  const sectionName = "Projetos";

  return (
    <Container>
      <Section id="projects">
        <Heading level={1}>{sectionName}</Heading>
        <div className="grid grid-cols-12 gap-4">
          {projects.map(({ description, icon, name, tags, url }) => (
            <div className="col-span-12 md:col-span-6" key={name}>
              <Card>
                <div className="grid grid-cols-12 gap-4">
                  <div className="col-span-3">
                    <Image alt={name} aspectRatio="square" src={icon} />
                  </div>
                  <div className="col-span-9">
                    <Heading level={2}>{name}</Heading>
                    <p className="mb-4">{description}</p>
                    <ul>
                      {tags.map((tag) => (
                        <li className="mb-2 mr-2 inline-block" key={tag}>
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
            </div>
          ))}
        </div>
      </Section>
    </Container>
  );
}

export default Projects;
