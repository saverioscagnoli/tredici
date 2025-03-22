import * as RxAvatar from "@radix-ui/react-avatar";
import { PersonIcon } from "@radix-ui/react-icons";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

// const PersonIcon: React.FC<React.SVGAttributes<SVGElement>> = () => (
//   <svg
//     width="15"
//     height="15"
//     viewBox="0 0 15 15"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M7.5 0.875C5.49797 0.875 3.875 2.49797 3.875 4.5C3.875 6.15288 4.98124 7.54738 6.49373 7.98351C5.2997 8.12901 4.27557 8.55134 3.50407 9.31167C2.52216 10.2794 2.02502 11.72 2.02502 13.5999C2.02502 13.8623 2.23769 14.0749 2.50002 14.0749C2.76236 14.0749 2.97502 13.8623 2.97502 13.5999C2.97502 11.8799 3.42786 10.7206 4.17091 9.9883C4.91536 9.25463 6.02674 8.87499 7.49995 8.87499C8.97317 8.87499 10.0846 9.25463 10.8291 9.98831C11.5721 10.7206 12.025 11.8799 12.025 13.5999C12.025 13.8623 12.2376 14.0749 12.5 14.0749C12.7623 14.075 12.975 13.8623 12.975 13.6C12.975 11.72 12.4778 10.2794 11.4959 9.31166C10.7244 8.55135 9.70025 8.12903 8.50625 7.98352C10.0187 7.5474 11.125 6.15289 11.125 4.5C11.125 2.49797 9.50203 0.875 7.5 0.875ZM4.825 4.5C4.825 3.02264 6.02264 1.825 7.5 1.825C8.97736 1.825 10.175 3.02264 10.175 4.5C10.175 5.97736 8.97736 7.175 7.5 7.175C6.02264 7.175 4.825 5.97736 4.825 4.5Z"
//       fill="currentColor"
//       fillRule="evenodd"
//       clipRule="evenodd"
//     ></path>
//   </svg>
// );

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
    "inline-flex justify-center items-center font-medium",
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
        plum: "bg-[var(--plum-9)] text-[var(--slate-1)] dark:text-[var(--slate-12)]",
        red: "bg-[var(--red-9)] text-[var(--slate-1)] dark:text-[var(--slate-12)]",
        green:
          "bg-[var(--green-9)] text-[var(--slate-1)] dark:text-[var(--slate-12)]",
        blue: "bg-[var(--blue-9)] text-[var(--slate-1)] dark:text-[var(--slate-12)]",
        teal: "bg-[var(--teal-9)] text-[var(--slate-1)] dark:text-[var(--slate-12)]",
        cyan: "bg-[var(--cyan-9)] text-[var(--slate-1)] dark:text-[var(--slate-12)]",
        amber:
          "bg-[var(--amber-9)] text-[var(--slate-12)] dark:text-[var(--slate-1)]",
        orange:
          "bg-[var(--orange-9)] text-[var(--slate-12)] dark:text-[var(--slate-1)]",
        gray: "bg-[var(--slate-12)] text-[var(--slate-1)]"
      },

      size: {
        sm: "w-8 h-8 text-xs",
        md: "w-11 h-11",
        lg: "w-12 h-12 text-lg",
        xl: "w-16 h-16 text-2xl"
      }
    },
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
      className={avatarVariants({ className, colorScheme, size })}
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
