import React, { ComponentPropsWithoutRef, ForwardRefExoticComponent } from "react";
import { ModalHeaderProps } from "./ModalHeader";
import { ModalFooterProps } from "./ModalFooter";
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
     * Controls the horizontal alignment of the modal
     */
    horizontalAlign?: "left" | "center" | "right";
    /**
     * Controls the vertical alignment of the modal
     */
    verticalAlign?: "top" | "center" | "bottom";
}
interface CompoundedModal extends ForwardRefExoticComponent<ModalProps> {
    Header: React.FC<ModalHeaderProps>;
    Body: React.FC<ComponentPropsWithoutRef<"div">>;
    Footer: React.FC<ModalFooterProps>;
}
export declare const Modal: CompoundedModal;
export {};
