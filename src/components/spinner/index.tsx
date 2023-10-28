import { ComponentPropsWithoutRef, forwardRef, CSSProperties } from "react";
import "./spinner.css";
import { join } from "@lib/utils";

interface SpinnerProps extends ComponentPropsWithoutRef<"span"> {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  spinnerColor?: string;
  areaColor?: string;
}

const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(
  (
    {
      className,
      size = "md",
      spinnerColor = "var(--background)",
      areaColor = "var(--background-gray-darker)",
      style,
      ...props
    },
    ref
  ) => {
    const _defaultStyle: CSSProperties = {
      borderColor: areaColor,
      borderTopColor: spinnerColor
    };

    return (
      <span
        {...props}
        ref={ref}
        className={join("spinner-13", size, className)}
        style={{ ..._defaultStyle, ...style }}
      />
    );
  }
);

export { Spinner };
