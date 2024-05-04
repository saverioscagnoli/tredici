import { Checkbox as KbCheckbox } from "@kobalte/core";
import { cva } from "class-variance-authority";
import { Component, JSXElement } from "solid-js";
import { CheckIcon } from "@/components/icons";
import { cn } from "@/lib";

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

type CheckboxColorScheme =
  | "plum"
  | "teal"
  | "grass"
  | "red"
  | "amber"
  | "blue"
  | "b/w"
  | "gray";

type CheckboxSize = "sm" | "md" | "lg";

const checkboxControlVariants = cva(
  [
    "border-[1px]",
    "data-[checked]:border-none",
    "border-[--gray-8]",
    "cursor-pointer",
    "data-[disabled]:cursor-not-allowed",
    "data-[disabled]:opacity-50",
    "checkbox-control"
  ],
  {
    variants: {
      colorScheme: {
        plum: "data-[checked]:bg-[--plum-9] text-[--slate-1]",
        teal: "data-[checked]:bg-[--teal-9] text-[--slate-1]",
        grass: "data-[checked]:bg-[--grass-9] text-[--slate-1]",
        red: [
          "data-[checked]:bg-[--red-9]",
          ["text-[--slate-1]", "dark:text-[--slate-12]"]
        ],
        amber: [
          "data-[checked]:bg-[--amber-9]",
          ["text-[--slate-12]", "dark:text-[--slate-1]"]
        ],
        blue: "data-[checked]:bg-[--blue-9] text-[--slate-1]",
        "b/w": [
          ["data-[checked]:bg-[--slate-12]", "data-[checked]:text-[--slate-1]"]
        ],
        gray: ["data-[checked]:bg-[--gray-6]", "text-[--slate-12]"]
      },
      size: {
        sm: "w-3 h-3 rounded-sm text-sm",
        md: "w-[17px] h-[17px] rounded",
        lg: "w-[21px] h-[21px] rounded"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);

const checkboxIconVariants = cva(null, {
  variants: {
    size: {
      sm: "w-3 h-3",
      md: "w-4 h-4",
      lg: "w-5 h-5"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

type CheckboxProps = KbCheckbox.CheckboxRootProps & {
  colorScheme?: CheckboxColorScheme;
  size?: CheckboxSize;
  icon?: JSXElement;
};

const Checkbox: Component<CheckboxProps> = ({
  colorScheme = "plum",
  size = "md",
  icon = <CheckIcon class={checkboxIconVariants({ size })} />,
  ref,
  ...props
}) => {
  return (
    <KbCheckbox.Root
      {...props}
      class={cn(
        "bg-transparent",
        "inline-flex items-center justify-center",
        props.class
      )}
      ref={ref}
    >
      <KbCheckbox.Input class="checkbox-input" />
      <KbCheckbox.Control
        class={checkboxControlVariants({
          colorScheme,
          size
        })}
      >
        <KbCheckbox.Indicator>{icon}</KbCheckbox.Indicator>
      </KbCheckbox.Control>
    </KbCheckbox.Root>
  );
};

export { Checkbox };
export type { CheckboxProps, CheckboxColorScheme, CheckboxSize };
