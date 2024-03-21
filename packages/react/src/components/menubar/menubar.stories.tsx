import { Meta, StoryObj } from "@storybook/react";
import { Frame } from "../fundamentals";
import { Menubar } from "./menubar";
import {
  AlignBottomIcon,
  AlignCenterVerticallyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  AlignTopIcon,
  ArchiveIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ChatBubbleIcon,
  ClipboardCopyIcon,
  ClipboardIcon,
  CursorArrowIcon,
  EnterFullScreenIcon,
  EnvelopeClosedIcon,
  ExitIcon,
  EyeOpenIcon,
  FileIcon,
  FileTextIcon,
  GearIcon,
  LayoutIcon,
  LinkedInLogoIcon,
  MagnifyingGlassIcon,
  PersonIcon,
  ResetIcon,
  ScissorsIcon,
  Share1Icon,
  SlashIcon,
  TwitterLogoIcon,
  ZoomInIcon,
  ZoomOutIcon
} from "@radix-ui/react-icons";
import {
  BsBug,
  BsFacebook,
  BsPalette,
  BsPuzzle,
  BsSave,
  BsSave2
} from "react-icons/bs";
import { useState } from "react";
import { VscSourceControl } from "react-icons/vsc";
import { IoPeopleSharp } from "react-icons/io5";
import { MdNotes } from "react-icons/md";
import { FiFolder } from "react-icons/fi";

const meta: Meta<typeof Menubar> = {
  title: "Components/Menubar",
  component: Menubar
};

export default meta;

type Story = StoryObj<typeof Menubar>;

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
    const [autoSave, setAutoSave] = useState<boolean>(true);
    const [radioValue, setRadioValue] = useState<string>("sarah");

    return (
      <Frame>
        <Menubar colorScheme={colorScheme}>
          <Menubar.Menu>
            <Menubar.Trigger>File</Menubar.Trigger>
            <Menubar.Content>
              <Menubar.Item leftIcon={<FileIcon />}>New File</Menubar.Item>
              <Menubar.Item leftIcon={<FiFolder />}>New Folder</Menubar.Item>

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

              <Menubar.Item leftIcon={<BsSave />}>Save</Menubar.Item>
              <Menubar.Item leftIcon={<BsSave2 />}>Save As...</Menubar.Item>

              <Menubar.Separator />

              <Menubar.Sub>
                <Menubar.SubTrigger leftIcon={<Share1Icon />}>
                  Share
                </Menubar.SubTrigger>
                <Menubar.SubContent>
                  <Menubar.Item leftIcon={<TwitterLogoIcon />}>
                    Twitter
                  </Menubar.Item>
                  <Menubar.Item leftIcon={<BsFacebook />}>
                    Facebook
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
                        <Menubar.RadioItem value="sarah">
                          Sarah
                        </Menubar.RadioItem>
                        <Menubar.RadioItem value="kyle">Kyle</Menubar.RadioItem>
                        <Menubar.RadioItem value="rebecca">
                          Rebecca
                        </Menubar.RadioItem>
                      </Menubar.RadioGroup>
                    </Menubar.SubContent>
                  </Menubar.Sub>
                  <Menubar.Item leftIcon={<GearIcon />}>Settings</Menubar.Item>
                  <Menubar.Item leftIcon={<BsPuzzle />}>Extension</Menubar.Item>
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

              <Menubar.Item leftIcon={<MagnifyingGlassIcon />}>
                Find
              </Menubar.Item>
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
              <Menubar.Item leftIcon={<EyeOpenIcon />}>
                Open View...
              </Menubar.Item>

              <Menubar.Separator />

              <Menubar.Sub>
                <Menubar.SubTrigger leftIcon={<BsPalette />}>
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
                  <Menubar.Item leftIcon={<ZoomOutIcon />}>
                    Zoom Out
                  </Menubar.Item>
                  <Menubar.Item leftIcon={<ResetIcon />}>
                    Reset Zoom
                  </Menubar.Item>
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
              <Menubar.Item leftIcon={<VscSourceControl />}>
                Source Control
              </Menubar.Item>
              <Menubar.Item leftIcon={<BsBug />}>Debug</Menubar.Item>
              <Menubar.Arrow />
            </Menubar.Content>
          </Menubar.Menu>

          <Menubar.Menu>
            <Menubar.Trigger>Help</Menubar.Trigger>
            <Menubar.Content>
              <Menubar.Item leftIcon={<FileTextIcon />}>
                Documentation
              </Menubar.Item>
              <Menubar.Item leftIcon={<IoPeopleSharp />}>
                Community
              </Menubar.Item>
              <Menubar.Item leftIcon={<MdNotes />}>Release Notes</Menubar.Item>
              <Menubar.Item leftIcon={<EnvelopeClosedIcon />}>
                Feedback
              </Menubar.Item>
              <Menubar.Arrow />
            </Menubar.Content>
          </Menubar.Menu>
        </Menubar>
      </Frame>
    );
  }
};
