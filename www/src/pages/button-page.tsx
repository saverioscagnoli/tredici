import {
  ColorSchemeSelect,
  Heading,
  CodeTabs,
  PreviewRect,
  SizeRadio
} from "@components";
import { useScrollToHash } from "@hooks";
import { Button, ButtonColorScheme, ButtonSize } from "@tredici";
import { useState } from "react";

const ButtonPage = () => {
  const [colorScheme, setColorScheme] = useState<ButtonColorScheme>("plum");
  const [size, setSize] = useState<ButtonSize>("md");

  useScrollToHash();

  return (
    <div className="flex">
      <div className="w-1/2">
        <Heading as="h1" id="button">
          Button
        </Heading>
        <p className="mt-4 text-lg backdrop-blur-sm rounded">
          The Button component is used to trigger an action or event.
        </p>
        <Heading as="h2" id="button-props" className="mt-8">
          Solid
        </Heading>
        
        <Heading as="h2" id="secondary" className="mt-8">
          Secondary
        </Heading>
        <PreviewRect className="mt-4 relative">
          <Button variant="secondary" colorScheme={colorScheme} size={size}>
            Button
          </Button>
          <ColorSchemeSelect<ButtonColorScheme>
            colorScheme={colorScheme}
            setColorScheme={setColorScheme}
            colors={["plum", "teal", "grass", "red", "amber", "blue", "b/w"]}
            className="absolute top-4 right-4 gap-16"
          />
          <SizeRadio
            componentSize={size}
            setSize={setSize}
            sizes={["sm", "md", "lg"]}
            className="flex flex-col gap-3 absolute left-4 top-4"
            colorScheme={colorScheme}
          />
        </PreviewRect>
      </div>
    </div>
  );
};

export { ButtonPage };
