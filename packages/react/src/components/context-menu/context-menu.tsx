import { cn } from "@lib";
import * as RxContextMenu from "@radix-ui/react-context-menu";
import { forwardRef } from "react";
import { CheckIcon } from "@radix-ui/react-icons";

interface ContextMenuComponent extends React.FC<ContextMenuProps> {
  Trigger: typeof ContextMenuTrigger;
  Content: typeof ContextMenuContent;
  Label: typeof ContextMenuLabel;
  Item: typeof ContextMenuItem;
  CheckboxItem: typeof ContextMenuCheckboxItem;
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
            "min-w-40 h-fit p-1 border border-gray-500/75 rounded shadow",
            "bg-[#fafafa] text-black",
            "dark:bg-[#18181b] dark:text-white",
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
      <RxContextMenu.ContextMenuLabel
        className={cn("px-6 py-0.5 pb-1 text-sm", className)}
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
      <RxContextMenu.ContextMenuItem
        className={cn(
          "rounded-sm px-7 hover:cursor-default",
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

type ContextMenuCheckboxItemProps = RxContextMenu.ContextMenuCheckboxItemProps;

const ContextMenuCheckboxItem = forwardRef<
  HTMLDivElement,
  ContextMenuCheckboxItemProps
>(({ className, children, ...props }, ref) => {
  return (
    <RxContextMenu.ContextMenuCheckboxItem
      className={cn(
        "px-3 flex items-center justify-center rounded-sm hover:cursor-default",
        "hover:bg-[#18181b] hover:text-white",
        "dark:hover:bg-[#fafafa] dark:hover:text-black",
        className
      )}
      {...props}
      ref={ref}
    >
      <RxContextMenu.ContextMenuItemIndicator>
        <CheckIcon />
      </RxContextMenu.ContextMenuItemIndicator>
      {children}
    </RxContextMenu.ContextMenuCheckboxItem>
  );
});

ContextMenu.Trigger = ContextMenuTrigger;
ContextMenu.Content = ContextMenuContent;
ContextMenu.Label = ContextMenuLabel;
ContextMenu.Item = ContextMenuItem;
ContextMenu.CheckboxItem = ContextMenuCheckboxItem;
ContextMenu.displayName = "ContextMenu";

export { ContextMenu };
export type {
  ContextMenuProps,
  ContextMenuTriggerProps,
  ContextMenuContentProps,
  ContextMenuLabelProps,
  ContextMenuItemProps,
  ContextMenuCheckboxItemProps
};
