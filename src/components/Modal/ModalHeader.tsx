import { ComponentPropsWithoutRef, forwardRef } from "react";
import { StyledModalHeader as Header } from "../styled";
import { IconButton } from "../IconButton";
import { TfiClose } from "react-icons/tfi";

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
          <IconButton
            variant="danger"
            aria-label="close-button"
            icon={<TfiClose color="white" />}
            onClick={onClose}
          />
        ) : null}
      </Header>
    );
  }
);
