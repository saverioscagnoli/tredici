import type { Meta, StoryObj } from "@storybook/react";
import { DropdownMenu } from "./dropdown-menu";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  GearIcon,
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
import { Button } from "../button/button";

const meta: Meta<typeof DropdownMenu> = {
  title: "Components/DropdownMenu",
  component: DropdownMenu
};

export default meta;

type Story = StoryObj<typeof DropdownMenu>;

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
    1;

    return (
      <DropdownMenu {...props}>
        <DropdownMenu.Trigger asChild>
          <Button className="ml-10" leftIcon={<GearIcon />} colorScheme="gray" variant="soft">
            Settings
          </Button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content sideOffset={5}>
          <DropdownMenu.Item leftIcon={<StarFilledIcon />}>
            Add To Favorites
          </DropdownMenu.Item>

          <DropdownMenu.CheckboxItem
            checked={check}
            onCheckedChange={handleCheck}
          >
            Show Passwords
          </DropdownMenu.CheckboxItem>

          <DropdownMenu.Separator />

          <DropdownMenu.Label>Actions</DropdownMenu.Label>
          <DropdownMenu.Item leftIcon={<ArrowLeftIcon />}>
            Back
          </DropdownMenu.Item>
          <DropdownMenu.Item leftIcon={<ArrowRightIcon />} disabled>
            Forward
          </DropdownMenu.Item>
          <DropdownMenu.Item leftIcon={<ReloadIcon />}>
            Reload
          </DropdownMenu.Item>

          <DropdownMenu.Separator />

          <DropdownMenu.Item leftIcon={<BsSave />}>
            Save Page As...
          </DropdownMenu.Item>
          <DropdownMenu.Item leftIcon={<BsPrinter />}>
            Print...
          </DropdownMenu.Item>

          <DropdownMenu.Separator />

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger leftIcon={<Share1Icon />}>
              Share
            </DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent>
              <DropdownMenu.Item leftIcon={<TwitterLogoIcon />}>
                Twitter
              </DropdownMenu.Item>
              <DropdownMenu.Item leftIcon={<BsFacebook />}>
                Facebook
              </DropdownMenu.Item>
              <DropdownMenu.Item leftIcon={<LinkedInLogoIcon />}>
                LinkedIn
              </DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator />

          <DropdownMenu.Label>Theme</DropdownMenu.Label>
          <DropdownMenu.RadioGroup value={theme} onValueChange={setTheme}>
            <DropdownMenu.RadioItem value="light" defaultChecked>
              Light
            </DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="dark">Dark</DropdownMenu.RadioItem>
            <DropdownMenu.RadioItem value="system">
              System
            </DropdownMenu.RadioItem>
          </DropdownMenu.RadioGroup>

          <DropdownMenu.Separator />

          <DropdownMenu.Item leftIcon={<MagnifyingGlassIcon />}>
            Inspect
          </DropdownMenu.Item>
          <DropdownMenu.Item
            colorScheme="red"
            leftIcon={<TrashIcon />}
            className="text-[var(--red-11)]"
          >
            Delete
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    );
  }
};
