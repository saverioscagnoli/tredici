import { ComponentPropsWithoutRef, forwardRef } from "react";
import { StyledModalHeader as Header } from "../styled";
import { Button } from "../Button";
import { GrClose } from "react-icons/gr";

export interface ModalHeaderProps extends ComponentPropsWithoutRef<"div"> {
  closeButton?: boolean;
  onClose?: () => void;
}

export const ModalHeader = forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ children, closeButton, onClose, ...props }, ref) => {
    return (
      <Header {...props} ref={ref}>
        {children}
        {closeButton ? (
          <Button onClick={onClose}>
            <GrClose />
          </Button>
        ) : null}
      </Header>
    );
  }
);
