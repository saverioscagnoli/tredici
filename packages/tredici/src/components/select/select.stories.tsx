import { Meta, StoryObj } from "@storybook/react";
import { Select } from "./select";
import { Frame } from "@/components/fundamentals";

const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  argTypes: {
    colorScheme: {
      control: "select",
      options: ["plum", "teal", "grass", "red", "amber", "blue", "b/w", "gray"]
    }
  },
  args: {
    colorScheme: "plum"
  },
  render: ({ colorScheme }) => {
    return (
      <Frame>
        <div className="flex flex-col gap-4">
          <Select size="sm" colorScheme={colorScheme}>
            <Select.Trigger>
              <Select.Value placeholder="Select a fruit..." />
            </Select.Trigger>
            <Select.Content>
              <Select.Group>
                <Select.Label>Fruits</Select.Label>
                <Select.Item value="1">Apple 🍎</Select.Item>
                <Select.Item value="2">Banana 🍌</Select.Item>
                <Select.Item value="3" disabled>
                  Orange 🍊
                </Select.Item>

                <Select.Separator />

                <Select.Label>Veggies</Select.Label>

                <Select.Item value="4">Carrot 🥕</Select.Item>
                <Select.Item value="5">Broccoli 🥦</Select.Item>
                <Select.Item value="6">Cucumber 🥒</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select>
          <Select colorScheme={colorScheme}>
            <Select.Trigger>
              <Select.Value placeholder="Select a fruit..." />
            </Select.Trigger>
            <Select.Content>
              <Select.Group>
                <Select.Label>Fruits</Select.Label>
                <Select.Item value="1">Apple 🍎</Select.Item>
                <Select.Item value="2">Banana 🍌</Select.Item>
                <Select.Item value="3" disabled>
                  Orange 🍊
                </Select.Item>

                <Select.Separator />

                <Select.Label>Veggies</Select.Label>

                <Select.Item value="4">Carrot 🥕</Select.Item>
                <Select.Item value="5">Broccoli 🥦</Select.Item>
                <Select.Item value="6">Cucumber 🥒</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select>
          <Select size="lg" colorScheme={colorScheme}>
            <Select.Trigger>
              <Select.Value placeholder="Select a fruit..." />
            </Select.Trigger>
            <Select.Content>
              <Select.Group>
                <Select.Label>Fruits</Select.Label>
                <Select.Item value="1">Apple 🍎</Select.Item>
                <Select.Item value="2">Banana 🍌</Select.Item>
                <Select.Item value="3" disabled>
                  Orange 🍊
                </Select.Item>

                <Select.Separator />

                <Select.Label>Veggies</Select.Label>

                <Select.Item value="4">Carrot 🥕</Select.Item>
                <Select.Item value="5">Broccoli 🥦</Select.Item>
                <Select.Item value="6">Cucumber 🥒</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select>

          <Select colorScheme={colorScheme} disabled defaultValue="4">
            <Select.Trigger>
              <Select.Value placeholder="Select a fruit..." />
            </Select.Trigger>
            <Select.Content>
              <Select.Group>
                <Select.Label>Fruits</Select.Label>
                <Select.Item value="1">Apple 🍎</Select.Item>
                <Select.Item value="2">Banana 🍌</Select.Item>
                <Select.Item value="3" disabled>
                  Orange 🍊
                </Select.Item>

                <Select.Separator />

                <Select.Label>Veggies</Select.Label>

                <Select.Item value="4">Carrot 🥕</Select.Item>
                <Select.Item value="5">Broccoli 🥦</Select.Item>
                <Select.Item value="6">Cucumber 🥒</Select.Item>
              </Select.Group>
            </Select.Content>
          </Select>
        </div>
      </Frame>
    );
  }
};
