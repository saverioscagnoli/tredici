import type { Meta, StoryObj } from "@storybook/react";
import { Tredici, useTheme } from "../tredici";

import { DropdownMenu } from ".";
import React, { useState } from "react";
import { Button } from "../button";

const meta: Meta<typeof DropdownMenu> = {
  component: DropdownMenu
};

export default meta;
type Story = StoryObj<typeof DropdownMenu>;

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
    const [checked, setChecked] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [value, setValue] = useState("1");

    return (
      <Tredici>
        <div className="flex gap-4">
          <ThemeButton />
          <DropdownMenu>
            <DropdownMenu.Trigger asChild>
              <Button>Trigger</Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content>
              <DropdownMenu.Group>
                <DropdownMenu.Label>Group Label</DropdownMenu.Label>
                <DropdownMenu.Item>Group Item 1</DropdownMenu.Item>
                <DropdownMenu.Item>Group Item 2</DropdownMenu.Item>
                <DropdownMenu.Item>Group Item 3</DropdownMenu.Item>
              </DropdownMenu.Group>

              <DropdownMenu.Separator />

              <DropdownMenu.Item>Item 4</DropdownMenu.Item>
              <DropdownMenu.Item>Item 5</DropdownMenu.Item>
              <DropdownMenu.Item>Item 6</DropdownMenu.Item>

              <DropdownMenu.Sub>
                <DropdownMenu.SubTrigger>sub menu</DropdownMenu.SubTrigger>
                <DropdownMenu.SubContent>
                  <DropdownMenu.Item>Sub Item 1</DropdownMenu.Item>
                  <DropdownMenu.CheckItem checked>
                    Sub Item 2
                  </DropdownMenu.CheckItem>
                  <DropdownMenu.Sub>
                    <DropdownMenu.SubTrigger>sub menu</DropdownMenu.SubTrigger>
                    <DropdownMenu.SubContent>
                      <DropdownMenu.Item>Inception Item 1</DropdownMenu.Item>
                      <DropdownMenu.CheckItem checked>
                        Sub Item 2
                      </DropdownMenu.CheckItem>
                    </DropdownMenu.SubContent>
                  </DropdownMenu.Sub>
                </DropdownMenu.SubContent>
              </DropdownMenu.Sub>

              <DropdownMenu.Separator />

              <DropdownMenu.CheckItem
                checked={checked}
                onClick={() => setChecked(p => !p)}
              >
                Show full URLs
              </DropdownMenu.CheckItem>
              <DropdownMenu.CheckItem
                checked={checked2}
                onClick={() => setChecked2(p => !p)}
              >
                Show hidden items
              </DropdownMenu.CheckItem>

              <DropdownMenu.Separator />

              <DropdownMenu.RadioGroup value={value} onValueChange={setValue}>
                <DropdownMenu.RadioItem value="1">
                  Show full URLs
                </DropdownMenu.RadioItem>
                <DropdownMenu.RadioItem value="2">
                  Show hidden items
                </DropdownMenu.RadioItem>
              </DropdownMenu.RadioGroup>

              <DropdownMenu.Arrow />
            </DropdownMenu.Content>
          </DropdownMenu>
        </div>
      </Tredici>
    );
  }
};
