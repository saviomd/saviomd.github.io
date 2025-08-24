import {
  faGithub,
  faInstagram,
  faMastodon,
  faPinterest,
  faXbox,
} from "@fortawesome/free-brands-svg-icons";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import Button, { variantKeys } from "./Button";

const icons = {
  null: null,
  faGithub,
  faInstagram,
  faMastodon,
  faPinterest,
  faXbox,
};

const meta = {
  title: "library/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    gaEvent: { control: false },
    href: { control: false },
    icon: {
      control: {
        type: "select",
      },
      options: Object.keys(icons),
      mapping: icons,
    },
    rel: { control: false },
    target: { control: false },
    variant: {
      control: "select",
      options: variantKeys,
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Button",
    onClick: fn(),
    variant: "primary",
  },
};
