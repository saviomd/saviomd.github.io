import { ComponentStory, ComponentMeta } from "@storybook/react";

import Section from "./Section";

export default {
  title: "library/Section",
  component: Section,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    bg: { control: "select", options: ["undefined", "light"] },
    id: { control: { type: null } },
  },
} as ComponentMeta<typeof Section>;

const Template: ComponentStory<typeof Section> = (args) => (
  <Section {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt reiciendis qui! Cumque reiciendis harum natus aliquid maxime, facilis aliquam quia, eum asperiores laborum et officia est, magnam obcaecati nesciunt!",
  hasPaddingY: true,
  id: "id",
};
