import { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from "./aspect-ratio";
import { Frame } from "@/components/fundamentals";

import raccoons from "./raccoons.jpg";

const meta: Meta<typeof AspectRatio> = {
  title: "Components/AspectRatio",
  component: AspectRatio
};

export default meta;

type Story = StoryObj<typeof AspectRatio>;

export const Default: Story = {
  render: () => {
    return (
      <Frame className="w-1/4">
        <AspectRatio ratio={16 / 9}>
          <img src={raccoons} />
        </AspectRatio>
      </Frame>
    );
  }
};
