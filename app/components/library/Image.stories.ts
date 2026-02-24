import type { Meta, StoryObj } from "@storybook/react-vite";

import Image from "./Image";
import Logo from "/img/icon-192.png";

const meta = {
  title: "library/Image",
  component: Image,
  argTypes: {
    alt: { control: false },
    src: { control: false },
  },
} satisfies Meta<typeof Image>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: "alt",
    aspectRatio: "square",
    src: Logo,
  },
};
