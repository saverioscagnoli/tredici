import { cn } from "@lib/utils";
import * as RxAvatar from "@radix-ui/react-avatar";
import { VariantProps, cva } from "class-variance-authority";
import { ForwardRefExoticComponent, RefAttributes, forwardRef } from "react";
import { PersonIcon } from "@radix-ui/react-icons";

const avatarVariants = cva("rounded-full overflow-hidden select-none", {
  variants: {
    size: {
      sm: "w-6 h-6 text-xs",
      md: "w-10 h-10",
      lg: "w-14 h-14 text-xl"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

interface AvatarProps
  extends RxAvatar.AvatarProps,
    VariantProps<typeof avatarVariants> {}

interface AvatarComponent
  extends ForwardRefExoticComponent<
    AvatarProps & RefAttributes<HTMLSpanElement>
  > {
  Image: typeof AvatarImage;
  Fallback: typeof AvatarFallback;
}

const Avatar = forwardRef<HTMLSpanElement, AvatarProps>(
  ({ children, className, size, ...props }, ref) => {
    return (
      <RxAvatar.Root
        {...props}
        ref={ref}
        className={cn(avatarVariants({ className, size }))}
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
        className={cn(
          className,
          "w-full h-full rounded-[inherit] object-cover"
        )}
      />
    );
  }
);

const avatarFallbackVariants = cva(
  "w-full h-full flex justify-center items-center rounded-[inherit]",
  {
    variants: {
      variant: {
        solid: "dark:bg-violet-dark bg-violet-light dark:text-black text-white",
        secondary:
          "dark:bg-gray-tr-3-dark bg-gray-tr-3-light dark:text-white text-black"
      }
    },
    defaultVariants: {
      variant: "solid"
    }
  }
);

interface AvatarFallbackProps
  extends RxAvatar.AvatarFallbackProps,
    VariantProps<typeof avatarFallbackVariants> {}

const AvatarFallback = forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  ({ children = <PersonIcon />, className, variant, ...props }, ref) => {
    return (
      <RxAvatar.Fallback
        {...props}
        ref={ref}
        className={cn(avatarFallbackVariants({ className, variant }))}
      >
        {children}
      </RxAvatar.Fallback>
    );
  }
);

Avatar.Image = AvatarImage;
Avatar.Fallback = AvatarFallback;

export { Avatar };
