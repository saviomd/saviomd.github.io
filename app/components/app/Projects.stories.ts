import type { Meta, StoryObj } from "@storybook/react-vite";

import Projects from "./Projects";

const meta = {
  title: "app/Projects",
  component: Projects,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Projects>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
