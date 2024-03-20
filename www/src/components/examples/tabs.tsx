import { ColorSchemeSelect } from "@components";
import { Button, Input, Tabs, TabsColorScheme } from "@tredici";
import { useState } from "react";

const TabsDemo = () => {
  const [colorScheme, setColorScheme] = useState<TabsColorScheme>("plum");

  return (
    <div>
      <Tabs className="w-[309px]" defaultValue="acc" colorScheme={colorScheme}>
        <Tabs.List>
          <Tabs.Trigger className="px-10" value="acc">
            Account
          </Tabs.Trigger>
          <Tabs.Trigger className="px-10" value="pass">
            Password
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content
          value="acc"
          className="border border-[--gray-7] rounded-md p-4 shadow-md"
        >
          <p>Make changes to your account here. Click save when you're done.</p>
          <div className="flex flex-col gap-4 mt-2">
            <div>
              <label id="name" className="text-sm">
                Name
              </label>
              <Input className="mt-2" id="name" />
            </div>
            <div>
              <label id="email" className="text-sm">
                Email
              </label>
              <Input className="mt-2" id="email" />
            </div>

            <div className="flex justify-end">
              <Button variant="secondary" colorScheme="grass">
                Save changes
              </Button>
            </div>
          </div>
        </Tabs.Content>
        <Tabs.Content
          value="pass"
          className="border border-[--gray-7] rounded-md p-4 shadow-md"
        >
          <p>Change your password here. After saving, you'll be logged out.</p>

          <div className="flex flex-col gap-4 mt-2">
            <div>
              <label id="current-password" className="text-sm">
                Current password
              </label>
              <Input className="mt-2" id="current-password" type="password" />
            </div>

            <div>
              <label id="new-password" className="text-sm">
                New password
              </label>
              <Input className="mt-2" id="new-password" type="password" />
            </div>

            <div>
              <label id="confirm-password" className="text-sm">
                Confirm password
              </label>
              <Input className="mt-2" id="confirm-password" type="password" />
            </div>

            <div className="flex justify-end">
              <Button variant="secondary" colorScheme="grass">
                Save changes
              </Button>
            </div>
          </div>
        </Tabs.Content>
      </Tabs>

      <ColorSchemeSelect
        colorScheme={colorScheme}
        setColorScheme={setColorScheme}
        className="absolute top-4 right-4 w-[175px]"
        colors={[
          "plum",
          "teal",
          "grass",
          "red",
          "amber",
          "blue",
          "b/w",
          "gray"
        ]}
      />
    </div>
  );
};

export { TabsDemo };
