import * as RxRadioGroup from "@radix-ui/react-radio-group";
import { cva } from "class-variance-authority";
import {
  ForwardRefExoticComponent,
  RefAttributes,
  createContext,
  forwardRef,
  useContext
} from "react";

import "./radio-group.css";

type RadioGroupItemColorScheme =
  | "plum"
  | "teal"
  | "grass"
  | "red"
  | "amber"
  | "blue"
  | "b/w";

type RadioGroupItemSize = "sm" | "md" | "lg";

type RadioGroupContextValue = {
  colorScheme: RadioGroupItemColorScheme;
  size: RadioGroupItemSize;
};

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null);

const useColorScheme = () => {
  const ctx = useContext(RadioGroupContext);

  if (!ctx) {
    throw new Error(
      "RadioGroup compound components cannot be rendered outside the RadioGroup component"
    );
  }

  return ctx;
};

type RadioGroupComponent = ForwardRefExoticComponent<
  RadioGroupProps & RefAttributes<HTMLDivElement>
> & {
  Item: typeof RadioGroupItem;
};

type RadioGroupProps = RxRadioGroup.RadioGroupProps & {
  colorScheme?: RadioGroupItemColorScheme;
  size?: RadioGroupItemSize;
};

const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ colorScheme = "plum", size = "md", ...props }, ref) => {
    return (
      <RadioGroupContext.Provider value={{ colorScheme, size }}>
        <RxRadioGroup.Root {...props} ref={ref} />
      </RadioGroupContext.Provider>
    );
  }
) as RadioGroupComponent;

const radioItemVariants = cva(
  ["bg-transparent", "rounded-full", "border border-[--gray-7]", "shadow"],
  {
    variants: {
      size: {
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6"
      }
    }
  }
);
const radioIndicatorVariants = cva(
  [
    "w-full h-full",
    "flex justify-center items-center",
    "relative",
    ["after:content-['']", "after:block", "after:rounded-[50%]"]
  ],
  {
    variants: {
      colorScheme: {
        plum: "after:bg-[--plum-9]",
        teal: "after:bg-[--teal-9]",
        grass: "after:bg-[--grass-9]",
        red: "after:bg-[--red-9]",
        amber: "after:bg-[--amber-9]",
        blue: "after:bg-[--blue-9]",
        "b/w": "after:bg-[--slate-12]"
      },
      size: {
        sm: "after:w-2 after:h-2",
        md: "after:w-2.5 after:h-2.5",
        lg: "after:w-3 after:h-3"
      }
    },
    defaultVariants: {
      colorScheme: "plum",
      size: "md"
    }
  }
);

type RadioGroupItemProps = RxRadioGroup.RadioGroupItemProps & {
  colorScheme?: RadioGroupItemColorScheme;
  size?: RadioGroupItemSize;
};

const RadioGroupItem = forwardRef<HTMLButtonElement, RadioGroupItemProps>(
  ({ className, colorScheme, size, ...props }, ref) => {
    const { colorScheme: generalScheme, size: generalSize } = useColorScheme();

    return (
      <RxRadioGroup.Item
        className={radioItemVariants({ className, size: size ?? generalSize })}
        {...props}
        ref={ref}
      >
        <RxRadioGroup.Indicator
          className={radioIndicatorVariants({
            className: "radio-indicator",
            colorScheme: colorScheme ?? generalScheme,
            size: size ?? generalSize
          })}
        />
      </RxRadioGroup.Item>
    );
  }
);

RadioGroup.Item = RadioGroupItem;

RadioGroup.displayName = RxRadioGroup.Root.displayName;

export { RadioGroup };
export type { RadioGroupProps, RadioGroupItemProps };
