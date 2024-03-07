import { Meta, StoryObj } from "@storybook/react";
import { Tabs } from "./tabs";
import { Frame } from "@/components/fundamentals";
import { Input } from "../input";
import { Button } from "../button";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs
};

export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  args: {
    colorScheme: "purple"
  },
  render: ({ colorScheme }) => {
    return (
      <Frame>
        <Tabs
          className="w-[310px]"
          colorScheme={colorScheme}
          defaultValue="acc"
        >
          <Tabs.List>
            <Tabs.Trigger className="px-10" value="acc">
              Account
            </Tabs.Trigger>
            <Tabs.Trigger className="px-10" value="pass">
              Password
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content
            className="border border-gray-500/75 rounded-md p-4 shadow-md"
            value="acc"
          >
            <p className="text-lg font-semibold">Account</p>
            <p className="text-base mt-2">
              Make changes to your account here. Click save when you're done.
            </p>

            <div className="flex flex-col mt-4 gap-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold">
                  Name
                </label>
                <Input
                  colorScheme={colorScheme}
                  id="name"
                  defaultValue="Pedro Duarte"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="username" className="font-semibold">
                  Username
                </label>
                <Input
                  colorScheme={colorScheme}
                  id="username"
                  defaultValue="@peduarte"
                />
              </div>

              <Button colorScheme="green" className="self-start mt-4">
                Save changes
              </Button>
            </div>
          </Tabs.Content>
          <Tabs.Content
            className="border border-gray-500/75 rounded-md p-4 shadow-md"
            value="pass"
          >
            <p className="text-lg font-semibold">Password</p>
            <p className="text-base mt-2">
              Change your password here. Click save when you're done.
            </p>

            <div className="flex flex-col mt-4 gap-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="currp" className="font-semibold">
                  Current password
                </label>
                <Input colorScheme={colorScheme} id="currp" type="password" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="newp" className="font-semibold">
                  New password
                </label>
                <Input colorScheme={colorScheme} id="newp" type="password" />
              </div>

              <Button colorScheme="green" className="self-start mt-4">
                Save password
              </Button>
            </div>
          </Tabs.Content>
        </Tabs>
      </Frame>
    );
  }
};

export const Vertical: Story = {
  render: () => {
    return (
      <Frame>
        <Tabs orientation="vertical">
          <Tabs.List>
            <Tabs.Trigger value="1">Tab 1</Tabs.Trigger>
            <Tabs.Trigger value="2">Tab 2</Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="1">Content 1</Tabs.Content>
          <Tabs.Content value="2">Content 2</Tabs.Content>
        </Tabs>
      </Frame>
    );
  }
};
