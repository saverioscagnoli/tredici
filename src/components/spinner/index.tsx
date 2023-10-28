import { ComponentPropsWithoutRef, forwardRef, CSSProperties } from "react";
import "./spinner.css";

interface SpinnerProps extends ComponentPropsWithoutRef<"span"> {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  spinnerColor?: string;
  areaColor?: string;
  animationDuration?: string;
}

const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(
  (
    {
      className,
      size = "md",
      spinnerColor = "var(--background)",
      areaColor = "var(--background-gray-darker)",
      animationDuration = "500ms",
      style,
      ...props
    },
    ref
  ) => {
    const _defaultStyle: CSSProperties = {
      borderColor: areaColor,
      borderTopColor: spinnerColor,
      animationDuration
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
