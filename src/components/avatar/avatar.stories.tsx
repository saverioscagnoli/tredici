import type { Meta, StoryObj } from "@storybook/react";
import { Tredici, useTheme } from "../tredici";

import { Avatar } from ".";
import React from "react";
import { Button } from "../button";
import { PersonIcon } from "@radix-ui/react-icons";

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
          <Avatar>
            <Avatar.Image src={cat} />
            <Avatar.Fallback content="A" />
          </Avatar>

          <Avatar colorScheme="teal">
            <Avatar.Image src="invalid.url" />
            <Avatar.Fallback content="B" />
          </Avatar>

          <Avatar colorScheme="green">
            <Avatar.Image />
            <Avatar.Fallback content="C" />
          </Avatar>

          <Avatar colorScheme="crimson">
            <Avatar.Image />
            <Avatar.Fallback content="D" />
          </Avatar>

          <Avatar colorScheme="starship">
            <Avatar.Image />
            <Avatar.Fallback content="E" />
          </Avatar>

          <Avatar colorScheme="blue">
            <Avatar.Image />
            <Avatar.Fallback content="F" />
          </Avatar>

          <Avatar colorScheme="pink">
            <Avatar.Image />
            <Avatar.Fallback content="G" />
          </Avatar>

          <Avatar colorScheme="gray">
            <Avatar.Image />
            <Avatar.Fallback content="H" />
          </Avatar>
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
            <Avatar colorScheme="random" size="sm">
              <Avatar.Image />
              <Avatar.Fallback content="SS" />
            </Avatar>

            <Avatar colorScheme="random" size="md">
              <Avatar.Image />
              <Avatar.Fallback content="SS" />
            </Avatar>

            <Avatar colorScheme="random" size="lg">
              <Avatar.Image />
              <Avatar.Fallback content="SS" />
            </Avatar>
          </div>
        </div>
      </Tredici>
    );
  }
};
