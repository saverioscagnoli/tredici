import * as RxCheckbox from "@radix-ui/react-checkbox";
import { type ReactNode, type RefObject } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { CheckIcon } from "@radix-ui/react-icons";

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

import "./checkbox.css";

const checkboxVariants = cva(
  [
    "inline-flex items-center justify-center",
    "bg-transparent",
    "border data-[state=checked]:border-none border-[var(--gray-7)]",
    "rounded",
    "disabled:cursor-not-allowed",
    "disabled:opacity-50"
  ],
  {
    variants: {
      size: {
        sm: "w-4 h-4",
        md: "w-5 h-5",
        lg: "w-6 h-6"
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
        outline: "border"
      }
    },
    compoundVariants: [
      {
        colorScheme: "plum",
        variant: "solid",
        class: [
          "data-[state=checked]:bg-[var(--plum-9)]",
          "text-[var(--slate-1)] dark:text-[var(--slate-12)]"
        ]
      },
      {
        colorScheme: "plum",
        variant: "soft",
        class: [
          "border-[var(--plum-7)]",
          "data-[state=checked]:bg-[var(--plum-5)]",
          "text-[var(--plum-11)]"
        ]
      },
      {
        colorScheme: "plum",
        variant: "outline",
        class: [
          "border-[var(--plum-7)] data-[state=checked]:border-solid",
          "bg-transparent hover:bg-[var(--plum-6)]",
          "text-[var(--plum-11)]"
        ]
      },
      {
        colorScheme: "red",
        variant: "solid",
        class: [
          "data-[state=checked]:bg-[var(--red-9)]",
          "text-[var(--slate-1)] dark:text-[var(--slate-12)]"
        ]
      },
      {
        colorScheme: "red",
        variant: "soft",
        class: [
          "border-[var(--red-7)]",
          "data-[state=checked]:bg-[var(--red-5)]",
          "text-[var(--red-11)]"
        ]
      },
      {
        colorScheme: "red",
        variant: "outline",
        class: [
          "border-[var(--red-7)] data-[state=checked]:border-solid",
          "bg-transparent hover:bg-[var(--red-6)]",
          "text-[var(--red-11)]"
        ]
      },
      {
        colorScheme: "blue",
        variant: "solid",
        class: [
          "data-[state=checked]:bg-[var(--blue-9)]",
          "text-[var(--slate-1)] dark:text-[var(--slate-12)]"
        ]
      },
      {
        colorScheme: "blue",
        variant: "soft",
        class: [
          "border-[var(--blue-7)]!",
          "data-[state=checked]:bg-[var(--blue-5)]",
          "text-[var(--blue-11)]"
        ]
      },
      {
        colorScheme: "blue",
        variant: "outline",
        class: [
          "border-[var(--blue-7)]! data-[state=checked]:border-solid",
          "bg-transparent hover:bg-[var(--blue-6)]",
          "text-[var(--blue-11)]"
        ]
      },
      {
        colorScheme: "teal",
        variant: "solid",
        class: [
          "data-[state=checked]:bg-[var(--teal-9)]",
          "text-[var(--slate-1)] dark:text-[var(--slate-12)]"
        ]
      },
      {
        colorScheme: "teal",
        variant: "soft",
        class: [
          "border-[var(--teal-7)]!",
          "data-[state=checked]:bg-[var(--teal-5)]",
          "text-[var(--teal-11)]"
        ]
      },
      {
        colorScheme: "teal",
        variant: "outline",
        class: [
          "border-[var(--teal-7)]! data-[state=checked]:border-solid",
          "bg-transparent hover:bg-[var(--teal-6)]",
          "text-[var(--teal-11)]"
        ]
      },
      {
        colorScheme: "cyan",
        variant: "solid",
        class: [
          "data-[state=checked]:bg-[var(--cyan-9)]",
          "text-[var(--slate-1)] dark:text-[var(--slate-12)]"
        ]
      },
      {
        colorScheme: "cyan",
        variant: "soft",
        class: [
          "border-[var(--cyan-7)]!",
          "data-[state=checked]:bg-[var(--cyan-5)]",
          "text-[var(--cyan-11)]"
        ]
      },
      {
        colorScheme: "cyan",
        variant: "outline",
        class: [
          "border-[var(--cyan-7)]! data-[state=checked]:border-solid",
          "bg-transparent hover:bg-[var(--cyan-6)]",
          "text-[var(--cyan-11)]"
        ]
      },
      {
        colorScheme: "green",
        variant: "solid",
        class: [
          "data-[state=checked]:bg-[var(--grass-9)]",
          "text-[var(--slate-1)] dark:text-[var(--slate-12)]"
        ]
      },
      {
        colorScheme: "green",
        variant: "soft",
        class: [
          "border-[var(--grass-7)]!",
          "data-[state=checked]:bg-[var(--grass-5)]",
          "text-[var(--grass-11)]"
        ]
      },
      {
        colorScheme: "green",
        variant: "outline",
        class: [
          "border-[var(--grass-7)]! data-[state=checked]:border-solid",
          "bg-transparent hover:bg-[var(--grass-6)]",
          "text-[var(--grass-11)]"
        ]
      },
      {
        colorScheme: "amber",
        variant: "solid",
        class: [
          "data-[state=checked]:bg-[var(--amber-9)]",
          "text-[var(--slate-12)] dark:text-[var(--slate-1)]"
        ]
      },
      {
        colorScheme: "amber",
        variant: "soft",
        class: [
          "border-[var(--amber-7)]!",
          "data-[state=checked]:bg-[var(--amber-5)]",
          "text-[var(--amber-11)]"
        ]
      },
      {
        colorScheme: "amber",
        variant: "outline",
        class: [
          "border-[var(--amber-7)]! data-[state=checked]:border-solid",
          "bg-transparent hover:bg-[var(--amber-6)]",
          "text-[var(--amber-11)]"
        ]
      },
      {
        colorScheme: "orange",
        variant: "solid",
        class: [
          "data-[state=checked]:bg-[var(--orange-9)]",
          "text-[var(--slate-1)]"
        ]
      },
      {
        colorScheme: "orange",
        variant: "soft",
        class: [
          "border-[var(--orange-7)]!",
          "data-[state=checked]:bg-[var(--orange-5)]",
          "text-[var(--orange-11)]"
        ]
      },
      {
        colorScheme: "orange",
        variant: "outline",
        class: [
          "border-[var(--orange-7)]! data-[state=checked]:border-solid",
          "bg-transparent hover:bg-[var(--orange-6)]",
          "text-[var(--orange-11)]"
        ]
      },
      {
        colorScheme: "gray",
        variant: "solid",
        class: [
          "data-[state=checked]:bg-[var(--gray-12)]",
          "text-[var(--slate-1)]"
        ]
      },
      {
        colorScheme: "gray",
        variant: "soft",
        class: [
          "border-[var(--gray-7)]",
          "data-[state=checked]:bg-[var(--gray-5)]",
          "text-[var(--slate-12)]"
        ]
      },
      {
        colorScheme: "gray",
        variant: "outline",
        class: [
          "border-[var(--gray-7)] data-[state=checked]:border-solid",
          "bg-transparent hover:bg-[var(--gray-6)]",
          "text-[var(--slate-12)]"
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

const checkboxIconVariants = cva(null, {
  variants: {
    size: {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

type CheckboxProps = RxCheckbox.CheckboxProps &
  VariantProps<typeof checkboxVariants> & {
    icon?: ReactNode;
    ref?: RefObject<HTMLButtonElement>;
  };

export type { CheckboxProps };

const Checkbox: React.FC<CheckboxProps> = ({
  className,
  colorScheme = "plum",
  variant = "solid",
  size = "md",
  icon = <CheckIcon className={checkboxIconVariants({ size })} />,
  ...props
}) => {
  return (
    <RxCheckbox.Root
      className={checkboxVariants({ className, colorScheme, variant, size })}
      {...props}
    >
      <RxCheckbox.Indicator className="checkbox-indicator" children={icon} />
    </RxCheckbox.Root>
  );
};

Checkbox.displayName = "Checkbox";

export { Checkbox };
