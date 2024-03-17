import { ColorSchemeSelect, SizeRadio } from "@components";
import { Input, InputColorScheme, InputSize } from "@tredici";
import { useState } from "react";

const InputDemo = () => {
  const [colorScheme, setColorScheme] = useState<InputColorScheme>("plum");
  const [size, setSize] = useState<InputSize>("md");

  return (
    <div>
      <Input
        colorScheme={colorScheme}
        size={size}
        placeholder="Choose an username..."
        spellCheck={false}
      />
      <ColorSchemeSelect
        colorScheme={colorScheme}
        setColorScheme={setColorScheme}
        colors={["plum", "teal", "grass", "red", "amber", "blue", "b/w"]}
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

export { InputDemo };
