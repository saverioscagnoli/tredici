import React, { forwardRef } from "react";
import * as RxTooltip from "@radix-ui/react-tooltip";
import { cn } from "../../lib";

export interface TooltipProps extends RxTooltip.TooltipProps {
  /**
   * The content of the tooltip.
   */
  content?: string;

  /**
   * The side distance between the tooltip and the trigger.
   */
  sideOffset?: number;

  /**
   * Whether to show the arrow of the tooltip.
   * @default true
   */
  withArrow?: boolean;

  /**
   * The side of the tooltip.
   * @default "top"
   */
  side?: "top" | "right" | "bottom" | "left";
}

const Tooltip: React.FC<TooltipProps & RxTooltip.TooltipProviderProps> = ({
  children,
  delayDuration = 0,
  disableHoverableContent,
  skipDelayDuration,
  content,
  sideOffset = 3,
  withArrow = true,
  side = "top",
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
        <RxTooltip.Trigger asChild>{children}</RxTooltip.Trigger>
        <RxTooltip.Content
          side={side}
          sideOffset={sideOffset}
          className="py-1 px-2 rounded-md shadow text-sm font-semibold dark:bg-fafafa bg-18181b dark:text-18181b text-fafafa"
        >
          {content}
          {withArrow && (
            <RxTooltip.Arrow
              width={7}
              height={3}
              className="dark:fill-fafafa fill-18181b"
            />
          )}
        </RxTooltip.Content>
      </RxTooltip.Root>
    </RxTooltip.Provider>
  );
};

export { Tooltip };
