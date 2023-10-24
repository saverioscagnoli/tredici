import type { Meta, StoryObj } from "@storybook/react";
import "@styles/global.css";

import { IconButton } from "../icon-button";
import { Input } from ".";
import { Tredici } from "@components/theme-context-provider";
import { useTheme } from "@hooks/use-theme";
import { BsSun, BsMoonFill } from "react-icons/bs";
import { RxEyeOpen, RxEyeClosed } from "react-icons/rx";
import { useState } from "react";

const meta: Meta<typeof Input> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Input",
  component: Input
};

export default meta;
type Story = StoryObj<typeof Input>;

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
    const [type, setType] = useState<"password" | "text">("password");
    const toggle = () => setType(type === "password" ? "text" : "password");

    return (
      <Tredici>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div style={{ display: "flex", gap: "1rem" }}>
            <ThemeButton />
            <Input />
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Input type={type} />
            <IconButton
              icon={type === "password" ? <RxEyeOpen /> : <RxEyeClosed />}
              onClick={toggle}
            />
          </div>
        </div>
      </Tredici>
    );
  }
};
