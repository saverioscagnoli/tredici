import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import { Progress } from ".";
import { Tredici, useTheme } from "../tredici";
import { useState, useEffect } from "react";
import React from "react";

const meta: Meta<typeof Progress> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  component: Progress
};

export default meta;
type Story = StoryObj<typeof Progress>;

const ThemeButton = ({ colorScheme }: { colorScheme? }) => {
  const { theme, toggle } = useTheme();

  return (
    <Button onClick={toggle} colorScheme={colorScheme}>
      {theme}
    </Button>
  );
};

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

export const ColorSchemes: Story = {
  render: () => {
    const [value, setValue] = useState<number>(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setValue(prev => (prev >= 100 ? 0 : prev + 10));
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    return (
      <Tredici>
        <div className="flex flex-col gap-8">
          <ThemeButton />
          <Progress value={value} />
          <Progress value={value} colorScheme="teal" />
          <Progress value={value} colorScheme="green" />
          <Progress value={value} colorScheme="crimson" />
          <Progress value={value} colorScheme="yellow" />
          <Progress value={value} colorScheme="blue" />
          <Progress value={value} colorScheme="pink" />
          <Progress value={value} colorScheme="gray" />
        </div>
      </Tredici>
    );
  }
};
