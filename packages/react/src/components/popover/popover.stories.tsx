import { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./popover";
import { ThemeButton } from "components/examples";
import { IconButton, Input, Tredici } from "@components";
import {
  ArrowDownIcon,
  ArrowUpIcon,
  ArrowLeftIcon,
  ArrowRightIcon
} from "@radix-ui/react-icons";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  render: () => {
    return (
      <Tredici>
        <div className="w-full flex flex-col">
          <ThemeButton />
          <div className="w-full flex flex-col items-center gap-48">
            <Popover>
              <Popover.Trigger asChild>
                <IconButton round icon={<ArrowDownIcon />} />
              </Popover.Trigger>
              <Popover.Content
                className="flex flex-col gap-2 p-4"
                side="bottom"
              >
                <div className="w-full h-full flex justify-between">
                  <p className="font-semibold">Canvas size</p>
                  <Popover.Close />
                </div>
                <div className="flex justify-between items-center gap-2">
                  <p className="text-sm w-20">Width</p>
                  <Input size="sm" />
                </div>
                <div className="flex justify-between items-center gap-2">
                  <p className="text-sm w-20">Height</p>
                  <Input size="sm" />
                </div>
              </Popover.Content>
            </Popover>
            <Popover>
              <Popover.Trigger asChild>
                <IconButton round icon={<ArrowUpIcon />} />
              </Popover.Trigger>
              <Popover.Content className="flex flex-col gap-2 p-4" side="top">
                <div className="w-full h-full flex justify-between">
                  <p className="font-semibold">Canvas size</p>
                  <Popover.Close />
                </div>
                <div className="flex justify-between items-center gap-2">
                  <p className="text-sm w-20">Width</p>
                  <Input
                    size="sm"
                    className="text-white dark:!text-black caret-white dark:caret-black"
                  />
                </div>
                <div className="flex justify-between items-center gap-2">
                  <p className="text-sm w-20">Height</p>
                  <Input
                    size="sm"
                    className="text-white dark:!text-black caret-white dark:caret-black"
                  />
                </div>
              </Popover.Content>
            </Popover>
            <Popover>
              <Popover.Trigger asChild>
                <IconButton round icon={<ArrowLeftIcon />} />
              </Popover.Trigger>
              <Popover.Content className="flex flex-col gap-2 p-4" side="left">
                <div className="w-full h-full flex justify-between">
                  <p className="font-semibold">Canvas size</p>
                  <Popover.Close />
                </div>
                <div className="flex justify-between items-center gap-2">
                  <p className="text-sm w-20">Width</p>
                  <Input
                    size="sm"
                    className="text-white dark:!text-black caret-white dark:caret-black"
                  />
                </div>
                <div className="flex justify-between items-center gap-2">
                  <p className="text-sm w-20">Height</p>
                  <Input
                    size="sm"
                    className="text-white dark:!text-black caret-white dark:caret-black"
                  />
                </div>
              </Popover.Content>
            </Popover>
            <Popover>
              <Popover.Trigger asChild>
                <IconButton round icon={<ArrowRightIcon />} />
              </Popover.Trigger>
              <Popover.Content className="flex flex-col gap-2 p-4" side="right">
                <div className="w-full h-full flex justify-between">
                  <p className="font-semibold">Canvas size</p>
                  <Popover.Close />
                </div>
                <div className="flex justify-between items-center gap-2">
                  <p className="text-sm w-20">Width</p>
                  <Input
                    size="sm"
                    className="text-white dark:!text-black caret-white dark:caret-black"
                  />
                </div>
                <div className="flex justify-between items-center gap-2">
                  <p className="text-sm w-20">Height</p>
                  <Input
                    size="sm"
                    className="text-white dark:!text-black caret-white dark:caret-black"
                  />
                </div>
              </Popover.Content>
            </Popover>
          </div>
        </div>
      </Tredici>
    );
  }
};
