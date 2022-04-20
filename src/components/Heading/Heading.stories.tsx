import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { HeadingSM } from ".";

export default {
  title: "Card/Heading",
  component: HeadingSM,
} as ComponentMeta<typeof HeadingSM>;

const Template: ComponentStory<typeof HeadingSM> = (args) => (
  <HeadingSM {...args} />
);
export const Primary = Template.bind({});

Primary.args = {
  title: "Contrary to popular belief, Lorem Ipsum is not simply random text.",
};
