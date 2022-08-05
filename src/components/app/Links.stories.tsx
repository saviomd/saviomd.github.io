import { ComponentStory, ComponentMeta } from "@storybook/react";

import Links from "./Links";

export default {
  title: "app/Links",
  component: Links,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Links>;

const Template: ComponentStory<typeof Links> = () => <Links />;

export const Default = Template.bind({});
Default.args = {};
