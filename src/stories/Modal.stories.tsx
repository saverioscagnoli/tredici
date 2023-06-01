import type { Meta, StoryObj } from "@storybook/react";

import { Button, Modal } from "../components";
import { useBool } from "../hooks";

const meta: Meta<typeof Modal> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Modal",
  component: Modal
};

export default meta;
type Story = StoryObj<typeof Modal>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Example: Story = {
  args: {
    alignment: "center"
  },
  argTypes: {
    alignment: {
      control: {
        type: "select",
        options: ["center", "left", "right"]
      }
    }
  },
  render: args => {
    const [open, { toggle }] = useBool(false);

    return (
      <div>
        <Button onClick={toggle}>Open Modal</Button>
        <Modal {...args} open={open} onClose={toggle}>
          <Modal.Header>Hello world!</Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={toggle} variant="danger">
              Close
            </Button>
            <Button>Submit</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
};
