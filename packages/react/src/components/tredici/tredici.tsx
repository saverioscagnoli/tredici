import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  ReactNode,
  useState,
  useEffect
} from "react";
import styles from "./tredici.css";
import { ColorScheme } from "../../types";

if (import.meta.env.VITE_ENV === "dev") {
  import("../../styles/global.css");
}

type Theme = "light" | "dark";

interface ThemeContextProps {
  /**
   * The current theme.
   */
  theme: Theme;

  /**
   * Sets the current theme.
   */
  setTheme: Dispatch<SetStateAction<Theme>>;

  /**
   * Toggles the current theme.
   */
  toggle: () => void;

  /**
   * The default color scheme.
   */
  defaultColorScheme: ColorScheme;
}

const ThemeContext = createContext<ThemeContextProps | null>(null);

const useTheme = () => {
  const ctx = useContext(ThemeContext);

  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return ctx;
};

interface TrediciProps {
  /**
   * The content of the app.
   */
  children: ReactNode;

  /**
   * The default color scheme.
   * @see ColorScheme
   * @default "amethyst"
   */
  defaultColorScheme?: ColorScheme;
}

const Tredici: React.FC<TrediciProps> = ({
  children,
  defaultColorScheme = "amethyst",
  ...props
}) => {
  const [theme, setTheme] = useState<Theme>("light");
  const toggle = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
  }, [theme]);

  useEffect(() => {
    const _style = document.createElement("style");

    _style.innerHTML = styles;
    document.head.appendChild(_style);

    return () => {
      document.head.removeChild(_style);
    };
  }, []);

  return (
    <ThemeContext.Provider
      {...props}
      value={{ theme, setTheme, toggle, defaultColorScheme }}
    >
      <div className="antialiased">{children}</div>
    </ThemeContext.Provider>
  );
};

export { Tredici, useTheme };
