import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "../components";

const meta: Meta<typeof Input> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Input",
  component: Input
};

export default meta;
type Story = StoryObj<typeof Input>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Text: Story = {
  render: () => <Input />
};

export const Password: Story = {
  render: () => <Input type="password" />
};

export const Number: Story = {
  render: () => <Input type="number" />
};

export const Checkbox: Story = {
  render: () => <Input type="checkbox" />
};
