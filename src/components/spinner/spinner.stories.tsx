import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from ".";
import { Tredici } from "@components/theme-context-provider";
import { Button } from "@components/button";
import { ThemeButton } from "@components/theme-button";

const meta: Meta<typeof Spinner> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Spinner",
  component: Spinner
};

export default meta;
type Story = StoryObj<typeof Spinner>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Normal: Story = {
  render: () => {
    return (
      <Tredici>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <ThemeButton />
          <Spinner size="xs" />
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" spinnerColor="#000" />
          <Spinner size="xl" />
          <Button variant="secondary" style={{ alignSelf: "flex-start" }}>
            <Spinner size="button" variant="secondary" style={{ marginRight: "0.5rem" }} />
            With Spinner
          </Button>
          <Button.Icon>
            <Spinner variant="secondary-inverted" size="button" />
          </Button.Icon>
        </div>
      </Tredici>
    );
  }
};
