import React, { ReactNode, createContext, forwardRef, useContext } from "react";
import * as RxDropdownMenu from "@radix-ui/react-dropdown-menu";
import { cn } from "@/lib/utils";
import { cva } from "class-variance-authority";
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon
} from "@radix-ui/react-icons";

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
  | "purple"
  | "teal"
  | "green"
  | "red"
  | "yellow"
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

const dropdownMenuItemVariants = cva(["hover:outline-none"], {
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

type DropdownMenuProps = RxDropdownMenu.DropdownMenuProps & {
  colorScheme?: DropdownMenuColorScheme;
};

const DropdownMenu: DropdownMenuComponent = ({
  colorScheme = "purple",
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
          "border border-gray-500/75",
          "rounded",
          "shadow-lg",
          ["bg-[#fafafa] text-dark", "dark:bg-[#18181b] dark:text-light"],
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
            "hover:cursor-default",
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
          "min-w-fit h-fit p-1 border border-gray-500/75 rounded shadow-lg",
          "bg-[#fafafa] text-dark",
          "dark:bg-[#18181b] dark:text-light",
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
