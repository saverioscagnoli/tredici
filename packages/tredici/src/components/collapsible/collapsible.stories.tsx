import { Meta, StoryObj } from "@storybook/react";
import { Collapsible } from "./collapsible";
import { Frame } from "@/components/fundamentals";
import { IconButton } from "@/components/icon-button";
import { CaretSortIcon } from "@radix-ui/react-icons";

const meta: Meta<typeof Collapsible> = {
  title: "Components/Collapsible",
  component: Collapsible
};

export default meta;

type Story = StoryObj<typeof Collapsible>;

export const Default: Story = {
  render: ({}) => {
    return (
      <Frame>
        <Collapsible className="w-[300px]">
          <div className="w-full flex justify-between items-center">
            <div>@peduarte starred 3 repositories</div>
            <Collapsible.Trigger className="relative">
              <IconButton icon={<CaretSortIcon />} />
            </Collapsible.Trigger>
          </div>
          <div className="w-full px-1 py-2 mt-2 shadow rounded bg-dark dark:bg-light text-light dark:text-dark">
            @radix-ui/primitives
          </div>
          <Collapsible.Content className="w-full absolute">
            <div className="w-full px-1 py-2 mt-2 shadow rounded bg-dark dark:bg-light text-light dark:text-dark">
              @radix-ui/icons
            </div>
            <div className="w-full px-1 py-2 mt-2 shadow rounded bg-dark dark:bg-light text-light dark:text-dark">
              @radix-ui/colors
            </div>
          </Collapsible.Content>
        </Collapsible>
      </Frame>
    );
  }
};
