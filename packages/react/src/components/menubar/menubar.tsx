import { cn } from "@lib";
import { CheckIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import * as RxMenubar from "@radix-ui/react-menubar";
import {
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
  createContext,
  forwardRef,
  useContext
} from "react";
import { cva } from "class-variance-authority";

import "./menubar.css";

type MenubarColorScheme =
  | "amethyst"
  | "teal"
  | "green"
  | "red"
  | "yellow"
  | "blue"
  | "b/w";

const ColorSchemeContext = createContext<MenubarColorScheme | null>(null);

const useColorScheme = () => {
  const ctx = useContext(ColorSchemeContext);
  if (ctx === null) {
    throw new Error("useColorScheme must be used within a ColorSchemeProvider");
  }

  return ctx;
};

interface MenubarProviderProps {
  children: ReactNode;
  colorScheme: MenubarColorScheme;
}

const MenubarProvider: React.FC<MenubarProviderProps> = ({
  colorScheme,
  ...props
}) => {
  return <ColorSchemeContext.Provider value={colorScheme} {...props} />;
};

const menubarItemVariants = cva("hover:outline-none", {
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

interface MenubarComponent
  extends ForwardRefExoticComponent<
    MenubarProps & RefAttributes<HTMLDivElement>
  > {
  Menu: typeof RxMenubar.Menu;
  Trigger: typeof MenubarTrigger;
  Content: typeof MenubarContent;
  Label: typeof MenubarLabel;
  Item: typeof MenbarItem;
  CheckboxItem: typeof MenubarCheckboxItem;
  RadioGroup: typeof MenubarRadioGroup;
  RadioItem: typeof MenubarRadioItem;
  Sub: typeof MenubarSub;
  SubTrigger: typeof MenubarSubTrigger;
  SubContent: typeof MenubarSubContent;
  Separator: typeof MenubarSeparator;
  Arrow: typeof MenubarArrow;
}

interface MenubarProps extends RxMenubar.MenubarProps {
  colorScheme?: MenubarColorScheme;
}

const Menubar = forwardRef<HTMLDivElement, MenubarProps>(
  ({ className, colorScheme = "amethyst", ...props }, ref) => {
    return (
      <MenubarProvider colorScheme={colorScheme}>
        <RxMenubar.Menubar
          className={cn(
            "w-fit p-1 flex justify-between items-center",
            "text-black",
            "dark:text-white",
            className
          )}
          {...props}
          ref={ref}
        />
      </MenubarProvider>
    );
  }
) as MenubarComponent;

type MenubarMenuProps = RxMenubar.MenubarMenuProps;

const MenubarMenu = RxMenubar.Menu;

type MenubarTriggerProps = RxMenubar.MenubarTriggerProps;

const MenubarTrigger = forwardRef<HTMLButtonElement, MenubarTriggerProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxMenubar.Trigger
        className={cn(
          "px-2 rounded text-sm",
          "hover:bg-gray-500/25",
          "data-[state='open']:bg-gray-500/25",
          className
        )}
        {...props}
        ref={ref}
      />
    );
  }
);

type MenubarContentProps = RxMenubar.MenubarContentProps;

const MenubarContent = forwardRef<HTMLDivElement, MenubarContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxMenubar.Portal>
        <RxMenubar.Content
          className={cn(
            "min-w-[5rem] h-fit p-1 border border-gray-500/75 rounded shadow-lg",
            "bg-[#fafafa] text-black",
            "dark:bg-[#18181b] dark:text-white",
            "menubar-content",
            className
          )}
          {...props}
          ref={ref}
        />
      </RxMenubar.Portal>
    );
  }
);

type MenubarLabelProps = RxMenubar.MenubarLabelProps;

const MenubarLabel = forwardRef<HTMLDivElement, MenubarLabelProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxMenubar.Label
        className={cn("pl-5 py-0.5 pb-1 text-xs", className)}
        {...props}
        ref={ref}
      />
    );
  }
);

interface MenubarItemProps extends RxMenubar.MenubarItemProps {
  colorScheme?: MenubarColorScheme;
  leftIcon?: ReactNode;
}

