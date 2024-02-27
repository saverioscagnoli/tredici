import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./button";
import { Tredici } from "@components";
import { SiSnapchat } from "react-icons/si";
import {
  BsSun,
  BsSunFill,
  BsSpotify,
  BsTwitter,
  BsFacebook,
  BsGithub
} from "react-icons/bs";
import { ThemeButton } from "components/examples";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  render: () => {
    return (
      <Tredici>
        <div className="flex flex-col gap-4">
          <ThemeButton />
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <IconButton icon={<BsSun />} />
              <IconButton icon={<BsSun />} variant="outline" />
              <IconButton icon={<BsSun />} variant="ghost" />
              <IconButton icon={<BsSun />} disabled />
              <IconButton icon={<BsSun />} variant="outline" disabled />
              <IconButton icon={<BsSun />} variant="ghost" disabled />
            </div>
            <div className="flex gap-2">
              <IconButton icon={<BsSunFill />} colorScheme="teal" />
              <IconButton
                icon={<BsSunFill />}
                colorScheme="teal"
                variant="outline"
              />
              <IconButton
                icon={<BsSunFill />}
                colorScheme="teal"
                variant="ghost"
              />
              <IconButton icon={<BsSunFill />} colorScheme="teal" disabled />
              <IconButton
                icon={<BsSunFill />}
                colorScheme="teal"
                variant="outline"
                disabled
              />
              <IconButton
                icon={<BsSunFill />}
                colorScheme="teal"
                variant="ghost"
                disabled
              />
            </div>
            <div className="flex gap-2">
              <IconButton icon={<BsSpotify />} colorScheme="green" />
              <IconButton
                icon={<BsSpotify />}
                colorScheme="green"
                variant="outline"
              />
              <IconButton
                icon={<BsSpotify />}
                colorScheme="green"
                variant="ghost"
              />
              <IconButton icon={<BsGithub />} colorScheme="green" disabled />
              <IconButton
                icon={<BsSpotify />}
                colorScheme="green"
                variant="outline"
                disabled
              />
              <IconButton
                icon={<BsSpotify />}
                colorScheme="green"
                variant="ghost"
                disabled
              />
            </div>
            <div className="flex gap-2">
              <IconButton icon={<BsTwitter />} colorScheme="red" />
              <IconButton
                icon={<BsTwitter />}
                colorScheme="red"
                variant="outline"
              />
              <IconButton
                icon={<BsTwitter />}
                colorScheme="red"
                variant="ghost"
              />
              <IconButton icon={<BsTwitter />} colorScheme="red" disabled />
              <IconButton
                icon={<BsTwitter />}
                colorScheme="red"
                variant="outline"
                disabled
              />
              <IconButton
                icon={<BsTwitter />}
                colorScheme="red"
                variant="ghost"
                disabled
              />
            </div>
            <div className="flex gap-2">
              <IconButton icon={<SiSnapchat />} colorScheme="yellow" />
              <IconButton
                icon={<SiSnapchat />}
                colorScheme="yellow"
                variant="outline"
              />
              <IconButton
                icon={<SiSnapchat />}
                colorScheme="yellow"
                variant="ghost"
              />
              <IconButton icon={<SiSnapchat />} colorScheme="yellow" disabled />
              <IconButton
                icon={<SiSnapchat />}
                colorScheme="yellow"
                variant="outline"
                disabled
              />
              <IconButton
                icon={<SiSnapchat />}
                colorScheme="yellow"
                variant="ghost"
                disabled
              />
            </div>
            <div className="flex gap-2">
              <IconButton icon={<BsFacebook />} colorScheme="blue" />
              <IconButton
                icon={<BsFacebook />}
                colorScheme="blue"
                variant="outline"
              />
              <IconButton
                icon={<BsFacebook />}
                colorScheme="blue"
                variant="ghost"
              />
              <IconButton icon={<BsFacebook />} colorScheme="blue" disabled />
              <IconButton
                icon={<BsFacebook />}
                colorScheme="blue"
                variant="outline"
                disabled
              />
              <IconButton
                icon={<BsFacebook />}
                colorScheme="blue"
                variant="ghost"
                disabled
              />
            </div>
            <div className="flex gap-2">
              <IconButton icon={<BsGithub />} colorScheme="b/w" />
              <IconButton
                icon={<BsGithub />}
                colorScheme="b/w"
                variant="outline"
              />
              <IconButton
                icon={<BsGithub />}
                colorScheme="b/w"
                variant="ghost"
              />
              <IconButton icon={<BsGithub />} colorScheme="b/w" disabled />
              <IconButton
                icon={<BsGithub />}
                colorScheme="b/w"
                variant="outline"
                disabled
              />
              <IconButton
                icon={<BsGithub />}
                colorScheme="b/w"
                variant="ghost"
                disabled
              />
            </div>
            <div className="flex gap-2">
              <IconButton icon={<BsGithub />} colorScheme="gray" />
              <IconButton
                icon={<BsGithub />}
                colorScheme="gray"
                variant="outline"
              />
              <IconButton
                icon={<BsGithub />}
                colorScheme="gray"
                variant="ghost"
              />
              <IconButton icon={<BsGithub />} colorScheme="b/w" disabled />
              <IconButton
                icon={<BsGithub />}
                colorScheme="gray"
                variant="outline"
                disabled
              />
              <IconButton
                icon={<BsGithub />}
                colorScheme="gray"
                variant="ghost"
                disabled
              />
            </div>
          </div>
        </div>
      </Tredici>
    );
  }
};

export const Sizes: Story = {
  render: () => {
    return (
      <Tredici>
        <div className="flex flex-col gap-4">
          <ThemeButton />
          <div className="flex gap-2">
            <div className="flex gap-2">
              <IconButton icon={<BsSun />} size="sm" />
              <IconButton icon={<BsSun />} size="md" />
              <IconButton icon={<BsSun />} size="lg" />
            </div>
            <div className="flex gap-2">
              <IconButton icon={<BsSun />} size="sm" disabled />
              <IconButton icon={<BsSun />} size="md" disabled />
              <IconButton icon={<BsSun />} size="lg" disabled />
            </div>
          </div>
        </div>
      </Tredici>
    );
  }
};
