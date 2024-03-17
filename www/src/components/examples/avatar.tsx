import { useState } from "react";
import { ColorSchemeSelect, SizeRadio } from "@components";
import { Avatar, AvatarColorScheme, AvatarSize } from "@tredici";

const AvatarDemo = () => {
  const [colorScheme, setColorScheme] = useState<AvatarColorScheme>("plum");
  const [size, setSize] = useState<AvatarSize>("md");

  return (
    <div className="flex gap-4">
      <Avatar colorScheme={colorScheme} size={size}>
        <Avatar.Image src="/cat.jpg" />
        <Avatar.Fallback>🐱</Avatar.Fallback>
      </Avatar>

      <Avatar colorScheme={colorScheme} size={size}>
        <Avatar.Fallback>TR</Avatar.Fallback>
      </Avatar>

      <Avatar colorScheme={colorScheme} size={size} />

      <ColorSchemeSelect
        colorScheme={colorScheme}
        setColorScheme={setColorScheme}
        colors={["plum", "teal", "grass", "red", "amber", "blue", "b/w"]}
        className="absolute  top-4 right-4 w-[175px]"
      />

      <SizeRadio
        componentSize={size}
        setSize={setSize}
        sizes={["sm", "md", "lg", "xl"]}
        className="flex flex-col gap-2 absolute left-4 top-4 w-[175px]"
      />
    </div>
  );
};

export { AvatarDemo };
