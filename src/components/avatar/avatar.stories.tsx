import type { Meta, StoryObj } from "@storybook/react";
import "@styles/global.css";

import { Avatar, AvatarBadge } from ".";
import { Tredici } from "@components/theme-context-provider";
import { useTheme } from "@hooks/use-theme";
import { IconButton } from "@components/icon-button";
import { BsMoonFill, BsSun } from "react-icons/bs";

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
    return (
      <Tredici>
        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <ThemeButton />
          <Avatar>
            <Avatar.Image src="https://avatar.githubusercontent.com/u/124599?v=4" />
            <Avatar.Fallback>SS</Avatar.Fallback>
          </Avatar>
        </div>
      </Tredici>
    );
  }
};
