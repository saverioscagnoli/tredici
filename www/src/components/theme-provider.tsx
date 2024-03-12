import { Theme, ThemeContext } from "@contexts";
import React, { ReactNode, useEffect, useState } from "react";

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => setTheme(p => (p === "light" ? "dark" : "light"));

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, toggleTheme }}
      children={children}
    />
  );
};

export { ThemeProvider };
