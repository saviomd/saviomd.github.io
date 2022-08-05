import { ComponentStory, ComponentMeta } from "@storybook/react";

import Anchor from "./Anchor";

export default {
  title: "library/Anchor",
  component: Anchor,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    event: { control: { type: null } },
    href: { control: { type: null } },
    target: { control: { type: null } },
  },
} as ComponentMeta<typeof Anchor>;

const Template: ComponentStory<typeof Anchor> = (args) => <Anchor {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Lorem ipsum dolor sit amet",
  href: "/",
};
