import { Meta, StoryObj } from "@storybook/react";
import { AlertDialog } from "./alert-dialog";
import { ThemeButton } from "components/examples";
import { Button, Tredici } from "@components";

const meta: Meta<typeof AlertDialog> = {
  title: "Components/AlertDialog",
  component: AlertDialog,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof AlertDialog>;

export const Default: Story = {
  render: () => {
    return (
      <Tredici>
        <div className="flex flex-col gap-4">
          <ThemeButton />
          <AlertDialog>
            <AlertDialog.Trigger asChild className="self-start">
              <Button>Open AlertDialog</Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content>
              <AlertDialog.Title>Town deletion</AlertDialog.Title>
              <AlertDialog.Description>
                If you confirm, you'll need to create a new town. <br />
                Every bell you've saved will be gone. <br />
                Every item you've collected will be gone. <br />
                Every friend you've made will be gone. <br />
                Everything will be gone. <br /> <br />
                Is that OK?
              </AlertDialog.Description>
              <div className="flex justify-end gap-2 mt-3">
                <AlertDialog.Cancel>
                  <Button colorScheme="b/w" variant="ghost">
                    No {":("}
                  </Button>
                </AlertDialog.Cancel>
                <AlertDialog.Action>
                  <Button colorScheme="red">Delete</Button>
                </AlertDialog.Action>
              </div>
            </AlertDialog.Content>
          </AlertDialog>
        </div>
      </Tredici>
    );
  }
};
