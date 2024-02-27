import { cn } from "@lib";
import * as RxDropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon
} from "@radix-ui/react-icons";
import { ReactNode, forwardRef } from "react";

import "./dropdown-menu.css";

type DropdownMenuComponent = React.FC<DropdownMenuProps> & {
  Trigger: typeof DropdownMenuTrigger;
  Content: typeof DropdownMenuContent;
  Label: typeof DropdownMenuLabel;
  Item: typeof DropdownMenuItem;
  CheckboxItem: typeof DropdownMenuCheckboxItem;
  RadioGroup: typeof DropdownMenuRadioGroup;
  RadioItem: typeof DropdownMenuRadioItem;
  Sub: typeof DropdownMenuSub;
  SubTrigger: typeof DropdownMenuSubTrigger;
  SubContent: typeof DropdownMenuSubContent;
  Separator: typeof DropdownMenuSeparator;
  Arrow: typeof DropdownMenuArrow;
};

type DropdownMenuProps = RxDropdownMenu.DropdownMenuProps;

const DropdownMenu = RxDropdownMenu.DropdownMenu as DropdownMenuComponent;

type DropdownMenuTriggerProps = RxDropdownMenu.DropdownMenuTriggerProps;

const DropdownMenuTrigger = RxDropdownMenu.DropdownMenuTrigger;

type DropdownMenuContentProps = RxDropdownMenu.DropdownMenuContentProps;

const DropdownMenuContent = forwardRef<
  HTMLDivElement,
  DropdownMenuContentProps
>(({ className, children, ...props }, ref) => {
  return (
    <RxDropdownMenu.Portal>
      <RxDropdownMenu.Content
        className={cn(
          "min-w-[5rem] h-fit p-1 border border-gray-500/75 rounded shadow-lg",
          "bg-[#fafafa] text-black",
          "dark:bg-[#18181b] dark:text-white",
          "dropdown-menu-content",
          className
        )}
        {...props}
        ref={ref}
      >
        {children}
      </RxDropdownMenu.Content>
    </RxDropdownMenu.Portal>
  );
});

type DropdownMenuLabelProps = RxDropdownMenu.DropdownMenuLabelProps;

const DropdownMenuLabel = forwardRef<HTMLDivElement, DropdownMenuLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxDropdownMenu.Label
        className={cn("pl-5 py-0.5 pb-1 text-xs", className)}
        {...props}
        ref={ref}
      />
    );
  }
);

type DropdownMenuItemProps = RxDropdownMenu.DropdownMenuItemProps;

const DropdownMenuItem = forwardRef<HTMLDivElement, DropdownMenuItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxDropdownMenu.Item
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

interface DropdownMenuCheckboxItemProps
  extends RxDropdownMenu.DropdownMenuCheckboxItemProps {
  icon?: ReactNode;
}

const DropdownMenuCheckboxItem = forwardRef<
  HTMLDivElement,
  DropdownMenuCheckboxItemProps
>(({ className, children, icon = <CheckIcon />, ...props }, ref) => {
  return (
    <RxDropdownMenu.CheckboxItem
      className={cn(
        "pl-6 pr-3 rounded-sm hover:cursor-default text-[14px]",
        "hover:bg-[#18181b] hover:text-white",
        "dark:hover:bg-[#fafafa] dark:hover:text-black",
        className
      )}
      {...props}
      ref={ref}
    >
      <RxDropdownMenu.ItemIndicator className="w-6 h-6 absolute left-0 flex justify-center items-center">
        {icon}
      </RxDropdownMenu.ItemIndicator>
      {children}
    </RxDropdownMenu.CheckboxItem>
  );
});

type DropdownMenuRadioGroupProps = RxDropdownMenu.DropdownMenuRadioGroupProps;

const DropdownMenuRadioGroup = RxDropdownMenu.RadioGroup;

interface DropdownMenuRadioItemProps
  extends RxDropdownMenu.DropdownMenuRadioItemProps {
  icon?: ReactNode;
}

const DropdownMenuRadioItem = forwardRef<
  HTMLDivElement,
  DropdownMenuRadioItemProps
