import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef
} from "react";
import * as RxCollapsible from "@radix-ui/react-collapsible";
import { cn } from "../../lib";
import "./collapsible.css";

interface CollapsibleComponent
  extends ForwardRefExoticComponent<
    CollapsibleProps & RefAttributes<HTMLDivElement>
  > {
  Trigger: typeof CollapsibleTrigger;
  Content: typeof CollapsibleContent;
}

export type CollapsibleProps = RxCollapsible.CollapsibleProps;

const Collapsible = forwardRef<HTMLDivElement, CollapsibleProps>(
  (props, ref) => {
    return <RxCollapsible.Root {...props} ref={ref} />;
  }
) as CollapsibleComponent;

export type CollapsibleTriggerProps = RxCollapsible.CollapsibleTriggerProps;

const CollapsibleTrigger = forwardRef<
  HTMLButtonElement,
  CollapsibleTriggerProps
>((props, ref) => {
  return <RxCollapsible.Trigger {...props} ref={ref} />;
});

export type CollapsibleContentProps = RxCollapsible.CollapsibleContentProps;

const CollapsibleContent = forwardRef<HTMLDivElement, CollapsibleContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxCollapsible.Content
        {...props}
        ref={ref}
        className={cn("overflow-hidden", "collapsible-13-content", className)}
      />
    );
  }
);

Collapsible.Trigger = CollapsibleTrigger;
Collapsible.Content = CollapsibleContent;

export { Collapsible };
