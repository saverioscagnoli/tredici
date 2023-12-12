import React, { CSSProperties, forwardRef } from "react";
import * as RxAvatar from "@radix-ui/react-avatar";
import { c, pick } from "../../lib";
import { ColorScheme } from "../../types";
import { useTheme } from "../tredici";

const avatar = c(
  "inline-flex justify-center items-center rounded-full select-none overflow-hidden",
  {
    colorScheme: {
      amethyst:
        "dark:bg-amethyst-400 bg-amethyst-500 text-fafafa dark:text-18181b",
      teal: "dark:bg-teal-400 bg-teal-500 text-fafafa dark:text-18181b",
      green: "dark:bg-green-400 bg-green-500 text-fafafa dark:text-18181b",
      crimson: "dark:bg-crimson-400 bg-crimson-500 text-fafafa",
      yellow: "dark:bg-yellow-400 bg-yellow-500 text-18181b",
      blue: "bg-blue-500 text-fafafa",
      pink: "bg-pink-500 text-fafafa",
      "b/w": "dark:bg-fafafa bg-18181b text-fafafa dark:text-18181b"
    },
    size: {
      sm: "w-8 h-8 text-xs",
      md: "w-10 h-10",
      lg: "w-12 h-12 text-xl"
    }
  },
  { size: "md" }
);

export interface AvatarProps extends RxAvatar.AvatarProps {
  /**
   * The color scheme of the avatar.
   */
  colorScheme?: ColorScheme | "random";

  /**
   * The size of the avatar.
   */
  size?: "sm" | "md" | "lg";

  /**
   * The source of the image.
   */
  imageSrc?: string;

  /**
   * The fallback text if the image fails to load.
   */
  fallback?: string;

  /**
   * The font size of the fallback text.
   * @default 1rem
   */
  fontSize?: CSSProperties["fontSize"];
}

const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  (
    {
      className,
      colorScheme,
      size,
      fallback,
      imageSrc,
      fontSize = "1rem",
      ...props
    },
    ref
  ) => {
    if (colorScheme === "random") {
      colorScheme = pick([
        "amethyst",
        "teal",
        "green",
        "crimson",
        "yellow",
        "blue",
        "pink",
        "b/w"
      ]);
    } else {
      colorScheme = colorScheme ?? useTheme().defaultColorScheme;
    }

    return (
      <RxAvatar.Root
        {...props}
        ref={ref}
        className={avatar({ className, colorScheme, size })}
      >
        <RxAvatar.Image
          className="w-full h-full object-cover object-center"
          src={imageSrc}
        />
        <RxAvatar.Fallback style={{ fontSize }}>{fallback}</RxAvatar.Fallback>
      </RxAvatar.Root>
    );
  }
);

export { Avatar };
