import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import { ComponentPropsWithoutRef, ReactNode, forwardRef } from "react";

type IconButtonVariant = "solid" | "outline" | "ghost";

type IconButtonColorScheme =
  | "purple"
  | "teal"
  | "green"
  | "red"
  | "yellow"
  | "blue"
  | "b/w"
  | "gray";

type IconButtonSize = "sm" | "md" | "lg";

const iconButtonVariants = cva(
  [
    "inline-flex justify-center items-center",
    "transition-colors",
    "select-none",
    "disabled:cursor-not-allowed"
  ],
  {
    compoundVariants: [
      {
        variant: "solid",
        colorScheme: "purple",
        className: [
          "text-white",
          "dark:text-black",
          "bg-purple-500",
          "hover:bg-purple-600",
          "active:bg-purple-700",
          ["disabled:opacity-50", "disabled:bg-purple-500"]
        ]
      },
      {
        variant: "outline",
        colorScheme: "purple",
        className: [
          "bg-transparent border",
          "border-purple-500",
          "text-purple-500",
          [
            "hover:bg-purple-100",
            "active:bg-purple-200",
            "dark:hover:bg-purple-950",
            "dark:active:bg-purple-900"
          ],
          [
            "disabled:opacity-50",
            "disabled:bg-transparent",
            "dark:disabled:bg-transparent"
          ]
        ]
      },
      {
        variant: "ghost",
        colorScheme: "purple",
        className: [
          "bg-transparent",
          "text-purple-500",
          [
            "hover:bg-purple-100",
            "active:bg-purple-200",
            "dark:hover:bg-purple-950",
            "dark:active:bg-purple-900"
          ],
          [
            "disabled:opacity-50",
            "disabled:bg-transparent",
            "dark:disabled:bg-transparent"
          ]
        ]
      },
      {
        variant: "solid",
        colorScheme: "teal",
        className: [
          "text-white",
          "dark:text-black",
          "bg-teal-500",
          "hover:bg-teal-600",
          "active:bg-teal-700",
          [
            "disabled:opacity-50",
            "disabled:bg-teal-500",
            "dark:disabled:bg-teal-500"
          ]
        ]
      },
      {
        variant: "outline",
        colorScheme: "teal",
        className: [
          "bg-transparent border",
          "border-teal-500",
          "text-teal-500",
          [
            "hover:bg-teal-100",
            "active:bg-teal-200",
            "dark:hover:bg-teal-950",
            "dark:active:bg-teal-900"
          ],
          [
            "disabled:opacity-50",
            "disabled:bg-transparent",
            "dark:disabled:bg-transparent"
          ]
        ]
      },
      {
        variant: "ghost",
        colorScheme: "teal",
        className: [
          "bg-transparent",
          "text-teal-500",
          [
            "hover:bg-teal-100",
            "active:bg-teal-200",
            "dark:hover:bg-teal-950",
            "dark:active:bg-teal-900"
          ],
          [
            "disabled:opacity-50",
            "disabled:bg-transparent",
            "dark:disabled:bg-transparent"
          ]
        ]
      },
      {
        variant: "solid",
        colorScheme: "green",
        className: [
          "text-white",
          "dark:text-black",
          "bg-green-500",
          "hover:bg-green-600",
          "active:bg-green-700",
          [
            "disabled:opacity-50",
            "disabled:bg-green-500",
            "dark:disabled:bg-green-500"
          ]
        ]
      },
      {
        variant: "outline",
        colorScheme: "green",
        className: [
          "bg-transparent border",
          "border-green-500",
          "text-green-500",
          [
            "hover:bg-green-100",
            "active:bg-green-200",
            "dark:hover:bg-green-950",
            "dark:active:bg-green-900"
          ],
          [
            "disabled:opacity-50",
            "disabled:bg-transparent",
            "dark:disabled:bg-transparent"
          ]
        ]
      },
      {
        variant: "ghost",
        colorScheme: "green",
        className: [
          "bg-transparent",
          "text-green-500",
          [
            "hover:bg-green-100",
            "active:bg-green-200",
            "dark:hover:bg-green-950",
            "dark:active:bg-green-900"
          ],
          [
            "disabled:opacity-50",
            "disabled:bg-transparent",
            "dark:disabled:bg-transparent"
          ]
        ]
      },
      {
        variant: "solid",
        colorScheme: "red",
        className: [
          "text-white",
          "dark:text-black",
          "bg-red-500",
          "hover:bg-red-600",
          "active:bg-red-700",
          [
            "disabled:opacity-50",
            "disabled:bg-red-500",
            "dark:disabled:bg-red-500"
          ]
        ]
      },
      {
        variant: "outline",
        colorScheme: "red",
        className: [
          "bg-transparent border",
          "border-red-500",
          "text-red-500",
          [
            "hover:bg-red-100",
            "active:bg-red-200",
            "dark:hover:bg-red-950",
            "dark:active:bg-red-900"
          ],
          [
            "disabled:opacity-50",
            "disabled:bg-transparent",
            "dark:disabled:bg-transparent"
          ]
        ]
      },
      {
        variant: "ghost",
        colorScheme: "red",
        className: [
          "bg-transparent",
          "text-red-500",
          [
            "hover:bg-red-100",
            "active:bg-red-200",
            "dark:hover:bg-red-950",
            "dark:active:bg-red-900"
          ],
          [
            "disabled:opacity-50",
            "disabled:bg-transparent",
            "dark:disabled:bg-transparent"
          ]
        ]
      },
      {
        variant: "solid",
        colorScheme: "yellow",
        className: [
          "text-black",
          "bg-yellow-500",
          "hover:bg-yellow-600",
          "active:bg-yellow-700",
          [
            "disabled:opacity-50",
            "disabled:bg-yellow-500",
            "dark:disabled:bg-yellow-500"
          ]
        ]
      },
      {
        variant: "outline",
        colorScheme: "yellow",
        className: [
          "bg-transparent border",
          "border-yellow-500",
          "text-yellow-500",
          [
            "hover:bg-yellow-100",
            "active:bg-yellow-200",
            "dark:hover:bg-yellow-950",
            "dark:active:bg-yellow-900"
          ],
          [
            "disabled:opacity-50",
            "disabled:bg-transparent",
            "dark:disabled:bg-transparent"
          ]
        ]
      },
      {
        variant: "ghost",
        colorScheme: "yellow",
        className: [
          "bg-transparent",
          "text-yellow-500",
          [
            "hover:bg-yellow-100",
            "active:bg-yellow-200",
            "dark:hover:bg-yellow-950",
            "dark:active:bg-yellow-900"
          ],
          [
            "disabled:opacity-50",
            "disabled:bg-transparent",
            "dark:disabled:bg-transparent"
          ]
        ]
      },
      {
        variant: "solid",
        colorScheme: "blue",
        className: [
          "text-white",
          "dark:text-black",
          "bg-blue-500",
          "hover:bg-blue-600",
          "active:bg-blue-700",
          [
            "disabled:opacity-50",
            "disabled:bg-blue-500",
            "dark:disabled:bg-blue-500"
          ]
        ]
      },
      {
        variant: "outline",
        colorScheme: "blue",
        className: [
          "bg-transparent border",
          "border-blue-500",
          "text-blue-500",
          [
            "hover:bg-blue-100",
            "active:bg-blue-200",
            "dark:hover:bg-blue-950",
            "dark:active:bg-blue-900"
          ],
          [
            "disabled:opacity-50",
            "disabled:bg-transparent",
            "dark:disabled:bg-transparent"
          ]
        ]
      },
      {
        variant: "ghost",
        colorScheme: "blue",
        className: [
          "bg-transparent",
          "text-blue-500",
          [
            "hover:bg-blue-100",
            "active:bg-blue-200",
            "dark:hover:bg-blue-950",
            "dark:active:bg-blue-900"
          ],
          [
            "disabled:opacity-50",
            "disabled:bg-transparent",
            "dark:disabled:bg-transparent"
          ]
        ]
      },
      {
        variant: "solid",
        colorScheme: "b/w",
        className: [
          [
            "text-white",
            "bg-dark",
            "hover:bg-gray-900",
            "dark:text-black",
            "dark:bg-light",
            "dark:hover:bg-gray-200"
          ],
          ["disabled:opacity-50", "disabled:bg-dark", "dark:disabled:bg-light"]
        ]
      },
      {
        variant: "outline",
        colorScheme: "b/w",
        className: [
          "bg-transparent border",
          [
            "border-dark",
            "text-black",
            "hover:bg-gray-100",
            "dark:border-light",
            "dark:text-white",
            "dark:hover:bg-gray-800"
          ],
          [
            "disabled:opacity-50",
            "disabled:bg-transparent",
            "dark:disabled:bg-transparent"
          ]
        ]
      },

      {
        variant: "ghost",
        colorScheme: "b/w",
        className: [
          "bg-transparent",
          [
            "text-black",
            "hover:bg-dark",
            "hover:text-white",
            "dark:text-white",
            "dark:hover:bg-light",
            "dark:hover:text-black"
          ],
          [
            "disabled:opacity-50",
            "disabled:bg-transparent",
            "disabled:text-black",
            "dark:disabled:bg-transparent",
            "dark:disabled:text-white"
          ]
        ]
      },
      {
        variant: "solid",
        colorScheme: "gray",
        className: [
          [
            ["bg-gray-500/20", "hover:bg-gray-600/30", "active:bg-gray-700/50"],
            [
              "dark:bg-gray-400/20",
              "dark:hover:bg-gray-300/30",
              "dark:active:bg-gray-500/50",
              "dark:text-white"
            ]
          ],
          ["disabled:opacity-50", "disabled:bg-gray-500/20"]
        ]
      },
      {
        variant: "outline",
        colorScheme: "gray",
        className: [
          "bg-transparent border shadow",
          [
            [
              "border-gray-700/20",
              "hover:bg-gray-500/20",
              "active:bg-gray-600/30",
              "text-black"
            ],
            [
              "dark:border-gray-300/20",
              "dark:hover:bg-gray-400/20",
              "dark:active:bg-gray-300/30",
              "dark:text-white"
            ]
          ],
          [
            "disabled:opacity-50",
            "disabled:bg-transparent",
            "dark:disabled:bg-transparent"
          ]
        ]
      },
      {
        variant: "ghost",
        colorScheme: "gray",
        className: [
          "bg-transparent",
          [
            [
              "border-gray-700/20",
              "hover:bg-gray-500/20",
              "active:bg-gray-600/30",
              "text-black"
            ],
            [
              "dark:border-gray-300/20",
              "dark:hover:bg-gray-400/20",
              "dark:active:bg-gray-300/30",
              "dark:text-white"
            ]
          ],
          [
            "disabled:opacity-50",
            "disabled:bg-transparent",
            "dark:disabled:bg-transparent"
          ]
        ]
      }
    ],
    variants: {
      variant: {
        solid: "",
        outline: "",
        ghost: "",
        link: ""
      },
      colorScheme: {
        purple: "",
        teal: "",
        green: "",
        red: "",
        yellow: "",
        blue: "",
        "b/w": "",
        gray: ""
      },
      size: {
        sm: "w-6 h-6 rounded",
        md: "w-8 h-8 rounded-md",
        lg: "w-11 h-11 rounded-xl"
      }
    },
    defaultVariants: {
      colorScheme: "purple",
      size: "md"
    }
  }
);

type IconButtonProps = ComponentPropsWithoutRef<"button"> & {
  variant?: IconButtonVariant;
  colorScheme?: IconButtonColorScheme;
  size?: IconButtonSize;
  icon?: ReactNode;
  round?: boolean;
};

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant = "solid",
      colorScheme = "purple",
      size = "md",
      icon,
      round,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={iconButtonVariants({
          className: cn(round && "!rounded-full", className),
          variant,
          colorScheme,
          size
        })}
        {...props}
        ref={ref}
      >
        {icon}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

export { IconButton };
export type {
  IconButtonProps,
  IconButtonVariant,
  IconButtonColorScheme,
  IconButtonSize
};
