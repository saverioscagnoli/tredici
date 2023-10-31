import { forwardRef, ReactNode } from "react";
import * as RxCheckbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@lib/utils";
import { useBool } from "@hooks/use-bool";

const checkboxVariants = cva("w-4 h-4 rounded", {
  variants: {
    variant: {
      solid:
        "bg-transparent border border-gray-tr-3-light dark:text-black text-white",
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
  (
    {
      className,
      checked,
      variant = "solid",
      icon = <CheckIcon />,
      onClick,
      ...props
    },
    ref
  ) => {
    const [value, { toggle }] = useBool(!!checked);

    return (
      <RxCheckbox.Root
        ref={ref}
        {...props}
        checked={value}
        className={cn(
          checkboxVariants({ className, variant }),
          value &&
            variant === "solid" &&
            "dark:bg-violet-dark bg-violet-light border-none"
        )}
        onClick={e => {
          onClick?.(e);
          toggle();
        }}
      >
        <RxCheckbox.Indicator>{icon}</RxCheckbox.Indicator>
      </RxCheckbox.Root>
    );
  }
);

export { Checkbox };
