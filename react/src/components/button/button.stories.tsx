import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

import "~/index.css";

const meta: Meta<typeof Button> = {
  component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

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
        <Button {...props}>Click Me!</Button>
      </Frame>
    );
  }
};

import { BsGithub, BsCart } from "react-icons/bs";
import { Frame } from "~/frame";

export const WithIcon: Story = {
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
        <div className="flex space-x-4">
          <Button {...props} leftIcon={<BsGithub />}>
            GitHub
          </Button>
          <Button {...props} rightIcon={<BsCart />}>
            My Cart
          </Button>
        </div>
      </Frame>
    );
  }
};
