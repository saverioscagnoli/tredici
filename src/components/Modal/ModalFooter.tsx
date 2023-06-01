import { ComponentPropsWithoutRef, forwardRef } from "react";
import { StyledModalFooter as Footer } from "../styled";

export const ModalFooter = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>(({ children, ...props }, ref) => {
  return (
    <Footer {...props} ref={ref}>
      {children}
    </Footer>
  );
});
