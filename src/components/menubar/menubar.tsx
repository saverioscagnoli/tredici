import React, {
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
  Body: typeof MenubarBody;
  Label: typeof MenubarLabel;
  Item: typeof MenubarItem;
  Group: typeof MenubarGroup;
  CheckItem: typeof MenubarCheckItem;
  RadioGroup: typeof MenubarRadioGroup;
  RadioItem: typeof MenubarRadioItem;
  Sub: typeof MenubarSub;
  SubTrigger: typeof MenubarSubTrigger;
  SubBody: typeof MenubarSubBody;
  Separator: typeof MenubarSeparator;
  Arrow: typeof MenubarArrow;
}

const Menubar = forwardRef<HTMLDivElement, RxMenubar.MenubarProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <RxMenubar.Root
        {...props}
        ref={ref}
        className={cn(
          "p-0.5 rounded-md flex justify-center items-center dark:bg-18181b bg-fafafa border border-gray-600/20",
          className
        )}
      >
        {children}
      </RxMenubar.Root>
    );
  }
) as MenubarComponent;

const MenubarMenu: React.FC<RxMenubar.MenubarMenuProps> = ({
  children,
  ...props
}) => {
  return <RxMenubar.Menu {...props}>{children}</RxMenubar.Menu>;
};

const MenubarTrigger = forwardRef<
  HTMLButtonElement,
  RxMenubar.MenubarTriggerProps
>(({ children, ...props }, ref) => {
  return (
    <RxMenubar.Trigger {...props} ref={ref} asChild>
      <button className="h-6 px-2 text-sm inline-flex justify-center items-center font-semibold rounded select-none cursor-pointer transition-colors disabled:cursor-not-allowed dark:text-fafafa text-18181b bg-transparent dark:hover:bg-gray-950 hover:bg-gray-200 dark:data-[state='open']:bg-gray-950 data-[state='open']:bg-gray-200">
        {children}
      </button>
    </RxMenubar.Trigger>
  );
});

const MenubarBody = forwardRef<HTMLDivElement, RxMenubar.MenubarContentProps>(
  ({ children, className, sideOffset = 7, ...props }, ref) => {
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
        >
          {children}
        </RxMenubar.Content>
      </RxMenubar.Portal>
    );
  }
);

const MenubarLabel = forwardRef<HTMLDivElement, RxMenubar.MenubarLabelProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <RxMenubar.Label
        {...props}
        ref={ref}
        className={cn("text-xs p-1", className)}
      >
        {children}
      </RxMenubar.Label>
    );
  }
);

const MenubarItem = forwardRef<HTMLDivElement, RxMenubar.MenubarItemProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <RxMenubar.Item
        {...props}
        ref={ref}
        className={cn(
          "flex items-center cursor-pointer p-1 focus:outline-none focus:bg-gray-600/30 rounded",
          className
        )}
      >
        {children}
      </RxMenubar.Item>
    );
  }
);

const MenubarGroup = forwardRef<HTMLDivElement, RxMenubar.MenubarGroupProps>(
  ({ children, ...props }, ref) => {
    return (
      <RxMenubar.Group {...props} ref={ref}>
        {children}
      </RxMenubar.Group>
    );
  }
);

interface MenubarCheckItemProps extends RxMenubar.MenubarCheckboxItemProps {
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

const MenubarRadioGroup = forwardRef<
  HTMLDivElement,
  RxMenubar.MenubarRadioGroupProps
>(({ children, ...props }, ref) => {
  return (
    <RxMenubar.RadioGroup {...props} ref={ref}>
      {children}
    </RxMenubar.RadioGroup>
  );
});

interface MenubarRadioItemProps extends RxMenubar.MenubarRadioItemProps {
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

const MenubarSub: React.FC<RxMenubar.MenubarSubProps> = ({
  children,
  ...props
}) => {
  return <RxMenubar.Sub {...props}>{children}</RxMenubar.Sub>;
};

interface MenubarSubTriggerProps extends RxMenubar.MenubarSubTriggerProps {
  icon?: ReactNode | "none";
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
        {icon !== "none" && icon}
      </RxMenubar.SubTrigger>
    );
  }
);

const MenubarSubBody = forwardRef<
  HTMLDivElement,
  RxMenubar.MenubarContentProps
>(({ children, className, sideOffset = 7, ...props }, ref) => {
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
      >
        {children}
      </RxMenubar.Content>
    </RxMenubar.Portal>
  );
});

const MenubarSeparator = forwardRef<
  HTMLDivElement,
  RxMenubar.MenubarSeparatorProps
>(({ children, className, ...props }, ref) => {
  return (
    <RxMenubar.Separator
      {...props}
      ref={ref}
      className={cn("h-[1px] m-1 bg-gray-600/50", className)}
    >
      {children}
    </RxMenubar.Separator>
  );
});

const MenubarArrow = forwardRef<SVGSVGElement, RxMenubar.MenubarArrowProps>(
  ({ children, className, width = 7, height = 3, ...props }, ref) => {
    return (
      <RxMenubar.Arrow
        {...props}
        ref={ref}
        width={width}
        height={height}
        className={cn("dark:fill-fafafa fill-18181b", className)}
      >
        {children}
      </RxMenubar.Arrow>
    );
  }
);

Menubar.Menu = MenubarMenu;
Menubar.Trigger = MenubarTrigger;
Menubar.Body = MenubarBody;
Menubar.Label = MenubarLabel;
Menubar.Item = MenubarItem;
Menubar.Group = MenubarGroup;
Menubar.CheckItem = MenubarCheckItem;
Menubar.RadioGroup = MenubarRadioGroup;
Menubar.RadioItem = MenubarRadioItem;
Menubar.Sub = MenubarSub;
Menubar.SubTrigger = MenubarSubTrigger;
Menubar.SubBody = MenubarSubBody;
Menubar.Separator = MenubarSeparator;
Menubar.Arrow = MenubarArrow;

export { Menubar };
