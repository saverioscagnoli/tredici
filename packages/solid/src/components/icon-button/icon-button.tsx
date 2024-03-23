import { cn } from "@lib";
import { cva } from "class-variance-authority";
import { JSX, ComponentProps } from "solid-js";

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

type IconButtonVariant = "solid" | "secondary" | "outline" | "ghost";

type IconButtonColorScheme =
  | "plum"
  | "teal"
  | "grass"
  | "red"
  | "amber"
  | "blue"
  | "b/w";

type IconButtonSize = "sm" | "md" | "lg";

const iconButtonVariants = cva(
  [
    "inline-flex justify-center items-center",
    "transition-colors",
    "select-none",
    ["disabled:opacity-50", "disabled:pointer-events-none"]
  ],
  {
    compoundVariants: [
      {
        variant: "solid",
        colorScheme: "plum",
        class: [
          "text-[--slate-1]",
          [
            "bg-[--plum-9]",
            "hover:bg-[--plum-10]",
            ["active:bg-[--plum-12]", "dark:active:bg-[--plum-8]"]
          ]
        ]
      },
      {
        variant: "secondary",
        colorScheme: "plum",
        class: [
          "text-[--plum-11]",
          ["bg-[--plum-4]", "hover:bg-[--plum-5]", "active:bg-[--plum-7]"]
        ]
      },
      {
        variant: "outline",
        colorScheme: "plum",
        class: [
          "bg-transparent border",
          "border-[--plum-8]",
          "text-[--plum-11]",
          ["hover:bg-[--plum-4]", "active:bg-[--plum-7]"]
        ]
      },
      {
        variant: "ghost",
        colorScheme: "plum",
        class: [
          "bg-transparent",
          "text-[--plum-11]",
          ["hover:bg-[--plum-4]", "active:bg-[--plum-6]"]
        ]
      },
      {
        variant: "solid",
        colorScheme: "teal",
        class: [
          "text-[--slate-1]",
          "bg-[--teal-9]",
          "hover:bg-[--teal-10]",
          "active:bg-[--teal-11]"
        ]
      },
      {
        variant: "secondary",
        colorScheme: "teal",
        class: [
          "text-[--teal-11]",
          ["bg-[--teal-4]", "hover:bg-[--teal-5]", "active:bg-[--teal-6]"]
        ]
      },
      {
        variant: "outline",
        colorScheme: "teal",
        class: [
          "bg-transparent border",
          "border-[--teal-8]",
          "text-[--teal-11]",
          ["hover:bg-[--teal-4]", "active:bg-[--teal-7]"]
        ]
      },
      {
        variant: "ghost",
        colorScheme: "teal",
        class: [
          "bg-transparent",
          "text-[--teal-11]",
          ["hover:bg-[--teal-4]", "active:bg-[--teal-6]"]
        ]
      },
      {
        variant: "solid",
        colorScheme: "grass",
        class: [
          "text-[--slate-1]",
          ["bg-[--grass-9]", "hover:bg-[--grass-10]", "active:bg-[--grass-11]"]
        ]
      },
      {
        variant: "secondary",
        colorScheme: "grass",
        class: [
          "text-[--grass-11]",
          ["bg-[--grass-4]", "hover:bg-[--grass-5]", "active:bg-[--grass-6]"]
        ]
      },
      {
        variant: "outline",
        colorScheme: "grass",
        class: [
          "bg-transparent border",
          "border-[--grass-8]",
          "text-[--grass-11]",
          ["hover:bg-[--grass-4]", "active:bg-[--grass-7]"]
        ]
      },
      {
        variant: "ghost",
        colorScheme: "grass",
        class: [
          "bg-transparent",
          "text-[--grass-11]",
          ["hover:bg-[--grass-4]", "active:bg-[--grass-6]"]
        ]
      },
      {
        variant: "solid",
        colorScheme: "red",
        class: [
          ["text-[--slate-1]", "dark:text-[--slate-12]"],
          ["bg-[--red-9]", "hover:bg-[--red-10]", "active:bg-[--red-11]"]
        ]
      },
      {
        variant: "secondary",
        colorScheme: "red",
        class: [
          "text-[--red-11]",
          ["bg-[--red-4]", "hover:bg-[--red-5]", "active:bg-[--red-6]"]
        ]
      },
      {
        variant: "outline",
        colorScheme: "red",
        class: [
          "bg-transparent border",
          "border-[--red-8]",
          "text-[--red-11]",
          ["hover:bg-[--red-4]", "active:bg-[--red-7]"]
        ]
      },
      {
        variant: "ghost",
        colorScheme: "red",
        class: [
          "bg-transparent",
          "text-[--red-11]",
          ["hover:bg-[--red-4]", "active:bg-[--red-6]"]
        ]
      },
      {
        variant: "solid",
        colorScheme: "amber",
        class: [
          ["text-[--slate-12]", "dark:text-[--slate-1]"],
          ["bg-[--amber-9]", "hover:bg-[--amber-10]", "active:bg-[--amber-11]"]
        ]
      },
      {
        variant: "secondary",
        colorScheme: "amber",
        class: [
          "text-[--amber-11]",
          ["bg-[--amber-4]", "hover:bg-[--amber-5]", "active:bg-[--amber-6]"]
        ]
      },
      {
        variant: "outline",
        colorScheme: "amber",
        class: [
          "bg-transparent border",
          "border-[--amber-8]",
          "text-[--amber-11]",
          ["hover:bg-[--amber-4]", "active:bg-[--amber-7]"]
        ]
      },
      {
        variant: "ghost",
        colorScheme: "amber",
        class: [
          "bg-transparent",
          "text-[--amber-11]",
          ["hover:bg-[--amber-4]", "active:bg-[--amber-6]"]
        ]
      },
      {
        variant: "solid",
        colorScheme: "blue",
        class: [
          "text-[--slate-1]",
          ["bg-[--blue-9]", "hover:bg-[--blue-10]", "active:bg-[--blue-11]"]
        ]
      },
      {
        variant: "secondary",
        colorScheme: "blue",
        class: [
          "text-[--blue-11]",
          ["bg-[--blue-4]", "hover:bg-[--blue-5]", "active:bg-[--blue-6]"]
        ]
      },
      {
        variant: "outline",
        colorScheme: "blue",
        class: [
          "bg-transparent border",
          "border-[--blue-8]",
          "text-[--blue-11]",
          ["hover:bg-[--blue-4]", "active:bg-[--blue-7]"]
        ]
      },
      {
        variant: "ghost",
        colorScheme: "blue",
        class: [
          "bg-transparent",
          "text-[--blue-11]",
          ["hover:bg-[--blue-4]", "active:bg-[--blue-6]"]
        ]
      },
      {
        variant: "solid",
        colorScheme: "b/w",
        class: [
          "text-[--slate-1]",
          "bg-[--slate-12]",
          [
            "hover:bg-[--gray-12]",
            "active:bg-[--gray-11]",
            "dark:hover:bg-[--gray-11]",
            "dark:active:bg-[--gray-10]"
          ]
        ]
      },
      {
        variant: "secondary",
        colorScheme: "b/w",
        class: [
          "text-[--gray-12]",
          ["bg-[--gray-5]", "hover:bg-[--gray-6]", "active:bg-[--gray-8]"]
        ]
      },
      {
        variant: "outline",
        colorScheme: "b/w",
        class: [
          "bg-transparent border",
          "border-[--slate-12]",
          "text-[--slate-12]",
          ["hover:bg-[--gray-3]", "active:bg-[--gray-5]"]
        ]
      },
      {
        variant: "ghost",
        colorScheme: "b/w",
        class: [
          "bg-transparent",
          ["text-[--slate-12]", "hover:text-[--slate-1]"],
          ["hover:bg-[--slate-12]", "active:bg-[--gray-11]"]
        ]
      }
    ],
    variants: {
      variant: {
        solid: "",
        secondary: "",
        outline: "",
        ghost: ""
      },
      colorScheme: {
        plum: "",
        teal: "",
        grass: "",
        red: "",
        amber: "",
        blue: "",
        "b/w": "",
        gray: ""
      },
      size: {
        sm: "w-6 h-6 rounded",
        md: "w-8 h-8 rounded-md",
        lg: "w-11 h-11 rounded-lg"
      }
    },
    defaultVariants: {
      colorScheme: "plum",
      size: "md"
    }
  }
);

type IconButtonProps = ComponentProps<"button"> & {
  variant?: IconButtonVariant;
  colorScheme?: IconButtonColorScheme;
  size?: IconButtonSize;
  icon?: JSX.Element;
  round?: boolean;
};

const IconButton = ({
  variant = "solid",
  colorScheme = "plum",
  size = "md",
  icon,
  round,
  ref,
  ...props
}: IconButtonProps) => {
  return (
    <button
      class={iconButtonVariants({
        class: cn(round && "!rounded-full", props.class),
        variant,
        colorScheme,
        size
      })}
      {...props}
      ref={ref}
    >
      {icon}
    </button>
  );
};

export { IconButton };
export type {
  IconButtonProps,
  IconButtonVariant,
  IconButtonColorScheme,
  IconButtonSize
};
