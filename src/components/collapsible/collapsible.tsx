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
    RxCollapsible.CollapsibleProps & RefAttributes<HTMLDivElement>
  > {
  Trigger: typeof CollapsibleTrigger;
  Body: typeof CollapsibleBody;
}

const Collapsible = forwardRef<HTMLDivElement, RxCollapsible.CollapsibleProps>(
  ({ children, ...props }, ref) => {
    return (
      <RxCollapsible.Root {...props} ref={ref}>
        {children}
      </RxCollapsible.Root>
    );
  }
) as CollapsibleComponent;

const CollapsibleTrigger = forwardRef<
  HTMLButtonElement,
  RxCollapsible.CollapsibleTriggerProps
>(({ children, ...props }, ref) => {
  return (
    <RxCollapsible.Trigger {...props} ref={ref}>
      {children}
    </RxCollapsible.Trigger>
  );
});

const CollapsibleBody = forwardRef<
  HTMLDivElement,
  RxCollapsible.CollapsibleContentProps
>(({ children, className, ...props }, ref) => {
  return (
    <RxCollapsible.Content
      {...props}
      ref={ref}
      className={cn("overflow-hidden", "collapsible-13-body", className)}
    >
      {children}
    </RxCollapsible.Content>
  );
});

Collapsible.Trigger = CollapsibleTrigger;
Collapsible.Body = CollapsibleBody;

export { Collapsible };
