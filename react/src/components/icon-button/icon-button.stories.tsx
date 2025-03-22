import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./icon-button";
import { Frame } from "~/frame";
import { BsGithub } from "react-icons/bs";
import { Button } from "~/components/button/button";

import "~/index.css";

const meta: Meta<typeof IconButton> = {
  component: IconButton
};

export default meta;
type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  argTypes: {
    colorScheme: {
      options: [
        "plum",
        "red",
        "green",
        "blue",
        "teal",
        "cyan",
        "amber",
        "orange",
        "gray"
      ],
      control: { type: "select" }
    },
    variant: {
      options: ["solid", "secondary", "outline", "ghost"],
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
        <div className="flex gap-2 items-center">
          <IconButton {...props} icon={<BsGithub />} />
          <Button size={props.size}>Azzd</Button>
          <Button size={props.size}>ALKJLKJLkj</Button>
        </div>
      </Frame>
    );
  }
};
