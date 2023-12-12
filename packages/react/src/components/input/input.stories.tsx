import type { Meta, StoryObj } from "@storybook/react";
import { Tredici, useTheme } from "../tredici";

import { Input } from ".";
import React from "react";
import { Button } from "../button";

const meta: Meta<typeof Input> = {
  component: Input
};

export default meta;
type Story = StoryObj<typeof Input>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

const ThemeButton = ({ colorScheme }: { colorScheme? }) => {
  const { theme, toggle } = useTheme();

  return (
    <Button onClick={toggle} colorScheme={colorScheme}>
      {theme}
    </Button>
  );
};

export const Primary: Story = {
  render: () => {
    return (
      <Tredici>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <ThemeButton />
            <Input />
          </div>

          <div className="flex gap-4">
            <ThemeButton colorScheme="teal" />
            <Input colorScheme="teal" />
          </div>

          <div className="flex gap-4">
            <ThemeButton colorScheme="green" />
            <Input colorScheme="green" />
          </div>

          <div className="flex gap-4">
            <ThemeButton colorScheme="crimson" />
            <Input colorScheme="crimson" />
          </div>

          <div className="flex gap-4">
            <ThemeButton colorScheme="yellow" />
            <Input colorScheme="yellow" />
          </div>

          <div className="flex gap-4">
            <ThemeButton colorScheme="blue" />
            <Input colorScheme="blue" />
          </div>

          <div className="flex gap-4">
            <ThemeButton colorScheme="pink" />
            <Input colorScheme="pink" />
          </div>

          <div className="flex gap-4">
            <ThemeButton colorScheme="gray" />
            <Input colorScheme="gray" />
          </div>
        </div>
      </Tredici>
    );
  }
};
