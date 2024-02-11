import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./avatar";
import { ThemeButton } from "components/examples";
import { Tredici } from "@components";

import catJpg from "./cat.jpg";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  render: () => {
    return (
      <Tredici>
        <div className="flex flex-col gap-4">
          <ThemeButton />
          <div className="flex flex-col gap-2 self-start">
            <Avatar src={catJpg} fallback="AD" />
            <Avatar fallback="AS" />
            <Avatar colorScheme="teal" fallback="EF" />
            <Avatar colorScheme="green" fallback="GH" />
            <Avatar colorScheme="red" fallback="IJ" />
            <Avatar colorScheme="yellow" fallback="KL" />
            <Avatar colorScheme="blue" fallback="MN" />
            <Avatar colorScheme="b/w" fallback="OP" />
          </div>
        </div>
      </Tredici>
    );
  }
};
