import { cn } from "@lib";
import * as RxTooltip from "@radix-ui/react-tooltip";
import React, { CSSProperties, ReactNode } from "react";

import "./tooltip.css";

type TooltipSide = "top" | "right" | "bottom" | "left";

interface TooltipProps extends RxTooltip.TooltipProps {
  className?: string;
  content?: string | ReactNode;
  withArrow?: boolean | ReactNode;
  asChild?: boolean;
  side?: TooltipSide;
  sideOffset?: number;
  style?: CSSProperties;
}

interface TooltipComponent extends React.FC<TooltipProps> {
  Arrow: typeof TooltipArrow;
}

const Tooltip: TooltipComponent = ({
  content,
  withArrow = true,
  asChild,
  side,
  sideOffset = 2,
  style,
  className,
  delayDuration = 0,
  defaultOpen,
  children,
  ...props
}) => {
  return (
    <RxTooltip.Provider delayDuration={delayDuration} {...props}>
      <RxTooltip.Root defaultOpen={defaultOpen}>
        <RxTooltip.Trigger asChild={asChild}>{children}</RxTooltip.Trigger>
        <RxTooltip.Portal>
          <RxTooltip.Content
            side={side}
            sideOffset={sideOffset}
            style={style}
            className={cn(
              "py-1 px-2 rounded-lg shadow font-semibold text-sm",
              "bg-black text-white",
              "dark:bg-white dark:text-black",
              "tooltip-content",
              className
            )}
          >
            {content}
            {withArrow === true ? <TooltipArrow /> : withArrow}
          </RxTooltip.Content>
        </RxTooltip.Portal>
      </RxTooltip.Root>
    </RxTooltip.Provider>
  );
};

const TooltipArrow: React.FC<RxTooltip.TooltipArrowProps> = ({
  width = 7,
  height = 3,
  className,
  ...props
}) => {
  return (
    <RxTooltip.Arrow
      width={width}
      height={height}
      className={cn("fill-black", "dark:fill-white", className)}
      {...props}
    />
  );
};

Tooltip.displayName = "Tooltip";
Tooltip.Arrow = TooltipArrow;

export { Tooltip };
export type { TooltipProps, TooltipSide };
