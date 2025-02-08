// Wrapper for using tailwindcss in storybook

import React, { useEffect, useState } from "react";
import { cn } from "./utils";
import { IconButton } from "./icon-button/icon-button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import "~/index.css";

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
      <IconButton
        className="absolute top-2 left-2"
        icon={theme === "dark" ? <SunIcon /> : <MoonIcon />}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      />

      {children}
    </div>
  );
};

export { Frame };
