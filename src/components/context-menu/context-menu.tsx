import React, { ReactNode, forwardRef } from "react";
import * as RxContextMenu from "@radix-ui/react-context-menu";
import { cn } from "../../lib";
import {
  ArrowRightIcon,
  CheckIcon,
  DotFilledIcon
} from "@radix-ui/react-icons";

interface ContextMenuComponent
  extends React.FC<RxContextMenu.ContextMenuProps> {
  Trigger: typeof ContextMenuTrigger;
  Body: typeof ContextMenuBody;
  Group: typeof ContextMenuGroup;
  Label: typeof ContextMenuLabel;
  Item: typeof ContextMenuItem;
  CheckItem: typeof ContextMenuCheckItem;
  Sub: typeof ContextMenuSub;
  SubTrigger: typeof ContextMenuSubTrigger;
  SubBody: typeof ContextMenuSubBody;
  RadioGroup: typeof ContextMenuRadioGroup;
  RadioItem: typeof ContextMenuRadioItem;
  Arrow: typeof ContextMenuArrow;
  Separator: typeof ContextMenuSeparator;
}

const ContextMenu: ContextMenuComponent = ({ children, ...props }) => {
  return <RxContextMenu.Root {...props}>{children}</RxContextMenu.Root>;
};

const ContextMenuTrigger = forwardRef<
  HTMLSpanElement,
  RxContextMenu.ContextMenuTriggerProps
>(({ children, ...props }, ref) => {
  return (
    <RxContextMenu.Trigger {...props} ref={ref}>
      {children}
    </RxContextMenu.Trigger>
  );
});

const ContextMenuBody = forwardRef<
  HTMLDivElement,
  RxContextMenu.ContextMenuContentProps
>(({ children, className, ...props }, ref) => {
  return (
    <RxContextMenu.Portal>
      <RxContextMenu.Content
        {...props}
        ref={ref}
        className={cn(
          "min-w-[12rem] p-1 rounded dark:bg-fafafa bg-18181b dark:text-18181b text-fafafa shadow",
          className
        )}
      >
        {children}
      </RxContextMenu.Content>
    </RxContextMenu.Portal>
  );
});

const ContextMenuGroup = forwardRef<
  HTMLDivElement,
  RxContextMenu.ContextMenuGroupProps
>(({ children, ...props }, ref) => {
  return (
    <RxContextMenu.Group {...props} ref={ref}>
      {children}
    </RxContextMenu.Group>
  );
});

const ContextMenuLabel = forwardRef<
  HTMLDivElement,
  RxContextMenu.ContextMenuLabelProps
>(({ children, className, ...props }, ref) => {
  return (
    <RxContextMenu.Label
      {...props}
      ref={ref}
      className={cn("text-xs p-1", className)}
    >
      {children}
    </RxContextMenu.Label>
  );
});

const ContextMenuItem = forwardRef<
  HTMLDivElement,
  RxContextMenu.ContextMenuItemProps
>(({ children, className, ...props }, ref) => {
  return (
    <RxContextMenu.Item
      {...props}
      ref={ref}
      className={cn(
        "flex items-center cursor-pointer p-1 focus:outline-none focus:bg-gray-600/30 rounded",
        className
      )}
    >
      {children}
    </RxContextMenu.Item>
  );
});

interface ContextMenuCheckItemProps
  extends RxContextMenu.ContextMenuCheckboxItemProps {
  icon?: ReactNode;
}

const ContextMenuCheckItem = forwardRef<
  HTMLDivElement,
  ContextMenuCheckItemProps
>(({ children, className, icon = <CheckIcon />, ...props }, ref) => {
  return (
    <RxContextMenu.CheckboxItem
      {...props}
      ref={ref}
      className={cn(
        "flex gap-1 items-center cursor-pointer p-1 focus:outline-none focus:bg-gray-600/30 rounded",
        className
      )}
    >
      <RxContextMenu.ItemIndicator>{icon}</RxContextMenu.ItemIndicator>
      {children}
    </RxContextMenu.CheckboxItem>
  );
});

