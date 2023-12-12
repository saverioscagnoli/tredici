import React, {
  ComponentPropsWithoutRef,
  forwardRef,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes
} from "react";
import { c, cn, dark } from "../../lib";
import { useTheme } from "../tredici";
import { ColorScheme } from "../../types";

const buttonSchemes = {
  amethyst: {
    solid:
      "bg-amethyst-500 hover:bg-amethyst-600 active:bg-amethyst-700 disabled:bg-amethyst-200/75 disabled:text-amethyst-700/50 disabled:hover:bg-amethyst-200/75 text-fafafa" +
      " dark:bg-amethyst-400 dark:hover:bg-amethyst-300 dark:active:bg-amethyst-500 dark:disabled:bg-amethyst-600/75 dark:disabled:text-amethyst-200/50 dark:disabled:hover:bg-amethyst-600/75 dark:text-18181b",
    outline:
      "bg-transparent border border-amethyst-700 text-amethyst-700 hover:bg-amethyst-200 active:bg-amethyst-300 disabled:hover:bg-transparent border-amethyst-700/50 disabled:text-amethyst-700/50" +
      " dark:border border-amethyst-300 dark:text-amethyst-300 dark:hover:bg-amethyst-950 dark:active:bg-amethyst-900 dark:disabled:hover:bg-transparent dark:border-amethyst-300/50 dark:disabled:text-amethyst-300/50",
    ghost:
      "bg-transparent text-amethyst-700 hover:bg-amethyst-200 active:bg-amethyst-300 disabled:hover:bg-transparent disabled:text-amethyst-700/50" +
      " dark:text-amethyst-300 dark:hover:bg-amethyst-950 dark:active:bg-amethyst-900 dark:disabled:hover:bg-transparent dark:disabled:text-amethyst-300/50"
  },

  teal: {
    solid:
      "bg-teal-500 hover:bg-teal-600 active:bg-teal-700 disabled:bg-teal-200/75 disabled:text-teal-700/50 disabled:hover:bg-teal-200/75 text-fafafa" +
      " dark:bg-teal-400 dark:hover:bg-teal-300 dark:active:bg-teal-500 dark:disabled:bg-teal-600/75 dark:disabled:text-teal-200/50 dark:disabled:hover:bg-teal-600/75 dark:text-18181b",
    outline:
      "bg-transparent border border-teal-700 text-teal-700 hover:bg-teal-200 active:bg-teal-300 disabled:hover:bg-transparent border-teal-700/50 disabled:text-teal-700/50" +
      " dark:border border-teal-300 dark:text-teal-300 dark:hover:bg-teal-950 dark:active:bg-teal-900 dark:disabled:hover:bg-transparent dark:border-teal-300/50 dark:disabled:text-teal-300/50",
    ghost:
      "bg-transparent text-teal-700 hover:bg-teal-200 active:bg-teal-300 disabled:hover:bg-transparent disabled:text-teal-700/50" +
      " dark:text-teal-300 dark:hover:bg-teal-950 dark:active:bg-teal-900 dark:disabled:hover:bg-transparent dark:disabled:text-teal-300/50"
  },

  green: {
    solid:
      "bg-green-500 hover:bg-green-600 active:bg-green-700 disabled:bg-green-200/75 disabled:text-green-700/50 disabled:hover:bg-green-200/75 text-fafafa" +
      " dark:bg-green-400 dark:hover:bg-green-300 dark:active:bg-green-500 dark:disabled:bg-green-600/75 dark:disabled:text-green-200/50 dark:disabled:hover:bg-green-600/75 dark:text-18181b",
    outline:
      "bg-transparent border border-green-700 text-green-700 hover:bg-green-200 active:bg-green-300 disabled:hover:bg-transparent border-green-700/50 disabled:text-green-700/50" +
      " dark:border border-green-300 dark:text-green-300 dark:hover:bg-green-950 dark:active:bg-green-900 dark:disabled:hover:bg-transparent dark:border-green-300/50 dark:disabled:text-green-300/50",
    ghost:
      "bg-transparent text-green-700 hover:bg-green-200 active:bg-green-300 disabled:hover:bg-transparent disabled:text-green-700/50" +
      " dark:text-green-300 dark:hover:bg-green-950 dark:active:bg-green-900 dark:disabled:hover:bg-transparent dark:disabled:text-green-300/50"
  },

  crimson: {
    solid:
      "bg-crimson-500 hover:bg-crimson-600 active:bg-crimson-700 disabled:bg-crimson-200/75 disabled:text-crimson-700/50 disabled:hover:bg-crimson-200/75 text-fafafa" +
      " dark:bg-crimson-400 dark:hover:bg-crimson-300 dark:active:bg-crimson-500 dark:disabled:bg-crimson-600/75 dark:disabled:text-crimson-200/50 dark:disabled:hover:bg-crimson-600/75 dark:text-18181b",
    outline:
      "bg-transparent border border-crimson-700 text-crimson-700 hover:bg-crimson-200 active:bg-crimson-300 disabled:hover:bg-transparent border-crimson-700/50 disabled:text-crimson-700/50" +
      " dark:border border-crimson-300 dark:text-crimson-300 dark:hover:bg-crimson-950 dark:active:bg-crimson-900 dark:disabled:hover:bg-transparent dark:border-crimson-300/50 dark:disabled:text-crimson-300/50",
    ghost:
      "bg-transparent text-crimson-700 hover:bg-crimson-200 active:bg-crimson-300 disabled:hover:bg-transparent disabled:text-crimson-700/50" +
      " dark:text-crimson-300 dark:hover:bg-crimson-950 dark:active:bg-crimson-900 dark:disabled:hover:bg-transparent dark:disabled:text-crimson-300/50"
  },

  yellow: {
    solid:
      "bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 disabled:bg-yellow-200/75 disabled:text-yellow-700/50 disabled:hover:bg-yellow-200/75 text-fafafa" +
      " dark:bg-yellow-400 dark:hover:bg-yellow-300 dark:active:bg-yellow-500 dark:disabled:bg-yellow-600/75 dark:disabled:text-yellow-200/50 dark:disabled:hover:bg-yellow-600/75 dark:text-18181b",
    outline:
      "bg-transparent border border-yellow-700 text-yellow-700 hover:bg-yellow-200 active:bg-yellow-300 disabled:hover:bg-transparent border-yellow-700/50 disabled:text-yellow-700/50" +
      " dark:border border-yellow-300 dark:text-yellow-300 dark:hover:bg-yellow-950 dark:active:bg-yellow-900 dark:disabled:hover:bg-transparent dark:border-yellow-300/50 dark:disabled:text-yellow-300/50",
    ghost:
      "bg-transparent text-yellow-700 hover:bg-yellow-200 active:bg-yellow-300 disabled:hover:bg-transparent disabled:text-yellow-700/50" +
      " dark:text-yellow-300 dark:hover:bg-yellow-950 dark:active:bg-yellow-900 dark:disabled:hover:bg-transparent dark:disabled:text-yellow-300/50"
  },

  blue: {
    solid:
      "bg-blue-500 hover:bg-blue-600 active:bg-blue-700 disabled:bg-blue-200/75 disabled:text-blue-700/50 disabled:hover:bg-blue-200/75 text-fafafa" +
      " dark:bg-blue-400 dark:hover:bg-blue-300 dark:active:bg-blue-500 dark:disabled:bg-blue-600/75 dark:disabled:text-blue-200/50 dark:disabled:hover:bg-blue-600/75 dark:text-18181b",
    outline:
      "bg-transparent border border-blue-700 text-blue-700 hover:bg-blue-200 active:bg-blue-300 disabled:hover:bg-transparent border-blue-700/50 disabled:text-blue-700/50" +
      " dark:border border-blue-300 dark:text-blue-300 dark:hover:bg-blue-950 dark:active:bg-blue-900 dark:disabled:hover:bg-transparent dark:border-blue-300/50 dark:disabled:text-blue-300/50",
    ghost:
      "bg-transparent text-blue-700 hover:bg-blue-200 active:bg-blue-300 disabled:hover:bg-transparent disabled:text-blue-700/50" +
      " dark:text-blue-300 dark:hover:bg-blue-950 dark:active:bg-blue-900 dark:disabled:hover:bg-transparent dark:disabled:text-blue-300/50"
  },

  pink: {
    solid:
      "bg-pink-500 hover:bg-pink-600 active:bg-pink-700 disabled:bg-pink-200/75 disabled:text-pink-700/50 disabled:hover:bg-pink-200/75 text-fafafa" +
      " dark:bg-pink-400 dark:hover:bg-pink-300 dark:active:bg-pink-500 dark:disabled:bg-pink-600/75 dark:disabled:text-pink-200/50 dark:disabled:hover:bg-pink-600/75 dark:text-18181b",
    outline:
      "bg-transparent border border-pink-700 text-pink-700 hover:bg-pink-200 active:bg-pink-300 disabled:hover:bg-transparent border-pink-700/50 disabled:text-pink-700/50" +
      " dark:border border-pink-300 dark:text-pink-300 dark:hover:bg-pink-950 dark:active:bg-pink-900 dark:disabled:hover:bg-transparent dark:border-pink-300/50 dark:disabled:text-pink-300/50",
    ghost:
      "bg-transparent text-pink-700 hover:bg-pink-200 active:bg-pink-300 disabled:hover:bg-transparent disabled:text-pink-700/50" +
      " dark:text-pink-300 dark:hover:bg-pink-950 dark:active:bg-pink-900 dark:disabled:hover:bg-transparent dark:disabled:text-pink-300/50"
  },

  "b/w": {
    solid:
      "bg-18181b hover:bg-0c0c0e disabled:bg-18181b/75 disabled:text-18181b/50 disabled:hover:bg-18181b/75 text-fafafa" +
      " dark:bg-fafafa dark:hover:bg-ededed dark:disabled:bg-fafafa/75 dark:disabled:text-fafafa/50 dark:disabled:hover:bg-fafafa/75 dark:text-18181b",
    outline:
      "shadow bg-transparent border border-18181b text-18181b hover:bg-18181b/20 active:bg-18181b/30 disabled:hover:bg-transparent border-18181b/50 disabled:text-18181b/50" +
      " dark:border-fafafa dark:text-fafafa dark:hover:bg-fafafa/20 dark:active:bg-fafafa/30 dark:disabled:hover:bg-transparent dark:border-fafafa/50 dark:disabled:text-fafafa/50",
    ghost:
      "bg-transparent text-18181b hover:bg-18181b/20 active:bg-18181b/30 disabled:hover:bg-transparent disabled:text-18181b/50" +
      " dark:text-fafafa dark:hover:bg-fafafa/20 dark:active:bg-fafafa/30 dark:disabled:hover:bg-transparent dark:disabled:text-fafafa/50"
  },
  gray: {
    solid:
      "dark:text-white text-black dark:bg-gray-400/20 dark:hover:bg-gray-300/30 dark:active:bg-gray-500/50 bg-gray-500/20 hover:bg-gray-600/30 active:bg-gray-700/50 disabled:opacity-70 disabled:bg-gray-800 disabled:hover:bg-gray-800 dark:disabled:bg-gray-800 dark:disabled:hover:bg-gray-800",
    outline:
      "shadow dark:text-white text-black bg-transparent border dark:border-gray-700 dark:hover:bg-gray-950 dark:active:bg-gray-900 border-gray-300 hover:bg-gray-200 active:bg-gray-300 disabled:opacity-70 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent",
    ghost:
      "dark:text-white text-black bg-transparent dark:hover:bg-gray-950 dark:active:bg-gray-900 hover:bg-gray-200 active:bg-gray-300 disabled:opacity-70 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent"
  }
};

