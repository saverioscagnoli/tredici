import {
  ComponentPropsWithoutRef,
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef
} from "react";
import { cva } from "class-variance-authority";
import { VariantProps } from "class-variance-authority";
import { cn } from "@lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold select-none cursor-pointer transition-colors disabled:cursor-not-allowed",
  {
    variants: {
      colorScheme: {
        amethyst: "amehtyst",
        teal: "teal",
        green: "green",
        red: "red",
        silver: "silver"
      },
      variant: {
        solid:
          "dark:text-black text-white dark:bg-amethyst-400 dark:hover:bg-amethyst-300 dark:active:bg-amethyst-500 dark:disabled:bg-amethyst-800/60 bg-amethyst-500 hover:bg-amethyst-600 active:bg-amethyst-700 disabled:bg-amethyst-200",
        ghost:
          "bg-transparent dark:text-amethyst-300 text-amethyst-700 dark:hover:bg-amethyst-950 dark:active:bg-amethyst-900 hover:bg-amethyst-100 active:bg-amethyst-200 dark:disabled:bg-transparent disabled:bg-transparent disabled:opacity-60",
        outline:
          "bg-transparent border dark:border-amethyst-300 border-amethyst-700 dark:text-amethyst-300 text-amethyst-700 dark:hover:bg-amethyst-950 dark:active:bg-amethyst-900 hover:bg-amethyst-100 active:bg-amethyst-200 dark:disabled:bg-transparent disabled:bg-transparent disabled:opacity-60",
        unstyled: ""
      },

      size: {
        sm: "h-6 px-2 text-sm rounded-sm",
        md: "h-9 px-3 rounded-md",
        lg: "h-11 px-4 text-lg rouned-md"
      }
    },
    compoundVariants: [
      {
        variant: "solid",
        colorScheme: "teal",
        class:
          "dark:bg-teal-400 dark:hover:bg-teal-300 dark:active:bg-teal-500 dark:disabled:bg-teal-800/60 bg-teal-500 hover:bg-teal-600 active:bg-teal-700 disabled:bg-teal-200"
      },
      {
        variant: "ghost",
        colorScheme: "teal",
        class:
          "bg-transparent dark:text-teal-300 text-teal-700 dark:hover:bg-teal-950 dark:active:bg-teal-900 hover:bg-teal-100 active:bg-teal-200 dark:disabled:bg-transparent disabled:bg-transparent disabled:opacity-60"
      },
      {
        variant: "outline",
        colorScheme: "teal",
        class:
          "bg-transparent border dark:border-teal-300 border-teal-700 dark:text-teal-300 text-teal-700 dark:hover:bg-teal-950 dark:active:bg-teal-900 hover:bg-teal-100 active:bg-teal-200 dark:disabled:bg-transparent disabled:bg-transparent disabled:opacity-60"
      },
      {
        variant: "solid",
        colorScheme: "green",
        class:
          "dark:bg-green-400 dark:hover:bg-green-300 dark:active:bg-green-500 dark:disabled:bg-green-800/60 bg-green-500 hover:bg-green-600 active:bg-green-700 disabled:bg-green-200"
      },
      {
        variant: "ghost",
        colorScheme: "green",
        class:
          "bg-transparent dark:text-green-300 text-green-700 dark:hover:bg-green-950 dark:active:bg-green-900 hover:bg-green-100 active:bg-green-200 dark:disabled:bg-transparent disabled:bg-transparent disabled:opacity-60"
      },
      {
        variant: "outline",
        colorScheme: "green",
        class:
          "bg-transparent border dark:border-green-300 border-green-700 dark:text-green-300 text-green-700 dark:hover:bg-green-950 dark:active:bg-green-900 hover:bg-green-100 active:bg-green-200 dark:disabled:bg-transparent disabled:bg-transparent disabled:opacity-60"
      },
      {
        variant: "solid",
        colorScheme: "red",
        class:
          "dark:bg-red-400 dark:hover:bg-red-300 dark:active:bg-red-500 dark:disabled:bg-red-800/60 bg-red-500 hover:bg-red-600 active:bg-red-700 disabled:bg-red-200"
      },
      {
        variant: "ghost",
        colorScheme: "red",
        class:
          "bg-transparent dark:text-red-300 text-red-700 dark:hover:bg-red-950 dark:active:bg-red-900 hover:bg-red-100 active:bg-red-200 dark:disabled:bg-transparent disabled:bg-transparent disabled:opacity-60"
      },
      {
        variant: "outline",
        colorScheme: "red",
        class:
          "bg-transparent border dark:border-red-300 border-red-700 dark:text-red-300 text-red-700 dark:hover:bg-red-950 dark:active:bg-red-900 hover:bg-red-100 active:bg-red-200 dark:disabled:bg-transparent disabled:bg-transparent disabled:opacity-60"
      },
      {
        variant: "solid",
        colorScheme: "silver",
        class:
          "dark:text-white text-black dark:bg-silver-400/20 dark:hover:bg-silver-300/30 dark:active:bg-silver-500/50 dark:disabled:bg-silver-800/60 bg-silver-500/20 hover:bg-silver-600/30 active:bg-silver-700/60 disabled:bg-silver-200"
      },
      {
        variant: "ghost",
        colorScheme: "silver",
        class:
          "dark:text-white text-black bg-transparent dark:hover:bg-silver-950 dark:active:bg-silver-900 hover:bg-silver-100 active:bg-silver-200 dark:disabled:bg-transparent disabled:bg-transparent disabled:opacity-60"
      },
      {
        variant: "outline",
        colorScheme: "silver",
        class:
          "dark:text-white text-black bg-transparent border dark:border-silver-300 border-silver-700 dark:hover:bg-silver-950 dark:active:bg-silver-900 hover:bg-silver-100 active:bg-silver-200 dark:disabled:bg-transparent disabled:bg-transparent disabled:opacity-60"
      }
    ],
    defaultVariants: {
      variant: "solid",
      size: "md"
    }
  }
);

