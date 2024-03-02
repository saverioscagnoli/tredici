import { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";
import { Frame } from "@/components/fundamentals";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

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
          <div className="flex gap-4 items-center">
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
          <div className="flex gap-4 items-center">
            <Button
              disabled
              variant={variant}
              colorScheme={colorScheme}
              size="sm"
            >
              Small
            </Button>
            <Button
              disabled
              variant={variant}
              colorScheme={colorScheme}
              size="md"
            >
              Medium
            </Button>
            <Button
              disabled
              variant={variant}
              colorScheme={colorScheme}
              size="lg"
            >
              Large
            </Button>
          </div>
        </div>
      </Frame>
    );
  }
};

export const WithIcons: Story = {
  args: {
    disabled: false
  },
  render: ({ variant, colorScheme, disabled }) => {
    return (
      <Frame>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <Button
              variant={variant}
              colorScheme={colorScheme}
              size="sm"
              disabled={disabled}
              leftIcon={<GitHubLogoIcon />}
            >
              Github
            </Button>
            <Button
              variant={variant}
              colorScheme={colorScheme}
              size="md"
              disabled={disabled}
              leftIcon={<GitHubLogoIcon width={16} height={16} />}
            >
              Github
            </Button>
            <Button
              variant={variant}
              colorScheme={colorScheme}
              size="lg"
              disabled={disabled}
              leftIcon={<GitHubLogoIcon width={19} height={19} />}
            >
              Github
            </Button>
          </div>
          <div className="flex gap-4 items-center">
            <Button
              variant={variant}
              colorScheme={colorScheme}
              size="sm"
              disabled={disabled}
              rightIcon={<GitHubLogoIcon />}
            >
              Github
            </Button>
            <Button
              variant={variant}
              colorScheme={colorScheme}
              size="md"
              disabled={disabled}
              rightIcon={<GitHubLogoIcon width={16} height={16} />}
            >
              Github
            </Button>
            <Button
              variant={variant}
              colorScheme={colorScheme}
              size="lg"
              disabled={disabled}
              rightIcon={<GitHubLogoIcon width={19} height={19} />}
            >
              Github
            </Button>
          </div>
        </div>
      </Frame>
    );
  }
};
