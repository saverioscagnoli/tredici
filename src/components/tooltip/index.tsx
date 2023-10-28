import {
  ComponentPropsWithoutRef,
  ForwardRefExoticComponent,
  RefAttributes,
  forwardRef,
  createContext,
  useContext,
  ReactNode
} from "react";
import { findChild, join } from "@lib/utils";
import { useBool } from "@hooks/use-bool";
import "./tooltip.css";

type Placement = "top" | "bottom" | "left" | "right";

interface TooltipContextProps {
  placement: Placement;
  hover: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  delayOnEnter?: number;
  delayOnLeave?: number;
}

const TooltipContext = createContext<TooltipContextProps | null>(null);

const useTooltip = () => {
  const ctx = useContext(TooltipContext);

  if (!ctx) {
    throw new Error("useTooltip must be used within a Tooltip");
  }

  return ctx;
};

interface TooltipProps {
  children?: ReactNode;
  placement?: Placement;
  className?: string;
  style?: React.CSSProperties;
  delayOnEnter?: number;
  delayOnLeave?: number;
}

interface TooltipComponent
  extends ForwardRefExoticComponent<
    TooltipProps & RefAttributes<HTMLDivElement>
  > {
  Trigger: typeof TooltipTrigger;
  Content: typeof TooltipContent;
}

const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    { placement = "top", delayOnEnter = 0, delayOnLeave = 0, ...props },
    ref
  ) => {
    const [hover, { setTrue: onMouseEnter, setFalse: onMouseLeave }] =
      useBool();

    return (
      <TooltipContext.Provider
        value={{
          placement,
          hover,
          onMouseEnter,
          onMouseLeave,
          delayOnEnter,
          delayOnLeave
        }}
      >
        <TooltipRoot {...props} ref={ref} />
      </TooltipContext.Provider>
    );
  }
) as TooltipComponent;

const TooltipRoot = forwardRef<HTMLDivElement, TooltipProps>(
  ({ children, className, ...props }, ref) => {
    const { hover } = useTooltip();

    const trigger = findChild(children, TooltipTrigger) || <></>;
    const content = findChild(children, TooltipContent) || <></>;

    return (
      <div {...props} ref={ref} className={join("tooltip-13", className)}>
        {trigger}
        {hover && content}
      </div>
    );
  }
);

interface TooltipTriggerProps extends ComponentPropsWithoutRef<"div"> {}

const TooltipTrigger = forwardRef<HTMLDivElement, TooltipTriggerProps>(
  ({ className, onMouseEnter: defaultOnMouseEnter, onMouseLeave: defaultOnMouseLeave, ...props }, ref) => {
    const { onMouseEnter, onMouseLeave, delayOnEnter, delayOnLeave } =
      useTooltip();



    return (
      <div
        {...props}
        ref={ref}
        className={join("tooltip-13-trigger", className)}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      ></div>
    );
  }
);

interface TooltipContentProps extends ComponentPropsWithoutRef<"div"> {}

const TooltipContent = forwardRef<HTMLDivElement, TooltipContentProps>(
  ({ className, ...props }, ref) => {
    const { placement, hover } = useTooltip();

    return (
      <div
        {...props}
        ref={ref}
        className={join(
          "tooltip-13-content",
          hover ? "active" : "inactive",
          placement,
          className
        )}
      ></div>
    );
  }
);

Tooltip.Trigger = TooltipTrigger;
Tooltip.Content = TooltipContent;

export { Tooltip };
