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

export const Example: Story = {
  render: () => (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div
        style={{
          width: "300px",
          padding: "5px",
          border: "1px solid #ccc",
          borderRadius: "6px",
          fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
          boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          textAlign: "center"
        }}
      >
        <p>This is a raccoon 🦝</p>
        <img
          style={{ maxWidth: "80%", maxHeight: "80%", borderRadius: "4px" }}
          src="https://i.imgur.com/seY1co9.jpg"
        />
        <div
          style={{
            width: "100%",
            padding: "5px",
            justifyContent: "flex-end",
            display: "flex",
            gap: "10px",
            marginLeft: "-10px"
          }}
        >
          <Button>Cool!</Button>
          <Button variant="danger">They&apos;re evil!</Button>
        </div>
      </div>
    </div>
  )
};
