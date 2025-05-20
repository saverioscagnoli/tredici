import * as RxMenubar from "@radix-ui/react-menubar";
import { cva } from "class-variance-authority";
import React, {
  createContext,
  useContext,
  type ReactNode,
  type RefObject
} from "react";
import { cn } from "~/lib/utils";
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon
} from "@radix-ui/react-icons";

import "@radix-ui/colors/slate.css";
import "@radix-ui/colors/slate-dark.css";

import "@radix-ui/colors/plum.css";
import "@radix-ui/colors/plum-dark.css";

import "./menubar.css";

type MenubarColorScheme =
  | "plum"
  | "red"
  | "blue"
  | "teal"
  | "cyan"
  | "green"
  | "amber"
  | "orange"
  | "gray";

export type { MenubarColorScheme };

const ColorSchemeContext = createContext<MenubarColorScheme | null>(null);

const useColorScheme = () => {
  const context = useContext(ColorSchemeContext);

  if (context === null) {
    throw new Error("useColorScheme must be used within a MenubarProvider");
  }

  return context;
};

type MenubarProps = RxMenubar.MenubarProps & {
  colorScheme?: MenubarColorScheme;
};

export type { MenubarProps };

type MenubarComponent = React.FC<MenubarProps> & {
  Menu: typeof MenubarMenu;
  Trigger: typeof MenubarTrigger;
  Content: typeof MenubarContent;
  Label: typeof MenubarLabel;
  Item: typeof MenubarItem;
  CheckboxItem: typeof MenubarCheckboxItem;
  RadioGroup: typeof MenubarRadioGroup;
  RadioItem: typeof MenubarRadioItem;
  Sub: typeof MenubarSub;
  SubTrigger: typeof MenubarSubTrigger;
  SubContent: typeof MenubarSubContent;
  Separator: typeof MenubarSeparator;
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

const Menubar: MenubarComponent = ({ colorScheme = "plum", ...props }) => {
  return (
    <ColorSchemeContext.Provider value={colorScheme}>
      <RxMenubar.Root {...props} />
    </ColorSchemeContext.Provider>
  );
};

type MenubarTriggerProps = RxMenubar.MenubarTriggerProps & {
  ref?: RefObject<HTMLButtonElement>;
};

export type { MenubarTriggerProps };

type MenubarMenuProps = RxMenubar.MenubarMenuProps;

export type { MenubarMenuProps };

const MenubarMenu = RxMenubar.MenubarMenu;

const MenubarTrigger: React.FC<MenubarTriggerProps> = ({
  className,
  ...props
}) => (
  <RxMenubar.Trigger
    className={cn(
      "px-2 py-0.5",
      "rounded",
      "text-sm font-normal",
      "focus:bg-[var(--gray-4)]",
      "data-[state=open]:bg-[var(--gray-4)]",
      className
    )}
    {...props}
  />
);

type MenubarContentProps = RxMenubar.MenubarContentProps & {
  ref?: RefObject<HTMLDivElement>;
};

export type { MenubarContentProps };

const MenubarContent: React.FC<MenubarContentProps> = ({
  className,
  ...props
}) => {
  return (
    <RxMenubar.Portal>
      <RxMenubar.Content
        className={cn(
          "min-w-fit h-fit",
          "p-1",
          "border border-[var(--gray-7)]",
          "rounded shadow-md",
          "bg-[var(--slate-1)]",
          "text-[var(--slate-12)]",
          "select-none",
          "menubar-content",
          className
        )}
        {...props}
      />
    </RxMenubar.Portal>
  );
};

type MenubarLabelProps = RxMenubar.MenubarLabelProps & {
  ref?: RefObject<HTMLDivElement>;
};

export type { MenubarLabelProps };

const MenubarLabel: React.FC<MenubarLabelProps> = ({ className, ...props }) => {
  return <RxMenubar.Label className={cn("px-3 py-1", "text-xs")} {...props} />;
};

const MenubarItemVariants = cva(
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

type MenubarItemProps = RxMenubar.MenubarItemProps & {
  colorScheme?: MenubarColorScheme;
  leftIcon?: ReactNode;
  ref?: RefObject<HTMLDivElement>;
};

export type { MenubarItemProps };

const MenubarItem: React.FC<MenubarItemProps> = ({
  colorScheme,
  leftIcon,
  children,
  className,
  ...props
}) => {
  return (
    <RxMenubar.Item
      className={MenubarItemVariants({
        className,
        colorScheme: colorScheme ?? useColorScheme()
      })}
      {...props}
    >
      <LeftIcon icon={leftIcon} />
      {children}
    </RxMenubar.Item>
  );
};

type MenubarCheckboxItemProps = RxMenubar.MenubarCheckboxItemProps & {
  colorScheme?: MenubarColorScheme;
  icon?: ReactNode;
  ref?: RefObject<HTMLDivElement>;
};

export type { MenubarCheckboxItemProps };

const MenubarCheckboxItem: React.FC<MenubarCheckboxItemProps> = ({
  checked,
  colorScheme,
  icon = <CheckIcon />,
  className,
  children,
  ...props
}) => {
  return (
    <RxMenubar.CheckboxItem
      className={MenubarItemVariants({
        className,
        colorScheme: colorScheme ?? useColorScheme()
      })}
      checked={checked}
      {...props}
    >
      <LeftIcon
        icon={
          checked ? (
            <RxMenubar.ItemIndicator>{icon}</RxMenubar.ItemIndicator>
          ) : (
            <span className="px-1.5" />
          )
        }
      />
      {children}
    </RxMenubar.CheckboxItem>
  );
};

type MenubarRadioGroupProps = RxMenubar.MenubarRadioGroupProps;

export type { MenubarRadioGroupProps };

const MenubarRadioGroup = RxMenubar.MenubarRadioGroup;

type MenubarRadioItemProps = RxMenubar.MenubarRadioItemProps & {
  colorScheme?: MenubarColorScheme;
  icon?: ReactNode;
  ref?: RefObject<HTMLDivElement>;
};

export type { MenubarRadioItemProps };

const MenubarRadioItem: React.FC<MenubarRadioItemProps> = ({
  colorScheme,
  icon = <DotFilledIcon />,
  children,
  className,
  ...props
}) => {
  return (
    <RxMenubar.RadioItem
      className={MenubarItemVariants({
        className,
        colorScheme: colorScheme ?? useColorScheme()
      })}
      {...props}
    >
      <div className={cn("w-7", "flex items-center justify-center")}>
        <RxMenubar.ItemIndicator>{icon}</RxMenubar.ItemIndicator>
      </div>
      {children}
    </RxMenubar.RadioItem>
  );
};

type MenubarSubProps = RxMenubar.MenubarSubProps;

export type { MenubarSubProps };

const MenubarSub = RxMenubar.MenubarSub;

type MenubarSubTriggerProps = RxMenubar.MenubarSubTriggerProps & {
  colorScheme?: MenubarColorScheme;
  leftIcon?: ReactNode;
  icon?: ReactNode;
};

export type { MenubarSubTriggerProps };

const MenubarSubTrigger: React.FC<MenubarSubTriggerProps> = ({
  colorScheme,
  leftIcon,
  icon = <ChevronRightIcon />,
  children,
  className,
  ...props
}) => {
  return (
    <RxMenubar.SubTrigger
      className={MenubarItemVariants({
        className: cn("relative", className),
        colorScheme: colorScheme ?? useColorScheme()
      })}
      {...props}
    >
      <LeftIcon icon={leftIcon} />
      {children}
      <span className={cn("absolute right-1")}>{icon}</span>
    </RxMenubar.SubTrigger>
  );
};

type MenubarSubContentProps = RxMenubar.MenubarSubContentProps & {
  ref?: RefObject<HTMLDivElement>;
};

export type { MenubarSubContentProps };

const MenubarSubContent: React.FC<MenubarSubContentProps> = ({
  className,
  ...props
}) => {
  return (
    <RxMenubar.Portal>
      <RxMenubar.SubContent
        className={cn(
          "min-w-fit h-fit",
          "p-1",
          "border border-[var(--gray-7)]",
          "rounded shadow-md",
          "bg-[var(--slate-1)]",
          "text-[var(--slate-12)]",
          "select-none",
          "menubar-subcontent",
          className
        )}
        {...props}
      />
    </RxMenubar.Portal>
  );
};

type MenubarSeparatorProps = RxMenubar.MenubarSeparatorProps & {
  ref?: RefObject<HTMLDivElement>;
};

export type { MenubarSeparatorProps };

const MenubarSeparator: React.FC<MenubarSeparatorProps> = ({
  className,
  ...props
}) => {
  return (
    <RxMenubar.Separator
      className={cn("h-[1px] my-1", "bg-[var(--gray-7)]", className)}
      {...props}
    />
  );
};

Menubar.displayName = "Menubar";
MenubarMenu.displayName = "MenubarMenu";
MenubarTrigger.displayName = "MenubarTrigger";
MenubarContent.displayName = "MenubarContent";
MenubarLabel.displayName = "MenubarLabel";
MenubarItem.displayName = "MenubarItem";
MenubarCheckboxItem.displayName = "MenubarCheckboxItem";
MenubarRadioGroup.displayName = "MenubarRadioGroup";
MenubarRadioItem.displayName = "MenubarRadioItem";
MenubarSub.displayName = "MenubarSub";
MenubarSubTrigger.displayName = "MenubarSubTrigger";
MenubarSubContent.displayName = "MenubarSubContent";
MenubarSeparator.displayName = "MenubarSeparator";

Menubar.Menu = MenubarMenu;
Menubar.Trigger = MenubarTrigger;
Menubar.Content = MenubarContent;
Menubar.Label = MenubarLabel;
Menubar.Item = MenubarItem;
Menubar.CheckboxItem = MenubarCheckboxItem;
Menubar.RadioGroup = MenubarRadioGroup;
Menubar.RadioItem = MenubarRadioItem;
Menubar.Sub = MenubarSub;
Menubar.SubTrigger = MenubarSubTrigger;
Menubar.SubContent = MenubarSubContent;
Menubar.Separator = MenubarSeparator;

export { Menubar };
