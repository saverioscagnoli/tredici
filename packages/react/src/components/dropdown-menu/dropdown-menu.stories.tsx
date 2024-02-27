import { Meta, StoryObj } from "@storybook/react";
import { DropdownMenu } from "./dropdown-menu";
import { ThemeButton } from "components/examples";
import { IconButton, Tredici } from "@components";
import { useState } from "react";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const meta: Meta<typeof DropdownMenu> = {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof DropdownMenu>;

export const Default: Story = {
  render: () => {
    const [check1, setCheck1] = useState<boolean>(false);
    const [check2, setCheck2] = useState<boolean>(true);

    const [radioValue, setRadioValue] = useState<string>("1");

    const handleCheck1 = () => setCheck1(prev => !prev);
    const handleCheck2 = () => setCheck2(prev => !prev);

    return (
      <Tredici>
        <div className="flex flex-col gap-4">
          <ThemeButton />
          <div className="flex justify-center">
            <DropdownMenu>
              <DropdownMenu.Trigger asChild>
                <IconButton icon={<HamburgerMenuIcon />} />
              </DropdownMenu.Trigger>
              <DropdownMenu.Content>
                <DropdownMenu.Item>Back</DropdownMenu.Item>
                <DropdownMenu.Item>Forward</DropdownMenu.Item>
                <DropdownMenu.Sub>
                  <DropdownMenu.SubTrigger>Others...</DropdownMenu.SubTrigger>
                  <DropdownMenu.SubContent>
                    <DropdownMenu.Item>Reload</DropdownMenu.Item>
                    <DropdownMenu.Item>Save As...</DropdownMenu.Item>
                    <DropdownMenu.Item>Print...</DropdownMenu.Item>

                    <DropdownMenu.Separator />

                    <DropdownMenu.Item>Inspect</DropdownMenu.Item>
                  </DropdownMenu.SubContent>
                </DropdownMenu.Sub>

                <DropdownMenu.Separator />

                <DropdownMenu.CheckboxItem
                  checked={check1}
                  onClick={handleCheck1}
                >
                  Show Hidden Files
                </DropdownMenu.CheckboxItem>
                <DropdownMenu.CheckboxItem
                  checked={check2}
                  onClick={handleCheck2}
                >
                  Show System Files
                </DropdownMenu.CheckboxItem>

                <DropdownMenu.Separator />

                <DropdownMenu.RadioGroup
                  value={radioValue}
                  onValueChange={setRadioValue}
                >
                  <DropdownMenu.Label>Color</DropdownMenu.Label>
                  <DropdownMenu.RadioItem value="1">
                    Turquoise
                  </DropdownMenu.RadioItem>
                  <DropdownMenu.RadioItem value="2">
                    Purpure
                  </DropdownMenu.RadioItem>
                  <DropdownMenu.RadioItem value="3">
                    Orange
                  </DropdownMenu.RadioItem>
                </DropdownMenu.RadioGroup>
                <DropdownMenu.Arrow />
              </DropdownMenu.Content>
            </DropdownMenu>
          </div>
        </div>
      </Tredici>
    );
  }
};
