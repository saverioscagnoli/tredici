import { ColorSchemeSelect } from "@components";
import {
  ChatBubbleIcon,
  EnvelopeClosedIcon,
  FontStyleIcon,
  GearIcon,
  InfoCircledIcon,
  LockClosedIcon,
  MagicWandIcon,
  PersonIcon
} from "@radix-ui/react-icons";
import { DropdownMenu, DropdownMenuColorScheme, IconButton } from "@tredici";
import { useState } from "react";

const DropdownMenuDemo = () => {
  const [colorScheme, setColorScheme] =
    useState<DropdownMenuColorScheme>("plum");
  const [check, setCheck] = useState<boolean>(true);
  const [radioValue, setRaduioValue] = useState<string>("light");

  return (
    <div>
      <DropdownMenu colorScheme={colorScheme}>
        <DropdownMenu.Trigger>
          <IconButton icon={<GearIcon />} />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Arrow />
          <DropdownMenu.Label>Settings</DropdownMenu.Label>
          <DropdownMenu.Item leftIcon={<GearIcon />}>General</DropdownMenu.Item>
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
            <DropdownMenu.SubTrigger leftIcon={<MagicWandIcon />}>
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
      <ColorSchemeSelect
        colorScheme={colorScheme}
        setColorScheme={setColorScheme}
        colors={[
          "plum",
          "teal",
          "grass",
          "red",
          "amber",
          "blue",
          "b/w",
          "gray"
        ]}
        className="absolute top-4 right-4 w-[175px]"
      />
    </div>
  );
};

export { DropdownMenuDemo };
