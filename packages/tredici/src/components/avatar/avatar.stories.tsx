import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./avatar";
import { Frame } from "@/components/fundamentals";
const src =
  "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    colorScheme: "purple"
  },
  render: ({ colorScheme }) => {
    return (
      <Frame className="relative">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4 items-center">
            <Avatar size="sm">
              <Avatar.Image src={src} alt="Me" />
            </Avatar>
            <Avatar size="md">
              <Avatar.Image src={src} alt="Me" />
            </Avatar>
            <Avatar size="lg">
              <Avatar.Image src={src} alt="Me" />
            </Avatar>
            <Avatar size="xl">
              <Avatar.Image src={src} alt="Me" />
            </Avatar>
          </div>
          <div className="flex gap-4 items-center">
            <Avatar size="sm" colorScheme={colorScheme}>
              <Avatar.Fallback>JD</Avatar.Fallback>
            </Avatar>
            <Avatar size="md" colorScheme={colorScheme}>
              <Avatar.Fallback>PD</Avatar.Fallback>
            </Avatar>
            <Avatar size="lg" colorScheme={colorScheme}>
              <Avatar.Fallback>GM</Avatar.Fallback>
            </Avatar>
            <Avatar size="xl" colorScheme={colorScheme}>
              <Avatar.Fallback>RP</Avatar.Fallback>
            </Avatar>
          </div>
          <div className="flex gap-4 items-center">
            <Avatar size="sm" colorScheme={colorScheme} />
            <Avatar size="md" colorScheme={colorScheme} />
            <Avatar size="lg" colorScheme={colorScheme} />
            <Avatar size="xl" colorScheme={colorScheme} />
          </div>
        </div>
      </Frame>
    );
  }
};
