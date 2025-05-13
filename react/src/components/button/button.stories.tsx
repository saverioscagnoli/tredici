import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

import {
  GitHubLogoIcon,
  HomeIcon,
  MagnifyingGlassIcon
} from "@radix-ui/react-icons";
import { cn } from "~/lib/utils";

import "~/index.css";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    size: "md",
    colorScheme: "plum",
    variant: "solid",
    bump: true
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "icon"],
      control: {
        type: "inline-radio"
      }
    },
    colorScheme: {
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
      ],
      control: {
        type: "select"
      }
    },
    variant: {
      options: ["solid", "soft", "outline", "ghost"],
      control: {
        type: "select"
      }
    },
    bump: {
      control: {
        type: "boolean"
      }
    }
  },

  render: props => <Button {...props}>Button</Button>
};

export const Sizes: Story = {
  render: () => (
    <div className={cn("flex flex-col gap-4")}>
      <div className={cn("flex items-center gap-4")}>
        <Button size="sm">Button</Button>
        <Button size="md">Button</Button>
        <Button size="lg">Button</Button>
      </div>

      <div className={cn("flex items-center gap-4")}>
        <Button size="sm" colorScheme="red">
          Button
        </Button>
        <Button size="md" colorScheme="red">
          Button
        </Button>
        <Button size="lg" colorScheme="red">
          Button
        </Button>
      </div>

      <div className={cn("flex items-center gap-4")}>
        <Button size="sm" colorScheme="blue">
          Button
        </Button>
        <Button size="md" colorScheme="blue">
          Button
        </Button>
        <Button size="lg" colorScheme="blue">
          Button
        </Button>
      </div>

      <div className={cn("flex items-center gap-4")}>
        <Button size="sm" colorScheme="teal">
          Button
        </Button>
        <Button size="md" colorScheme="teal">
          Button
        </Button>
        <Button size="lg" colorScheme="teal">
          Button
        </Button>
      </div>

      <div className={cn("flex items-center gap-4")}>
        <Button size="sm" colorScheme="cyan">
          Button
        </Button>
        <Button size="md" colorScheme="cyan">
          Button
        </Button>
        <Button size="lg" colorScheme="cyan">
          Button
        </Button>
      </div>

      <div className={cn("flex items-center gap-4")}>
        <Button size="sm" colorScheme="green">
          Button
        </Button>
        <Button size="md" colorScheme="green">
          Button
        </Button>
        <Button size="lg" colorScheme="green">
          Button
        </Button>
      </div>

      <div className={cn("flex items-center gap-4")}>
        <Button size="sm" colorScheme="amber">
          Button
        </Button>
        <Button size="md" colorScheme="amber">
          Button
        </Button>
        <Button size="lg" colorScheme="amber">
          Button
        </Button>
      </div>

      <div className={cn("flex items-center gap-4")}>
        <Button size="sm" colorScheme="orange">
          Button
        </Button>
        <Button size="md" colorScheme="orange">
          Button
        </Button>
        <Button size="lg" colorScheme="orange">
          Button
        </Button>
      </div>

      <div className={cn("flex items-center gap-4")}>
        <Button size="sm" colorScheme="gray">
          Button
        </Button>
        <Button size="md" colorScheme="gray">
          Button
        </Button>
        <Button size="lg" colorScheme="gray">
          Button
        </Button>
      </div>
    </div>
  )
};

export const Variants: Story = {
  render: () => (
    <div className={cn("flex flex-col gap-4")}>
      <div className={cn("flex items-center gap-4")}>
        <Button variant="solid">Button</Button>
        <Button variant="soft">Button</Button>
        <Button variant="outline">Button</Button>
        <Button variant="ghost">Button</Button>
      </div>

      <div className={cn("flex items-center gap-4")}>
        <Button variant="solid" colorScheme="red">
          Button
        </Button>
        <Button variant="soft" colorScheme="red">
          Button
        </Button>
        <Button variant="outline" colorScheme="red">
          Button
        </Button>
        <Button variant="ghost" colorScheme="red">
          Button
        </Button>
      </div>

      <div className={cn("flex items-center gap-4")}>
        <Button variant="solid" colorScheme="blue">
          Button
        </Button>
        <Button variant="soft" colorScheme="blue">
          Button
        </Button>
        <Button variant="outline" colorScheme="blue">
          Button
        </Button>
        <Button variant="ghost" colorScheme="blue">
          Button
        </Button>
      </div>

      <div className={cn("flex items-center gap-4")}>
        <Button variant="solid" colorScheme="teal">
          Button
        </Button>
        <Button variant="soft" colorScheme="teal">
          Button
        </Button>
        <Button variant="outline" colorScheme="teal">
          Button
        </Button>
        <Button variant="ghost" colorScheme="teal">
          Button
        </Button>
      </div>

      <div className={cn("flex items-center gap-4")}>
        <Button variant="solid" colorScheme="cyan">
          Button
        </Button>
        <Button variant="soft" colorScheme="cyan">
          Button
        </Button>
        <Button variant="outline" colorScheme="cyan">
          Button
        </Button>
        <Button variant="ghost" colorScheme="cyan">
          Button
        </Button>
      </div>

      <div className={cn("flex items-center gap-4")}>
        <Button variant="solid" colorScheme="green">
          Button
        </Button>
        <Button variant="soft" colorScheme="green">
          Button
        </Button>
        <Button variant="outline" colorScheme="green">
          Button
        </Button>
        <Button variant="ghost" colorScheme="green">
          Button
        </Button>
      </div>

      <div className={cn("flex items-center gap-4")}>
        <Button variant="solid" colorScheme="amber">
          Button
        </Button>
        <Button variant="soft" colorScheme="amber">
          Button
        </Button>
        <Button variant="outline" colorScheme="amber">
          Button
        </Button>
        <Button variant="ghost" colorScheme="amber">
          Button
        </Button>
      </div>

      <div className={cn("flex items-center gap-4")}>
        <Button variant="solid" colorScheme="orange">
          Button
        </Button>
        <Button variant="soft" colorScheme="orange">
          Button
        </Button>
        <Button variant="outline" colorScheme="orange">
          Button
        </Button>
        <Button variant="ghost" colorScheme="orange">
          Button
        </Button>
      </div>

      <div className={cn("flex items-center gap-4")}>
        <Button variant="solid" colorScheme="gray">
          Button
        </Button>
        <Button variant="soft" colorScheme="gray">
          Button
        </Button>
        <Button variant="outline" colorScheme="gray">
          Button
        </Button>
        <Button variant="ghost" colorScheme="gray">
          Button
        </Button>
      </div>
    </div>
  )
};

export const Disabled: Story = {
  render: () => <Button disabled>Button</Button>
};

export const WithIcon: Story = {
  args: {
    colorScheme: "plum",
    variant: "solid",
    bump: true
  },
  argTypes: {
    colorScheme: {
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
      ],
      control: {
        type: "select"
      }
    },
    variant: {
      options: ["solid", "soft", "outline", "ghost"],
      control: {
        type: "select"
      }
    },
    bump: {
      control: {
        type: "boolean"
      }
    }
  },

  render: props => (
    <div className={cn("flex gap-4")}>
      <Button size="icon" {...props}>
        {<GitHubLogoIcon />}
      </Button>
      <Button
        leftIcon={<MagnifyingGlassIcon width={20} height={20} />}
        {...props}
      >
        Search
      </Button>

      <Button rightIcon={<HomeIcon />} {...props}>
        Home
      </Button>
    </div>
  )
};
