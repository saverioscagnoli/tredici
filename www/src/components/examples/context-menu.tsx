import { ColorSchemeSelect } from "@components";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BookmarkIcon,
  EyeOpenIcon,
  FileTextIcon,
  GitHubLogoIcon,
  LinkedInLogoIcon,
  MagnifyingGlassIcon,
  ReloadIcon,
  Share1Icon,
  StarFilledIcon,
  TwitterLogoIcon
} from "@radix-ui/react-icons";
import { ContextMenu, ContextMenuColorScheme } from "@tredici";
import { useState } from "react";

const ContextMenuDemo = () => {
  const [colorScheme, setColorScheme] =
    useState<ContextMenuColorScheme>("plum");
  const [check, setCheck] = useState<boolean>(false);
  const handleCheck = () => setCheck(!check);

  return (
    <div>
      <ContextMenu colorScheme={colorScheme}>
        <ContextMenu.Trigger className="w-52 h-32 rounded border-2 border-dashed border-[--gray-7] flex justify-center items-center">
          Right click here...
        </ContextMenu.Trigger>
        <ContextMenu.Content className="">
          <ContextMenu.Item leftIcon={<ArrowLeftIcon />}>Back</ContextMenu.Item>
          <ContextMenu.Item leftIcon={<ArrowRightIcon />} disabled>
            Forward
          </ContextMenu.Item>
          <ContextMenu.Item leftIcon={<ReloadIcon />}>Reload</ContextMenu.Item>

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

          <ContextMenu.Item leftIcon={<BookmarkIcon />}>
            Save Page As...
          </ContextMenu.Item>
          <ContextMenu.Item leftIcon={<FileTextIcon />}>
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
              <ContextMenu.Item leftIcon={<GitHubLogoIcon />}>
                Github
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

export { ContextMenuDemo };
