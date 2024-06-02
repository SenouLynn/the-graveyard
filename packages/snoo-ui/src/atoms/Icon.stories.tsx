import { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

const Component = Icon;

const meta: Meta<ComponentType> = {
  title: "Atoms/Icon",
  component: Component,
  argTypes: {},
  args: {},
};

export const Default: StoryObj<ComponentType> = {};

export default meta;
type ComponentType = typeof Component;
