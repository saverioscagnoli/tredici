import type { Meta, StoryObj } from "@storybook/react";
import "@styles/global.css";

import { IconButton } from ".";
import { Tredici } from "@components/theme-context-provider";
import { useTheme } from "@hooks/use-theme";
import { BsSun, BsMoonFill, BsGithub } from "react-icons/bs";

const meta: Meta<typeof IconButton> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: IconButton
};

export default meta;
type Story = StoryObj<typeof IconButton>;

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

export const Icon: Story = {
  render: () => {
    return (
      <Tredici>
        <div style={{ display: "flex", gap: "1rem" }}>
          <ThemeButton />
          <IconButton variant="solid" icon={<BsGithub />} />
          <IconButton variant="secondary" icon={<BsGithub />} />
          <IconButton variant="ghost" icon={<BsGithub />} />
          <IconButton variant="outline" icon={<BsGithub />} />
          <IconButton variant="danger" icon={<BsGithub />} />
        </div>
      </Tredici>
    );
  }
};
