import { cn } from "@/lib/utils";
import * as RxProgress from "@radix-ui/react-progress";
import { forwardRef } from "react";
import { cva } from "class-variance-authority";

import "./progress.css";

type ProgressColorScheme =
  | "purple"
  | "teal"
  | "green"
  | "red"
  | "yellow"
  | "b/w"
  | "gray";

const progressIndicatorVariants = cva(
  ["w-full h-full", "rounded-full", "progress-indicator"],
  {
    variants: {
      colorScheme: {
        purple: ["bg-purple-500", "dark:bg-purple-400"],
        teal: ["bg-teal-500", "dark:bg-teal-400"],
        green: ["bg-green-500", "dark:bg-green-400"],
        red: ["bg-red-500", "dark:bg-red-400"],
        yellow: ["bg-yellow-500", "dark:bg-yellow-400"],
        "b/w": ["bg-dark", "dark:bg-light"],
        gray: ["bg-gray-500", "dark:bg-gray-400"]
      }
    },
    defaultVariants: {
      colorScheme: "purple"
    }
  }
);

type ProgressProps = RxProgress.ProgressProps & {
  indefinite?: boolean;
  colorScheme?: ProgressColorScheme;
};

const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      className,
      value,
      indefinite,
      colorScheme = "purple",
      max = 100,
      ...props
    },
    ref
  ) => {
    value = value ?? 0;

    return (
      <RxProgress.Root
        className={cn(
          "h-1.5",
          "relative",
          ["bg-gray-500/20", "dark:bg-gray-400/40"],
          "overflow-hidden",
          "rounded-full",
          "progress",
          className
        )}
        value={value}
        max={max}
        {...props}
        ref={ref}
      >
        <RxProgress.Indicator
          className={progressIndicatorVariants({
            className: cn(indefinite && "indefinite", className),
            colorScheme
          })}
          style={{
            transform: `translateX(-${100 - (value / max) * 100}%`
          }}
        />
      </RxProgress.Root>
    );
  }
);

export { Progress };
export type { ProgressProps, ProgressColorScheme };
