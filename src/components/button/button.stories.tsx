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
        <div className="flex flex-col gap-8">
          <ThemeButton />

          <div style={{ display: "flex", gap: "1rem" }}>
            <Button>Solid</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="outline">Outline</Button>
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Button disabled>Solid</Button>
            <Button disabled variant="ghost">
              Ghost
            </Button>
            <Button disabled variant="outline">
              Outline
            </Button>
          </div>

          <div className="flex gap-4">
            <Button colorScheme="teal">Solid</Button>
            <Button colorScheme="teal" variant="ghost">
              Ghost
            </Button>
            <Button colorScheme="teal" variant="outline">
              Outline
            </Button>
          </div>
          <div className="flex gap-4">
            <Button disabled colorScheme="teal">
              Solid
            </Button>
            <Button disabled colorScheme="teal" variant="ghost">
              Ghost
            </Button>
            <Button disabled colorScheme="teal" variant="outline">
              Outline
            </Button>
          </div>

          <div className="flex gap-4">
            <Button colorScheme="green">Solid</Button>
            <Button colorScheme="green" variant="ghost">
              Ghost
            </Button>
            <Button colorScheme="green" variant="outline">
              Outline
            </Button>
          </div>
          <div className="flex gap-4">
            <Button disabled colorScheme="green">
              Solid
            </Button>
            <Button disabled colorScheme="green" variant="ghost">
              Ghost
            </Button>
            <Button disabled colorScheme="green" variant="outline">
              Outline
            </Button>
          </div>

          <div className="flex gap-4">
            <Button colorScheme="red">Solid</Button>
            <Button colorScheme="red" variant="ghost">
              Ghost
            </Button>
            <Button colorScheme="red" variant="outline">
              Outline
            </Button>
          </div>
          <div className="flex gap-4">
            <Button disabled colorScheme="red">
              Solid
            </Button>
            <Button disabled colorScheme="red" variant="ghost">
              Ghost
            </Button>
            <Button disabled colorScheme="red" variant="outline">
              Outline
            </Button>
          </div>
          <div className="flex gap-4">
            <Button colorScheme="silver">Solid</Button>
            <Button colorScheme="silver" variant="ghost">
              Ghost
            </Button>
            <Button colorScheme="silver" variant="outline">
              Outline
            </Button>
          </div>
          <div className="flex gap-4">
            <Button disabled colorScheme="silver">
              Solid
            </Button>
            <Button disabled colorScheme="silver" variant="ghost">
              Ghost
            </Button>
            <Button disabled colorScheme="silver" variant="outline">
              Outline
            </Button>
          </div>
        </div>
      </Tredici>
    );
  }
};

export const Icon: Story = {
  render: () => {
    return (
      <Tredici>
        <div className="flex flex-col gap-8">
          <ThemeButton />

          <div style={{ display: "flex", gap: "1rem" }}>
            <Button.Icon>
              <BsGithub />
            </Button.Icon>
            <Button.Icon variant="ghost">
              <BsTwitter />
            </Button.Icon>
            <Button.Icon variant="outline">
              <BsFacebook />
            </Button.Icon>
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Button.Icon disabled>
              <BsGithub />
            </Button.Icon>
            <Button.Icon disabled variant="ghost">
              <BsTwitter />
            </Button.Icon>
            <Button.Icon disabled variant="outline">
              <BsFacebook />
            </Button.Icon>
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <Button.Icon colorScheme="teal">
              <BsGithub />
            </Button.Icon>
            <Button.Icon colorScheme="teal" variant="ghost">
              <BsTwitter />
            </Button.Icon>
            <Button.Icon colorScheme="teal" variant="outline">
              <BsFacebook />
            </Button.Icon>
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Button.Icon colorScheme="teal" disabled>
              <BsGithub />
            </Button.Icon>
            <Button.Icon colorScheme="teal" disabled variant="ghost">
              <BsTwitter />
            </Button.Icon>
            <Button.Icon colorScheme="teal" disabled variant="outline">
              <BsFacebook />
            </Button.Icon>
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <Button.Icon colorScheme="green">
              <BsGithub />
            </Button.Icon>
            <Button.Icon colorScheme="green" variant="ghost">
              <BsTwitter />
            </Button.Icon>
            <Button.Icon colorScheme="green" variant="outline">
              <BsFacebook />
            </Button.Icon>
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Button.Icon colorScheme="green" disabled>
              <BsGithub />
            </Button.Icon>
            <Button.Icon colorScheme="green" disabled variant="ghost">
              <BsTwitter />
            </Button.Icon>
            <Button.Icon colorScheme="green" disabled variant="outline">
              <BsFacebook />
            </Button.Icon>
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <Button.Icon colorScheme="red">
              <BsGithub />
            </Button.Icon>
            <Button.Icon colorScheme="red" variant="ghost">
              <BsTwitter />
            </Button.Icon>
            <Button.Icon colorScheme="red" variant="outline">
              <BsFacebook />
            </Button.Icon>
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Button.Icon colorScheme="red" disabled>
              <BsGithub />
            </Button.Icon>
            <Button.Icon colorScheme="red" disabled variant="ghost">
              <BsTwitter />
            </Button.Icon>
            <Button.Icon colorScheme="red" disabled variant="outline">
              <BsFacebook />
            </Button.Icon>
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <Button.Icon colorScheme="silver">
              <BsGithub />
            </Button.Icon>
            <Button.Icon colorScheme="silver" variant="ghost">
              <BsTwitter />
            </Button.Icon>
            <Button.Icon colorScheme="silver" variant="outline">
              <BsFacebook />
            </Button.Icon>
          </div>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Button.Icon colorScheme="silver" disabled>
              <BsGithub />
            </Button.Icon>
            <Button.Icon colorScheme="silver" disabled variant="ghost">
              <BsTwitter />
            </Button.Icon>
            <Button.Icon colorScheme="silver" disabled variant="outline">
              <BsFacebook />
            </Button.Icon>
          </div>
        </div>
      </Tredici>
    );
  }
};
