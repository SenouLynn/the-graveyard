import { Meta, StoryObj } from "@storybook/react";
import { GridContainer } from "./GridContainer";

const Component = GridContainer;

const meta: Meta<ComponentType> = {
  title: "Atoms/GridContainer",
  component: Component,
  argTypes: {},
  args: {},
};

export const Default: StoryObj<ComponentType> = {};

export default meta;
type ComponentType = typeof Component;
