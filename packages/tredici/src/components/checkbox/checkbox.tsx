import * as RxCheckbox from "@radix-ui/react-checkbox";
import { ReactNode, forwardRef } from "react";
import { cva } from "class-variance-authority";
import { CheckIcon } from "@radix-ui/react-icons";

type CheckboxColorScheme =
  | "purple"
  | "teal"
  | "green"
  | "red"
  | "yellow"
  | "blue"
  | "b/w"
  | "gray";

type CheckboxSize = "sm" | "md" | "lg";

const checkboxVariants = cva(
  [
    "bg-transparent",
    "inline-flex items-center justify-center",
    "border-2",
    "data-[state='checked']:border-none",
    ["border-gray-500/50", "dark:border-gray-500"],
    ["disabled:cursor-not-allowed", "disabled:opacity-50"]
  ],
  {
    variants: {
      colorScheme: {
        purple: [
          "data-[state='checked']:bg-purple-500",
          ["text-light", "dark:text-dark"]
        ],
        teal: [
          "data-[state='checked']:bg-teal-500",
          ["text-light", "dark:text-dark"]
        ],
        green: [
          "data-[state='checked']:bg-green-500",
          ["text-light", "dark:text-dark"]
        ],
        red: ["data-[state='checked']:bg-red-500", "text-light"],
        yellow: ["data-[state='checked']:bg-yellow-500", "text-dark"],
        blue: [
          "data-[state='checked']:bg-blue-500",
          ["text-light", "dark:text-dark"]
        ],
        "b/w": [
          [
            "data-[state='checked']:bg-dark",
            "data-[state='checked']:text-light",
            "data-[state='checked']:dark:bg-light",
            "data-[state='checked']:dark:text-dark"
          ]
        ],
        gray: [
          [
            "data-[state='checked']:bg-gray-500/25",
            "data-[state='checked']:dark:bg-gray-500/50",
            "text-dark",
            "dark:text-light"
          ]
        ]
      },
      size: {
        sm: "w-3 h-3 rounded-sm text-sm",
        md: "w-[17px] h-[17px] rounded",
        lg: "w-[21px] h-[21px] rounded-md"
      }
    },
    defaultVariants: {
      colorScheme: "purple",
      size: "md"
    }
  }
);

type CheckboxProps = RxCheckbox.CheckboxProps & {
  colorScheme?: CheckboxColorScheme;
  size?: CheckboxSize;
  icon?: ReactNode;
};

const checkboxIconSize = {
  sm: 12,
  md: 15,
  lg: 18
};

const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  (
    {
      className,
      colorScheme = "purple",
      size = "md",
      icon = (
        <CheckIcon
          width={checkboxIconSize[size]}
          height={checkboxIconSize[size]}
        />
      ),
      ...props
    },
    ref
  ) => {
    return (
      <RxCheckbox.Root
        className={checkboxVariants({ className, colorScheme, size })}
        {...props}
        ref={ref}
      >
        <RxCheckbox.Indicator children={icon} />
      </RxCheckbox.Root>
    );
  }
);

Checkbox.displayName = RxCheckbox.Root.displayName;

export { Checkbox };
export type { CheckboxProps, CheckboxColorScheme, CheckboxSize };
