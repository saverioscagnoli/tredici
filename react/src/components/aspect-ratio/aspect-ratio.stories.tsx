import type { Meta, StoryObj } from "@storybook/react";
import { AspectRatio } from "./aspect-ratio";
import { cn } from "~/lib/utils";

import "~/index.css";

const meta: Meta<typeof AspectRatio> = {
  title: "Components/AspectRatio",
  component: AspectRatio
};

export default meta;

type Story = StoryObj<typeof AspectRatio>;

export const Basic: Story = {
  render: () => (
    <div className={cn("w-96")}>
      <AspectRatio ratio={16 / 9}>
        <img
          className={cn("w-full h-full", "object-cover")}
          src="/avatar.png"
        />
      </AspectRatio>
    </div>
  )
};
