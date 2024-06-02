import { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";

const ImportMe = (props: {
  value: string;
  onChange: () => void;
  text: string;
}) => {
  return (
    <>
      <p>Value: {props.value}</p>
      <button onClick={() => props.onChange()}>{props.text}</button>
    </>
  );
};

//Import componnent + assign to template var/type
const Component = ImportMe;

const meta: Meta<ComponentType> = {
  //Place story in Storybook UI folder structure
  title: "Folder/OptionalSubFolders/StoryTitle",

  //Render component, option to wrap here if needed
  component: Component,

  //Decorators provide global wrappers for child stories
  decorators: [
    (Story) => {
      return (
        <div className="p-2">
          <Story />
        </div>
      );
    },
  ],

  //ArgTypes provide global prop paramterization control for all child stories
  argTypes: {},
  //Args provide global prop values for all child stories
  args: {},
};

//Need at least one StoryObj to render in Storybook UI
export const Default: StoryObj<ComponentType> = {};

//Notice use of decorators to wrap story - this will render inside the parent decorator
export const WithCustomWrapper: StoryObj<ComponentType> = {
  decorators: [
    (Story) => {
      return (
        <div className="p-4 bg-gray-100">
          <Story />
        </div>
      );
    },
  ],
};

export const WithCustomStateMgmg: StoryObj<ComponentType> = {
  args: {
    value: "Initial State",
    text: "Walk through Story state mgmt",
  },
  decorators: [
    (Story, args) => {
      const [value, setValue] = useState(args.value);
      return (
        <div className="p-4 bg-gray-100">
          <Story
            value={value}
            onChange={() => setValue("Changed")}
            text={args.text}
          />

          <button onClick={() => setValue("Initial State")}>Reset</button>
        </div>
      );
    },
  ],
};

export default meta;
type ComponentType = typeof Component;
