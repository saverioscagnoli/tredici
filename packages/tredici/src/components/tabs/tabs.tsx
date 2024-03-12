import * as RxTabs from "@radix-ui/react-tabs";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import {
  ForwardRefExoticComponent,
  RefAttributes,
  createContext,
  forwardRef,
  useContext
} from "react";

import "@radix-ui/colors/plum.css";
import "@radix-ui/colors/plum-dark.css";

import "@radix-ui/colors/teal.css";
import "@radix-ui/colors/teal-dark.css";

import "@radix-ui/colors/grass.css";
import "@radix-ui/colors/grass-dark.css";

import "@radix-ui/colors/red.css";
import "@radix-ui/colors/red-dark.css";

import "@radix-ui/colors/amber.css";
import "@radix-ui/colors/amber-dark.css";

import "@radix-ui/colors/blue.css";
import "@radix-ui/colors/blue-dark.css";

import "@radix-ui/colors/gray.css";
import "@radix-ui/colors/gray-dark.css";

import "@radix-ui/colors/slate.css";
import "@radix-ui/colors/slate-dark.css";

type TabsColorScheme =
  | "plum"
  | "teal"
  | "grass"
  | "red"
  | "amber"
  | "blue"
  | "b/w"
  | "gray";

const ColorSchemeContext = createContext<TabsColorScheme | null>(null);

const useColorScheme = () => {
  const ctx = useContext(ColorSchemeContext);

  if (!ctx) {
    throw new Error(
      "Tabs compound components cannot be rendered outside the Tabs component"
    );
  }

  return ctx;
};

type TabsComponent = ForwardRefExoticComponent<
  TabsProps & RefAttributes<HTMLDivElement>
> & {
  List: typeof TabsList;
  Trigger: typeof TabsTrigger;
  Content: typeof TabsContent;
};

type TabsProps = RxTabs.TabsProps & {
  colorScheme?: TabsColorScheme;
};

const Tabs = forwardRef<
  HTMLDivElement,
  TabsProps & RefAttributes<HTMLDivElement>
>(({ className, colorScheme = "plum", ...props }, ref) => {
  return (
    <ColorSchemeContext.Provider value={colorScheme}>
      <RxTabs.Root
        className={cn("data-[orientation='vertical']:flex", className)}
        {...props}
        ref={ref}
      />
    </ColorSchemeContext.Provider>
  );
}) as TabsComponent;

type TabsListProps = RxTabs.TabsListProps;

const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxTabs.List
        className={cn(
          "flex",
          "p-1",
          "border border-[--gray-7]",
          "rounded-md",
          "data-[orientation='vertical']:flex-col",
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
);

const tabsTriggerVariants = cva(["data-[state='active']:shadow"], {
  variants: {
    colorScheme: {
      plum: [
        "data-[state='active']:bg-[--plum-9]",
        "data-[state='active']:text-[--slate-1]"
      ],
      teal: [
        "data-[state='active']:bg-[--teal-9]",
        "data-[state='active']:text-[--slate-1]"
      ],
      grass: [
        "data-[state='active']:bg-[--grass-9]",
        "data-[state='active']:text-[--slate-1]"
      ],
      red: [
        "data-[state='active']:bg-[--red-9]",
        "data-[state='active']:text-[--slate-1]"
      ],
      amber: [
        "data-[state='active']:bg-[--amber-9]",
        "data-[state='active']:text-[--slate-1]"
      ],
      blue: [
        "data-[state='active']:bg-[--blue-9]",
        "data-[state='active']:text-[--slate-1]"
      ],
      "b/w": [
        "data-[state='active']:bg-[--slate-12]",
        "data-[state='active']:text-[--slate-1]"
      ],
      gray: [
        "data-[state='active']:bg-[--gray-6]",
        "data-[state='active']:text-[--slate-12]"
      ]
    }
  }
});

type TabsTriggerProps = RxTabs.TabsTriggerProps & {
  colorScheme?: TabsColorScheme;
};

const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, colorScheme, ...props }, ref) => {
    return (
      <RxTabs.Trigger
        className={tabsTriggerVariants({
          className: cn(
            "px-4",
            "rounded",
            "font-semibold",
            "tabs-trigger",
            className
          ),
          colorScheme: colorScheme ?? useColorScheme()
        })}
        {...props}
        ref={ref}
      />
    );
  }
);

type TabsContentProps = RxTabs.TabsContentProps;

const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxTabs.Content
        className={cn(
          "data-[orientation='horizontal']:mt-2",
          "data-[orientation='vertical']:ml-2",
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
);

Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;
Tabs.Content = TabsContent;

Tabs.displayName = RxTabs.Root.displayName;

export { Tabs };
export type { TabsProps, TabsListProps, TabsTriggerProps, TabsContentProps };
