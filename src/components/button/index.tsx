import {
  ComponentPropsWithoutRef,
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef
} from "react";
import { cva } from "class-variance-authority";
import { VariantProps } from "class-variance-authority";
import { cn } from "@lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-semibold select-none cursor-pointer transition-colors",
  {
    variants: {
      variant: {
        solid:
          "dark:bg-violet-dark bg-violet-light dark:text-black text-white dark:hover:bg-violet-darker-dark hover:bg-violet-darker-light dark:active:bg-violet-darkest-dark active:bg-violet-darkest-light",
        secondary:
          "dark:bg-gray-tr-dark bg-gray-tr-light dark:text-white text-black dark:hover:bg-gray-tr-2-dark hover:bg-gray-tr-2-light dark:active:bg-gray-tr-3-dark active:bg-gray-tr-3-light",
        ghost:
          "bg-transparent dark:text-white text-black dark:hover:bg-gray-tr-dark hover:bg-gray-tr-light dark:active:bg-gray-tr-2-dark active:bg-gray-tr-2-light",
        outline:
          "bg-transparent border dark:border-gray-tr-2-dark border-gray-tr-2-light shadow dark:text-white text-black dark:hover:bg-gray-tr-dark hover:bg-gray-tr-light dark:active:bg-gray-tr-2-dark active:bg-gray-tr-2-light",
        unstyled: ""
      },
      size: {
        sm: "h-6 px-2 text-sm rounded-sm",
        md: "h-9 px-3 rounded-md",
        lg: "h-11 px-4 text-lg rouned-md"
      }
    },
    defaultVariants: {
      variant: "solid",
      size: "md"
    }
  }
);

interface ButtonProps
  extends ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants> {}

interface ButtonComponent
  extends ForwardRefExoticComponent<
    ButtonProps & RefAttributes<HTMLButtonElement>
  > {
  Icon: typeof ButtonIcon;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "solid", size = "md", ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={cn(buttonVariants({ className, variant, size }))}
      />
    );
  }
) as ButtonComponent;

const buttonIconVariants = cva(
  "inline-flex items-center justify-center font-semibold select-none cursor-pointer transition-colors",
  {
    variants: {
      variant: {
        solid:
          "dark:bg-violet-dark bg-violet-light dark:text-black text-white dark:hover:bg-violet-darker-dark hover:bg-violet-darker-light dark:active:bg-violet-darkest-dark active:bg-violet-darkest-light",
        secondary:
          "dark:bg-gray-tr-dark bg-gray-tr-light dark:text-white text-black dark:hover:bg-gray-tr-2-dark hover:bg-gray-tr-2-light dark:active:bg-gray-tr-3-dark active:bg-gray-tr-3-light",
        ghost:
          "bg-transparent dark:text-white text-black dark:hover:bg-gray-tr-dark hover:bg-gray-tr-light dark:active:bg-gray-tr-2-dark active:bg-gray-tr-2-light",
        outline:
          "bg-transparent border dark:border-gray-tr-2-dark border-gray-tr-2-light shadow dark:text-white text-black dark:hover:bg-gray-tr-dark hover:bg-gray-tr-light dark:active:bg-gray-tr-2-dark active:bg-gray-tr-2-light",
        unstyled: ""
      },
      size: {
        sm: "w-6 h-6 rounded",
        md: "w-9 h-9 rounded-md",
        lg: "w-11 h-11 rounded-md"
      }
    },
    defaultVariants: {
      variant: "solid",
      size: "md"
    }
  }
);

interface ButtonIconProps
  extends ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonIconVariants> {}

const ButtonIcon = forwardRef<HTMLButtonElement, ButtonIconProps>(
  ({ className, variant = "solid", size = "md", ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={cn(buttonIconVariants({ className, variant, size }))}
      />
    );
  }
);

Button.displayName = "Button";
Button.Icon = ButtonIcon;

export { Button };
