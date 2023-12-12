import React, { ComponentPropsWithoutRef, forwardRef } from "react";
import { c } from "../../lib";
import { ColorScheme } from "../../types";
import { useTheme } from "../tredici";

const badge = c("px-1 py-[1px] text-xs rounded font-semibold tracking-wider", {
  amethyst: {
    solid:
      "bg-amethyst-500 text-fafafa" + " dark:bg-amethyst-300 dark:text-18181b",
    outline:
      "bg-transparent text-amethyst-500 border  border-amethyst-500" +
      " dark:text-amethyst-300 dark:border-amethyst-300"
  },
  teal: {
    solid: "dark:bg-teal-400 bg-teal-500 text-fafafa dark:text-18181b",
    outline:
      "bg-transparent text-teal-500 border border-teal-500 dark:text-teal-400 dark:border-teal-400"
  },
  green: {
    solid: "dark:bg-green-400 bg-green-500 text-fafafa dark:text-18181b",
    outline:
      "bg-transparent text-green-500 border border-green-500 dark:text-green-400 dark:border-green-400"
  },
  crimson: {
    solid: "dark:bg-crimson-400 bg-crimson-500 text-fafafa",
    outline:
      "bg-transparent text-crimson-500 border border-crimson-500 dark:text-crimson-400 dark:border-crimson-400"
  },
  yellow: {
    solid: "dark:bg-yellow-400 bg-yellow-500 text-18181b",
    outline:
      "bg-transparent text-yellow-500 border border-yellow-500 dark:text-yellow-400 dark:border-yellow-400"
  },
  blue: {
    solid: "bg-blue-500 text-fafafa",
    outline:
      "bg-transparent text-blue-500 border border-blue-500 dark:text-blue-400 dark:border-blue-400"
  },
  pink: {
    solid: "bg-pink-500 text-fafafa",
    outline:
      "bg-transparent text-pink-500 border border-pink-500 dark:text-pink-400 dark:border-pink-400"
  },
  "b/w": {
    solid: "dark:bg-fafafa bg-18181b dark:text-18181b text-fafafa",
    outline:
      "bg-transparent dark:text-fafafa text-18181b border dark:border-fafafa border-18181b"
  }
});

export interface BadgeProps extends ComponentPropsWithoutRef<"span"> {
  /**
   * The text to display inside the badge.
   */
  label?: string;

  /**
   * The color scheme of the badge.
   * @see ColorScheme
   */
  colorScheme?: ColorScheme;

  /**
   * The variant of the badge.
   * @default "solid"
   */
  variant?: "solid" | "outline";
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  (
    {
      label,
      className,
      colorScheme = useTheme().defaultColorScheme,
      variant = "solid",
      ...props
    },
    ref
  ) => {
    return (
      <span
        {...props}
        ref={ref}
        className={badge({ className, [colorScheme]: variant })}
      >
        {label}
      </span>
    );
  }
);

export { Badge };
