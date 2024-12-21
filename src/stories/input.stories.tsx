import React from "react";
import type { Meta, StoryFn } from "@storybook/react";
import { Input, InputProps } from "../../packages/input/src/input";
import { JSX } from "react/jsx-runtime";

export default {
  title: "Components/Input",
  component: Input,
  args: {
    label: "Default Label",
    error: "",
  },
} as Meta<InputProps>;

const Template: StoryFn<InputProps> = (
  args: JSX.IntrinsicAttributes &
    Omit<InputProps, "ref"> &
    React.RefAttributes<HTMLInputElement>
) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Default Label",
  type: "text",
};

export const WithError = Template.bind({});
WithError.args = {
  label: "Label with Error",
  type: "text",
  error: "This is an error message",
};

export const WithoutLabel = Template.bind({});
WithoutLabel.args = {
  type: "text",
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  label: "Password",
  type: "password",
  error: "",
};
