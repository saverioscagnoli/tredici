import { ComponentProps, useState, useEffect } from "react";
import "@/index.css";

const Frame: React.FC<ComponentProps<"div">> = props => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

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
        className="w-1/2 h-96 relative flex justify-center items-center bg-[#fafafa] dark:bg-[#18181b] border transition-colors"
        {...props}
      >
        <button
          className="absolute top-2 left-2 text-black dark:text-white"
          onClick={toggleTheme}
        >
          {theme}
        </button>
      </div>
    </div>
  );
};

export { Frame };
