import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";
import { cn } from "~/lib/utils";

import "~/index.css";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "md", "lg"]
    },
    colorScheme: {
      control: "select",
      options: [
        "plum",
        "red",
        "blue",
        "teal",
        "cyan",
        "green",
        "amber",
        "orange",
        "gray"
      ]
    },
    invalid: {
      control: "boolean"
    }
  },
  render: props => <Input placeholder="Username" {...props} />
};

export const Sizes: Story = {
  render: () => {
    return (
      <div className={cn("flex flex-col gap-4")}>
        <Input size="sm" />
        <Input size="md" />
        <Input size="lg" />
      </div>
    );
  }
};

export const Disabled: Story = {
  render: () => <Input disabled />
};
