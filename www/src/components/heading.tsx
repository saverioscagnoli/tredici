import { cva } from "class-variance-authority";
import React, { ComponentProps } from "react";

const headingVariants = cva(["font-bold"], {
  variants: {
    as: {
      h1: "text-4xl",
      h2: "text-3xl",
      h3: "text-2xl",
      h4: "text-xl",
      h5: "text-lg",
      h6: "text-base"
    }
  },
  defaultVariants: {
    as: "h1"
  }
});

type HeadingProps = ComponentProps<"h1"> & {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

const Heading: React.FC<HeadingProps> = ({
  className,
  as = "h1",
  ...props
}) => {
  return <h1 className={headingVariants({ className, as })} {...props} />;
};

Heading.displayName = "Heading";

export { Heading };
