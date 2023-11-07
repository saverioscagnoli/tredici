import React, { forwardRef } from "react";
import * as RxPopover from "@radix-ui/react-popover";
import { cn } from "../../lib";

interface PopoverComponent extends React.FC<RxPopover.PopoverProps> {
  Trigger: typeof PopoverTrigger;
  Anchor: typeof PopoverAnchor;
  Body: typeof PopoverBody;
  Arrow: typeof PopoverArrow;
}

const Popover: PopoverComponent = ({ children, ...props }) => {
  return <RxPopover.Root {...props}>{children}</RxPopover.Root>;
};

const PopoverTrigger = forwardRef<
  HTMLButtonElement,
  RxPopover.PopoverTriggerProps
>(({ children, ...props }, ref) => {
  return (
    <RxPopover.Trigger {...props} ref={ref}>
      {children}
    </RxPopover.Trigger>
  );
});

const PopoverAnchor = forwardRef<HTMLDivElement, RxPopover.PopoverAnchorProps>(
  ({ children, ...props }, ref) => {
    return (
      <RxPopover.Anchor {...props} ref={ref}>
        {children}
      </RxPopover.Anchor>
    );
  }
);

const PopoverBody = forwardRef<HTMLDivElement, RxPopover.PopoverContentProps>(
  ({ children, className, sideOffset = 7, ...props }, ref) => {
    return (
      <RxPopover.Portal>
        <RxPopover.Content
          {...props}
          ref={ref}
          sideOffset={sideOffset}
          className={cn(
            "w-52 h-fit p-2 shadow rounded-md dark:bg-fafafa bg-18181b dark:text-18181b text-fafafa",
            className
          )}
        >
          {children}
        </RxPopover.Content>
      </RxPopover.Portal>
    );
  }
);

const PopoverArrow = forwardRef<SVGSVGElement, RxPopover.PopoverArrowProps>(
  ({ className, width = 7, height = 3, ...props }, ref) => {
    return (
      <RxPopover.Arrow
        {...props}
        ref={ref}
        width={width}
        height={height}
        className={cn("dark:fill-fafafa fill-18181b", className)}
      />
    );
  }
);

Popover.Trigger = PopoverTrigger;
Popover.Anchor = PopoverAnchor;
Popover.Body = PopoverBody;
Popover.Arrow = PopoverArrow;

export { Popover };
