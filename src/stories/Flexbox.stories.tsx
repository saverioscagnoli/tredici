import type { Meta, StoryObj } from "@storybook/react";

import { Button, Flexbox } from "../components";

const meta: Meta<typeof Flexbox> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Flexbox",
  component: Flexbox
};

export default meta;
type Story = StoryObj<typeof Flexbox>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Example: Story = {
  args: {
    vertical: false,
    horizontal: false
  },
  argTypes: {
    vertical: {
      control: {
        type: "boolean"
      }
    },
    horizontal: {
      control: {
        type: "boolean"
      }
    }
  },
  render: args => (
    <Flexbox
      {...args}
      w="100%"
      h="20rem"
      style={{
        gap: "10px",
        border: "1px solid black"
      }}
    >
      <Button>Button 1</Button>
      <Button variant="primary">Button 2</Button>
    </Flexbox>
  )
};
