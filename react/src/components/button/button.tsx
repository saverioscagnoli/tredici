import type React from "react";
import type { ComponentProps } from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";

import "@radix-ui/colors/slate.css";
import "@radix-ui/colors/slate-dark.css";

import "@radix-ui/colors/plum.css";
import "@radix-ui/colors/plum-dark.css";

import "@radix-ui/colors/red.css";
import "@radix-ui/colors/red-dark.css";

import "@radix-ui/colors/blue.css";
import "@radix-ui/colors/blue-dark.css";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center",
    "transition-colors",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-[var(--slate-12)]",
    "focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[var(--slate-1)]"
  ],
  {
    variants: {
      size: {
        sm: "h-7 px-2.5 py-1.5 rounded text-sm",
        md: "h-9 px-4 py-2 rounded-md text-sm",
        lg: "h-12 px-5 py-3 rounded-lg",
        icon: "w-9 h-9 rounded-md"
      },
      colorScheme: {
        plum: "",
        red: "",
        blue: ""
      },
      variant: {
        solid: "",
        soft: "",
        outline: "",
        ghost: ""
      },
      bump: {
        true: "active:translate-y-[1px]"
      }
    },
    compoundVariants: [
      // Plum
      {
        colorScheme: "plum",
        variant: "solid",
        class: [
          "bg-[var(--plum-9)] hover:bg-[var(--plum-10)]",
          "text-[var(--slate-1)] dark:text-[var(--slate-12)]"
        ]
      },
      {
        colorScheme: "plum",
        variant: "soft",
        class: [
          "bg-[var(--plum-5)] hover:bg-[var(--plum-6)]",
          "text-[var(--plum-11)]"
        ]
      },
      {
        colorScheme: "plum",
        variant: "outline",
        class: [
          "outline outline-[var(--plum-7)]",
          "bg-transparent hover:bg-[var(--plum-6)]",
          "text-[var(--plum-11)]"
        ]
      },
      {
        colorScheme: "plum",
        variant: "ghost",
        class: [
          "bg-transparent hover:bg-[var(--plum-6)]",
          "text-[var(--plum-11)]"
        ]
      },

      // Red
      {
        colorScheme: "red",
        variant: "solid",
        class: [
          "bg-[var(--red-9)] hover:bg-[var(--red-10)]",
          "text-[var(--slate-1)] dark:text-[var(--slate-12)]"
        ]
      },
      {
        colorScheme: "red",
        variant: "soft",
        class: [
          "bg-[var(--red-5)] hover:bg-[var(--red-6)]",
          "text-[var(--red-11)]"
        ]
      },
      {
        colorScheme: "red",
        variant: "outline",
        class: [
          "outline outline-[var(--red-7)]",
          "bg-transparent hover:bg-[var(--red-6)]",
          "text-[var(--red-11)]"
        ]
      },
      {
        colorScheme: "red",
        variant: "ghost",
        class: [
          "bg-transparent hover:bg-[var(--red-6)]",
          "text-[var(--red-11)]"
        ]
      },

      // Blue
      {
        colorScheme: "blue",
        variant: "solid",
        class: [
          "bg-[var(--blue-9)] hover:bg-[var(--blue-10)]",
          "text-[var(--slate-1)] dark:text-[var(--slate-12)]"
        ]
      },
      {
        colorScheme: "blue",
        variant: "soft",
        class: [
          "bg-[var(--blue-5)] hover:bg-[var(--blue-6)]",
          "text-[var(--blue-11)]"
        ]
      },
      {
        colorScheme: "blue",
        variant: "outline",
        class: [
          "outline outline-[var(--blue-7)]",
          "bg-transparent hover:bg-[var(--blue-6)]",
          "text-[var(--blue-11)]"
        ]
      },
      {
        colorScheme: "blue",
        variant: "ghost",
        class: [
          "bg-transparent hover:bg-[var(--blue-6)]",
          "text-[var(--blue-11)]"
        ]
      }
    ],
    defaultVariants: {
      size: "md",
      colorScheme: "plum",
      variant: "solid",
      bump: true
    }
  }
);

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof buttonVariants>;

const Button: React.FC<ButtonProps> = ({
  size,
  colorScheme,
  variant,
  bump,
  className,
  ...props
}) => {
  return (
    <button
      className={buttonVariants({
        size,
        colorScheme,
        variant,
        bump,
        className
      })}
      {...props}
    />
  );
};

export { Button };
