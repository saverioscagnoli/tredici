import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./button";
import { Frame } from "../frame";

const meta: Meta<typeof Button> = {
  component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
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
    variant: {
      options: ["primary", "secondary"],
      control: { type: "radio" }
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
        <Button {...props}>Click Me!</Button>
      </Frame>
    );
  }
};
