import React, { useState } from "react";
import * as RxSlider from "@radix-ui/react-slider";
import { c } from "../../lib";
import { ColorScheme } from "../../types";
import { forwardRef } from "react";
import { useTheme } from "../tredici";
import { Tooltip } from "../tooltip";

const fill = c(" h-full absolute rounded-full", {
  colorScheme: {
    amethyst: "dark:bg-amethyst-400 bg-amethyst-500",
    teal: "dark:bg-teal-400 bg-teal-500",
    green: "dark:bg-green-400 bg-green-500",
    crimson: "dark:bg-crimson-400 bg-crimson-500",
    yellow: "dark:bg-yellow-400 bg-yellow-500",
    blue: "dark:bg-blue-400 bg-blue-500",
    pink: "dark:bg-pink-400 bg-pink-500",
    "b/w": "dark:bg-fafafa bg-18181b"
  }
});

export interface SliderProps extends RxSlider.SliderProps {
  /**
   * The color scheme of the slider.
   * @see ColorScheme
   * @default useTheme().defaultColorScheme
   */
  colorScheme?: ColorScheme;
}

const Slider = forwardRef<HTMLSpanElement, SliderProps>(
  (
    {
      className,
      colorScheme = useTheme().defaultColorScheme,
      value,
      defaultValue = [0],
      onValueChange,
      onMouseEnter,
      onMouseLeave,
      ...props
    },
    ref
  ) => {
    const [open, setOpen] = useState<boolean>(false);
    const [internalValue, setInternalValue] = useState<number[]>(defaultValue);

    return (
      <RxSlider.Root
        {...props}
        ref={ref}
        className="w-48 h-5 relative flex items-center select-none touch-none"
        value={value ?? internalValue}
        onValueChange={onValueChange ?? setInternalValue}
        onMouseEnter={evt => {
          setOpen(true);
          onMouseEnter?.(evt);
        }}
        onMouseLeave={evt => {
          setOpen(false);
          onMouseLeave?.(evt);
        }}
      >
        <RxSlider.Track className="h-1.5 relative flex-1 rounded-full dark:bg-gray-300/20 bg-gray-600/20">
          <RxSlider.Range className={fill({ className, colorScheme })} />
        </RxSlider.Track>
        <Tooltip open={open} content={`${value ?? internalValue}`}>
          <RxSlider.Thumb className="block w-4 h-4 bg-fafafa dark:outline-none outline outline-18181b outline-1 rounded-full cursor-pointer" />
        </Tooltip>
      </RxSlider.Root>
    );
  }
);

export { Slider };
