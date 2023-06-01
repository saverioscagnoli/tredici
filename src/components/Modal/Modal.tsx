import {
  CSSProperties,
  ComponentPropsWithoutRef,
  ForwardRefExoticComponent,
  forwardRef
} from "react";
import {
  StyledModalWrapper as Wrapper,
  StyledModalContainer as Container
} from "../styled";
import { ModalHeader, ModalHeaderProps } from "./ModalHeader";
import { ModalFooter, ModalFooterProps } from "./ModalFooter";
import { ModalBody } from "./ModalBody";

export interface ModalProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Controls whether the modal is open or not
   */
  open: boolean;
  /**
   * Callback fired when the component requests to be closed
   */
  onClose: () => void;
  /**
   * Controls the alignment of the modal
   */
  alignment?: "center" | "left" | "right";
}
interface CompoundedModal extends ForwardRefExoticComponent<ModalProps> {
  Header: React.FC<ModalHeaderProps>;
  Body: React.FC<ComponentPropsWithoutRef<"div">>;
  Footer: React.FC<ModalFooterProps>;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  ({ children, ...props }, ref) => {
    return (
      <Wrapper {...props} ref={ref}>
        <Container>{children}</Container>
      </Wrapper>
    );
  }
) as CompoundedModal;

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
