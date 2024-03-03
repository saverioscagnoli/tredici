import React, { ReactNode, createContext, forwardRef, useContext } from "react";
import * as RxContextMenu from "@radix-ui/react-context-menu";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon
} from "@radix-ui/react-icons";

import "./context-menu.css";

type ContextMenuComponent = React.FC<ContextMenuProps> & {
  Trigger: typeof ContextMenuTrigger;
  Content: typeof ContextMenuContent;
  Label: typeof ContextMenuLabel;
  Item: typeof ContextMenuItem;
  CheckboxItem: typeof ContextMenuCheckboxItem;
  RadioGroup: typeof ContextMenuRadioGroup;
  RadioItem: typeof ContextMenuRadioItem;
  Sub: typeof ContextMenuSub;
  SubTrigger: typeof ContextMenuSubTrigger;
  SubContent: typeof ContextMenuSubContent;
  Separator: typeof ContextMenuSeparator;
};

type ContextMenuColorScheme =
  | "purple"
  | "teal"
  | "green"
  | "red"
  | "yellow"
  | "blue"
  | "b/w"
  | "gray";

const ColorSchemeContext = createContext<ContextMenuColorScheme | null>(null);

const useColorScheme = () => {
  const ctx = useContext(ColorSchemeContext);

  if (!ctx) {
    throw new Error(
      "Context menu compund components must be used within a ContextMenu component"
    );
  }

  return ctx;
};

const contextMenuItemVariants = cva(["hover:outline-none"], {
  variants: {
    colorScheme: {
      purple: [
        [
          ["hover:bg-purple-500", "dark:hover:bg-purple-400"],
          ["hover:text-light", "dark:hover:text-dark"]
        ]
      ],
      teal: [
        [
          ["hover:bg-teal-500", "dark:hover:bg-teal-400"],
          ["hover:text-light", "dark:hover:text-dark"]
        ]
      ],
      green: [
        [
          ["hover:bg-green-500", "dark:hover:bg-green-400"],
          ["hover:text-light", "dark:hover:text-dark"]
        ]
      ],
      red: [
        [
          ["hover:bg-red-500", "dark:hover:bg-red-400"],
          ["hover:text-light", "dark:hover:text-dark"]
        ]
      ],
      yellow: [
        [
          ["hover:bg-yellow-500", "dark:hover:bg-yellow-400"],
          ["hover:text-light", "dark:hover:text-dark"]
        ]
      ],
      blue: [
        [
          ["hover:bg-blue-500", "dark:hover:bg-blue-400"],
          ["hover:text-light", "dark:hover:text-dark"]
        ]
      ],
      "b/w": [
        [
          ["hover:bg-dark", "dark:hover:bg-light"],
          ["hover:text-light", "dark:hover:text-dark"]
        ]
      ],

      gray: ["hover:bg-gray-400/25", "dark:hover:bg-gray-500/30"]
    }
  }
});

type ContextMenuProps = RxContextMenu.ContextMenuProps & {
  colorScheme?: ContextMenuColorScheme;
};

const ContextMenu: ContextMenuComponent = ({
  colorScheme = "purple",
  ...props
}) => {
  return (
    <ColorSchemeContext.Provider value={colorScheme}>
      <RxContextMenu.Root {...props} />
    </ColorSchemeContext.Provider>
  );
};

type ContextMenuTriggerProps = RxContextMenu.ContextMenuTriggerProps;

const ContextMenuTrigger = RxContextMenu.Trigger;

type ContextMenuContentProps = RxContextMenu.ContextMenuContentProps;

const ContextMenuContent = forwardRef<HTMLDivElement, ContextMenuContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxContextMenu.Portal>
        <RxContextMenu.Content
          className={cn(
            "min-w-fit h-fit",
            "p-1",
            "border border-gray-500/75",
            "rounded",
            "shadow-lg",
            ["bg-[#fafafa] text-dark", "dark:bg-[#18181b] dark:text-light"],
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
        className={cn("pl-5 py-0.5 pb-1", "text-xs", className)}
        {...props}
        ref={ref}
      />
    );
  }
);

type ContextMenuItemProps = RxContextMenu.ContextMenuItemProps & {
  colorScheme?: ContextMenuColorScheme;
  leftIcon?: ReactNode;
};

const ContextMenuItem = forwardRef<HTMLDivElement, ContextMenuItemProps>(
  ({ className, children, colorScheme, leftIcon, ...props }, ref) => {
    return (
      <RxContextMenu.Item
        className={contextMenuItemVariants({
          className: cn(
            "flex items-center",
            "pr-3",
            "text-[14px]",
            "relative",
            "rounded-sm",
            "hover:cursor-default",
            [
              "data-[disabled]:opacity-30",
              "data-[disabled]:pointer-events-none"
            ],
            className
          ),
          colorScheme: colorScheme ?? useColorScheme()
        })}
        {...props}
        ref={ref}
      >
        <div className="w-7 flex justify-center items-center">{leftIcon}</div>
        {children}
      </RxContextMenu.Item>
    );
  }
);

