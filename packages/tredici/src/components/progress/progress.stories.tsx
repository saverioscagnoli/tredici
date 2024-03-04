import { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./progress";
import { Frame } from "@/components/fundamentals";
import { Button } from "../button";
import { useState } from "react";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress
};

export default meta;

type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    colorScheme: "purple"
  },
  render: ({ colorScheme }) => {
    const [value, setValue] = useState(30);

    const inc = () => setValue(v => v + 10);
    const dec = () => setValue(v => v - 10);

    return (
      <Frame>
        <div className="flex flex-col gap-4">
          <Progress colorScheme={colorScheme} className="w-72" indefinite />
          <Progress colorScheme={colorScheme} className="w-72" value={value} />
          <div className="flex justify-center gap-2">
            <Button onClick={inc}>Increment</Button>
            <Button onClick={dec}>Decrement</Button>
          </div>
        </div>
      </Frame>
    );
  }
};
