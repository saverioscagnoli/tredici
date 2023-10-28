import { join } from "@lib/utils";
import {
  forwardRef,
  createContext,
  useContext,
  ComponentPropsWithoutRef,
  ForwardRefExoticComponent,
  RefAttributes
} from "react";
import "./progress.css";

interface ProgressContextProps {
  value: number;
  indeterminate: boolean;
  max: number;
}

const ProgressContext = createContext<ProgressContextProps | null>(null);

const useProgress = () => {
  const ctx = useContext(ProgressContext);

  if (!ctx) {
    throw new Error("useProgress must be used within ProgressContextProvider.");
  }

  return ctx;
};

interface ProgressProps extends ComponentPropsWithoutRef<"div"> {
  value?: number;
  indeterminate?: boolean;
  max?: number;
}

interface ProgressComponent
  extends ForwardRefExoticComponent<
    ProgressProps & RefAttributes<HTMLDivElement>
  > {
  Fill: typeof Fill;
}

const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  ({ value = 0, indeterminate = false, max = 100, ...props }, ref) => {
    if (indeterminate) {
      value = 50;
      max = 100;
    }

    return (
      <ProgressContext.Provider value={{ value, indeterminate, max }}>
        <ProgressRoot ref={ref} {...props} />
      </ProgressContext.Provider>
    );
  }
) as ProgressComponent;

const ProgressRoot = forwardRef<HTMLDivElement, ProgressProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        {...props}
        ref={ref}
        className={join("progress-13", className)}
      ></div>
    );
  }
);

const Fill = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  ({ className, style, ...props }, ref) => {
    const { value, indeterminate, max } = useProgress();

    const width = (value / max) * 100 + "%";

    return (
      <div
        {...props}
        ref={ref}
        className={join(
          "progress-13-fill",
          indeterminate ? "loading" : "",
          className
        )}
        style={{ width, ...style }}
      ></div>
    );
  }
);

Progress.Fill = Fill;

export { Progress };
