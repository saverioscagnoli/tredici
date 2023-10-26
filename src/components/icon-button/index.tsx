import { ComponentPropsWithoutRef, forwardRef, ReactNode } from "react";
import "./icon-button.css";

interface IconButtonProps
  extends Omit<ComponentPropsWithoutRef<"button">, "children"> {
  variant?: "solid" | "secondary" | "outline" | "ghost" | "danger";
  size?: "xs" | "sm" | "md" | "lg";
  icon?: ReactNode;
}

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ className, variant = "solid", size = "md", icon, ...props }, ref) => {
    return (
      <button
        {...props}
        ref={ref}
        className={["icon-button-13", variant, size, className].join(" ")}
      >
        {icon}
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

export { IconButton };
