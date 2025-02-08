import type { Meta, StoryObj } from "@storybook/react";

import { IconButton } from "./icon-button";
import { Frame } from "../frame";
import { BsGithub } from "react-icons/bs";

const meta: Meta<typeof IconButton> = {
  component: IconButton
};

export default meta;
type Story = StoryObj<typeof IconButton>;

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
    variant: {
      options: ["primary", "secondary", "outline", "ghost"],
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
        <IconButton {...props} icon={<BsGithub />} />
      </Frame>
    );
  }
};
