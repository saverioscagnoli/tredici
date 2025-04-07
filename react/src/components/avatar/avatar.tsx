import * as RxAvatar from "@radix-ui/react-avatar";
import { PersonIcon } from "@radix-ui/react-icons";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

import "@radix-ui/colors/slate.css";
import "@radix-ui/colors/slate-dark.css";

import "@radix-ui/colors/plum.css";
import "@radix-ui/colors/plum-dark.css";

import "@radix-ui/colors/red.css";
import "@radix-ui/colors/red-dark.css";

import "@radix-ui/colors/green.css";
import "@radix-ui/colors/green-dark.css";

import "@radix-ui/colors/blue.css";
import "@radix-ui/colors/blue-dark.css";

import "@radix-ui/colors/teal.css";
import "@radix-ui/colors/teal-dark.css";

import "@radix-ui/colors/cyan.css";
import "@radix-ui/colors/cyan-dark.css";

import "@radix-ui/colors/amber.css";
import "@radix-ui/colors/amber-dark.css";

import "@radix-ui/colors/orange.css";
import "@radix-ui/colors/orange-dark.css";

import "@radix-ui/colors/gray-alpha.css";
import "@radix-ui/colors/gray-dark-alpha.css";

const avatarVariants = cva(
  [
    "inline-flex justify-center items-center shrink-0",
    "align-middle",
    "overflow-hidden",
    "select-none",
    "rounded-full"
  ],
  {
    variants: {
      colorScheme: {
        plum: "bg-[var(--plum-5)] text-[var(--plum-12)]",
        red: "bg-[var(--red-5)] text-[var(--red-12)]",
        green: "bg-[var(--green-5)] text-[var(--green-12)]",
        blue: "bg-[var(--blue-5)] text-[var(--blue-12)]",
        teal: "bg-[var(--teal-5)] text-[var(--teal-12)]",
        cyan: "bg-[var(--cyan-5)] text-[var(--cyan-12)]",
        amber: "bg-[var(--amber-5)] text-[var(--amber-12)]",
        orange: "bg-[var(--orange-5)] text-[var(--orange-12)]",
        gray: "bg-[var(--gray-5)] text-[var(--gray-12)]"
      },

      variant: {
        solid: "",
        secondary: ""
      },

      ring: {
        plum: "outline-2 outline-offset-2 outline-[var(--plum-9)]",
        red: "outline-2 outline-offset-2 outline-[var(--red-9)]",
        green: "outline-2 outline-offset-2 outline-[var(--green-9)]",
        blue: "outline-2 outline-offset-2 outline-[var(--blue-9)]",
        teal: "outline-2 outline-offset-2 outline-[var(--teal-9)]",
        cyan: "outline-2 outline-offset-2 outline-[var(--cyan-9)]",
        amber: "outline-2 outline-offset-2 outline-[var(--amber-9)]",
        orange: "outline-2 outline-offset-2 outline-[var(--orange-9)]",
        gray: "outline-2 outline-offset-2 outline-[var(--gray-9)]"
      },

      size: {
        sm: "w-8 h-8 text-xs",
        md: "w-10 h-10 text-sm",
        lg: "w-12 h-12 text-lg",
        xl: "w-16 h-16 text-xl"
      }
    },
    compoundVariants: [
      {
        variant: "solid",
        colorScheme: "plum",
        className:
          "bg-[var(--plum-9)] text-[var(--slate-1)] dark:text-[var(--slate-12)]"
      },
      {
        variant: "secondary",
        colorScheme: "plum",
        className: "bg-[var(--plum-5)] text-[var(--plum-12)]"
      },
      {
        variant: "solid",
        colorScheme: "red",
        className:
          "bg-[var(--red-9)] text-[var(--slate-1)] dark:text-[var(--slate-12)]"
      },
      {
        variant: "secondary",
        colorScheme: "red",
        className: "bg-[var(--red-5)] text-[var(--red-12)]"
      },
      {
        variant: "solid",
        colorScheme: "green",
        className:
          "bg-[var(--green-9)] text-[var(--slate-1)] dark:text-[var(--slate-12)]"
      },
      {
        variant: "secondary",
        colorScheme: "green",
        className: "bg-[var(--green-5)] text-[var(--green-12)]"
      },
      {
        variant: "solid",
        colorScheme: "blue",
        className:
          "bg-[var(--blue-9)] text-[var(--slate-1)] dark:text-[var(--slate-12)]"
      },
      {
        variant: "secondary",
        colorScheme: "blue",
        className: "bg-[var(--blue-5)] text-[var(--blue-12)]"
      },
      {
        variant: "solid",
        colorScheme: "teal",
        className:
          "bg-[var(--teal-9)] text-[var(--slate-1)] dark:text-[var(--slate-12)]"
      },
      {
        variant: "secondary",
        colorScheme: "teal",
        className: "bg-[var(--teal-5)] text-[var(--teal-12)]"
      },
      {
        variant: "solid",
        colorScheme: "cyan",
        className:
          "bg-[var(--cyan-9)] text-[var(--slate-1)] dark:text-[var(--slate-12)]"
      },
      {
        variant: "secondary",
        colorScheme: "cyan",
        className: "bg-[var(--cyan-5)] text-[var(--cyan-12)]"
      },
      {
        variant: "solid",
        colorScheme: "amber",
        className:
          "bg-[var(--amber-9)] text-[var(--slate-12)] dark:text-[var(--slate-1)]"
      },
      {
        variant: "secondary",
        colorScheme: "amber",
        className: "bg-[var(--amber-5)] text-[var(--amber-12)]"
      },
      {
        variant: "solid",
        colorScheme: "orange",
        className: "bg-[var(--orange-9)] text-[var(--slate-1)]"
      },
      {
        variant: "secondary",
        colorScheme: "orange",
        className: "bg-[var(--orange-5)] text-[var(--orange-12)]"
      },
      {
        variant: "solid",
        colorScheme: "gray",
        className: "bg-[var(--slate-12)] text-[var(--slate-1)]"
      },
      {
        variant: "secondary",
        colorScheme: "gray",
        className: "bg-[var(--slate-5)] text-[var(--slate-12)]"
      }
    ],
    defaultVariants: {
      colorScheme: "plum",
      size: "md"
    }
  }
);

type AvatarProps = RxAvatar.AvatarProps &
  VariantProps<typeof avatarVariants> & {
    ref?: React.RefObject<HTMLSpanElement>;
    src?: string;
    fallback?: React.ReactNode | string;
  };

const Avatar: React.FC<AvatarProps> = ({
  ref,
  className,
  colorScheme,
  variant,
  size,
  src,
  fallback,
  ring,
  ...props
}) => {
  if (!src && !fallback) {
    let iconSize: number;

    switch (size) {
      case "sm": {
        iconSize = 15;
        break;
      }

      case "md": {
        iconSize = 20;
        break;
      }

      case "lg": {
        iconSize = 22;
        break;
      }

      case "xl": {
        iconSize = 28;
        break;
      }

      default: {
        iconSize = 18;
        break;
      }
    }

    fallback = <PersonIcon width={iconSize} height={iconSize} />;
  }

  return (
    <RxAvatar.Root
      className={avatarVariants({
        className,
        colorScheme,
        variant,
        size,
        ring
      })}
      {...props}
      ref={ref}
    >
      <RxAvatar.Image
        className="w-full h-full object-cover rounded-[inherit]"
        src={src}
      />
      <RxAvatar.Fallback>{fallback}</RxAvatar.Fallback>
    </RxAvatar.Root>
  );
};

Avatar.displayName = "Avatar";

export { Avatar };
export type { AvatarProps };
