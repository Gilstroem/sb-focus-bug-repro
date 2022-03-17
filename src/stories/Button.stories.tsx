import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { userEvent, within, waitFor } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

import { Button } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    onClick: { action: true },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

Primary.play = async ({ args }) => {
  await userEvent.tab();
  await userEvent.keyboard("{Enter}");

  await waitFor(() => expect(args.onClick).toHaveBeenCalled());
};
