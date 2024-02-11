import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { Tredici } from "@components";
import { ThemeButton } from "components/examples";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof Button>;

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
              <Button disabled>Button</Button>
              <Button variant="outline" disabled>
                Button
              </Button>
              <Button variant="ghost" disabled>
                Button
              </Button>
            </div>
            <div className="flex gap-2">
              <Button colorScheme="teal">Button</Button>
              <Button colorScheme="teal" variant="outline">
                Button
              </Button>
              <Button colorScheme="teal" variant="ghost">
                Button
              </Button>
              <Button colorScheme="teal" disabled>
                Button
              </Button>
              <Button colorScheme="teal" variant="outline" disabled>
                Button
              </Button>
              <Button colorScheme="teal" variant="ghost" disabled>
                Button
              </Button>
            </div>
            <div className="flex gap-2">
              <Button colorScheme="green">Button</Button>
              <Button colorScheme="green" variant="outline">
                Button
              </Button>
              <Button colorScheme="green" variant="ghost">
                Button
              </Button>
              <Button colorScheme="green" disabled>
                Button
              </Button>
              <Button colorScheme="green" variant="outline" disabled>
                Button
              </Button>
              <Button colorScheme="green" variant="ghost" disabled>
                Button
              </Button>
            </div>
            <div className="flex gap-2">
              <Button colorScheme="red">Button</Button>
              <Button colorScheme="red" variant="outline">
                Button
              </Button>
              <Button colorScheme="red" variant="ghost">
                Button
              </Button>
              <Button colorScheme="red" disabled>
                Button
              </Button>
              <Button colorScheme="red" variant="outline" disabled>
                Button
              </Button>
              <Button colorScheme="red" variant="ghost" disabled>
                Button
              </Button>
            </div>
            <div className="flex gap-2">
              <Button colorScheme="yellow">Button</Button>
              <Button colorScheme="yellow" variant="outline">
                Button
              </Button>
              <Button colorScheme="yellow" variant="ghost">
                Button
              </Button>
              <Button colorScheme="yellow" disabled>
                Button
              </Button>
              <Button colorScheme="yellow" variant="outline" disabled>
                Button
              </Button>
              <Button colorScheme="yellow" variant="ghost" disabled>
                Button
              </Button>
            </div>
            <div className="flex gap-2">
              <Button colorScheme="blue">Button</Button>
              <Button colorScheme="blue" variant="outline">
                Button
              </Button>
              <Button colorScheme="blue" variant="ghost">
                Button
              </Button>
              <Button colorScheme="blue" disabled>
                Button
              </Button>
              <Button colorScheme="blue" variant="outline" disabled>
                Button
              </Button>
              <Button colorScheme="blue" variant="ghost" disabled>
                Button
              </Button>
            </div>
            <div className="flex gap-2">
              <Button colorScheme="b/w">Button</Button>
              <Button colorScheme="b/w" variant="outline">
                Button
              </Button>
              <Button colorScheme="b/w" variant="ghost">
                Button
              </Button>
              <Button colorScheme="b/w" disabled>
                Button
              </Button>
              <Button colorScheme="b/w" variant="outline" disabled>
                Button
              </Button>
              <Button colorScheme="b/w" variant="ghost" disabled>
                Button
              </Button>
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
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <Button size="sm">Button</Button>
              <Button size="md">Button</Button>
              <Button size="lg">Button</Button>
            </div>
          </div>
        </div>
      </Tredici>
    );
  }
};