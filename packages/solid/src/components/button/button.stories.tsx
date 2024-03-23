import { Meta, StoryObj } from "storybook-solidjs";
import { Button } from "./button";
import { Frame } from "@/components/fundamentals";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  argTypes: {
    variant: {
      control: "select",
      options: ["solid", "secondary", "outline", "ghost", "link"]
    },
    colorScheme: {
      control: "select",
      options: ["plum", "teal", "grass", "red", "amber", "blue", "b/w", "gray"]
    }
  },
  args: {
    variant: "solid",
    colorScheme: "plum"
  },
  render: ({ variant, colorScheme }) => {
    return (
      <Frame>
        <div class="flex flex-col gap-10">
          <div class="flex gap-4 items-center">
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
          <div class="flex gap-4 items-center">
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
