import { cn } from "@lib";
import * as RxContextMenu from "@radix-ui/react-context-menu";
import { ReactNode, createContext, forwardRef, useContext } from "react";
import {
  CheckIcon,
  ChevronRightIcon,
  DotFilledIcon
} from "@radix-ui/react-icons";

import "./context-menu.css";
import { cva } from "class-variance-authority";

type ContextMenuColorScheme =
  | "amethyst"
  | "teal"
  | "green"
  | "red"
  | "yellow"
  | "blue"
  | "b/w";

const ColorSchemeContext = createContext<ContextMenuColorScheme | null>(null);

const useColorScheme = () => {
  const ctx = useContext(ColorSchemeContext);
  if (ctx === null) {
    throw new Error("useColorScheme must be used within a ColorSchemeProvider");
  }

  return ctx;
};

interface ContextMenuProviderProps {
  children: ReactNode;
  colorScheme: ContextMenuColorScheme;
}

const ContextMenuProvider: React.FC<ContextMenuProviderProps> = ({
  colorScheme,
  ...props
}) => {
  return <ColorSchemeContext.Provider value={colorScheme} {...props} />;
};

const contextMenuItemVariants = cva("hover:outline-none", {
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

interface ContextMenuProps extends RxContextMenu.ContextMenuProps {
  colorScheme?: ContextMenuColorScheme;
}

const ContextMenu: ContextMenuComponent = ({
  colorScheme = "amethyst",
  ...props
}) => {
  return (
    <ContextMenuProvider colorScheme={colorScheme}>
      <RxContextMenu.ContextMenu {...props} />
    </ContextMenuProvider>
  );
};

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

interface ContextMenuItemProps extends RxContextMenu.ContextMenuItemProps {
  colorScheme?: ContextMenuColorScheme;
  leftIcon?: ReactNode;
}

const ContextMenuItem = forwardRef<HTMLDivElement, ContextMenuItemProps>(
  ({ className, children, colorScheme, leftIcon, ...props }, ref) => {
    return (
      <RxContextMenu.Item
        className={contextMenuItemVariants({
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
      </RxContextMenu.Item>
    );
  }
);

interface ContextMenuCheckboxItemProps
  extends RxContextMenu.ContextMenuCheckboxItemProps {
  colorScheme?: ContextMenuColorScheme;
  icon?: ReactNode;
}

const ContextMenuCheckboxItem = forwardRef<
  HTMLDivElement,
  ContextMenuCheckboxItemProps
>(
  (
    { className, children, colorScheme, icon = <CheckIcon />, ...props },
    ref
  ) => {
    return (
      <RxContextMenu.CheckboxItem
        className={contextMenuItemVariants({
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
          <RxContextMenu.ItemIndicator>{icon}</RxContextMenu.ItemIndicator>
        </div>
        {children}
      </RxContextMenu.CheckboxItem>
    );
  }
);

type ContextMenuRadioGroupProps = RxContextMenu.ContextMenuRadioGroupProps;

const ContextMenuRadioGroup = RxContextMenu.ContextMenuRadioGroup;

interface ContextMenuRadioItemProps
  extends RxContextMenu.ContextMenuRadioItemProps {
  colorScheme?: ContextMenuColorScheme;
  icon?: ReactNode;
}

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
            "pr-3 flex items-center relative rounded-sm hover:cursor-default text-[14px]",
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

interface ContextMenuSubTriggerProps
  extends RxContextMenu.ContextMenuSubTriggerProps {
  colorScheme?: ContextMenuColorScheme;
  leftIcon?: ReactNode;
  icon?: ReactNode;
}

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
