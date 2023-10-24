import {
  ComponentPropsWithoutRef,
  forwardRef,
  ElementRef,
  ReactNode
} from "react";
import * as RxCheckbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import "./checkbox.css";

interface CheckboxProps
  extends ComponentPropsWithoutRef<typeof RxCheckbox.Root> {
  variant?: "solid" | "secondary";
  checkIcon?: ReactNode;
}

const Checkbox = forwardRef<ElementRef<typeof RxCheckbox.Root>, CheckboxProps>(
  (
    { className, variant = "solid", checkIcon = <CheckIcon />, ...props },
    ref
  ) => {
    return (
      <RxCheckbox.Root
        className={["checkbox-13", variant, className].join(" ")}
        ref={ref}
        {...props}
      >
        <RxCheckbox.Indicator className="checkbox-13-indicator">
          {checkIcon}
        </RxCheckbox.Indicator>
      </RxCheckbox.Root>
    );
  }
);

export { Checkbox };
