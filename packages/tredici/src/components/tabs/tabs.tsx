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

type TabsVariant = "solid" | "flushed";

type TabsContextValue = {
  variant: "solid" | "flushed";
  colorScheme: TabsColorScheme;
};

const TabsContext = createContext<TabsContextValue | null>(null);

const useTabs = () => {
  const ctx = useContext(TabsContext);

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
  variant?: TabsVariant;
  colorScheme?: TabsColorScheme;
};

const Tabs = forwardRef<
  HTMLDivElement,
  TabsProps & RefAttributes<HTMLDivElement>
>(({ className, variant = "solid", colorScheme = "plum", ...props }, ref) => {
  return (
    <TabsContext.Provider value={{ colorScheme, variant }}>
      <RxTabs.Root
        className={cn("data-[orientation='vertical']:flex", className)}
        {...props}
        ref={ref}
      />
    </TabsContext.Provider>
  );
}) as TabsComponent;

const TabsListVariant = cva(
  ["flex", "data-[orientation='vertical']:flex-col"],
  {
    variants: {
      variant: {
        solid: ["p-1", "border border-[--gray-7]", "rounded-md"],
        flushed: ["border-b border-b-[--gray-7]"]
      }
    }
  }
);

type TabsListProps = RxTabs.TabsListProps;

const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  ({ className, ...props }, ref) => {
    const { variant } = useTabs();
    return (
      <RxTabs.List
        className={TabsListVariant({ className, variant })}
        {...props}
        ref={ref}
      />
    );
  }
);

const tabsTriggerVariants = cva(["data-[state='active']:shadow"], {
  variants: {
    variant: {
      solid: ["data-[state='active']:shadow-md", "rounded"],
      flushed: [
        "data-[state='active']:bg-transparent",
        "data-[state='active']:border-b-[3px]",
        "data-[state='active']:text-[--slate-12]"
      ]
    },
    colorScheme: {
      plum: [],
      teal: [],
      grass: [],
      red: [],
      amber: [],
      blue: [],
      "b/w": [],
      gray: []
    }
  },
  compoundVariants: [
    {
      variant: "solid",
      colorScheme: "plum",
      className: [
        "data-[state='active']:bg-[--plum-9]",
        "data-[state='active']:text-[--slate-1]"
      ]
    },
    {
      variant: "solid",
      colorScheme: "teal",
      className: [
        "data-[state='active']:bg-[--teal-9]",
        "data-[state='active']:text-[--slate-1]"
      ]
    },

    {
      variant: "solid",
      colorScheme: "grass",
      className: [
        "data-[state='active']:bg-[--grass-9]",
        "data-[state='active']:text-[--slate-1]"
      ]
    },
    {
      variant: "solid",
      colorScheme: "red",
      className: [
        "data-[state='active']:bg-[--red-9]",
        "data-[state='active']:text-[--slate-1]"
      ]
    },
    {
      variant: "solid",
      colorScheme: "amber",
      className: [
        "data-[state='active']:bg-[--amber-9]",
        "data-[state='active']:text-[--slate-1]"
      ]
    },
    {
      variant: "solid",
      colorScheme: "blue",
      className: [
        "data-[state='active']:bg-[--blue-9]",
        "data-[state='active']:text-[--slate-1]"
      ]
    },
    {
      variant: "solid",
      colorScheme: "b/w",
      className: [
        "data-[state='active']:bg-[--slate-12]",
        "data-[state='active']:text-[--slate-1]"
      ]
    },
    {
      variant: "solid",
      colorScheme: "gray",
      className: [
        "data-[state='active']:bg-[--gray-6]",
        "data-[state='active']:text-[--slate-12]"
      ]
    },
    {
      variant: "flushed",
      colorScheme: "plum",
      className: "data-[state='active']:border-b-[--plum-9]"
    },
    {
      variant: "flushed",
      colorScheme: "teal",
      className: "data-[state='active']:border-b-[--teal-9]"
    },
    {
      variant: "flushed",
      colorScheme: "grass",
      className: "data-[state='active']:border-b-[--grass-9]"
    },
    {
      variant: "flushed",
      colorScheme: "red",
      className: "data-[state='active']:border-b-[--red-9]"
    },
    {
      variant: "flushed",
      colorScheme: "amber",
      className: "data-[state='active']:border-b-[--amber-9]"
    },
    {
      variant: "flushed",
      colorScheme: "blue",
      className: "data-[state='active']:border-b-[--blue-9]"
    },
    {
      variant: "flushed",
      colorScheme: "b/w",
      className: "data-[state='active']:border-b-[--slate-12]"
    },
    {
      variant: "flushed",
      colorScheme: "gray",
      className: "data-[state='active']:border-b-[--gray-6]"
    }
  ]
});

type TabsTriggerProps = RxTabs.TabsTriggerProps & {
  colorScheme?: TabsColorScheme;
};

const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  ({ className, colorScheme: defaultColorScheme, ...props }, ref) => {
    const { colorScheme, variant } = useTabs();

    return (
      <RxTabs.Trigger
        className={tabsTriggerVariants({
          className: cn("px-4", "font-semibold", className),
          colorScheme: defaultColorScheme ?? colorScheme,
          variant
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
export type {
  TabsColorScheme,
  TabsVariant,
  TabsProps,
  TabsListProps,
  TabsTriggerProps,
  TabsContentProps
};
