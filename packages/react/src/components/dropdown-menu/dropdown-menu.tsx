import { cn } from "@lib";
import * as RxDropdownMenu from "@radix-ui/react-dropdown-menu";
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon
} from "@radix-ui/react-icons";
import { ReactNode, createContext, forwardRef, useContext } from "react";
import { cva } from "class-variance-authority";

import "./dropdown-menu.css";

type DropdownMenuColorScheme =
  | "amethyst"
  | "teal"
  | "green"
  | "red"
  | "yellow"
  | "blue"
  | "b/w";

const ColorSchemeContext = createContext<DropdownMenuColorScheme | null>(null);

const useColorScheme = () => {
  const ctx = useContext(ColorSchemeContext);
  if (ctx === null) {
    throw new Error("useColorScheme must be used within a ColorSchemeProvider");
  }

  return ctx;
};

interface DropdownMenuProviderProps {
  children: ReactNode;
  colorScheme: DropdownMenuColorScheme;
}

const DropdownMenuProvider: React.FC<DropdownMenuProviderProps> = ({
  colorScheme,
  ...props
}) => {
  return <ColorSchemeContext.Provider value={colorScheme} {...props} />;
};

const dropdownMenuItemVariants = cva("hover:outline-none", {
  variants: {
    colorScheme: {
      amethyst: [
        "hover:bg-amethyst-500 hover:text-white",
        "dark:hover:bg-amethyst-400 dark:hover:text-black"
      ],
      teal: [
        "hover:bg-teal-500 hover:text-white",
        "dark:hover:bg-teal-400 dark:hover:text-black"
      ],
      green: [
        "hover:bg-green-500 hover:text-white",
        "dark:hover:bg-green-400 dark:hover:text-black"
      ],
      red: [
        "hover:bg-red-500 hover:text-white",
        "dark:hover:bg-red-400 dark:hover:text-black"
      ],

      yellow: [
        "hover:bg-yellow-500 hover:text-black",
        "dark:hover:bg-yellow-400"
      ],
      blue: [
        "hover:bg-blue-500 hover:text-white",
        "dark:hover:bg-blue-400 dark:hover:text-black"
      ],
      "b/w": [
        "hover:bg-[#18181b] hover:text-white",
        "dark:hover:bg-[#fafafa] dark:hover:text-black"
      ],
      gray: ["hover:bg-gray-400/25", "dark:hover:bg-gray-500/30"]
    }
  }
});

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

interface DropdownMenuProps extends RxDropdownMenu.DropdownMenuProps {
  colorScheme?: DropdownMenuColorScheme;
}

const DropdownMenu: DropdownMenuComponent = ({
  colorScheme = "amethyst",
  ...props
}) => {
  return (
    <DropdownMenuProvider colorScheme={colorScheme}>
      <RxDropdownMenu.DropdownMenu {...props} />
    </DropdownMenuProvider>
  );
};

type DropdownMenuTriggerProps = RxDropdownMenu.DropdownMenuTriggerProps;

const DropdownMenuTrigger = RxDropdownMenu.DropdownMenuTrigger;

type DropdownMenuContentProps = RxDropdownMenu.DropdownMenuContentProps;

const DropdownMenuContent = forwardRef<
  HTMLDivElement,
  DropdownMenuContentProps
>(({ className, children, sideOffset = 4, ...props }, ref) => {
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
        sideOffset={sideOffset}
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

interface DropdownMenuItemProps extends RxDropdownMenu.DropdownMenuItemProps {
  colorScheme?: DropdownMenuColorScheme;
  leftIcon?: ReactNode;
}

const DropdownMenuItem = forwardRef<HTMLDivElement, DropdownMenuItemProps>(
  ({ className, children, colorScheme, leftIcon, ...props }, ref) => {
    return (
      <RxDropdownMenu.Item
        className={dropdownMenuItemVariants({
          className: cn(
            "pr-3 flex items-center relative rounded-sm hover:cursor-default text-[14px]",
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

interface DropdownMenuCheckboxItemProps
  extends RxDropdownMenu.DropdownMenuCheckboxItemProps {
  colorScheme?: DropdownMenuColorScheme;
  icon?: ReactNode;
}

const DropdownMenuCheckboxItem = forwardRef<
  HTMLDivElement,
  DropdownMenuCheckboxItemProps
>(
  (
    { className, children, colorScheme, icon = <CheckIcon />, ...props },
    ref
  ) => {
    return (
      <RxDropdownMenu.CheckboxItem
        className={dropdownMenuItemVariants({
          className: cn(
            "pr-3 flex items-center relative rounded-sm hover:cursor-default text-[14px]",
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
      </RxDropdownMenu.CheckboxItem>
    );
  }
);

type DropdownMenuRadioGroupProps = RxDropdownMenu.DropdownMenuRadioGroupProps;

const DropdownMenuRadioGroup = RxDropdownMenu.RadioGroup;

interface DropdownMenuRadioItemProps
  extends RxDropdownMenu.DropdownMenuRadioItemProps {
  colorScheme?: DropdownMenuColorScheme;
  icon?: ReactNode;
}

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
            "pr-3 flex items-center relative rounded-sm hover:cursor-default text-[14px]",
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

const DropdownMenuSub = RxDropdownMenu.Sub;

interface DropdownMenuSubTriggerProps
  extends RxDropdownMenu.DropdownMenuSubTriggerProps {
  colorScheme?: DropdownMenuColorScheme;
  leftIcon?: ReactNode;
  icon?: ReactNode;
}

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
            "flex justify-between items-center relative rounded-sm hover:cursor-default text-[14px]",
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
