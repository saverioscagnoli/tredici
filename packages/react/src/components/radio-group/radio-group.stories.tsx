import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../button";
import { RadioGroup } from ".";
import { Tredici, useTheme } from "../tredici";
import React from "react";

const meta: Meta<typeof RadioGroup> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  component: RadioGroup
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

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
    return (
      <Tredici>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <ThemeButton />
          <RadioGroup className="self-start">
            <div className="flex gap-2">
              <RadioGroup.Item id="r1" value="1" />
              <label htmlFor="r1">One</label>
            </div>

            <div className="flex gap-2">
              <RadioGroup.Item colorScheme="teal" id="r2" value="2" />
              <label htmlFor="r2">Two</label>
            </div>

            <div className="flex gap-2">
              <RadioGroup.Item colorScheme="green" id="r3" value="3" />
              <label htmlFor="r3">Three</label>
            </div>
          </RadioGroup>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <RadioGroup className="self-start">
            <div className="flex gap-2">
              <RadioGroup.Item colorScheme="crimson" id="r1" value="1" />
              <label htmlFor="r1">One</label>
            </div>

            <div className="flex gap-2">
              <RadioGroup.Item colorScheme="yellow" id="r2" value="2" />
              <label htmlFor="r2">Two</label>
            </div>

            <div className="flex gap-2">
              <RadioGroup.Item colorScheme="blue" id="r3" value="3" />
              <label htmlFor="r3">Three</label>
            </div>
          </RadioGroup>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <RadioGroup className="self-start">
            <div className="flex gap-2">
              <RadioGroup.Item colorScheme="pink" id="r1" value="1" />
              <label htmlFor="r1">One</label>
            </div>

            <div className="flex gap-2">
              <RadioGroup.Item colorScheme="gray" id="r2" value="2" />
              <label htmlFor="r2">Two</label>
            </div>
          </RadioGroup>
        </div>
      </Tredici>
    );
  }
};
