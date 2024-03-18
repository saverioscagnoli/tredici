import { ColorSchemeSelect } from "@components";
import { RadioGroup, RadioGroupItemColorScheme } from "@tredici";
import { useState } from "react";

const RadioGroupDemo = () => {
  const [colorScheme, setColorScheme] =
    useState<RadioGroupItemColorScheme>("plum");

  return (
    <div>
      <RadioGroup colorScheme={colorScheme} className="flex flex-col gap-3" defaultValue="one">
        <div className="flex gap-3">
          <RadioGroup.Item value="one" />
          <p>Jimmy McGill</p>
        </div>

        <div className="flex gap-3">
          <RadioGroup.Item value="two" />
          <p>Saul Goodman</p>
        </div>

        <div className="flex gap-3">
          <RadioGroup.Item value="three" />
          <p>Charlie Hustle</p>
        </div>

        <div className="flex gap-3">
          <RadioGroup.Item value="five" />
          <p>Slippin' Jimmy</p>
        </div>
      </RadioGroup>

      <ColorSchemeSelect
        colorScheme={colorScheme}
        setColorScheme={setColorScheme}
        colors={["plum", "teal", "grass", "red", "amber", "blue", "b/w"]}
        className="absolute top-4 right-4 w-[175px]"
      />
    </div>
  );
};

export { RadioGroupDemo };
