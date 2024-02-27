import { Meta, StoryObj } from "@storybook/react";
import { ContextMenu } from "./context-menu";
import { ThemeButton } from "components/examples";
import { Tredici } from "@components";

const meta: Meta<typeof ContextMenu> = {
  title: "Components/ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  render: () => {
    return (
      <Tredici>
        <div className="flex flex-col gap-4">
          <ThemeButton />
          <ContextMenu>
            <ContextMenu.Trigger className="w-52 h-52 bg-red-400 flex justify-center items-center">
              Right click here...
            </ContextMenu.Trigger>
            <ContextMenu.Content>
              <ContextMenu.Label>Menu</ContextMenu.Label>
              <ContextMenu.Item>Item 1</ContextMenu.Item>
              <ContextMenu.Item>Item 2</ContextMenu.Item>
              <ContextMenu.Item>Item 3</ContextMenu.Item>

              <ContextMenu.CheckboxItem checked>
                Checkbox Item 1
              </ContextMenu.CheckboxItem>
              <ContextMenu.CheckboxItem>
                Checkbox Item 2
              </ContextMenu.CheckboxItem>
            </ContextMenu.Content>
          </ContextMenu>
        </div>
      </Tredici>
    );
  }
};
