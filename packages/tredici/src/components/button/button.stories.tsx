import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { Frame } from "@/components/fundamentals";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: {
    variant: "solid",
    colorScheme: "purple"
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: ({ variant, colorScheme }) => {
    return (
      <Frame>
        <div className="flex flex-col gap-10">
          <div className="flex gap-4">
            <Button variant={variant} colorScheme={colorScheme} size="sm">
              Small
            </Button>
            <Button variant={variant} colorScheme={colorScheme} size="md">
              Medium
            </Button>
            <Button variant={variant} colorScheme={colorScheme} size="lg">
              Large
            </Button>
          </div>
          <div className="flex gap-4">
            <Button disabled variant={variant} colorScheme={colorScheme} size="sm">
              Small
            </Button>
            <Button disabled variant={variant} colorScheme={colorScheme} size="md">
              Medium
            </Button>
            <Button disabled variant={variant} colorScheme={colorScheme} size="lg">
              Large
            </Button>
          </div>
        </div>
      </Frame>
    );
  }
};
