import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from ".";
import { Tredici } from "@components/theme-context-provider";
import { useTheme } from "@hooks/use-theme";
import { BsSun, BsMoonFill } from "react-icons/bs";
import { Button } from "@components/button";

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
          <Spinner size="xs" />
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
          <Spinner size="xl" />
          <Button style={{ alignSelf: "flex-start" }}>
            <Spinner
              size="xs"
              spinnerColor="var(--font-color)"
              areaColor="transparent"
              style={{ marginRight: "0.5rem" }}
            />
            With Spinner
          </Button>
          <Button
            icon={
              <Spinner size="sm" spinnerColor="white" areaColor="transparent" />
            }
          />
        </div>
      </Tredici>
    );
  }
};