interface ButtonProps
  extends ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants> {}

interface ButtonComponent
  extends ForwardRefExoticComponent<
    ButtonProps & RefAttributes<HTMLButtonElement>
  > {
  Icon: typeof ButtonIcon;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      colorScheme = "amethyst",
      variant = "solid",
      size = "md",
      ...props
    },
    ref
  ) => {
    return (
      <button
        {...props}
        ref={ref}
        className={cn(
          buttonVariants({ className, colorScheme, variant, size })
        )}
      />
    );
  }
) as ButtonComponent;

const buttonIconVariants = cva(
  "inline-flex items-center justify-center font-semibold select-none cursor-pointer transition-colors disabled:cursor-not-allowed",
  {
    variants: {
      colorScheme: {
        amethyst: "amehtyst",
        teal: "teal",
        green: "green",
        red: "red",
        silver: "silver"
      },
      variant: {
        solid:
          "dark:text-black text-white dark:bg-amethyst-400 dark:hover:bg-amethyst-300 dark:active:bg-amethyst-500 dark:disabled:bg-amethyst-800/60 bg-amethyst-500 hover:bg-amethyst-600 active:bg-amethyst-700 disabled:bg-amethyst-200",
        ghost:
          "bg-transparent dark:text-amethyst-300 text-amethyst-700 dark:hover:bg-amethyst-950 dark:active:bg-amethyst-900 hover:bg-amethyst-100 active:bg-amethyst-200 dark:disabled:bg-transparent disabled:bg-transparent disabled:opacity-60",
        outline:
          "bg-transparent border dark:border-amethyst-300 border-amethyst-700 dark:text-amethyst-300 text-amethyst-700 dark:hover:bg-amethyst-950 dark:active:bg-amethyst-900 hover:bg-amethyst-100 active:bg-amethyst-200 dark:disabled:bg-transparent disabled:bg-transparent disabled:opacity-60",
        unstyled: ""
      },

      size: {
        sm: "w-6 h-6 rounded",
        md: "w-9 h-9 rounded-md",
        lg: "w-11 h-11 rounded-md"
      }
    },
    compoundVariants: [
      {
        variant: "solid",
        colorScheme: "teal",
        class:
          "dark:bg-teal-400 dark:hover:bg-teal-300 dark:active:bg-teal-500 dark:disabled:bg-teal-800/60 bg-teal-500 hover:bg-teal-600 active:bg-teal-700 disabled:bg-teal-200"
      },
      {
        variant: "ghost",
        colorScheme: "teal",
        class:
          "bg-transparent dark:text-teal-300 text-teal-700 dark:hover:bg-teal-950 dark:active:bg-teal-900 hover:bg-teal-100 active:bg-teal-200 dark:disabled:bg-transparent disabled:bg-transparent disabled:opacity-60"
      },
      {
        variant: "outline",
        colorScheme: "teal",
        class:
          "bg-transparent border dark:border-teal-300 border-teal-700 dark:text-teal-300 text-teal-700 dark:hover:bg-teal-950 dark:active:bg-teal-900 hover:bg-teal-100 active:bg-teal-200 dark:disabled:bg-transparent disabled:bg-transparent disabled:opacity-60"
      },
      {
        variant: "solid",
        colorScheme: "green",
        class:
          "dark:bg-green-400 dark:hover:bg-green-300 dark:active:bg-green-500 dark:disabled:bg-green-800/60 bg-green-500 hover:bg-green-600 active:bg-green-700 disabled:bg-green-200"
      },
      {
        variant: "ghost",
        colorScheme: "green",
        class:
          "bg-transparent dark:text-green-300 text-green-700 dark:hover:bg-green-950 dark:active:bg-green-900 hover:bg-green-100 active:bg-green-200 dark:disabled:bg-transparent disabled:bg-transparent disabled:opacity-60"
      },
      {
        variant: "outline",
        colorScheme: "green",
        class:
          "bg-transparent border dark:border-green-300 border-green-700 dark:text-green-300 text-green-700 dark:hover:bg-green-950 dark:active:bg-green-900 hover:bg-green-100 active:bg-green-200 dark:disabled:bg-transparent disabled:bg-transparent disabled:opacity-60"
      },
      {
        variant: "solid",
        colorScheme: "red",
        class:
          "dark:bg-red-400 dark:hover:bg-red-300 dark:active:bg-red-500 dark:disabled:bg-red-800/60 bg-red-500 hover:bg-red-600 active:bg-red-700 disabled:bg-red-200"
      },
      {
        variant: "ghost",
        colorScheme: "red",
        class:
          "bg-transparent dark:text-red-300 text-red-700 dark:hover:bg-red-950 dark:active:bg-red-900 hover:bg-red-100 active:bg-red-200 dark:disabled:bg-transparent disabled:bg-transparent disabled:opacity-60"
      },
      {
        variant: "outline",
        colorScheme: "red",
        class:
          "bg-transparent border dark:border-red-300 border-red-700 dark:text-red-300 text-red-700 dark:hover:bg-red-950 dark:active:bg-red-900 hover:bg-red-100 active:bg-red-200 dark:disabled:bg-transparent disabled:bg-transparent disabled:opacity-60"
      },
      {
        variant: "solid",
        colorScheme: "silver",
        class:
          "dark:text-white text-black dark:bg-silver-400/20 dark:hover:bg-silver-300/30 dark:active:bg-silver-500/50 dark:disabled:bg-silver-800/60 bg-silver-500/20 hover:bg-silver-600/30 active:bg-silver-700/60 disabled:bg-silver-200"
      },
      {
        variant: "ghost",
        colorScheme: "silver",
        class:
          "dark:text-white text-black bg-transparent dark:hover:bg-silver-950 dark:active:bg-silver-900 hover:bg-silver-100 active:bg-silver-200 dark:disabled:bg-transparent disabled:bg-transparent disabled:opacity-60"
      },
      {
        variant: "outline",
        colorScheme: "silver",
        class:
          "dark:text-white text-black bg-transparent border dark:border-silver-300 border-silver-700 dark:hover:bg-silver-950 dark:active:bg-silver-900 hover:bg-silver-100 active:bg-silver-200 dark:disabled:bg-transparent disabled:bg-transparent disabled:opacity-60"
      }
    ]
  }
);

interface ButtonIconProps
  extends ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonIconVariants> {}

const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  (
    {
      className,
      colorScheme = "amethyst",
      variant = "solid",
      size = "md",
      ...props
    },
    ref
  ) => {
    return (
      <button
        {...props}
        ref={ref}
        className={cn(
          buttonIconVariants({ className, colorScheme, variant, size })
        )}
      />
    );
  }
);

Button.displayName = "Button";
Button.Icon = ButtonIcon;

export { Button };
