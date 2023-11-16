import type { Meta, StoryObj } from "@storybook/react";
import { Tredici, useTheme } from "../tredici";

import { ContextMenu } from ".";
import React, { useState } from "react";
import { Button } from "../button";

const meta: Meta<typeof ContextMenu> = {
  component: ContextMenu
};

export default meta;
type Story = StoryObj<typeof ContextMenu>;

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
    const [checked, setChecked] = useState(true);
    const [checked2, setChecked2] = useState(false);
    const [value, setValue] = useState("1");

    return (
      <Tredici>
        <div className="flex gap-4">
          <ThemeButton />
          <ContextMenu>
            <ContextMenu.Trigger className="w-40 h-40 flex justify-center items-center bg-teal-500">
              Right click here
            </ContextMenu.Trigger>
            <ContextMenu.Body>
              <ContextMenu.Item>New file</ContextMenu.Item>
              <ContextMenu.Item>New folder</ContextMenu.Item>

              <ContextMenu.Separator />

              <ContextMenu.Item>Open file</ContextMenu.Item>
              <ContextMenu.Item>Open folder</ContextMenu.Item>

              <ContextMenu.Separator />

              <ContextMenu.Group>
                <ContextMenu.Label>Actions</ContextMenu.Label>
                <ContextMenu.Item>Copy</ContextMenu.Item>
                <ContextMenu.Item>Paste</ContextMenu.Item>
                <ContextMenu.Item>Cut</ContextMenu.Item>
              </ContextMenu.Group>

              <ContextMenu.Sub>
                <ContextMenu.SubTrigger>Save...</ContextMenu.SubTrigger>
                <ContextMenu.SubBody>
                  <ContextMenu.Item>Save as...</ContextMenu.Item>
                  <ContextMenu.Item>Save all</ContextMenu.Item>
                </ContextMenu.SubBody>
              </ContextMenu.Sub>

              <ContextMenu.Separator />

              <ContextMenu.CheckItem
                checked={checked}
                onCheckedChange={setChecked}
              >
                Show full urls
              </ContextMenu.CheckItem>
              <ContextMenu.CheckItem
                checked={checked2}
                onCheckedChange={setChecked2}
              >
                Show hidden files
              </ContextMenu.CheckItem>

              <ContextMenu.Separator />

              <ContextMenu.RadioGroup value={value} onValueChange={setValue}>
                <ContextMenu.Label>People</ContextMenu.Label>
                <ContextMenu.RadioItem value="1">
                  John Smith
                </ContextMenu.RadioItem>
                <ContextMenu.RadioItem value="2">
                  Jane Doe
                </ContextMenu.RadioItem>
              </ContextMenu.RadioGroup>
            </ContextMenu.Body>
          </ContextMenu>
        </div>
      </Tredici>
    );
  }
};
