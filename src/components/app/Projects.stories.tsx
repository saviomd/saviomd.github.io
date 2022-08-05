import { ComponentStory, ComponentMeta } from "@storybook/react";

import Projects from "./Projects";

export default {
  title: "app/Projects",
  component: Projects,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Projects>;

const Template: ComponentStory<typeof Projects> = () => <Projects />;

export const Default = Template.bind({});
Default.args = {};
