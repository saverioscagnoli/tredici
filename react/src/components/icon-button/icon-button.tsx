import { cva, VariantProps } from "class-variance-authority";

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

import "@radix-ui/colors/amber.css";
import "@radix-ui/colors/amber-dark.css";

import "@radix-ui/colors/orange.css";
import "@radix-ui/colors/orange-dark.css";

import "@radix-ui/colors/gray.css";
import "@radix-ui/colors/gray-dark.css";

const iconButtonVariants = cva(
  [
    "inline-flex items-center justify-center select-none",
    "font-medium",
    "whitespace-nowrap",
    "transition-colors"
  ],
  {
    variants: {
      size: {
        sm: "w-8 h-8 p-1 rounded-sm",
        md: "w-9 h-9 p-2 rounded-md",
        lg: "w-12 h-12 p-3 rounded-lg"
      },
      colorScheme: {
        plum: "",
        red: "",
        green: "",
        blue: "",
        teal: "",
        cyan: "",
        amber: "",
        orange: "",
        gray: ""
      },
      variant: {
        solid: "",
        secondary: "",
        outline: "",
        ghost: ""
      }
    },
    compoundVariants: [
      /**
       * Plum
       */
      {
        colorScheme: "plum",
        variant: "solid",
        class: [
          "bg-[var(--plum-9)]",
          "text-[var(--slate-1)] dark:text-[var(--slate-12)]",
          "hover:bg-[var(--plum-10)]"
        ]
      },
      {
        colorScheme: "plum",
        variant: "secondary",
        class: [
          "bg-[var(--plum-5)]",
          "text-[var(--plum-11)]",
          "hover:bg-[var(--plum-6)]"
        ]
      },
      {
        colorScheme: "plum",
        variant: "outline",
        class: [
          "bg-transparent",
          "hover:bg-[var(--plum-7)]",
          "outline outline-[var(--plum-7)]",
          "text-[var(--plum-11)]",
          "hover:text-[var(--plum-12)]"
        ]
      },
      {
        colorScheme: "plum",
        variant: "ghost",
        class: [
          "bg-transparent",
          "hover:bg-[var(--plum-7)]",
          "text-[var(--plum-11)]",
          "hover:text-[var(--plum-12)]"
        ]
      },
      /**
       * Red
       */
      {
        colorScheme: "red",
        variant: "solid",
        class: [
          "bg-[var(--red-9)]",
          "text-[var(--red-1)] dark:text-[var(--slate-12)]",
          "hover:bg-[var(--red-10)]"
        ]
      },
      {
        colorScheme: "red",
        variant: "secondary",
        class: [
          "bg-[var(--red-5)]",
          "text-[var(--red-11)]",
          "hover:bg-[var(--red-6)]"
        ]
      },
      {
        colorScheme: "red",
        variant: "outline",
        class: [
          "bg-transparent",
          "hover:bg-[var(--red-7)]",
          "outline outline-[var(--red-7)]",
          "text-[var(--red-11)]",
          "hover:text-[var(--red-12)]"
        ]
      },
      {
        colorScheme: "red",
        variant: "ghost",
        class: [
          "bg-transparent",
          "hover:bg-[var(--red-7)]",
          "text-[var(--red-11)]",
          "hover:text-[var(--red-12)]"
        ]
      },
      /**
       * Green
       */
      {
        colorScheme: "green",
        variant: "solid",
        class: [
          "bg-[var(--green-9)]",
          "text-[var(--slate-1)] dark:text-[var(--slate-12)]",
          "hover:bg-[var(--green-10)]"
        ]
      },
      {
        colorScheme: "green",
        variant: "secondary",
        class: [
          "bg-[var(--green-5)]",
          "text-[var(--green-11)]",
          "hover:bg-[var(--green-6)]"
        ]
      },
      {
        colorScheme: "green",
        variant: "outline",
        class: [
          "bg-transparent",
          "hover:bg-[var(--green-7)]",
          "outline outline-[var(--green-7)]",
          "text-[var(--green-11)]",
          "hover:text-[var(--green-12)]"
        ]
      },
      {
        colorScheme: "green",
        variant: "ghost",
        class: [
          "bg-transparent",
          "hover:bg-[var(--green-7)]",
          "text-[var(--green-11)]",
          "hover:text-[var(--green-12)]"
        ]
      },
      /**
       * Blue
       */
      {
        colorScheme: "blue",
        variant: "solid",
        class: [
          "bg-[var(--blue-9)]",
          "text-[var(--slate-1)] dark:text-[var(--slate-12)]",
          "hover:bg-[var(--blue-10)]"
        ]
      },
      {
        colorScheme: "blue",
        variant: "secondary",
        class: [
          "bg-[var(--blue-5)]",
          "text-[var(--blue-11)]",
          "hover:bg-[var(--blue-6)]"
        ]
      },
      {
        colorScheme: "blue",
        variant: "outline",
        class: [
          "bg-transparent",
          "hover:bg-[var(--blue-7)]",
          "outline outline-[var(--blue-7)]",
          "text-[var(--blue-11)]",
          "hover:text-[var(--blue-12)]"
        ]
      },
      {
        colorScheme: "blue",
        variant: "ghost",
        class: [
          "bg-transparent",
          "hover:bg-[var(--blue-7)]",
          "text-[var(--blue-11)]",
          "hover:text-[var(--blue-12)]"
        ]
      },
      /**
       * Teal
       */
      {
        colorScheme: "teal",
        variant: "solid",
        class: [
          "bg-[var(--teal-9)]",
          "text-[var(--slate-1)] dark:text-[var(--slate-12)]",
          "hover:bg-[var(--teal-8)]"
        ]
      },
      {
        colorScheme: "teal",
        variant: "secondary",
        class: [
          "bg-[var(--teal-5)]",
          "text-[var(--teal-11)]",
          "hover:bg-[var(--teal-6)]"
        ]
      },
      {
        colorScheme: "teal",
        variant: "outline",
        class: [
          "bg-transparent",
          "hover:bg-[var(--teal-7)]",
          "outline outline-[var(--teal-7)]",
          "text-[var(--teal-11)]",
          "hover:text-[var(--teal-12)]"
        ]
      },
      {
        colorScheme: "teal",
        variant: "ghost",
        class: [
          "bg-transparent",
          "hover:bg-[var(--teal-7)]",
          "text-[var(--teal-11)]",
          "hover:text-[var(--teal-12)]"
        ]
      },
      /**
       * Cyan
       */
      {
        colorScheme: "cyan",
        variant: "solid",
        class: [
          "bg-[var(--cyan-9)]",
          "text-[var(--slate-1)] dark:text-[var(--slate-12)]",
          "hover:bg-[var(--cyan-8)]"
        ]
      },
      {
        colorScheme: "cyan",
        variant: "secondary",
        class: [
          "bg-[var(--cyan-5)]",
          "text-[var(--cyan-11)]",
          "hover:bg-[var(--cyan-6)]"
        ]
      },
      {
        colorScheme: "cyan",
        variant: "outline",
        class: [
          "bg-transparent",
          "hover:bg-[var(--cyan-7)]",
          "outline outline-[var(--cyan-7)]",
          "text-[var(--cyan-11)]",
          "hover:text-[var(--cyan-12)]"
        ]
      },
      {
        colorScheme: "cyan",
        variant: "ghost",
        class: [
          "bg-transparent",
          "hover:bg-[var(--cyan-7)]",
          "text-[var(--cyan-11)]",
          "hover:text-[var(--cyan-12)]"
        ]
      },
      /**
       * Amber
       */
      {
        colorScheme: "amber",
        variant: "solid",
        class: ["bg-[var(--amber-9)]", "hover:bg-[var(--amber-8)]"]
      },
      {
        colorScheme: "amber",
        variant: "secondary",
        class: [
          "bg-[var(--amber-5)]",
          "text-[var(--amber-11)]",
          "hover:bg-[var(--amber-6)]"
        ]
      },
      {
        colorScheme: "amber",
        variant: "outline",
        class: [
          "bg-transparent",
          "hover:bg-[var(--amber-7)]",
          "outline outline-[var(--amber-7)]",
          "text-[var(--amber-11)]",
          "hover:text-[var(--amber-12)]"
        ]
      },
      {
        colorScheme: "amber",
        variant: "ghost",
        class: [
          "bg-transparent",
          "hover:bg-[var(--amber-7)]",
          "text-[var(--amber-11)]",
          "hover:text-[var(--amber-12)]"
        ]
      },
      /**
       * Orange
       */
      {
        colorScheme: "orange",
        variant: "solid",
        class: ["bg-[var(--orange-9)]", "hover:bg-[var(--orange-8)]"]
      },
      {
        colorScheme: "orange",
        variant: "secondary",
        class: [
          "bg-[var(--orange-5)]",
          "text-[var(--orange-11)]",
          "hover:bg-[var(--orange-6)]"
        ]
      },
      {
        colorScheme: "orange",
        variant: "outline",
        class: [
          "bg-transparent",
          "hover:bg-[var(--orange-7)]",
          "outline outline-[var(--orange-7)]",
          "text-[var(--orange-11)]",
          "hover:text-[var(--orange-12)]"
        ]
      },
      {
        colorScheme: "orange",
        variant: "ghost",
        class: [
          "bg-transparent",
          "hover:bg-[var(--orange-7)]",
          "text-[var(--orange-11)]",
          "hover:text-[var(--orange-12)]"
        ]
      },
      /**
       * Gray
       */
      {
        colorScheme: "gray",
        variant: "solid",
        class: [
          "bg-[var(--gray-12)]",
          "text-[var(--gray-1)]",
          "hover:bg-[var(--gray-11)]"
        ]
      },
      {
        colorScheme: "gray",
        variant: "secondary",
        class: [
          "bg-[var(--gray-5)]",
          "text-[var(--gray-12)]",
          "hover:bg-[var(--gray-6)]"
        ]
      },
      {
        colorScheme: "gray",
        variant: "outline",
        class: [
          "bg-transparent",
          "hover:bg-[var(--gray-7)]",
          "outline outline-[var(--gray-7)]",
          "text-[var(--gray-12)]"
        ]
      },
      {
        colorScheme: "gray",
        variant: "ghost",
        class: [
          "bg-transparent",
          "hover:bg-[var(--gray-7)]",
          "text-[var(--gray-12)]"
        ]
      }
    ],
    defaultVariants: {
      size: "md",
      colorScheme: "plum",
      variant: "solid"
    }
  }
);

type ButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof iconButtonVariants> & {
    icon?: React.ReactNode;
  };

export type { ButtonProps };

const IconButton: React.FC<ButtonProps> = ({
  ref,
  children,
  className,
  colorScheme,
  variant,
  size,
  icon,
  ...props
}) => {
  return (
    <button
      className={iconButtonVariants({ className, colorScheme, variant, size })}
      {...props}
      ref={ref}
    >
      {icon}
    </button>
  );
};

IconButton.displayName = "IconButton";

export { IconButton };