const MenbarItem = forwardRef<HTMLDivElement, MenubarItemProps>(
  ({ className, children, colorScheme, leftIcon, ...props }, ref) => {
    return (
      <RxMenubar.Item
        className={menubarItemVariants({
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
      </RxMenubar.Item>
    );
  }
);

interface MenubarCheckboxItemProps extends RxMenubar.MenubarCheckboxItemProps {
  colorScheme?: MenubarColorScheme;
  icon?: ReactNode;
}

const MenubarCheckboxItem = forwardRef<
  HTMLDivElement,
  MenubarCheckboxItemProps
>(
  (
    { className, children, colorScheme, icon = <CheckIcon />, ...props },
    ref
  ) => {
    return (
      <RxMenubar.CheckboxItem
        className={menubarItemVariants({
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
          <RxMenubar.ItemIndicator>{icon}</RxMenubar.ItemIndicator>
        </div>
        {children}
      </RxMenubar.CheckboxItem>
    );
  }
);

type MenubarRadioGroupProps = RxMenubar.MenubarRadioGroupProps;

const MenubarRadioGroup = RxMenubar.RadioGroup;

interface MenubarRadioItemProps extends RxMenubar.MenubarRadioItemProps {
  colorScheme?: MenubarColorScheme;
  icon?: ReactNode;
}

const MenubarRadioItem = forwardRef<HTMLDivElement, MenubarRadioItemProps>(
  (
    { className, children, colorScheme, icon = <CheckIcon />, ...props },
    ref
  ) => {
    return (
      <RxMenubar.RadioItem
        className={menubarItemVariants({
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
          <RxMenubar.ItemIndicator>{icon}</RxMenubar.ItemIndicator>
        </div>
        {children}
      </RxMenubar.RadioItem>
    );
  }
);

type MenubarSubProps = RxMenubar.MenubarSubProps;

const MenubarSub = RxMenubar.Sub;

interface MenubarSubTriggerProps extends RxMenubar.MenubarSubTriggerProps {
  colorScheme?: MenubarColorScheme;
  leftIcon?: ReactNode;
  icon?: ReactNode;
}

const MenubarSubTrigger = forwardRef<HTMLDivElement, MenubarSubTriggerProps>(
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
      <RxMenubar.SubTrigger
        className={menubarItemVariants({
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
      </RxMenubar.SubTrigger>
    );
  }
);

type MenubarSubContentProps = RxMenubar.MenubarSubContentProps;

const MenubarSubContent = forwardRef<HTMLDivElement, MenubarSubContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxMenubar.Portal>
        <RxMenubar.SubContent
          className={cn(
            "min-w-[5rem] h-fit p-1 border border-gray-500/75 rounded shadow-lg",
            "bg-[#fafafa] text-black",
            "dark:bg-[#18181b] dark:text-white",
            "menubar-content",
            className
          )}
          {...props}
          ref={ref}
        />
      </RxMenubar.Portal>
    );
  }
);

type MenubarSeparatorProps = RxMenubar.MenubarSeparatorProps;

const MenubarSeparator = forwardRef<HTMLDivElement, MenubarSeparatorProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxMenubar.Separator
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
  }
);

type MenubarArrowProps = RxMenubar.MenubarArrowProps;

const MenubarArrow = forwardRef<SVGSVGElement, MenubarArrowProps>(
  ({ width = 7, height = 4, className, ...props }, ref) => {
    return (
      <RxMenubar.Arrow
        ref={ref}
        width={width}
        height={height}
        className={cn("fill-gray-500/75", className)}
        {...props}
      />
    );
  }
);

Menubar.Menu = MenubarMenu;
Menubar.Trigger = MenubarTrigger;
Menubar.Content = MenubarContent;
Menubar.Label = MenubarLabel;
Menubar.Item = MenbarItem;
Menubar.CheckboxItem = MenubarCheckboxItem;
Menubar.RadioGroup = MenubarRadioGroup;
Menubar.RadioItem = MenubarRadioItem;
Menubar.Sub = MenubarSub;
Menubar.SubTrigger = MenubarSubTrigger;
Menubar.SubContent = MenubarSubContent;
Menubar.Separator = MenubarSeparator;
Menubar.Arrow = MenubarArrow;
Menubar.displayName = "Menubar";

export { Menubar };
export type {
  MenubarProps,
  MenubarMenuProps,
  MenubarTriggerProps,
  MenubarContentProps,
  MenubarLabelProps,
  MenubarItemProps,
  MenubarCheckboxItemProps,
  MenubarRadioGroupProps,
  MenubarRadioItemProps,
  MenubarSubProps,
  MenubarSubTriggerProps,
  MenubarSubContentProps,
  MenubarSeparatorProps,
  MenubarArrowProps
};
