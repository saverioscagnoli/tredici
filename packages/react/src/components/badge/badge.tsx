import React, { ComponentPropsWithoutRef, forwardRef } from "react";
import { c } from "../../lib";
import { ColorScheme } from "../../types";
import { useTheme } from "../tredici";

const badge = c("px-1 py-[1px] text-xs rounded font-semibold tracking-wider", {
  amethyst: {
    solid: "dark:bg-amethyst-400/60 bg-amethyst-500/60 text-fafafa",
    outline:
      "bg-transparent dark:text-amethyst-400 text-amethyst-500 border dark:border-amethyst-400 border-amethyst-500"
  },
  teal: {
    solid: "dark:bg-teal-400/60 bg-teal-500/60 text-fafafa",
    outline:
      "bg-transparent dark:text-teal-400 text-teal-500 border dark:border-teal-400 border-teal-500"
  },
  green: {
    solid: "dark:bg-green-400/60 bg-green-500/60 text-fafafa",
    outline:
      "bg-transparent dark:text-green-400 text-green-500 border dark:border-green-400 border-green-500"
  },
  crimson: {
    solid: "dark:bg-crimson-400/60 bg-crimson-500/60 text-fafafa",
    outline:
      "bg-transparent dark:text-crimson-400 text-crimson-500 border dark:border-crimson-400 border-crimson-500"
  },
  starship: {
    solid:
      "dark:bg-starship-400/60 bg-starship-500/60 dark:text-fafafa text-18181b",
    outline:
      "bg-transparent dark:text-starship-400 text-starship-500 border dark:border-starship-400 border-starship-500"
  },
  blue: {
    solid: "dark:bg-blue-400/60 bg-blue-500/60 text-fafafa",
    outline:
      "bg-transparent dark:text-blue-400 text-blue-500 border dark:border-blue-400 border-blue-500"
  },
  pink: {
    solid: "dark:bg-pink-400/60 bg-pink-500/60 text-fafafa",
    outline:
      "bg-transparent dark:text-pink-400 text-pink-500 border dark:border-pink-400 border-pink-500"
  },
  gray: {
    solid: "dark:bg-fafafa bg-18181b dark:text-18181b text-fafafa",
    outline: "bg-transparent dark:text-fafafa text-18181b border dark:border-fafafa border-18181b"
  }
});

interface BadgeProps extends ComponentPropsWithoutRef<"div"> {
  label?: string;
  colorScheme?: ColorScheme;
  variant?: "solid" | "outline";
}

const Badge = forwardRef<HTMLDivElement, BadgeProps>(
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
      <div
        {...props}
        ref={ref}
        className={badge({ className, [colorScheme]: variant })}
      >
        {label}
      </div>
    );
  }
);

export { Badge };
