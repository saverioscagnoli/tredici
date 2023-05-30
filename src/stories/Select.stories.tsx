import type { Meta, StoryObj } from "@storybook/react";

import { Select } from "../components";

const meta: Meta<typeof Select> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Select",
  component: Select
};

export default meta;
type Story = StoryObj<typeof Select>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Example: Story = {
  args: {
    options: [
      "Tinky Winky",
      "Dipsy",
      "Laa-Laa",
      "Po",
      "Goku",
      "Vegeta",
      "Majin buu"
    ]
  },
  argTypes: {
    options: {
      control: {
        type: "array"
      }
    }
  },
  render: args => <Select {...args} />
};