>(({ className, children, icon = <DotFilledIcon />, ...props }, ref) => {
  return (
    <RxDropdownMenu.RadioItem
      className={cn(
        "pl-6 pr-3 rounded-sm hover:cursor-default text-[14px]",
        "hover:bg-[#18181b] hover:text-white",
        "dark:hover:bg-[#fafafa] dark:hover:text-black",
        className
      )}
      {...props}
      ref={ref}
    >
      <RxDropdownMenu.ItemIndicator className="w-6 h-6 absolute left-0 flex justify-center items-center">
        {icon}
      </RxDropdownMenu.ItemIndicator>
      {children}
    </RxDropdownMenu.RadioItem>
  );
});

type DropdownMenuSubProps = RxDropdownMenu.DropdownMenuSubProps;

const DropdownMenuSub = RxDropdownMenu.Sub;

interface DropdownMenuSubTriggerProps
  extends RxDropdownMenu.DropdownMenuSubTriggerProps {
  icon?: ReactNode;
}

const DropdownMenuSubTrigger = forwardRef<
  HTMLDivElement,
  DropdownMenuSubTriggerProps
>(({ className, children, icon = <ChevronRightIcon />, ...props }, ref) => {
  return (
    <RxDropdownMenu.SubTrigger
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
    </RxDropdownMenu.SubTrigger>
  );
});

type DropdownMenuSubContentProps = RxDropdownMenu.DropdownMenuSubContentProps;

const DropdownMenuSubContent = forwardRef<
  HTMLDivElement,
  DropdownMenuSubContentProps
>(({ className, ...props }, ref) => {
  return (
    <RxDropdownMenu.Portal>
      <RxDropdownMenu.SubContent
        className={cn(
          "min-w-[5rem] h-fit p-1 border border-gray-500/75 rounded shadow-lg",
          "bg-[#fafafa] text-black",
          "dark:bg-[#18181b] dark:text-white",
          "dropdown-menu-sub-content",
          className
        )}
        {...props}
        ref={ref}
      />
    </RxDropdownMenu.Portal>
  );
});

type DropdownMenuSeparatorProps = RxDropdownMenu.DropdownMenuSeparatorProps;

const DropdownMenuSeparator = forwardRef<
  HTMLDivElement,
  DropdownMenuSeparatorProps
>(({ className, ...props }, ref) => {
  return (
    <RxDropdownMenu.Separator
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

type DropdownMenuArrowProps = RxDropdownMenu.DropdownMenuArrowProps;

const DropdownMenuArrow = forwardRef<SVGSVGElement, DropdownMenuArrowProps>(
  ({ width = 7, height = 4, className, ...props }, ref) => {
    return (
      <RxDropdownMenu.Arrow
        ref={ref}
        width={width}
        height={height}
        className={cn("fill-gray-500/75", className)}
        {...props}
      />
    );
  }
);

DropdownMenu.Trigger = DropdownMenuTrigger;
DropdownMenu.Content = DropdownMenuContent;
DropdownMenu.Label = DropdownMenuLabel;
DropdownMenu.Item = DropdownMenuItem;
DropdownMenu.CheckboxItem = DropdownMenuCheckboxItem;
DropdownMenu.RadioGroup = DropdownMenuRadioGroup;
DropdownMenu.RadioItem = DropdownMenuRadioItem;
DropdownMenu.Sub = DropdownMenuSub;
DropdownMenu.SubTrigger = DropdownMenuSubTrigger;
DropdownMenu.SubContent = DropdownMenuSubContent;
DropdownMenu.Separator = DropdownMenuSeparator;
DropdownMenu.Arrow = DropdownMenuArrow;
DropdownMenu.displayName = "DropdownMenu";

export { DropdownMenu };
export type {
  DropdownMenuProps,
  DropdownMenuTriggerProps,
  DropdownMenuContentProps,
  DropdownMenuLabelProps,
  DropdownMenuItemProps,
  DropdownMenuCheckboxItemProps,
  DropdownMenuRadioGroupProps,
  DropdownMenuRadioItemProps,
  DropdownMenuSubProps,
  DropdownMenuSubTriggerProps,
  DropdownMenuSubContentProps,
  DropdownMenuSeparatorProps,
  DropdownMenuArrowProps
};
