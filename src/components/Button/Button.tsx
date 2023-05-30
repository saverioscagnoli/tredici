import { ComponentPropsWithoutRef, forwardRef } from "react";

export const Button = forwardRef<
  HTMLButtonElement,
  ComponentPropsWithoutRef<"button">
>(({ children, ...props }, ref) => {
  return (
    <button ref={ref} {...props}>
      {children}
    </button>
  );
});
