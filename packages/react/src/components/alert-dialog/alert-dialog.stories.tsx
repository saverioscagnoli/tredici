import type { Meta, StoryObj } from "@storybook/react";
import { Tredici, useTheme } from "../tredici";
import { AlertDialog } from ".";
import React from "react";
import { Button } from "../button";
import { Cross2Icon, EyeClosedIcon } from "@radix-ui/react-icons";

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
            <AlertDialog.Trigger.Icon icon={<EyeClosedIcon />} />
            <AlertDialog.Content>
              <div className="flex justify-between items-center">
                <AlertDialog.Title>Are you incredibly sure?</AlertDialog.Title>
                <AlertDialog.Cancel.Icon
                  colorScheme="crimson"
                  size="sm"
                  icon={<Cross2Icon />}
                />
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Pariatur dicta laboriosam veniam totam iste repellendus facere.
                Vitae nihil sint, ut quae excepturi libero nam quam nisi
                quaerat, quis quisquam animi.
              </p>
              <div className="w-full flex gap-4 mt-2 justify-end">
                <AlertDialog.Cancel colorScheme="b/w">
                  Cancel
                </AlertDialog.Cancel>
                <AlertDialog.Action colorScheme="crimson">
                  Delete
                </AlertDialog.Action>
              </div>
            </AlertDialog.Content>
          </AlertDialog>
        </div>
      </Tredici>
    );
  }
};
