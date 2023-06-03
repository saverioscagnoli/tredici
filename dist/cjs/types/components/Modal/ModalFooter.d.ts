import React, { ComponentPropsWithoutRef } from "react";
export interface ModalFooterProps extends ComponentPropsWithoutRef<"div"> {
    separator?: boolean;
}
export declare const ModalFooter: React.ForwardRefExoticComponent<ModalFooterProps & React.RefAttributes<HTMLDivElement>>;
