import * as RxContextMenu from "@radix-ui/react-context-menu";
import React, { createContext, type RefObject } from "react";
import { cn } from "~/lib/utils";

type ContextMenuColorScheme =
  | "plum"
  | "red"
  | "blue"
  | "teal"
  | "cyan"
  | "green"
  | "amber"
  | "orange"
  | "gray";

const ColorSchemeContext = createContext<ContextMenuColorScheme | null>(null);

type ContextMenuProps = RxContextMenu.ContextMenuProps & {
  colorScheme?: ContextMenuColorScheme;
};

type ContextMenuComponent = React.FC<ContextMenuProps> & {
  Trigger: typeof ContextMenuTrigger;
};

const ContextMenu: ContextMenuComponent = ({
  colorScheme = "plum",
  ...props
}) => {
  return (
    <ColorSchemeContext.Provider value={colorScheme}>
      <RxContextMenu.Root {...props} />
    </ColorSchemeContext.Provider>
  );
};

type ContextMenuTriggerProps = RxContextMenu.ContextMenuTriggerProps & {
  ref?: RefObject<HTMLDivElement>;
};

const ContextMenuTrigger: React.FC<ContextMenuTriggerProps> = props => (
  <RxContextMenu.Trigger {...props} />
);

type ContextMenuContentProps = RxContextMenu.ContextMenuContentProps & {
  ref?: RefObject<HTMLDivElement>;
};

const ContextMenuContent: React.FC<ContextMenuContentProps> = ({
  className,
  ...props
}) => {
  return (
    <RxContextMenu.Portal>
      <RxContextMenu.Content
        className={cn(
          "min-w-fit h-fit",
          "p-1",
          "border border-[var(--gray-7)]",
          "rounded shadow-md",
          "bg-[var(--slate-1)]",
          "text-[var(--slate-12)]",
          className
        )}
        {...props}
      />
    </RxContextMenu.Portal>
  );
};

type ContextMenuLabelProps = RxContextMenu.ContextMenuLabelProps & {}