import { Meta, StoryObj } from "@storybook/react";
import { RadioGroup } from "./radio-group";
import { Frame } from "@/components/fundamentals";

const meta: Meta<typeof RadioGroup> = {
  title: "Components/RadioGroup",
  component: RadioGroup
};

export default meta;

type Story = StoryObj<typeof RadioGroup>;

export const Default: Story = {
  argTypes: {
    colorScheme: {
      control: "select",
      options: ["plum", "teal", "grass", "red", "amber", "blue", "b/w"]
    }
  },
  args: {
    colorScheme: "plum"
  },
  render: ({ colorScheme }) => {
    return (
      <Frame>
        <div className="flex gap-8">
          <RadioGroup
            className="flex flex-col gap-2"
            colorScheme={colorScheme}
            size="sm"
            defaultValue="1"
          >
            <RadioGroup.Item value="1" />
            <RadioGroup.Item value="2" />
            <RadioGroup.Item value="3" />
          </RadioGroup>
          <RadioGroup
            className="flex flex-col gap-2"
            colorScheme={colorScheme}
            size="md"
            defaultValue="3"
          >
            <RadioGroup.Item value="1" />
            <RadioGroup.Item value="2" />
            <RadioGroup.Item value="3" />
          </RadioGroup>
          <RadioGroup
            className="flex flex-col gap-2"
            colorScheme={colorScheme}
            size="lg"
            defaultValue="2"
          >
            <RadioGroup.Item value="1" />
            <RadioGroup.Item value="2" />
            <RadioGroup.Item value="3" />
          </RadioGroup>
        </div>
      </Frame>
    );
  }
};
