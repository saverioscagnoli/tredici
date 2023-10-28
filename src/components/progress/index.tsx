import { forwardRef } from "react";
import * as RxProgress from "@radix-ui/react-progress";
import { cn } from "@lib/utils";
import "./progress.css";

interface ProgressProps extends RxProgress.ProgressProps {
  indeterminate?: boolean;
}

const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, value = 0, max = 100, indeterminate, ...props }, ref) => {
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
          "w-48 h-2 relative overflow-hidden dark:bg-gray-tr-3-dark bg-gray-tr-3-light rounded-full",
          className
        )}
      >
        <RxProgress.Indicator
          style={{ width: `${value}%` }}
          className={cn(
            "w-full h-full dark:bg-violet-dark bg-violet-light rounded-full transition-all duration-300",
            indeterminate && "progress-13-indicator loading"
          )}
        />
      </RxProgress.Root>
    );
  }
);

export { Progress };
