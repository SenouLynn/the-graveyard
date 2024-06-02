import { Meta, StoryObj } from "@storybook/react";
import { IconText } from "./IconText";

const Component = IconText;

const meta: Meta<ComponentType> = {
  title: "Molecules/IconText",
  component: Component,
  argTypes: {},
  args: {},
};

export const Default: StoryObj<ComponentType> = {};

export default meta;
type ComponentType = typeof Component;
