import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from ".";
import { Tredici } from "@components/theme-context-provider";
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
        <div className="flex flex-col gap-5">
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <ThemeButton />
            <Avatar size="sm">
              <Avatar.Image src={raccoon} />
              <Avatar.Fallback>SS</Avatar.Fallback>
            </Avatar>
            <Avatar size="sm">
              <Avatar.Fallback>PD</Avatar.Fallback>
            </Avatar>
            <Avatar>
              <Avatar.Image src={cat} />
            </Avatar>
            <Avatar>
              <Avatar.Fallback>SS</Avatar.Fallback>
            </Avatar>
            <Avatar size="lg">
              <Avatar.Image src={cat} />
            </Avatar>
            <Avatar size="lg">
              <Avatar.Fallback>PD</Avatar.Fallback>
            </Avatar>
          </div>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            <ThemeButton />
            <Avatar size="sm">
              <Avatar.Image src={raccoon} />
              <Avatar.Fallback variant="secondary">SS</Avatar.Fallback>
            </Avatar>
            <Avatar size="sm">
              <Avatar.Fallback variant="secondary">PD</Avatar.Fallback>
            </Avatar>
            <Avatar>
              <Avatar.Image src={cat} />
            </Avatar>
            <Avatar>
              <Avatar.Fallback variant="secondary">SS</Avatar.Fallback>
            </Avatar>
            <Avatar size="lg">
              <Avatar.Image src={cat} />
            </Avatar>
            <Avatar size="lg">
              <Avatar.Fallback variant="secondary">PD</Avatar.Fallback>
            </Avatar>
          </div>
        </div>
      </Tredici>
    );
  }
};
