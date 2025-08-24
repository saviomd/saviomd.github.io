import type { Meta, StoryObj } from "@storybook/react-vite";

import Section from "./Section";

const meta = {
  title: "library/Section",
  component: Section,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    bg: { control: "select", options: ["undefined", "light"] },
    id: { control: false },
  },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt reiciendis qui! Cumque reiciendis harum natus aliquid maxime, facilis aliquam quia, eum asperiores laborum et officia est, magnam obcaecati nesciunt!",
    hasPaddingY: true,
    id: "id",
  },
};
