import { Meta, StoryObj } from "@storybook/react";
import { ContextMenu } from "./context-menu";
import { ThemeButton } from "components/examples";
import { Tredici } from "@components";
import { useState } from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  LinkedInLogoIcon,
  MagnifyingGlassIcon,
  ReloadIcon,
  Share1Icon,
  StarFilledIcon,
  TwitterLogoIcon
} from "@radix-ui/react-icons";
import { BsSave, BsPrinter, BsFacebook } from "react-icons/bs";

const meta: Meta<typeof ContextMenu> = {
  title: "Components/ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  args: {
    colorScheme: "amethyst"
  },
  render: ({ colorScheme }) => {
    const [check, setCheck] = useState<boolean>(true);
    const handleCheck = () => setCheck(prev => !prev);

    return (
      <Tredici>
        <div className="flex flex-col gap-4">
          <ThemeButton />
          <ContextMenu colorScheme={colorScheme}>
            <ContextMenu.Trigger className="w-52 h-52 bg-red-400 flex justify-center items-center">
              Right click here...
            </ContextMenu.Trigger>
            <ContextMenu.Content>
              <ContextMenu.Item leftIcon={<ArrowLeftIcon />}>
                Back
              </ContextMenu.Item>
              <ContextMenu.Item leftIcon={<ArrowRightIcon />}>
                Forward
              </ContextMenu.Item>
              <ContextMenu.Item leftIcon={<ReloadIcon />}>
                Reload
              </ContextMenu.Item>

              <ContextMenu.Separator />

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

              <ContextMenu.Item leftIcon={<BsSave />}>
                Save Page As...
              </ContextMenu.Item>
              <ContextMenu.Item leftIcon={<BsPrinter />}>
                Print...
              </ContextMenu.Item>

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

              <ContextMenu.Item leftIcon={<MagnifyingGlassIcon />}>
                Inspect
              </ContextMenu.Item>
            </ContextMenu.Content>
          </ContextMenu>
        </div>
      </Tredici>
    );
  }
};
