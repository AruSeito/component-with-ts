import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
// import { Button, ButtonProps } from "./button";
import Button, { ButtonProps, ButtonType, ButtonSize } from "./button";
export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
    btnType: {
      control: {
        type: "select",
        options: [
          ButtonType.Default,
          ButtonType.Primary,
          ButtonType.Danger,
          ButtonType.Link,
        ],
      },
    },
    size: {
      control: {
        type: "select",
        options: [ButtonSize.Large, ButtonSize.Small],
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  btnType: ButtonType.Default,
  children: "按钮",
};
export const Primary = Template.bind({});
Primary.args = {
  btnType: ButtonType.Primary,
};
export const Large = Template.bind({});
Large.args = {
  size: ButtonSize.Large,
  children: "按钮",
};

export const Small = Template.bind({});
Small.args = {
  size: ButtonSize.Small,
  children: "按钮",
};
