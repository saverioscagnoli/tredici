import React, { forwardRef } from "react";
import * as RxTooltip from "@radix-ui/react-tooltip";
import { cn } from "../../lib";

interface TooltipComponent
  extends React.FC<RxTooltip.TooltipProps & RxTooltip.TooltipProviderProps> {
  Trigger: typeof TooltipTrigger;
  Body: typeof TooltipBody;
  Arrow: typeof TooltipArrow;
}

const Tooltip: TooltipComponent = ({
  children,
  delayDuration = 0,
  disableHoverableContent,
  skipDelayDuration,
  ...props
}) => {
  return (
    <RxTooltip.Provider
      delayDuration={delayDuration}
      disableHoverableContent={disableHoverableContent}
      skipDelayDuration={skipDelayDuration}
    >
      <RxTooltip.Root
        delayDuration={delayDuration}
        disableHoverableContent={disableHoverableContent}
        {...props}
      >
        {children}
      </RxTooltip.Root>
    </RxTooltip.Provider>
  );
};

const TooltipTrigger = forwardRef<
  HTMLButtonElement,
  RxTooltip.TooltipTriggerProps
>(({ children, asChild = true, ...props }, ref) => {
  return (
    <RxTooltip.Trigger {...props} ref={ref} asChild={asChild}>
      {children}
    </RxTooltip.Trigger>
  );
});

const TooltipBody = forwardRef<HTMLDivElement, RxTooltip.TooltipContentProps>(
  ({ children, className, sideOffset = 3, ...props }, ref) => {
    return (
      <RxTooltip.Content
        {...props}
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          "py-1 px-2 rounded-md shadow text-sm font-semibold dark:bg-fafafa bg-18181b dark:text-18181b text-fafafa",
          className
        )}
      >
        {children}
      </RxTooltip.Content>
    );
  }
);

const TooltipArrow = forwardRef<SVGSVGElement, RxTooltip.TooltipArrowProps>(
  ({ className, width = 7, height = 3, ...props }, ref) => {
    return (
      <RxTooltip.Arrow
        {...props}
        ref={ref}
        width={width}
        height={height}
        className={cn("dark:fill-fafafa fill-18181b", className)}
      />
    );
  }
);

Tooltip.Trigger = TooltipTrigger;
Tooltip.Body = TooltipBody;
Tooltip.Arrow = TooltipArrow;

export { Tooltip };
