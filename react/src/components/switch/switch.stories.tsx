import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./switch";

import "~/index.css";
import { cn } from "~/lib/utils";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Basic: Story = {
  argTypes: {
    size: {
      control: { type: "radio" },
      options: ["sm", "md", "lg"]
    },
    colorScheme: {
      control: { type: "select" },
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
    }
  },
  render: props => <Switch {...props} />
};

export const size: Story = {
  render: () => (
    <div className={cn("flex flex-col gap-8")}>
      <div className={cn("flex items-center gap-8")}>
        <Switch size="sm" />
        <Switch size="md" />
        <Switch size="lg" />
      </div>
      <div className={cn("flex items-center gap-8")}>
        <Switch size="sm" colorScheme="plum" defaultChecked />
        <Switch size="md" colorScheme="plum" defaultChecked />
        <Switch size="lg" colorScheme="plum" defaultChecked />
      </div>
    </div>
  )
};

export const ColorSchemes: Story = {
  render: () => (
    <div className={cn("flex flex-col gap-8")}>
      <div className={cn("flex gap-8")}>
        <Switch colorScheme="plum" />
        <Switch colorScheme="plum" defaultChecked />
      </div>
      <div className={cn("flex gap-8")}>
        <Switch colorScheme="red" />
        <Switch colorScheme="red" defaultChecked />
      </div>
      <div className={cn("flex gap-8")}>
        <Switch colorScheme="blue" />
        <Switch colorScheme="blue" defaultChecked />
      </div>
      <div className={cn("flex gap-8")}>
        <Switch colorScheme="teal" />
        <Switch colorScheme="teal" defaultChecked />
      </div>
      <div className={cn("flex gap-8")}>
        <Switch colorScheme="cyan" />
        <Switch colorScheme="cyan" defaultChecked />
      </div>
      <div className={cn("flex gap-8")}>
        <Switch colorScheme="green" />
        <Switch colorScheme="green" defaultChecked />
      </div>
      <div className={cn("flex gap-8")}>
        <Switch colorScheme="amber" />
        <Switch colorScheme="amber" defaultChecked />
      </div>
      <div className={cn("flex gap-8")}>
        <Switch colorScheme="orange" />
        <Switch colorScheme="orange" defaultChecked />
      </div>
      <div className={cn("flex gap-8")}>
        <Switch colorScheme="gray" />
        <Switch colorScheme="gray" defaultChecked />
      </div>
    </div>
  )
};
