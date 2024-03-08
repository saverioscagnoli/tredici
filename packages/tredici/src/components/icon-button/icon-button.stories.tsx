import { Meta, StoryObj } from "@storybook/react";
import { IconButton } from "./icon-button";
import { Frame } from "@/components/fundamentals";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const meta: Meta<typeof IconButton> = {
  title: "Components/IconButton",
  component: IconButton
};

export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "secondary", "outline", "ghost"]
    },
    colorScheme: {
      control: "select",
      options: ["plum", "teal", "grass", "red", "amber", "blue", "b/w", "gray"]
    },
    round: {
      control: "boolean"
    }
  },
  args: {
    variant: "solid",
    colorScheme: "plum"
  },
  render: ({ variant, colorScheme, round }) => {
    return (
      <Frame>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <IconButton
              variant={variant}
              colorScheme={colorScheme}
              size="sm"
              round={round}
              icon={<GitHubLogoIcon width={12} height={12} />}
            />
            <IconButton
              variant={variant}
              colorScheme={colorScheme}
              size="md"
              round={round}
              icon={<GitHubLogoIcon />}
            />
            <IconButton
              variant={variant}
              colorScheme={colorScheme}
              size="lg"
              round={round}
              icon={<GitHubLogoIcon width={19} height={19} />}
            />
          </div>
          <div className="flex gap-4 items-center">
            <IconButton
              variant={variant}
              colorScheme={colorScheme}
              size="sm"
              round={round}
              icon={<GitHubLogoIcon width={12} height={12} />}
              disabled
            />
            <IconButton
              variant={variant}
              colorScheme={colorScheme}
              size="md"
              round={round}
              icon={<GitHubLogoIcon />}
              disabled
            />
            <IconButton
              variant={variant}
              colorScheme={colorScheme}
              size="lg"
              round={round}
              icon={<GitHubLogoIcon width={19} height={19} />}
              disabled
            />
          </div>
        </div>
      </Frame>
    );
  }
};
