import type { Meta, StoryObj } from "@storybook/react";
import "@styles/global.css";

import { IconButton } from "../icon-button";
import { Select } from ".";
import { Tredici } from "@components/theme-context-provider";
import { useTheme } from "@hooks/use-theme";
import { BsSun, BsMoonFill } from "react-icons/bs";

const meta: Meta<typeof Select> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Select",
  component: Select
};

export default meta;
type Story = StoryObj<typeof Select>;

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
    const foods = [
      "🍎 Apples",
      "🍌 Bananas",
      "🥦 Broccoli",
      "🥕 Carrots",
      "🍫 Chocolate"
    ];

    const animals = [
      "🐶 Dogs",
      "🐱 Cats",
      "🐭 Mice",
      "🐹 Hamsters",
      "🐰 Rabbits",
      "🐷 Pigs",
      "🐸 Frogs",
      "🐯 Tigers",
      "🐨 Koalas",
      "🐻 Bears",
      "🦁 Lions",
      "🐮 Cows",
      "🦝 Raccoons"
    ];

    const moonPhases = [
      "🌑 New Moon",
      "🌒 Waxing Crescent Moon",
      "🌓 First Quarter Moon",
      "🌔 Waxing Gibbous Moon",
      "🌕 Full Moon",
      "🌖 Waning Gibbous Moon",
      "🌗 Last Quarter Moon",
      "🌘 Waning Crescent Moon"
    ];

    return (
      <Tredici>
        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <ThemeButton />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}
          >
            <p>Base select</p>
            <Select options={animals} defaultValue="🍫 Chocolate" />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}
          >
            <p>This is a clearable select</p>
            <Select options={foods} clearable />
          </div>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.3rem" }}
          >
            <p>This is a numbered select</p>
            <Select options={moonPhases} numbered />
          </div>
        </div>
      </Tredici>
    );
  }
};
