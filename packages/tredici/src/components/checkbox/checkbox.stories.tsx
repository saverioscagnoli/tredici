import { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./checkbox";
import { Frame } from "@/components/fundamentals";
import { GitHubLogoIcon, PersonIcon } from "@radix-ui/react-icons";

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
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <Checkbox colorScheme={colorScheme} size="sm" defaultChecked />
            <Checkbox className="checkbox blue" size="md" defaultChecked />
            <Checkbox colorScheme={colorScheme} size="lg" defaultChecked />
          </div>
          <div className="flex gap-4 items-center">
            <Checkbox colorScheme={colorScheme} size="sm" disabled />
            <Checkbox colorScheme={colorScheme} size="md" disabled />
            <Checkbox colorScheme={colorScheme} size="lg" disabled />
          </div>
          <div className="flex gap-4 items-center">
            <Checkbox colorScheme={colorScheme} size="sm" disabled checked />
            <Checkbox colorScheme={colorScheme} size="md" disabled checked />
            <Checkbox colorScheme={colorScheme} size="lg" disabled checked />
          </div>
          <div
            className="flex gap-4 items-center justify-center"
            defaultChecked
          >
            <Checkbox
              size="sm"
              colorScheme={colorScheme}
              icon={<GitHubLogoIcon width={10} height={10} />}
              defaultChecked
            />
            <Checkbox
              colorScheme={colorScheme}
              icon={<PersonIcon width={14} height={14} />}
              defaultChecked
            />
            <Checkbox
              size="lg"
              colorScheme={colorScheme}
              icon={<GitHubLogoIcon />}
              defaultChecked
            />
          </div>
        </div>
      </Frame>
    );
  }
};
