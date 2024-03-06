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
  args: {
    colorScheme: "purple"
  },
  render: ({ colorScheme }) => {
    return (
      <Frame>
        <Slider colorScheme={colorScheme} />
      </Frame>
    );
  }
};
