import { ComponentStory, ComponentMeta } from "@storybook/react";

import Contact from "./Contact";

export default {
  title: "app/Contact",
  component: Contact,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Contact>;

const Template: ComponentStory<typeof Contact> = () => <Contact />;

export const Default = Template.bind({});
Default.args = {};
