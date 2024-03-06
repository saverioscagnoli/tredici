import { cn } from "@/lib/utils";
import {
  ArrowDownIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from "@radix-ui/react-icons";
import * as RxSelect from "@radix-ui/react-select";
import { cva } from "class-variance-authority";
import React, { createContext, forwardRef, useContext } from "react";

import "./select.css";

type SelectColorScheme =
  | "purple"
  | "teal"
  | "green"
  | "red"
  | "yellow"
  | "blue"
  | "b/w"
  | "gray";

type SelectSize = "sm" | "md" | "lg";

type SelectContextValue = {
  colorScheme: SelectColorScheme;
  size: SelectSize;
};

const SelectContext = createContext<SelectContextValue | null>(null);

const useSelectContext = () => {
  const ctx = useContext(SelectContext);

  if (!ctx) {
    throw new Error(
      "Select compound components must be rendered within the Select component"
    );
  }

  return ctx;
};

type SelectComponent = React.FC<SelectProps> & {
  Trigger: typeof SelectTrigger;
  Value: typeof SelectValue;
  Content: typeof SelectContent;
  Item: typeof SelectItem;
  Group: typeof SelectGroup;
  Label: typeof SelectLabel;
  Separator: typeof SelectSeparator;
};

type SelectProps = RxSelect.SelectProps & {
  colorScheme?: SelectColorScheme;
  size?: SelectSize;
};

const Select: SelectComponent = ({
  colorScheme = "purple",
  size = "md",
  ...props
}) => {
  return (
    <SelectContext.Provider value={{ colorScheme, size }}>
      <RxSelect.Root {...props} />
    </SelectContext.Provider>
  );
};

const selectTriggerVariants = cva(
  [
    "flex justify-between items-center gap-16",
    "px-2",
    "font-semibold",
    "text-nowrap",
    "shadow",
    "select-none outline-none",
    "border border-gray-500/75",
    "outline-none",
    ["data-[disabled]:opacity-50", "data-[disabled]:pointer-events-none"]
  ],
  {
    variants: {
      colorScheme: {
        purple: [
          "focus:outline-purple-500",
          "dark:focus:outline-purple-400",
          "data-[state='open']:outline-purple-500",
          "data-[state='open']:dark:outline-purple-400"
        ],
        teal: [
          "focus:outline-teal-500",
          "dark:hover:outline-teal-400",
          "data-[state='open']:outline-teal-500",
          "data-[state='open']:dark:outline-teal-400"
        ],
        green: [
          "focus:outline-green-500",
          "dark:focus:outline-green-400",
          "data-[state='open']:outline-green-500",
          "data-[state='open']:dark:outline-green-400"
        ],
        red: [
          "focus:outline-red-500",
          "dark:focus:outline-red-400",
          "data-[state='open']:outline-red-500",
          "data-[state='open']:dark:outline-red-400"
        ],
        yellow: [
          "focus:outline-yellow-500",
          "dark:focus:outline-yellow-400",
          "data-[state='open']:outline-yellow-500",
          "data-[state='open']:dark:outline-yellow-400"
        ],
        blue: [
          "focus:outline-blue-500",
          "dark:focus:outline-blue-400",
          "data-[state='open']:outline-blue-500",
          "data-[state='open']:dark:outline-blue-400"
        ],
        "b/w": [
          "focus:outline-dark",
          "dark:focus:outline-light",
          "data-[state='open']:outline-dark",
          "data-[state='open']:dark:outline-light"
        ],
        gray: [
          "focus:outline-gray-600/75",
          "dark:focus:outline-gray-400",
          "data-[state='open']:outline-gray-600/75",
          "data-[state='open']:dark:outline-gray-400"
        ]
      },
      size: {
        sm: "h-6 px-1 py-1 text-sm rounded",
        md: "h-8 px-1.5 rounded-md",
        lg: "h-10 px-2 text-lg rounded-lg"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);

type SelectTriggerProps = RxSelect.SelectTriggerProps & {
  colorScheme?: SelectColorScheme;
  size?: SelectSize;
};

const SelectTrigger = forwardRef<HTMLButtonElement, SelectTriggerProps>(
  ({ children, className, style, colorScheme, size, ...props }, ref) => {
    const { colorScheme: rootColorScheme, size: rootSize } = useSelectContext();

    return (
      <RxSelect.Trigger
        className={selectTriggerVariants({
          className,
          colorScheme: colorScheme ?? rootColorScheme,
          size: size ?? rootSize
        })}
        style={{
          outlineOffset: -1,
          ...style
        }}
        {...props}
        ref={ref}
      >
        {children}
        <RxSelect.Icon>
          <ArrowDownIcon />
        </RxSelect.Icon>
      </RxSelect.Trigger>
    );
  }
);

type SelectValueProps = RxSelect.SelectValueProps;

const SelectValue = RxSelect.Value;

type SelectContentProps = RxSelect.SelectContentProps;

const SelectContent = forwardRef<HTMLDivElement, SelectContentProps>(
  (
    { children, className, position = "popper", sideOffset = 4, ...props },
    ref
  ) => {
    const { size } = useSelectContext();

    const rounded = { sm: "rounded", md: "rounded-md", lg: "rounded-md" }[size];

    return (
      <RxSelect.Portal>
        <RxSelect.Content
          className={cn(
            "w-[var(--radix-select-trigger-width)]",
            "border border-gray-500/75",
            rounded,
            "overflow-hidden",
            ["bg-light", "dark:bg-dark"],
            "cursor-default",
            "select-content",
            className
          )}
          position={position}
          sideOffset={sideOffset}
          {...props}
          ref={ref}
        >
          <RxSelect.ScrollUpButton className="flex justify-center items-center py-0.5">
            <ChevronUpIcon />
          </RxSelect.ScrollUpButton>
          <RxSelect.Viewport className="p-1" children={children} />
          <RxSelect.ScrollDownButton className="flex justify-center items-center py-0.5">
            <ChevronDownIcon />
          </RxSelect.ScrollDownButton>
        </RxSelect.Content>
      </RxSelect.Portal>
    );
  }
);

const selectItemVariants = cva(
  [
    "flex justify-between items-center",
    "text-nowrap",
    "outline-none",
    ["data-[disabled]:opacity-30", "data-[disabled]:pointer-events-none"]
  ],
  {
    variants: {
      colorScheme: {
        purple: [
          [
            ["focus:bg-purple-500", "dark:focus:bg-purple-400"],
            ["focus:text-light", "dark:focus:text-dark"]
          ]
        ],
        teal: [
          [
            ["focus:bg-teal-500", "dark:focus:bg-teal-400"],
            ["focus:text-light", "dark:focus:text-dark"]
          ]
        ],
        green: [
          [
            ["focus:bg-green-500", "dark:focus:bg-green-400"],
            ["focus:text-light", "dark:focus:text-dark"]
          ]
        ],
        red: [
          [
            ["focus:bg-red-500", "dark:focus:bg-red-400"],
            ["focus:text-light", "dark:focus:text-dark"]
          ]
        ],
        yellow: [
          [
            ["focus:bg-yellow-500", "dark:focus:bg-yellow-400"],
            ["focus:text-light", "dark:focus:text-dark"]
          ]
        ],
        blue: [
          [
            ["focus:bg-blue-500", "dark:focus:bg-blue-400"],
            ["focus:text-light", "dark:focus:text-dark"]
          ]
        ],
        "b/w": [
          [
            ["focus:bg-dark", "dark:focus:bg-light"],
            ["focus:text-light", "dark:focus:text-dark"]
          ]
        ],
        gray: ["focus:bg-gray-400/25", "dark:focus:bg-gray-500/30"]
      },
      size: {
        sm: "h-6 px-1 py-1 text-sm rounded-sm",
        md: "h-7 px-1.5 rounded",
        lg: "h-9 px-2 text-lg rounded"
      }
    },
    defaultVariants: {
      colorScheme: "purple"
    }
  }
);

type SelectItemProps = RxSelect.SelectItemProps & {
  colorScheme?: SelectColorScheme;
  size?: SelectSize;
};

const SelectItem = forwardRef<HTMLDivElement, SelectItemProps>(
  ({ children, className, colorScheme, size, ...props }, ref) => {
    const { colorScheme: rootColorScheme, size: rootSize } = useSelectContext();

    return (
      <RxSelect.Item
        className={selectItemVariants({
          className,
          colorScheme: colorScheme ?? rootColorScheme,
          size: size ?? rootSize
        })}
        {...props}
        ref={ref}
      >
        <RxSelect.ItemText children={children} />
        <RxSelect.ItemIndicator>
          <CheckIcon />
        </RxSelect.ItemIndicator>
      </RxSelect.Item>
    );
  }
);

type SelectGroupProps = RxSelect.SelectGroupProps;

const SelectGroup = RxSelect.Group;

const selectLabelVariants = cva(["pl-3 py-0.5 pb-1", "font-semibold"], {
  variants: {
    size: {
      sm: "text-sm",
      md: "text-sm",
      lg: "text-base"
    }
  },
  defaultVariants: {
    size: "md"
  }
});

type SelectLabelProps = RxSelect.SelectLabelProps;

const SelectLabel = forwardRef<HTMLDivElement, SelectLabelProps>(
  ({ className, ...props }, ref) => {
    const { size } = useSelectContext();

    return (
      <RxSelect.Label
        className={selectLabelVariants({ className, size })}
        {...props}
        ref={ref}
      />
    );
  }
);

type SelectSeparatorProps = RxSelect.SelectSeparatorProps;

const SelectSeparator = forwardRef<HTMLDivElement, SelectSeparatorProps>(
  ({ className, ...props }, ref) => {
    return (
      <RxSelect.Separator
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

Select.Trigger = SelectTrigger;
Select.Value = SelectValue;
Select.Content = SelectContent;
Select.Item = SelectItem;
Select.Group = SelectGroup;
Select.Label = SelectLabel;
Select.Separator = SelectSeparator;

Select.displayName = RxSelect.Root.displayName;

export { Select };
export type {
  SelectProps,
  SelectTriggerProps,
  SelectValueProps,
  SelectContentProps,
  SelectItemProps,
  SelectGroupProps,
  SelectLabelProps
};
