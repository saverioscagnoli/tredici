import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";
import { ThemeButton } from "components/examples";
import { Tredici } from "@components";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  render: () => {
    return (
      <Tredici>
        <div className="flex flex-col gap-4">
          <ThemeButton />
          <div className="flex gap-2">
            <div className="flex flex-col gap-2 self-start">
              <Checkbox defaultChecked />
              <Checkbox defaultChecked colorScheme="teal" />
              <Checkbox defaultChecked colorScheme="green" />
              <Checkbox defaultChecked colorScheme="red" />
              <Checkbox defaultChecked colorScheme="yellow" />
              <Checkbox defaultChecked colorScheme="blue" />
              <Checkbox defaultChecked colorScheme="b/w" />
            </div>
            <div className="flex flex-col gap-2 self-start">
              <Checkbox disabled defaultChecked />
              <Checkbox disabled defaultChecked colorScheme="teal" />
              <Checkbox disabled defaultChecked colorScheme="green" />
              <Checkbox disabled defaultChecked colorScheme="red" />
              <Checkbox disabled defaultChecked colorScheme="yellow" />
              <Checkbox disabled defaultChecked colorScheme="blue" />
              <Checkbox disabled defaultChecked colorScheme="b/w" />
            </div>
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
          <div className="flex gap-2">
            <div className="flex flex-col gap-2 self-start">
              <Checkbox defaultChecked size="sm" />
              <Checkbox defaultChecked size="md" />
              <Checkbox defaultChecked size="lg" />
            </div>
            <div className="flex flex-col gap-2 self-start">
              <Checkbox disabled defaultChecked size="sm" />
              <Checkbox disabled defaultChecked size="md" />
              <Checkbox disabled defaultChecked size="lg" />
            </div>
          </div>
        </div>
      </Tredici>
    );
  }
};
