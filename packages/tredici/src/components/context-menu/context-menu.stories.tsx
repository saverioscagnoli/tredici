import { Meta, StoryObj } from "@storybook/react";
import { ContextMenu } from "./context-menu";
import { Frame } from "@/components/fundamentals";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  EyeOpenIcon,
  LinkedInLogoIcon,
  MagnifyingGlassIcon,
  ReloadIcon,
  Share1Icon,
  StarFilledIcon,
  TwitterLogoIcon
} from "@radix-ui/react-icons";
import { useState } from "react";
import { BsSave, BsPrinter, BsFacebook } from "react-icons/bs";

const meta: Meta<typeof ContextMenu> = {
  title: "Components/ContextMenu",
  component: ContextMenu
};

export default meta;

type Story = StoryObj<typeof ContextMenu>;

export const Default: Story = {
  args: {
    colorScheme: "purple"
  },
  render: ({ colorScheme }) => {
    const [check, setCheck] = useState<boolean>(false);
    const handleCheck = () => setCheck(!check);

    return (
      <Frame>
        <ContextMenu colorScheme={colorScheme}>
          <ContextMenu.Trigger className="w-52 h-32 rounded border-2 border-dashed border-dark dark:border-light flex justify-center items-center">
            Right click here...
          </ContextMenu.Trigger>
          <ContextMenu.Content className="">
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
              leftIcon={<EyeOpenIcon />}
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
      </Frame>
    );
  }
};
