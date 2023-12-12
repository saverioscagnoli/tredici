import type { Meta, StoryObj } from "@storybook/react";
import { Tredici, useTheme } from "../tredici";

import { Spinner } from ".";
import React from "react";
import { Button } from "../button";

const meta: Meta<typeof Spinner> = {
  component: Spinner
};

export default meta;
type Story = StoryObj<typeof Spinner>;

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
        <div className="flex flex-col gap-8">
          <ThemeButton />
          <Spinner />
          <Spinner colorScheme="teal" />
          <Spinner colorScheme="green" />
          <Spinner colorScheme="crimson" />
          <Spinner colorScheme="yellow" />
          <Spinner colorScheme="blue" />
          <Spinner colorScheme="pink" />
          <Spinner colorScheme="gray" />
          <Button className="self-start" colorScheme="gray">
            <Spinner className="mr-2" colorScheme="gray" /> With Spinner
          </Button>
        </div>
      </Tredici>
    );
  }
};
