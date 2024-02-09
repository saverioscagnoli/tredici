import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState
} from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  setTheme: Dispatch<SetStateAction<Theme>>;
  toggleTheme: () => void;
}

export type { ThemeContextProps, Theme };

const ThemeContext = createContext<ThemeContextProps | null>(null);

interface ThemeContextProviderProps {
  children: ReactNode;
}

const ThemeContextProvider: React.FC<ThemeContextProviderProps> = props => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => setTheme(p => (p === "dark" ? "light" : "dark"));

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, toggleTheme }}
      {...props}
    />
  );
};

export { ThemeContextProvider as Tredici };
export type { ThemeContextProviderProps as TrediciProps };

const useTheme = () => {
  const ctx = useContext(ThemeContext);

  if (!ctx) {
    throw new Error("useTheme must be used within a Tredici component");
  }

  return ctx;
};

export { useTheme };
