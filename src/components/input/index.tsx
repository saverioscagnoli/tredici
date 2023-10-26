import { ComponentPropsWithoutRef, forwardRef } from "react";
import "./input.css";
import { Checkbox } from "@components/checkbox";

const Input = forwardRef<HTMLInputElement, ComponentPropsWithoutRef<"input">>(
  ({ className, type, ...props }, ref) => {
    return type === "checkbox" ? (
      <Checkbox />
    ) : (
      <input
        className={["input-13", className].join(" ")}
        type={type}
        {...props}
        ref={ref}
      />
    );
  }
);

Input.displayName = "Input";

export { Input };
