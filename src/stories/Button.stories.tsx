import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../components";

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
    size: "md"
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "danger", "success"],
      control: {
        type: "inline-radio"
      }
    },
    children: {
      control: {
        type: "text"
      }
    },
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio"
      }
    }
  },
  render: args => <Button {...args} />
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
    size: "md"
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "danger", "success"],
      control: {
        type: "inline-radio"
      }
    },
    children: {
      control: {
        type: "text"
      }
    },
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio"
      }
    }
  },
  render: args => <Button {...args} />
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Danger",
    size: "md"
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "danger", "success"],
      control: {
        type: "inline-radio"
      }
    },
    children: {
      control: {
        type: "text"
      }
    },
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio"
      }
    }
  },
  render: args => <Button {...args} />
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success",
    size: "md"
  },
  argTypes: {
    variant: {
      options: ["primary", "secondary", "danger", "success"],
      control: {
        type: "inline-radio"
      }
    },
    children: {
      control: {
        type: "text"
      }
    },
    size: {
      options: ["sm", "md", "lg"],
      control: {
        type: "inline-radio"
      }
    }
  },
  render: args => <Button {...args} />
};
