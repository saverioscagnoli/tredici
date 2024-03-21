import * as RxSwitch from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { RefAttributes, forwardRef } from "react";

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

type SwitchColorScheme =
  | "plum"
  | "teal"
  | "grass"
  | "red"
  | "amber"
  | "blue"
  | "b/w";

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
    "data-[state='unchecked']:bg-[--gray-5]"
  ],
  {
    variants: {
      colorScheme: {
        plum: "data-[state='checked']:bg-[--plum-9]",
        teal: "data-[state='checked']:bg-[--teal-9]",
        grass: "data-[state='checked']:bg-[--grass-9]",
        red: "data-[state='checked']:bg-[--red-9]",

        amber: "data-[state='checked']:bg-[--amber-9]",
        blue: "data-[state='checked']:bg-[--blue-9]",
        "b/w": [
          [
            "data-[state='checked']:bg-[--slate-12]",
            "data-[state='checked']:text-[--slate-1]"
          ]
        ]
      },
      size: {
        sm: "w-[27px] h-[16px] p-0.5",
        md: "w-[44px] h-[26px] p-1",
        lg: "w-[60px] h-[35px] p-1"
      }
    },
    defaultVariants: {
      colorScheme: "plum",
      size: "md"
    }
  }
);

const switchThumbVariants = cva(
  ["block", ["bg-[--slate-1]", "dark:bg-[--slate-12]"], "rounded-full"],
  {
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
  }
);

const Switch = forwardRef<
  HTMLButtonElement,
  SwitchProps & RefAttributes<HTMLButtonElement>
>(({ className, colorScheme = "plum", size = "md", ...props }, ref) => {
  return (
    <RxSwitch.Root
      className={switchVariants({ className, colorScheme, size })}
      {...props}
      ref={ref}
    >
      <RxSwitch.Thumb
        className={switchThumbVariants({
          className: cn(
            colorScheme === "b/w" &&
              "data-[state='checked']:dark:bg-[--slate-1]"
          ),
          size
        })}
      />
    </RxSwitch.Root>
  );
});

export { Switch };
export type { SwitchProps };
