import { join } from "@lib/utils";
import React, {
  ReactNode,
  ComponentPropsWithoutRef,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  Children,
  isValidElement,
  useEffect
} from "react";
import "./avatar.css";

interface AvatarProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  icon?: ReactNode;
  badge?: ReactNode;
}

interface AvatarImageProps {
  children?: React.ReactNode;
  src?: string;
  alt?: string;
}

interface AvatarComponent
  extends ForwardRefExoticComponent<
    AvatarProps & RefAttributes<HTMLDivElement>
  > {
  Image: React.FC<AvatarImageProps>;
  Fallback: React.FC<ComponentPropsWithoutRef<"span">>;
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, size = "md", icon, badge, children, ...props }, ref) => {
    useEffect(() => {
      Children.forEach(children, child => {
        if (!isValidElement(child)) return;
        if (child.type === Avatar.Image) {
          console.log(child.props);
        }
      });
    }, [children]);

    return (
      <div {...props} ref={ref} className={join("avatar-13", size, className)}>
        {children}
      </div>
    );
  }
) as AvatarComponent;

const AvatarImage = forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ src, alt, ...props }, ref) => {
    return (
      <img
        {...props}
        ref={ref}
        src={src}
        alt={alt}
        className="avatar-13-image"
      />
    );
  }
);

const AvatarFallback = forwardRef<
  HTMLSpanElement,
  ComponentPropsWithoutRef<"span">
>(({ children, ...props }, ref) => {
  return (
    <span {...props} ref={ref}>
      {children}
    </span>
  );
});

Avatar.Image = AvatarImage;
Avatar.Fallback = AvatarFallback;

export { Avatar };
