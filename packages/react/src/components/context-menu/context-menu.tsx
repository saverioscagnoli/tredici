import { cn } from "@lib";
import * as RxContextMenu from "@radix-ui/react-context-menu";
import { ReactNode, forwardRef } from "react";
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon
} from "@radix-ui/react-icons";

import "./context-menu.css";

interface ContextMenuComponent extends React.FC<ContextMenuProps> {
  Trigger: typeof ContextMenuTrigger;
  Content: typeof ContextMenuContent;
  Label: typeof ContextMenuLabel;
  Item: typeof ContextMenuItem;
  CheckboxItem: typeof ContextMenuCheckboxItem;
  RadioGroup: typeof ContextMenuRadioGroup;
  RadioItem: typeof ContextMenuRadioItem;
  Sub: typeof ContextMenuSub;
  SubTrigger: typeof ContextMenuSubTrigger;
  SubContent: typeof ContextMenuContent;
  Separator: typeof ContextMenuSeparator;
}

type ContextMenuProps = RxContextMenu.ContextMenuProps;

const ContextMenu = RxContextMenu.ContextMenu as ContextMenuComponent;

type ContextMenuTriggerProps = RxContextMenu.ContextMenuTriggerProps;

const ContextMenuTrigger = RxContextMenu.ContextMenuTrigger;

type ContextMenuContentProps = RxContextMenu.ContextMenuContentProps;

const ContextMenuContent = forwardRef<HTMLDivElement, ContextMenuContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxContextMenu.Portal>
        <RxContextMenu.Content
          className={cn(
            "min-w-[5rem] h-fit p-1 border border-gray-500/75 rounded shadow-lg",
            "bg-[#fafafa] text-black",
            "dark:bg-[#18181b] dark:text-white",
            "context-menu-content",
            className
          )}
          {...props}
          ref={ref}
        />
      </RxContextMenu.Portal>
    );
  }
);

type ContextMenuLabelProps = RxContextMenu.ContextMenuLabelProps;

const ContextMenuLabel = forwardRef<HTMLDivElement, ContextMenuLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxContextMenu.Label
        className={cn("pl-5 py-0.5 pb-1 text-xs", className)}
        {...props}
        ref={ref}
      />
    );
  }
);

type ContextMenuItemProps = RxContextMenu.ContextMenuItemProps;

const ContextMenuItem = forwardRef<HTMLDivElement, ContextMenuItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxContextMenu.Item
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

interface ContextMenuCheckboxItemProps
  extends RxContextMenu.ContextMenuCheckboxItemProps {
  icon?: ReactNode;
}

const ContextMenuCheckboxItem = forwardRef<
  HTMLDivElement,
  ContextMenuCheckboxItemProps
>(({ className, children, icon = <CheckIcon />, ...props }, ref) => {
  return (
    <RxContextMenu.CheckboxItem
      className={cn(
        "pl-6 pr-3 relative rounded-sm hover:cursor-default text-[14px]",
        "hover:bg-[#18181b] hover:text-white",
        "dark:hover:bg-[#fafafa] dark:hover:text-black",
        className
      )}
      {...props}
      ref={ref}
    >
      <RxContextMenu.ItemIndicator className="w-6 h-6 absolute left-0 flex justify-center items-center">
        {icon}
      </RxContextMenu.ItemIndicator>
      {children}
    </RxContextMenu.CheckboxItem>
  );
});

type ContextMenuRadioGroupProps = RxContextMenu.ContextMenuRadioGroupProps;

const ContextMenuRadioGroup = RxContextMenu.ContextMenuRadioGroup;

interface ContextMenuRadioItemProps
  extends RxContextMenu.ContextMenuRadioItemProps {
  icon?: ReactNode;
}

const ContextMenuRadioItem = forwardRef<
  HTMLDivElement,
  ContextMenuRadioItemProps
>(({ className, children, icon = <DotFilledIcon />, ...props }, ref) => {
  return (
    <RxContextMenu.RadioItem
      className={cn(
        "pl-6 pr-3 relative rounded-sm hover:cursor-default text-[14px]",
        "hover:bg-[#18181b] hover:text-white",
        "dark:hover:bg-[#fafafa] dark:hover:text-black",
        className
      )}
      {...props}
      ref={ref}
    >
      <RxContextMenu.ItemIndicator className="w-6 h-6 absolute left-0 flex justify-center items-center">
        {icon}
      </RxContextMenu.ItemIndicator>
      {children}
    </RxContextMenu.RadioItem>
  );
});

type ContextMenuSubProps = RxContextMenu.ContextMenuSubProps;

const ContextMenuSub = RxContextMenu.ContextMenuSub;

interface ContextMenuSubTriggerProps
  extends RxContextMenu.ContextMenuSubTriggerProps {
  icon?: ReactNode;
}

const ContextMenuSubTrigger = forwardRef<
  HTMLDivElement,
  ContextMenuSubTriggerProps
>(({ className, children, icon = <ChevronRightIcon />, ...props }, ref) => {
  return (
    <RxContextMenu.SubTrigger
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
    </RxContextMenu.SubTrigger>
  );
});

type ContextMenuSubContentProps = RxContextMenu.ContextMenuSubContentProps;

const ContextMenuSubContent = forwardRef<
  HTMLDivElement,
  ContextMenuSubContentProps
>(({ className, ...props }, ref) => {
  return (
    <RxContextMenu.Portal>
      <RxContextMenu.SubContent
        className={cn(
          "min-w-[5rem] h-fit p-1 border border-gray-500/75 rounded shadow-lg",
          "bg-[#fafafa] text-black",
          "dark:bg-[#18181b] dark:text-white",
          "context-menu-content",
          className
        )}
        {...props}
        ref={ref}
      />
    </RxContextMenu.Portal>
  );
});

type ContextMenuSeparatorProps = RxContextMenu.ContextMenuSeparatorProps;

const ContextMenuSeparator = forwardRef<
  HTMLDivElement,
  ContextMenuSeparatorProps
>(({ className, ...props }, ref) => {
  return (
    <RxContextMenu.Separator
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
});

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
ContextMenu.displayName = "ContextMenu";

export { ContextMenu };
export type {
  ContextMenuProps,
  ContextMenuTriggerProps,
  ContextMenuContentProps,
  ContextMenuLabelProps,
  ContextMenuItemProps,
  ContextMenuCheckboxItemProps,
  ContextMenuRadioGroupProps,
  ContextMenuRadioItemProps,
  ContextMenuSubProps,
  ContextMenuSubTriggerProps,
  ContextMenuSeparatorProps
};
