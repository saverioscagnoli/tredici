import { Theme, ThemeContext } from "@contexts/theme-context";
import React, { ReactNode, useEffect, useState } from "react";
import "@styles/global.css";

interface ThemeContextProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
}

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
  defaultTheme = "light",
  ...props
}) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);
  const toggle = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle }} {...props}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContextProvider as Tredici };
