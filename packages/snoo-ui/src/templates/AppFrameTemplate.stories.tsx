import { Meta, StoryObj } from "@storybook/react";
import { AppFrameTemplate } from "./AppFrameTemplate";

const Component = AppFrameTemplate;

const meta: Meta<ComponentType> = {
  title: "Templates/AppFrameTemplate",
  component: Component,
  argTypes: {},
  args: {},
};

export const Default: StoryObj<ComponentType> = {
  args: {
    Navbar: () => (
      <div className="bg-black-russian-900 px-3 py-2 text-center">
        <h1>Nav</h1>
      </div>
    ),
    Main: () => (
      <div className="px-3 py-2 text-center bg-lochinvar-50 grow ">
        <h1>Main Section</h1>
      </div>
    ),
    Footer: () => (
      <div className="bg-black-russian-50  px-3 py-2 text-center">
        <h1>Footer</h1>
      </div>
    ),
  },
};

export default meta;
type ComponentType = typeof Component;
