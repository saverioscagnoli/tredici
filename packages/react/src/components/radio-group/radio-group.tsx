import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef
} from "react";
import * as RxRadioGroup from "@radix-ui/react-radio-group";
import { c, cn } from "../../lib";
import { ColorScheme } from "../../types";
import { useTheme } from "../tredici";

const radioItem = c(
  "rounded-full border border-gray-600/20",
  {
    size: {
      sm: "w-3 h-3",
      md: "w-4 h-4",
      lg: "w-5 h-5"
    }
  },
  { size: "md" }
);

const indicator = c(
  "w-full h-full relative flex justify-center items-center after:content-[''] after:block after:rounded-full",
  {
    colorScheme: {
      amethyst: "dark:after:bg-violet-400 after:bg-violet-500",
      teal: "dark:after:bg-teal-400 after:bg-teal-500",
      green: "dark:after:bg-green-400 after:bg-green-500",
      crimson: "dark:after:bg-crimson-400 after:bg-crimson-500",
      yellow: "dark:after:bg-yellow-400 after:bg-yellow-500",
      blue: "dark:after:bg-blue-400 after:bg-blue-500",
      pink: "dark:after:bg-pink-400 after:bg-pink-500",
      gray: "dark:after:bg-fafafa after:bg-18181b"
    }
  }
);

interface RadioGroupComponent
  extends ForwardRefExoticComponent<
    RxRadioGroup.RadioGroupProps & RefAttributes<HTMLDivElement>
  > {
  Item: typeof RadioItem;
}

const RadioGroup = forwardRef<HTMLDivElement, RxRadioGroup.RadioGroupProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <RxRadioGroup.Root
        {...props}
        ref={ref}
        className={cn("flex flex-col gap-2", className)}
      >
        {children}
      </RxRadioGroup.Root>
    );
  }
) as RadioGroupComponent;

interface RadioItemProps extends RxRadioGroup.RadioGroupItemProps {
  colorScheme?: ColorScheme;
  size?: "sm" | "md" | "lg";
}

const RadioItem = forwardRef<HTMLButtonElement, RadioItemProps>(
  (
    { className, colorScheme = useTheme().defaultColorScheme, size, ...props },
    ref
  ) => {
    const indicatorSize = {
      sm: "after:w-1 after:h-1",
      md: "after:w-2 after:h-2",
      lg: "after:w-3 after:h-3"
    };

    return (
      <RxRadioGroup.Item
        {...props}
        ref={ref}
        className={radioItem({ className, size })}
      >
        <RxRadioGroup.Indicator
          className={cn(
            indicator({ colorScheme }),
            indicatorSize[size || "md"]
          )}
        />
      </RxRadioGroup.Item>
    );
  }
);

RadioGroup.Item = RadioItem;

export { RadioGroup };
