import React, { ComponentPropsWithoutRef } from "react";
export interface SelectProps extends Omit<ComponentPropsWithoutRef<"div">, "onChange"> {
    /**
     * The options to display
     */
    options: string[];
    /**
     * The callback to call when the user selects an option
     */
    onChange?: (val: string) => void;
}
export declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLDivElement>>;
