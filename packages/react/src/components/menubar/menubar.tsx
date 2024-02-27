import { cn } from "@lib";
import { CheckIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import * as RxMenubar from "@radix-ui/react-menubar";
import {
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
  forwardRef
} from "react";

import "./menubar.css";

interface MenubarComponent
  extends ForwardRefExoticComponent<
    RxMenubar.MenubarProps & RefAttributes<HTMLDivElement>
  > {
  Menu: typeof RxMenubar.Menu;
  Trigger: typeof MenubarTrigger;
  Content: typeof MenubarContent;
  Label: typeof MenubarLabel;
  Item: typeof MenbarItem;
  CheckboxItem: typeof MenubarCheckboxItem;
  RadioGroup: typeof MenubarRadioGroup;
  RadioItem: typeof MenubarRadioItem;
  Sub: typeof MenubarSub;
  SubTrigger: typeof MenubarSubTrigger;
  SubContent: typeof MenubarSubContent;
  Separator: typeof MenubarSeparator;
  Arrow: typeof MenubarArrow;
}

type MenubarProps = RxMenubar.MenubarProps;

const Menubar = forwardRef<HTMLDivElement, MenubarProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxMenubar.Menubar
        className={cn(
          "w-fit p-1 flex justify-between items-center",
          "text-black",
          "dark:text-white",
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
) as MenubarComponent;

type MenubarMenuProps = RxMenubar.MenubarMenuProps;

const MenubarMenu = RxMenubar.Menu;

type MenubarTriggerProps = RxMenubar.MenubarTriggerProps;

const MenubarTrigger = forwardRef<HTMLButtonElement, MenubarTriggerProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxMenubar.Trigger
        className={cn(
          "px-2 rounded text-sm",
          "hover:bg-gray-500/25",
          "data-[state='open']:bg-gray-500/25",
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
);

type MenubarContentProps = RxMenubar.MenubarContentProps;

const MenubarContent = forwardRef<HTMLDivElement, MenubarContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxMenubar.Portal>
        <RxMenubar.Content
          className={cn(
            "min-w-[5rem] h-fit p-1 border border-gray-500/75 rounded shadow-lg",
            "bg-[#fafafa] text-black",
            "dark:bg-[#18181b] dark:text-white",
            "menubar-content",
            className
          )}
          {...props}
          ref={ref}
        />
      </RxMenubar.Portal>
    );
  }
);

type MenubarLabelProps = RxMenubar.MenubarLabelProps;

const MenubarLabel = forwardRef<HTMLDivElement, MenubarLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxMenubar.Label
        className={cn("pl-5 py-0.5 pb-1 text-xs", className)}
        {...props}
        ref={ref}
      />
    );
  }
);

type MenubarItemProps = RxMenubar.MenubarItemProps;

