import type { Meta, StoryObj } from "@storybook/react";
import { Tredici, useTheme } from "../tredici";

import { Accordion } from ".";
import React from "react";
import { Button } from "../button";
import { PersonIcon } from "@radix-ui/react-icons";

const meta: Meta<typeof Accordion> = {
  component: Accordion
};

export default meta;
type Story = StoryObj<typeof Accordion>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

const ThemeButton = ({ colorScheme }: { colorScheme? }) => {
  const { theme, toggle } = useTheme();

  return (
    <Button onClick={toggle} colorScheme={colorScheme}>
      {theme}
    </Button>
  );
};

export const Primary: Story = {
  render: () => {
    return (
      <Tredici>
        <div className="flex flex-col gap-4">
          <ThemeButton />
          <Accordion type="multiple">
            <Accordion.Item value="accordion1">
              <Accordion.Trigger>Accordion 1</Accordion.Trigger>
              <Accordion.Content>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
                cum ea natus quaerat eaque, laboriosam earum ab deleniti dicta.
                Quis quasi nesciunt facilis rerum totam! Adipisci, nemo sed.
                Rem, sed.
              </Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="accordion2">
              <Accordion.Trigger>Accordion 2</Accordion.Trigger>
              <Accordion.Content>Content 2</Accordion.Content>
            </Accordion.Item>
            <Accordion.Item value="accordion3">
              <Accordion.Trigger>Accordion 3</Accordion.Trigger>
              <Accordion.Content>Content 3</Accordion.Content>
            </Accordion.Item>
          </Accordion>
        </div>
      </Tredici>
    );
  }
};
