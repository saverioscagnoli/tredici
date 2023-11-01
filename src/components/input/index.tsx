import { ComponentPropsWithoutRef, forwardRef } from "react";
import { Checkbox } from "@components/checkbox";
import { cn } from "@lib/utils";

const Input = forwardRef<HTMLInputElement, ComponentPropsWithoutRef<"input">>(
  ({ className, type, ...props }, ref) => {
    return type === "checkbox" ? (
      <Checkbox />
    ) : (
      <input
        className={cn(
          "w-48 h-9 p-2 font-semibold dark:text-white text-black bg-transparent shadow rounded-md border outline-offset-0 dark:border-gray-tr-dark border-gray-tr-light outline-none focus:outline-2 focus:dark:outline-violet-dark focus:outline-violet-light",
          className
        )}
        type={type}
        {...props}
        ref={ref}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
