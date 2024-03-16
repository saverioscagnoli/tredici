import * as RxDropdownMenu from "@radix-ui/react-dropdown-menu";
import React, { ReactNode, createContext, forwardRef, useContext } from "react";
import { cn } from "@lib";
import { cva } from "class-variance-authority";
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon
} from "@radix-ui/react-icons";

import "@radix-ui/colors/plum.css";
import "@radix-ui/colors/plum-dark.css";

import "@radix-ui/colors/teal.css";
import "@radix-ui/colors/teal-dark.css";

import "@radix-ui/colors/grass.css";
import "@radix-ui/colors/grass-dark.css";

import "@radix-ui/colors/red.css";
import "@radix-ui/colors/red-dark.css";

import "@radix-ui/colors/amber.css";
import "@radix-ui/colors/amber-dark.css";

import "@radix-ui/colors/blue.css";
import "@radix-ui/colors/blue-dark.css";

import "@radix-ui/colors/gray.css";
import "@radix-ui/colors/gray-dark.css";

import "@radix-ui/colors/slate.css";
import "@radix-ui/colors/slate-dark.css";

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
  Arrow: typeof RxDropdownMenu.Arrow;
};

type DropdownMenuColorScheme =
  | "plum"
  | "teal"
  | "grass"
  | "red"
  | "amber"
  | "blue"
  | "b/w"
  | "gray";

const ColorSchemeContext = createContext<DropdownMenuColorScheme | null>(null);

const useColorScheme = () => {
  const ctx = useContext(ColorSchemeContext);

  if (!ctx) {
    throw new Error(
      "Dropdown menu compund components must be used within a DropdownMenu component"
    );
  }

  return ctx;
};

const dropdownMenuItemVariants = cva(["outline-none"], {
  variants: {
    colorScheme: {
      plum: ["focus:bg-[--plum-10]", "focus:text-[--slate-1]"],
      teal: ["focus:bg-[--teal-10]", "focus:text-[--slate-1]"],
      grass: ["focus:bg-[--grass-10]", "focus:text-[--slate-1]"],
      red: ["focus:bg-[--red-10]", "focus:text-[--slate-1]"],
      amber: [
        "focus:bg-[--amber-10]",
        ["focus:text-[--slate-12]", "dark:focus:text-[--slate-1]"]
      ],
      blue: ["focus:bg-[--blue-10]", "focus:text-[--slate-1]"],
      "b/w": ["focus:bg-[--slate-12]", "focus:text-[--slate-1]"],
      gray: ["focus:bg-[--gray-4]", "dark:focus:bg-[--gray-5]"]
    }
  }
});

type DropdownMenuProps = RxDropdownMenu.DropdownMenuProps & {
  colorScheme?: DropdownMenuColorScheme;
};

const DropdownMenu: DropdownMenuComponent = ({
  colorScheme = "plum",
  ...props
}) => {
  return (
    <ColorSchemeContext.Provider value={colorScheme}>
      <RxDropdownMenu.Root {...props} />
    </ColorSchemeContext.Provider>
  );
};

type DropdownMenuTriggerProps = RxDropdownMenu.DropdownMenuTriggerProps;

const DropdownMenuTrigger = RxDropdownMenu.Trigger;

type DropdownMenuContentProps = RxDropdownMenu.DropdownMenuContentProps;

const DropdownMenuContent = forwardRef<
  HTMLDivElement,
  DropdownMenuContentProps
>(({ className, sideOffset = 4, ...props }, ref) => {
  return (
    <RxDropdownMenu.Portal>
      <RxDropdownMenu.Content
        sideOffset={sideOffset}
        className={cn(
          "min-w-fit h-fit",
          "p-1",
          "border border-[--gray-7]",
          "rounded",
          "shadow-lg",
          "bg-[--slate-1]",
          "text-[--slate-12]",
          "dropdown-menu-content",
          className
        )}
        {...props}
        ref={ref}
      />
    </RxDropdownMenu.Portal>
  );
});

type DropdownMenuLabelProps = RxDropdownMenu.DropdownMenuLabelProps;

const DropdownMenuLabel = forwardRef<HTMLDivElement, DropdownMenuLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxDropdownMenu.Label
        className={cn("pl-5 py-0.5 pb-1", "text-xs", className)}
        {...props}
        ref={ref}
      />
    );
  }
);

type DropdownMenuItemProps = RxDropdownMenu.DropdownMenuItemProps & {
  colorScheme?: DropdownMenuColorScheme;
  leftIcon?: ReactNode;
};