const MenbarItem = forwardRef<HTMLDivElement, MenubarItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxMenubar.Item
        className={cn(
          "pl-6 pr-3 rounded-sm hover:cursor-default text-[14px]",
          "hover:bg-[#18181b] hover:text-white",
          "dark:hover:bg-[#fafafa] dark:hover:text-black",
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
);

interface MenubarCheckboxItemProps extends RxMenubar.MenubarCheckboxItemProps {
  icon?: ReactNode;
}

const MenubarCheckboxItem = forwardRef<
  HTMLDivElement,
  MenubarCheckboxItemProps
>(({ className, children, icon = <CheckIcon />, ...props }, ref) => {
  return (
    <RxMenubar.CheckboxItem
      className={cn(
        "pl-6 pr-3 rounded-sm hover:cursor-default text-[14px]",
        "hover:bg-[#18181b] hover:text-white",
        "dark:hover:bg-[#fafafa] dark:hover:text-black",
        className
      )}
      {...props}
      ref={ref}
    >
      <RxMenubar.ItemIndicator className="w-6 h-6 absolute left-0 flex justify-center items-center">
        {icon}
      </RxMenubar.ItemIndicator>
      {children}
    </RxMenubar.CheckboxItem>
  );
});

type MenubarRadioGroupProps = RxMenubar.MenubarRadioGroupProps;

const MenubarRadioGroup = RxMenubar.RadioGroup;

interface MenubarRadioItemProps extends RxMenubar.MenubarRadioItemProps {
  icon?: ReactNode;
}

const MenubarRadioItem = forwardRef<HTMLDivElement, MenubarRadioItemProps>(
  ({ className, children, icon = <CheckIcon />, ...props }, ref) => {
    return (
      <RxMenubar.RadioItem
        className={cn(
          "pl-6 pr-3 rounded-sm hover:cursor-default text-[14px]",
          "hover:bg-[#18181b] hover:text-white",
          "dark:hover:bg-[#fafafa] dark:hover:text-black",
          className
        )}
        {...props}
        ref={ref}
      >
        <RxMenubar.ItemIndicator className="w-6 h-6 absolute left-0 flex justify-center items-center">
          {icon}
        </RxMenubar.ItemIndicator>
        {children}
      </RxMenubar.RadioItem>
    );
  }
);

type MenubarSubProps = RxMenubar.MenubarSubProps;

const MenubarSub = RxMenubar.Sub;

interface MenubarSubTriggerProps extends RxMenubar.MenubarSubTriggerProps {
  icon?: ReactNode;
}

const MenubarSubTrigger = forwardRef<HTMLDivElement, MenubarSubTriggerProps>(
  ({ className, children, icon = <ChevronRightIcon />, ...props }, ref) => {
    return (
      <RxMenubar.SubTrigger
        className={cn(
          "pl-6 flex justify-between items-center rounded-sm hover:cursor-default text-[14px]",
          "hover:bg-[#18181b] hover:text-white",
          "dark:hover:bg-[#fafafa] dark:hover:text-black",
          className
        )}
        {...props}
        ref={ref}
      >
        {children}
        {icon}
      </RxMenubar.SubTrigger>
    );
  }
);

type MenubarSubContentProps = RxMenubar.MenubarSubContentProps;

const MenubarSubContent = forwardRef<HTMLDivElement, MenubarSubContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxMenubar.Portal>
        <RxMenubar.SubContent
          className={cn(
            "min-w-[5rem] h-fit p-1 border border-gray-500/75 rounded shadow-lg",
            "bg-[#fafafa] text-black",
            "dark:bg-[#18181b] dark:text-white",
            "menubar-content",
            className
          )}
          {...props}
          ref={ref}
        />
      </RxMenubar.Portal>
    );
  }
);

type MenubarSeparatorProps = RxMenubar.MenubarSeparatorProps;

const MenubarSeparator = forwardRef<HTMLDivElement, MenubarSeparatorProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxMenubar.Separator
        className={cn(
          "h-[1px] my-1",
          "bg-gray-500/30",
          "dark:bg-gray-500/75",
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
);

type MenubarArrowProps = RxMenubar.MenubarArrowProps;

const MenubarArrow = forwardRef<SVGSVGElement, MenubarArrowProps>(
  ({ width = 7, height = 4, className, ...props }, ref) => {
    return (
      <RxMenubar.Arrow
        ref={ref}
        width={width}
        height={height}
        className={cn("fill-gray-500/75", className)}
        {...props}
      />
    );
  }
);

Menubar.Menu = MenubarMenu;
Menubar.Trigger = MenubarTrigger;
Menubar.Content = MenubarContent;
Menubar.Label = MenubarLabel;
Menubar.Item = MenbarItem;
Menubar.CheckboxItem = MenubarCheckboxItem;
Menubar.RadioGroup = MenubarRadioGroup;
Menubar.RadioItem = MenubarRadioItem;
Menubar.Sub = MenubarSub;
Menubar.SubTrigger = MenubarSubTrigger;
Menubar.SubContent = MenubarSubContent;
Menubar.Separator = MenubarSeparator;
Menubar.Arrow = MenubarArrow;
Menubar.displayName = "Menubar";

export { Menubar };
export type {
  MenubarProps,
  MenubarMenuProps,
  MenubarTriggerProps,
  MenubarContentProps,
  MenubarLabelProps,
  MenubarItemProps,
  MenubarCheckboxItemProps,
  MenubarRadioGroupProps,
  MenubarRadioItemProps,
  MenubarSubProps,
  MenubarSubTriggerProps,
  MenubarSubContentProps,
  MenubarSeparatorProps,
  MenubarArrowProps
};
