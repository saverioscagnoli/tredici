import { cva } from "class-variance-authority";
import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  Dispatch,
  SetStateAction,
  forwardRef
} from "react";

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

type InputColorScheme =
  | "plum"
  | "teal"
  | "grass"
  | "red"
  | "amber"
  | "blue"
  | "b/w";

type InputSize = "sm" | "md" | "lg";

const inputVariants = cva(
  [
    "w-full",
    "bg-transparent",
    "shadow",
    "border border-[--gray-7]",
    "caret-[--slate-12]",
    "outline-none"
  ],
  {
    variants: {
      colorScheme: {
        plum: ["focus:outline-[--plum-9]"],
        teal: ["focus:outline-[--teal-9]"],
        grass: ["focus:outline-[--grass-9]"],
        red: ["focus:outline-[--red-9]"],
        amber: ["focus:outline-[--amber-9]"],
        blue: ["focus:outline-[--blue-9]"],
        "b/w": ["focus:outline-[--slate-12]"]
      },
      size: {
        sm: "h-6 px-1 py-1 text-sm rounded",
        md: "h-8 px-1.5 rounded-md",
        lg: "h-10 px-2 text-lg rounded-lg"
      }
    },
    defaultVariants: {
      colorScheme: "plum",
      size: "md"
    }
  }
);

type InputProps = Omit<ComponentPropsWithoutRef<"input">, "size"> & {
  htmlSize?: number;
  colorScheme?: InputColorScheme;
  size?: InputSize;
  onValueChange?: Dispatch<SetStateAction<string>>;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      htmlSize,
      style,
      onChange,
      onValueChange,
      colorScheme = "plum",
      size = "md",
      ...props
    },
    ref
  ) => {
    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
      onValueChange?.(evt.target.value);
      onChange?.(evt);
    };

    return (
      <input
        size={htmlSize}
        className={inputVariants({
          className,
          colorScheme,
          size
        })}
        style={{ outlineOffset: -1, ...style }}
        onChange={handleChange}
        {...props}
        ref={ref}
      />
    );
  }
);

export { Input };
export type { InputProps };
