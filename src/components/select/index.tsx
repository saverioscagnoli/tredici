import { cn } from "@lib/utils";
import { ArrowDownIcon, CheckIcon } from "@radix-ui/react-icons";
import * as RxSelect from "@radix-ui/react-select";
import * as RxScrollArea from "@radix-ui/react-scroll-area";
import { ForwardRefExoticComponent, RefAttributes, forwardRef } from "react";
import "./select.css";

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
  ({ children, ...props }, ref) => {
    return (
      //@ts-ignore
      <RxSelect.Root {...props} ref={ref}>
        {children}
      </RxSelect.Root>
    );
  }
) as SelectComponent;

const SelectTrigger = forwardRef<
  HTMLButtonElement,
  RxSelect.SelectTriggerProps
>(({ className, placeholder, ...props }, ref) => {
  return (
    <RxSelect.Trigger
      {...props}
      ref={ref}
      className={cn(
        className,
        "flex justify-between items-center px-3 min-w-fit w-48 max-w-full h-9 rounded font-semibold border dark:border-gray-tr-dark border-gray-tr-light shadow hover:outline hover:outline-2 hover:outline-violet-light focus:outline-none"
      )}
    >
      <RxSelect.Value placeholder={placeholder} />
      <RxSelect.Icon className="ml-2">
        <ArrowDownIcon />
      </RxSelect.Icon>
    </RxSelect.Trigger>
  );
});

const SelectBody = forwardRef<HTMLDivElement, RxSelect.SelectContentProps>(
  (
    {
      children,
      className,
      position = "popper",
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
        className={cn(
          "min-h-fit max-h-60 max-w-full p-1 mt-2 font-semibold rounded shadow overflow-auto border dark:bg-[#252525] bg-white dark:border-gray-tr-dark border-gray-tr-light",
          className,
          "select-13-scrollbar"
        )}
        style={{
          minWidth: "12rem",
          ...style
        }}
        onCloseAutoFocus={e => {
          e.preventDefault();
          onCloseAutoFocus?.(e);
        }}
      >
        <RxScrollArea.Root type="auto">
          <RxSelect.Viewport>
            <RxScrollArea.Viewport>{children}</RxScrollArea.Viewport>
          </RxSelect.Viewport>
        </RxScrollArea.Root>
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
          className,
          "w-full h-full flex justify-between items-center p-1 rounded cursor-pointer dark:focus:bg-gray-tr-dark focus:bg-gray-tr-light outline-none"
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
