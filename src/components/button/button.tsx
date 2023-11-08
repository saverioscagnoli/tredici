import React, {
  ComponentPropsWithoutRef,
  forwardRef,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes
} from "react";
import { c, cn } from "../../lib";
import { useTheme } from "../tredici";
import { ColorScheme } from "../../types";
import { ButtonSize, ButtonVariant } from "./button.types";

const buttonSchemes = {
  amethyst: {
    solid:
      "dark:text-black text-white dark:bg-amethyst-400 dark:hover:bg-amethyst-300 dark:active:bg-amethyst-500 bg-amethyst-500 hover:bg-amethyst-600 active:bg-amethyst-700 disabled:opacity-70 disabled:bg-amethyst-800",
    outline:
      "shadow dark:text-amethyst-300 text-amethyst-700 bg-transparent border dark:border-amethyst-300 dark:hover:bg-amethyst-950 dark:active:bg-amethyst-900 border-amethyst-700 hover:bg-amethyst-200 active:bg-amethyst-300 disabled:opacity-70",
    ghost:
      "dark:text-amethyst-300 text-amethyst-700 bg-transparent dark:hover:bg-amethyst-950 dark:active:bg-amethyst-900 hover:bg-amethyst-200 active:bg-amethyst-300 disabled:opacity-70"
  },
  teal: {
    solid:
      "dark:text-black text-white dark:bg-teal-400 dark:hover:bg-teal-300 dark:active:bg-teal-500 bg-teal-500 hover:bg-teal-600 active:bg-teal-700 disabled:opacity-70 disabled:bg-teal-800",
    outline:
      "shadow dark:text-teal-300 text-teal-700 bg-transparent border dark:border-teal-300 dark:hover:bg-teal-950 dark:active:bg-teal-900 border-teal-700 hover:bg-teal-200 active:bg-teal-300 disabled:opacity-70",
    ghost:
      "dark:text-teal-300 text-teal-700 bg-transparent dark:hover:bg-teal-950 dark:active:bg-teal-900 hover:bg-teal-200 active:bg-teal-300 disabled:opacity-70"
  },
  green: {
    solid:
      "dark:text-black text-white dark:bg-green-400 dark:hover:bg-green-300 dark:active:bg-green-500 bg-green-500 hover:bg-green-600 active:bg-green-700 disabled:opacity-70 disabled:bg-green-800",
    outline:
      "shadow dark:text-green-300 text-green-700 bg-transparent border dark:border-green-300 dark:hover:bg-green-950 dark:active:bg-green-900 border-green-700 hover:bg-green-200 active:bg-green-300 disabled:opacity-70",
    ghost:
      "dark:text-green-300 text-green-700 bg-transparent dark:hover:bg-green-950 dark:active:bg-green-900 hover:bg-green-200 active:bg-green-300 disabled:opacity-70"
  },
  crimson: {
    solid:
      "dark:text-black text-white dark:bg-crimson-400 dark:hover:bg-crimson-300 dark:active:bg-crimson-500 bg-crimson-500 hover:bg-crimson-600 active:bg-crimson-700 disabled:opacity-70 disabled:bg-crimson-800",
    outline:
      "shadow dark:text-crimson-300 text-crimson-700 bg-transparent border dark:border-crimson-300 dark:hover:bg-crimson-950 dark:active:bg-crimson-900 border-crimson-700 hover:bg-crimson-200 active:bg-crimson-300 disabled:opacity-70",
    ghost:
      "dark:text-crimson-300 text-crimson-700 bg-transparent dark:hover:bg-crimson-950 dark:active:bg-crimson-900 hover:bg-crimson-200 active:bg-crimson-300 disabled:opacity-70"
  },
  starship: {
    solid:
      "dark:text-black text-white dark:bg-starship-400 dark:hover:bg-starship-300 dark:active:bg-starship-500 bg-starship-500 hover:bg-starship-600 active:bg-starship-700 disabled:opacity-70 disabled:bg-starship-800",
    outline:
      "shadow dark:text-starship-300 text-starship-700 bg-transparent border dark:border-starship-300 dark:hover:bg-starship-950 dark:active:bg-starship-900 border-starship-700 hover:bg-starship-200 active:bg-starship-300 disabled:opacity-70",
    ghost:
      "dark:text-starship-300 text-starship-700 bg-transparent dark:hover:bg-starship-950 dark:active:bg-starship-900 hover:bg-starship-200 active:bg-starship-300 disabled:opacity-70"
  },
  blue: {
    solid:
      "text-white dark:bg-blue-400 dark:hover:bg-blue-300 dark:active:bg-blue-500 bg-blue-500 hover:bg-blue-600 active:bg-blue-700 disabled:opacity-70 disabled:bg-blue-800",
    outline:
      "shadow dark:text-blue-300 text-blue-700 bg-transparent border dark:border-blue-300 dark:hover:bg-blue-950 dark:active:bg-blue-900 border-blue-700 hover:bg-blue-200 active:bg-blue-300 disabled:opacity-70",
    ghost:
      "dark:text-blue-300 text-blue-700 bg-transparent dark:hover:bg-blue-950 dark:active:bg-blue-900 hover:bg-blue-200 active:bg-blue-300 disabled:opacity-70"
  },
  pink: {
    solid:
      "text-white dark:bg-pink-400 dark:hover:bg-pink-300 dark:active:bg-pink-500 bg-pink-500 hover:bg-pink-600 active:bg-pink-700 disabled:opacity-70 disabled:bg-pink-800",
    outline:
      "shadow dark:text-pink-300 text-pink-700 bg-transparent border dark:border-pink-300 dark:hover:bg-pink-950 dark:active:bg-pink-900 border-pink-700 hover:bg-pink-200 active:bg-pink-300 disabled:opacity-70",
    ghost:
      "dark:text-pink-300 text-pink-700 bg-transparent dark:hover:bg-pink-950 dark:active:bg-pink-900 hover:bg-pink-200 active:bg-pink-300 disabled:opacity-70"
  },
  gray: {
    solid:
      "dark:text-white text-black dark:bg-gray-400/20 dark:hover:bg-gray-300/30 dark:active:bg-gray-500/50 bg-gray-500/20 hover:bg-gray-600/30 active:bg-gray-700/50 disabled:opacity-70 disabled:bg-gray-800",
    outline:
      "shadow dark:text-white text-black bg-transparent border dark:border-gray-700 dark:hover:bg-gray-950 dark:active:bg-gray-900 border-gray-300 hover:bg-gray-200 active:bg-gray-300 disabled:opacity-70",
    ghost:
      "dark:text-white text-black bg-transparent dark:hover:bg-gray-950 dark:active:bg-gray-900 hover:bg-gray-200 active:bg-gray-300 disabled:opacity-70"
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

interface ButtonComponent
  extends ForwardRefExoticComponent<
    ButtonProps & RefAttributes<HTMLButtonElement>
  > {
  Icon: typeof ButtonIcon;
}

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  colorScheme?: ColorScheme;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      colorScheme = useTheme().defaultColorScheme,
      variant = "solid",
      size,
      ...props
    },
    ref
  ) => {
    return (
      <button
        {...props}
        ref={ref}
        className={
          variant == "unstyled"
            ? className
            : button({ className, [colorScheme]: variant, size })
        }
      />
    );
  }
) as ButtonComponent;

const buttonIcon = c(
  "inline-flex justify-center items-center select-none cursor-pointer transition-colors disabled:cursor-not-allowed",
  {
    ...buttonSchemes,
    size: {
      sm: "w-6 h-6 rounded",
      md: "w-9 h-9 rounded-md",
      lg: "w-11 h-11 rounded-md"
    }
  },
  { size: "md" }
);

interface ButtonIconProps extends ComponentPropsWithoutRef<"button"> {
  colorScheme?: ColorScheme;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  round?: boolean;
}

const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  (
    {
      className,
      colorScheme = useTheme().defaultColorScheme,
      variant = "solid",
      size,
      icon,
      round,
      ...props
    },
    ref
  ) => {
    return (
      <button
        {...props}
        ref={ref}
        className={cn(
          buttonIcon({ className, [colorScheme]: variant, size }),
          round && "rounded-full"
        )}
      >
        {icon}
      </button>
    );
  }
);

Button.Icon = ButtonIcon;

export { Button };
