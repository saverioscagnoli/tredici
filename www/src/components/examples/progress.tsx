import { ColorSchemeSelect } from "@components";
import { Progress, ProgressColorScheme } from "@tredici";
import { useEffect, useState } from "react";

const rng = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const ProgressDemo = () => {
  const [colorScheme, setColorScheme] = useState<ProgressColorScheme>("plum");
  const [value, setValue] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      let n = rng(10, 30);
      setValue(p => (p + n > 100 ? 0 : p + n));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Progress colorScheme={colorScheme} value={value} />
      <ColorSchemeSelect
        colorScheme={colorScheme}
        setColorScheme={setColorScheme}
        className="absolute top-4 right-4 w-[175px]"
        colors={["plum", "teal", "grass", "red", "amber", "blue", "b/w"]}
      />
    </div>
  );
};

export { ProgressDemo };
