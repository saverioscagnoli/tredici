import { Menubar, MenubarColorScheme } from "@tredici";

import {
  AlignBottomIcon,
  AlignCenterVerticallyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  AlignTopIcon,
  ArchiveIcon,
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ChatBubbleIcon,
  ClipboardCopyIcon,
  ClipboardIcon,
  CubeIcon,
  CursorArrowIcon,
  DownloadIcon,
  EnterFullScreenIcon,
  EnvelopeClosedIcon,
  ExitIcon,
  EyeOpenIcon,
  FileIcon,
  FileTextIcon,
  GearIcon,
  GitHubLogoIcon,
  LayoutIcon,
  LinkedInLogoIcon,
  MagicWandIcon,
  MagnifyingGlassIcon,
  MixIcon,
  MixerHorizontalIcon,
  PersonIcon,
  ResetIcon,
  ScissorsIcon,
  Share1Icon,
  SlashIcon,
  TwitterLogoIcon,
  ZoomInIcon,
  ZoomOutIcon
} from "@radix-ui/react-icons";
import { useState } from "react";
import { ColorSchemeSelect } from "@components";

const MenubarDemo = () => {
  const [colorScheme, setColorScheme] = useState<MenubarColorScheme>("plum");
  const [autoSave, setAutoSave] = useState<boolean>(true);
  const [radioValue, setRadioValue] = useState<string>("sarah");

  return (
    <div>
      <Menubar colorScheme={colorScheme}>
        <Menubar.Menu>
          <Menubar.Trigger>File</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item leftIcon={<FileIcon />}>New File</Menubar.Item>
            <Menubar.Item leftIcon={<CubeIcon />}>New Folder</Menubar.Item>

            <Menubar.Separator />

            <Menubar.Item>Open File...</Menubar.Item>
            <Menubar.Item>Open Folder...</Menubar.Item>
            <Menubar.Item>Open Workspace...</Menubar.Item>
            <Menubar.Sub>
              <Menubar.SubTrigger>Open Recent</Menubar.SubTrigger>
              <Menubar.SubContent>
                <Menubar.Item>File 1</Menubar.Item>
                <Menubar.Item>File 2</Menubar.Item>
                <Menubar.Item>File 3</Menubar.Item>
              </Menubar.SubContent>
            </Menubar.Sub>

            <Menubar.Separator />

            <Menubar.Item leftIcon={<ArrowDownIcon />}>Save</Menubar.Item>
            <Menubar.Item leftIcon={<DownloadIcon />}>Save As...</Menubar.Item>

            <Menubar.Separator />

            <Menubar.Sub>
              <Menubar.SubTrigger leftIcon={<Share1Icon />}>
                Share
              </Menubar.SubTrigger>
              <Menubar.SubContent>
                <Menubar.Item leftIcon={<TwitterLogoIcon />}>
                  Twitter
                </Menubar.Item>
                <Menubar.Item leftIcon={<GitHubLogoIcon />}>
                  Github
                </Menubar.Item>
                <Menubar.Item leftIcon={<LinkedInLogoIcon />}>
                  LinkedIn
                </Menubar.Item>
              </Menubar.SubContent>
            </Menubar.Sub>

            <Menubar.Separator />

            <Menubar.CheckboxItem
              checked={autoSave}
              onCheckedChange={setAutoSave}
            >
              Auto Save
            </Menubar.CheckboxItem>
            <Menubar.Sub>
              <Menubar.SubTrigger>Preferences</Menubar.SubTrigger>
              <Menubar.SubContent>
                <Menubar.Sub>
                  <Menubar.SubTrigger leftIcon={<PersonIcon />}>
                    Profiles
                  </Menubar.SubTrigger>
                  <Menubar.SubContent>
                    <Menubar.RadioGroup
                      value={radioValue}
                      onValueChange={setRadioValue}
                    >
                      <Menubar.RadioItem value="sarah">Sarah</Menubar.RadioItem>
                      <Menubar.RadioItem value="kyle">Kyle</Menubar.RadioItem>
                      <Menubar.RadioItem value="rebecca">
                        Rebecca
                      </Menubar.RadioItem>
                    </Menubar.RadioGroup>
                  </Menubar.SubContent>
                </Menubar.Sub>
                <Menubar.Item leftIcon={<GearIcon />}>Settings</Menubar.Item>
                <Menubar.Item leftIcon={<ArchiveIcon />}>
                  Extension
                </Menubar.Item>
              </Menubar.SubContent>
            </Menubar.Sub>

            <Menubar.Separator />

            <Menubar.Item>Close Editor</Menubar.Item>
            <Menubar.Item>Close Folder</Menubar.Item>
            <Menubar.Item>Close Workspace</Menubar.Item>

            <Menubar.Separator />

            <Menubar.Item leftIcon={<ExitIcon />} colorScheme="red">
              Exit
            </Menubar.Item>
            <Menubar.Arrow />
          </Menubar.Content>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger>Edit</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item leftIcon={<ArrowLeftIcon />}>Undo</Menubar.Item>
            <Menubar.Item leftIcon={<ArrowRightIcon />}>Redo</Menubar.Item>

            <Menubar.Separator />

            <Menubar.Item leftIcon={<ScissorsIcon />}>Cut</Menubar.Item>
            <Menubar.Item leftIcon={<ClipboardCopyIcon />}>Copy</Menubar.Item>
            <Menubar.Item leftIcon={<ClipboardIcon />}>Paste</Menubar.Item>

            <Menubar.Separator />

            <Menubar.Item leftIcon={<MagnifyingGlassIcon />}>Find</Menubar.Item>
            <Menubar.Item leftIcon={<ResetIcon />}>Replace</Menubar.Item>

            <Menubar.Separator />

            <Menubar.Item leftIcon={<SlashIcon />}>
              Toggle Line Comment
            </Menubar.Item>
            <Menubar.Item leftIcon={<ChatBubbleIcon />}>
              Toggle Block Comment
            </Menubar.Item>
            <Menubar.Arrow />
          </Menubar.Content>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger>View</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item leftIcon={<CursorArrowIcon />}>
              Command Palette...
            </Menubar.Item>
            <Menubar.Item leftIcon={<EyeOpenIcon />}>Open View...</Menubar.Item>

            <Menubar.Separator />

            <Menubar.Sub>
              <Menubar.SubTrigger leftIcon={<MagicWandIcon />}>
                Appearance
              </Menubar.SubTrigger>
              <Menubar.SubContent>
                <Menubar.Item leftIcon={<EnterFullScreenIcon />}>
                  Fullscreen
                </Menubar.Item>
                <Menubar.CheckboxItem
                  leftIcon={<AlignCenterVerticallyIcon />}
                  checked={true}
                >
                  Centered Layout
                </Menubar.CheckboxItem>

                <Menubar.Separator />

                <Menubar.Item leftIcon={<ZoomInIcon />}>Zoom In</Menubar.Item>
                <Menubar.Item leftIcon={<ZoomOutIcon />}>Zoom Out</Menubar.Item>
                <Menubar.Item leftIcon={<ResetIcon />}>Reset Zoom</Menubar.Item>
              </Menubar.SubContent>
            </Menubar.Sub>
            <Menubar.Sub>
              <Menubar.SubTrigger leftIcon={<LayoutIcon />}>
                Editor Layout
              </Menubar.SubTrigger>
              <Menubar.SubContent>
                <Menubar.Item leftIcon={<AlignLeftIcon />}>
                  Split Left
                </Menubar.Item>
                <Menubar.Item leftIcon={<AlignRightIcon />}>
                  Split Right
                </Menubar.Item>
                <Menubar.Item leftIcon={<AlignTopIcon />}>
                  Split Up
                </Menubar.Item>
                <Menubar.Item leftIcon={<AlignBottomIcon />}>
                  Split Down
                </Menubar.Item>
              </Menubar.SubContent>
            </Menubar.Sub>

            <Menubar.Separator />

            <Menubar.Item leftIcon={<ArchiveIcon />}>Explorer</Menubar.Item>
            <Menubar.Item leftIcon={<MagnifyingGlassIcon />}>
              Search
            </Menubar.Item>
            <Menubar.Item leftIcon={<MixIcon />}>Source Control</Menubar.Item>
            <Menubar.Item leftIcon={<MixerHorizontalIcon />}>
              Debug
            </Menubar.Item>
            <Menubar.Arrow />
          </Menubar.Content>
        </Menubar.Menu>

        <Menubar.Menu>
          <Menubar.Trigger>Help</Menubar.Trigger>
          <Menubar.Content>
            <Menubar.Item leftIcon={<FileTextIcon />}>
              Documentation
            </Menubar.Item>
            <Menubar.Item leftIcon={<PersonIcon />}>Community</Menubar.Item>
            <Menubar.Item leftIcon={<FileTextIcon />}>
              Release Notes
            </Menubar.Item>
            <Menubar.Item leftIcon={<EnvelopeClosedIcon />}>
              Feedback
            </Menubar.Item>
            <Menubar.Arrow />
          </Menubar.Content>
        </Menubar.Menu>
      </Menubar>

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

export { MenubarDemo };
