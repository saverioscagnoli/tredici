import React, { ComponentPropsWithoutRef, forwardRef } from "react";
import { StyledModalBody as Body } from "../styled";

export const ModalBody = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>(({ children, ...props }, ref) => {
  return (
    <Body ref={ref} {...props}>
      {children}
    </Body>
  );
});
