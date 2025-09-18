import type { Meta, StoryObj } from "@storybook/react-vite";

import Heading, { levelKeys } from "./Heading";
import type { HeadingLevelType } from "./Heading";

const meta = {
  title: "library/Heading",
  component: Heading,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    level: {
      control: {
        min: levelKeys[0],
        max: levelKeys.at(-1),
      },
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Lorem ipsum dolor sit amet",
    level: levelKeys[0] as HeadingLevelType,
  },
};
