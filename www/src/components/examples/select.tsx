import { ColorSchemeSelect, SizeRadio } from "@components";
import { Select, SelectColorScheme, SelectSize } from "@tredici";
import { useState } from "react";

const SelectDemo = () => {
  const [colorScheme, setColorScheme] = useState<SelectColorScheme>("plum");
  const [size, setSize] = useState<SelectSize>("md");

  return (
    <div>
      <Select colorScheme={colorScheme} size={size}>
        <Select.Trigger className="w-[175px]">
          <Select.Value placeholder="Select a fruit..." />
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Label>Fruits</Select.Label>
            <Select.Item value="1">Apple 🍎</Select.Item>
            <Select.Item value="2">Banana 🍌</Select.Item>
            <Select.Item value="3" disabled>
              Orange 🍊
            </Select.Item>

            <Select.Separator />

            <Select.Label>Veggies</Select.Label>

            <Select.Item value="4">Carrot 🥕</Select.Item>
            <Select.Item value="5">Broccoli 🥦</Select.Item>
            <Select.Item value="6">Cucumber 🥒</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select>

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
      <SizeRadio
        componentSize={size}
        setSize={setSize}
        sizes={["sm", "md", "lg"]}
        className="flex flex-col gap-2 absolute left-4 top-4 w-[175px]"
      />
    </div>
  );
};

export { SelectDemo };
