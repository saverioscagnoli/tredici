import React, { ComponentPropsWithoutRef } from "react";
export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    /**
     * The variant of the button
     */
    variant?: "primary" | "secondary" | "danger" | "success";
    /**
     * The size of the button
     */
    size?: "sm" | "md" | "lg";
}
export declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;
