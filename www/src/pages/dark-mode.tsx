import { CodeBlock, FooterButtons, Heading, Toc } from "@components";

const ctxCode = `import { Dispatch, SetStateAction, createContext } from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: Dispatch<SetStateAction<Theme>>;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

export { ThemeContext };
export type { Theme };`;

const hookCode = `import { ThemeContext } from "@contexts";
import { useContext } from "react";

const useTheme = () => {
  const ctx = useContext(ThemeContext);

  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return ctx;
};

export { useTheme };`;

const themeProviderCode = `import { Theme, ThemeContext } from "@contexts";
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

export { ThemeProvider }`;

const DarkMode = () => {
  return (
    <Toc>
      <Heading as="h1">Dark theme</Heading>
      <p className="mt-4 text-lg">
        Tredici uses the Tailwind dark class to enable dark mode, but it does
        not provide a way to toggle or examine the theme state.
      </p>

      <p className="mt-4 text-lg">
        You can implement any solution you'd like, but here's how I do it:
      </p>

      <p className="mt-4 text-lg">
        First, create a context to manage the theme state.
      </p>

      <CodeBlock className="mt-4" code={ctxCode} language="typescript" />

      <p className="mt-4 text-lg">
        Then, you can create a custom hook to use the context in a re-usable
        way.
      </p>

      <CodeBlock className="mt-4" code={hookCode} language="typescript" />

      <p className="mt-4 text-lg">
        Finally, create a <code>ThemeProvider</code> component and use it to
        wrap the entire app.
      </p>

      <CodeBlock
        className="mt-4"
        code={themeProviderCode}
        language="typescript"
      />

      <FooterButtons labels={["Alert Dialog", "Getting Started"]} />
    </Toc>
  );
};

export { DarkMode };
