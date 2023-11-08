import type { Meta, StoryObj } from "@storybook/react";
import { Tredici, useTheme } from "../tredici";
import { AlertDialog } from ".";
import React from "react";
import { Button } from "../button";

//@ts-ignore
import raccoon from "./pics/raccoon.jpg";

const meta: Meta<typeof AlertDialog> = {
  component: AlertDialog
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

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
        <div className="flex gap-8">
          <ThemeButton />
          <AlertDialog>
            <AlertDialog.Trigger>
              <Button>Open Dialog</Button>
            </AlertDialog.Trigger>
            <AlertDialog.Body>
              <div className="flex justify-between items-center">
                <AlertDialog.Title>Are you incredibly sure?</AlertDialog.Title>
                <AlertDialog.Close />
              </div>
              <AlertDialog.Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur dicta laboriosam veniam totam iste repellendus facere.
                Vitae nihil sint, ut quae excepturi libero nam quam nisi
                quaerat, quis quisquam animi.
              </AlertDialog.Description>
              <div className="w-full flex gap-4 mt-2 justify-end">
                <AlertDialog.Cancel>
                  <Button colorScheme="gray">Cancel</Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action>
                  <Button colorScheme="crimson">Delete</Button>
                </AlertDialog.Action>
              </div>
            </AlertDialog.Body>
          </AlertDialog>
        </div>
      </Tredici>
    );
  }
};
