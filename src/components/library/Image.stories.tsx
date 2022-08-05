import { ComponentStory, ComponentMeta } from "@storybook/react";

import Image from "./Image";
import Logo from "/img/icon-192.png";

export default {
  title: "library/Image",
  component: Image,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    alt: { control: { type: null } },
    src: { control: { type: null } },
  },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const Default = Template.bind({});
Default.args = {
  alt: "alt",
  aspectRatio: "square",
  src: Logo,
};
