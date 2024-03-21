import { Meta, StoryObj } from "@storybook/react";
import { ScrollArea } from "./scroll-area";
import { Frame } from "@/components/fundamentals";

const meta: Meta<typeof ScrollArea> = {
  title: "Components/ScrollArea",
  component: ScrollArea
};

export default meta;

type Story = StoryObj<typeof ScrollArea>;

export const Default: Story = {
  argTypes: {
    // @ts-ignore
    colorScheme: {
      control: "select",
      options: ["plum", "teal", "grass", "red", "amber", "blue", "b/w", "gray"]
    }
  },
  args: {
    // @ts-ignore
    colorScheme: "plum"
  },
  // @ts-ignore
  render: ({ colorScheme }) => {
    return (
      <Frame>
        <ScrollArea className="w-48 h-64 rounded shadow border border-gray-500/75">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="h-16 flex items-center justify-center">
              Item {i + 1}
            </div>
          ))}
          <ScrollArea.Scrollbar colorScheme={colorScheme} />
        </ScrollArea>
      </Frame>
    );
  }
};
