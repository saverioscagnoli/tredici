import { forwardRef, ComponentPropsWithoutRef } from "react";

export const Toast = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>((props, ref) => {
    
  return (
    <div ref={ref} {...props}>
      Toast
    </div>
  );
});
