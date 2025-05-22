import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./spinner";
import { cn } from "~/lib/utils";

import "~/index.css";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Basic: Story = {
  render: () => <Spinner />
};

export const Sizes: Story = {
  render: () => {
    return (
      <div className={cn("flex flex-col gap-4")}>
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
      </div>
    );
  }
};

export const ColorSchemes: Story = {
  render: () => {
    return (
      <div className={cn("flex flex-col gap-4")}>
        <Spinner colorScheme="plum" />
        <Spinner colorScheme="red" />
        <Spinner colorScheme="blue" />
        <Spinner colorScheme="teal" />
        <Spinner colorScheme="cyan" />
        <Spinner colorScheme="green" />
        <Spinner colorScheme="amber" />
        <Spinner colorScheme="orange" />
        <Spinner colorScheme="gray" />
      </div>
    );
  }
};

export const NoTrack: Story = {
  render: () => {
    return (
      <div className={cn("flex flex-col gap-4")}>
        <Spinner noTrack colorScheme="plum" />
        <Spinner noTrack colorScheme="red" />
        <Spinner noTrack colorScheme="blue" />
        <Spinner noTrack colorScheme="teal" />
        <Spinner noTrack colorScheme="cyan" />
        <Spinner noTrack colorScheme="green" />
        <Spinner noTrack colorScheme="amber" />
        <Spinner noTrack colorScheme="orange" />
        <Spinner noTrack colorScheme="gray" />
      </div>
    );
  }
};
