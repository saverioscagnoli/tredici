import * as RxTooltip from "@radix-ui/react-tooltip";
import React from "react";
import { cn } from "~/lib/utils";

import "@radix-ui/colors/slate.css";
import "@radix-ui/colors/slate-dark.css";

import "@radix-ui/colors/plum.css";
import "@radix-ui/colors/plum-dark.css";

import "@radix-ui/colors/red.css";
import "@radix-ui/colors/red-dark.css";

import "@radix-ui/colors/blue.css";
import "@radix-ui/colors/blue-dark.css";

import "@radix-ui/colors/teal.css";
import "@radix-ui/colors/teal-dark.css";

import "@radix-ui/colors/cyan.css";
import "@radix-ui/colors/cyan-dark.css";

import "@radix-ui/colors/green.css";
import "@radix-ui/colors/green-dark.css";

import "@radix-ui/colors/amber.css";
import "@radix-ui/colors/amber-dark.css";

import "@radix-ui/colors/orange.css";
import "@radix-ui/colors/orange-dark.css";

import "@radix-ui/colors/gray.css";
import "@radix-ui/colors/gray-dark.css";

import "./tooltip.css";

type TooltipComponent = React.FC<TooltipProps> & {
  Trigger: typeof TooltipTrigger;
  Content: typeof TooltipContent;
  Arrow: typeof TooltipArrow;
};

type TooltipProps = RxTooltip.TooltipProps;

export type { TooltipProps };

const Tooltip: TooltipComponent = ({ delayDuration = 0, ...props }) => {
  return (
    <RxTooltip.Provider>
      <RxTooltip.Root delayDuration={delayDuration} {...props} />
    </RxTooltip.Provider>
  );
};

type TooltipTriggerProps = RxTooltip.TooltipTriggerProps;

export type { TooltipTriggerProps };

const TooltipTrigger = RxTooltip.Trigger;

type TooltipContentProps = RxTooltip.TooltipContentProps;

export type { TooltipContentProps };

const TooltipContent: React.FC<TooltipContentProps> = ({
  sideOffset = 5,
  className,
  ...props
}) => {
  return (
    <RxTooltip.Content
      className={cn(
        "bg-[var(--slate-12)] text-[var(--slate-1)]",
        "text-sm",
        "px-2",
        "py-1",
        "rounded-md",
        "shadow-md",
        "tooltip-content",
        className
      )}
      sideOffset={sideOffset}
      {...props}
    />
  );
};

type TooltipArrowProps = RxTooltip.TooltipArrowProps;

export type { TooltipArrowProps };

const TooltipArrow: React.FC<TooltipArrowProps> = ({
  width = 7,
  height = 3,
  className,
  ...props
}) => {
  return (
    <RxTooltip.Arrow
      width={width}
      height={height}
      className={cn("fill-[var(--slate-12)]", className)}
      {...props}
    />
  );
};

Tooltip.displayName = "Tooltip";
TooltipTrigger.displayName = "TooltipTrigger";
TooltipContent.displayName = "TooltipContent";
TooltipArrow.displayName = "TooltipArrow";

Tooltip.Trigger = TooltipTrigger;
Tooltip.Content = TooltipContent;
Tooltip.Arrow = TooltipArrow;

export { Tooltip };
