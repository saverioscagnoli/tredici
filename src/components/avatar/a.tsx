import { join } from "@lib/utils";
import {
  forwardRef,
  ComponentPropsWithoutRef,
  ElementRef,
  ReactNode
} from "react";
import { PersonIcon } from "@radix-ui/react-icons";
import { useBool } from "@hooks/use-bool";
import "./avatar.css";

interface AvatarProps extends ComponentPropsWithoutRef<"img"> {
  name?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  icon?: ReactNode;
  badge?: ReactNode;
}

const Avatar = forwardRef<ElementRef<"img">, AvatarProps>(
  (
    { className, name, size = "md", icon = <PersonIcon />, badge, ...props },
    ref
  ) => {
    const [loaded, { setTrue: onLoad }] = useBool(false);
    const [invalid, { setTrue: onError }] = useBool(false);

    console.log(join("avatar-13", size, className));

    return (
      <>
        <img
          {...props}
          ref={ref}
          className={join("avatar-13", size, className)}
          onLoad={onLoad}
          onError={onError}
          style={{
            display: !loaded || invalid ? "none" : "block"
          }}
        />
        <div
          className={join("avatar-13-name", size, className)}
          style={{
            display: loaded && !invalid ? "none" : "flex"
          }}
        >
          {name ? (
            <p>
              {name
                .split(" ")
                .map(n => n[0])
                .join("")}
            </p>
          ) : (
            <span className="avatar-13-icon">{icon}</span>
          )}
        </div>
        {badge}
      </>
    );
  }
);

interface AvatarBadgeProps {
  size?: string;
  id?: string;
  className?: string;
}

const AvatarBadge: React.FC<AvatarBadgeProps> = ({ className, ...props }) => {
  return (
    <div {...props} className={join("avatar-13-badge", className)}></div>
  );
};

export { Avatar, AvatarBadge };
