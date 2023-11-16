import type { Meta, StoryObj } from "@storybook/react";
import { Tredici, useTheme } from "../tredici";
import { AspectRatio } from ".";
import React from "react";
import { Button } from "../button";

//@ts-ignore
import raccoon from "./pics/raccoon.jpg";

const meta: Meta<typeof AspectRatio> = {
  component: AspectRatio
};

export default meta;
type Story = StoryObj<typeof AspectRatio>;

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
        <AspectRatio
          ratio={16 / 9}
          className="w-96 h-96 flex justify-center items-center border mt-1"
        >
          <img src={raccoon} />
        </AspectRatio>
      </Tredici>
    );
  }
};
