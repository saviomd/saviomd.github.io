import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button, { variantKeys } from "./Button";

export default {
  title: "library/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    event: { control: { type: null } },
    href: { control: { type: null } },
    target: { control: { type: null } },
    variant: {
      control: "select",
      options: variantKeys,
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: "./",
  label: "Button",
  variant: "primary",
};
