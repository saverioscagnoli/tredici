import React, { ComponentPropsWithoutRef, forwardRef, ReactNode } from "react";
import { StyledIconButton } from "../styled";

export interface IconButtonProps extends ComponentPropsWithoutRef<"button"> {
  /**
   * The icon to display
   */
  icon?: ReactNode;
  /**
   * The variant of the button
   */
  variant?: "primary" | "secondary" | "danger" | "success";
  /**
   * The size of the button
   */
  size?: "sm" | "md" | "lg";
  /**
   * The aria-label for the button
   */
  "aria-label": string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, ...props }, ref) => {
    return (
      <StyledIconButton ref={ref} {...props}>
        {icon}
      </StyledIconButton>
    );
  }
);
