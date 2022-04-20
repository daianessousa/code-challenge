import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Shape } from ".";

export default {
  title: "Card/Shape",
  component: Shape,
} as ComponentMeta<typeof Shape>;

const Template: ComponentStory<typeof Shape> = (args) => (
  <Shape {...args}></Shape>
);

export const Primary = Template.bind({});

Primary.args = {
  width: "250px",
  height: "400px",
};
