import { cva, type VariantProps } from "class-variance-authority";
import * as RxSwitch from "@radix-ui/react-switch";

import "@radix-ui/colors/slate.css";
import "@radix-ui/colors/slate-dark.css";

import "@radix-ui/colors/plum.css";
import "@radix-ui/colors/plum-dark.css";

import "@radix-ui/colors/red.css";
import "@radix-ui/colors/red-dark.css";

import "@radix-ui/colors/blue.css";
import "@radix-ui/colors/blue-dark.css";

import "@radix-ui/colors/teal.css";
import "@radix-ui/colors/teal-dark.css";

import "@radix-ui/colors/cyan.css";
import "@radix-ui/colors/cyan-dark.css";

import "@radix-ui/colors/green.css";
import "@radix-ui/colors/green-dark.css";

import "@radix-ui/colors/amber.css";
import "@radix-ui/colors/amber-dark.css";

import "@radix-ui/colors/orange.css";
import "@radix-ui/colors/orange-dark.css";

import "@radix-ui/colors/gray.css";
import "@radix-ui/colors/gray-dark.css";

import type { RefObject } from "react";
import type React from "react";
import { cn } from "~/lib/utils";

const switchVariants = cva(
  [
    "flex items-center",
    "relative",
    "rounded-full shadow",
    "transition-all",
    "data-[state=unchecked]:bg-[var(--gray-5)]"
  ],
  {
    variants: {
      size: {
        sm: "w-8 h-4.5 p-0.5",
        md: "w-11 h-6.5 p-0.5",
        lg: "w-15 h-8.5 p-0.5"
      },
      colorScheme: {
        plum: "data-[state=checked]:bg-[var(--plum-9)]",
        red: "data-[state=checked]:bg-[var(--red-9)]",
        blue: "data-[state=checked]:bg-[var(--blue-9)]",
        teal: "data-[state=checked]:bg-[var(--teal-9)]",
        cyan: "data-[state=checked]:bg-[var(--cyan-9)]",
        green: "data-[state=checked]:bg-[var(--green-9)]",
        amber: "data-[state=checked]:bg-[var(--amber-9)]",
        orange: "data-[state=checked]:bg-[var(--orange-9)]",
        gray: "data-[state=checked]:bg-[var(--slate-12)]"
      }
    },
    defaultVariants: {
      size: "md",
      colorScheme: "plum"
    }
  }
);

const thumbVariants = cva(
  ["bg-[var(--slate-1)] dark:bg-[var(--slate-12)]", "block rounded-full"],
  {
    variants: {
      size: {
        sm: "w-3 h-3 data-[state=checked]:translate-x-4 duration-100",
        md: "w-5 h-5 data-[state=checked]:translate-x-5 duration-100",
        lg: "w-7 h-7 data-[state=checked]:translate-x-7 duration-100"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);

type SwitchProps = RxSwitch.SwitchProps &
  VariantProps<typeof switchVariants> & {
    ref?: RefObject<HTMLButtonElement>;
  };

export type { SwitchProps };

const Switch: React.FC<SwitchProps> = ({
  colorScheme = "plum",
  size,
  className,
  ...props
}) => {
  return (
    <RxSwitch.Root
      className={switchVariants({ colorScheme, size, className })}
      {...props}
    >
      <RxSwitch.Thumb
        className={thumbVariants({
          className: cn({
            "data-[state=checked]:bg-[var(--slate-12)] dark:data-[state=checked]:bg-[var(--slate-1)]":
              colorScheme === "amber",
            "data-[state=checked]:bg-[var(--slate-1)]":
              colorScheme === "orange" || colorScheme === "gray"
          }),
          size
        })}
      />
    </RxSwitch.Root>
  );
};

export { Switch };
