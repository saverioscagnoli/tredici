import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from ".";
import { Tredici } from "@components/theme-context-provider";
import { ThemeButton } from "@components/theme-button";
import { Button } from "@components/button";

const meta: Meta<typeof Tooltip> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Tooltip",
  component: Tooltip
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Normal: Story = {
  render: () => {
    return (
      <Tredici>
        <div className="flex gap-10">
          <ThemeButton />
          <Tooltip>
            <Tooltip.Trigger>
              <Button>Hover!</Button>
            </Tooltip.Trigger>
            <Tooltip.Body>Tooltip Content!!</Tooltip.Body>
          </Tooltip>
        </div>
      </Tredici>
    );
  }
};
