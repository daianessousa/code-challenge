import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Paragraph } from ".";

export default {
  title: "Card/Paragraph",
  component: Paragraph,
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => (
  <Paragraph {...args} />
);
export const Primary = Template.bind({});

Primary.args = {
  paragraph:
    "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur...",
};
