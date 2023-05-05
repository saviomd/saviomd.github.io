import type { Meta, StoryObj } from "@storybook/react";

import Links from "./Links";

const meta = {
  title: "app/Links",
  component: Links,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Links>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
