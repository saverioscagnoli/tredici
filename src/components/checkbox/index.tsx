import { forwardRef, ReactNode } from "react";
import * as RxCheckbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@lib/utils";

const checkboxVariants = cva("w-4 h-4 rounded", {
  variants: {
    variant: {
      solid: "dark:bg-violet-dark bg-violet-light dark:text-black text-white",
      secondary: "dark:bg-gray-tr-dark bg-gray-tr-light"
    }
  },
  defaultVariants: {
    variant: "solid"
  }
});

interface CheckboxProps
  extends RxCheckbox.CheckboxProps,
    VariantProps<typeof checkboxVariants> {
  icon?: ReactNode;
}

const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ className, variant, children = <CheckIcon />, ...props }, ref) => {
    console.log(variant);
    return (
      <RxCheckbox.Root
        ref={ref}
        {...props}
        className={cn(checkboxVariants({ className, variant }))}
      >
        <RxCheckbox.Indicator>{children}</RxCheckbox.Indicator>
      </RxCheckbox.Root>
    );
  }
);

export { Checkbox };
