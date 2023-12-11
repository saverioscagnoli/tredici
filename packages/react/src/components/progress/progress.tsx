import React, { forwardRef } from "react";
import * as RxProgress from "@radix-ui/react-progress";
import { c, cn } from "../../lib";
import "./progress.css";
import { ColorScheme } from "../../types";
import { useTheme } from "../tredici";

const fill = c("w-full h-full rounded-full transition-all duration-150", {
  colorScheme: {
    amethyst: "dark:bg-amethyst-400 bg-amethyst-500",
    teal: "dark:bg-teal-400 bg-teal-500",
    green: "dark:bg-green-400 bg-green-500",
    crimson: "dark:bg-crimson-400 bg-crimson-500",
    yellow: "dark:bg-yellow-400 bg-yellow-500",
    blue: "dark:bg-blue-400 bg-blue-500",
    pink: "dark:bg-pink-400 bg-pink-500",
    gray: "dark:bg-fafafa bg-18181b"
  }
});

interface ProgressProps extends RxProgress.ProgressProps {
  indeterminate?: boolean;
  colorScheme?: ColorScheme;
}

const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      className,
      value = 0,
      max = 100,
      colorScheme = useTheme().defaultColorScheme,
      indeterminate,
      ...props
    },
    ref
  ) => {
    if (indeterminate) {
      value = 50;
    } else {
      value = (value! / max) * 100;
    }

    return (
      <RxProgress.Root
        {...props}
        value={value}
        max={max}
        ref={ref}
        className={cn(
          "w-48 h-1.5 relative overflow-hidden dark:bg-gray-300/20 bg-gray-600/20 rounded-full",
          className
        )}
      >
        <RxProgress.Indicator
          style={{ width: `${value}%` }}
          className={cn(
            fill({ className, colorScheme }),
            indeterminate && "progress-13-indicator loading"
          )}
        />
      </RxProgress.Root>
    );
  }
);

export { Progress };
