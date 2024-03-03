import * as RxPopover from "@radix-ui/react-popover";

import "./popover.css";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { Cross1Icon } from "@radix-ui/react-icons";

type PopoverComponent = React.FC<RxPopover.PopoverProps> & {
  Trigger: typeof PopoverTrigger;
  Content: typeof PopoverContent;
  Close: typeof PopoverClose;
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
            "h-fit",
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

type PopoverCloseProps = RxPopover.PopoverCloseProps;

const PopoverClose = forwardRef<HTMLButtonElement, PopoverCloseProps>(
  ({ children, className, ...props }, ref) => {
    if (!children) {
      return (
        <RxPopover.Close
          className={cn("absolute top-2 right-2", "p-1", className)}
          {...props}
          ref={ref}
        >
          <Cross1Icon
            className={cn([
              ["text-gray-500", "hover:text-gray-950"],
              ["dark:text-gray-400", "dark:hover:text-gray-300"]
            ])}
          />
        </RxPopover.Close>
      );
    } else {
      return (
        <RxPopover.Close
          children={children}
          className={className}
          {...props}
          ref={ref}
        />
      );
    }
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
Popover.Close = PopoverClose;
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
