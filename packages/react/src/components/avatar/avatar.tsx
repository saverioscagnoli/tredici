import React, {
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef
} from "react";
import * as RxAvatar from "@radix-ui/react-avatar";
import { c, cn, pick } from "../../lib";
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
      starship: "dark:bg-starship-400 bg-starship-500 text-18181b",
      blue: "bg-blue-500 text-fafafa",
      pink: "bg-pink-500 text-fafafa",
      gray: "dark:bg-fafafa bg-18181b text-fafafa dark:text-18181b"
    },
    size: {
      sm: "w-8 h-8 text-xs",
      md: "w-10 h-10",
      lg: "w-12 h-12 text-xl"
    }
  },
  { size: "md" }
);

interface AvatarComponent
  extends ForwardRefExoticComponent<
    AvatarProps & RefAttributes<HTMLDivElement>
  > {
  Image: typeof AvatarImage;
  Fallback: typeof AvatarFallback;
}

interface AvatarProps extends RxAvatar.AvatarProps {
  colorScheme?: ColorScheme | "random";
  size?: "sm" | "md" | "lg";
}

const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ children, className, colorScheme, size, ...props }, ref) => {
    if (colorScheme === "random") {
      colorScheme = pick([
        "amethyst",
        "teal",
        "green",
        "crimson",
        "starship",
        "blue",
        "pink",
        "gray"
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
        {children}
      </RxAvatar.Root>
    );
  }
) as AvatarComponent;

const AvatarImage = forwardRef<HTMLImageElement, RxAvatar.AvatarImageProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxAvatar.Image
        {...props}
        ref={ref}
        className={cn("w-full h-full object-cover object-center", className)}
      />
    );
  }
);

interface AvatarFallbackProps extends RxAvatar.AvatarFallbackProps {
  content?: string;
}

const AvatarFallback = forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  ({ content, ...props }, ref) => {
    return (
      <RxAvatar.AvatarFallback {...props} ref={ref}>
        {content}
      </RxAvatar.AvatarFallback>
    );
  }
);

Avatar.Image = AvatarImage;
Avatar.Fallback = AvatarFallback;

export { Avatar };
