import { cn } from "@/lib/utils";
import * as RxAvatar from "@radix-ui/react-avatar";
import { cva } from "class-variance-authority";
import { createContext, forwardRef, useContext } from "react";

type AvatarComponent = React.ForwardRefExoticComponent<
  AvatarProps & React.RefAttributes<HTMLSpanElement>
> & {
  Image: typeof AvatarImage;
  Fallback: typeof AvatarFallback;
};

type AvatarColorScheme =
  | "purple"
  | "teal"
  | "green"
  | "red"
  | "yellow"
  | "blue"
  | "b/w";

type AvatarSize = "sm" | "md" | "lg" | "xl";

type AvatarContext = {
  colorScheme?: AvatarColorScheme;
  size?: AvatarSize;
};

const avatarContext = createContext<AvatarContext | null>(null);

const useAvatar = () => {
  const ctx = useContext(avatarContext);

  if (!ctx) {
    throw new Error(
      "Avatar compound components cannot be rendered outside Avatar"
    );
  }

  return ctx;
};

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
      colorScheme: {
        purple: ["bg-purple-500", ["text-light", "dark:text-dark"]],
        teal: ["bg-teal-500", ["text-light", "dark:text-dark"]],
        green: ["bg-green-500", ["text-light", "dark:text-dark"]],
        red: ["bg-red-500", "text-light"],
        yellow: ["bg-yellow-500", "text-dark"],
        blue: ["bg-blue-500", ["text-light", "dark:text-dark"]],
        "b/w": ["bg-dark text-light", "dark:bg-light", "dark:text-dark"]
      },
      size: {
        sm: "w-8 h-8 text-xs",
        md: "w-10 h-10 text-sm",
        lg: "w-12 h-12 text-lg",
        xl: "w-16 h-16 text-2xl"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);

type AvatarProps = RxAvatar.AvatarProps & {
  colorScheme?: AvatarColorScheme;
  size?: AvatarSize;
};

const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ className, colorScheme = "purple", size = "md", ...props }, ref) => {
    return (
      <avatarContext.Provider value={{ colorScheme, size }}>
        <RxAvatar.Root
          className={avatarVariants({ className, colorScheme, size })}
          {...props}
          ref={ref}
        />
      </avatarContext.Provider>
    );
  }
) as AvatarComponent;

type AvatarImageProps = RxAvatar.AvatarImageProps;

const AvatarImage = forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxAvatar.Image
        className={cn("w-full h-full", "object-cover", "rounded-[inherit]")}
        {...props}
        ref={ref}
      />
    );
  }
);

type AvatarFallbackProps = RxAvatar.AvatarFallbackProps;

const AvatarFallback = forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxAvatar.Fallback
        className={cn(
          "w-full h-full",
          "flex justify-center items-center",
          "font-semibold"
        )}
        {...props}
        ref={ref}
      />
    );
  }
);

Avatar.Image = AvatarImage;
Avatar.Fallback = AvatarFallback;

Avatar.displayName = RxAvatar.Root.displayName;

export { Avatar };
export type {
  AvatarProps,
  AvatarColorScheme,
  AvatarSize,
  AvatarImageProps,
  AvatarFallbackProps
};
