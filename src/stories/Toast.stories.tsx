import type { Meta, StoryObj } from "@storybook/react";

import { Toast } from "../components";

const meta: Meta<typeof Toast> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Toast",
  component: Toast
};

export default meta;
type Story = StoryObj<typeof Toast>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Example: Story = {
  render: args => <Toast {...args} />
};
