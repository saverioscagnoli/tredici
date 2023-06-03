import React, { ComponentPropsWithoutRef, forwardRef } from "react";
import {
  StyledSwitchLabel as Label,
  StyledSwitchInput as Input,
  StyledSwitchSlider as Slider
} from "../styled";

interface SwitchProps extends Omit<ComponentPropsWithoutRef<"input">, "size"> {
  size?: "sm" | "md" | "lg";
  htmlSize?: number;
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ htmlSize, size, ...props }, ref) => {
    return (
      <Label size={size}>
        <Input
          ref={ref}
          size={htmlSize}
          customSize={size}
          type="checkbox"
          {...props}
        />
        <Slider customSize={size} />
      </Label>
    );
  }
);
