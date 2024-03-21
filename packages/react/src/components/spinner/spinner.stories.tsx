import { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./spinner";
import { Frame } from "../fundamentals";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  argTypes: {
    colorScheme: {
      control: "select",
      options: ["plum", "teal", "grass", "red", "amber", "blue", "b/w"]
    },
    size: {
      control: "text"
    },
    noTrack: {
      control: "boolean"
    }
  },
  render: ({ colorScheme, size, noTrack }) => {
    return (
      <Frame>
        <Spinner colorScheme={colorScheme} size={size} noTrack={noTrack} />
      </Frame>
    );
  }
};
