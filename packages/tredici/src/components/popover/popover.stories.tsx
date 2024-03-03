import { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./popover";
import { Frame } from "@/components/fundamentals";
import { IconButton } from "@/components/icon-button";
import { ArrowDownIcon } from "@radix-ui/react-icons";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => {
    return (
      <Frame>
        <Popover>
          <Popover.Trigger asChild>
            <IconButton round icon={<ArrowDownIcon />} />
          </Popover.Trigger>
          <Popover.Content className="flex flex-col gap-2 p-4">
            <Popover.Arrow />

            <div className="w-full h-full flex justify-between">
              <p className="font-semibold">Canvas size</p>
            </div>
            <div className="flex justify-between items-center gap-2">
              <p className="text-sm w-20">Width</p>
              <input className="w-10" />
            </div>
            <div className="flex justify-between items-center gap-2">
              <p className="text-sm w-20">Height</p>
              <input className="w-10" />
            </div>
          </Popover.Content>
        </Popover>
      </Frame>
    );
  }
};
