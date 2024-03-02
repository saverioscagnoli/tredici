import { ComponentProps, useState, useEffect } from "react";
import "@/index.css";
import { IconButton } from "@/components/icon-button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

const Frame: React.FC<ComponentProps<"div">> = ({ children, ...props }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const isDark = theme === "dark";

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  useEffect(() => {
    const root = document.documentElement;

    if (theme === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  }, [theme]);

  return (
    <div className="w-screen h-screen flex justify-center">
      <div
        className="w-1/2 h-96 relative flex justify-center items-center bg-[#fafafa] dark:bg-[#18181b] border transition-colors rounded shadow"
        {...props}
      >
        <IconButton
          className="absolute top-4 right-4"
          icon={isDark ? <SunIcon /> : <MoonIcon />}
          onClick={toggleTheme}
        />
        {children}
      </div>
    </div>
  );
};

export { Frame };
