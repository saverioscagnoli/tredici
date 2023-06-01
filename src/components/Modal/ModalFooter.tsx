import { ComponentPropsWithoutRef, forwardRef } from "react";
import { StyledModalFooter as Footer } from "../styled";

export interface ModalFooterProps extends ComponentPropsWithoutRef<"div"> {
  separator?: boolean;
}

export const ModalFooter = forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ children, ...props }, ref) => {
    return (
      <Footer {...props} ref={ref}>
        {children}
      </Footer>
    );
  }
);
