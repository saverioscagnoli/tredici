import { useEffect, useState } from "react";
import { ColorSchemeSelect, SizeRadio } from "@components";
import { Checkbox, CheckboxColorScheme, CheckboxSize } from "@tredici";

const CheckboxDemo = () => {
  const audio = new Audio("/youre-goddamn-right.mp3");

  const [checked, setChecked] = useState<boolean>(false);
  const [colorScheme, setColorScheme] = useState<CheckboxColorScheme>("plum");
  const [size, setSize] = useState<CheckboxSize>("md");

  useEffect(() => {
    if (checked) {
      audio.play();
    }
  }, [checked]);

  return (
    <div>
      <div className="flex items-center gap-2 select-none font-semibold">
        <Checkbox
          checked={checked}
          onCheckedChange={setChecked as (v) => void}
          id="broke"
          colorScheme={colorScheme}
          size={size}
        />
        <label htmlFor="broke" className="cursor-pointer">
          Broke Bad ⚗️
        </label>
      </div>

      <ColorSchemeSelect
        colorScheme={colorScheme}
        setColorScheme={setColorScheme}
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
        className="absolute top-4 right-4 w-[175px]"
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

export { CheckboxDemo };
