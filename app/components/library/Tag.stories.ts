import type { Meta, StoryObj } from "@storybook/react-vite";

import Tag from "./Tag";

const meta = {
  title: "library/Tag",
  component: Tag,
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Lorem ipsum dolor sit amet",
  },
};
