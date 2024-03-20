import { ColorSchemeSelect, SizeRadio } from "@components";
import { Switch, SwitchColorScheme, SwitchSize } from "@tredici";
import { useEffect, useRef, useState } from "react";

import "./switch.css";
import { cn } from "@lib";

const SwitchDemo = () => {
  const audio = new Audio("/goku-drip.mp3");
  const [checked, setChecked] = useState<boolean>(false);
  const [colorScheme, setColorScheme] = useState<SwitchColorScheme>("plum");
  const [size, setSize] = useState<SwitchSize>("md");
  const [animate, setAnimate] = useState<boolean>(false);

  useEffect(() => {
    if (checked) {
      audio.play();
      setAnimate(true);
    }
  }, [checked]);

  console.log(animate)

  return (
    <div>
      <div className="flex items-center gap-2">
        <label
          htmlFor="drip"
          className="font-semibold select-none cursor-pointer"
        >
          Drip 💧
        </label>
        <Switch
          checked={checked}
          onCheckedChange={setChecked}
          id="drip"
          colorScheme={colorScheme}
          size={size}
        />
      </div>
      <img
        src="/goku-drip.png"
        width={120}
        height={120}
        className={cn(
          "absolute top-1/2 -translate-y-1/2 rotate-90 -z-[1]",
          animate && "animate"
        )}
        onAnimationEnd={() => setAnimate(false)}
      />
      <ColorSchemeSelect
        colorScheme={colorScheme}
        setColorScheme={setColorScheme}
        className="absolute top-4 right-4 w-[175px]"
        colors={["plum", "teal", "grass", "red", "amber", "blue", "b/w"]}
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

export { SwitchDemo };
