import { ComponentStory, ComponentMeta } from "@storybook/react";

import Heading, { HeadingLevelType, levelKeys } from "./Heading";

export default {
  title: "library/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    level: {
      control: {
        min: levelKeys[0],
        max: levelKeys[levelKeys.length - 1],
      },
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "Lorem ipsum dolor sit amet",
  level: levelKeys[0] as HeadingLevelType,
};
