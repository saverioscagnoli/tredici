import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef
} from "react";
import * as RxTabs from "@radix-ui/react-tabs";
import { c, cn } from "../../lib";
import { ColorScheme } from "../../types";
import { useTheme } from "../tredici";

export type TabsProps = RxTabs.TabsProps;

interface TabsComponent
  extends ForwardRefExoticComponent<TabsProps & RefAttributes<HTMLDivElement>> {
  List: typeof TabsList;
  Trigger: typeof TabsTrigger;
  Content: typeof TabsContent;
}

const tabsTrigger = c(
  "w-full h-7 px-12 whitespace-nowrap inline-flex justify-center items-center font-semibold rounded select-none cursor-pointer transition-colors disabled:cursor-not-allowed bg-transparent focus:outline-none",
  {
    colorScheme: {
      amethyst:
        "data-[state='active']:dark:bg-amethyst-400 data-[state='active']:bg-amethyst-500 dark:data-[state='active']:text-18181b data-[state='active']:text-fafafa",
      teal: "data-[state='active']:dark:bg-teal-400 data-[state='active']:bg-teal-500 dark:data-[state='active']:text-18181b data-[state='active']:text-fafafa",
      green:
        "data-[state='active']:dark:bg-green-400 data-[state='active']:bg-green-500 dark:data-[state='active']:text-18181b data-[state='active']:text-fafafa",
      crimson:
        "data-[state='active']:dark:bg-crimson-400 data-[state='active']:bg-crimson-500 dark:data-[state='active']:text-18181b data-[state='active']:text-fafafa",
      yellow:
        "data-[state='active']:dark:bg-yellow-400 data-[state='active']:bg-yellow-500 data-[state='active']:text-18181b",
      blue: "data-[state='active']:dark:bg-blue-400 data-[state='active']:bg-blue-500 data-[state='active']:text-fafafa",
      pink: "data-[state='active']:dark:bg-pink-400 data-[state='active']:bg-pink-500 dark:data-[state='active']:text-18181b data-[state='active']:text-fafafa",
      "b/w":
        "data-[state='active']:dark:bg-fafafa data-[state='active']:bg-18181b dark:data-[state='active']:text-18181b data-[state='active']:text-fafafa"
    }
  }
);

const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxTabs.Root ref={ref} {...props} className={cn("w-fit", className)} />
    );
  }
) as TabsComponent;

export type TabsListProps = RxTabs.TabsListProps;

const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxTabs.List
        ref={ref}
        {...props}
        className={cn(
          "h-10 px-2 flex justify-between items-center border border-gray-500/20 rounded-md",
          className
        )}
      />
    );
  }
);

export interface TabsTriggerProps extends RxTabs.TabsTriggerProps {
  /**
   * The color scheme of the tabs trigger.
   * @see ColorScheme
   * @default useTheme().defaultColorScheme
   */
  colorScheme?: ColorScheme;
}

const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  (
    { className, colorScheme = useTheme().defaultColorScheme, ...props },
    ref
  ) => {
    return (
      <RxTabs.Trigger
        ref={ref}
        {...props}
        className={tabsTrigger({ className, colorScheme })}
      />
    );
  }
);

export type TabsContentProps = RxTabs.TabsContentProps;

const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  (props, ref) => {
    return <RxTabs.Content ref={ref} {...props} />;
  }
);

Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;
Tabs.Content = TabsContent;

Tabs.displayName = "Tabs";

export { Tabs };
