import type { Meta, StoryObj } from "@storybook/react";
import { Tredici, useTheme } from "../tredici";

import { Menubar } from ".";
import React from "react";
import { Button } from "../button";

const meta: Meta<typeof Menubar> = {
  component: Menubar
};

export default meta;
type Story = StoryObj<typeof Menubar>;

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

          <Menubar className="self-start">
            <Menubar.Menu>
              <Menubar.Trigger>
                  File
              </Menubar.Trigger>
              <Menubar.Body>
                <Menubar.Item>New file</Menubar.Item>
                <Menubar.Item>Open file</Menubar.Item>
                <Menubar.Item>Save file</Menubar.Item>
              </Menubar.Body>
            </Menubar.Menu>

            <Menubar.Menu>
              <Menubar.Trigger>
                  Edit
              </Menubar.Trigger>
              <Menubar.Body>
                <Menubar.CheckItem checked>Fresh</Menubar.CheckItem>
                <Menubar.CheckItem checked>Dripped</Menubar.CheckItem>
              </Menubar.Body>
            </Menubar.Menu>

            <Menubar.Menu>
              <Menubar.Trigger>
                  View
              </Menubar.Trigger>
              <Menubar.Body>
                <Menubar.Item>Zoom in</Menubar.Item>
                <Menubar.Item>Zoom out</Menubar.Item>
              </Menubar.Body>
            </Menubar.Menu>
          </Menubar>
        </div>
      </Tredici>
    );
  }
};
