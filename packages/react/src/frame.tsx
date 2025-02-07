// Wrapper for using tailwindcss in storybook

import React, { useEffect, useState } from "react";

import "~/index.css";
import { cn } from "./utils";
import { Button } from "./button/button";

const Frame: React.FC<React.ComponentProps<"div">> = ({
  children,
  className,
  ...props
}) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.remove("light");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.add("light");
    }
  }, [theme]);

  return (
    <div
      className={cn(
        className,
        "w-screen h-screen",
        "flex justify-center items-center"
      )}
      {...props}
    >
      <Button
        className="absolute top-2 left-2"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme}
      </Button>
      {children}
    </div>
  );
};

export { Frame };
