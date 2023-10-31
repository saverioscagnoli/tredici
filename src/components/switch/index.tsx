import { cn } from "@lib/utils";
import * as RxSwitch from "@radix-ui/react-switch";
import { VariantProps, cva } from "class-variance-authority";
import { forwardRef } from "react";

const switchVariants = cva(
  "rounded-full cursor-pointer inline-flex items-center transition-colors data-[state='checked']:dark:bg-violet-dark data-[state='checked']:bg-violet-light dark:bg-gray-tr-2-dark bg-gray-tr-2-light",
  {
    variants: {
      size: {
        sm: "w-7 h-4 p-0.5",
        md: "w-10 h-6 p-1",
        lg: "w-14 h-8 p-1.5"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);

const thumbVariants = cva("block bg-white rounded-full transition-transform", {
  variants: {
    size: {
      sm: "w-3 h-3 data-[state='checked']:translate-x-3",
      md: "w-4 h-4 data-[state='checked']:translate-x-4",
      lg: "w-6 h-6 data-[state='checked']:translate-x-5"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

interface SwitchProps
  extends RxSwitch.SwitchProps,
    VariantProps<typeof switchVariants> {}

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ children, className, size, ...props }, ref) => {
    return (
      <RxSwitch.Root
        {...props}
        ref={ref}
        className={cn(switchVariants({ size }), className)}
      >
        <RxSwitch.Thumb className={cn(thumbVariants({ size }), className)} />
      </RxSwitch.Root>
    );
  }
);

export { Switch };
