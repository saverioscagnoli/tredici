import React, { forwardRef } from "react";
import * as RxAspectRatio from "@radix-ui/react-aspect-ratio";

const AspectRatio = forwardRef<HTMLDivElement, RxAspectRatio.AspectRatioProps>(
  ({ children, ...props }, ref) => {
    return (
      <RxAspectRatio.Root {...props} ref={ref}>
        {children}
      </RxAspectRatio.Root>
    );
  }
);

export { AspectRatio };
