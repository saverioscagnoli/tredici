import * as RxContextMenu from "@radix-ui/react-context-menu";
import { cva } from "class-variance-authority";
import React, {
  createContext,
  useContext,
  type ReactNode,
  type RefObject
} from "react";
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon
} from "@radix-ui/react-icons";
import { cn } from "~/lib/utils";

import "@radix-ui/colors/slate.css";
import "@radix-ui/colors/slate-dark.css";

import "@radix-ui/colors/plum.css";
import "@radix-ui/colors/plum-dark.css";

import "./context-menu.css";

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

export type { ContextMenuColorScheme };

const ColorSchemeContext = createContext<ContextMenuColorScheme | null>(null);

const useColorScheme = () => {
  const context = useContext(ColorSchemeContext);

  if (context === null) {
    throw new Error("useColorScheme must be used within a ContextMenuProvider");
  }

  return context;
};

type ContextMenuProps = RxContextMenu.ContextMenuProps & {
  colorScheme?: ContextMenuColorScheme;
};

export type { ContextMenuProps };

type ContextMenuComponent = React.FC<ContextMenuProps> & {
  Trigger: typeof ContextMenuTrigger;
  Content: typeof ContextMenuContent;
  Label: typeof ContextMenuLabel;
  Item: typeof ContextMenuItem;
  CheckboxItem: typeof ContextMenuCheckboxItem;
  RadioGroup: typeof ContextMenuRadioGroup;
  RadioItem: typeof ContextMenuRadioItem;
  Sub: typeof ContextMenuSub;
  SubTrigger: typeof ContextMenuSubTrigger;
  SubContent: typeof ContextMenuSubContent;
  Separator: typeof ContextMenuSeparator;
};

const LeftIcon: React.FC<{ icon: ReactNode }> = ({ icon }) => {
  return (
    <div
      className={cn("pl-1.5 pr-2", "inline-flex items-center justify-center")}
    >
      {icon}
    </div>
  );
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

export type { ContextMenuTriggerProps };

const ContextMenuTrigger: React.FC<ContextMenuTriggerProps> = props => (
  <RxContextMenu.Trigger {...props} />
);

type ContextMenuContentProps = RxContextMenu.ContextMenuContentProps & {
  ref?: RefObject<HTMLDivElement>;
};

export type { ContextMenuContentProps };

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
          "context-menu-content",
          className
        )}
        {...props}
      />
    </RxContextMenu.Portal>
  );
};

type ContextMenuLabelProps = RxContextMenu.ContextMenuLabelProps & {
  ref?: RefObject<HTMLDivElement>;
};

export type { ContextMenuLabelProps };

const ContextMenuLabel: React.FC<ContextMenuLabelProps> = ({
  className,
  ...props
}) => {
  return (
    <RxContextMenu.Label className={cn("px-3 py-1", "text-xs")} {...props} />
  );
};

const contextMenuItemVariants = cva(
  [
    "flex items-center",
    "pl-1 pr-4 py-[1px]",
    "text-sm",
    "rounded-xs",
    "outline-none font-normal",
    "focus:cursor-default",
    "data-[disabled]:opacity-30",
    "data-[disabled]:pointer-events-none"
  ],
  {
    variants: {
      colorScheme: {
        plum: "focus:bg-[var(--plum-9)] focus:text-[var(--slate-1)]",
        red: "focus:bg-[var(--red-9)] focus:text-[var(--slate-1)]",
        blue: "focus:bg-[var(--blue-9)] focus:text-[var(--slate-1)]",
        teal: "focus:bg-[var(--teal-9)] focus:text-[var(--slate-1)]",
        cyan: "focus:bg-[var(--cyan-9)] focus:text-[var(--slate-1)]",
        green: "focus:bg-[var(--green-9)] focus:text-[var(--slate-1)]",
        amber:
          "focus:bg-[var(--amber-9)] focus:text-[var(--slate-12)] focus:dark:text-[var(--slate-1)]",
        orange: "focus:bg-[var(--orange-9)] focus:text-[var(--slate-1)]",
        gray: "focus:bg-[var(--gray-4)] focus:text-[var(--slate-12)]"
      }
    }
  }
);

type ContextMenuItemProps = RxContextMenu.ContextMenuItemProps & {
  colorScheme?: ContextMenuColorScheme;
  leftIcon?: ReactNode;
  ref?: RefObject<HTMLDivElement>;
};

export type { ContextMenuItemProps };

const ContextMenuItem: React.FC<ContextMenuItemProps> = ({
  colorScheme,
  leftIcon,
  children,
  className,
  ...props
}) => {
  return (
    <RxContextMenu.Item
      className={contextMenuItemVariants({
        className,
        colorScheme: colorScheme ?? useColorScheme()
      })}
      {...props}
    >
      <LeftIcon icon={leftIcon} />
      {children}
    </RxContextMenu.Item>
  );
};

type ContextMenuCheckboxItemProps =
  RxContextMenu.ContextMenuCheckboxItemProps & {
    colorScheme?: ContextMenuColorScheme;
    icon?: ReactNode;
    ref?: RefObject<HTMLDivElement>;
  };

export type { ContextMenuCheckboxItemProps };

