import React, {
  forwardRef,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes
} from "react";
import * as RxAccordion from "@radix-ui/react-accordion";
import { c, cn } from "../../lib";
import { ArrowDownIcon } from "@radix-ui/react-icons";
import "./accordion.css";
import { ColorScheme } from "../../types";
import { useTheme } from "../tredici";

type AccordionProps =
  | RxAccordion.AccordionSingleProps
  | RxAccordion.AccordionMultipleProps;

interface AccordionComponent
  extends ForwardRefExoticComponent<
    AccordionProps & RefAttributes<HTMLDivElement>
  > {
  Item: typeof AccordionItem;
  Trigger: typeof AccordionTrigger;
  Content: typeof AccordionContent;
}

const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <RxAccordion.Root
        {...props}
        ref={ref}
        className={cn(
          "w-40 dark:bg-18181b bg-fafafa border border-gray-600/20 shadow rounded-md",
          className
        )}
      >
        {children}
      </RxAccordion.Root>
    );
  }
) as AccordionComponent;

const accordionItem = c(
  "w-full overflow-hidden break-words focus-within:z-10",
  {
    colorScheme: {
      amethyst:
        "dark:focus-within:shadow-[0_0_0_1.5px_theme(colors.amethyst.400)] focus-within:shadow-[0_0_0_1.5px_theme(colors.amethyst.500)]",
      teal: "dark:focus-within:shadow-[0_0_0_1.5px_theme(colors.teal.400)] focus-within:shadow-[0_0_0_1.5px_theme(colors.teal.500)]",
      green:
        "dark:focus-within:shadow-[0_0_0_1.5px_theme(colors.green.400)] focus-within:shadow-[0_0_0_1.5px_theme(colors.green.500)]",
      crimson:
        "dark:focus-within:shadow-[0_0_0_1.5px_theme(colors.crimson.400)] focus-within:shadow-[0_0_0_1.5px_theme(colors.crimson.500)]",
      starship:
        "dark:focus-within:shadow-[0_0_0_1.5px_theme(colors.starship.400)] focus-within:shadow-[0_0_0_1.5px_theme(colors.starship.500)]",
      blue: "dark:focus-within:shadow-[0_0_0_1.5px_theme(colors.blue.400)] focus-within:shadow-[0_0_0_1.5px_theme(colors.blue.500)]",
      pink: "dark:focus-within:shadow-[0_0_0_1.5px_theme(colors.pink.400)] focus-within:shadow-[0_0_0_1.5px_theme(colors.pink.500)]",
      gray: "dark:focus-within:shadow-[0_0_0_1.5px_theme(colors.fafafa)] focus-within:shadow-[0_0_0_1.5px_theme(colors.18181b)]"
    }
  }
);

interface AccordionItemProps extends RxAccordion.AccordionItemProps {
  colorScheme?: ColorScheme;
}

const AccordionItem = forwardRef<HTMLDivElement, AccordionItemProps>(
  (
    {
      children,
      className,
      colorScheme = useTheme().defaultColorScheme,
      ...props
    },
    ref
  ) => {
    return (
      <RxAccordion.Item
        {...props}
        ref={ref}
        className={cn(
          accordionItem({ className, colorScheme }),
          "accordion-13-item"
        )}
      >
        {children}
      </RxAccordion.Item>
    );
  }
);

interface AccordionTriggerProps extends RxAccordion.AccordionTriggerProps {
  icon?: ReactNode;
}

const AccordionTrigger = forwardRef<HTMLButtonElement, AccordionTriggerProps>(
  ({ children, className, icon = <ArrowDownIcon />, ...props }, ref) => {
    return (
      <RxAccordion.Trigger
        {...props}
        ref={ref}
        className={cn(
          "w-full flex flex-1 justify-between items-center p-2 border-b border-b-gray-600/20 focus:outline-none",
          "accordion-13-trigger",

          className
        )}
      >
        {children}
        <span className="accordion-13-icon">{icon}</span>
      </RxAccordion.Trigger>
    );
  }
);

const AccordionContent = forwardRef<
  HTMLDivElement,
  RxAccordion.AccordionContentProps
>(({ children, className, ...props }, ref) => {
  return (
    <RxAccordion.Content
      {...props}
      ref={ref}
      className={cn(
        "accordion-13-content",
        "border-b border-b-gray-600/20",
        className
      )}
    >
      <div className="p-2">{children}</div>
    </RxAccordion.Content>
  );
});

Accordion.Item = AccordionItem;
Accordion.Trigger = AccordionTrigger;
Accordion.Content = AccordionContent;

export { Accordion };
