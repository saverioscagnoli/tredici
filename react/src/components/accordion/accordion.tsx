import React from "react";
import * as RxAccordion from "@radix-ui/react-accordion";
import { cn } from "~/lib/utils";
import { ChevronDownIcon } from "@radix-ui/react-icons";

import "@radix-ui/colors/gray.css";
import "@radix-ui/colors/gray-dark.css";
import "@radix-ui/colors/slate.css";
import "@radix-ui/colors/slate-dark.css";

import "./accordion.css";

type AccordionProps =
  | RxAccordion.AccordionSingleProps
  | RxAccordion.AccordionMultipleProps;

type AccordionComponent = React.FC<
  AccordionProps & { ref?: React.Ref<HTMLDivElement> }
> & {
  Item: typeof AccordionItem;
  Trigger: typeof AccordionTrigger;
  Content: typeof AccordionContent;
};

const Accordion: AccordionComponent = ({ className, ...props }) => {
  return (
    <RxAccordion.Root
      className={cn(
        "w-80",
        "bg-(--slate-1)",
        "border border-(--gray-6)",
        "rounded-lg overflow-hidden",
        className
      )}
      {...props}
    />
  );
};

export type { AccordionProps };

type AccordionItemProps = RxAccordion.AccordionItemProps & {
  ref?: React.Ref<HTMLDivElement>;
};

const AccordionItem: React.FC<AccordionItemProps> = ({
  className,
  ...props
}) => {
  return (
    <RxAccordion.Item
      className={cn(
        "w-full",
        "overflow-hidden",
        "border-b border-(--gray-6) last:border-b-0",
        "focus-within:relative focus-within:z-10",
        className
      )}
      {...props}
    />
  );
};

export type { AccordionItemProps };

type AccordionTriggerProps = RxAccordion.AccordionTriggerProps & {
  ref?: React.Ref<HTMLButtonElement>;
  icon?: React.ReactNode;
};

const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  className,
  children,
  icon,
  ...props
}) => {
  return (
    <RxAccordion.Header className="flex">
      <RxAccordion.Trigger
        className={cn(
          "group",
          "w-full h-11",
          "flex items-center justify-between gap-2",
          "px-4",
          "bg-(--slate-1) text-(--slate-12)",
          "text-sm font-medium leading-none",
          "cursor-pointer",
          "hover:bg-(--slate-2)",
          "transition-colors duration-150",
          "focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-(--slate-8)",
          className
        )}
        {...props}
      >
        <span className="flex items-center gap-2.5">
          {icon && <span className="text-(--slate-10) text-base">{icon}</span>}
          {children}
        </span>
        <ChevronDownIcon
          className={cn(
            "text-(--slate-10) shrink-0",
            "transition-transform duration-200 ease-in-out",
            "group-data-[state=open]:rotate-180"
          )}
          aria-hidden
        />
      </RxAccordion.Trigger>
    </RxAccordion.Header>
  );
};

export type { AccordionTriggerProps };

type AccordionContentProps = RxAccordion.AccordionContentProps & {
  ref?: React.Ref<HTMLDivElement>;
};

const AccordionContent: React.FC<AccordionContentProps> = ({
  className,
  ...props
}) => {
  return (
    <RxAccordion.Content
      className={cn(
        "overflow-hidden",
        "text-sm text",
        "accordion-content",
        className
      )}
    >
      <div className={cn("px-4 pb-4 pt-1", className)} {...props} />
    </RxAccordion.Content>
  );
};

Accordion.displayName = "Accordion";
AccordionItem.displayName = "AccordionItem";
AccordionTrigger.displayName = "AccordionTrigger";
AccordionContent.displayName = "AccordionContent";

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;

export { Accordion };
