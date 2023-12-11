import type { Meta, StoryObj } from "@storybook/react";
import { Tredici, useTheme } from "../tredici";

import { Badge } from ".";
import React from "react";
import { Button } from "../button";

const meta: Meta<typeof Badge> = {
  component: Badge
};

export default meta;
type Story = StoryObj<typeof Badge>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

const ThemeButton = () => {
  const { theme, toggle } = useTheme();

  return <Button onClick={toggle}>{theme}</Button>;
};

export const Primary: Story = {
  render: () => {
    return (
      <Tredici>
        <div className="w-full flex flex-col gap-4 justify-center">
          <ThemeButton />
          <Badge label="Badge" colorScheme="amethyst" className="self-start" />
          <Badge label="Badge" colorScheme="teal" className="self-start" />
          <Badge label="Badge" colorScheme="green" className="self-start" />
          <Badge label="Badge" colorScheme="crimson" className="self-start" />
          <Badge label="Badge" colorScheme="yellow" className="self-start" />
          <Badge label="Badge" colorScheme="blue" className="self-start" />
          <Badge label="Badge" colorScheme="pink" className="self-start" />
          <Badge label="Badge" colorScheme="b/w" className="self-start" />

          <Badge
            label="Badge"
            variant="outline"
            colorScheme="amethyst"
            className="self-start"
          />
          <Badge
            label="Badge"
            variant="outline"
            colorScheme="teal"
            className="self-start"
          />
          <Badge
            label="Badge"
            variant="outline"
            colorScheme="green"
            className="self-start"
          />
          <Badge
            label="Badge"
            variant="outline"
            colorScheme="crimson"
            className="self-start"
          />
          <Badge
            label="Badge"
            variant="outline"
            colorScheme="yellow"
            className="self-start"
          />
          <Badge
            label="Badge"
            variant="outline"
            colorScheme="blue"
            className="self-start"
          />
          <Badge
            label="Badge"
            variant="outline"
            colorScheme="pink"
            className="self-start"
          />
          <Badge
            label="Badge"
            variant="outline"
            colorScheme="b/w"
            className="self-start"
          />
        </div>
      </Tredici>
    );
  }
};
