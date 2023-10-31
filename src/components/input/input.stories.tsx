import type { Meta, StoryObj } from "@storybook/react";
import "@styles/global.css";

import { Button } from "@components/button";
import { Input } from ".";
import { Tredici } from "@components/theme-context-provider";
import { useTheme } from "@hooks/use-theme";
import { BsSun, BsMoonFill } from "react-icons/bs";
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

export const Normal: Story = {
  render: () => {
    const [type, setType] = useState<"password" | "text">("password");
    const toggle = () => setType(type === "password" ? "text" : "password");

    return (
      <Tredici>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
        ></div>
      </Tredici>
    );
  }
};
