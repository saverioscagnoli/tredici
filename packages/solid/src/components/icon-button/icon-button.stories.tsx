import { Meta, StoryObj } from "storybook-solidjs";
import { IconButton } from "./icon-button";
import { Frame } from "@/components/fundamentals";

import { BsGithub } from "solid-icons/bs";

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
        <div class="flex flex-col gap-4">
          <div class="flex gap-4 items-center">
            <IconButton
              variant={variant}
              colorScheme={colorScheme}
              size="sm"
              round={round}
              icon={<BsGithub />}
            />
            <IconButton
              variant={variant}
              colorScheme={colorScheme}
              size="md"
              round={round}
              icon={<BsGithub />}
            />
            <IconButton
              variant={variant}
              colorScheme={colorScheme}
              size="lg"
              round={round}
              icon={<BsGithub />}
            />
          </div>
          <div class="flex gap-4 items-center">
            <IconButton
              variant={variant}
              colorScheme={colorScheme}
              size="sm"
              round={round}
              icon={<BsGithub />}
              disabled
            />
            <IconButton
              variant={variant}
              colorScheme={colorScheme}
              size="md"
              round={round}
              icon={<BsGithub />}
              disabled
            />
            <IconButton
              variant={variant}
              colorScheme={colorScheme}
              size="lg"
              round={round}
              icon={<BsGithub />}
              disabled
            />
          </div>
        </div>
      </Frame>
    );
  }
};
