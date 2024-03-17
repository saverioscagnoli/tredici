import { useState } from "react";
import { ColorSchemeSelect, SizeRadio } from "@components";
import { Button, ButtonColorScheme, ButtonSize } from "@tredici";

const ButtonDemo = () => {
  const [colorScheme, setColorScheme] = useState<ButtonColorScheme>("plum");
  const [size, setSize] = useState<ButtonSize>("md");

  return (
    <div>
      <Button colorScheme={colorScheme} size={size}>
        Button
      </Button>
      <ColorSchemeSelect
        colorScheme={colorScheme}
        setColorScheme={setColorScheme}
        colors={["plum", "teal", "grass", "red", "amber", "blue", "b/w"]}
        className="absolute  top-4 right-4 w-[175px]"
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

export { ButtonDemo };
