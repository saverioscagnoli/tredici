import { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";
import { ThemeButton } from "components/examples";
import { Tredici } from "@components";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: () => {
    return (
      <Tredici>
        <div className="flex flex-col gap-4">
          <ThemeButton />
          <div className="flex flex-col gap-2 self-start">
            <Input />
            <Input colorScheme="teal" />
            <Input colorScheme="green" />
            <Input colorScheme="red" />
            <Input colorScheme="yellow" />
            <Input colorScheme="blue" />
            <Input colorScheme="b/w" />
          </div>
        </div>
      </Tredici>
    );
  }
};

export const Sizes: Story = {
  render: () => {
    return (
      <Tredici>
        <div className="flex flex-col gap-4">
          <ThemeButton />
          <div className="flex flex-col gap-2 self-start">
            <Input size="sm" />
            <Input size="md" />
            <Input size="lg" />
          </div>
        </div>
      </Tredici>
    );
  }
};