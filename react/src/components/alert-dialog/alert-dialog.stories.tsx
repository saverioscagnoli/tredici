import type { Meta, StoryObj } from "@storybook/react";

import { AlertDialog } from "./alert-dialog";
import { Frame } from "~/frame";
import { Button } from "~/components/button/button";

const meta: Meta<typeof AlertDialog> = {
  component: AlertDialog
};

export default meta;
type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
  render: props => {
    return (
      <Frame>
        <div className="w-fit h-fit  absolute top-50">
          <p className="text-center">Other content</p>
          <div className="flex space-x-2">
            <Button>Button 1</Button>
            <Button>Button 2</Button>
          </div>
        </div>
        <AlertDialog {...props}>
          <AlertDialog.Trigger asChild>
            <Button>Open Dialog</Button>
          </AlertDialog.Trigger>
          <AlertDialog.Content>
            <AlertDialog.Title>Alert Dialog title</AlertDialog.Title>
            <AlertDialog.Description>
              Are you sure you want to delete this item? <br /> This action
              cannot be undone.
            </AlertDialog.Description>
            <div className="flex justify-end space-x-2 mt-4">
              <AlertDialog.Cancel asChild>
                <Button colorScheme="gray" variant="secondary">
                  Cancel
                </Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <Button colorScheme="red">Delete</Button>
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog>
      </Frame>
    );
  }
};
