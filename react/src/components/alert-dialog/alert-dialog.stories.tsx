import type { Meta, StoryObj } from "@storybook/react";
import { AlertDialog } from "./alert-dialog";
import { Button } from "../button/button";
import { cn } from "~/lib/utils";

import "~/index.css";

const meta: Meta<typeof AlertDialog> = {
  title: "Components/AlertDialog",
  component: AlertDialog
};

export default meta;

type Story = StoryObj<typeof AlertDialog>;

export const Demo: Story = {
  render: () => (
    <AlertDialog>
      <AlertDialog.Trigger asChild>
        <Button>Open AlertDialog</Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content>
        <AlertDialog.Title>This is a title</AlertDialog.Title>
        <AlertDialog.Description>
          This instead, is a very detailed and interesting description!
        </AlertDialog.Description>

        <div className={cn("flex justify-end gap-4 mt-4")}>
          <AlertDialog.Cancel asChild>
            <Button variant="soft" colorScheme="gray">
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action asChild>
            <Button colorScheme="plum">Save</Button>
          </AlertDialog.Action>
        </div>
      </AlertDialog.Content>
    </AlertDialog>
  )
};
