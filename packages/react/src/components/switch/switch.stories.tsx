import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import { Switch } from ".";
import { Tredici, useTheme } from "../tredici";
import { useState } from "react";
import React from "react";

const meta: Meta<typeof Switch> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  component: Switch
};

export default meta;
type Story = StoryObj<typeof Switch>;

const ThemeButton = ({ colorScheme }: { colorScheme? }) => {
  const { theme, toggle } = useTheme();

  return (
    <Button onClick={toggle} colorScheme={colorScheme}>
      {theme}
    </Button>
  );
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Normal: Story = {
  render: () => {
    return (
      <Tredici>
        <div className="flex flex-col gap-4">
          <ThemeButton />
          <Switch defaultChecked />
          <Switch defaultChecked colorScheme="teal" />
          <Switch defaultChecked colorScheme="green" />
          <Switch defaultChecked colorScheme="crimson" />
          <Switch defaultChecked colorScheme="yellow" />
          <Switch defaultChecked colorScheme="blue" />
          <Switch defaultChecked colorScheme="pink" />
          <Switch defaultChecked colorScheme="gray" />
        </div>
      </Tredici>
    );
  }
};

export const Sizes: Story = {
  render: () => {
    return (
      <Tredici>
        <div className="flex flex-col gap-4">
          <ThemeButton />
          <Switch defaultChecked size="sm" />
          <Switch defaultChecked size="md" />
          <Switch defaultChecked size="lg" />
        </div>
      </Tredici>
    );
  }
};
