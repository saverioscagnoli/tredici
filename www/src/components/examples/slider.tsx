import { ColorSchemeSelect } from "@components";
import { Slider, SliderColorScheme } from "@tredici";
import { useState } from "react";

const SliderDemo = () => {
  const [colorScheme, setColorScheme] = useState<SliderColorScheme>("plum");

  return (
    <div>
      <Slider colorScheme={colorScheme} defaultValue={[50]} />
      <ColorSchemeSelect
        colorScheme={colorScheme}
        setColorScheme={setColorScheme}
        className="absolute top-4 right-4 w-[175px]"
        colors={["plum", "teal", "grass", "red", "amber", "blue", "b/w"]}
      />
    </div>
  );
};

export { SliderDemo };
