import * as RxAvatar from "@radix-ui/react-avatar";
import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode, RefObject } from "react";
import type React from "react";
import { PersonIcon } from "@radix-ui/react-icons";

import "@radix-ui/colors/slate.css";
import "@radix-ui/colors/slate-dark.css";

import "@radix-ui/colors/plum.css";
import "@radix-ui/colors/plum-dark.css";

import "@radix-ui/colors/red.css";
import "@radix-ui/colors/red-dark.css";

import "@radix-ui/colors/blue.css";
import "@radix-ui/colors/blue-dark.css";

import "@radix-ui/colors/teal.css";
import "@radix-ui/colors/teal-dark.css";

import "@radix-ui/colors/cyan.css";
import "@radix-ui/colors/cyan-dark.css";

import "@radix-ui/colors/green.css";
import "@radix-ui/colors/green-dark.css";

import "@radix-ui/colors/amber.css";
import "@radix-ui/colors/amber-dark.css";

import "@radix-ui/colors/orange.css";
import "@radix-ui/colors/orange-dark.css";

import "@radix-ui/colors/gray.css";
import "@radix-ui/colors/gray-dark.css";

const avatarVariants = cva(
  [
    "inline-flex justify-center items-center",
    "align-middle",
    "overflow-hidden",
    "select-none",
    "rounded-full"
  ],
  {
    variants: {
      size: {
        sm: "w-8 h-8 text-xs",
        md: "w-10 h-10",
        lg: "w-12 h-12 text-lg",
        xl: "w-16 h-16 text-2xl"
      },
      colorScheme: {
        plum: "bg-[var(--plum-5)] text-[var(--plum-11)]",
        red: "bg-[var(--red-5)] text-[var(--red-11)]",
        blue: "bg-[var(--blue-5)] text-[var(--blue-11)]",
        teal: "bg-[var(--teal-5)] text-[var(--teal-11)]",
        cyan: "bg-[var(--cyan-5)] text-[var(--cyan-11)]",
        green: "bg-[var(--green-5)] text-[var(--green-11)]",
        amber: "bg-[var(--amber-5)] text-[var(--amber-11)]",
        orange: "bg-[var(--orange-5)] text-[var(--orange-11)]",
        gray: "bg-[var(--gray-5)] text-[var(--slate-12)]"
      }
    },
    defaultVariants: {
      size: "md",
      colorScheme: "plum"
    }
  }
);

type AvatarProps = RxAvatar.AvatarProps &
  VariantProps<typeof avatarVariants> & {
    ref?: RefObject<HTMLSpanElement>;
    src?: string;
    fallback?: ReactNode | string;
    imageProps?: Omit<RxAvatar.AvatarImageProps, "src">;
    fallbackProps?: Omit<RxAvatar.AvatarFallbackProps, "children">;
  };

export type { AvatarProps };

const Avatar: React.FC<AvatarProps> = ({
  src,
  fallback,
  size = "md",
  colorScheme,
  imageProps,
  fallbackProps,
  className,
  ...props
}) => {
  return (
    <RxAvatar.Root
      {...props}
      className={avatarVariants({ className, size, colorScheme })}
    >
      <RxAvatar.Image
        className="w-full h-full rounded-[inherit]"
        src={src}
        {...imageProps}
      />
      <RxAvatar.Fallback {...fallbackProps}>
        {fallback
          ? fallback
          : (() => {
              let sizeMap = {
                sm: 18,
                md: 22,
                lg: 25,
                xl: 32
              };

              let iconSize = sizeMap[size!];

              return <PersonIcon width={iconSize} height={iconSize} />;
            })()}
      </RxAvatar.Fallback>
    </RxAvatar.Root>
  );
};

Avatar.displayName = "Avatar";

export { Avatar };
