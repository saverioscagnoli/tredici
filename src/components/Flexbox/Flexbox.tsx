import React, { ComponentPropsWithoutRef, forwardRef } from "react";
import { StyledFlexbox } from "../styled";

export interface FlexboxProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * The width of the flexbox
   */
  w?: string;
  /**
   * The height of the flexbox
   */
  h?: string;
  /**
   * If the contents should be vertically centered
   */
  vertical?: boolean;
  /**
   * If the contents should be horizontally centered
   */
  horizontal?: boolean;
}

export const Flexbox = forwardRef<HTMLDivElement, FlexboxProps>(
  ({ children, ...props }, ref) => {
    return (
      <StyledFlexbox ref={ref} {...props}>
        {children}
      </StyledFlexbox>
    );
  }
);
