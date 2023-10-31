import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";
import { Tredici } from "@components/theme-context-provider";
import { useTheme } from "@hooks/use-theme";
import {
  BsMoonFill,
  BsSun,
  BsGithub,
  BsTwitter,
  BsFacebook,
  BsTwitch,
  BsLinkedin
} from "react-icons/bs";
import { ThemeButton } from "@components/theme-button";

const meta: Meta<typeof Button> = {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button
};

export default meta;
type Story = StoryObj<typeof Button>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Normal: Story = {
  render: () => {
    return (
      <Tredici>
        <div style={{ display: "flex", gap: "1rem" }}>
          <ThemeButton />
          <Button>Solid</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="unstyled">Unstyled</Button>
        </div>
      </Tredici>
    );
  }
};

export const Icon: Story = {
  render: () => {
    return (
      <Tredici>
        <div style={{ display: "flex", gap: "1rem" }}>
          <ThemeButton />
          <Button.Icon>
            <BsGithub />
          </Button.Icon>
          <Button.Icon variant="secondary">
            <BsTwitter />
          </Button.Icon>
          <Button.Icon variant="ghost">
            <BsFacebook />
          </Button.Icon>
          <Button.Icon variant="outline">
            <BsTwitch />
          </Button.Icon>
          <Button.Icon variant="unstyled">
            <BsLinkedin />
          </Button.Icon>
        </div>
      </Tredici>
    );
  }
};
