import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Subtitle } from ".";

export default {
  title: "Card/Subtitle",
  component: Subtitle,
} as ComponentMeta<typeof Subtitle>;

const Template: ComponentStory<typeof Subtitle> = (args) => (
  <Subtitle {...args} />
);
export const Primary = Template.bind({});

Primary.args = {
  subtitle: "Google News",
};
