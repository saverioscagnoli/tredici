import { join } from "@lib/utils";
import React, {
  ReactNode,
  ComponentPropsWithoutRef,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
  createContext,
  useContext,
  CSSProperties
} from "react";
import "./avatar.css";
import { useBool } from "@hooks/use-bool";
import { PersonIcon } from "@radix-ui/react-icons";

interface AvatarContextProps {
  loaded: boolean;
  error: boolean;
  onLoad: () => void;
  onError: () => void;
}

const AvatarContext = createContext<AvatarContextProps | null>(null);

interface AvatarContextProviderProps {
  children?: ReactNode;
}

const AvatarContextProvider: React.FC<AvatarContextProviderProps> = ({
  children,
  ...props
}) => {
  const [loaded, { setTrue: onLoad }] = useBool(false);
  const [error, { setTrue: onError }] = useBool(false);

  return (
    <AvatarContext.Provider
      {...props}
      value={{ loaded, error, onLoad, onError }}
    >
      {children}
    </AvatarContext.Provider>
  );
};

const useAvatarContext = () => {
  const ctx = useContext(AvatarContext);

  if (!ctx) {
    throw new Error(
      "useAvatarContext must be used within AvatarContextProvider"
    );
  }

  return ctx;
};

interface AvatarProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  icon?: ReactNode;
  badge?: ReactNode;
}

interface AvatarComponent
  extends ForwardRefExoticComponent<
    AvatarProps & RefAttributes<HTMLDivElement>
  > {
  Image: React.FC<AvatarImageProps>;
  Fallback: React.FC<ComponentPropsWithoutRef<"span">>;
}

const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  return (
    <AvatarContextProvider>
      <AvatarRoot ref={ref} {...props} />
    </AvatarContextProvider>
  );
}) as AvatarComponent;

const AvatarRoot = forwardRef<HTMLDivElement, AvatarProps>(
  ({ className, size = "md", children, ...props }, ref) => {
    return (
      <div {...props} ref={ref} className={join("avatar-13", size, className)}>
        {children}
      </div>
    );
  }
);

interface AvatarImageProps {
  children?: React.ReactNode;
  src?: string;
  alt?: string;
  style?: CSSProperties;
}

const AvatarImage = forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ src, alt, style, ...props }, ref) => {
    const { error, loaded, onLoad, onError } = useAvatarContext();

    return (
      <img
        {...props}
        ref={ref}
        src={src}
        alt={alt}
        className="avatar-13-image"
        onLoad={onLoad}
        onError={onError}
        style={{
          display: loaded && !error ? "block" : "none",
          ...style
        }}
      />
    );
  }
);

interface AvatarFallbackProps extends ComponentPropsWithoutRef<"span"> {
  icon?: ReactNode;
}

const AvatarFallback = forwardRef<HTMLSpanElement, AvatarFallbackProps>(
  ({ children, className, style, icon = <PersonIcon />, ...props }, ref) => {
    const { loaded, error } = useAvatarContext();

    return (
      <span
        {...props}
        ref={ref}
        className={join("avatar-13-fallback", className)}
        style={{
          display: loaded && !error ? "none" : "flex",
          ...style
        }}
      >
        {!children ? <span className="avatar-13-icon">{icon}</span> : children}
      </span>
    );
  }
);

Avatar.Image = AvatarImage;
Avatar.Fallback = AvatarFallback;

export { Avatar };
