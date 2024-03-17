import { ColorSchemeSelect, SizeRadio } from "@components";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import { IconButton, IconButtonColorScheme, IconButtonSize } from "@tredici";
import { useState } from "react";

const IconButtonDemo = () => {
  const [colorScheme, setColorScheme] = useState<IconButtonColorScheme>("plum");
  const [size, setSize] = useState<IconButtonSize>("md");

  return (
    <div>
      <IconButton
        colorScheme={colorScheme}
        size={size}
        icon={<ChevronRightIcon />}
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

export { IconButtonDemo };
