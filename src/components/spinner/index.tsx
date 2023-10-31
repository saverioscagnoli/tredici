import { ComponentPropsWithoutRef, forwardRef, CSSProperties } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@lib/utils";

const spinnerVariants = cva("", {
  variants: {
    variant: {
      solid: "dark:stroke-violet-dark stroke-violet-light",
      secondary: "dark:stroke-white stroke-black",
      "secondary-inverted": "dark:stroke-black stroke-white"
    },
    size: {
      xs: "w-3 h-3",
      sm: "w-4 h-4",
      md: "w-6 h-6",
      lg: "w-8 h-8",
      xl: "w-12 h-12",
      button: "w-5 h-5"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

interface SpinnerProps
  extends ComponentPropsWithoutRef<"svg">,
    VariantProps<typeof spinnerVariants> {
  trackOpacity?: CSSProperties["strokeOpacity"];
  spinnerColor?: CSSProperties["stroke"];
}

const Spinner = forwardRef<SVGSVGElement, SpinnerProps>(
  (
    {
      className,
      variant = "solid",
      size,
      trackOpacity = 1,
      spinnerColor,
      ...props
    },
    ref
  ) => {
    console.log(spinnerVariants({ variant }));
    return (
      <svg
        {...props}
        ref={ref}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(spinnerVariants({ className, size }), "animate-spin")}
      >
        <circle
          cx="7.5"
          cy="7.5"
          r="5.75"
          className="dark:stroke-gray-tr-3-dark stroke-gray-tr-3-light"
          strokeOpacity={trackOpacity}
          strokeWidth="1.5"
        />
        <mask id="path-2-inside-1_1_8" fill="white">
          <path d="M14 7.5C14 8.87312 13.5652 10.211 12.7578 11.3217C11.9505 12.4324 10.8122 13.2589 9.50606 13.6827C8.19997 14.1065 6.79322 14.1057 5.48757 13.6806C4.18191 13.2555 3.04443 12.4278 2.23824 11.3163L3.44687 10.4397C4.06787 11.2959 4.94408 11.9335 5.94982 12.2609C6.95557 12.5884 8.03919 12.589 9.04527 12.2625C10.0514 11.9361 10.9282 11.2994 11.5501 10.4438C12.172 9.58826 12.5069 8.55772 12.5069 7.5H14Z" />
        </mask>
        <path
          d="M14 7.5C14 8.87312 13.5652 10.211 12.7578 11.3217C11.9505 12.4324 10.8122 13.2589 9.50606 13.6827C8.19997 14.1065 6.79322 14.1057 5.48757 13.6806C4.18191 13.2555 3.04443 12.4278 2.23824 11.3163L3.44687 10.4397C4.06787 11.2959 4.94408 11.9335 5.94982 12.2609C6.95557 12.5884 8.03919 12.589 9.04527 12.2625C10.0514 11.9361 10.9282 11.2994 11.5501 10.4438C12.172 9.58826 12.5069 8.55772 12.5069 7.5H14Z"
          className={(!spinnerColor && spinnerVariants({ variant })) || ""}
          style={{ stroke: spinnerColor }}
          strokeWidth="3"
          mask="url(#path-2-inside-1_1_8)"
        />
      </svg>
    );
  }
);

export { Spinner };