type ContextMenuCheckboxItemProps =
  RxContextMenu.ContextMenuCheckboxItemProps & {
    colorScheme?: ContextMenuColorScheme;
    leftIcon?: ReactNode;
    icon?: ReactNode;
  };

const ContextMenuCheckboxItem = forwardRef<
  HTMLDivElement,
  ContextMenuCheckboxItemProps
>(
  (
    {
      className,
      children,
      colorScheme,
      leftIcon,
      checked,
      icon = <CheckIcon />,
      ...props
    },
    ref
  ) => {
    return (
      <RxContextMenu.CheckboxItem
        className={contextMenuItemVariants({
          className: cn(
            "flex justify-between items-center",
            "text-[14px]",
            "relative",
            "rounded-sm",
            "hover:cursor-default",
            className
          ),
          colorScheme: colorScheme ?? useColorScheme()
        })}
        checked={checked}
        {...props}
        ref={ref}
      >
        <div className="w-7 flex justify-center items-center">{leftIcon}</div>
        {children}
        <div className="ml-auto pl-2 mr-3 w-[15px]">
          {!checked && <span className="w-[15px]" />}
          <RxContextMenu.ItemIndicator>{icon}</RxContextMenu.ItemIndicator>
        </div>
      </RxContextMenu.CheckboxItem>
    );
  }
);

type ContextMenuRadioGroupProps = RxContextMenu.ContextMenuRadioGroupProps;

const ContextMenuRadioGroup = RxContextMenu.ContextMenuRadioGroup;

type ContextMenuRadioItemProps = RxContextMenu.ContextMenuRadioItemProps & {
  colorScheme?: ContextMenuColorScheme;
  icon?: ReactNode;
};

const ContextMenuRadioItem = forwardRef<
  HTMLDivElement,
  ContextMenuRadioItemProps
>(
  (
    { className, children, colorScheme, icon = <DotFilledIcon />, ...props },
    ref
  ) => {
    return (
      <RxContextMenu.RadioItem
        className={contextMenuItemVariants({
          className: cn(
            "flex items-center",
            "pr-3",
            "text-[14px]",
            "relative",
            "rounded-sm",
            "hover:cursor-default",
            className
          ),
          colorScheme: colorScheme ?? useColorScheme()
        })}
        {...props}
        ref={ref}
      >
        <div className="w-7 flex justify-center items-center">
          <RxContextMenu.ItemIndicator>{icon}</RxContextMenu.ItemIndicator>
        </div>
        {children}
      </RxContextMenu.RadioItem>
    );
  }
);

type ContextMenuSubProps = RxContextMenu.ContextMenuSubProps;

const ContextMenuSub = RxContextMenu.ContextMenuSub;

type ContextMenuSubTriggerProps = RxContextMenu.ContextMenuSubTriggerProps & {
  colorScheme?: ContextMenuColorScheme;
  leftIcon?: ReactNode;
  icon?: ReactNode;
};

const ContextMenuSubTrigger = forwardRef<
  HTMLDivElement,
  ContextMenuSubTriggerProps
>(
  (
    {
      className,
      children,
      colorScheme,
      leftIcon,
      icon = <ChevronRightIcon />,
      ...props
    },
    ref
  ) => {
    return (
      <RxContextMenu.SubTrigger
        className={contextMenuItemVariants({
          className: cn(
            "flex justify-between items-center",
            "text-[14px]",
            "relative",
            "rounded-sm",
            "hover:cursor-default",
            className
          ),
          colorScheme: colorScheme ?? useColorScheme()
        })}
        {...props}
        ref={ref}
      >
        <div className="w-7 flex justify-center items-center">{leftIcon}</div>
        {children}
        <span className="ml-auto">{icon}</span>
      </RxContextMenu.SubTrigger>
    );
  }
);

type ContextMenuSubContentProps = RxContextMenu.ContextMenuSubContentProps;

const ContextMenuSubContent = forwardRef<
  HTMLDivElement,
  ContextMenuSubContentProps
>(({ className, ...props }, ref) => {
  return (
    <RxContextMenu.Portal>
      <RxContextMenu.SubContent
        className={cn(
          "min-w-fit h-fit p-1 border border-gray-500/75 rounded shadow-lg",
          "bg-[#fafafa] text-dark",
          "dark:bg-[#18181b] dark:text-light",
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

ContextMenu.displayName = RxContextMenu.Root.displayName;

export { ContextMenu };
export type {
  ContextMenuProps,
  ContextMenuColorScheme,
  ContextMenuTriggerProps,
  ContextMenuContentProps,
  ContextMenuLabelProps,
  ContextMenuItemProps,
  ContextMenuCheckboxItemProps,
  ContextMenuRadioGroupProps,
  ContextMenuRadioItemProps,
  ContextMenuSubProps,
  ContextMenuSubTriggerProps,
  ContextMenuSubContentProps,
  ContextMenuSeparatorProps
};
