import { Meta, StoryObj } from "@storybook/react";
import { ContextMenu } from "./context-menu";
import { ThemeButton } from "components/examples";
import { Tredici } from "@components";
import { useState } from "react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const meta: Meta<typeof ContextMenu> = {
  title: "Components/ContextMenu",
  component: ContextMenu,
  tags: ["autodocs"]
};

export default meta;

type Story = StoryObj<typeof ContextMenu>;

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
          <ContextMenu>
            <ContextMenu.Trigger className="w-52 h-52 bg-red-400 flex justify-center items-center">
              Right click here...
            </ContextMenu.Trigger>
            <ContextMenu.Content>
              <ContextMenu.Item>Back</ContextMenu.Item>
              <ContextMenu.Item>Forward</ContextMenu.Item>
              <ContextMenu.Sub>
                <ContextMenu.SubTrigger>Others...</ContextMenu.SubTrigger>
                <ContextMenu.SubContent>
                  <ContextMenu.Item>Reload</ContextMenu.Item>
                  <ContextMenu.Item>Save As...</ContextMenu.Item>
                  <ContextMenu.Item>Print...</ContextMenu.Item>

                  <ContextMenu.Separator />

                  <ContextMenu.Item>Inspect</ContextMenu.Item>
                </ContextMenu.SubContent>
              </ContextMenu.Sub>

              <ContextMenu.Separator />

              <ContextMenu.CheckboxItem checked={check1} onClick={handleCheck1}>
                Show Hidden Files
              </ContextMenu.CheckboxItem>
              <ContextMenu.CheckboxItem checked={check2} onClick={handleCheck2}>
                Show System Files
              </ContextMenu.CheckboxItem>

              <ContextMenu.Separator />

              <ContextMenu.RadioGroup
                value={radioValue}
                onValueChange={setRadioValue}
              >
                <ContextMenu.Label>Color</ContextMenu.Label>
                <ContextMenu.RadioItem value="1">
                  Turquoise
                </ContextMenu.RadioItem>
                <ContextMenu.RadioItem value="2">Purpure</ContextMenu.RadioItem>
                <ContextMenu.RadioItem value="3">Orange</ContextMenu.RadioItem>
              </ContextMenu.RadioGroup>
            </ContextMenu.Content>
          </ContextMenu>
        </div>
      </Tredici>
    );
  }
};
