import type { Meta, StoryObj } from "@storybook/react";

import Image from "./Image";
import Logo from "/img/icon-192.png";

const meta = {
  title: "library/Image",
  component: Image,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    alt: { control: { type: null } },
    src: { control: { type: null } },
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
