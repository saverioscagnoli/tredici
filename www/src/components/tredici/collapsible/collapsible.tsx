import * as RxCollapsible from "@radix-ui/react-collapsible";
import { ForwardRefExoticComponent, RefAttributes, forwardRef } from "react";
import { cn } from "@lib";

import "./collapsible.css";

type CollapsibleComponent = ForwardRefExoticComponent<
  CollapsibleProps & RefAttributes<HTMLDivElement>
> & {
  Trigger: typeof CollapsibleTrigger;
  Content: typeof CollapsibleContent;
};

type CollapsibleProps = RxCollapsible.CollapsibleProps;

const Collapsible = forwardRef<HTMLDivElement, CollapsibleProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxCollapsible.Root
        className={cn("relative", className)}
        {...props}
        ref={ref}
      />
    );
  }
) as CollapsibleComponent;

type CollapsibleTriggerProps = RxCollapsible.CollapsibleTriggerProps;

const CollapsibleTrigger = RxCollapsible.Trigger;

type CollapsibleContentProps = RxCollapsible.CollapsibleContentProps & {
  withTransition?: boolean;
};

const CollapsibleContent = forwardRef<HTMLDivElement, CollapsibleContentProps>(
  ({ className, withTransition = true, ...props }, ref) => {
    return (
      <RxCollapsible.Content
        className={cn(
          "overflow-hidden",
          withTransition && "collapsible-content",
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
);

Collapsible.Trigger = CollapsibleTrigger;
Collapsible.Content = CollapsibleContent;

Collapsible.displayName = RxCollapsible.Root.displayName;

export { Collapsible };
export type {
  CollapsibleProps,
  CollapsibleTriggerProps,
  CollapsibleContentProps
};
