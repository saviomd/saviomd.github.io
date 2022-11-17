import { ComponentStory, ComponentMeta } from "@storybook/react";

import Container from "./Container";

export default {
  title: "library/Container",
  component: Container,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
  <Container {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt reiciendis qui! Cumque reiciendis harum natus aliquid maxime, facilis aliquam quia, eum asperiores laborum et officia est, magnam obcaecati nesciunt!",
};