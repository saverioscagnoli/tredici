import React, { ComponentPropsWithoutRef } from "react";
export interface ModalHeaderProps extends ComponentPropsWithoutRef<"div"> {
    /**
     * If true, a close button will be rendered
     */
    closeButton?: boolean;
    /**
     * Callback function to handle close button click
     */
    onClose?: () => void;
    /**
     * If true, a separator will be rendered
     */
    separator?: boolean;
}
export declare const ModalHeader: React.ForwardRefExoticComponent<ModalHeaderProps & React.RefAttributes<HTMLDivElement>>;
