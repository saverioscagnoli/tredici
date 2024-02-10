import { cva } from "class-variance-authority";
import { ComponentPropsWithoutRef, forwardRef } from "react";

type InputColorScheme =
  | "amethyst"
  | "teal"
  | "green"
  | "red"
  | "yellow"
  | "blue"
  | "b/w";
type InputSize = "sm" | "md" | "lg";

interface InputProps extends Omit<ComponentPropsWithoutRef<"input">, "size"> {
  colorScheme?: InputColorScheme;
  size?: InputSize;
  htmlSize?: number;
}

const inputVariants = cva(
  "bg-transparent p-2 border border-gray-700/75 dark:border-gray-500 text-black dark:text-white caret-black dark:caret-white outline-none",
  {
    variants: {
      colorScheme: {
        amethyst: [
          "focus:outline-amethyst-500",
          "dark:focus:outline-amethyst-300"
        ],
        teal: ["focus:outline-teal-500", "dark:focus:outline-teal-300"],
        green: ["focus:outline-green-500", "dark:focus:outline-green-300"],
        red: ["focus:outline-red-500", "dark:focus:outline-red-300"],
        yellow: ["focus:outline-yellow-500", "dark:focus:outline-yellow-300"],
        blue: ["focus:outline-blue-500", "dark:focus:outline-blue-300"],
        "b/w": ["focus:outline-black", "dark:focus:outline-white"]
      },
      size: {
        sm: "h-6 text-sm rounded-sm",
        md: "h-8 text-base rounded-md",
        lg: "h-10 text-lg rounded-lg"
      }
    },
    defaultVariants: {
      colorScheme: "amethyst",
      size: "md"
    }
  }
);

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      colorScheme = "amethyst",
      size = "md",
      htmlSize,
      style,
      ...props
    },
    ref
  ) => {
    return (
      <input
        ref={ref}
        className={inputVariants({ className, colorScheme, size })}
        size={htmlSize}
        style={{
          outlineOffset: -1,
          ...style
        }}
        {...props}
      />
    );
  }
);

export { Input };
export type { InputProps, InputColorScheme, InputSize };
