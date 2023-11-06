import React, { ReactNode, forwardRef } from "react";
import * as RxDropdownMenu from "@radix-ui/react-dropdown-menu";
import { cn } from "../../lib";
import {
  ArrowRightIcon,
  CheckIcon,
  DotFilledIcon
} from "@radix-ui/react-icons";

interface DropdownMenuComponent
  extends React.FC<RxDropdownMenu.DropdownMenuProps> {
  Trigger: typeof DropdownMenuTrigger;
  Content: typeof DropdownMenuContent;
  Group: typeof DropdownMenuGroup;
  Label: typeof DropdownMenuLabel;
  Item: typeof DropdownMenuItem;
  CheckItem: typeof DropdownMenuCheckItem;
  Sub: typeof DropdownMenuSub;
  SubTrigger: typeof DropdownMenuSubTrigger;
  SubContent: typeof DropdownMenuSubContent;
  RadioGroup: typeof DropdownMenuRadioGroup;
  RadioItem: typeof DropdownMenuRadioItem;
  Arrow: typeof DropdownMenuArrow;
  Separator: typeof DropdownMenuSeparator;
}

const DropdownMenu: DropdownMenuComponent = ({ children, ...props }) => {
  return <RxDropdownMenu.Root {...props}>{children}</RxDropdownMenu.Root>;
};

const DropdownMenuTrigger = forwardRef<
  HTMLButtonElement,
  RxDropdownMenu.DropdownMenuTriggerProps
>(({ children, ...props }, ref) => {
  return (
    <RxDropdownMenu.Trigger {...props} ref={ref}>
      {children}
    </RxDropdownMenu.Trigger>
  );
});

const DropdownMenuContent = forwardRef<
  HTMLDivElement,
  RxDropdownMenu.DropdownMenuContentProps
>(({ children, className, sideOffset = 7, ...props }, ref) => {
  return (
    <RxDropdownMenu.Portal>
      <RxDropdownMenu.Content
        {...props}
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          "min-w-[12rem] p-1 rounded dark:bg-fafafa bg-18181b dark:text-18181b text-fafafa shadow",
          className
        )}
      >
        {children}
      </RxDropdownMenu.Content>
    </RxDropdownMenu.Portal>
  );
});

const DropdownMenuGroup = forwardRef<
  HTMLDivElement,
  RxDropdownMenu.DropdownMenuGroupProps
>(({ children, ...props }, ref) => {
  return (
    <RxDropdownMenu.Group {...props} ref={ref}>
      {children}
    </RxDropdownMenu.Group>
  );
});

const DropdownMenuLabel = forwardRef<
  HTMLDivElement,
  RxDropdownMenu.DropdownMenuLabelProps
>(({ children, className, ...props }, ref) => {
  return (
    <RxDropdownMenu.Label
      {...props}
      ref={ref}
      className={cn("text-xs p-1", className)}
    >
      {children}
    </RxDropdownMenu.Label>
  );
});

const DropdownMenuItem = forwardRef<
  HTMLDivElement,
  RxDropdownMenu.DropdownMenuItemProps
>(({ children, className, ...props }, ref) => {
  return (
    <RxDropdownMenu.Item
      {...props}
      ref={ref}
      className={cn(
        "flex items-center cursor-pointer p-1 focus:outline-none focus:bg-gray-600/30 rounded",
        className
      )}
    >
      {children}
    </RxDropdownMenu.Item>
  );
});

interface DropdownMenuCheckItemProps
  extends RxDropdownMenu.DropdownMenuCheckboxItemProps {
  icon?: ReactNode;
}

const DropdownMenuCheckItem = forwardRef<
  HTMLDivElement,
  DropdownMenuCheckItemProps
>(({ children, className, icon = <CheckIcon />, ...props }, ref) => {
  return (
    <RxDropdownMenu.CheckboxItem
      {...props}
      ref={ref}
      className={cn(
        "flex gap-1 items-center cursor-pointer p-1 focus:outline-none focus:bg-gray-600/30 rounded",
        className
      )}
    >
      <RxDropdownMenu.ItemIndicator>{icon}</RxDropdownMenu.ItemIndicator>
      {children}
    </RxDropdownMenu.CheckboxItem>
  );
});

