import type { Meta, StoryObj } from "@storybook/react";
import { Tredici, useTheme } from "../tredici";

import { Dialog } from ".";
import React from "react";
import { Button } from "../button";
import { Tooltip } from "../tooltip";

const meta: Meta<typeof Dialog> = {
  component: Dialog
};

export default meta;
type Story = StoryObj<typeof Dialog>;

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
        <div className="flex gap-4">
          <ThemeButton />

          <Dialog>
            <Tooltip>
              <Tooltip.Trigger asChild>
                <Dialog.Trigger asChild>
                  <Button>Open Dialog</Button>
                </Dialog.Trigger>
              </Tooltip.Trigger>
              <Tooltip.Body>Open the dialog</Tooltip.Body>
            </Tooltip>
            <Dialog.Content>
              <div className="flex justify-between items-center">
                <Dialog.Title>Dialog Title</Dialog.Title>
                <Dialog.Close />
              </div>
              <Dialog.Description>
                My name is Yoshikage Kira. I'm 33 years old. My house is in the
                northeast section of Morioh, where all the villas are, and I am
                not married. I work as an employee for the Kame Yu department
                stores, and I get home every day by 8 PM at the latest. I don't
                smoke, but I occasionally drink. I'm in bed by 11 PM, and make
                sure I get eight hours of sleep, no matter what. After having a
                glass of warm milk and doing about twenty minutes of stretches
                before going to bed, I usually have no problems sleeping until
                morning. Just like a baby, I wake up without any fatigue or
                stress in the morning. I was told there were no issues at my
                last check-up. I'm trying to explain that I'm a person who
                wishes to live a very quiet life. I take care not to trouble
                myself with any enemies, like winning and losing, that would
                cause me to lose sleep at night. That is how I deal with
                society, and I know that is what brings me happiness. Although,
                if I were to fight I wouldn't lose to anyone.
              </Dialog.Description>
              <div className="flex gap-4 mt-2 justify-end items-center">
                <Button colorScheme="gray">Holy moly!</Button>
                <Button>🤚🖐️🖖👌</Button>
              </div>
            </Dialog.Content>
          </Dialog>
        </div>
      </Tredici>
    );
  }
};
