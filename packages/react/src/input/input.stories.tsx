import type { Meta, StoryObj } from "@storybook/react";

import { Input } from "./input";
import { Frame } from "../frame";
import { cn } from "~/utils";

const meta: Meta<typeof Input> = {
  component: Input
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  argTypes: {
    colorScheme: {
      options: [
        "purple",
        "red",
        "green",
        "blue",
        "teal",
        "cyan",
        "yellow",
        "orange",
        "gray"
      ],
      control: { type: "select" }
    },

    size: {
      options: ["sm", "md", "lg"],
      control: { type: "radio" }
    },

    disabled: {
      control: { type: "boolean" }
    }
  },
  render: props => {
    return (
      <Frame>
        <Input
          className={cn("!w-64")}
          placeholder="Choose username..."
          {...props}
        />
      </Frame>
    );
  }
};
