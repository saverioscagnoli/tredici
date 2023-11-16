import { useTheme } from "../tredici";
import { c } from "../../lib";
import React, { forwardRef, ComponentPropsWithoutRef } from "react";
import { ColorScheme } from "../../types";

const input = c(
  "w-40 h-9 p-1 bg-transparent rounded-md border shadow font-semibold border-gray-600/40 focus:outline focus:outline-2",
  {
    colorScheme: {
      amethyst:
        "dark:focus:outline-amethyst-300 focus:outline-amethyst-500 dark:selection:bg-amethyst-300/30 selection:bg-amethyst-500/50",
      teal: "dark:focus:outline-teal-300 focus:outline-teal-500 dark:selection:bg-teal-300/30 selection:bg-teal-500/50",
      green:
        "dark:focus:outline-green-300 focus:outline-green-500 dark:selection:bg-green-300/30 selection:bg-green-500/50",
      crimson:
        "dark:focus:outline-crimson-300 focus:outline-crimson-500 dark:selection:bg-crimson-300/30 selection:bg-crimson-500/50",
      starship:
        "dark:focus:outline-starship-300 focus:outline-starship-500 dark:selection:bg-starship-300/30 selection:bg-starship-500/50",
      blue: "dark:focus:outline-blue-300 focus:outline-blue-500 dark:selection:bg-blue-300/30 selection:bg-blue-500/50",
      pink: "dark:focus:outline-pink-300 focus:outline-pink-500 dark:selection:bg-pink-300/30 selection:bg-pink-500/50",
      gray: "dark:focus:outline-fafafa focus:outline-18181b dark:selection:bg-gray-300/30 selection:bg-gray-500/50"
    }
  }
);

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  colorScheme?: ColorScheme;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, colorScheme = useTheme().defaultColorScheme, ...props },
    ref
  ) => {
    console.log(input({ className, colorScheme }));

    return (
      <input
        {...props}
        ref={ref}
        className={input({ className, colorScheme })}
      />
    );
  }
);

export { Input };
