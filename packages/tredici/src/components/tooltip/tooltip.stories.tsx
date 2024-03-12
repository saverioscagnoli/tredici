import { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./tooltip";
import { Frame } from "@/components/fundamentals";
import { Button } from "../button";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => {
    return (
      <Frame>
        <Tooltip delayDuration={0}>
          <Tooltip.Trigger asChild>
            <Button>Hover me!</Button>
          </Tooltip.Trigger>
          <Tooltip.Content>
            Zio pera!
            <Tooltip.Arrow />
          </Tooltip.Content>
        </Tooltip>
      </Frame>
    );
  }
};
