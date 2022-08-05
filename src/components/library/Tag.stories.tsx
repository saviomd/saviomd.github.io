import { ComponentStory, ComponentMeta } from "@storybook/react";

import Tag from "./Tag";

export default {
  title: "library/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
  },
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Lorem ipsum dolor sit amet",
};
