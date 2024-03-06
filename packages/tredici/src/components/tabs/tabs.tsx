import { cn } from "@/lib/utils";
import * as RxTabs from "@radix-ui/react-tabs";
import { cva } from "class-variance-authority";
import {
  ForwardRefExoticComponent,
  RefAttributes,
  createContext,
  forwardRef,
  useContext
} from "react";

type TabsColorScheme =
  | "purple"
  | "teal"
  | "green"
  | "red"
  | "yellow"
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
>(({ className, colorScheme = "purple", ...props }, ref) => {
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
          "border border-gray-500/75",
          "rounded-md",
          ["bg-gray-500/5", "dark:bg-gray-400/5"],
          "data-[orientation='vertical']:flex-col",
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
);

const tabsTriggerVariants = cva([], {
  variants: {
    colorScheme: {
      purple: [
        "data-[state='active']:bg-purple-500",
        "data-[state='active']:dark:bg-purple-400",
        "data-[state='active']:text-white",
        "data-[state='active']:dark:text-black"
      ],
      teal: [
        "data-[state='active']:bg-teal-500",
        "data-[state='active']:dark:bg-teal-400",
        "data-[state='active']:text-white",
        "data-[state='active']:dark:text-black"
      ],
      green: [
        "data-[state='active']:bg-green-500",
        "data-[state='active']:dark:bg-green-400",
        "data-[state='active']:text-white",
        "data-[state='active']:dark:text-black"
      ],
      red: [
        "data-[state='active']:bg-red-500",
        "data-[state='active']:dark:bg-red-400",
        "data-[state='active']:text-white",
        "data-[state='active']:dark:text-black"
      ],
      yellow: [
        "data-[state='active']:bg-yellow-500",
        "data-[state='active']:dark:bg-yellow-400",
        "data-[state='active']:text-white",
        "data-[state='active']:dark:text-black"
      ],
      blue: [
        "data-[state='active']:bg-blue-500",
        "data-[state='active']:dark:bg-blue-400",
        "data-[state='active']:text-white",
        "data-[state='active']:dark:text-black"
      ],
      "b/w": [
        "data-[state='active']:bg-dark",
        "data-[state='active']:dark:bg-light",
        "data-[state='active']:text-white",
        "data-[state='active']:dark:text-black"
      ],
      gray: [
        "data-[state='active']:bg-gray-400/25",
        "data-[state='active']:dark:bg-gray-500/40"
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
