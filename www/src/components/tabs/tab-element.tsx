import { cn } from "@lib";
import React, { ReactNode } from "react";

import "@radix-ui/colors/gray.css";
import "@radix-ui/colors/gray-dark.css";

type TabElementProps = {
  children: ReactNode;
  to: string;
};

const TabElement: React.FC<TabElementProps> = ({ children, to }) => {
  const active = window.location.pathname === to;

  return (
    <a
      href={to}
      className={cn(
        "ml-1 px-6 py-1.5 rounded-lg cursor-pointer hover:underline underline-offset-2 hover:bg-[--gray-3]",
        active && "underline bg-[--gray-3]"
      )}
      children={children}
    />
  );
};

export { TabElement };
