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
    return <Button {...props}>Click Me!</Button>;
  }
};

import { BsGithub, BsCart } from "react-icons/bs";

export const WithIcon: Story = {
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
      <div className="flex space-x-4">
        <Button {...props} leftIcon={<BsGithub />}>
          GitHub
        </Button>
        <Button {...props} rightIcon={<BsCart />}>
          My Cart
        </Button>
      </div>
    );
  }
};
