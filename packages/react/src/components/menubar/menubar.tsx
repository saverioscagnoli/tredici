import React, {
  ComponentPropsWithoutRef,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
  forwardRef
} from "react";
import * as RxMenubar from "@radix-ui/react-menubar";
import {
  ArrowRightIcon,
  CheckIcon,
  DotFilledIcon
} from "@radix-ui/react-icons";
import { cn } from "../../lib";

interface MenubarComponent
  extends ForwardRefExoticComponent<
    RxMenubar.MenubarProps & RefAttributes<HTMLDivElement>
  > {
  Menu: typeof MenubarMenu;
  Trigger: typeof MenubarTrigger;
  Content: typeof MenubarContent;
  Label: typeof MenubarLabel;
  Item: typeof MenubarItem;
  Group: typeof MenubarGroup;
  CheckItem: typeof MenubarCheckItem;
  RadioGroup: typeof MenubarRadioGroup;
  RadioItem: typeof MenubarRadioItem;
  Sub: typeof MenubarSub;
  SubTrigger: typeof MenubarSubTrigger;
  SubContent: typeof MenubarSubContent;
  Separator: typeof MenubarSeparator;
  Arrow: typeof MenubarArrow;
}

export type MenubarProps = RxMenubar.MenubarProps;

const Menubar = forwardRef<HTMLDivElement, MenubarProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxMenubar.Root
        {...props}
        ref={ref}
        className={cn(
          "p-0.5 rounded-md flex justify-center items-center dark:bg-18181b bg-fafafa border border-gray-600/20",
          className
        )}
      />
    );
  }
) as MenubarComponent;

export type MenubarMenuProps = RxMenubar.MenubarMenuProps;

const MenubarMenu: React.FC<MenubarMenuProps> = props => {
  return <RxMenubar.Menu {...props} />;
};

export type MenubarTriggerProps = ComponentPropsWithoutRef<"button">;

const MenubarTrigger = forwardRef<HTMLButtonElement, MenubarTriggerProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxMenubar.Trigger asChild>
        <button
          className={cn(
            "h-6 px-2 text-sm inline-flex justify-center items-center font-semibold rounded select-none cursor-pointer transition-colors disabled:cursor-not-allowed dark:text-fafafa text-18181b bg-transparent dark:hover:bg-gray-950 hover:bg-gray-200 dark:data-[state='open']:bg-gray-950 data-[state='open']:bg-gray-200",
            className
          )}
          {...props}
          ref={ref}
        />
      </RxMenubar.Trigger>
    );
  }
);
("");

export type MenubarContentProps = RxMenubar.MenubarContentProps;

const MenubarContent = forwardRef<HTMLDivElement, MenubarContentProps>(
  ({ className, sideOffset = 7, ...props }, ref) => {
    return (
      <RxMenubar.Portal>
        <RxMenubar.Content
          {...props}
          ref={ref}
          sideOffset={sideOffset}
          className={cn(
            "min-w-[12rem] p-1 rounded dark:bg-fafafa bg-18181b dark:text-18181b text-fafafa shadow",
            className
          )}
        />
      </RxMenubar.Portal>
    );
  }
);

export type MenubarLabelProps = RxMenubar.MenubarLabelProps;

const MenubarLabel = forwardRef<HTMLDivElement, MenubarLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxMenubar.Label
        {...props}
        ref={ref}
        className={cn("text-xs p-1", className)}
      />
    );
  }
);

export type MenubarItemProps = RxMenubar.MenubarItemProps;

const MenubarItem = forwardRef<HTMLDivElement, MenubarItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxMenubar.Item
        {...props}
        ref={ref}
        className={cn(
          "flex items-center cursor-pointer p-1 focus:outline-none focus:bg-gray-600/30 rounded",
          className
        )}
      />
    );
  }
);

export type MenubarGroupProps = RxMenubar.MenubarGroupProps;

const MenubarGroup = forwardRef<HTMLDivElement, MenubarGroupProps>(
  (props, ref) => {
    return <RxMenubar.Group {...props} ref={ref} />;
  }
);

export interface MenubarCheckItemProps
  extends RxMenubar.MenubarCheckboxItemProps {
  icon?: React.ReactNode;
}

