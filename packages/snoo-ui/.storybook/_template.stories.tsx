import { Meta, StoryObj } from "@storybook/react";
import React from "react";

const ImportMe = () => {
  return <></>;
};

/** Template Story - copy & paste me then change component import + title */
const Component = ImportMe;

const meta: Meta<ComponentType> = {
  title: "Folder/OptionalSubFolders/StoryTitle",
  component: Component,
  argTypes: {},
  args: {},
};

export const Default: StoryObj<ComponentType> = {};

export default meta;
type ComponentType = typeof Component;
