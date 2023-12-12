import type { Meta, StoryObj } from "@storybook/react";
import { Tredici, useTheme } from "../tredici";
import { Button } from ".";
import React from "react";
import { ColorScheme } from "../../types";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const meta: Meta<typeof Button> = {
  component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

const ThemeButton = () => {
  const { theme, toggle } = useTheme();

  return <Button onClick={toggle}>{theme}</Button>;
};

const template = (colorScheme: ColorScheme | "gray", icon?: boolean) => {
  let C = icon ? Button.Icon : Button;
  return (
    <div className="flex gap-4 mt-4">
      <C colorScheme={colorScheme} icon={<GitHubLogoIcon />}>
        Button
      </C>
      <C colorScheme={colorScheme} disabled icon={<GitHubLogoIcon />}>
        Button
      </C>

      <C colorScheme={colorScheme} variant="outline" icon={<GitHubLogoIcon />}>
        Button
      </C>
      <C
        colorScheme={colorScheme}
        variant="outline"
        disabled
        icon={<GitHubLogoIcon />}
      >
        Button
      </C>

      <C colorScheme={colorScheme} variant="ghost" icon={<GitHubLogoIcon />}>
        Button
      </C>
      <C
        colorScheme={colorScheme}
        variant="ghost"
        disabled
        icon={<GitHubLogoIcon />}
      >
        Button
      </C>
    </div>
  );
};

export const Primary: Story = {
  render: () => {
    return (
      <Tredici>
        <ThemeButton />
        <div className="flex flex-col">
          {template("amethyst")}
          {template("teal")}
          {template("green")}
          {template("crimson")}
          {template("yellow")}
          {template("blue")}
          {template("pink")}
          {template("b/w")}
          {template("gray")}
        </div>
      </Tredici>
    );
  }
};

export const Icon: Story = {
  render: () => {
    return (
      <Tredici>
        <ThemeButton />
        <div className="flex flex-col">
          {template("amethyst", true)}
          {template("teal", true)}
          {template("green", true)}
          {template("crimson", true)}
          {template("yellow", true)}
          {template("blue", true)}
          {template("pink", true)}
          {template("b/w", true)}
          {template("gray", true)}
        </div>
      </Tredici>
    );
  }
};
