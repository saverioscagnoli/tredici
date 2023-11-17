import type { Meta, StoryObj } from "@storybook/react";
import { Tredici, useTheme } from "../tredici";

import { Tabs } from ".";
import React from "react";
import { Button } from "../button";

//@ts-ignore
import cat from "./cat.jpg";

const meta: Meta<typeof Tabs> = {
  component: Tabs
};

export default meta;
type Story = StoryObj<typeof Tabs>;

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
        <ThemeButton />
        <Tabs>
          <Tabs.List>
            <Tabs.Trigger value="1">Tab 1</Tabs.Trigger>
            <Tabs.Trigger value="2">Tab 2</Tabs.Trigger>
            <Tabs.Trigger value="3">Tab 3</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content className="border border-gray-500/20" value="1">
            Content 1
          </Tabs.Content>
          <Tabs.Content className="border border-gray-500/20" value="2">
            Content 2
          </Tabs.Content>
          <Tabs.Content className="border border-gray-500/20" value="3">
            Content 3
          </Tabs.Content>
        </Tabs>
      </Tredici>
    );
  }
};
