import { cn } from "@/lib/utils";

import "@/index.css";

import "@radix-ui/colors/slate.css";
import "@radix-ui/colors/slate-dark.css";
import { ComponentProps, createEffect, createSignal } from "solid-js";
import { IconButton } from "../icon-button";
import { BsMoonFill, BsSun } from "solid-icons/bs";

const Frame = ({
  children,

  full,
  ...props
}: ComponentProps<"div"> & { full?: boolean }) => {
  const [theme, setTheme] = createSignal<"light" | "dark">("light");
  const isDark = theme() === "dark";

  const toggleTheme = () => setTheme(theme() === "light" ? "dark" : "light");

  createEffect(() => {
    const root = document.documentElement;

    if (theme() === "light") {
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
    }
  });

  return (
    <div class="w-screen h-screen flex justify-center">
      <div
        class={cn(
          full ? "w-screen h-screen" : "w-1/2 h-96",
          "relative flex justify-center items-center bg-[var(--slate-1)] border transition-colors rounded shadow",
          props.class
        )}
        {...props}
      >
        <IconButton
          colorScheme="plum"
          size="sm"
          class={full ? "absolute top-8 right-12" : "absolute top-4 right-4"}
          icon={isDark ? <BsSun /> : <BsMoonFill />}
          onClick={toggleTheme}
        />
        {children}
      </div>
    </div>
  );
};

export { Frame };
