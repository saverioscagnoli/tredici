import { Theme, ThemeContext } from "@contexts";
import React, { ReactNode, useEffect, useState } from "react";

type ThemeProviderProps = {
  children: ReactNode;
};

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = window.localStorage.getItem("theme");
    return storedTheme ? (storedTheme as Theme) : "light";
  });

  const toggleTheme = () => setTheme(p => (p === "light" ? "dark" : "light"));

  useEffect(() => {
    window.localStorage.setItem("theme", theme);

    document.documentElement.classList.remove("dark");
    document.documentElement.classList.remove("light");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
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
