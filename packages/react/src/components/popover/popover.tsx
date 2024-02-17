import React, { ReactNode, forwardRef } from "react";
import * as RxPopover from "@radix-ui/react-popover";
import { cn } from "@lib";
import { Cross1Icon } from "@radix-ui/react-icons";

import "./popover.css";

interface PopoverComponent extends React.FC<RxPopover.PopoverProps> {
  Trigger: typeof RxPopover.PopoverTrigger;
  Content: typeof PopoverContent;
  Arrow: typeof PopoverArrow;
  Close: typeof RxPopover.PopoverClose;
}

type PopoverProps = RxPopover.PopoverProps;

const Popover = RxPopover.Popover as PopoverComponent;

type PopoverTriggerProps = RxPopover.PopoverTriggerProps;

interface PopoverContentProps extends RxPopover.PopoverContentProps {
  withArrow?: boolean | ReactNode;
}

const PopoverContent = forwardRef<HTMLDivElement, PopoverContentProps>(
  (
    { className, children, withArrow = true, sideOffset = 7, ...props },
    ref
  ) => {
    return (
      <RxPopover.Portal>
        <RxPopover.Content
          sideOffset={sideOffset}
          className={cn(
            "w-52 h-fit p-2 shadow-lg rounded-md",
            "bg-[#18181b] text-white",
            "dark:bg-white dark:text-black",
            "popover-content",
            className
          )}
          {...props}
          ref={ref}
        >
          {children}
          {withArrow === true ? <PopoverArrow /> : withArrow}
        </RxPopover.Content>
      </RxPopover.Portal>
    );
  }
);

type PopoverArrowProps = RxPopover.PopoverArrowProps;

const PopoverArrow = forwardRef<SVGSVGElement, PopoverArrowProps>(
  ({ className, width = 7, height = 3, ...props }, ref) => {
    return (
      <RxPopover.Arrow
        className={cn("fill-[#18181b] dark:fill-white", className)}
        width={width}
        height={height}
        {...props}
        ref={ref}
      />
    );
  }
);

type PopoverCloseProps = RxPopover.PopoverCloseProps;

const PopoverClose = forwardRef<HTMLButtonElement, PopoverCloseProps>(
  ({ children, className, ...props }, ref) => {
    if (children) {
      return (
        <RxPopover.PopoverClose
          children={children}
          className={className}
          {...props}
          ref={ref}
        />
      );
    } else {
      return (
        <RxPopover.PopoverClose
          className={cn("absolute top-2 right-2")}
          {...props}
          ref={ref}
        >
          <Cross1Icon width={13} height={13} />
        </RxPopover.PopoverClose>
      );
    }
  }
);

Popover.displayName = "Popover";
Popover.Trigger = RxPopover.PopoverTrigger;
Popover.Content = PopoverContent;
Popover.Arrow = PopoverArrow;
Popover.Close = PopoverClose;

export { Popover };
export type {
  PopoverProps,
  PopoverTriggerProps,
  PopoverContentProps,
  PopoverArrowProps,
  PopoverCloseProps
};
