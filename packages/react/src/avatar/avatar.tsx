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

const avatar = cva(
  [
    "inline-flex justify-center items-center",
    "align-middle",
    "overflow-hidden",
    "select-none",
    "rounded-full",
    "shadow",
    "text-[var(--slate-1)]"
  ],
  {
    variants: {
      colorScheme: {
        purple: "bg-[var(--plum-9)]",
        red: "bg-[var(--red-9)]",
        green: "bg-[var(--green-9)]",
        blue: "bg-[var(--blue-9)]",
        teal: "bg-[var(--teal-9)]",
        cyan: "bg-[var(--cyan-9)]",
        yellow:
          "bg-[var(--amber-9)] text-[var(--slate-12)] dark:text-[var(--slate-1)]",
        orange: "bg-[var(--orange-9)]",
        gray: "bg-[var(--gray-a5)] text-[var(--slate-12)]",
        "b/w": "bg-[var(--slate-12)] text-[var(--slate-1)]"
      },

      size: {
        sm: "w-8 h-8 text-xs",
        md: "w-11 h-11",
        lg: "w-12 h-12 text-lg",
        xl: "w-16 h-16 text-2xl"
      }
    },
    defaultVariants: {
      colorScheme: "purple",
      size: "md"
    }
  }
);

type AvatarProps = RxAvatar.AvatarProps &
  VariantProps<typeof avatar> & {
    ref?: React.RefObject<HTMLSpanElement>;
    src?: string;
    fallback?: React.ReactNode | string;
  };

const Avatar: React.FC<AvatarProps> = ({
  ref,
  className,
  colorScheme,
  size,
  src,
  fallback,
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
        iconSize = 22;
        break;
      }

      case "lg": {
        iconSize = 25;
        break;
      }

      case "xl": {
        iconSize = 30;
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
      className={avatar({ className, colorScheme, size })}
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
