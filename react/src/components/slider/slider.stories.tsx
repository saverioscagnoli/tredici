import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./slider";

const meta: Meta<typeof Slider> = {
  title: "Components/Slider",
  component: Slider
};

export default meta;

type Story = StoryObj<typeof Slider>;

export const Basic: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Slider />
      <Slider defaultValue={[50]} />
      <Slider defaultValue={[75]} />
      <Slider defaultValue={[100]} />
    </div>
  )
};

export const ColorSchemes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Slider colorScheme="plum" defaultValue={[50]} />
      <Slider colorScheme="blue" defaultValue={[50]} />
      <Slider colorScheme="teal" defaultValue={[50]} />
      <Slider colorScheme="cyan" defaultValue={[50]} />
      <Slider colorScheme="green" defaultValue={[50]} />
      <Slider colorScheme="amber" defaultValue={[50]} />
      <Slider colorScheme="orange" defaultValue={[50]} />
      <Slider colorScheme="gray" defaultValue={[50]} />
    </div>
  )
};
