import { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./switch";
import { Frame } from "@/components/fundamentals";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch
};

export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    colorScheme: "purple"
  },
  render: ({ colorScheme }) => {
    return (
      <Frame>
        <div className="flex flex-col gap-4">
          <Switch size="sm" colorScheme={colorScheme} />
          <Switch size="md" colorScheme={colorScheme} />
          <Switch size="lg" colorScheme={colorScheme} />
        </div>
      </Frame>
    );
  }
};
