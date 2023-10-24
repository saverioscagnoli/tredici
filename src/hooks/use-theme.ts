import { ThemeContext } from "@contexts/theme-context";
import { useContext } from "react";

const useTheme = () => {
  const ctx = useContext(ThemeContext);

  if (!ctx) {
    throw new Error(
      "useTheme must be used within a ThemeContextProvider | Tredici."
    );
  }

  return ctx;
};

export { useTheme };
