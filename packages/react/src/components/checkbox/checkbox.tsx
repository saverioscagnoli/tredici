import * as RxCheckbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { cva } from "class-variance-authority";
import { ReactNode, forwardRef } from "react";

type CheckboxColorScheme =
  | "amethyst"
  | "teal"
  | "green"
  | "red"
  | "yellow"
  | "blue"
  | "b/w";
type CheckboxSize = "sm" | "md" | "lg";

interface CheckboxProps extends RxCheckbox.CheckboxProps {
  /**
   * The color scheme of the checkbox.
   * @default "amethyst"
   */
  colorScheme?: CheckboxColorScheme;

  /**
   * The size of the checkbox.
   * @default "md"
   */
  size?: CheckboxSize;

  /**
   * The icon to display when the checkbox is checked.
   * @default <CheckIcon /> from @radix-ui/react-icons
   */
  icon?: ReactNode;
}

const checkboxVariants = cva(
  "bg-transparent inline-flex items-center border border-gray-700/75 dark:border-gray-500 data-[state='checked']:border-none disabled:cursor-not-allowed disabled:opacity-70",
  {
    variants: {
      colorScheme: {
        amethyst: [
          "data-[state='checked']:bg-amethyst-500 text-white",
          "data-[state='checked']:dark:bg-amethyst-400 dark:text-black"
        ],
        teal: [
          "data-[state='checked']:bg-teal-500 text-white",
          "data-[state='checked']:dark:bg-teal-400 dark:text-black"
        ],
        green: [
          "data-[state='checked']:bg-green-500 text-white",
          "data-[state='checked']:dark:bg-green-400 dark:text-black"
        ],
        red: [
          "data-[state='checked']:bg-red-500 text-white",
          "data-[state='checked']:dark:bg-red-400 dark:text-black"
        ],
        yellow: [
          "data-[state='checked']:bg-yellow-500 text-black",
          "data-[state='checked']:dark:bg-yellow-400 dark:text-black"
        ],
        blue: [
          "data-[state='checked']:bg-blue-500 text-white",
          "data-[state='checked']:dark:bg-blue-400 dark:text-black"
        ],
        "b/w": [
          "data-[state='checked']:bg-black text-white",
          "data-[state='checked']:dark:bg-white dark:text-black"
        ]
      },
      size: {
        sm: "w-3.5 h-3.5 justify-center rounded text-sm",
        md: "w-4 h-4 rounded",
        lg: "w-5 h-5 justify-center rounded-md"
      }
    },
    defaultVariants: {
      colorScheme: "amethyst",
      size: "md"
    }
  }
);

const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    {
      className,
      colorScheme = "amethyst",
      size = "md",
      icon = <CheckIcon />,
      ...props
    },
    ref
  ) => {
    return (
      <RxCheckbox.Root
        ref={ref}
        className={checkboxVariants({ className, colorScheme, size })}
        {...props}
      >
        <RxCheckbox.Indicator>{icon}</RxCheckbox.Indicator>
      </RxCheckbox.Root>
    );
  }
);

Checkbox.displayName = "Checkbox";

export { Checkbox };
export type { CheckboxProps, CheckboxColorScheme, CheckboxSize };
