import { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const Component = Card;

const meta: Meta<ComponentType> = {
  title: "Molecules/Card",
  component: Component,
  argTypes: {},
  args: {},
};

export const Default: StoryObj<ComponentType> = {};

export default meta;
type ComponentType = typeof Component;
