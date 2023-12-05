import React, { forwardRef, ComponentPropsWithoutRef, ReactNode } from "react";
import * as RxCheckbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { c } from "../../lib";
import { ColorScheme } from "../../types";
import { useTheme } from "../tredici";

const checkbox = c(
  "w-4 h-4 inline-flex items-center rounded",
  {
    colorScheme: {
      amethyst:
        "dark:text-black text-white data-[state='unchecked']:border dark:data-[state='unchecked']:border-gray-300 data-[state='unchecked']:border-gray-700 dark:data-[state='checked']:bg-amethyst-400 data-[state='checked']:bg-amethyst-500",
      teal: "dark:text-black text-white data-[state='unchecked']:border dark:data-[state='unchecked']:border-gray-300 data-[state='unchecked']:border-gray-700 dark:data-[state='checked']:bg-teal-400 data-[state='checked']:bg-teal-500",
      green:
        "dark:text-black text-white data-[state='unchecked']:border dark:data-[state='unchecked']:border-gray-300 data-[state='unchecked']:border-gray-700 dark:data-[state='checked']:bg-green-400 data-[state='checked']:bg-green-500",
      crimson:
        "dark:text-black text-white data-[state='unchecked']:border dark:data-[state='unchecked']:border-gray-300 data-[state='unchecked']:border-gray-700 dark:data-[state='checked']:bg-crimson-400 data-[state='checked']:bg-crimson-500",
      starship:
        "text-black data-[state='unchecked']:border dark:data-[state='unchecked']:border-gray-300 data-[state='unchecked']:border-gray-700 dark:data-[state='checked']:bg-starship-500 data-[state='checked']:bg-starship-500",
      blue: "text-white data-[state='unchecked']:border dark:data-[state='unchecked']:border-gray-300 data-[state='unchecked']:border-gray-700 dark:data-[state='checked']:bg-blue-400 data-[state='checked']:bg-blue-500",
      pink: "text-white data-[state='unchecked']:border dark:data-[state='unchecked']:border-gray-300 data-[state='unchecked']:border-gray-700 dark:data-[state='checked']:bg-pink-400 data-[state='checked']:bg-pink-500",
      gray: "dark:bg-fafafa bg-18181b dark:text-18181b text-fafafa"
    }
  },
  { colorScheme: "amethyst" }
);

interface CheckboxProps extends  RxCheckbox.CheckboxProps{
  colorScheme?: ColorScheme;
  icon?: ReactNode;
}

const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    {
      className,
      colorScheme = useTheme().defaultColorScheme,
      icon = <CheckIcon />,
      ...props
    },
    ref
  ) => {
    return (
      <RxCheckbox.Root
        {...props}
        ref={ref}
        className={checkbox({ className, colorScheme })}
      >
        <RxCheckbox.Indicator>{icon}</RxCheckbox.Indicator>
      </RxCheckbox.Root>
    );
  }
);

export { Checkbox };
