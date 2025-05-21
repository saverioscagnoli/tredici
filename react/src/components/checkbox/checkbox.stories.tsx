import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";

import "~/index.css";
import { cn } from "~/lib/utils";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

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
    variant: {
      control: "select",
      options: ["solid", "soft", "outline"]
    }
  },
  render: props => {
    return <Checkbox {...props} />;
  }
};

export const Sizes: Story = {
  render: () => {
    return (
      <div className={cn("flex flex-col gap-4")}>
        <div className={cn("flex items-center gap-4")}>
          <Checkbox
            size="sm"
            colorScheme="plum"
            variant="solid"
            defaultChecked
          />
          <Checkbox
            size="md"
            colorScheme="plum"
            variant="solid"
            defaultChecked
          />
          <Checkbox
            size="lg"
            colorScheme="plum"
            variant="solid"
            defaultChecked
          />
        </div>
        <div className={cn("flex items-center gap-4")}>
          <Checkbox size="sm" colorScheme="red" defaultChecked />
          <Checkbox size="md" colorScheme="red" defaultChecked />
          <Checkbox size="lg" colorScheme="red" defaultChecked />
        </div>
        <div className={cn("flex items-center gap-4")}>
          <Checkbox size="sm" colorScheme="blue" defaultChecked />
          <Checkbox size="md" colorScheme="blue" defaultChecked />
          <Checkbox size="lg" colorScheme="blue" defaultChecked />
        </div>
        <div className={cn("flex items-center gap-4")}>
          <Checkbox size="sm" colorScheme="teal" defaultChecked />
          <Checkbox size="md" colorScheme="teal" defaultChecked />
          <Checkbox size="lg" colorScheme="teal" defaultChecked />
        </div>
        <div className={cn("flex items-center gap-4")}>
          <Checkbox size="sm" colorScheme="cyan" defaultChecked />
          <Checkbox size="md" colorScheme="cyan" defaultChecked />
          <Checkbox size="lg" colorScheme="cyan" defaultChecked />
        </div>
        <div className={cn("flex items-center gap-4")}>
          <Checkbox size="sm" colorScheme="green" defaultChecked />
          <Checkbox size="md" colorScheme="green" defaultChecked />
          <Checkbox size="lg" colorScheme="green" defaultChecked />
        </div>
        <div className={cn("flex items-center gap-4")}>
          <Checkbox size="sm" colorScheme="amber" defaultChecked />
          <Checkbox size="md" colorScheme="amber" defaultChecked />
          <Checkbox size="lg" colorScheme="amber" defaultChecked />
        </div>
        <div className={cn("flex items-center gap-4")}>
          <Checkbox size="sm" colorScheme="orange" defaultChecked />
          <Checkbox size="md" colorScheme="orange" defaultChecked />
          <Checkbox size="lg" colorScheme="orange" defaultChecked />
        </div>
        <div className={cn("flex items-center gap-4")}>
          <Checkbox size="sm" colorScheme="gray" defaultChecked />
          <Checkbox size="md" colorScheme="gray" defaultChecked />
          <Checkbox size="lg" colorScheme="gray" defaultChecked />
        </div>
      </div>
    );
  }
};

export const Variants: Story = {
  render: () => {
    return (
      <div className={cn("flex flex-col gap-4")}>
        <div className={cn("flex items-center gap-4")}>
          <Checkbox colorScheme="plum" variant="solid" defaultChecked />
          <Checkbox colorScheme="plum" variant="soft" defaultChecked />
          <Checkbox colorScheme="plum" variant="outline" defaultChecked />
        </div>
        <div className={cn("flex items-center gap-4")}>
          <Checkbox colorScheme="red" variant="solid" defaultChecked />
          <Checkbox colorScheme="red" variant="soft" defaultChecked />
          <Checkbox colorScheme="red" variant="outline" defaultChecked />
        </div>
        <div className={cn("flex items-center gap-4")}>
          <Checkbox colorScheme="blue" variant="solid" defaultChecked />
          <Checkbox colorScheme="blue" variant="soft" defaultChecked />
          <Checkbox colorScheme="blue" variant="outline" defaultChecked />
        </div>
        <div className={cn("flex items-center gap-4")}>
          <Checkbox colorScheme="teal" variant="solid" defaultChecked />
          <Checkbox colorScheme="teal" variant="soft" defaultChecked />
          <Checkbox colorScheme="teal" variant="outline" defaultChecked />
        </div>
        <div className={cn("flex items-center gap-4")}>
          <Checkbox colorScheme="cyan" variant="solid" defaultChecked />
          <Checkbox colorScheme="cyan" variant="soft" defaultChecked />
          <Checkbox colorScheme="cyan" variant="outline" defaultChecked />
        </div>
        <div className={cn("flex items-center gap-4")}>
          <Checkbox colorScheme="green" variant="solid" defaultChecked />
          <Checkbox colorScheme="green" variant="soft" defaultChecked />
          <Checkbox colorScheme="green" variant="outline" defaultChecked />
        </div>
        <div className={cn("flex items-center gap-4")}>
          <Checkbox colorScheme="amber" variant="solid" defaultChecked />
          <Checkbox colorScheme="amber" variant="soft" defaultChecked />
          <Checkbox colorScheme="amber" variant="outline" defaultChecked />
        </div>
        <div className={cn("flex items-center gap-4")}>
          <Checkbox colorScheme="orange" variant="solid" defaultChecked />
          <Checkbox colorScheme="orange" variant="soft" defaultChecked />
          <Checkbox colorScheme="orange" variant="outline" defaultChecked />
        </div>
        <div className={cn("flex items-center gap-4")}>
          <Checkbox colorScheme="gray" variant="solid" defaultChecked />
          <Checkbox colorScheme="gray" variant="soft" defaultChecked />
          <Checkbox colorScheme="gray" variant="outline" defaultChecked />
        </div>
      </div>
    );
  }
};
