import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "../icon-button";
import { Progress } from ".";
import { Tredici } from "@components/theme-context-provider";
import { useTheme } from "@hooks/use-theme";
import { BsSun, BsMoonFill } from "react-icons/bs";
import { useState, useEffect } from "react";
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
    const [value, setValue] = useState<number>(0);
    const [value2, setValue2] = useState<number>(0);

    useEffect(() => {
      setInterval(() => {
        setValue(v => v + 10);
      }, 1000);
    }, []);

    useEffect(() => {
      if (value >= 110) setValue(0);
    }, [value]);

    return (
      <Tredici>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <ThemeButton />
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Progress value={value}>
              <Progress.Fill />
            </Progress>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}
          >
            <label htmlFor="progress">indefinite</label>
            <Progress id="sa" indeterminate>
              <Progress.Fill />
            </Progress>
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}
          >
            <Progress value={value2}>
              <Progress.Fill />
            </Progress>
            <div style={{ display: "flex", gap: "1rem" }}>
              <Button onClick={() => setValue2(v => v + 10)}>Increment</Button>
              <Button onClick={() => setValue2(v => v - 10)}>Decrement</Button>
              <Button onClick={() => setValue2(0)}>Reset</Button>
            </div>
          </div>
        </div>
      </Tredici>
    );
  }
};
