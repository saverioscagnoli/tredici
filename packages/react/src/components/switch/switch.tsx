import React, { forwardRef } from "react";
import * as RxSwitch from "@radix-ui/react-switch";
import { c, cn } from "../../lib";
import { ColorScheme } from "../../types";
import { useTheme } from "../tredici";

const htmlSwitch = c(
  "rounded-full cursor-pointer inline-flex items-center transition-colors",
  {
    colorScheme: {
      amethyst:
        "dark:data-[state='checked']:bg-amethyst-400 data-[state='checked']:bg-amethyst-500 data-[state='unchecked']:bg-gray-600/20",
      teal: "dark:data-[state='checked']:bg-teal-400 data-[state='checked']:bg-teal-500 data-[state='unchecked']:bg-gray-600/20",
      green:
        "dark:data-[state='checked']:bg-green-400 data-[state='checked']:bg-green-500 data-[state='unchecked']:bg-gray-600/20",
      crimson:
        "dark:data-[state='checked']:bg-crimson-400 data-[state='checked']:bg-crimson-500 data-[state='unchecked']:bg-gray-600/20",
      yellow:
        "dark:data-[state='checked']:bg-yellow-400 data-[state='checked']:bg-yellow-500 data-[state='unchecked']:bg-gray-600/20",
      blue: "dark:data-[state='checked']:bg-blue-400 data-[state='checked']:bg-blue-500 data-[state='unchecked']:bg-gray-600/20",
      pink: "dark:data-[state='checked']:bg-pink-400 data-[state='checked']:bg-pink-500 data-[state='unchecked']:bg-gray-600/20",
      "b/w":
        "dark:data-[state='checked']:bg-fafafa data-[state='checked']:bg-18181b data-[state='unchecked']:bg-gray-600/20"
    },
    size: {
      sm: "w-7 h-4 p-0.5",
      md: "w-10 h-6 p-1",
      lg: "w-14 h-8 p-1.5"
    }
  },
  { size: "md" }
);

const thumb = c(
  "block bg-white rounded-full transition-transform",
  {
    size: {
      sm: "w-3 h-3 data-[state='checked']:translate-x-3",
      md: "w-4 h-4 data-[state='checked']:translate-x-4",
      lg: "w-6 h-6 data-[state='checked']:translate-x-5"
    }
  },
  { size: "md" }
);

export interface SwitchProps extends RxSwitch.SwitchProps {
  /**
   * The color scheme of the switch.
   * @see ColorScheme
   * @default useTheme().defaultColorScheme
   */
  colorScheme?: ColorScheme;

  /**
   * The size of the switch.
   * @default "md"
   */
  size?: "sm" | "md" | "lg";
}

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      children,
      className,
      colorScheme = useTheme().defaultColorScheme,
      size,
      ...props
    },
    ref
  ) => {
    return (
      <RxSwitch.Root
        {...props}
        ref={ref}
        className={htmlSwitch({ className, colorScheme, size })}
      >
        <RxSwitch.Thumb
          className={cn(
            thumb({ size }),
            colorScheme === "b/w" && "dark:data-[state='checked']:bg-18181b",
            className
          )}
        />
      </RxSwitch.Root>
    );
  }
);

export { Switch };
