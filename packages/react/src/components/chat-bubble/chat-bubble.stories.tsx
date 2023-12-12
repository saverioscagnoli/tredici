import type { Meta, StoryObj } from "@storybook/react";
import { Tredici, useTheme } from "../tredici";
import { Avatar } from "../avatar";

import { ChatBubble } from ".";
import React from "react";
import { Button } from "../button";

const meta: Meta<typeof ChatBubble> = {
  component: ChatBubble
};

export default meta;
type Story = StoryObj<typeof ChatBubble>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

const ThemeButton = () => {
  const { theme, toggle } = useTheme();

  return <Button onClick={toggle}>{theme}</Button>;
};

export const Primary: Story = {
  render: () => {
    return (
      <Tredici>
        <div className="w-full flex flex-col gap-4 justify-center">
          <ThemeButton />
          <div className="flex self-end gap-1">
            <ChatBubble type="send">My name is Yoshikage Kira.</ChatBubble>
            <Avatar fallback="YK" />
          </div>
          <ChatBubble colorScheme="teal" type="receive">
            I'm 33 years old.
          </ChatBubble>
          <ChatBubble colorScheme="green" type="send" className="self-end">
            My house is in the northeast section of Morioh, where all the villas
            are, and I am not married.
          </ChatBubble>
          <ChatBubble colorScheme="crimson" type="receive">
            I work as an employee for the Kame Yu department stores, and I get
            home every day by 8 PM at the latest.
          </ChatBubble>
          <ChatBubble colorScheme="yellow" type="send" className="self-end">
            I don't smoke, but I occasionally drink.
          </ChatBubble>
          <ChatBubble colorScheme="blue" type="receive">
            I'm in bed by 11 PM, and make sure I get eight hours of sleep, no
            matter what.
          </ChatBubble>
          <ChatBubble colorScheme="pink" type="send" className="self-end">
            After having a glass of warm milk and doing about twenty minutes of
            stretches before going to bed, I usually have no problems sleeping
            until morning.
          </ChatBubble>
          <ChatBubble colorScheme="b/w" type="receive">
            Just like a baby, I wake up without any fatigue or stress in the
            morning.
          </ChatBubble>
          <ChatBubble colorScheme="gray" type="send" className="self-end">
            I was told there were no issues at my last check-up.
          </ChatBubble>
        </div>
      </Tredici>
    );
  }
};
