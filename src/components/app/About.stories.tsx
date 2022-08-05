import { ComponentStory, ComponentMeta } from "@storybook/react";

import About from "./About";

export default {
  title: "app/About",
  component: About,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = () => <About />;

export const Default = Template.bind({});
Default.args = {};
