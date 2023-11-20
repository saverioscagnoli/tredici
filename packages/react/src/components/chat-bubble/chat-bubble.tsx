import React, { ComponentPropsWithoutRef, forwardRef } from "react";
import { c, cn } from "../../lib";
import { ColorScheme } from "../../types";

const chatBubble = c("break-words", {
  colorScheme: {
    amethyst:
      "dark:bg-amethyst-400 bg-amethyst-500 dark:text-18181b text-fafafa",
    teal: "dark:bg-teal-400 bg-teal-500 dark:text-18181b text-fafafa",
    green: "dark:bg-green-400 bg-green-500 dark:text-18181b text-fafafa",
    crimson: "dark:bg-crimson-400 bg-crimson-500 text-fafafa",
    starship:
      "dark:bg-starship-400 bg-starship-500 text-18181b",
    blue: "bg-blue-500 text-fafafa",
    pink: "bg-pink-500 text-fafafa",
    gray: "dark:bg-fafafa bg-18181b dark:text-18181b text-fafafa"
  }
});

const chatBubbleArrowSend = c(
  "w-0 h-0 mb-2.5 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-4",
  {
    colorScheme: {
      amethyst: " dark:border-l-amethyst-400 border-l-amethyst-500",
      teal: "dark:border-l-teal-400 border-l-teal-500",
      green: "dark:border-l-green-400 border-l-green-500",
      crimson: "dark:border-l-crimson-400 border-l-crimson-500",
      starship: "dark:border-l-starship-400 border-l-starship-500",
      blue: "border-l-blue-500",
      pink: "border-l-pink-500",
      gray: "dark:border-l-fafafa border-l-18181b"
    }
  }
);

const chatBubbleArrowReceive = c(
  "w-0 h-0 mb-2.5 border-t-4 border-t-transparent border-b-4 border-b-transparent border-r-4",
  {
    colorScheme: {
      amethyst: " dark:border-r-amethyst-400 border-r-amethyst-500",
      teal: "dark:border-r-teal-400 border-r-teal-500",
      green: "dark:border-r-green-400 border-r-green-500",
      crimson: "dark:border-r-crimson-400 border-r-crimson-500",
      starship: "dark:border-r-starship-400 border-r-starship-500",
      blue: "border-r-blue-500",
      pink: "border-r-pink-500",
      gray: "dark:border-r-fafafa border-r-18181b"
    }
  }
);

interface ChatBubbleProps extends ComponentPropsWithoutRef<"div"> {
  colorScheme?: ColorScheme;
  type?: "send" | "receive";
}

const ChatBubble = forwardRef<HTMLDivElement, ChatBubbleProps>(
  ({ children, className, colorScheme = "amethyst", type, ...props }, ref) => {
    return (
      <div className={cn("flex", className)}>
        {type === "receive" && (
          <div className="flex flex-col justify-between">
            <span></span>
            <div className={chatBubbleArrowReceive({ colorScheme })}></div>
          </div>
        )}
        <div
          {...props}
          ref={ref}
          className={cn(
            chatBubble({ colorScheme }),
            "max-w-md p-2 rounded-xl shadow-md"
          )}
        >
          {children}
        </div>
        {type === "send" && (
          <div className="flex flex-col justify-between">
            <span></span>
            <div className={chatBubbleArrowSend({ colorScheme })}></div>
          </div>
        )}
      </div>
    );
  }
);

export { ChatBubble };