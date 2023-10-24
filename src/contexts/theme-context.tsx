import { Dispatch, SetStateAction, createContext } from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
  toggle: () => void;
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

export { ThemeContext, type Theme };
