import * as RxAvatar from "@radix-ui/react-avatar";
import { cva } from "class-variance-authority";
import { ReactNode, forwardRef } from "react";

type AvatarColorScheme =
  | "amethyst"
  | "teal"
  | "green"
  | "red"
  | "yellow"
  | "blue"
  | "b/w";
type AvatarSize = "sm" | "md" | "lg";

interface AvatarProps extends RxAvatar.AvatarProps {
  /**
   * The color scheme of the avatar.
   * @default "amethyst"
   */
  colorScheme?: AvatarColorScheme;

  /**
   * The size of the avatar.
   * @default "md"
   */
  size?: AvatarSize;

  /**
   * The image source of the avatar.
   */
  src?: string;

  /**
   * The fallback content of the avatar.
   */
  fallback?: string | ReactNode;
}

const avatarVariants = cva(
  "inline-flex justify-center items-center font-semibold rounded-full select-none overflow-hidden",
  {
    variants: {
      colorScheme: {
        amethyst: [
          "bg-amethyst-500 text-white",
          "dark:bg-amethyst-400 dark:text-black"
        ],
        teal: ["bg-teal-500 text-white", "dark:bg-teal-400 dark:text-black"],
        green: ["bg-green-500 text-white", "dark:bg-green-400 dark:text-black"],
        red: ["bg-red-500 text-white", "dark:bg-red-400 dark:text-black"],
        yellow: [
          "bg-yellow-500 text-black",
          "dark:bg-yellow-400 dark:text-black"
        ],
        blue: ["bg-blue-500 text-white", "dark:bg-blue-400 dark:text-black"],
        "b/w": ["bg-black text-white", "dark:bg-white dark:text-black"]
      },
      size: {
        sm: "w-8 h-8 text-xs",
        md: "w-10 h-10",
        lg: "w-12 h-12 text-xl"
      }
    },
    defaultVariants: {
      colorScheme: "amethyst",
      size: "md"
    }
  }
);

const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  (
    {
      className,
      colorScheme = "amethyst",
      size = "md",
      src,
      fallback,
      ...props
    },
    ref
  ) => {
    return (
      <RxAvatar.Root
        ref={ref}
        className={avatarVariants({ className, colorScheme, size })}
        {...props}
      >
        <RxAvatar.Image
          className="w-full h-full object-cover object-center"
          src={src}
        />
        <RxAvatar.Fallback>{fallback}</RxAvatar.Fallback>
      </RxAvatar.Root>
    );
  }
);

Avatar.displayName = "Avatar";

export { Avatar };
export type { AvatarProps, AvatarColorScheme, AvatarSize };