const MenubarCheckItem = forwardRef<HTMLDivElement, MenubarCheckItemProps>(
  ({ children, className, icon = <CheckIcon />, ...props }, ref) => {
    return (
      <RxMenubar.CheckboxItem
        {...props}
        ref={ref}
        className={cn(
          "flex gap-1 items-center cursor-pointer p-1 focus:outline-none focus:bg-gray-600/30 rounded",
          className
        )}
      >
        <RxMenubar.ItemIndicator>{icon}</RxMenubar.ItemIndicator>
        {children}
      </RxMenubar.CheckboxItem>
    );
  }
);

export type MenubarRadioGroupProps = RxMenubar.MenubarRadioGroupProps;

const MenubarRadioGroup = forwardRef<HTMLDivElement, MenubarRadioGroupProps>(
  (props, ref) => {
    return <RxMenubar.RadioGroup {...props} ref={ref} />;
  }
);

export interface MenubarRadioItemProps extends RxMenubar.MenubarRadioItemProps {
  icon?: React.ReactNode;
}

const MenubarRadioItem = forwardRef<HTMLDivElement, MenubarRadioItemProps>(
  ({ children, className, icon = <DotFilledIcon />, ...props }, ref) => {
    return (
      <RxMenubar.RadioItem
        {...props}
        ref={ref}
        className={cn(
          "flex gap-1 items-center cursor-pointer p-1 focus:outline-none focus:bg-gray-600/30 rounded",
          className
        )}
      >
        <RxMenubar.ItemIndicator>{icon}</RxMenubar.ItemIndicator>
        {children}
      </RxMenubar.RadioItem>
    );
  }
);

export type MenubarSubProps = RxMenubar.MenubarSubProps;

const MenubarSub: React.FC<MenubarSubProps> = props => {
  return <RxMenubar.Sub {...props} />;
};

export interface MenubarSubTriggerProps
  extends RxMenubar.MenubarSubTriggerProps {
  icon?: ReactNode;
}

const MenubarSubTrigger = forwardRef<HTMLDivElement, MenubarSubTriggerProps>(
  ({ children, className, icon = <ArrowRightIcon />, ...props }, ref) => {
    return (
      <RxMenubar.SubTrigger
        {...props}
        ref={ref}
        className={cn(
          "flex justify-between items-center cursor-pointer p-1 focus:outline-none focus:bg-gray-600/30 rounded",
          className
        )}
      >
        {children}
        {icon}
      </RxMenubar.SubTrigger>
    );
  }
);

export type MenubarSubContentProps = RxMenubar.MenubarSubContentProps;

const MenubarSubContent = forwardRef<HTMLDivElement, MenubarSubContentProps>(
  ({ className, sideOffset = 7, ...props }, ref) => {
    return (
      <RxMenubar.Portal>
        <RxMenubar.Content
          {...props}
          ref={ref}
          sideOffset={sideOffset}
          className={cn(
            "min-w-[12rem] p-1 rounded dark:bg-fafafa bg-18181b dark:text-18181b text-fafafa shadow",
            className
          )}
        />
      </RxMenubar.Portal>
    );
  }
);

export type MenubarSeparatorProps = RxMenubar.MenubarSeparatorProps;

const MenubarSeparator = forwardRef<HTMLDivElement, MenubarSeparatorProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxMenubar.Separator
        {...props}
        ref={ref}
        className={cn("h-[1px] m-1 bg-gray-600/50", className)}
      />
    );
  }
);

export type MenubarArrowProps = RxMenubar.MenubarArrowProps;

const MenubarArrow = forwardRef<SVGSVGElement, MenubarArrowProps>(
  ({ className, width = 7, height = 3, ...props }, ref) => {
    return (
      <RxMenubar.Arrow
        {...props}
        ref={ref}
        width={width}
        height={height}
        className={cn("dark:fill-fafafa fill-18181b", className)}
      />
    );
  }
);

Menubar.Menu = MenubarMenu;
Menubar.Trigger = MenubarTrigger;
Menubar.Content = MenubarContent;
Menubar.Label = MenubarLabel;
Menubar.Item = MenubarItem;
Menubar.Group = MenubarGroup;
Menubar.CheckItem = MenubarCheckItem;
Menubar.RadioGroup = MenubarRadioGroup;
Menubar.RadioItem = MenubarRadioItem;
Menubar.Sub = MenubarSub;
Menubar.SubTrigger = MenubarSubTrigger;
Menubar.SubContent = MenubarSubContent;
Menubar.Separator = MenubarSeparator;
Menubar.Arrow = MenubarArrow;

export { Menubar };
