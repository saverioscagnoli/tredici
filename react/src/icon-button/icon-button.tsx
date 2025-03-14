import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "~/lib/utils";

const iconButton = cva(
  [
    "inline-flex justify-center items-center",
    "transition-colors duration-150 active:duration-75",

    // Make text unselectable
    "select-none",

    // Disabled props
    "disabled:opacity-50 disabled:pointer-events-none"
  ],
  {
    variants: {
      colorScheme: {
        purple: null,
        red: null,
        green: null,
        blue: null,
        teal: null,
        cyan: null,
        yellow: null,
        orange: null,
        gray: null
      },

      variant: {
        primary: "text-[var(--slate-1)]",
        secondary: null,
        outline: "border",
        ghost: "bg-transparent"
      },

      size: {
        sm: "w-6 h-6 rounded text-sm",
        md: "w-8 h-8 rounded-md",
        lg: "w-11 h-11 rounded-lg"
      }
    },

    compoundVariants: [
      // Purple color scheme
      // Primary variant
      {
        colorScheme: "purple",
        variant: "primary",
        className: [
          "bg-[var(--plum-9)]",
          // Hover states
          "hover:bg-[var(--plum-10)]",
          // Active states
          "active:bg-[var(--plum-11)]"
        ]
      },
      // Purple color scheme
      // Secondary variant
      {
        colorScheme: "purple",
        variant: "secondary",
        className: [
          "text-[var(--plum-11)]",
          "bg-[var(--plum-5)]",
          // Hover states
          "hover:bg-[var(--plum-5)]",
          // Active states
          "active:bg-[var(--plum-7)]"
        ]
      },
      // Purple color scheme
      // Outline variant
      {
        colorScheme: "purple",
        variant: "outline",
        className: [
          "text-[var(--plum-11)]",
          "border-[var(--plum-9)]",
          "bg-[var(--plum-3)]",
          // Hover states
          "hover:bg-[var(--plum-4)]",
          // Active states
          "active:bg-[var(--plum-5)]"
        ]
      },
      // Purple color scheme
      // Ghost variant
      {
        colorScheme: "purple",
        variant: "ghost",
        className: [
          "text-[var(--plum-11)]",
          // Hover states
          "hover:bg-[var(--plum-4)]",
          // Active states
          "active:bg-[var(--plum-5)]"
        ]
      },
      // Red color scheme
      // Primary variant
      {
        colorScheme: "red",
        variant: "primary",
        className: [
          "bg-[var(--red-9)]",
          // Hover states
          "hover:bg-[var(--red-10)]",
          // Active states
          "active:bg-[var(--red-11)]"
        ]
      },
      // Red color scheme
      // Secondary variant
      {
        colorScheme: "red",
        variant: "secondary",
        className: [
          "text-[var(--red-11)]",
          "bg-[var(--red-5)]",
          // Hover states
          "hover:bg-[var(--red-5)]",
          // Active states
          "active:bg-[var(--red-7)]"
        ]
      },
      // Red color scheme
      // Outline variant
      {
        colorScheme: "red",
        variant: "outline",
        className: [
          "text-[var(--red-11)]",
          "border-[var(--red-9)]",
          "bg-[var(--red-3)]",
          // Hover states
          "hover:bg-[var(--red-4)]",
          // Active states
          "active:bg-[var(--red-5)]"
        ]
      },
      // Red color scheme
      // Ghost variant
      {
        colorScheme: "red",
        variant: "ghost",
        className: [
          "text-[var(--red-11)]",
          // Hover states
          "hover:bg-[var(--red-4)]",
          // Active states
          "active:bg-[var(--red-5)]"
        ]
      },
      // Green color scheme
      // Primary variant
      {
        colorScheme: "green",
        variant: "primary",
        className: [
          "bg-[var(--green-9)]",
          // Hover states
          "hover:bg-[var(--green-10)]",
          // Active states
          "active:bg-[var(--green-11)]"
        ]
      },
      // Green color scheme
      // Secondary variant
      {
        colorScheme: "green",
        variant: "secondary",
        className: [
          "text-[var(--green-11)]",
          "bg-[var(--green-5)]",
          // Hover states
          "hover:bg-[var(--green-5)]",
          // Active states
          "active:bg-[var(--green-7)]"
        ]
      },
      // Green color scheme
      // Outline variant
      {
        colorScheme: "green",
        variant: "outline",
        className: [
          "text-[var(--green-11)]",
          "border-[var(--green-9)]",
          "bg-[var(--green-3)]",
          // Hover states
          "hover:bg-[var(--green-4)]",
          // Active states
          "active:bg-[var(--green-5)]"
        ]
      },
      // Green color scheme
      // Ghost variant
      {
        colorScheme: "green",
        variant: "ghost",
        className: [
          "text-[var(--green-11)]",
          // Hover states
          "hover:bg-[var(--green-4)]",
          // Active states
          "active:bg-[var(--green-5)]"
        ]
      },
      // Blue color scheme
      // Primary variant
      {
        colorScheme: "blue",
        variant: "primary",
        className: [
          "bg-[var(--blue-9)]",
          // Hover states
          "hover:bg-[var(--blue-10)]",
          // Active states
          "active:bg-[var(--blue-11)]"
        ]
      },
      // Blue color scheme
      // Secondary variant
      {
        colorScheme: "blue",
        variant: "secondary",
        className: [
          "text-[var(--blue-11)]",
          "bg-[var(--blue-5)]",
          // Hover states
          "hover:bg-[var(--blue-5)]",
          // Active states
          "active:bg-[var(--blue-7)]"
        ]
      },
      // Blue color scheme,
      // Outline variant
      {
        colorScheme: "blue",
        variant: "outline",
        className: [
          "text-[var(--blue-11)]",
          "border-[var(--blue-9)]",
          "bg-[var(--blue-3)]",
          // Hover states
          "hover:bg-[var(--blue-4)]",
          // Active states
          "active:bg-[var(--blue-5)]"
        ]
      },
      // Blue color scheme
      // Ghost variant
      {
        colorScheme: "blue",
        variant: "ghost",
        className: [
          "text-[var(--blue-11)]",
          // Hover states
          "hover:bg-[var(--blue-4)]",
          // Active states
          "active:bg-[var(--blue-5)]"
        ]
      },
      // Teal color scheme
      // Primary variant
      {
        colorScheme: "teal",
        variant: "primary",
        className: [
          "bg-[var(--teal-9)]",
          // Hover states
          "hover:bg-[var(--teal-10)]",
          // Active states
          "active:bg-[var(--teal-11)]"
        ]
      },
      // Teal color scheme
      // Secondary variant
      {
        colorScheme: "teal",
        variant: "secondary",
        className: [
          "text-[var(--teal-11)]",
          "bg-[var(--teal-5)]",
          // Hover states
          "hover:bg-[var(--teal-5)]",
          // Active states
          "active:bg-[var(--teal-7)]"
        ]
      },
      // Teal color scheme
      // Outline variant
      {
        colorScheme: "teal",
        variant: "outline",
        className: [
          "text-[var(--teal-11)]",
          "border-[var(--teal-9)]",
          "bg-[var(--teal-3)]",
          // Hover states
          "hover:bg-[var(--teal-4)]",
          // Active states
          "active:bg-[var(--teal-5)]"
        ]
      },
      // Teal color scheme
      // Ghost variant
      {
        colorScheme: "teal",
        variant: "ghost",
        className: [
          "text-[var(--teal-11)]",
          // Hover states
          "hover:bg-[var(--teal-4)]",
          // Active states
          "active:bg-[var(--teal-5)]"
        ]
      },
      // Cyan color scheme
      // Primary variant
      {
        colorScheme: "cyan",
        variant: "primary",
        className: [
          "bg-[var(--cyan-9)]",
          // Hover states
          "hover:bg-[var(--cyan-10)]",
          // Active states
          "active:bg-[var(--cyan-11)]"
        ]
      },
      // Cyan color scheme
      // Secondary variant
      {
        colorScheme: "cyan",
        variant: "secondary",
        className: [
          "text-[var(--cyan-11)]",
          "bg-[var(--cyan-5)]",
          // Hover states
          "hover:bg-[var(--cyan-5)]",
          // Active states
          "active:bg-[var(--cyan-7)]"
        ]
      },
      // Cyan color scheme
      // Outline variant
      {
        colorScheme: "cyan",
        variant: "outline",
        className: [
          "text-[var(--cyan-11)]",
          "border-[var(--cyan-9)]",
          "bg-[var(--cyan-3)]",
          // Hover states
          "hover:bg-[var(--cyan-4)]",
          // Active states
          "active:bg-[var(--cyan-5)]"
        ]
      },
      // Cyan color scheme
      // Ghost variant
      {
        colorScheme: "cyan",
        variant: "ghost",
        className: [
          "text-[var(--cyan-11)]",
          // Hover states
          "hover:bg-[var(--cyan-4)]",
          // Active states
          "active:bg-[var(--cyan-5)]"
        ]
      },
      // Yellow color scheme
      // Primary variant
      {
        colorScheme: "yellow",
        variant: "primary",
        className: [
          // Text is not visible on yellow-9 if not black on both light and dark mode
          "text-[var(--slate-12)] dark:text-[var(--slate-1)]",
          "bg-[var(--amber-9)]",
          // Hover states
          "hover:bg-[var(--amber-10)]",
          // Active states
          "active:bg-[var(--amber-11)]"
        ]
      },
      // Yellow color scheme
      // Secondary variant
      {
        colorScheme: "yellow",
        variant: "secondary",
        className: [
          "text-[var(--amber-11)]",
          "bg-[var(--amber-5)]",
          // Hover states
          "hover:bg-[var(--amber-5)]",
          // Active states
          "active:bg-[var(--amber-7)]"
        ]
      },
      // Yellow color scheme
      // Outline variant
      {
        colorScheme: "yellow",
        variant: "outline",
        className: [
          "text-[var(--amber-11)]",
          "border-[var(--amber-9)]",
          "bg-[var(--amber-3)]",
          // Hover states
          "hover:bg-[var(--amber-4)]",
          // Active states
          "active:bg-[var(--amber-5)]"
        ]
      },
      // Yellow color scheme
      // Ghost variant
      {
        colorScheme: "yellow",
        variant: "ghost",
        className: [
          "text-[var(--amber-11)]",
          // Hover states
          "hover:bg-[var(--amber-4)]",
          // Active states
          "active:bg-[var(--amber-5)]"
        ]
      },
      // Orange color scheme
      // Primary variant
      {
        colorScheme: "orange",
        variant: "primary",
        className: [
          "bg-[var(--orange-9)]",
          // Hover states
          "hover:bg-[var(--orange-10)]",
          // Active states
          "active:bg-[var(--orange-11)]"
        ]
      },
      // Orange color scheme
      // Secondary variant
      {
        colorScheme: "orange",
        variant: "secondary",
        className: [
          "text-[var(--orange-11)]",
          "bg-[var(--orange-5)]",
          // Hover states
          "hover:bg-[var(--orange-5)]",
          // Active states
          "active:bg-[var(--orange-7)]"
        ]
      },
      // Orange color scheme
      // Outline variant
      {
        colorScheme: "orange",
        variant: "outline",
        className: [
          "text-[var(--orange-11)]",
          "border-[var(--orange-9)]",
          "bg-[var(--orange-3)]",
          // Hover states
          "hover:bg-[var(--orange-4)]",
          // Active states
          "active:bg-[var(--orange-5)]"
        ]
      },
      // Orange color scheme
      // Ghost variant
      {
        colorScheme: "orange",
        variant: "ghost",
        className: [
          "text-[var(--orange-11)]",
          // Hover states
          "hover:bg-[var(--orange-4)]",
          // Active states
          "active:bg-[var(--orange-5)]"
        ]
      },
      // Gray color scheme
      // Primary variant
      // Basically black and white
      {
        colorScheme: "gray",
        variant: "primary",
        className: [
          "bg-[var(--gray-12)]",
          // Hover states
          "hover:bg-[var(--gray-12)]",
          // Active states
          "active:bg-[var(--gray-11)]",
          // Diabled props
          "disabled:bg-black",
          "disabled:dark:bg-white"
        ]
      },
      // Gray color scheme
      // Secondary variant
      {
        colorScheme: "gray",
        variant: "secondary",
        className: [
          "text-[var(--gray-12)]",
          "bg-[var(--gray-5)]",
          // Hover states
          "hover:bg-[var(--gray-6)]",
          // Active states
          "active:bg-[var(--gray-7)]"
        ]
      },
      // Gray color scheme
      // Outline variant
      {
        colorScheme: "gray",
        variant: "outline",
        className: [
          "text-[var(--gray-12)]",
          "border-[var(--gray-12)]",
          "bg-[var(--gray-3)]",
          // Hover states
          "hover:bg-[var(--gray-4)]",
          // Active states
          "active:bg-[var(--gray-5)]"
        ]
      },
      // Gray color scheme
      // Ghost variant
      {
        colorScheme: "gray",
        variant: "ghost",
        className: [
          "text-[var(--gray-12)]",
          // Hover states
          "hover:bg-[var(--gray-4)]",
          // Active states
          "active:bg-[var(--gray-5)]"
        ]
      }
    ],

    defaultVariants: {
      colorScheme: "purple",
      variant: "primary",
      size: "md"
    }
  }
);

type IconButtonProps = React.ComponentProps<"button"> &
  VariantProps<typeof iconButton> & {
    icon: React.ReactNode;
    round?: boolean;
  };

export type { IconButtonProps };

const IconButton: React.FC<IconButtonProps> = ({
  ref,
  children,
  className,
  colorScheme,
  variant,
  size,
  icon,
  round,
  ...props
}) => {
  return (
    <button
      className={iconButton({
        className: cn(round && "!rounded-full", className),
        colorScheme,
        variant,
        size
      })}
      {...props}
      ref={ref}
    >
      {icon}
    </button>
  );
};

IconButton.displayName = "IconButton";

export { IconButton };
