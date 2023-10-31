import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from ".";
import { Tredici } from "@components/theme-context-provider";
import { useTheme } from "@hooks/use-theme";
import { BsMoonFill, BsSun } from "react-icons/bs";

import cat from "./pics/cat.jpg";
import raccoon from "./pics/raccoon.jpg";
import { ThemeButton } from "@components/theme-button";

const meta: Meta<typeof Avatar> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Avatar",
  component: Avatar
};

export default meta;
type Story = StoryObj<typeof Avatar>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Normal: Story = {
  render: () => {
    return (
      <Tredici>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <ThemeButton />
          <Avatar size="xs">
            <Avatar.Fallback>SS</Avatar.Fallback>
          </Avatar>
          <Avatar size="sm">
            <Avatar.Fallback></Avatar.Fallback>
          </Avatar>
          <Avatar size="md">
            <Avatar.Image src={cat} />
            <Avatar.Fallback></Avatar.Fallback>
          </Avatar>
          <Avatar size="lg">
            <Avatar.Image src={"invalid url.com"} />
            <Avatar.Fallback>RP</Avatar.Fallback>
          </Avatar>
          <Avatar size="xl">
            <Avatar.Image src={raccoon} />
            <Avatar.Fallback>GDA</Avatar.Fallback>
          </Avatar>
        </div>
      </Tredici>
    );
  }
};
