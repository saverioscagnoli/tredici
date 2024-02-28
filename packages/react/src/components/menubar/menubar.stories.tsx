import { Meta, StoryObj } from "@storybook/react";
import { Menubar } from "./menubar";
import { ThemeButton } from "components/examples";
import { Tredici } from "@components";

const meta: Meta<typeof Menubar> = {
  title: "Components/Menubar",
  component: Menubar,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof Menubar>;

export const Default: Story = {
  render: () => {
    return (
      <Tredici>
        <div className="flex flex-col gap-4">
          <ThemeButton />
          <div className="flex justify-center">
            <Menubar>
              <Menubar.Menu>
                <Menubar.Trigger>File</Menubar.Trigger>
                <Menubar.Content>
                  <Menubar.Item>New file</Menubar.Item>
                  <Menubar.Item>New window</Menubar.Item>
                  <Menubar.Separator />
                  <Menubar.Item>Open file...</Menubar.Item>
                  <Menubar.Item>Open folder...</Menubar.Item>
                  <Menubar.Item>Open workspace...</Menubar.Item>
                  <Menubar.Item>Open recent</Menubar.Item>

                  <Menubar.Separator />

                  <Menubar.Item>Save</Menubar.Item>
                  <Menubar.Item>Save as...</Menubar.Item>
                  <Menubar.Item>Save all</Menubar.Item>

                  <Menubar.Separator />

                  <Menubar.Sub>
                    <Menubar.SubTrigger>Share</Menubar.SubTrigger>
                    <Menubar.SubContent>
                      <Menubar.Item>Share to GitHub</Menubar.Item>
                      <Menubar.Item>Share to Twitter</Menubar.Item>
                      <Menubar.Item>Share to Facebook</Menubar.Item>
                    </Menubar.SubContent>
                  </Menubar.Sub>

                  <Menubar.Separator />

                  <Menubar.Item>Close</Menubar.Item>
                </Menubar.Content>
              </Menubar.Menu>
              <Menubar.Menu>
                <Menubar.Trigger>Edit</Menubar.Trigger>
                <Menubar.Content>
                  <Menubar.Item>Undo</Menubar.Item>
                  <Menubar.Item>Redo</Menubar.Item>

                  <Menubar.Separator />

                  <Menubar.Item>Cut</Menubar.Item>
                  <Menubar.Item>Copy</Menubar.Item>
                  <Menubar.Item>Paste</Menubar.Item>
                  <Menubar.Item>Delete</Menubar.Item>

                  <Menubar.Separator />

                  <Menubar.Item>Select all</Menubar.Item>
                </Menubar.Content>
              </Menubar.Menu>

              <Menubar.Menu>
                <Menubar.Trigger>View</Menubar.Trigger>
                <Menubar.Content>
                  <Menubar.Item>Explorer</Menubar.Item>
                  <Menubar.Item>Search</Menubar.Item>

                  <Menubar.Separator />

                  <Menubar.Item>Source Control</Menubar.Item>
                  <Menubar.Item>Debug</Menubar.Item>
                  <Menubar.Item>Extensions</Menubar.Item>

                  <Menubar.Separator />

                  <Menubar.Item>Terminal</Menubar.Item>
                </Menubar.Content>
              </Menubar.Menu>

              <Menubar.Menu>
                <Menubar.Trigger>Help</Menubar.Trigger>
                <Menubar.Content>
                  <Menubar.Item>Welcome</Menubar.Item>
                  <Menubar.Item>Documentation</Menubar.Item>
                  <Menubar.Item>Release Notes</Menubar.Item>
                  <Menubar.Item>Feedback</Menubar.Item>
                  <Menubar.Item>Report Issue</Menubar.Item>
                </Menubar.Content>
              </Menubar.Menu>
            </Menubar>
          </div>
        </div>
      </Tredici>
    );
  }
};
