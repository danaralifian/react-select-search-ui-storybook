import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import "react-select-search-ui/dist/style.css";
import { Select } from "react-select-search-ui";

const OPTIONS = [
  { label: "All", value: "all" },
  { label: "Active All", value: "active" },
  { label: "Completed All All", value: "completed" },
  { label: "Option 4", value: "option-4" },
  { label: "Option 5", value: "option-5" },
  { label: "Option 6", value: "option-6" },
  { label: "Option 7", value: "option-7" },
];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Example/Select",
  component: Select,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "padded",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    id: { control: "text" },
    label: { control: "text" },
    multiple: { control: "boolean" },
    outlined: { control: "boolean" },
    withSearch: { control: "boolean" },
    portal: { control: "boolean" },
    zIndex: { control: "number" },
    options: { control: "object" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onChange: fn() },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SelectSearch: Story = {
  args: {
    label: "Label",
    options: OPTIONS,
    id: "select",
    portal: false,
    outlined: true,
    multiple: false,
    withSearch: false,
    zIndex: 0,
  },
};
