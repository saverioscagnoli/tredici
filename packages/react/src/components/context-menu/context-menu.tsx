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
  Content: typeof ContextMenuContent;
  Group: typeof ContextMenuGroup;
  Label: typeof ContextMenuLabel;
  Item: typeof ContextMenuItem;
  CheckItem: typeof ContextMenuCheckItem;
  Sub: typeof ContextMenuSub;
  SubTrigger: typeof ContextMenuSubTrigger;
  SubContent: typeof ContextMenuSubContent;
  RadioGroup: typeof ContextMenuRadioGroup;
  RadioItem: typeof ContextMenuRadioItem;
  Arrow: typeof ContextMenuArrow;
  Separator: typeof ContextMenuSeparator;
}

const ContextMenu: ContextMenuComponent = props => {
  return <RxContextMenu.Root {...props} />;
};

export type ContextMenuTriggerProps = RxContextMenu.ContextMenuTriggerProps;

const ContextMenuTrigger = forwardRef<HTMLSpanElement, ContextMenuTriggerProps>(
  (props, ref) => {
    return <RxContextMenu.Trigger {...props} ref={ref} />;
  }
);

export type ContextMenuContentProps = RxContextMenu.ContextMenuContentProps;

const ContextMenuContent = forwardRef<HTMLDivElement, ContextMenuContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxContextMenu.Portal>
        <RxContextMenu.Content
          {...props}
          ref={ref}
          className={cn(
            "min-w-[12rem] p-1 rounded dark:bg-fafafa bg-18181b dark:text-18181b text-fafafa text-sm font-semibold shadow",
            className
          )}
        />
      </RxContextMenu.Portal>
    );
  }
);

export type ContextMenuGroupProps = RxContextMenu.ContextMenuGroupProps;

const ContextMenuGroup = forwardRef<HTMLDivElement, ContextMenuGroupProps>(
  (props, ref) => {
    return <RxContextMenu.Group {...props} ref={ref} />;
  }
);

export type ContextMenuLabelProps = RxContextMenu.ContextMenuLabelProps;

const ContextMenuLabel = forwardRef<HTMLDivElement, ContextMenuLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxContextMenu.Label
        {...props}
        ref={ref}
        className={cn("text-xs p-1", className)}
      />
    );
  }
);

export type ContextMenuItemProps = RxContextMenu.ContextMenuItemProps;

const ContextMenuItem = forwardRef<HTMLDivElement, ContextMenuItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxContextMenu.Item
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

export interface ContextMenuCheckItemProps
  extends RxContextMenu.ContextMenuCheckboxItemProps {
  /**
   * The icon to display when the checkbox is checked.
   * @default RxIcons.CheckIcon
   */
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

export type ContextMenuSubProps = RxContextMenu.ContextMenuSubProps;

const ContextMenuSub: React.FC<ContextMenuSubProps> = props => {
  return <RxContextMenu.Sub {...props} />;
};

export interface ContextMenuSubTriggerProps
  extends RxContextMenu.ContextMenuSubTriggerProps {
  /**
   * The icon to display when the sub menu is open.
   * @default RxIcons.ArrowRightIcon
   */
  icon?: ReactNode;
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
      {icon}
    </RxContextMenu.SubTrigger>
  );
});

export type ContextMenuSubContentProps =
  RxContextMenu.ContextMenuSubContentProps;

const ContextMenuSubContent = forwardRef<
  HTMLDivElement,
  ContextMenuSubContentProps
>(({ className, sideOffset = 7, ...props }, ref) => {
  return (
    <RxContextMenu.Portal>
      <RxContextMenu.SubContent
        {...props}
        ref={ref}
        sideOffset={sideOffset}
        className={cn(
          "min-w-[12rem] p-1 rounded dark:bg-fafafa bg-18181b dark:text-18181b text-fafafa text-sm font-semibold shadow",
          className
        )}
      />
    </RxContextMenu.Portal>
  );
});

export type ContextMenuRadioGroupProps =
  RxContextMenu.ContextMenuRadioGroupProps;

const ContextMenuRadioGroup = forwardRef<
  HTMLDivElement,
  ContextMenuRadioGroupProps
>((props, ref) => {
  return <RxContextMenu.RadioGroup {...props} ref={ref} />;
});

export interface ContextMenuRadioItemProps
  extends RxContextMenu.ContextMenuRadioItemProps {
  /**
   * The icon to display when the radio item is checked.
   * @default RxIcons.DotFilledIcon
   */
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

export type ContextMenuArrowProps = RxContextMenu.ContextMenuArrowProps;

const ContextMenuArrow = forwardRef<SVGSVGElement, ContextMenuArrowProps>(
  ({ className, width = 7, height = 3, ...props }, ref) => {
    return (
      <RxContextMenu.Arrow
        {...props}
        ref={ref}
        width={width}
        height={height}
        className={cn("dark:fill-fafafa fill-18181b", className)}
      />
    );
  }
);

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
ContextMenu.Content = ContextMenuContent;
ContextMenu.Group = ContextMenuGroup;
ContextMenu.Label = ContextMenuLabel;
ContextMenu.Item = ContextMenuItem;
ContextMenu.CheckItem = ContextMenuCheckItem;
ContextMenu.Sub = ContextMenuSub;
ContextMenu.SubTrigger = ContextMenuSubTrigger;
ContextMenu.SubContent = ContextMenuSubContent;
ContextMenu.RadioGroup = ContextMenuRadioGroup;
ContextMenu.RadioItem = ContextMenuRadioItem;
ContextMenu.Arrow = ContextMenuArrow;
ContextMenu.Separator = ContextMenuSeparator;

export { ContextMenu };
