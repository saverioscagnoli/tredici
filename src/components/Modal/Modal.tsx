import { CSSProperties, ComponentPropsWithoutRef, forwardRef } from "react";
import { ModalContent, ModalWrapper } from "../styled";

interface ModalProps extends ComponentPropsWithoutRef<"div"> {
  open: boolean;
  onClose: () => void;
  contentStyle?: CSSProperties;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ children, open, contentStyle, ...props }, ref) => {
    return (
      <ModalWrapper open={open} {...props} ref={ref}>
        <ModalContent style={contentStyle} open={open}>
          {children}
        </ModalContent>
      </ModalWrapper>
    );
  }
);
