import { Dispatch, SetStateAction } from "react";
import { Select, SelectTriggerProps } from "@tredici";

type ColorSchemeSelectProps<T> = SelectTriggerProps & {
  colorScheme: T;
  setColorScheme: Dispatch<SetStateAction<T>>;
  colors: T[];
};

const ColorSchemeSelect = <T extends string>({
  colorScheme,
  setColorScheme,
  colors,
  ...props
}: ColorSchemeSelectProps<T>) => {
  return (
    <Select
      value={colorScheme}
      onValueChange={setColorScheme as (v: string) => void}
      colorScheme="gray"
    >
      <Select.Trigger {...props}>
        <Select.Value placeholder="Select a color..." />
      </Select.Trigger>
      <Select.Content sideOffset={7}>
        {colors.map(c => (
          <Select.Item key={c} value={c}>
            {c.at(0).toUpperCase() + c.slice(1)}
          </Select.Item>
        ))}
      </Select.Content>
    </Select>
  );
};

export { ColorSchemeSelect };
