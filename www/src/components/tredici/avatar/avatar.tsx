import * as RxAvatar from "@radix-ui/react-avatar";
import { cn } from "@lib";
import { PersonIcon } from "@radix-ui/react-icons";
import { cva } from "class-variance-authority";
import {
  Children,
  createContext,
  forwardRef,
  isValidElement,
  useContext,
  useEffect,
  useState
} from "react";

import "@radix-ui/colors/plum.css";
import "@radix-ui/colors/plum-dark.css";

import "@radix-ui/colors/teal.css";
import "@radix-ui/colors/teal-dark.css";

import "@radix-ui/colors/grass.css";
import "@radix-ui/colors/grass-dark.css";

import "@radix-ui/colors/red.css";
import "@radix-ui/colors/red-dark.css";

import "@radix-ui/colors/amber.css";
import "@radix-ui/colors/amber-dark.css";

import "@radix-ui/colors/blue.css";
import "@radix-ui/colors/blue-dark.css";

import "@radix-ui/colors/gray.css";
import "@radix-ui/colors/gray-dark.css";

import "@radix-ui/colors/slate.css";
import "@radix-ui/colors/slate-dark.css";

type AvatarComponent = React.ForwardRefExoticComponent<
  AvatarProps & React.RefAttributes<HTMLSpanElement>
> & {
  Image: typeof AvatarImage;
  Fallback: typeof AvatarFallback;
};

type AvatarColorScheme =
  | "plum"
  | "teal"
  | "grass"
  | "red"
  | "amber"
  | "blue"
  | "b/w"
  | "gray";

type AvatarSize = "sm" | "md" | "lg" | "xl";

const SizeContext = createContext<AvatarSize | null>(null);

const useSize = () => {
  const ctx = useContext(SizeContext);

  if (!ctx) {
    throw new Error(
      "Avatar compound components cannot be rendered outside the Avatar component"
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
        plum: ["bg-[--plum-9]", "text-[--slate-1]"],
        teal: ["bg-[--teal-9]", "text-[--slate-1]"],
        grass: ["bg-[--grass-9]", "text-[--slate-1]"],
        red: ["bg-[--red-9]", "text-[--slate-1]", "dark:text-[--slate-12]"],
        amber: ["bg-[--amber-9]", "text-[--slate-12]", "dark:text-[--slate-1]"],
        blue: ["bg-[--blue-9]", ["text-[--slate-1]", "dark:text-[--slate-12]"]],
        "b/w": ["bg-[--slate-12]", "text-[--slate-1]"],
        gray: ["bg-[--gray-5]", "text-[--slate-12]"]
      },
      size: {
        sm: "w-8 h-8 text-xs",
        md: "w-11 h-11",
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
  (
    { children, className, colorScheme = "plum", size = "md", ...props },
    ref
  ) => {
    const [fallback, setFallback] = useState<boolean>(false);

    useEffect(() => {
      Children.forEach(children, child => {
        if (isValidElement(child)) {
          if (child.type === Avatar.Fallback) {
            setFallback(true);
          }
        }
      });
    }, []);

    return (
      <SizeContext.Provider value={size}>
        <RxAvatar.Root
          className={avatarVariants({
            className,
            colorScheme,
            size
          })}
          {...props}
          ref={ref}
        >
          {children}
          {!fallback && <AvatarFallback />}
        </RxAvatar.Root>
      </SizeContext.Provider>
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

const fallbackIconSize = {
  sm: 15,
  md: 19,
  lg: 23,
  xl: 30
};

type AvatarFallbackProps = RxAvatar.AvatarFallbackProps;

const AvatarFallback = forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <RxAvatar.Fallback
        className={cn(
          "w-full h-full",
          "flex justify-center items-center",
          "font-semibold"
        )}
        {...props}
        ref={ref}
      >
        {children ?? (
          <PersonIcon
            width={fallbackIconSize[useSize()]}
            height={fallbackIconSize[useSize()]}
          />
        )}
      </RxAvatar.Fallback>
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
