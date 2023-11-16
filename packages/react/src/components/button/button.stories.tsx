import type { Meta, StoryObj } from "@storybook/react";
import { Tredici, useTheme } from "../tredici";

import { Button } from ".";
import React from "react";

const meta: Meta<typeof Button> = {
  component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

const ThemeButton = () => {
  const { theme, toggle } = useTheme();

  return <Button onClick={toggle}>{theme}</Button>;
};

export const Primary: Story = {
  render: () => {
    return (
      <Tredici>
        <div className="flex flex-col gap-4">
          <ThemeButton />
          <div className="flex gap-8">
            <Button>Solid</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
          </div>

          <div className="flex gap-8">
            <Button colorScheme="teal">Solid</Button>
            <Button colorScheme="teal" variant="outline">
              Outline
            </Button>
            <Button colorScheme="teal" variant="ghost">
              Ghost
            </Button>
          </div>

          <div className="flex gap-8">
            <Button colorScheme="green">Solid</Button>
            <Button colorScheme="green" variant="outline">
              Outline
            </Button>
            <Button colorScheme="green" variant="ghost">
              Ghost
            </Button>
          </div>

          <div className="flex gap-8">
            <Button colorScheme="crimson">Solid</Button>
            <Button colorScheme="crimson" variant="outline">
              Outline
            </Button>
            <Button colorScheme="crimson" variant="ghost">
              Ghost
            </Button>
          </div>

          <div className="flex gap-8">
            <Button colorScheme="gray">Solid</Button>
            <Button colorScheme="gray" variant="outline">
              Outline
            </Button>
            <Button colorScheme="gray" variant="ghost">
              Ghost
            </Button>
          </div>

          <div className="flex gap-8">
            <Button colorScheme="starship">Solid</Button>
            <Button colorScheme="starship" variant="outline">
              Outline
            </Button>
            <Button colorScheme="starship" variant="ghost">
              Ghost
            </Button>
          </div>

          <div className="flex gap-8">
            <Button colorScheme="blue">Solid</Button>
            <Button colorScheme="blue" variant="outline">
              Outline
            </Button>
            <Button colorScheme="blue" variant="ghost">
              Ghost
            </Button>
          </div>

          <div className="flex gap-8">
            <Button colorScheme="pink">Solid</Button>
            <Button colorScheme="pink" variant="outline">
              Outline
            </Button>
            <Button colorScheme="pink" variant="ghost">
              Ghost
            </Button>
          </div>
        </div>
      </Tredici>
    );
  }
};

import { GitHubLogoIcon } from "@radix-ui/react-icons";

export const Icon: Story = {
  render: () => {
    return (
      <Tredici>
        <div className="flex flex-col gap-4">
          <ThemeButton />
          <div className="flex gap-8">
            <Button.Icon icon={<GitHubLogoIcon />} />
            <Button.Icon variant="solid" icon={<GitHubLogoIcon />} round />
            <Button.Icon variant="outline" icon={<GitHubLogoIcon />} />
            <Button.Icon variant="ghost" icon={<GitHubLogoIcon />} />
          </div>

          <div className="flex gap-8">
            <Button.Icon colorScheme="teal" icon={<GitHubLogoIcon />} />
            <Button.Icon colorScheme="teal" variant="outline" icon={<GitHubLogoIcon />} />
            <Button.Icon colorScheme="teal" variant="ghost" icon={<GitHubLogoIcon />} />
          </div>

          <div className="flex gap-8">
            <Button.Icon colorScheme="green" icon={<GitHubLogoIcon />} />
            <Button.Icon colorScheme="green" variant="outline" icon={<GitHubLogoIcon />} />
            <Button.Icon colorScheme="green" variant="ghost" icon={<GitHubLogoIcon />} />
          </div>

          <div className="flex gap-8">
            <Button.Icon colorScheme="crimson" icon={<GitHubLogoIcon />} />
            <Button.Icon colorScheme="crimson" variant="outline" icon={<GitHubLogoIcon />} />
            <Button.Icon colorScheme="crimson" variant="ghost" icon={<GitHubLogoIcon />} />
          </div>

          <div className="flex gap-8">
            <Button.Icon colorScheme="starship" icon={<GitHubLogoIcon />} />
            <Button.Icon colorScheme="starship" variant="outline" icon={<GitHubLogoIcon />} />
            <Button.Icon colorScheme="starship" variant="ghost" icon={<GitHubLogoIcon />} />
          </div>

          <div className="flex gap-8">
            <Button.Icon colorScheme="blue" icon={<GitHubLogoIcon />} />
            <Button.Icon colorScheme="blue" variant="outline" icon={<GitHubLogoIcon />} />
            <Button.Icon colorScheme="blue" variant="ghost" icon={<GitHubLogoIcon />} />
          </div>

          <div className="flex gap-8">
            <Button.Icon colorScheme="pink" icon={<GitHubLogoIcon />} />
            <Button.Icon colorScheme="pink" variant="outline" icon={<GitHubLogoIcon />} />
            <Button.Icon colorScheme="pink" variant="ghost" icon={<GitHubLogoIcon />} />
          </div>

          <div className="flex gap-8">
            <Button.Icon colorScheme="gray" icon={<GitHubLogoIcon />} />
            <Button.Icon colorScheme="gray" variant="outline" icon={<GitHubLogoIcon />} />
            <Button.Icon colorScheme="gray" variant="ghost" icon={<GitHubLogoIcon />} />
          </div>
        </div>
      </Tredici>
    );
  }
};