const ContextMenuCheckboxItem: React.FC<ContextMenuCheckboxItemProps> = ({
  checked,
  colorScheme,
  icon = <CheckIcon />,
  className,
  children,
  ...props
}) => {
  return (
    <RxContextMenu.CheckboxItem
      className={contextMenuItemVariants({
        className,
        colorScheme: colorScheme ?? useColorScheme()
      })}
      checked={checked}
      {...props}
    >
      <LeftIcon
        icon={
          checked ? (
            <RxContextMenu.ItemIndicator>{icon}</RxContextMenu.ItemIndicator>
          ) : (
            <span className="px-1.5" />
          )
        }
      />
      {children}
    </RxContextMenu.CheckboxItem>
  );
};

type ContextMenuRadioGroupProps = RxContextMenu.ContextMenuRadioGroupProps;

export type { ContextMenuRadioGroupProps };

const ContextMenuRadioGroup = RxContextMenu.ContextMenuRadioGroup;

type ContextMenuRadioItemProps = RxContextMenu.ContextMenuRadioItemProps & {
  colorScheme?: ContextMenuColorScheme;
  icon?: ReactNode;
  ref?: RefObject<HTMLDivElement>;
};

export type { ContextMenuRadioItemProps };

const ContextMenuRadioItem: React.FC<ContextMenuRadioItemProps> = ({
  colorScheme,
  icon = <DotFilledIcon />,
  children,
  className,
  ...props
}) => {
  return (
    <RxContextMenu.RadioItem
      className={contextMenuItemVariants({
        className,
        colorScheme: colorScheme ?? useColorScheme()
      })}
      {...props}
    >
      <div className={cn("w-7", "flex items-center justify-center")}>
        <RxContextMenu.ItemIndicator>{icon}</RxContextMenu.ItemIndicator>
      </div>
      {children}
    </RxContextMenu.RadioItem>
  );
};

type ContextMenuSubProps = RxContextMenu.ContextMenuSubProps;

export type { ContextMenuSubProps };

const ContextMenuSub = RxContextMenu.ContextMenuSub;

type ContextMenuSubTriggerProps = RxContextMenu.ContextMenuSubTriggerProps & {
  colorScheme?: ContextMenuColorScheme;
  leftIcon?: ReactNode;
  icon?: ReactNode;
};

export type { ContextMenuSubTriggerProps };

const ContextMenuSubTrigger: React.FC<ContextMenuSubTriggerProps> = ({
  colorScheme,
  leftIcon,
  icon = <ChevronRightIcon />,
  children,
  className,
  ...props
}) => {
  return (
    <RxContextMenu.SubTrigger
      className={contextMenuItemVariants({
        className: cn("relative", className),
        colorScheme: colorScheme ?? useColorScheme()
      })}
      {...props}
    >
      <LeftIcon icon={leftIcon} />
      {children}
      <span className={cn("absolute right-1")}>{icon}</span>
    </RxContextMenu.SubTrigger>
  );
};

type ContextMenuSubContentProps = RxContextMenu.ContextMenuSubContentProps & {
  ref?: RefObject<HTMLDivElement>;
};

export type { ContextMenuSubContentProps };

const ContextMenuSubContent: React.FC<ContextMenuSubContentProps> = ({
  className,
  ...props
}) => {
  return (
    <RxContextMenu.Portal>
      <RxContextMenu.SubContent
        className={cn(
          "min-w-fit h-fit",
          "p-1",
          "border border-[var(--gray-7)]",
          "rounded shadow-md",
          "bg-[var(--slate-1)]",
          "text-[var(--slate-12)]",
          "context-menu-subcontent",
          className
        )}
        {...props}
      />
    </RxContextMenu.Portal>
  );
};

type ContextMenuSeparatorProps = RxContextMenu.ContextMenuSeparatorProps & {
  ref?: RefObject<HTMLDivElement>;
};

export type { ContextMenuSeparatorProps };

const ContextMenuSeparator: React.FC<ContextMenuSeparatorProps> = ({
  className,
  ...props
}) => {
  return (
    <RxContextMenu.Separator
      className={cn("h-[1px] my-1", "bg-[var(--gray-7)]", className)}
      {...props}
    />
  );
};

ContextMenu.displayName = "ContextMenu";
ContextMenuTrigger.displayName = "ContextMenuTrigger";
ContextMenuContent.displayName = "ContextMenuContent";
ContextMenuLabel.displayName = "ContextMenuLabel";
ContextMenuItem.displayName = "ContextMenuItem";
ContextMenuCheckboxItem.displayName = "ContextMenuCheckboxItem";
ContextMenuRadioGroup.displayName = "ContextMenuRadioGroup";
ContextMenuRadioItem.displayName = "ContextMenuRadioItem";
ContextMenuSub.displayName = "ContextMenuSub";
ContextMenuSubTrigger.displayName = "ContextMenuSubTrigger";
ContextMenuSubContent.displayName = "ContextMenuSubContent";
ContextMenuSeparator.displayName = "ContextMenuSeparator";

ContextMenu.Trigger = ContextMenuTrigger;
ContextMenu.Content = ContextMenuContent;
ContextMenu.Label = ContextMenuLabel;
ContextMenu.Item = ContextMenuItem;
ContextMenu.CheckboxItem = ContextMenuCheckboxItem;
ContextMenu.RadioGroup = ContextMenuRadioGroup;
ContextMenu.RadioItem = ContextMenuRadioItem;
ContextMenu.Sub = ContextMenuSub;
ContextMenu.SubTrigger = ContextMenuSubTrigger;
ContextMenu.SubContent = ContextMenuSubContent;
ContextMenu.Separator = ContextMenuSeparator;

export { ContextMenu };
