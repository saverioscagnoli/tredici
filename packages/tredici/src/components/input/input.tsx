import { cva } from "class-variance-authority";
import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  Dispatch,
  SetStateAction,
  forwardRef
} from "react";

type InputColorScheme =
  | "purple"
  | "teal"
  | "green"
  | "red"
  | "yellow"
  | "blue"
  | "b/w"
  | "gray";

type InputSize = "sm" | "md" | "lg";

const inputVariants = cva(
  [
    "w-full",
    "bg-transparent",
    "font-semibold",
    "border border-gray-500/75",
    ["caret-black", "dark:caret-white"],
    "outline-none"
  ],
  {
    variants: {
      colorScheme: {
        purple: ["focus:outline-purple-500", "dark:focus:outline-purple-400"],
        teal: ["focus:outline-teal-500", "dark:focus:outline-teal-400"],
        green: ["focus:outline-green-500", "dark:focus:outline-green-400"],
        red: ["focus:outline-red-500", "dark:focus:outline-red-400"],
        yellow: ["focus:outline-yellow-500", "dark:focus:outline-yellow-400"],
        blue: ["focus:outline-blue-500", "dark:focus:outline-blue-400"],
        "b/w": ["focus:outline-dark", "dark:focus:outline-light"],
        gray: ["focus:outline-gray-600/75", "dark:focus:outline-gray-400"]
      },
      size: {
        sm: "h-6 px-1 py-1 text-sm rounded",
        md: "h-8 px-1.5 rounded-md",
        lg: "h-10 px-2 text-lg rounded-lg"
      }
    },
    defaultVariants: {
      colorScheme: "purple",
      size: "md"
    }
  }
);

type InputProps = Omit<ComponentPropsWithoutRef<"input">, "size"> & {
  htmlSize?: number;
  colorScheme?: InputColorScheme;
  size?: InputSize;
  onValueChange?: Dispatch<SetStateAction<string>>;
};

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      htmlSize,
      style,
      onChange,
      onValueChange,
      colorScheme = "purple",
      size = "md",
      ...props
    },
    ref
  ) => {
    const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
      onValueChange?.(evt.target.value);
      onChange?.(evt);
    };

    return (
      <input
        size={htmlSize}
        className={inputVariants({
          className,
          colorScheme,
          size
        })}
        style={{ outlineOffset: -1, ...style }}
        onChange={handleChange}
        {...props}
        ref={ref}
      />
    );
  }
);

export { Input };
export type { InputProps };