const button = c(
  "inline-flex justify-center items-center font-semibold select-none cursor-pointer transition-colors disabled:cursor-not-allowed",
  {
    ...buttonSchemes,
    size: {
      sm: "h-6 px-2 text-sm rounded-sm",
      md: "h-9 px-3 rounded-md",
      lg: "h-11 px-4 text-lg rouned-md"
    }
  },
  { size: "md" }
);

export interface ButtonComponent
  extends ForwardRefExoticComponent<
    ButtonProps & RefAttributes<HTMLButtonElement>
  > {
  Icon: typeof ButtonIcon;
}

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  /**
   * The color scheme of the button.
   * @type ColorScheme | "gray"
   * @default useTheme().defaultColorScheme
   */
  colorScheme?: ColorScheme | "gray";

  /**
   * The variant of the button.
   * @default "solid"
   */
  variant?: "solid" | "outline" | "ghost" | "unstyled";

  /**
   * The size of the button.
   * @default "md"
   */
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      colorScheme = useTheme().defaultColorScheme,
      variant = "solid",
      size = "md",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        {...props}
        className={
          variant === "unstyled"
            ? className
            : button({ className, [colorScheme]: variant, size })
        }
        ref={ref}
      />
    );
  }
) as ButtonComponent;

const buttonIcon = c(
  "inline-flex justify-center items-center font-semibold select-none cursor-pointer transition-colors disabled:cursor-not-allowed",
  {
    ...buttonSchemes,
    size: {
      sm: "w-6 h-6 text-sm rounded-sm",
      md: "w-9 h-9 rounded-md",
      lg: "w-11 h-11 text-lg rouned-md"
    }
  },
  { size: "md" }
);

interface ButtonIconProps extends ButtonProps {
  /**
   * The icon to display on the button.
   */
  icon?: ReactNode;

  /**
   * Whether the icon should be displayed in the background.
   */
  round?: boolean;
}

const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  (
    {
      colorScheme = useTheme().defaultColorScheme,
      variant = "solid",
      size = "md",
      icon,
      className,
      round,
      ...props
    },
    ref
  ) => {
    return (
      <button
        {...props}
        ref={ref}
        className={
          variant === "unstyled"
            ? className
            : cn(buttonIcon({ className, [colorScheme]: variant, size }), round && "rounded-full")
        }
      >
        {icon}
      </button>
    );
  }
);

Button.Icon = ButtonIcon;

export { Button };
