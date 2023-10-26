import { forwardRef, ElementRef, CSSProperties } from "react";
import "./progress.css";

interface ProgressProps {
  className?: string;
  id?: string;
  value?: number;
  indeterminate?: boolean;
  max?: number;
  containerStyle?: CSSProperties;
  fillStyle?: CSSProperties;
}

const Progress = forwardRef<ElementRef<"div">, ProgressProps>(
  (
    {
      className,
      value = 0,
      indeterminate = false,
      max = 100,
      containerStyle,
      fillStyle,
      ...props
    },
    ref
  ) => {
    value = indeterminate ? 100 : value;
    value = (value / max) * 100;

    if (indeterminate) {
      max = 100;
      value = 100;
    } else {
      value = (value / max) * 100;
    }

    return (
      <div
        {...props}
        ref={ref}
        className={["progress-13", indeterminate && "loading", className].join(
          " "
        )}
        style={containerStyle}
      >
        <div
          className="progress-13-fill"
          style={{ width: value + "%", ...fillStyle }}
        ></div>
      </div>
    );
  }
);

export { Progress };
