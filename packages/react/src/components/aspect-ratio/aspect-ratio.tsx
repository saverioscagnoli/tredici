import React, { forwardRef } from "react";
import * as RxAspectRatio from "@radix-ui/react-aspect-ratio";

export type AspectRatioProps = RxAspectRatio.AspectRatioProps;

const AspectRatio = forwardRef<HTMLDivElement, AspectRatioProps>(
  (props, ref) => {
    return <RxAspectRatio.Root {...props} ref={ref} />;
  }
);

export { AspectRatio };