const DropdownMenuItem = forwardRef<HTMLDivElement, DropdownMenuItemProps>(
  ({ className, children, colorScheme, leftIcon, ...props }, ref) => {
    return (
      <RxDropdownMenu.Item
        className={dropdownMenuItemVariants({
          className: cn(
            "flex items-center",
            "pr-3",
            "text-[14px]",
            "relative",
            "rounded-sm",
            "focus:cursor-default",
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
      </RxDropdownMenu.Item>
    );
  }
);

type DropdownMenuCheckboxItemProps =
  RxDropdownMenu.DropdownMenuCheckboxItemProps & {
    colorScheme?: DropdownMenuColorScheme;
    leftIcon?: ReactNode;
    icon?: ReactNode;
  };

const DropdownMenuCheckboxItem = forwardRef<
  HTMLDivElement,
  DropdownMenuCheckboxItemProps
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
      <RxDropdownMenu.CheckboxItem
        className={dropdownMenuItemVariants({
          className: cn(
            "flex justify-between items-center",
            "text-[14px]",
            "relative",
            "rounded-sm",
            "focus:cursor-default",
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
          <RxDropdownMenu.ItemIndicator>{icon}</RxDropdownMenu.ItemIndicator>
        </div>
      </RxDropdownMenu.CheckboxItem>
    );
  }
);

type DropdownMenuRadioGroupProps = RxDropdownMenu.DropdownMenuRadioGroupProps;

const DropdownMenuRadioGroup = RxDropdownMenu.DropdownMenuRadioGroup;

type DropdownMenuRadioItemProps = RxDropdownMenu.DropdownMenuRadioItemProps & {
  colorScheme?: DropdownMenuColorScheme;
  icon?: ReactNode;
};

const DropdownMenuRadioItem = forwardRef<
  HTMLDivElement,
  DropdownMenuRadioItemProps
>(
  (
    { className, children, colorScheme, icon = <DotFilledIcon />, ...props },
    ref
  ) => {
    return (
      <RxDropdownMenu.RadioItem
        className={dropdownMenuItemVariants({
          className: cn(
            "flex items-center",
            "pr-3",
            "text-[14px]",
            "relative",
            "rounded-sm",
            "focus:cursor-default",
            className
          ),
          colorScheme: colorScheme ?? useColorScheme()
        })}
        {...props}
        ref={ref}
      >
        <div className="w-7 flex justify-center items-center">
          <RxDropdownMenu.ItemIndicator>{icon}</RxDropdownMenu.ItemIndicator>
        </div>
        {children}
      </RxDropdownMenu.RadioItem>
    );
  }
);

type DropdownMenuSubProps = RxDropdownMenu.DropdownMenuSubProps;

const DropdownMenuSub = RxDropdownMenu.DropdownMenuSub;

type DropdownMenuSubTriggerProps =
  RxDropdownMenu.DropdownMenuSubTriggerProps & {
    colorScheme?: DropdownMenuColorScheme;
    leftIcon?: ReactNode;
    icon?: ReactNode;
  };

const DropdownMenuSubTrigger = forwardRef<
  HTMLDivElement,
  DropdownMenuSubTriggerProps
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
      <RxDropdownMenu.SubTrigger
        className={dropdownMenuItemVariants({
          className: cn(
            "flex justify-between items-center",
            "text-[14px]",
            "relative",
            "rounded-sm",
            "focus:cursor-default",
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
      </RxDropdownMenu.SubTrigger>
    );
  }
);

type DropdownMenuSubContentProps = RxDropdownMenu.DropdownMenuSubContentProps;

const DropdownMenuSubContent = forwardRef<
  HTMLDivElement,
  DropdownMenuSubContentProps
>(({ className, ...props }, ref) => {
  return (
    <RxDropdownMenu.Portal>
      <RxDropdownMenu.SubContent
        className={cn(
          "min-w-fit h-fit",
          "p-1",
          "border border-[--gray-7]",
          "rounded",
          "shadow-lg",
          "bg-[--slate-1]",
          "text-[--slate-12]",
          "dropdown-menu-content",
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
      className={cn("h-[1px] my-1", "bg-[--gray-7]", className)}
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
        className={cn("fill-[--gray-7]", className)}
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

DropdownMenu.displayName = RxDropdownMenu.Root.displayName;

export { DropdownMenu };
export type {
  DropdownMenuProps,
  DropdownMenuColorScheme,
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
  DropdownMenuSeparatorProps
};
