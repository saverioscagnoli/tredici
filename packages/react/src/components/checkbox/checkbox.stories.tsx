import type { Meta, StoryObj } from "@storybook/react";
import { Tredici, useTheme } from "../tredici";

import { Checkbox } from ".";
import React from "react";
import { Button } from "../button";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

const ThemeButton = () => {
  const { theme, toggle } = useTheme();

  return <Button onClick={toggle}>{theme}</Button>;
};

export const Primary: Story = {
  render: () => {
    return (
      <Tredici>
        <div className="flex flex-col gap-4">
          <ThemeButton />
          <Checkbox />
          <Checkbox defaultChecked colorScheme="teal" />
          <Checkbox defaultChecked colorScheme="green" />
          <Checkbox defaultChecked colorScheme="crimson" />
          <Checkbox defaultChecked colorScheme="yellow" />
          <Checkbox defaultChecked colorScheme="blue" />
          <Checkbox defaultChecked colorScheme="pink" />
          <Checkbox defaultChecked colorScheme="b/w" />
        </div>
      </Tredici>
    );
  }
};
