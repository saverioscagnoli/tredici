import type React from "react";
import type { ComponentProps, ReactNode } from "react";
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

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "select-none",
    "transition-colors",
    "focus-visible:outline-none",
    "focus-visible:ring-2",
    "focus-visible:ring-[var(--slate-12)]",
    "focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[var(--slate-1)]",
    "disabled:opacity-50",
    "disabled:pointer-events-none",
    "disabled:cursor-not-allowed"
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
        blue: "",
        teal: "",
        cyan: "",
        green: "",
        amber: "",
        orange: "",
        gray: ""
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
      },

      // Teal
      {
        colorScheme: "teal",
        variant: "solid",
        class: [
          "bg-[var(--teal-9)] hover:bg-[var(--teal-10)]",
          "text-[var(--slate-1)] dark:text-[var(--slate-12)]"
        ]
      },
      {
        colorScheme: "teal",
        variant: "soft",
        class: [
          "bg-[var(--teal-5)] hover:bg-[var(--teal-6)]",
          "text-[var(--teal-11)]"
        ]
      },
      {
        colorScheme: "teal",
        variant: "outline",
        class: [
          "outline outline-[var(--teal-7)]",
          "bg-transparent hover:bg-[var(--teal-6)]",
          "text-[var(--teal-11)]"
        ]
      },
      {
        colorScheme: "teal",
        variant: "ghost",
        class: [
          "bg-transparent hover:bg-[var(--teal-6)]",
          "text-[var(--teal-11)]"
        ]
      },

      // Cyan
      {
        colorScheme: "cyan",
        variant: "solid",
        class: [
          "bg-[var(--cyan-9)] hover:bg-[var(--cyan-10)]",
          "text-[var(--slate-1)] dark:text-[var(--slate-12)]"
        ]
      },
      {
        colorScheme: "cyan",
        variant: "soft",
        class: [
          "bg-[var(--cyan-5)] hover:bg-[var(--cyan-6)]",
          "text-[var(--cyan-11)]"
        ]
      },
      {
        colorScheme: "cyan",
        variant: "outline",
        class: [
          "outline outline-[var(--cyan-7)]",
          "bg-transparent hover:bg-[var(--cyan-6)]",
          "text-[var(--cyan-11)]"
        ]
      },
      {
        colorScheme: "cyan",
        variant: "ghost",
        class: [
          "bg-transparent hover:bg-[var(--cyan-6)]",
          "text-[var(--cyan-11)]"
        ]
      },

      // Green
      {
        colorScheme: "green",
        variant: "solid",
        class: [
          "bg-[var(--green-9)] hover:bg-[var(--green-10)]",
          "text-[var(--slate-1)] dark:text-[var(--slate-12)]"
        ]
      },
      {
        colorScheme: "green",
        variant: "soft",
        class: [
          "bg-[var(--green-5)] hover:bg-[var(--green-6)]",
          "text-[var(--green-11)]"
        ]
      },
      {
        colorScheme: "green",
        variant: "outline",
        class: [
          "outline outline-[var(--green-7)]",
          "bg-transparent hover:bg-[var(--green-6)]",
          "text-[var(--green-11)]"
        ]
      },
      {
        colorScheme: "green",
        variant: "ghost",
        class: [
          "bg-transparent hover:bg-[var(--green-6)]",
          "text-[var(--green-11)]"
        ]
      },
      {
        colorScheme: "amber",
        variant: "solid",
        class: [
          "bg-[var(--amber-9)] hover:bg-[var(--amber-10)]",
          "text-[var(--slate-12)] dark:text-[var(--slate-1)]"
        ]
      },
      {
        colorScheme: "amber",
        variant: "soft",
        class: [
          "bg-[var(--amber-5)] hover:bg-[var(--amber-6)]",
          "text-[var(--amber-11)]"
        ]
      },
      {
        colorScheme: "amber",
        variant: "outline",
        class: [
          "outline outline-[var(--amber-7)]",
          "bg-transparent hover:bg-[var(--amber-6)]",
          "text-[var(--amber-11)]"
        ]
      },
      {
        colorScheme: "amber",
        variant: "ghost",
        class: [
          "bg-transparent hover:bg-[var(--amber-6)]",
          "text-[var(--amber-11)]"
        ]
      },

      // Orange
      {
        colorScheme: "orange",
        variant: "solid",
        class: [
          "bg-[var(--orange-9)] hover:bg-[var(--orange-10)]",
          "text-[var(--slate-1)]"
        ]
      },
      {
        colorScheme: "orange",
        variant: "soft",
        class: [
          "bg-[var(--orange-5)] hover:bg-[var(--orange-6)]",
          "text-[var(--orange-11)]"
        ]
      },
      {
        colorScheme: "orange",
        variant: "outline",
        class: [
          "outline outline-[var(--orange-7)]",
          "bg-transparent hover:bg-[var(--orange-6)]",
          "text-[var(--orange-11)]"
        ]
      },
      {
        colorScheme: "orange",
        variant: "ghost",
        class: [
          "bg-transparent hover:bg-[var(--orange-6)]",
          "text-[var(--orange-11)]"
        ]
      },

      // Gray
      {
        colorScheme: "gray",
        variant: "solid",
        class: [
          "bg-[var(--gray-12)] hover:bg-[var(--gray-11)]",
          "text-[var(--slate-1)]"
        ]
      },
      {
        colorScheme: "gray",
        variant: "soft",
        class: [
          "bg-[var(--gray-5)] hover:bg-[var(--gray-6)]",
          "text-[var(--slate-12)]"
        ]
      },
      {
        colorScheme: "gray",
        variant: "outline",
        class: [
          "outline outline-[var(--gray-7)]",
          "bg-transparent hover:bg-[var(--gray-6)]",
          "text-[var(--gray-12)]"
        ]
      },
      {
        colorScheme: "gray",
        variant: "ghost",
        class: [
          "bg-transparent hover:bg-[var(--gray-6)]",
          "text-[var(--gray-12)]"
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
  VariantProps<typeof buttonVariants> & {
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
  };

export type { ButtonProps };

const Button: React.FC<ButtonProps> = ({
  size,
  colorScheme,
  variant,
  bump,
  leftIcon,
  rightIcon,
  children,
  className,
  disabled,
  ...props
}) => {
  return (
    <button
      className={buttonVariants({
        size,
        colorScheme,
        variant,
        bump: disabled ? false : bump,
        className
      })}
      disabled={disabled}
      {...props}
    >
      {leftIcon && leftIcon}
      {children}
      {rightIcon && rightIcon}
    </button>
  );
};

Button.displayName = "Button";

export { Button };
