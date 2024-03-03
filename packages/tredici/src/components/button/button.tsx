import { cva } from "class-variance-authority";
import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";

type ButtonVariant = "solid" | "outline" | "ghost" | "link";

type ButtonColorScheme =
  | "purple"
  | "teal"
  | "green"
  | "red"
  | "yellow"
  | "blue"
  | "b/w"
  | "gray";

type ButtonSize = "sm" | "md" | "lg";

const buttonVariants = cva(
  [
    "inline-flex justify-center items-center",
    "font-semibold",
    "transition-colors",
    "select-none",
    ["disabled:opacity-50", "disabled:pointer-events-none"]
  ],
  {
    compoundVariants: [
      {
        variant: "solid",
        colorScheme: "purple",
        className: [
          "text-white",
          "dark:text-black",
          ["bg-purple-500", "hover:bg-purple-600", "active:bg-purple-700"]
        ]
      },
      {
        variant: "outline",
        colorScheme: "purple",
        className: [
          "bg-transparent border",
          "border-purple-500",
          "text-purple-500",
          [
            "hover:bg-purple-100",
            "active:bg-purple-200",
            "dark:hover:bg-purple-950",
            "dark:active:bg-purple-900"
          ]
        ]
      },
      {
        variant: "ghost",
        colorScheme: "purple",
        className: [
          "bg-transparent",
          "text-purple-500",
          [
            "hover:bg-purple-100",
            "active:bg-purple-200",
            "dark:hover:bg-purple-950",
            "dark:active:bg-purple-900"
          ]
        ]
      },
      {
        variant: "link",
        colorScheme: "purple",
        className: [
          "bg-transparent",
          "text-purple-500",
          "underline-offset-2",
          "hover:underline",
          "active:underline"
        ]
      },
      {
        variant: "solid",
        colorScheme: "teal",
        className: [
          "text-white",
          "dark:text-black",
          "bg-teal-500",
          "hover:bg-teal-600",
          "active:bg-teal-700"
        ]
      },
      {
        variant: "outline",
        colorScheme: "teal",
        className: [
          "bg-transparent border",
          "border-teal-500",
          "text-teal-500",
          [
            "hover:bg-teal-100",
            "active:bg-teal-200",
            "dark:hover:bg-teal-950",
            "dark:active:bg-teal-900"
          ]
        ]
      },
      {
        variant: "ghost",
        colorScheme: "teal",
        className: [
          "bg-transparent",
          "text-teal-500",
          [
            "hover:bg-teal-100",
            "active:bg-teal-200",
            "dark:hover:bg-teal-950",
            "dark:active:bg-teal-900"
          ]
        ]
      },
      {
        variant: "link",
        colorScheme: "teal",
        className: [
          "bg-transparent",
          "text-teal-500",
          "underline-offset-2",
          "hover:underline",
          "active:underline"
        ]
      },
      {
        variant: "solid",
        colorScheme: "green",
        className: [
          "text-white",
          "dark:text-black",
          "bg-green-500",
          "hover:bg-green-600",
          "active:bg-green-700"
        ]
      },
      {
        variant: "outline",
        colorScheme: "green",
        className: [
          "bg-transparent border",
          "border-green-500",
          "text-green-500",
          [
            "hover:bg-green-100",
            "active:bg-green-200",
            "dark:hover:bg-green-950",
            "dark:active:bg-green-900"
          ]
        ]
      },
      {
        variant: "ghost",
        colorScheme: "green",
        className: [
          "bg-transparent",
          "text-green-500",
          [
            "hover:bg-green-100",
            "active:bg-green-200",
            "dark:hover:bg-green-950",
            "dark:active:bg-green-900"
          ]
        ]
      },
      {
        variant: "link",
        colorScheme: "green",
        className: [
          "bg-transparent",
          "text-green-500",
          "underline-offset-2",
          "hover:underline",
          "active:underline"
        ]
      },
      {
        variant: "solid",
        colorScheme: "red",
        className: [
          "text-white",
          "dark:text-black",
          "bg-red-500",
          "hover:bg-red-600",
          "active:bg-red-700"
        ]
      },
      {
        variant: "outline",
        colorScheme: "red",
        className: [
          "bg-transparent border",
          "border-red-500",
          "text-red-500",
          [
            "hover:bg-red-100",
            "active:bg-red-200",
            "dark:hover:bg-red-950",
            "dark:active:bg-red-900"
          ]
        ]
      },
      {
        variant: "ghost",
        colorScheme: "red",
        className: [
          "bg-transparent",
          "text-red-500",
          [
            "hover:bg-red-100",
            "active:bg-red-200",
            "dark:hover:bg-red-950",
            "dark:active:bg-red-900"
          ]
        ]
      },
      {
        variant: "link",
        colorScheme: "red",
        className: [
          "bg-transparent",
          "text-red-500",
          "underline-offset-2",
          "hover:underline",
          "active:underline"
        ]
      },
      {
        variant: "solid",
        colorScheme: "yellow",
        className: [
          "text-black",
          "bg-yellow-500",
          "hover:bg-yellow-600",
          "active:bg-yellow-700"
        ]
      },
      {
        variant: "outline",
        colorScheme: "yellow",
        className: [
          "bg-transparent border",
          "border-yellow-500",
          "text-yellow-500",
          [
            "hover:bg-yellow-100",
            "active:bg-yellow-200",
            "dark:hover:bg-yellow-950",
            "dark:active:bg-yellow-900"
          ]
        ]
      },
      {
        variant: "ghost",
        colorScheme: "yellow",
        className: [
          "bg-transparent",
          "text-yellow-500",
          [
            "hover:bg-yellow-100",
            "active:bg-yellow-200",
            "dark:hover:bg-yellow-950",
            "dark:active:bg-yellow-900"
          ]
        ]
      },
      {
        variant: "link",
        colorScheme: "yellow",
        className: [
          "bg-transparent",
          "text-yellow-500",
          "underline-offset-2",
          "hover:underline",
          "active:underline"
        ]
      },
      {
        variant: "solid",
        colorScheme: "blue",
        className: [
          "text-white",
          "dark:text-black",
          "bg-blue-500",
          "hover:bg-blue-600",
          "active:bg-blue-700"
        ]
      },
      {
        variant: "outline",
        colorScheme: "blue",
        className: [
          "bg-transparent border",
          "border-blue-500",
          "text-blue-500",
          [
            "hover:bg-blue-100",
            "active:bg-blue-200",
            "dark:hover:bg-blue-950",
            "dark:active:bg-blue-900"
          ]
        ]
      },
      {
        variant: "ghost",
        colorScheme: "blue",
        className: [
          "bg-transparent",
          "text-blue-500",
          [
            "hover:bg-blue-100",
            "active:bg-blue-200",
            "dark:hover:bg-blue-950",
            "dark:active:bg-blue-900"
          ]
        ]
      },
      {
        variant: "link",
        colorScheme: "blue",
        className: [
          "bg-transparent",
          "text-blue-500",
          "underline-offset-2",
          "hover:underline",
          "active:underline"
        ]
      },
      {
        variant: "solid",
        colorScheme: "b/w",
        className: [
          [
            "text-white",
            "bg-dark",
            "hover:bg-gray-900",
            "dark:text-black",
            "dark:bg-light",
            "dark:hover:bg-gray-200"
          ]
        ]
      },
      {
        variant: "outline",
        colorScheme: "b/w",
        className: [
          "bg-transparent border",
          [
            "border-dark",
            "text-black",
            "hover:bg-gray-100",
            "dark:border-light",
            "dark:text-white",
            "dark:hover:bg-gray-800"
          ]
        ]
      },

      {
        variant: "ghost",
        colorScheme: "b/w",
        className: [
          "bg-transparent",
          [
            "text-black",
            "hover:bg-dark",
            "hover:text-white",
            "dark:text-white",
            "dark:hover:bg-light",
            "dark:hover:text-black"
          ]
        ]
      },
      {
        variant: "link",
        colorScheme: "b/w",
        className: [
          "bg-transparent",
          ["text-black", "dark:text-white"],
          "underline-offset-2",
          "hover:underline",
          "active:underline"
        ]
      },
      {
        variant: "solid",
        colorScheme: "gray",
        className: [
          [
            ["bg-gray-500/20", "hover:bg-gray-600/30", "active:bg-gray-700/50"],
            [
              "dark:bg-gray-400/20",
              "dark:hover:bg-gray-300/30",
              "dark:active:bg-gray-500/50",
              "dark:text-white"
            ]
          ]
        ]
      },
      {
        variant: "outline",
        colorScheme: "gray",
        className: [
          "bg-transparent border shadow",
          [
            [
              "border-gray-700/20",
              "hover:bg-gray-500/20",
              "active:bg-gray-600/30",
              "text-black"
            ],
            [
              "dark:border-gray-300/20",
              "dark:hover:bg-gray-400/20",
              "dark:active:bg-gray-300/30",
              "dark:text-white"
            ]
          ]
        ]
      },
      {
        variant: "ghost",
        colorScheme: "gray",
        className: [
          "bg-transparent",
          [
            [
              "border-gray-700/20",
              "hover:bg-gray-500/20",
              "active:bg-gray-600/30",
              "text-black"
            ],
            [
              "dark:border-gray-300/20",
              "dark:hover:bg-gray-400/20",
              "dark:active:bg-gray-300/30",
              "dark:text-white"
            ]
          ]
        ]
      },
      {
        variant: "link",
        colorScheme: "gray",
        className: [
          "bg-transparent",
          "text-gray-500",
          "underline-offset-2",
          "hover:underline",
          "active:underline"
        ]
      }
    ],
    variants: {
      variant: {
        solid: "",
        outline: "",
        ghost: "",
        link: ""
      },
      colorScheme: {
        purple: "",
        teal: "",
        green: "",
        red: "",
        yellow: "",
        blue: "",
        "b/w": "",
        gray: ""
      },
      size: {
        sm: "h-6 px-2 text-sm rounded",
        md: "h-8 px-3 text-md rounded-md",
        lg: "h-11 px-4 text-lg rounded-lg"
      }
    },
    defaultVariants: {
      colorScheme: "purple",
      size: "md"
    }
  }
);

type ButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: ButtonVariant;
  colorScheme?: ButtonColorScheme;
  size?: ButtonSize;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = "solid",
      colorScheme = "purple",
      size = "md",
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    const isSmall = size === "sm";

    return (
      <button
        className={buttonVariants({ className, variant, colorScheme, size })}
        {...props}
        ref={ref}
      >
        {leftIcon && (
          <span className={isSmall ? "mr-1" : "mr-2"}>{leftIcon}</span>
        )}
        {children}
        {rightIcon && (
          <span className={isSmall ? "ml-1" : "ml-2"}>{rightIcon}</span>
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps, ButtonVariant, ButtonColorScheme, ButtonSize };
