import { ColorSchemeSelect, SizeRadio } from "@components";
import { Spinner, SpinnerColorScheme, SpinnerSize } from "@tredici";
import { useState } from "react";

const SpinnerDemo = () => {
  const [colorScheme, setColorScheme] = useState<SpinnerColorScheme>("plum");
  const [size, setSize] = useState<SpinnerSize>("md");

  return (
    <div>
      <Spinner colorScheme={colorScheme} size={size} />
      <ColorSchemeSelect
        colorScheme={colorScheme}
        setColorScheme={setColorScheme}
        className="absolute top-4 right-4 w-[175px]"
        colors={["plum", "teal", "grass", "red", "amber", "blue", "b/w"]}
      />
      <SizeRadio
        componentSize={size}
        setSize={setSize}
        className="flex flex-col gap-2 absolute left-4 top-4 w-[175px]"
        sizes={["sm", "md", "lg"]}
      />
    </div>
  );
};

export { SpinnerDemo };
