import { Meta, StoryObj } from "@storybook/react";
import { FlexContainer } from "./FlexContainer";

const Component = FlexContainer;

const meta: Meta<ComponentType> = {
  title: "Atoms/FlexContainer",
  component: Component,
  argTypes: {},
  args: {},
};

export const Default: StoryObj<ComponentType> = {};

export default meta;
type ComponentType = typeof Component;
