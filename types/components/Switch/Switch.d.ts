import React, { ComponentPropsWithoutRef } from "react";
interface SwitchProps extends Omit<ComponentPropsWithoutRef<"input">, "size"> {
    size?: "sm" | "md" | "lg";
    htmlSize?: number;
}
export declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;
export {};
