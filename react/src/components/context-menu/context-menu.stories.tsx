import type { Meta, StoryObj } from "@storybook/react";
import { ContextMenu } from "./context-menu";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  LinkedInLogoIcon,
  MagnifyingGlassIcon,
  ReloadIcon,
  Share1Icon,
  StarFilledIcon,
  TrashIcon,
  TwitterLogoIcon
} from "@radix-ui/react-icons";
import { useState } from "react";
import { BsFacebook, BsPrinter, BsSave } from "react-icons/bs";

import "~/index.css";

const meta: Meta<typeof ContextMenu> = {
  title: "Components/ContextMenu",
  component: ContextMenu
};

export default meta;

type Story = StoryObj<typeof ContextMenu>;

export const Demo: Story = {
  argTypes: {
    colorScheme: {
      control: "select",
      options: [
        "plum",
        "red",
        "blue",
        "teal",
        "cyan",
        "green",
        "amber",
        "orange",
        "gray"
      ]
    }
  },
  render: props => {
    const [check, setCheck] = useState<boolean>(false);
    const handleCheck = () => setCheck(c => !c);
    const [theme, setTheme] = useState<string>("light");

    return (
      <ContextMenu {...props}>
        <ContextMenu.Trigger className="w-52 h-32 rounded border-2 border-dashed border-dark dark:border-light flex justify-center items-center">
          Right click here...
        </ContextMenu.Trigger>
        <ContextMenu.Content>
          <ContextMenu.Item leftIcon={<StarFilledIcon />}>
            Add To Favorites
          </ContextMenu.Item>

          <ContextMenu.CheckboxItem
            checked={check}
            onCheckedChange={handleCheck}
          >
            Show Passwords
          </ContextMenu.CheckboxItem>

          <ContextMenu.Separator />

          <ContextMenu.Label>Actions</ContextMenu.Label>
          <ContextMenu.Item leftIcon={<ArrowLeftIcon />}>Back</ContextMenu.Item>
          <ContextMenu.Item leftIcon={<ArrowRightIcon />} disabled>
            Forward
          </ContextMenu.Item>
          <ContextMenu.Item leftIcon={<ReloadIcon />}>Reload</ContextMenu.Item>

          <ContextMenu.Separator />

          <ContextMenu.Item leftIcon={<BsSave />}>
            Save Page As...
          </ContextMenu.Item>
          <ContextMenu.Item leftIcon={<BsPrinter />}>Print...</ContextMenu.Item>

          <ContextMenu.Separator />

          <ContextMenu.Sub>
            <ContextMenu.SubTrigger leftIcon={<Share1Icon />}>
              Share
            </ContextMenu.SubTrigger>
            <ContextMenu.SubContent>
              <ContextMenu.Item leftIcon={<TwitterLogoIcon />}>
                Twitter
              </ContextMenu.Item>
              <ContextMenu.Item leftIcon={<BsFacebook />}>
                Facebook
              </ContextMenu.Item>
              <ContextMenu.Item leftIcon={<LinkedInLogoIcon />}>
                LinkedIn
              </ContextMenu.Item>
            </ContextMenu.SubContent>
          </ContextMenu.Sub>

          <ContextMenu.Separator />

          <ContextMenu.Label>Theme</ContextMenu.Label>
          <ContextMenu.RadioGroup value={theme} onValueChange={setTheme}>
            <ContextMenu.RadioItem value="light" defaultChecked>
              Light
            </ContextMenu.RadioItem>
            <ContextMenu.RadioItem value="dark">Dark</ContextMenu.RadioItem>
            <ContextMenu.RadioItem value="system">System</ContextMenu.RadioItem>
          </ContextMenu.RadioGroup>

          <ContextMenu.Separator />

          <ContextMenu.Item leftIcon={<MagnifyingGlassIcon />}>
            Inspect
          </ContextMenu.Item>
          <ContextMenu.Item
            colorScheme="red"
            leftIcon={<TrashIcon />}
            className="text-[var(--red-11)]"
          >
            Delete
          </ContextMenu.Item>
        </ContextMenu.Content>
      </ContextMenu>
    );
  }
};
