import { Meta, StoryObj } from "@storybook/react";
import * as Inputs from "./FormInputs";
const Component = () => <></>;

const meta: Meta<ComponentType> = {
  title: "Atoms/Inputs",
  component: Component,
  argTypes: {},
  args: {},
};

export const TextInput: StoryObj<typeof Inputs.TextInput> = {};
export const NumberInput: StoryObj<typeof Inputs.NumberInput> = {};
export const FormattedNumberInput: StoryObj<
  typeof Inputs.FormattedNumberInput
> = {};
export const EmailInput: StoryObj<typeof Inputs.EmailInput> = {};
export const TextAreaInput: StoryObj<typeof Inputs.TextAreaInput> = {};
export const SelectInput: StoryObj<typeof Inputs.SelectInput> = {};
export const StyledSelectInput: StoryObj<typeof Inputs.StyledSelectInput> = {};
export const CheckboxInput: StoryObj<typeof Inputs.CheckboxInput> = {};
export const RadioInput: StoryObj<typeof Inputs.RadioInput> = {};
export const DateInput: StoryObj<typeof Inputs.DateInput> = {};
export const RangeSliderInput: StoryObj<typeof Inputs.RangeSliderInput> = {};

export default meta;
type ComponentType = typeof Component;
