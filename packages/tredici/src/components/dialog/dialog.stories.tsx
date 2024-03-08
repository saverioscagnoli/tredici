import { Meta, StoryObj } from "@storybook/react";
import { Dialog } from "./dialog";
import { Frame } from "@/components/fundamentals";
import { Button } from "@/components/button";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog
};

export default meta;

type Story = StoryObj<typeof Dialog>;

export const Default: Story = {
  render: () => {
    return (
      <Frame full>
        <Dialog>
          <Dialog.Trigger asChild>
            <Button>Show dialog</Button>
          </Dialog.Trigger>
          <Dialog.Content>
            <Dialog.Close />
            <Dialog.Title>Dialog title</Dialog.Title>
            <Dialog.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              tempore molestiae praesentium, quas magni possimus voluptatum
              facilis voluptatibus tenetur maxime nisi molestias corrupti at
              culpa assumenda ea, quo illo mollitia.
            </Dialog.Description>
            <div className="w-full mt-2 flex justify-end gap-4">
              <Dialog.Close>
                <Button colorScheme="b/w" variant="secondary">Cancel</Button>
              </Dialog.Close>
              <Dialog.Close>
                <Button colorScheme="red">Confirm</Button>
              </Dialog.Close>
            </div>
          </Dialog.Content>
        </Dialog>
      </Frame>
    );
  }
};
