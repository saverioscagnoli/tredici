import { RadioGroup, RadioGroupProps } from "@tredici";
import { Dispatch, SetStateAction } from "react";

type SizeRadioProps<T> = RadioGroupProps & {
  componentSize: T;
  setSize: Dispatch<SetStateAction<T>>;
  sizes: T[];
};

const SizeRadio = <T extends string>({
  componentSize,
  setSize,
  sizes,
  ...props
}: SizeRadioProps<T>) => {
  return (
    <RadioGroup
      value={componentSize}
      onValueChange={setSize as (v: string) => void}
      {...props}
    >
      {sizes.map(s => (
        <div className="flex items-center gap-3">
          <RadioGroup.Item key={s} value={s}>
            {s}
          </RadioGroup.Item>
          <label htmlFor={s}>{s}</label>
        </div>
      ))}
    </RadioGroup>
  );
};

export { SizeRadio };
