import { cn } from "@/lib/utils";
import * as RxScrollArea from "@radix-ui/react-scroll-area";
import { cva } from "class-variance-authority";
import { ForwardRefExoticComponent, RefAttributes, forwardRef } from "react";

type ScrollAreaScrollbarColorScheme =
  | "purple"
  | "teal"
  | "green"
  | "red"
  | "yellow"
  | "blue"
  | "b/w"
  | "gray";

type ScrollAreaComponent = ForwardRefExoticComponent<
  ScrollAreaProps & RefAttributes<HTMLDivElement>
> & {
  Scrollbar: typeof ScrollAreaScrollbar;
  Corner: typeof ScrollAreaCorner;
};

type ScrollAreaProps = RxScrollArea.ScrollAreaProps;

const ScrollArea = forwardRef<HTMLDivElement, ScrollAreaProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <RxScrollArea.Root
        className={cn("overflow-hidden", className)}
        {...props}
        ref={ref}
      >
        <RxScrollArea.Viewport
          className={cn("w-full h-full", "rounded-[inherit]")}
          children={children}
        />
      </RxScrollArea.Root>
    );
  }
) as ScrollAreaComponent;

const scrollAreaThumbVariants = cva(
  [
    "flex-1",
    "rounded-xl",
    "relative",
    [
      "before:w-full after:h-full",
      "before:min-w-[44px] after:min-h-[44px]",
      "before:content-['']",
      "before:absolute",
      "before:top-1/2",
      "before:left-1/2",
      "before:-translate-x-1/2",
      "before:-translate-y-1/2"
    ]
  ],
  {
    variants: {
      colorScheme: {
        purple: [
          ["bg-purple-500", "hover:bg-purple-600"],
          ["dark:bg-purple-400", "dark:hover:bg-purple-500"]
        ],
        teal: [
          ["bg-teal-500", "hover:bg-teal-600"],
          ["dark:bg-teal-400", "dark:hover:bg-teal-500"]
        ],
        green: [
          ["bg-green-500", "hover:bg-green-600"],
          ["dark:bg-green-400", "dark:hover:bg-green-500"]
        ],
        red: [
          ["bg-red-500", "hover:bg-red-600"],
          ["dark:bg-red-400", "dark:hover:bg-red-500"]
        ],
        yellow: [
          ["bg-yellow-500", "hover:bg-yellow-600"],
          ["dark:bg-yellow-400", "dark:hover:bg-yellow-500"]
        ],
        blue: [
          ["bg-blue-500", "hover:bg-blue-600"],
          ["dark:bg-blue-400", "dark:hover:bg-blue-500"]
        ],

        "b/w": ["bg-dark", "dark:bg-light"],

        gray: [
          ["bg-gray-500/50", "hover:bg-gray-600/50"],
          ["dark:bg-gray-400/50", "dark:hover:bg-gray-500"]
        ]
      }
    },
    defaultVariants: {
      colorScheme: "purple"
    }
  }
);

type ScrollAreaScrollbarProps = RxScrollArea.ScrollAreaScrollbarProps & {
  colorScheme?: ScrollAreaScrollbarColorScheme;
};

const ScrollAreaScrollbar = forwardRef<
  HTMLDivElement,
  ScrollAreaScrollbarProps
>(({ className, colorScheme = "purple", ...props }, ref) => {
  return (
    <RxScrollArea.Scrollbar
      className={cn(
        "flex",
        "select-none",
        "touch-none",
        "p-[3px]",
        "bg-transparent",
        // In the future I may want to add a variant for the scrollbar's opacity.
        // ["bg-gray-300/45", "dark:bg-gray-500/40"],
        [
          "data-[orientation='vertical']:w-3",
          "data-[orientation='horizontal']:flex-col",
          "data-[orientation='horizontal']:h-3"
        ],
        className
      )}
      {...props}
      ref={ref}
    >
      <RxScrollArea.Thumb
        className={scrollAreaThumbVariants({ className, colorScheme })}
      />
    </RxScrollArea.Scrollbar>
  );
});

type ScrollAreaCornerProps = RxScrollArea.ScrollAreaCornerProps;

const ScrollAreaCorner = RxScrollArea.Corner;

ScrollArea.Scrollbar = ScrollAreaScrollbar;
ScrollArea.Corner = ScrollAreaCorner;

ScrollArea.displayName = RxScrollArea.Root.displayName;

export { ScrollArea };
export type {
  ScrollAreaProps,
  ScrollAreaScrollbarProps,
  ScrollAreaCornerProps
};
