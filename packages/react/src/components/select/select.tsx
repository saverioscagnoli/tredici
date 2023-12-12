import { c, cn } from "../../lib";
import { ArrowDownIcon, ArrowUpIcon, CheckIcon } from "@radix-ui/react-icons";
import * as RxSelect from "@radix-ui/react-select";
import React, { ReactNode, forwardRef } from "react";
import { ColorScheme } from "../../types";
import { useTheme } from "../tredici";

export type SelectProps = RxSelect.SelectProps;

interface SelectComponent extends React.FC<SelectProps> {
  Trigger: typeof SelectTrigger;
  Content: typeof SelectContent;
  Item: typeof SelectItem;
  Group: typeof RxSelect.Group;
  Label: typeof RxSelect.Label;
  Separator: typeof SelectSeparator;
}

const Select: SelectComponent = props => {
  return <RxSelect.Root {...props} />;
};

const selectTrigger = c(
  "flex justify-between items-center px-3 min-w-fit w-40 max-w-full h-9 rounded-md font-semibold border border-gray-600/40 shadow hover:outline hover:outline-2 focus:outline focus:outline-2",
  {
    colorScheme: {
      amethyst:
        "dark:hover:outline-amethyst-400 hover:outline-amethyst-500 dark:focus:outline-amethyst-400 focus:outline-amethyst-500",
      teal: "dark:hover:outline-teal-400 hover:outline-teal-500 dark:focus:outline-teal-400 focus:outline-teal-500",
      green:
        "dark:hover:outline-green-400 hover:outline-green-500 dark:focus:outline-green-400 focus:outline-green-500",
      crimson:
        "dark:hover:outline-crimson-400 hover:outline-crimson-500 dark:focus:outline-crimson-400 focus:outline-crimson-500",
      yellow:
        "dark:hover:outline-yellow-400 hover:outline-yellow-500 dark:focus:outline-yellow-400 focus:outline-yellow-500",
      blue: "dark:hover:outline-blue-400 hover:outline-blue-500 dark:focus:outline-blue-400 focus:outline-blue-500",
      pink: "dark:hover:outline-pink-400 hover:outline-pink-500 dark:focus:outline-pink-400 focus:outline-pink-500",
      "b/w":
        "dark:hover:outline-fafafa hover:outline-18181b dark:focus:outline-gray-400 focus:outline-gray-500"
    }
  }
);

export interface SelectTriggerProps extends RxSelect.SelectTriggerProps {
  /**
   * The color scheme of the select trigger.
   * @see ColorScheme
   * @default defaultColorScheme
   */
  colorScheme?: ColorScheme;

  /**
   * The icon to display on the select trigger.
   */
  icon?: ReactNode;
}

const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(
  (
    {
      className,
      colorScheme = useTheme().defaultColorScheme,
      icon = <ArrowDownIcon />,
      placeholder,
      ...props
    },
    ref
  ) => {
    return (
      <RxSelect.Trigger
        {...props}
        ref={ref}
        className={selectTrigger({ className, colorScheme })}
      >
        <RxSelect.Value placeholder={placeholder} />
        <RxSelect.Icon className="ml-2">{icon}</RxSelect.Icon>
      </RxSelect.Trigger>
    );
  }
);

export interface SelectContentProps extends RxSelect.SelectContentProps {
  /**
   * Determine the method of scrolling.
   * @default false
   */
  scrollbar?: boolean;

  /**
   * If scrollbar is set to false, this will change the icon for scrolling up.
   */
  upIcon?: ReactNode;

  /**
   * If scrollbar is set to false, this will change the icon for scrolling down.
   */
  downIcon?: ReactNode;
}

const SelectContent = forwardRef<HTMLDivElement, SelectContentProps>(
  (
    {
      children,
      className,
      position = "popper",
      sideOffset = 8,
      upIcon = <ArrowUpIcon />,
      downIcon = <ArrowDownIcon />,
      style,
      onCloseAutoFocus,
      ...props
    },
    ref
  ) => {
    return (
      <RxSelect.Content
        {...props}
        ref={ref}
        position={position}
        sideOffset={sideOffset}
        className={cn(
          "max-h-72 p-1 font-semibold rounded-md shadow overflow-hidden  border dark:bg-[#18181b] bg-[#fafafa] border-gray-600/40",
          className
        )}
        style={{
          minWidth: "10rem",
          ...style
        }}
        onCloseAutoFocus={e => {
          e.preventDefault();
          onCloseAutoFocus?.(e);
        }}
      >
        <RxSelect.ScrollUpButton className="flex justify-center items-center py-1">
          {upIcon}
        </RxSelect.ScrollUpButton>
        <RxSelect.Viewport>{children}</RxSelect.Viewport>
        <RxSelect.ScrollDownButton className="flex justify-center items-center py-1">
          {downIcon}
        </RxSelect.ScrollDownButton>
      </RxSelect.Content>
    );
  }
);

export type SelectItemProps = RxSelect.SelectItemProps;

const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <RxSelect.Item
        {...props}
        ref={ref}
        className={cn(
          "w-full h-full flex justify-between items-center p-1 rounded cursor-pointer dark:focus:bg-gray-300/20 focus:bg-gray-500/20 outline-none",
          className
        )}
      >
        <RxSelect.ItemText>{children}</RxSelect.ItemText>
        <RxSelect.ItemIndicator>
          <CheckIcon className="ml-2" />
        </RxSelect.ItemIndicator>
      </RxSelect.Item>
    );
  }
);

export type SelectSeparatorProps = RxSelect.SelectSeparatorProps;

const SelectSeparator = forwardRef<HTMLDivElement, SelectSeparatorProps>(
  ({ className, style, ...props }, ref) => {
    return (
      <RxSelect.Separator
        {...props}
        ref={ref}
        className={cn("m-1 dark:bg-gray-tr-dark bg-gray-tr-light", className)}
        style={{ height: "1px", ...style }}
      />
    );
  }
);

Select.Trigger = SelectTrigger;
Select.Content = SelectContent;
Select.Item = SelectItem;
Select.Group = RxSelect.Group;
Select.Label = RxSelect.Label;
Select.Separator = SelectSeparator;

export { Select };
