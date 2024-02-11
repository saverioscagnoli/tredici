import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";
import { cva } from "class-variance-authority";

type ButtonVariant = "solid" | "outline" | "ghost";
type ButtonColorScheme =
  | "amethyst"
  | "teal"
  | "green"
  | "red"
  | "yellow"
  | "blue"
  | "b/w";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariant;
  colorScheme?: ButtonColorScheme;
  size?: ButtonSize;
}

const compoundVariants = [
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
      "dark:border dark:border-amethyst-300 dark:bg-transparent dark:hover:bg-amethyst-950 dark:active:bg-amethyst-900 dark:disabled:opacity-75 dark:text-amethyst-300",
      "disabled:hover:bg-transparent disabled:active:bg-transparent",
      "dark:disabled:hover:bg-transparent dark:disabled:active:bg-transparent"
    ]
  },
  {
    variant: "ghost",
    colorScheme: "amethyst",
    className: [
      "bg-transparent hover:bg-amethyst-100 active:bg-amethyst-200 disabled:opacity-75 text-amethyst-700",
      "dark:bg-transparent dark:hover:bg-amethyst-950 dark:active:bg-amethyst-900 dark:disabled:opacity-75 dark:text-amethyst-300",
      "disabled:hover:bg-transparent disabled:active:bg-transparent",
      "dark:disabled:hover:bg-transparent dark:disabled:active:bg-transparent"
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
      "dark:border dark:border-teal-300 dark:bg-transparent dark:hover:bg-teal-950 dark:active:bg-teal-900 dark:disabled:opacity-75 dark:text-teal-300",
      "disabled:hover:bg-transparent disabled:active:bg-transparent",
      "dark:disabled:hover:bg-transparent dark:disabled:active:bg-transparent"
    ]
  },
  {
    variant: "ghost",
    colorScheme: "teal",
    className: [
      "bg-transparent hover:bg-teal-100 active:bg-teal-200 disabled:opacity-75 text-teal-700",
      "dark:bg-transparent dark:hover:bg-teal-950 dark:active:bg-teal-900 dark:disabled:opacity-75 dark:text-teal-300",
      "disabled:hover:bg-transparent disabled:active:bg-transparent",
      "dark:disabled:hover:bg-transparent dark:disabled:active:bg-transparent"
    ]
  },
  {
    variant: "solid",
    colorScheme: "green",
    className: [
      "bg-green-500 hover:bg-green-600 active:bg-green-700 disabled:bg-green-200 text-white",
      "dark:bg-green-400 dark:hover:bg-green-300 dark:active:bg-green-500 dark:disabled:bg-green-800 dark:text-black"
    ]
  },
  {
    variant: "outline",
    colorScheme: "green",
    className: [
      "border border-green-700 bg-transparent hover:bg-green-100 active:bg-green-200 disabled:opacity-75 text-green-700",
      "dark:border dark:border-green-300 dark:bg-transparent dark:hover:bg-green-950 dark:active:bg-green-900 dark:disabled:opacity-75 dark:text-green-300",
      "disabled:hover:bg-transparent disabled:active:bg-transparent",
      "dark:disabled:hover:bg-transparent dark:disabled:active:bg-transparent"
    ]
  },
  {
    variant: "ghost",
    colorScheme: "green",
    className: [
      "bg-transparent hover:bg-green-100 active:bg-green-200 disabled:opacity-75 text-green-700",
      "dark:bg-transparent dark:hover:bg-green-950 dark:active:bg-green-900 dark:disabled:opacity-75 dark:text-green-300",
      "disabled:hover:bg-transparent disabled:active:bg-transparent",
      "dark:disabled:hover:bg-transparent dark:disabled:active:bg-transparent"
    ]
  },
  {
    variant: "solid",
    colorScheme: "red",
    className: [
      "bg-red-500 hover:bg-red-600 active:bg-red-700 disabled:bg-red-200 text-white",
      "dark:bg-red-400 dark:hover:bg-red-300 dark:active:bg-red-500 dark:disabled:bg-red-800 dark:text-black"
    ]
  },
  {
    variant: "outline",
    colorScheme: "red",
    className: [
      "border border-red-700 bg-transparent hover:bg-red-100 active:bg-red-200 disabled:opacity-75 text-red-700",
      "dark:border dark:border-red-300 dark:bg-transparent dark:hover:bg-red-950 dark:active:bg-red-900 dark:disabled:opacity-75 dark:text-red-300",
      "disabled:hover:bg-transparent disabled:active:bg-transparent",
      "dark:disabled:hover:bg-transparent dark:disabled:active:bg-transparent"
    ]
  },
  {
    variant: "ghost",
    colorScheme: "red",
    className: [
      "bg-transparent hover:bg-red-100 active:bg-red-200 disabled:opacity-75 text-red-700",
      "dark:bg-transparent dark:hover:bg-red-950 dark:active:bg-red-900 dark:disabled:opacity-75 dark:text-red-300",
      "disabled:hover:bg-transparent disabled:active:bg-transparent",
      "dark:disabled:hover:bg-transparent dark:disabled:active:bg-transparent"
    ]
  },
  {
    variant: "solid",
    colorScheme: "yellow",
    className: [
      "bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 disabled:bg-yellow-200 text-black",
      "dark:bg-yellow-400 dark:hover:bg-yellow-300 dark:active:bg-yellow-500 dark:disabled:bg-yellow-800 dark:text-black"
    ]
  },
  {
    variant: "outline",
    colorScheme: "yellow",
    className: [
      "border border-yellow-700 bg-transparent hover:bg-yellow-100 active:bg-yellow-200 disabled:opacity-75 text-yellow-700",
      "dark:border dark:border-yellow-300 dark:bg-transparent dark:hover:bg-yellow-950 dark:active:bg-yellow-900 dark:disabled:opacity-75 dark:text-yellow-300",
      "disabled:hover:bg-transparent disabled:active:bg-transparent",
      "dark:disabled:hover:bg-transparent dark:disabled:active:bg-transparent"
    ]
  },
  {
    variant: "ghost",
    colorScheme: "yellow",
    className: [
      "bg-transparent hover:bg-yellow-100 active:bg-yellow-200 disabled:opacity-75 text-yellow-700",
      "dark:bg-transparent dark:hover:bg-yellow-950 dark:active:bg-yellow-900 dark:disabled:opacity-75 dark:text-yellow-300",
      "disabled:hover:bg-transparent disabled:active:bg-transparent",
      "dark:disabled:hover:bg-transparent dark:disabled:active:bg-transparent"
    ]
  },
  {
    variant: "solid",
    colorScheme: "blue",
    className: [
      "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 disabled:bg-blue-200 text-white",
      "dark:bg-blue-400 dark:hover:bg-blue-300 dark:active:bg-blue-500 dark:disabled:bg-blue-800 dark:text-black"
    ]
  },
  {
    variant: "outline",
    colorScheme: "blue",
    className: [
      "border border-blue-700 bg-transparent hover:bg-blue-100 active:bg-blue-200 disabled:opacity-75 text-blue-700",
      "dark:border dark:border-blue-300 dark:bg-transparent dark:hover:bg-blue-950 dark:active:bg-blue-900 dark:disabled:opacity-75 dark:text-blue-300",
      "disabled:hover:bg-transparent disabled:active:bg-transparent",
      "dark:disabled:hover:bg-transparent dark:disabled:active:bg-transparent"
    ]
  },
  {
    variant: "ghost",
    colorScheme: "blue",
    className: [
      "bg-transparent hover:bg-blue-100 active:bg-blue-200 disabled:opacity-75 text-blue-700",
      "dark:bg-transparent dark:hover:bg-blue-950 dark:active:bg-blue-900 dark:disabled:opacity-75 dark:text-blue-300",
      "disabled:hover:bg-transparent disabled:active:bg-transparent",
      "dark:disabled:hover:bg-transparent dark:disabled:active:bg-transparent"
    ]
  },
  {
    variant: "solid",
    colorScheme: "b/w",
    className: [
      "bg-black hover:bg-gray-900 disabled:opacity-75 text-white",
      "dark:bg-white dark:hover:bg-gray-200 dark:disabled:opacity-75 dark:text-black"
    ]
  },
  {
    variant: "outline",
    colorScheme: "b/w",
    className: [
      "border border-black bg-transparent hover:bg-gray-200 disabled:opacity-75 text-black",
      "dark:border dark:border-white dark:bg-transparent dark:hover:bg-gray-800 dark:disabled:opacity-75 dark:text-white",
      "disabled:hover:bg-transparent disabled:active:bg-transparent",
      "dark:disabled:hover:bg-transparent dark:disabled:active:bg-transparent"
    ]
  },
  {
    variant: "ghost",
    colorScheme: "b/w",
    className: [
      "bg-transparent hover:bg-black hover:text-white active:bg-gray-800 disabled:opacity-75 text-black",
      "dark:bg-transparent dark:hover:bg-white dark:hover:text-black dark:active:bg-gray-200 dark:disabled:opacity-75 dark:text-white",
      "disabled:hover:bg-transparent disabled:active:bg-transparent disabled:text-black",
      "dark:disabled:hover:bg-transparent dark:disabled:active:bg-transparent dark:disabled:text-white"
    ]
  }
];

