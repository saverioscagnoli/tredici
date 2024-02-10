import { useTheme, IconButton, IconButtonProps } from "@components";
import React from "react";
import { RxSun, RxMoon } from "react-icons/rx";

const ThemeButton: React.FC<IconButtonProps> = props => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <IconButton
      icon={isDark ? <RxSun /> : <RxMoon />}
      onClick={toggleTheme}
      {...props}
    />
  );
};

export { ThemeButton };
