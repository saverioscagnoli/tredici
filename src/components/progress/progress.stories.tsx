import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@components/button";
import { Progress } from ".";
import { Tredici } from "@components/theme-context-provider";
import { useState, useEffect } from "react";
import { ThemeButton } from "@components/theme-button";

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



export const Normal: Story = {
  render: () => {
    const [value, setValue] = useState<number>(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setValue(prev => (prev >= 100 ? 0 : prev + 10));
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    const [value2, setValue2] = useState<number>(0);
    const increment = () => setValue2(value2 + 10);
    const decrement = () => setValue2(value2 - 10);

    return (
      <Tredici>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <ThemeButton />
          <Progress value={value} />
          <Progress indeterminate value={100} />
          <div className="flex flex-col gap-2">
            <Progress value={value2} />
            <div className="flex gap-2">
              <Button onClick={increment}>Increment</Button>
              <Button onClick={decrement}>Decrement</Button>
            </div>
          </div>
        </div>
      </Tredici>
    );
  }
};
