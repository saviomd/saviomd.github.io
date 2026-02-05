import type { Meta, StoryObj } from "@storybook/react-vite";

import Projects from "./Projects";

const meta = {
  title: "app/Projects",
  component: Projects,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Projects>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
