import { Key, Modifier, useHotkey } from "@util-hooks/use-hotkey";
import React from "react";
import { ThemeProvider, useTheme } from "~/contexts/theme";
import { cn } from "~/lib/utils";

type FrameProps = {
  children: React.ReactNode;
};

const FrameWrapper: React.FC<FrameProps> = props => {
  return <ThemeProvider {...props} />;
};

const Frame: React.FC<FrameProps> = props => {
  return (
    <FrameWrapper>
      <FrameContent {...props} />
    </FrameWrapper>
  );
};

const FrameContent: React.FC<FrameProps> = props => {
  const { toggleTheme } = useTheme();

  useHotkey([Modifier.Ctrl], Key.I, toggleTheme);

  return (
    <div
      className={cn("w-screen h-screen", "p-4", "bg-[var(--slate-1)]")}
      {...props}
    />
  );
};

export { Frame };
