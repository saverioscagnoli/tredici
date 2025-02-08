import type { Meta, StoryObj } from "@storybook/react";

import { Avatar } from "./avatar";
import { Frame } from "../frame";

// @ts-ignore
import avatarSrc from "~/assets/avatar.jpg";
import { BsEmojiAngry } from "react-icons/bs";

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
        "purple",
        "red",
        "green",
        "blue",
        "teal",
        "cyan",
        "yellow",
        "orange",
        "gray",
        "b/w"
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
          <Avatar src={""} fallback={<BsEmojiAngry />} {...props}></Avatar>
        </div>
      </Frame>
    );
  }
};
