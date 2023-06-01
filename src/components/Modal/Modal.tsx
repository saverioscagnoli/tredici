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
import { ModalHeader } from "./ModalHeader";
import { ModalFooter } from "./ModalFooter";
import { ModalBody } from "./ModalBody";

export interface ModalProps extends ComponentPropsWithoutRef<"div"> {
  open: boolean;
  onClose: () => void;
  alignment?: "center" | "left" | "right";
}
interface CompoundedModal extends ForwardRefExoticComponent<ModalProps> {
  Header: React.FC<ComponentPropsWithoutRef<"div">>;
  Body: React.FC<ComponentPropsWithoutRef<"div">>;
  Footer: React.FC<ComponentPropsWithoutRef<"div">>;
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
