import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "../icon-button";
import { Checkbox } from ".";
import { Tredici } from "@components/theme-context-provider";
import { useTheme } from "@hooks/use-theme";
import { BsSun, BsMoonFill } from "react-icons/bs";
import { useState } from "react";

const meta: Meta<typeof Checkbox> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Checkbox",
  component: Checkbox
};

export default meta;
type Story = StoryObj<typeof Checkbox>;

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
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [deco, setDeco] = useState<string>("line-through");

    const onClick = (v: boolean) => {
      if (v) setDeco("line-through");
      else setDeco("none");
    };

    return (
      <Tredici>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <ThemeButton />
          <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
            <Checkbox defaultChecked />
            <Checkbox variant="secondary" disabled defaultChecked />
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Checkbox
              id="asas"
              defaultChecked
              onValueChange={v => onClick(v)}
            />
            <label htmlFor="asas">
              <h1
                style={{
                  userSelect: "none",
                  cursor: "pointer",
                  textDecoration: deco
                }}
              >
                This is a label
              </h1>
            </label>
          </div>
        </div>
      </Tredici>
    );
  }
};
