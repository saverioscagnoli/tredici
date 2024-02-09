import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { Tredici, useTheme } from "@components";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof Button>;

const ThemeButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button className="self-start" onClick={toggleTheme}>
      {theme}
    </Button>
  );
};

export const Default: Story = {
  render: () => {
    return (
      <Tredici>
        <div className="flex flex-col gap-4">
          <ThemeButton />
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Button>Button</Button>
              <Button variant="outline">Button</Button>
              <Button variant="ghost">Button</Button>
            </div>
            <div className="flex gap-2">
              <Button colorScheme="teal">Button</Button>
              <Button colorScheme="teal" variant="outline">
                Button
              </Button>
              <Button colorScheme="teal" variant="ghost">
                Button
              </Button>
            </div>
          </div>
        </div>
      </Tredici>
    );
  }
};
