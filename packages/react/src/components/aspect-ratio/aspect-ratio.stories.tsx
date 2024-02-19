import { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from "./aspect-ratio";
import { ThemeButton } from "components/examples";
import { Tredici } from "@components";

import raccoonJpg from "./raccoon.jpg";

const meta: Meta<typeof AspectRatio> = {
  title: "Components/AspectRatio",
  component: AspectRatio,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  render: () => {
    return (
      <Tredici>
        <div className="flex flex-col gap-4">
          <ThemeButton />
          <div className="w-80 overflow-hidden">
            <AspectRatio ratio={16 / 9}>
              <img src={raccoonJpg} alt="raccoon" />
            </AspectRatio>
          </div>
        </div>
      </Tredici>
    );
  }
};
