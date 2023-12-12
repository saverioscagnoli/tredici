import React, { forwardRef } from "react";
import * as RxPopover from "@radix-ui/react-popover";
import { cn } from "../../lib";

export type PopoverProps = RxPopover.PopoverProps;

interface PopoverComponent extends React.FC<PopoverProps> {
  Trigger: typeof PopoverTrigger;
  Anchor: typeof PopoverAnchor;
  Content: typeof PopoverContent;
  Arrow: typeof PopoverArrow;
}

const Popover: PopoverComponent = props => {
  return <RxPopover.Root {...props} />;
};

export type PopoverTriggerProps = RxPopover.PopoverTriggerProps;

const PopoverTrigger = forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  (props, ref) => {
    return <RxPopover.Trigger {...props} ref={ref} />;
  }
);

export type PopoverAnchorProps = RxPopover.PopoverAnchorProps;

const PopoverAnchor = forwardRef<HTMLDivElement, PopoverAnchorProps>(
  (props, ref) => {
    return <RxPopover.Anchor {...props} ref={ref} />;
  }
);

export type PopoverContentProps = RxPopover.PopoverContentProps;

const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(
  ({ className, sideOffset = 7, ...props }, ref) => {
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
        />
      </RxPopover.Portal>
    );
  }
);

export type PopoverArrowProps = RxPopover.PopoverArrowProps;

const PopoverArrow = forwardRef<SVGSVGElement, PopoverArrowProps>(
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
Popover.Content = PopoverContent;
Popover.Arrow = PopoverArrow;

export { Popover };
