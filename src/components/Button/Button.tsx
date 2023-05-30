import { ComponentPropsWithoutRef, forwardRef } from "react";
import { StyledButton } from "../styled";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  /**
   * The variant of the button
   */
  variant?: "primary" | "secondary" | "danger" | "success";
  /**
   * The size of the button
   */
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = "secondary", size = "md", ...props }, ref) => {
    return (
      <StyledButton ref={ref} variant={variant} size={size} {...props}>
        {children}
      </StyledButton>
    );
  }
);
