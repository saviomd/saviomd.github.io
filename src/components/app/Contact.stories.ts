import type { Meta, StoryObj } from "@storybook/react-vite";

import Contact from "./Contact";

const meta = {
  title: "app/Contact",
  component: Contact,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Contact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
