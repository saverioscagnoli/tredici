import { useBool } from "@hooks/use-bool";
import { join } from "@lib/utils";
import { CheckIcon } from "@radix-ui/react-icons";
import { CSSProperties, forwardRef, ReactNode, useEffect } from "react";
import "./checkbox.css";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  id?: string;
  variant?: "solid" | "secondary";
  defaultChecked?: boolean;
  disabled?: boolean;
  style?: CSSProperties;
  onValueChange?: (value: boolean) => void;
}

const Checkbox = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children = <CheckIcon />,
      className,
      variant = "solid",
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
        {...props}
        ref={ref}
        disabled={disabled}
        className={join(
          "checkbox-13",
          variant,
          checked ? "checked" : "",
          disabled ? "disabled" : "",
          className
        )}
        onClick={toggle}
      >
        {checked && children}
      </button>
    );
  }
);

export { Checkbox };
