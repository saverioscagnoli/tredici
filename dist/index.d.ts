import React, { ComponentPropsWithoutRef, ForwardRefExoticComponent, ReactNode } from 'react';

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
    /**
     * The variant of the button
     */
    variant?: "primary" | "secondary" | "danger" | "success";
    /**
     * The size of the button
     */
    size?: "sm" | "md" | "lg";
}
declare const Button: React.ForwardRefExoticComponent<ButtonProps & React.RefAttributes<HTMLButtonElement>>;

declare const Input: React.ForwardRefExoticComponent<Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> & React.RefAttributes<HTMLInputElement>>;

interface SelectProps extends Omit<ComponentPropsWithoutRef<"div">, "onChange"> {
    /**
     * The options to display
     */
    options: string[];
    /**
     * The callback to call when the user selects an option
     */
    onChange?: (val: string) => void;
}
declare const Select: React.ForwardRefExoticComponent<SelectProps & React.RefAttributes<HTMLDivElement>>;

interface ModalHeaderProps extends ComponentPropsWithoutRef<"div"> {
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

interface ModalFooterProps extends ComponentPropsWithoutRef<"div"> {
    separator?: boolean;
}

interface ModalProps extends ComponentPropsWithoutRef<"div"> {
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
declare const Modal: CompoundedModal;

interface IconButtonProps extends ComponentPropsWithoutRef<"button"> {
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
declare const IconButton: React.ForwardRefExoticComponent<IconButtonProps & React.RefAttributes<HTMLButtonElement>>;

interface FlexboxProps extends ComponentPropsWithoutRef<"div"> {
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
declare const Flexbox: React.ForwardRefExoticComponent<FlexboxProps & React.RefAttributes<HTMLDivElement>>;

interface SwitchProps extends Omit<ComponentPropsWithoutRef<"input">, "size"> {
    size?: "sm" | "md" | "lg";
    htmlSize?: number;
}
declare const Switch: React.ForwardRefExoticComponent<SwitchProps & React.RefAttributes<HTMLInputElement>>;

declare const useBool: (init?: boolean) => readonly [boolean, {
    setTrue: () => void;
    setFalse: () => void;
    toggle: () => void;
}];

export { Button, ButtonProps, Flexbox, FlexboxProps, IconButton, IconButtonProps, Input, Modal, ModalProps, Select, SelectProps, Switch, useBool };
