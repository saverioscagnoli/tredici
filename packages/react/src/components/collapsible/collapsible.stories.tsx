import type { Meta, StoryObj } from "@storybook/react";
import { Tredici, useTheme } from "../tredici";

import { Collapsible } from ".";
import React from "react";
import { Button } from "../button";

const meta: Meta<typeof Collapsible> = {
  component: Collapsible
};

export default meta;
type Story = StoryObj<typeof Collapsible>;

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
          <ThemeButton />
          <Collapsible>
            <Collapsible.Trigger>Collapsible Trigger</Collapsible.Trigger>

            <Collapsible.Content>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
              excepturi ad tempora sit, obcaecati quia ea consectetur modi
              dolore placeat fuga, reprehenderit cum explicabo inventore!
              Aperiam rem totam culpa minima!
            </Collapsible.Content>
          </Collapsible>
        </div>
      </Tredici>
    );
  }
};
