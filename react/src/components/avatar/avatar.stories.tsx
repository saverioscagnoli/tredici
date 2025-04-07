import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./avatar";
import { Frame } from "~/frame";

import avatarSrc from "/avatar.jpg";

const meta: Meta<typeof Avatar> = {
  component: Avatar
};

export default meta;
type Story = StoryObj<typeof Avatar>;

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const pick = (arr: string[]) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

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
      options: ["solid", "secondary"],
      control: { type: "select" }
    },

    ring: {
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

    size: {
      options: ["sm", "md", "lg", "xl"],
      control: { type: "radio" }
    }
  },
  render: props => {
    const fallback = pick(alphabet) + pick(alphabet);

    return (
      <Frame>
        <div className="flex space-x-4">
          <Avatar src={avatarSrc} {...props}></Avatar>
          <Avatar fallback={fallback.toUpperCase()} {...props}></Avatar>
          <Avatar {...props}></Avatar>
          <Avatar src={""} fallback={<p>😀</p>} {...props}></Avatar>
        </div>
      </Frame>
    );
  }
};
