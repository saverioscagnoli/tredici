import type { Meta, StoryObj } from "@storybook/react";
import { Tredici, useTheme } from "../tredici";

import { Tooltip } from ".";
import React from "react";
import { Button } from "../button";

const meta: Meta<typeof Tooltip> = {
  component: Tooltip
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

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
        <div className="flex gap-10">
          <ThemeButton />
          <Tooltip content="procoio!!">
            <Button>ziope</Button>
          </Tooltip>
        </div>
      </Tredici>
    );
  }
};
