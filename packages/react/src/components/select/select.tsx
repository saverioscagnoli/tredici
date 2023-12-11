import { c, cn } from "../../lib";
import { ArrowDownIcon, ArrowUpIcon, CheckIcon } from "@radix-ui/react-icons";
import * as RxSelect from "@radix-ui/react-select";
import React, {
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes,
  forwardRef,
  useEffect
} from "react";
import { ColorScheme } from "../../types";

interface SelectComponent
  extends ForwardRefExoticComponent<
    RxSelect.SelectProps & RefAttributes<HTMLDivElement>
  > {
  Trigger: typeof SelectTrigger;
  Body: typeof SelectBody;
  Item: typeof SelectItem;
  Group: typeof RxSelect.Group;
  Label: typeof RxSelect.Label;
  Separator: typeof SelectSeparator;
}

const Select = forwardRef<HTMLDivElement, RxSelect.SelectProps>(
  ({ children, open, value, ...props }, ref) => {
    return (
      //@ts-ignore
      <RxSelect.Root {...props} ref={ref}>
        {children}
      </RxSelect.Root>
    );
  }
) as SelectComponent;

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
      gray: "dark:hover:outline-fafafa hover:outline-18181b dark:focus:outline-gray-400 focus:outline-gray-500"
    }
  }
);

interface SelectTriggerProps extends RxSelect.SelectTriggerProps {
  colorScheme?: ColorScheme;
  icon?: ReactNode | string;
}

const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(
  (
    {
      className,
      colorScheme = "amethyst",
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

interface SelectBodyProps extends RxSelect.SelectContentProps {
  scrollbar?: boolean;
  upIcon?: ReactNode;
  downIcon?: ReactNode;
}

const SelectBody = forwardRef<HTMLDivElement, SelectBodyProps>(
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

const SelectItem = forwardRef<HTMLDivElement, RxSelect.SelectItemProps>(
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

const SelectSeparator = forwardRef<
  HTMLDivElement,
  RxSelect.SelectSeparatorProps
>(({ className, style, ...props }, ref) => {
  return (
    <RxSelect.Separator
      {...props}
      ref={ref}
      className={cn("m-1 dark:bg-gray-tr-dark bg-gray-tr-light", className)}
      style={{ height: "1px", ...style }}
    />
  );
});

Select.Trigger = SelectTrigger;
Select.Body = SelectBody;
Select.Item = SelectItem;
Select.Group = RxSelect.Group;
Select.Label = RxSelect.Label;
Select.Separator = SelectSeparator;

export { Select };
