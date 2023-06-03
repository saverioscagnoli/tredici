import React, { ComponentPropsWithoutRef, ReactNode } from "react";
export interface IconButtonProps extends ComponentPropsWithoutRef<"button"> {
    /**
     * The icon to display
     */
    icon?: ReactNode;
    /**
     * The variant of the button
     */
    variant?: "primary" | "secondary" | "danger" | "success";
    /**
     * The size of the button
     */
    size?: "sm" | "md" | "lg";
    /**
     * The aria-label for the button
     */
    "aria-label": string;
}
export declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;
