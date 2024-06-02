import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

/** Template Story - copy & paste me then change component import + title */
const Component = Button;

const meta: Meta<ComponentType> = {
  title: "Atoms/Button",
  component: Component,
  argTypes: {},
  args: {},
};

export const Default: StoryObj<ComponentType> = {};

export default meta;
type ComponentType = typeof Component;
