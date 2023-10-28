import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../icon-button";
import { Switch } from ".";
import { Tredici } from "@components/theme-context-provider";
import { useTheme } from "@hooks/use-theme";
import { BsSun, BsMoonFill } from "react-icons/bs";

const meta: Meta<typeof Switch> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Switch",
  component: Switch
};

export default meta;
type Story = StoryObj<typeof Switch>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

const ThemeButton = () => {
  const { theme, toggle } = useTheme();

  return (
    <Button onClick={toggle}>
      {theme === "dark" ? <BsSun /> : <BsMoonFill />}
    </Button>
  );
};

export const Normal: Story = {
  render: () => {
    return (
      <Tredici>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <ThemeButton />
          <Switch size="sm" />
          <Switch />
          <Switch size="lg" />
        </div>
      </Tredici>
    );
  }
};
