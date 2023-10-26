import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "../icon-button";
import { Progress } from ".";
import { Tredici } from "@components/theme-context-provider";
import { useTheme } from "@hooks/use-theme";
import { BsSun, BsMoonFill } from "react-icons/bs";
import { useState } from "react";
import { Button } from "@components/button";

const meta: Meta<typeof Progress> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Progress",
  component: Progress
};

export default meta;
type Story = StoryObj<typeof Progress>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

const ThemeButton = () => {
  const { theme, toggle } = useTheme();

  return (
    <IconButton
      onClick={toggle}
      icon={theme === "dark" ? <BsSun /> : <BsMoonFill />}
    />
  );
};

export const Normal: Story = {
  render: () => {
    const [prog, setProg] = useState<number>(0);

    const increment = () => {
      setProg(p => p + 20);
    };

    const reset = () => {
      setProg(0);
    };

    return (
      <Tredici>
        <div style={{ display: "flex", flexDirection: "column", gap: "3rem" }}>
          <ThemeButton />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Progress value={prog} />
            <div style={{ display: "flex", gap: "1rem" }}>
              <Button onClick={increment}>Increment 20%</Button>
              <Button variant="danger" onClick={reset}>
                Reset
              </Button>
            </div>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}
          >
            <strong>Indefinite loading</strong>
            <Progress indeterminate />
          </div>
        </div>
      </Tredici>
    );
  }
};
