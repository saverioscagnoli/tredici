import type { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "./dialog";
import { Button } from "../button/button";
import { cn } from "~/lib/utils";

import "~/index.css";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Demo: Story = {
  render: () => (
    <Dialog>
      <Dialog.Trigger asChild>
        <Button>Open Dialog</Button>
      </Dialog.Trigger>
      <Dialog.Content>
        <Dialog.Title>This is a title</Dialog.Title>
        <Dialog.Description>
          This instead, is a very detailed and interesting description!
        </Dialog.Description>

        <div className={cn("flex justify-end gap-4 mt-4")}>
          <Dialog.Close asChild>
            <Button variant="soft" colorScheme="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close asChild>
            <Button colorScheme="plum">Save</Button>
          </Dialog.Close>
        </div>

        <Dialog.Close />
      </Dialog.Content>
    </Dialog>
  )
};
