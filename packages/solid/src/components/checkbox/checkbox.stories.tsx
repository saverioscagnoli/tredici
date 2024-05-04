import { Meta, StoryObj } from "storybook-solidjs";
import { Checkbox } from "./checkbox";
import { Frame } from "@/components/fundamentals";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

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
        <div class="flex flex-col gap-4">
          <div class="flex gap-4 items-center">
            <Checkbox colorScheme={colorScheme} size="sm" />
            <Checkbox colorScheme={colorScheme} size="md" />
            <Checkbox colorScheme={colorScheme} size="lg" />
          </div>
          <div class="flex gap-4 items-center">
            <Checkbox colorScheme={colorScheme} size="sm" checked disabled />
            <Checkbox colorScheme={colorScheme} size="md" checked disabled />
            <Checkbox colorScheme={colorScheme} size="lg" disabled />
          </div>
        </div>
      </Frame>
    );
  }
};
