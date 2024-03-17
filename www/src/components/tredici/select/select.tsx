import * as RxSelect from "@radix-ui/react-select";
import { cn } from "@lib";
import {
  ArrowDownIcon,
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from "@radix-ui/react-icons";
import { cva } from "class-variance-authority";
import React, { createContext, forwardRef, useContext } from "react";

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

import "./select.css";

type SelectColorScheme =
  | "plum"
  | "teal"
  | "grass"
  | "red"
  | "amber"
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
  colorScheme = "plum",
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
    "flex justify-between items-center",
    "px-2",
    "font-semibold",
    "text-nowrap",
    "shadow",
    "select-none outline-none",
    "border border-[--gray-7]",
    "outline-none",
    "transition-colors",
    "focus:ring-2",
    "data-[state='open']:ring-2",
    "focus:border-transparent",
    "data-[state='open']:border-transparent",
    ["data-[disabled]:opacity-50", "data-[disabled]:pointer-events-none"]
  ],
  {
    variants: {
      colorScheme: {
        plum: ["focus:ring-[--plum-9]", "data-[state='open']:ring-[--plum-9]"],
        teal: ["focus:ring-[--teal-9]", "data-[state='open']:ring-[--teal-9]"],
        grass: [
          "focus:ring-[--grass-9]",
          "data-[state='open']:ring-[--grass-9]"
        ],
        red: ["focus:ring-[--red-9]", "data-[state='open']:ring-[--red-9]"],
        amber: [
          "focus:ring-[--amber-9]",
          "data-[state='open']:ring-[--amber-9]"
        ],
        blue: ["focus:ring-[--blue-9]", "data-[state='open']:ring-[--blue-9]"],
        "b/w": [
          "focus:ring-[--slate-12]",
          "data-[state='open']:ring-[--slate-12]"
        ],
        gray: [
          "focus:ring-[--slate-12]",
          "data-[state='open']:ring-[--slate-12]"
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

const selectContentVariants = cva(
  [
    "w-[var(--radix-select-trigger-width)]",
    "bg-[--slate-1]",
    "border border-[--gray-7]",
    "overflow-hidden",
    "cursor-default",
    "select-content"
  ],
  {
    variants: {
      size: {
        sm: "rounded",
        md: "rounded-md",
        lg: "rounded-md"
      }
    },
    defaultVariants: {
      size: "md"
    }
  }
);

type SelectContentProps = RxSelect.SelectContentProps;

const SelectContent = forwardRef<HTMLDivElement, SelectContentProps>(
  (
    { children, className, position = "popper", sideOffset = 4, ...props },
    ref
  ) => {
    const { size } = useSelectContext();

    return (
      <RxSelect.Portal>
        <RxSelect.Content
          className={selectContentVariants({ className, size })}
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
        plum: [["focus:bg-[--plum-9]", ["focus:text-[--slate-1]"]]],
        teal: [["focus:bg-[--teal-9]", "focus:text-[--slate-1]"]],
        grass: [["focus:bg-[--grass-9]", "focus:text-[--slate-1]"]],
        red: [["focus:bg-[--red-9]", "focus:text-[--slate-1]"]],
        amber: [["focus:bg-[--amber-9]", "focus:text-[--slate-1]"]],
        blue: [["focus:bg-[--blue-9]", "focus:text-[--slate-1]"]],
        "b/w": [["focus:bg-[--slate-12]", "focus:text-[--slate-1]"]],
        gray: ["focus:bg-[--gray-4]", "dark:focus:bg-[--gray-5]"]
      },
      size: {
        sm: "h-6 px-1 py-1 text-sm rounded-sm",
        md: "h-7 px-1.5 rounded",
        lg: "h-9 px-2 text-lg rounded"
      }
    },
    defaultVariants: {
      colorScheme: "plum"
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
        className={cn("h-[1px] my-1", "bg-[--gray-7]", className)}
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
