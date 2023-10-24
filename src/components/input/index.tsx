import { ComponentPropsWithoutRef, forwardRef } from "react";
import "./input.css";

const Input = forwardRef<HTMLInputElement, ComponentPropsWithoutRef<"input">>(
  ({ className, ...props }, ref) => {
    return (
      <input
        className={["input-13", className].join(" ")}
        {...props}
        ref={ref}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
