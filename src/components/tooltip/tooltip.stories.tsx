import type { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "../icon-button";
import { Tooltip } from ".";
import { Tredici } from "@components/theme-context-provider";
import { useTheme } from "@hooks/use-theme";
import { BsSun, BsMoonFill } from "react-icons/bs";
import { Button } from "@components/button";
import { ArrowUpIcon } from "@radix-ui/react-icons";

const meta: Meta<typeof Tooltip> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Tooltip",
  component: Tooltip
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

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
        <ThemeButton />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10rem"
          }}
        >
          <Tooltip placement="bottom" delayOnEnter={1000} delayOnLeave={3000}>
            <Tooltip.Trigger>
              <Button variant="secondary">Bottom</Button>
            </Tooltip.Trigger>
            <Tooltip.Content>Bottom Tooltip Text</Tooltip.Content>
          </Tooltip>
          <Tooltip placement="left">
            <Tooltip.Trigger>Left</Tooltip.Trigger>
            <Tooltip.Content>Tooltasdfsddfksdhjfdaasip</Tooltip.Content>
          </Tooltip>
          <Tooltip placement="right">
            <Tooltip.Trigger>
              <Button>Right</Button>
            </Tooltip.Trigger>
            <Tooltip.Content>Tooltasdfsddfksdhjfdasip</Tooltip.Content>
          </Tooltip>
          <Tooltip placement="top">
            <Tooltip.Trigger>
              <IconButton variant="outline" icon={<ArrowUpIcon />} />
            </Tooltip.Trigger>
            <Tooltip.Content>Tooltasdfsddfksdhjfdasip</Tooltip.Content>
          </Tooltip>
        </div>
      </Tredici>
    );
  }
};
