import type { Meta, StoryObj } from "@storybook/react";

import { Button, Modal } from "../components";
import { useState } from "react";
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

export const Text: Story = {
  render: () => {
    const [open, { toggle, setFalse }] = useBool(false);

    return (
      <div>
        <Button onClick={toggle}>Open Modal</Button>
        <Modal open={open} onClose={setFalse}>
          <h2>Modal Title</h2>
          <p>Modal Content</p>
          <Button onClick={setFalse}>Close Modal</Button>
        </Modal>
      </div>
    );
  }
};
