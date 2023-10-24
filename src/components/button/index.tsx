import { ComponentPropsWithoutRef, forwardRef } from "react";
import "./button.css";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "solid" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "solid", size = "md", ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={["button-13", variant, size, className].join(" ")}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
