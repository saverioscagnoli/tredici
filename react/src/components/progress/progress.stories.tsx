import type { Meta, StoryObj } from "@storybook/react";
import { Progress } from "./progress";
import { useState } from "react";
import { Button } from "../button/button";

const meta: Meta<typeof Progress> = {
  title: "Components/Progress",
  component: Progress
};

export default meta;

type Story = StoryObj<typeof Progress>;

function rng(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const Basic: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Progress />
      <Progress value={50} />
      <Progress value={75} />
      <Progress value={100} />
    </div>
  )
};

export const ColorSchemes: Story = {
  render: () => (
    <div className="flex flex-col gap-12">
      <div className="flex flex-col gap-4">
        <Progress colorScheme="plum" value={50} />
        <Progress colorScheme="blue" value={50} />
        <Progress colorScheme="teal" value={50} />
        <Progress colorScheme="cyan" value={50} />
        <Progress colorScheme="green" value={50} />
        <Progress colorScheme="amber" value={50} />
        <Progress colorScheme="orange" value={50} />
        <Progress colorScheme="gray" value={50} />
      </div>
      <div className="flex flex-col gap-4">
        <Progress indefinite colorScheme="plum" value={50} />
        <Progress indefinite colorScheme="blue" value={50} />
        <Progress indefinite colorScheme="teal" value={50} />
        <Progress indefinite colorScheme="cyan" value={50} />
        <Progress indefinite colorScheme="green" value={50} />
        <Progress indefinite colorScheme="amber" value={50} />
        <Progress indefinite colorScheme="orange" value={50} />
        <Progress indefinite colorScheme="gray" value={50} />
      </div>
    </div>
  )
};

export const Demo: Story = {
  render: () => {
    const [value, setValue] = useState(30);

    const inc = () => setValue(v => Math.min(v + rng(10, 30), 100));
    const dec = () => setValue(v => Math.max(v - rng(10, 30), 0));

    return (
      <div className="flex flex-col gap-4">
        <Progress className="w-72" value={value} />
        <div className="flex justify-center gap-2">
          <Button onClick={inc}>Increment</Button>
          <Button onClick={dec}>Decrement</Button>
        </div>
      </div>
    );
  }
};