const buttonVariants = cva(
  "inline-flex justify-center items-center font-semibold select-none cursor-pointer transition-colors disabled:cursor-not-allowed",
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
        green: "",
        red: "",
        yellow: "",
        blue: "",
        "b/w": ""
      },
      size: {
        sm: "h-6 px-2 text-sm rounded-sm",
        md: "h-9 px-3 text-md rounded-lg",
        lg: "h-12 px-4 text-lg rounded-lg"
      }
    },
    // @ts-ignore
    compoundVariants,
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

interface IconButtonProps extends ButtonProps {
  icon?: ReactNode;
}

const iconButtonVariants = cva(
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
        green: "",
        red: "",
        yellow: "",
        blue: "",
        "b/w": ""
      },
      size: {
        sm: "w-6 h-6 text-sm rounded-sm",
        md: "w-9 h-9 rounded-lg",
        lg: "w-11 h-11 text-lg rouned-lg"
      }
    },
    // @ts-ignore
    compoundVariants,
    defaultVariants: {
      size: "md"
    }
  }
);

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant = "solid",
      colorScheme = "amethyst",
      size = "md",
      icon,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={iconButtonVariants({
          className,
          variant,
          colorScheme,
          size
        })}
        {...props}
      >
        {icon}
      </button>
    );
  }
);

export { IconButton };
export type { IconButtonProps };
