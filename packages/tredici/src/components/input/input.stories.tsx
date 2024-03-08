import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";
import { Frame } from "@/components/fundamentals";
import { useRef, useState } from "react";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  argTypes: {
    colorScheme: {
      control: "select",
      options: ["plum", "teal", "grass", "red", "amber", "blue", "b/w"]
    }
  },
  args: {
    colorScheme: "plum"
  },
  render: ({ colorScheme }) => {
    const [value, setValue] = useState("Hello, world!");
    const inputRef = useRef<HTMLInputElement>(null);

    return (
      <Frame>
        <div className="flex flex-col gap-4">
          <Input
            value={value}
            onValueChange={setValue}
            colorScheme={colorScheme}
            size="sm"
          />
          <Input
            value={value}
            onValueChange={setValue}
            colorScheme={colorScheme}
            size="md"
            ref={inputRef}
          />
          <Input
            value={value}
            onValueChange={setValue}
            colorScheme={colorScheme}
            size="lg"
          />
        </div>
      </Frame>
    );
  }
};
