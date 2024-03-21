import { Meta, StoryObj } from "@storybook/react";
import { DropdownMenu } from "./dropdown-menu";
import { useState } from "react";
import {
  ChatBubbleIcon,
  EnvelopeClosedIcon,
  FontStyleIcon,
  GearIcon,
  InfoCircledIcon,
  LockClosedIcon,
  PersonIcon
} from "@radix-ui/react-icons";
import { BsPalette } from "react-icons/bs";
import { Frame } from "../fundamentals";
import { IconButton } from "../icon-button";

const meta: Meta<typeof DropdownMenu> = {
  title: "Components/DropdownMenu",
  component: DropdownMenu
};

export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  argTypes: {
    colorScheme: {
      control: "select",
      options: ["plum", "teal", "grass", "red", "amber", "blue", "b/w", "gray"]
    }
  },
  args: {
    colorScheme: "plum"
  },
  render: ({ colorScheme }) => {
    const [check, setCheck] = useState<boolean>(true);
    const [radioValue, setRaduioValue] = useState<string>("light");

    return (
      <Frame>
        <DropdownMenu colorScheme={colorScheme}>
          <DropdownMenu.Trigger>
            <IconButton icon={<GearIcon />} />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Arrow />
            <DropdownMenu.Label>Settings</DropdownMenu.Label>
            <DropdownMenu.Item leftIcon={<GearIcon />}>
              General
            </DropdownMenu.Item>
            <DropdownMenu.Item leftIcon={<PersonIcon />}>
              Account
            </DropdownMenu.Item>
            <DropdownMenu.Item leftIcon={<LockClosedIcon />}>
              Privacy
            </DropdownMenu.Item>
            <DropdownMenu.CheckboxItem
              leftIcon={<ChatBubbleIcon />}
              checked={check}
              onCheckedChange={setCheck}
            >
              Notifications
            </DropdownMenu.CheckboxItem>

            <DropdownMenu.Separator />

            <DropdownMenu.Label>Appearance</DropdownMenu.Label>

            <DropdownMenu.Sub>
              <DropdownMenu.SubTrigger leftIcon={<BsPalette />}>
                Theme
              </DropdownMenu.SubTrigger>
              <DropdownMenu.SubContent>
                <DropdownMenu.RadioGroup
                  value={radioValue}
                  onValueChange={setRaduioValue}
                >
                  <DropdownMenu.RadioItem value="light">
                    Light
                  </DropdownMenu.RadioItem>
                  <DropdownMenu.RadioItem value="dark">
                    Dark
                  </DropdownMenu.RadioItem>
                  <DropdownMenu.RadioItem value="system">
                    System
                  </DropdownMenu.RadioItem>
                </DropdownMenu.RadioGroup>
              </DropdownMenu.SubContent>
            </DropdownMenu.Sub>

            <DropdownMenu.Item leftIcon={<FontStyleIcon />}>
              Font
            </DropdownMenu.Item>

            <DropdownMenu.Separator />

            <DropdownMenu.Item leftIcon={<InfoCircledIcon />}>
              Help & Support
            </DropdownMenu.Item>
            <DropdownMenu.Item leftIcon={<EnvelopeClosedIcon />}>
              Feedback
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu>
      </Frame>
    );
  }
};
