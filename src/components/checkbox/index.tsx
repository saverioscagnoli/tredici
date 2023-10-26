import {
  useEffect,
  forwardRef,
  ElementRef,
  ReactNode,
  CSSProperties
} from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import "./checkbox.css";
import { useBool } from "@hooks/use-bool";

interface CheckboxProps {
  className?: string;
  id?: string;
  variant?: "solid" | "secondary";
  checkIcon?: ReactNode;
  defaultChecked?: boolean;
  disabled?: boolean;
  style?: CSSProperties;
  onValueChange?: (value: boolean) => void;
}

const Checkbox = forwardRef<ElementRef<"button">, CheckboxProps>(
  (
    {
      className,
      variant = "solid",
      checkIcon = <CheckIcon />,
      defaultChecked = false,
      disabled = false,
      onValueChange,
      ...props
    },
    ref
  ) => {
    const [checked, { toggle }] = useBool(!!defaultChecked);

    useEffect(() => {
      onValueChange?.(checked);
    }, [checked]);

    return (
      <button
        disabled={disabled}
        className={[
          "checkbox-13",
          variant,
          className,
          checked && "checked",
          disabled && "disabled"
        ].join(" ")}
        ref={ref}
        {...props}
        onClick={toggle}
      >
        <span className="checkbox-13-indicator">{checked && checkIcon}</span>
      </button>
    );
  }
);

export { Checkbox };
