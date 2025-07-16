import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./tooltip";
import { Button } from "~/components/button/button";

import "~/index.css";
import { cn } from "~/lib/utils";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Basic: Story = {
  render: () => (
    <Tooltip>
      <Tooltip.Trigger asChild>
        <Button>Hover me!</Button>
      </Tooltip.Trigger>
      <Tooltip.Content>Here's Johnny!</Tooltip.Content>
    </Tooltip>
  )
};

export const WithArrow: Story = {
  render: () => (
    <Tooltip>
      <Tooltip.Trigger asChild>
        <Button>Hover me!</Button>
      </Tooltip.Trigger>
      <Tooltip.Content>
        Here's Johnny!
        <Tooltip.Arrow />
      </Tooltip.Content>
    </Tooltip>
  )
};

export const Directions: Story = {
  render: () => (
    <div className={cn("flex flex-col items-center gap-12 pt-12")}>
      <Tooltip>
        <Tooltip.Trigger className="w-fit border border-[var(--gray-4)] px-2 rounded ">
          Top
        </Tooltip.Trigger>
        <Tooltip.Content side="top">Top Tooltip</Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger className="w-fit border border-[var(--gray-4)] px-2 rounded ">
          Left
        </Tooltip.Trigger>
        <Tooltip.Content side="left">Left Tooltip</Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger className="w-fit border border-[var(--gray-4)] px-2 rounded ">
          Right
        </Tooltip.Trigger>
        <Tooltip.Content side="right">Right Tooltip</Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger className="w-fit border border-[var(--gray-4)] px-2 rounded ">
          Bottom
        </Tooltip.Trigger>
        <Tooltip.Content side="bottom">Bottom Tooltip</Tooltip.Content>
      </Tooltip>
    </div>
  )
};

export const DirectionsWithArrow: Story = {
  render: () => (
    <div className={cn("flex flex-col items-center gap-12 pt-12")}>
      <Tooltip>
        <Tooltip.Trigger className="w-fit border border-[var(--gray-4)] px-2 rounded ">
          Top
        </Tooltip.Trigger>
        <Tooltip.Content side="top">
          Top Tooltip
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger className="w-fit border border-[var(--gray-4)] px-2 rounded ">
          Left
        </Tooltip.Trigger>
        <Tooltip.Content side="left">
          Left Tooltip
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger className="w-fit border border-[var(--gray-4)] px-2 rounded ">
          Right
        </Tooltip.Trigger>
        <Tooltip.Content side="right">
          Right Tooltip
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
      <Tooltip>
        <Tooltip.Trigger className="w-fit border border-[var(--gray-4)] px-2 rounded ">
          Bottom
        </Tooltip.Trigger>
        <Tooltip.Content side="bottom">
          Bottom Tooltip
          <Tooltip.Arrow />
        </Tooltip.Content>
      </Tooltip>
    </div>
  )
};
