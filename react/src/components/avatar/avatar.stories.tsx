import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./avatar";
import { cn } from "~/lib/utils";

import "~/index.css";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Basic: Story = {
  render: () => <Avatar fallback="AD" />
};

export const Sizes: Story = {
  render: () => (
    <div className={cn("flex flex-col gap-4")}>
      <div className={cn("flex gap-4 items-center")}>
        <Avatar fallback="MV" size="sm" />
        <Avatar fallback="UE" size="md" />
        <Avatar fallback="US" size="lg" />
        <Avatar fallback="IE" size="xl" />
      </div>
      <div className={cn("flex gap-4 items-center")}>
        <Avatar size="sm" />
        <Avatar size="md" />
        <Avatar size="lg" />
        <Avatar size="xl" />
      </div>
    </div>
  )
};

export const ColorSchemes: Story = {
  render: () => (
    <div className={cn("flex flex-col gap-4")}>
      <div className={cn("flex gap-4 items-center")}>
        <Avatar fallback="GS" />
        <Avatar fallback="DG" colorScheme="red" />
        <Avatar fallback="GB" colorScheme="blue" />
        <Avatar fallback="ER" colorScheme="teal" />
        <Avatar fallback="LJ" colorScheme="cyan" />
        <Avatar fallback="WE" colorScheme="green" />
        <Avatar fallback="JU" colorScheme="amber" />
        <Avatar fallback="AD" colorScheme="orange" />
        <Avatar fallback="RM" colorScheme="gray" />
      </div>
      <div className={cn("flex gap-4 items-center")}>
        <Avatar />
        <Avatar colorScheme="red" />
        <Avatar colorScheme="blue" />
        <Avatar colorScheme="teal" />
        <Avatar colorScheme="cyan" />
        <Avatar colorScheme="green" />
        <Avatar colorScheme="amber" />
        <Avatar colorScheme="orange" />
        <Avatar colorScheme="gray" />
      </div>
    </div>
  )
};

export const WithImage: Story = {
  render: () => (
    <div className={cn("flex gap-4 items-center")}>
      <Avatar size="sm" src="/avatar.png" />
      <Avatar size="md" src="/avatar.png" />
      <Avatar size="lg" src="/avatar.png" />
      <Avatar size="xl" src="/avatar.png" />
    </div>
  )
};
