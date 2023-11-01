import React, { forwardRef } from "react";
import * as RxTooltip from "@radix-ui/react-tooltip";
import { cn } from "@lib/utils";

interface TooltipComponent
  extends React.FC<RxTooltip.TooltipProps & RxTooltip.TooltipProviderProps> {
  Trigger: typeof TooltipTrigger;
  Body: typeof TooltipBody;
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

interface TooltipBodyProps extends RxTooltip.TooltipContentProps {
  hasArrow?: boolean;
}

const TooltipBody = forwardRef<HTMLDivElement, TooltipBodyProps>(
  ({ children, className, sideOffset = 7, hasArrow, ...props }, ref) => {
    return (
      <RxTooltip.Content
        {...props}
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          "px-4 py-2 rounded-md shadow border dark:border-gray-tr-2-dark border-gray-tr-2-light",
          className
        )}
      >
        {hasArrow && <RxTooltip.Arrow className="dark:fill-white fill-black" />}
        {children}
      </RxTooltip.Content>
    );
  }
);

Tooltip.Trigger = TooltipTrigger;
Tooltip.Body = TooltipBody;

export { Tooltip };
