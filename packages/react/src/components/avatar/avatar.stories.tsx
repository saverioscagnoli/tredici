import type { Meta, StoryObj } from "@storybook/react";
import { Tredici, useTheme } from "../tredici";
import { Avatar } from ".";
import React from "react";
import { Button } from "../button";

//@ts-ignore
import cat from "./cat.jpg";

const meta: Meta<typeof Avatar> = {
  component: Avatar
};

export default meta;
type Story = StoryObj<typeof Avatar>;

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
          <Avatar imageSrc={cat} fallback="A" />
          <Avatar colorScheme="teal" imageSrc="invalid" fallback="B" />
          <Avatar colorScheme="green" fallback="C" />
          <Avatar colorScheme="crimson" fallback="D" />
          <Avatar colorScheme="yellow" fallback="E" />
          <Avatar colorScheme="blue" fallback="F" />
          <Avatar colorScheme="pink" fallback="G" />
          <Avatar colorScheme="b/w" fallback="G" />
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
          <div className="flex gap-4">
            <Avatar colorScheme="random" size="sm" fallback="SS" />
            <Avatar colorScheme="random" size="md" fallback="SS" />
            <Avatar colorScheme="random" size="lg" fallback="SS" />
          </div>
        </div>
      </Tredici>
    );
  }
};
