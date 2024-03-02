import { Meta, StoryObj } from "@storybook/react";
import { AlertDialog } from "./alert-dialog";
import { Frame } from "@/components/fundamentals";
import { Button } from "@/components/button";

const meta: Meta<typeof AlertDialog> = {
  title: "Components/AlertDialog",
  component: AlertDialog
};

export default meta;

type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
  render: () => {
    return (
      <Frame full>
        <AlertDialog>
          <AlertDialog.Trigger asChild>
            <Button>Show dialog</Button>
          </AlertDialog.Trigger>
          <AlertDialog.Content>
            <AlertDialog.Title>Dialog title</AlertDialog.Title>
            <AlertDialog.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              tempore molestiae praesentium, quas magni possimus voluptatum
              facilis voluptatibus tenetur maxime nisi molestias corrupti at
              culpa assumenda ea, quo illo mollitia.
            </AlertDialog.Description>
            <div className="w-full mt-2 flex justify-end gap-4">
              <AlertDialog.Cancel>
                <Button colorScheme="gray">Cancel</Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action>
                <Button colorScheme="red">Confirm</Button>
              </AlertDialog.Action>
            </div>
          </AlertDialog.Content>
        </AlertDialog>
      </Frame>
    );
  }
};
