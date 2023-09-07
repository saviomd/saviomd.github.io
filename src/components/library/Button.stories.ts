import {
  faGithub,
  faInstagram,
  faMastodon,
  faPinterest,
  faXbox,
} from "@fortawesome/free-brands-svg-icons";
import type { Meta, StoryObj } from "@storybook/react";

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
    gaEvent: { control: { type: null } },
    href: { control: { type: null } },
    icon: {
      control: {
        type: "select",
      },
      options: Object.keys(icons),
      mapping: icons,
    },
    rel: { control: { type: null } },
    target: { control: { type: null } },
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
    href: "./",
    label: "Button",
    onClick: undefined,
    variant: "primary",
  },
};
