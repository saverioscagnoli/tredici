import { cn } from "@/lib/utils";
import * as RxSwitch from "@radix-ui/react-switch";
import { cva } from "class-variance-authority";
import { RefAttributes, forwardRef } from "react";

type SwitchColorScheme =
  | "purple"
  | "teal"
  | "green"
  | "red"
  | "yellow"
  | "blue"
  | "b/w"
  | "gray";

type SwitchSize = "sm" | "md" | "lg";

type SwitchProps = RxSwitch.SwitchProps & {
  colorScheme?: SwitchColorScheme;
  size?: SwitchSize;
};

const switchVariants = cva(
  [
    "flex items-center",
    "relative",
    "shadow",
    "rounded-full",
    "transition-colors",
    [
      "data-[state='unchecked']:bg-gray-500/20",
      "data-[state='unchecked']:dark:bg-gray-400/40"
    ]
  ],
  {
    variants: {
      colorScheme: {
        purple: [
          "data-[state='checked']:bg-purple-500",
          "data-[state='checked']:dark:bg-purple-400"
        ],
        teal: [
          "data-[state='checked']:bg-teal-500",
          "data-[state='checked']:dark:bg-teal-400"
        ],
        green: [
          "data-[state='checked']:bg-green-500",
          "data-[state='checked']:dark:bg-green-400"
        ],
        red: [
          "data-[state='checked']:bg-red-500",
          "data-[state='checked']:dark:bg-red-400"
        ],
        yellow: [
          "data-[state='checked']:bg-yellow-500",
          "data-[state='checked']:dark:bg-yellow-400"
        ],
        blue: [
          "data-[state='checked']:bg-blue-500",
          "data-[state='checked']:dark:bg-blue-400"
        ],
        "b/w": [
          "data-[state='checked']:bg-dark",
          "data-[state='checked']:dark:bg-light"
        ],
        gray: [
          "data-[state='checked']:bg-gray-500",
          "data-[state='checked']:dark:bg-gray-400"
        ]
      },
      size: {
        sm: "w-[27px] h-[16px] p-0.5",
        md: "w-[44px] h-[26px] p-1",
        lg: "w-[60px] h-[35px] p-1"
      }
    },
    defaultVariants: {
      colorScheme: "purple",
      size: "md"
    }
  }
);

const switchThumbVariants = cva(["block", "bg-light", "rounded-full"], {
  variants: {
    size: {
      sm: "w-[12px] h-[12px] data-[state='checked']:translate-x-[11px] transition-[transform_100ms]",
      md: "w-[20px] h-[20px] data-[state='checked']:translate-x-[17px] transition-[transform_100ms]",
      lg: "w-[28px] h-[28px] data-[state='checked']:translate-x-[25px] transition-[transform_100ms]"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

const Switch = forwardRef<
  HTMLButtonElement,
  SwitchProps & RefAttributes<HTMLButtonElement>
>(({ className, colorScheme = "purple", size = "md", ...props }, ref) => {
  return (
    <RxSwitch.Root
      className={switchVariants({ className, colorScheme, size })}
      {...props}
      ref={ref}
    >
      <RxSwitch.Thumb
        className={switchThumbVariants({
          className: cn(
            colorScheme === "b/w" && "data-[state='checked']:dark:bg-dark"
          ),
          size
        })}
      />
    </RxSwitch.Root>
  );
});

export { Switch };
export type { SwitchProps };
