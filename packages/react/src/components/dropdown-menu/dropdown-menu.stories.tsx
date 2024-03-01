import { Meta, StoryObj } from "@storybook/react";
import { DropdownMenu } from "./dropdown-menu";
import { ThemeButton } from "components/examples";
import { IconButton, Tooltip, Tredici } from "@components";
import { useState } from "react";
import {
  EnvelopeClosedIcon,
  FontStyleIcon,
  GearIcon,
  InfoCircledIcon,
  LockClosedIcon,
  PersonIcon
} from "@radix-ui/react-icons";
import { BsPalette } from "react-icons/bs";

const meta: Meta<typeof DropdownMenu> = {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  args: {
    colorScheme: "amethyst"
  },
  render: ({ colorScheme }) => {
    const [radioValue, setRaduioValue] = useState<string>("light");

    return (
      <Tredici>
        <div className="flex flex-col gap-4">
          <ThemeButton />
          <div className="flex justify-center">
            <DropdownMenu colorScheme={colorScheme}>
              <Tooltip content="Settings">
                <DropdownMenu.Trigger asChild>
                  <IconButton icon={<GearIcon />} />
                </DropdownMenu.Trigger>
              </Tooltip>
              <DropdownMenu.Content>
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
          </div>
        </div>
      </Tredici>
    );
  }
};
