import { ComponentPropsWithoutRef, forwardRef } from "react";
import { cva } from "class-variance-authority";

type ButtonVariant = "solid" | "outline" | "ghost";
type ButtonColorScheme = "amethyst" | "teal";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  colorScheme?: ButtonColorScheme;
  size?: ButtonSize;
}

const buttonVariants = cva(
  "inline-flex justify-center items-center select-none cursor-pointer transition-colors disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        solid: "",
        outline: "",
        ghost: ""
      },
      colorScheme: {
        amethyst: "",
        teal: "",
      },
      size: {
        sm: "h-6 px-2 text-sm rounded-sm",
        md: "h-9 px-3 text-md rounded-md",
        lg: "h-12 px-4 text-lg rounded-lg"
      }
    },
    compoundVariants: [
      {
        variant: "solid",
        colorScheme: "amethyst",
        className: [
          "bg-amethyst-500 hover:bg-amethyst-600 active:bg-amethyst-700 disabled:bg-amethyst-200 text-white",
          "dark:bg-amethyst-400 dark:hover:bg-amethyst-300 dark:active:bg-amethyst-500 dark:disabled:bg-amethyst-800 dark:text-black"
        ]
      },
      {
        variant: "outline",
        colorScheme: "amethyst",
        className: [
          "border border-amethyst-700 bg-transparent hover:bg-amethyst-100 active:bg-amethyst-200 disabled:opacity-75 text-amethyst-700",
          "dark:border dark:border-amethyst-300 dark:bg-transparent dark:hover:bg-amethyst-950 dark:active:bg-amethyst-900 dark:disabled:opacity-75 dark:text-amethyst-300"
        ]
      },
      {
        variant: "ghost",
        colorScheme: "amethyst",
        className: [
          "bg-transparent hover:bg-amethyst-100 active:bg-amethyst-200 disabled:opacity-75 text-amethyst-700",
          "dark:bg-transparent dark:hover:bg-amethyst-950 dark:active:bg-amethyst-900 dark:disabled:opacity-75 dark:text-amethyst-300"
        ]
      },
      {
        variant: "solid",
        colorScheme: "teal",
        className: [
          "bg-teal-500 hover:bg-teal-600 active:bg-teal-700 disabled:bg-teal-200 text-white",
          "dark:bg-teal-400 dark:hover:bg-teal-300 dark:active:bg-teal-500 dark:disabled:bg-teal-800 dark:text-black"
        ]
      },
      {
        variant: "outline",
        colorScheme: "teal",
        className: [
          "border border-teal-700 bg-transparent hover:bg-teal-100 active:bg-teal-200 disabled:opacity-75 text-teal-700",
          "dark:border dark:border-teal-300 dark:bg-transparent dark:hover:bg-teal-950 dark:active:bg-teal-900 dark:disabled:opacity-75 dark:text-teal-300"
        ]
      },
      {
        variant: "ghost",
        colorScheme: "teal",
        className: [
          "bg-transparent hover:bg-teal-100 active:bg-teal-200 disabled:opacity-75 text-teal-700",
          "dark:bg-transparent dark:hover:bg-teal-950 dark:active:bg-teal-900 dark:disabled:opacity-75 dark:text-teal-300"
        ]
      }
    ],
    defaultVariants: {
      variant: "solid",
      colorScheme: "amethyst",
      size: "md"
    }
  }
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "solid",
      colorScheme = "amethyst",
      size = "md",
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ className, variant, colorScheme, size })}
        {...props}
      />
    );
  }
);

export { Button };
export type { ButtonProps, ButtonVariant, ButtonSize };
