import { Meta, StoryObj } from "@storybook/react";
import { ThemeButton } from "components/examples";
import { Button, Tooltip, Tredici } from "@components";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = {
  render: () => {
    return (
      <Tredici>
        <div className="flex flex-col gap-12">
          <ThemeButton />
          <div>
            <Tooltip content="Tooltip!!">
              <Button>Hover!</Button>
            </Tooltip>
          </div>
        </div>
      </Tredici>
    );
  }
};
