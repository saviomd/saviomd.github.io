import type { Meta, StoryObj } from "@storybook/react";

import Anchor from "./Anchor";

const meta = {
  title: "library/Anchor",
  component: Anchor,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    gaEvent: { control: { type: null } },
    href: { control: { type: null } },
    target: { control: { type: null } },
  },
} satisfies Meta<typeof Anchor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Lorem ipsum dolor sit amet",
    href: "/",
  },
};
