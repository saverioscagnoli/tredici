import type { Meta, StoryObj } from "@storybook/react";
import { Tredici, useTheme } from "../tredici";
import Tex from "react-hook-mathjax";

import { Popover } from ".";
import React from "react";
import { Button } from "../button";

const meta: Meta<typeof Popover> = {
  component: Popover
};

export default meta;
type Story = StoryObj<typeof Popover>;

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
        <div className="h-[90vh] flex flex-col justify-between gap-4">
          <ThemeButton />
          <Popover>
            <Popover.Trigger>
              <p className="font-semibold">
                What did Gauss find out at 10 years old?
              </p>
            </Popover.Trigger>
            <Popover.Body className="flex justify-center items-center">
              <Tex latex="\sum_{k=1}^n = \frac{n(n-1)}{2}" />
              <Popover.Arrow />
            </Popover.Body>
          </Popover>

          <Popover>
            <Popover.Trigger>
              <p className="font-semibold">
                What did Gauss find out at 10 years old?
              </p>
            </Popover.Trigger>
            <Popover.Body className="flex justify-center items-center">
              <Tex latex="\sum_{k=1}^n = \frac{n(n-1)}{2}" />
              <Popover.Arrow />
            </Popover.Body>
          </Popover>
        </div>
      </Tredici>
    );
  }
};
