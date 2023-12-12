import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import { Slider } from ".";
import { Tredici, useTheme } from "../tredici";
import { useState, useEffect } from "react";
import React from "react";

const meta: Meta<typeof Slider> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  component: Slider
};

export default meta;
type Story = StoryObj<typeof Slider>;

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
          <Slider defaultValue={[50]} onValueCommit={v => console.log(v)} />
        </div>
      </Tredici>
    );
  }
};

export const Colors: Story = {
  render: () => {
    return (
      <Tredici>
        <div className="flex flex-col gap-4">
          <ThemeButton />
          <Slider defaultValue={[50]} colorScheme="amethyst" />
          <Slider defaultValue={[50]} colorScheme="teal" />
          <Slider defaultValue={[50]} colorScheme="green" />
          <Slider defaultValue={[50]} colorScheme="crimson" />
          <Slider defaultValue={[50]} colorScheme="yellow" />
          <Slider defaultValue={[50]} colorScheme="blue" />
          <Slider defaultValue={[50]} colorScheme="pink" />
          <Slider defaultValue={[50]} colorScheme="b/w" />
        </div>
      </Tredici>
    );
  }
};
