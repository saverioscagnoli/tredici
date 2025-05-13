import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

import "~/index.css";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
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
      options: ["plum", "red", "blue"],
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
