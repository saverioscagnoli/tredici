import { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./slider";
import { Frame } from "@/components/fundamentals";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider
};

export default meta;

type Story = StoryObj<typeof Slider>;

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
    return (
      <Frame>
        <Slider colorScheme={colorScheme} />
      </Frame>
    );
  }
};
