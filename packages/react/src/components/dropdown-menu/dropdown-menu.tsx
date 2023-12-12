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

const DropdownMenu: DropdownMenuComponent = props => {
  return <RxDropdownMenu.Root {...props} />;
};

export type DropdownMenuTriggerProps = RxDropdownMenu.DropdownMenuTriggerProps;

const DropdownMenuTrigger = forwardRef<
  HTMLButtonElement,
  DropdownMenuTriggerProps
>((props, ref) => {
  return <RxDropdownMenu.Trigger {...props} ref={ref} />;
});

export type DropdownMenuContentProps = RxDropdownMenu.DropdownMenuContentProps;

const DropdownMenuContent = forwardRef<
  HTMLDivElement,
  DropdownMenuContentProps
>(({ className, sideOffset = 7, ...props }, ref) => {
  return (
    <RxDropdownMenu.Portal>
      <RxDropdownMenu.Content
        {...props}
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          "min-w-[12rem] p-1 rounded dark:bg-fafafa bg-18181b dark:text-18181b text-fafafa text-sm font-semibold shadow",
          className
        )}
      />
    </RxDropdownMenu.Portal>
  );
});

export type DropdownMenuGroupProps = RxDropdownMenu.DropdownMenuGroupProps;

const DropdownMenuGroup = forwardRef<HTMLDivElement, DropdownMenuGroupProps>(
  (props, ref) => {
    return <RxDropdownMenu.Group {...props} ref={ref} />;
  }
);

export type DropdownMenuLabelProps = RxDropdownMenu.DropdownMenuLabelProps;

const DropdownMenuLabel = forwardRef<HTMLDivElement, DropdownMenuLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxDropdownMenu.Label
        {...props}
        ref={ref}
        className={cn("text-xs p-1", className)}
      />
    );
  }
);

export type DropdownMenuItemProps = RxDropdownMenu.DropdownMenuItemProps;

const DropdownMenuItem = forwardRef<HTMLDivElement, DropdownMenuItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxDropdownMenu.Item
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

export interface DropdownMenuCheckItemProps
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

const DropdownMenuSub: React.FC<
  RxDropdownMenu.DropdownMenuSubProps
> = props => {
  return <RxDropdownMenu.Sub {...props} />;
};

export interface DropdownMenuSubTriggerProps
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

export type DropdownMenuSubContentProps =
  RxDropdownMenu.DropdownMenuSubContentProps;

const DropdownMenuSubContent = forwardRef<
  HTMLDivElement,
  DropdownMenuSubContentProps
>(({ className, sideOffset = 7, ...props }, ref) => {
  return (
    <RxDropdownMenu.Portal>
      <RxDropdownMenu.SubContent
        {...props}
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          "min-w-[12rem] p-1 rounded dark:bg-fafafa bg-18181b dark:text-18181b text-fafafa text-sm font-semibold shadow",
          className
        )}
      />
    </RxDropdownMenu.Portal>
  );
});

export type DropdownMenuRadioGroupProps =
  RxDropdownMenu.DropdownMenuRadioGroupProps;

const DropdownMenuRadioGroup = forwardRef<
  HTMLDivElement,
  DropdownMenuRadioGroupProps
>((props, ref) => {
  return <RxDropdownMenu.RadioGroup {...props} ref={ref} />;
});

export interface DropdownMenuRadioItemProps
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

export type DropdownMenuArrowProps = RxDropdownMenu.DropdownMenuArrowProps;

const DropdownMenuArrow = forwardRef<SVGSVGElement, DropdownMenuArrowProps>(
  ({ className, width = 7, height = 3, ...props }, ref) => {
    return (
      <RxDropdownMenu.Arrow
        {...props}
        ref={ref}
        width={width}
        height={height}
        className={cn("dark:fill-fafafa fill-18181b", className)}
      />
    );
  }
);

export type DropdownMenuSeparatorProps =
  RxDropdownMenu.DropdownMenuSeparatorProps;

const DropdownMenuSeparator = forwardRef<
  HTMLDivElement,
  DropdownMenuSeparatorProps
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
