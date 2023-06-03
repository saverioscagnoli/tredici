import React, { ComponentPropsWithoutRef, forwardRef } from "react";
import { StyledInput } from "../styled";

export const Input = forwardRef<
  HTMLInputElement,
  ComponentPropsWithoutRef<"input">
>(({ children, ...props }, ref) => {
  return (
    <StyledInput ref={ref} {...props}>
      {children}
    </StyledInput>
  );
});
