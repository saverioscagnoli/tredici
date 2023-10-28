import { CSSProperties, forwardRef, useEffect, MouseEvent } from "react";
import { useBool } from "@hooks/use-bool";
import { join } from "@lib/utils";
import "./switch.css";

interface SwitchProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  id?: string;
  defaultChecked?: boolean;
  disabled?: boolean;
  style?: CSSProperties;
  onClick?: (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void;
  onValueChange?: (value: boolean) => void;
}

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      className,
      size = "md",
      defaultChecked = false,
      onValueChange,
      onClick,
      ...props
    },
    ref
  ) => {
    const [toggled, { toggle }] = useBool(defaultChecked);

    useEffect(() => {
      onValueChange?.(toggled);
    }, [toggled]);

    return (
      <button
        {...props}
        ref={ref}
        className={join("switch-13", size, toggled ? "on" : "off", className)}
        onClick={e => {
          onClick?.(e);
          toggle();
        }}
      >
        <span className="spacer-13"></span>
        <span className="slider-13"></span>
      </button>
    );
  }
);

export { Switch };
