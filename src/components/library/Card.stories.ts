import type { Meta, StoryObj } from "@storybook/react";

import Card from "./Card";

const meta = {
  title: "library/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt reiciendis qui! Cumque reiciendis harum natus aliquid maxime, facilis aliquam quia, eum asperiores laborum et officia est, magnam obcaecati nesciunt!",
  },
};
