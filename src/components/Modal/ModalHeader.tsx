import { ComponentPropsWithoutRef, forwardRef } from "react";
import { StyledModalHeader as Header } from "../styled";

export const ModalHeader = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>(({ children, ...props }, ref) => {
  return (
    <Header {...props} ref={ref}>
      {children}
    </Header>
  );
});
