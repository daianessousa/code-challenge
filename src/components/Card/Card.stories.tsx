import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Card } from ".";

export default {
  title: "Card/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;
export const Primary = Template.bind({});

Primary.args = {
  title: "Anitta Is Coming For All Of Your Awards",
  description:
    "If you pay attention to pop music on a global scale, you almost certainly already know about Brazilian pop star Anitta.",
  source: "Google News",
  url: "www.google.com.br",
};
