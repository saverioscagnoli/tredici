import { cva, VariantProps } from "class-variance-authority";
import React from "react";

import "@radix-ui/colors/slate.css";
import "@radix-ui/colors/slate-dark.css";

import "@radix-ui/colors/plum.css";
import "@radix-ui/colors/plum-dark.css";

import "@radix-ui/colors/red.css";
import "@radix-ui/colors/red-dark.css";

import "@radix-ui/colors/green.css";
import "@radix-ui/colors/green-dark.css";

import "@radix-ui/colors/blue.css";
import "@radix-ui/colors/blue-dark.css";

import "@radix-ui/colors/teal.css";
import "@radix-ui/colors/teal-dark.css";

import "@radix-ui/colors/cyan.css";
import "@radix-ui/colors/cyan-dark.css";

import "@radix-ui/colors/yellow.css";
import "@radix-ui/colors/yellow-dark.css";

import "@radix-ui/colors/orange.css";
import "@radix-ui/colors/orange-dark.css";

import "@radix-ui/colors/gray.css";
import "@radix-ui/colors/gray-dark.css";

const inputVariants = cva(
  [
    "w-full",
    "border border-[var(--gray-6)]",
    "caret-[var(--slate-12)] text-[var(--slate-12)]",
    "rounded-md",
    "shadow-sm",
    // Disable the default blue outline on focus
    "focus:outline-2 focus:outline-offset-2",
    // Disabled props
    "disabled:opacity-50 disabled:cursor-not-allowed"
  ],
  {
    variants: {
      colorScheme: {
        plum: "focus:outline-[var(--plum-9)] ",
        red: "focus:outline-[var(--red-9)]",
        green: "focus:outline-[var(--green-9)]",
        blue: "focus:outline-[var(--blue-9)]",
        teal: "focus:outline-[var(--teal-9)]",
        cyan: "focus:outline-[var(--cyan-9)]",
        amber: "focus:outline-[var(--yellow-9)]",
        orange: "focus:outline-[var(--orange-9)]",
        gray: "focus:outline-[var(--slate-12)]"
      },
      size: {
        sm: "h-8 px-3 py-1.5 text-sm",
        md: "h-9 px-3 py-2 text-sm",
        lg: "h-12 px-3 py-3  text-lg"
      }
    },
    defaultVariants: {
      colorScheme: "plum",
      size: "md"
    }
  }
);

type InputProps = Omit<React.ComponentProps<"input">, "size"> &
  VariantProps<typeof inputVariants> & {
    htmlSize?: React.ComponentProps<"input">["size"];
  };

const Input: React.FC<InputProps> = ({
  ref,
  htmlSize,
  className,
  size,
  colorScheme,
  ...props
}) => {
  return (
    <input
      className={inputVariants({ className, colorScheme, size })}
      size={htmlSize}
      {...props}
      ref={ref}
    />
  );
};

Input.displayName = "Input";

export { Input };
