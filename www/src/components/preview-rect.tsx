import { cn } from "@lib";
import React, { ComponentProps } from "react";

const PreviewRect: React.FC<ComponentProps<"div">> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "h-[250px]",
        "grid place-items-center",
        "rounded",
        "bg-[--gray-1]",
        "border border-[--gray-7]",
        className
      )}
      {...props}
    />
  );
};

export { PreviewRect };