const DropdownMenuSub: React.FC<RxDropdownMenu.DropdownMenuSubProps> = (
  { children, ...props },
  ref
) => {
  return <RxDropdownMenu.Sub {...props}>{children}</RxDropdownMenu.Sub>;
};

interface DropdownMenuSubTriggerProps
  extends RxDropdownMenu.DropdownMenuSubTriggerProps {
  icon?: ReactNode | "none";
}

const DropdownMenuSubTrigger = forwardRef<
  HTMLDivElement,
  DropdownMenuSubTriggerProps
>(({ children, className, icon = <ArrowRightIcon />, ...props }, ref) => {
  return (
    <RxDropdownMenu.SubTrigger
      {...props}
      ref={ref}
      className={cn(
        "flex justify-between items-center cursor-pointer p-1 focus:outline-none focus:bg-gray-600/30 rounded",
        className
      )}
    >
      {children}
      {icon !== "none" && icon}
    </RxDropdownMenu.SubTrigger>
  );
});

const DropdownMenuSubContent = forwardRef<
  HTMLDivElement,
  RxDropdownMenu.MenuSubContentProps
>(({ children, className, sideOffset = 7, ...props }, ref) => {
  return (
    <RxDropdownMenu.Portal>
      <RxDropdownMenu.SubContent
        {...props}
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          "min-w-[12rem] p-1 rounded dark:bg-fafafa bg-18181b dark:text-18181b text-fafafa shadow",
          className
        )}
      >
        {children}
      </RxDropdownMenu.SubContent>
    </RxDropdownMenu.Portal>
  );
});

const DropdownMenuRadioGroup = forwardRef<
  HTMLDivElement,
  RxDropdownMenu.DropdownMenuRadioGroupProps
>(({ children, ...props }, ref) => {
  return (
    <RxDropdownMenu.RadioGroup {...props} ref={ref}>
      {children}
    </RxDropdownMenu.RadioGroup>
  );
});

interface DropdownMenuRadioItemProps
  extends RxDropdownMenu.DropdownMenuRadioItemProps {
  icon?: ReactNode;
}

const DropdownMenuRadioItem = forwardRef<
  HTMLDivElement,
  DropdownMenuRadioItemProps
>(({ children, className, icon = <DotFilledIcon />, ...props }, ref) => {
  return (
    <RxDropdownMenu.RadioItem
      {...props}
      ref={ref}
      className={cn(
        "flex gap-1 items-center cursor-pointer p-1 focus:outline-none focus:bg-gray-600/30 rounded",
        className
      )}
    >
      <RxDropdownMenu.ItemIndicator>{icon}</RxDropdownMenu.ItemIndicator>
      {children}
    </RxDropdownMenu.RadioItem>
  );
});

const DropdownMenuArrow = forwardRef<
  SVGSVGElement,
  RxDropdownMenu.DropdownMenuArrowProps
>(({ className, width = 7, height = 3, ...props }, ref) => {
  return (
    <RxDropdownMenu.Arrow
      {...props}
      ref={ref}
      width={width}
      height={height}
      className={cn("dark:fill-fafafa fill-18181b", className)}
    />
  );
});

const DropdownMenuSeparator = forwardRef<
  HTMLDivElement,
  RxDropdownMenu.DropdownMenuSeparatorProps
>(({ className, ...props }, ref) => {
  return (
    <RxDropdownMenu.Separator
      {...props}
      ref={ref}
      className={cn("h-[1px] m-1 bg-gray-600/50", className)}
    />
  );
});

DropdownMenu.Trigger = DropdownMenuTrigger;
DropdownMenu.Content = DropdownMenuContent;
DropdownMenu.Group = DropdownMenuGroup;
DropdownMenu.Label = DropdownMenuLabel;
DropdownMenu.Item = DropdownMenuItem;
DropdownMenu.CheckItem = DropdownMenuCheckItem;
DropdownMenu.Arrow = DropdownMenuArrow;
DropdownMenu.Sub = DropdownMenuSub;
DropdownMenu.SubTrigger = DropdownMenuSubTrigger;
DropdownMenu.SubContent = DropdownMenuSubContent;
DropdownMenu.RadioGroup = DropdownMenuRadioGroup;
DropdownMenu.RadioItem = DropdownMenuRadioItem;
DropdownMenu.Separator = DropdownMenuSeparator;

export { DropdownMenu };
