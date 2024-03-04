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
  | "purple"
  | "teal"
  | "green"
  | "red"
  | "yellow"
  | "blue"
  | "b/w"
  | "gray";

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
  ({ colorScheme = "purple", size = "md", ...props }, ref) => {
    return (
      <RadioGroupContext.Provider value={{ colorScheme, size }}>
        <RxRadioGroup.Root {...props} ref={ref} />
      </RadioGroupContext.Provider>
    );
  }
) as RadioGroupComponent;

const radioItemVariants = cva(
  [
    "bg-transparent",
    "rounded-full",
    "border",
    ["border-gray-500/75", "dark:border-gray-600/75"],
    "shadow"
  ],
  {
    variants: {
      size: {
        sm: "w-3 h-3",
        md: "w-4 h-4",
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
        purple: ["after:bg-purple-500"],
        teal: ["after:bg-teal-500", "after:dark:bg-teal-400"],
        green: ["after:bg-green-500", "after:dark:bg-green-400"],
        red: ["after:bg-red-500", "after:dark:bg-red-400"],
        yellow: ["after:bg-yellow-500", "after:dark:bg-yellow-400"],
        blue: ["after:bg-blue-500", "after:dark:bg-blue-400"],
        "b/w": ["after:bg-dark", "after:dark:bg-light"],
        gray: ["after:bg-gray-500", "after:dark:bg-gray-400"]
      },
      size: {
        sm: "after:w-1.5 after:h-1.5",
        md: "after:w-2 after:h-2",
        lg: "after:w-3 after:h-3"
      }
    },
    defaultVariants: {
      colorScheme: "purple",
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
