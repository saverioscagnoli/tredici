import React, { ComponentPropsWithoutRef } from "react";
export interface FlexboxProps extends ComponentPropsWithoutRef<"div"> {
    /**
     * The width of the flexbox
     */
    w?: string;
    /**
     * The height of the flexbox
     */
    h?: string;
    /**
     * If the contents should be vertically centered
     */
    vertical?: boolean;
    /**
     * If the contents should be horizontally centered
     */
    horizontal?: boolean;
}
export declare const Flexbox: React.ForwardRefExoticComponent<FlexboxProps & React.RefAttributes<HTMLDivElement>>;
