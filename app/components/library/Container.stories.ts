import type { Meta, StoryObj } from "@storybook/react-vite";

import Container from "./Container";

const meta = {
  title: "library/Container",
  component: Container,
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis nesciunt reiciendis qui! Cumque reiciendis harum natus aliquid maxime, facilis aliquam quia, eum asperiores laborum et officia est, magnam obcaecati nesciunt!",
  },
};
