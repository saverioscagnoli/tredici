import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef
} from "react";
import * as RxCollapsible from "@radix-ui/react-collapsible";
import { cn } from "../../lib";
import "./collapsible.css";
import { Button, ButtonComponent, ButtonProps } from "../button";

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

const CollapsibleTrigger = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <RxCollapsible.Trigger asChild>
        <Button {...props} ref={ref} />
      </RxCollapsible.Trigger>
    );
  }
) as ButtonComponent;

CollapsibleTrigger.Icon = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <RxCollapsible.Trigger asChild>
        <Button.Icon {...props} ref={ref} />
      </RxCollapsible.Trigger>
    );
  }
);

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