const ContextMenuSub: React.FC<RxContextMenu.ContextMenuSubProps> = ({
  children,
  ...props
}) => {
  return <RxContextMenu.Sub {...props}>{children}</RxContextMenu.Sub>;
};

interface ContextMenuSubTriggerProps
  extends RxContextMenu.ContextMenuSubTriggerProps {
  icon?: ReactNode | "none";
}

const ContextMenuSubTrigger = forwardRef<
  HTMLDivElement,
  ContextMenuSubTriggerProps
>(({ children, className, icon = <ArrowRightIcon />, ...props }, ref) => {
  return (
    <RxContextMenu.SubTrigger
      {...props}
      ref={ref}
      className={cn(
        "flex justify-between items-center cursor-pointer p-1 focus:outline-none focus:bg-gray-600/30 rounded",
        className
      )}
    >
      {children}
      {icon !== "none" && icon}
    </RxContextMenu.SubTrigger>
  );
});

const ContextMenuSubBody = forwardRef<
  HTMLDivElement,
  RxContextMenu.ContextMenuSubContentProps
>(({ children, className, sideOffset = 7, ...props }, ref) => {
  return (
    <RxContextMenu.Portal>
      <RxContextMenu.SubContent
        {...props}
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          "min-w-[12rem] p-1 rounded dark:bg-fafafa bg-18181b dark:text-18181b text-fafafa shadow",
          className
        )}
      >
        {children}
      </RxContextMenu.SubContent>
    </RxContextMenu.Portal>
  );
});

const ContextMenuRadioGroup = forwardRef<
  HTMLDivElement,
  RxContextMenu.ContextMenuRadioGroupProps
>(({ children, ...props }, ref) => {
  return (
    <RxContextMenu.RadioGroup {...props} ref={ref}>
      {children}
    </RxContextMenu.RadioGroup>
  );
});

interface ContextMenuRadioItemProps
  extends RxContextMenu.ContextMenuRadioItemProps {
  icon?: ReactNode;
}

const ContextMenuRadioItem = forwardRef<
  HTMLDivElement,
  ContextMenuRadioItemProps
>(({ children, className, icon = <DotFilledIcon />, ...props }, ref) => {
  return (
    <RxContextMenu.RadioItem
      {...props}
      ref={ref}
      className={cn(
        "flex gap-1 items-center cursor-pointer p-1 focus:outline-none focus:bg-gray-600/30 rounded",
        className
      )}
    >
      <RxContextMenu.ItemIndicator>{icon}</RxContextMenu.ItemIndicator>
      {children}
    </RxContextMenu.RadioItem>
  );
});

const ContextMenuArrow = forwardRef<
  SVGSVGElement,
  RxContextMenu.ContextMenuArrowProps
>(({ className, width = 7, height = 3, ...props }, ref) => {
  return (
    <RxContextMenu.Arrow
      {...props}
      ref={ref}
      width={width}
      height={height}
      className={cn("dark:fill-fafafa fill-18181b", className)}
    />
  );
});

const ContextMenuSeparator = forwardRef<
  HTMLDivElement,
  RxContextMenu.ContextMenuSeparatorProps
>(({ className, ...props }, ref) => {
  return (
    <RxContextMenu.Separator
      {...props}
      ref={ref}
      className={cn("h-[1px] m-1 bg-gray-600/50", className)}
    />
  );
});

ContextMenu.Trigger = ContextMenuTrigger;
ContextMenu.Body = ContextMenuBody;
ContextMenu.Group = ContextMenuGroup;
ContextMenu.Label = ContextMenuLabel;
ContextMenu.Item = ContextMenuItem;
ContextMenu.CheckItem = ContextMenuCheckItem;
ContextMenu.Sub = ContextMenuSub;
ContextMenu.SubTrigger = ContextMenuSubTrigger;
ContextMenu.SubBody = ContextMenuSubBody;
ContextMenu.RadioGroup = ContextMenuRadioGroup;
ContextMenu.RadioItem = ContextMenuRadioItem;
ContextMenu.Arrow = ContextMenuArrow;
ContextMenu.Separator = ContextMenuSeparator;

export { ContextMenu };
