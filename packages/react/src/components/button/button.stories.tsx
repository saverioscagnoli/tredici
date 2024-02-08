import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../../dist";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => <Button />,
};
