import * as RxPopover from "@radix-ui/react-popover";

import "./popover.css";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

type PopoverComponent = React.FC<RxPopover.PopoverProps> & {
  Trigger: typeof PopoverTrigger;
  Content: typeof PopoverContent;
  Anchor: typeof PopoverAnchor;
  Arrow: typeof PopoverArrow;
};

type PopoverProps = RxPopover.PopoverProps;

const Popover = RxPopover.Popover as PopoverComponent;

type PopoverTriggerProps = RxPopover.PopoverTriggerProps;

const PopoverTrigger = RxPopover.PopoverTrigger;

type PopoverContentProps = RxPopover.PopoverContentProps;

const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(
  ({ className, sideOffset = 4, ...props }, ref) => {
    return (
      <RxPopover.Portal>
        <RxPopover.Content
          sideOffset={sideOffset}
          className={cn(
            "w-fit h-fit",
            "p-2",
            "border border-gray-500/75",
            "shadow-lg rounded",
            ["bg-light text-dark", "dark:bg-dark dark:text-light"],
            "popover-content",
            className
          )}
          {...props}
          ref={ref}
        />
      </RxPopover.Portal>
    );
  }
);

type PopoverAnchorProps = RxPopover.PopoverAnchorProps;

const PopoverAnchor = RxPopover.PopoverAnchor;

type PopoverArrowProps = RxPopover.PopoverArrowProps;

const PopoverArrow = forwardRef<SVGSVGElement, PopoverArrowProps>(
  ({ width = 7, height = 4, className, ...props }, ref) => {
    return (
      <RxPopover.Arrow
        ref={ref}
        width={width}
        height={height}
        className={cn("fill-gray-500/75", className)}
        {...props}
      />
    );
  }
);

Popover.Trigger = PopoverTrigger;
Popover.Content = PopoverContent;
Popover.Anchor = PopoverAnchor;
Popover.Arrow = PopoverArrow;

Popover.displayName = RxPopover.Root.displayName;

export { Popover };
export type {
  PopoverProps,
  PopoverTriggerProps,
  PopoverContentProps,
  PopoverAnchorProps,
  PopoverArrowProps
};
